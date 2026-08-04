import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { Resend } from 'resend';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security: Trust proxy (required for rate limiting behind reverse proxy)
app.set('trust proxy', 1);

// Security: CORS - only allow requests from your domain in production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL || 'https://www.olivercharlesgardendesign.co.uk'] 
    : ['http://localhost:3000', 'http://localhost:5173'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Security: Helmet - sets security headers
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com", "https://www.google-analytics.com", "https://googleads.g.doubleclick.net", "https://www.googleadservices.com"],
      imgSrc: ["'self'", "data:", "https:", "https://www.google-analytics.com", "https://www.googletagmanager.com", "https://googleads.g.doubleclick.net", "https://www.googleadservices.com"],
      connectSrc: isDev
        ? ["'self'", "http://localhost:3001", "https://maps.googleapis.com", "https://www.google-analytics.com", "https://www.googletagmanager.com", "https://ad.doubleclick.net", "https://www.google.com", "https://googleads.g.doubleclick.net", "https://www.googleadservices.com"]
        : ["'self'", "https://maps.googleapis.com", "https://www.google-analytics.com", "https://www.googletagmanager.com", "https://ad.doubleclick.net", "https://www.google.com", "https://googleads.g.doubleclick.net", "https://www.googleadservices.com"],
      frameSrc: ["'self'", "https://www.google.com", "https://www.google.co.uk", "https://googleads.g.doubleclick.net"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// Google Places API configuration
const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

// Explicitly serve sitemap and robots.txt for crawlers (bypass any potential issues)
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'sitemap.xml'), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
});

app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'robots.txt'), {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  });
});

// Resend configuration
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'info@ocgardendesign.co.uk';
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

// Rate limiting ONLY for API endpoints - not for static files
// Stricter rate limit for contact form (prevent spam)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // limit each IP to 10 contact form submissions per hour
  message: 'Too many contact form submissions from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Moderate rate limit for Google Reviews API
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 API requests per windowMs
  message: 'Too many API requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Health check endpoint (for monitoring) - NO RATE LIMIT
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Diagnostic endpoint for Google Reviews setup - NO RATE LIMIT
app.get('/api/reviews/status', async (req, res) => {
  const hasKey = !!GOOGLE_API_KEY;
  const hasPlaceId = !!PLACE_ID;
  
  if (!hasKey || !hasPlaceId) {
    return res.json({
      configured: false,
      hasApiKey: hasKey,
      hasPlaceId: hasPlaceId,
      message: 'GOOGLE_PLACES_API_KEY and/or GOOGLE_PLACE_ID environment variables are not set.'
    });
  }
  
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    res.json({
      configured: true,
      hasApiKey: true,
      hasPlaceId: true,
      googleStatus: data.status,
      googleErrorMessage: data.error_message || null,
      reviewCount: data.result?.reviews?.length || 0,
      placeName: data.result?.name || null,
    });
  } catch (error) {
    res.json({
      configured: true,
      hasApiKey: true,
      hasPlaceId: true,
      googleStatus: 'FETCH_ERROR',
      googleErrorMessage: error.message,
      reviewCount: 0,
    });
  }
});

// API endpoint to fetch Google reviews (with rate limiting)
app.get('/api/reviews', apiLimiter, async (req, res) => {
  // If no API key or Place ID is configured, return sample/demo data
  if (!GOOGLE_API_KEY || !PLACE_ID) {
    console.log('Google Places API not configured, returning demo reviews');
    return res.json([
      {
        author_name: "Demo Review - Configure API Key",
        rating: 5,
        text: "This is a demo review. To display your real Google reviews, please set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID environment variables.",
        relative_time_description: "Recently"
      }
    ]);
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,user_ratings_total,rating,formatted_address,name&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log('Google Places API response:', JSON.stringify({
      status: data.status,
      hasResult: !!data.result,
      name: data.result?.name,
      rating: data.result?.rating,
      userRatingsTotal: data.result?.user_ratings_total,
      reviewCount: data.result?.reviews?.length || 0,
      error_message: data.error_message || null
    }, null, 2));

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status, data.error_message || '');
      return res.status(502).json({
        error: 'Google Places API returned an error',
        googleStatus: data.status,
        googleErrorMessage: data.error_message || null
      });
    }

    if (data.result && data.result.reviews && data.result.reviews.length > 0) {
      // Sort by newest first and take top 6
      const sortedReviews = data.result.reviews
        .sort((a, b) => b.time - a.time)
        .slice(0, 6);
      res.json(sortedReviews);
    } else {
      console.log('No reviews found in Google Places API response for place:', PLACE_ID);
      res.json([]);
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// Contact form endpoint with stricter rate limiting
app.post('/api/contact', contactLimiter, express.json(), async (req, res) => {
  const { firstName, lastName, email, phone, service, postcode, message } = req.body;
  
  // Validation
  if (!firstName || !phone || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields' });
  }
  
  // Phone number validation (UK format)
  const phoneRegex = /^[\d\s\-+()]{10,20}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: 'Please enter a valid phone number' });
  }
  
  const fullName = lastName ? `${firstName} ${lastName}` : firstName;
  
  // If Resend is configured, send email
  if (resend) {
    try {
      const { data, error } = await resend.emails.send({
        from: BUSINESS_EMAIL,
        to: BUSINESS_EMAIL,
        subject: `New Enquiry from ${fullName}`,
        text: `Name: ${fullName}\nPhone: ${phone}\nService: ${service || 'Not specified'}\nLocation: ${postcode || 'Not specified'}\n\nMessage:\n${message}`,
        html: `<h2>New Website Enquiry</h2><p><strong>Name:</strong> ${fullName}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Service:</strong> ${service || 'Not specified'}</p><p><strong>Location:</strong> ${postcode || 'Not specified'}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
      });

      if (error) {
        console.error('Resend error:', error);
        res.status(500).json({ error: 'Failed to send email. Please try again later.' });
      } else {
        console.log(`Contact form submitted by ${fullName}`, data);
        res.json({ success: true, message: 'Thank you! We will contact you soon.' });
      }
    } catch (error) {
      console.error('Resend error:', error);
      res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
  } else {
    // Resend not configured - just log it
    console.log('Contact form submission (Resend not configured):');
    console.log({ fullName, phone, service, message });
    res.json({
      success: true,
      message: 'Thank you! We will contact you soon. (Email service not configured)',
      demo: true
    });
  }
});

// Serve static files from the dist directory - NO RATE LIMITING
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React routing, return all requests to React app - NO RATE LIMITING
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
  if (!GOOGLE_API_KEY || !PLACE_ID) {
    console.log('\n⚠️  Google Places API not configured.');
    console.log('Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID environment variables to display real reviews.\n');
  }
});
