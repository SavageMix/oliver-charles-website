import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import sgMail from '@sendgrid/mail';

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
    ? [process.env.FRONTEND_URL || 'https://olivercharlesgardendesign.com'] 
    : ['http://localhost:3000', 'http://localhost:5173'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Security: Helmet - sets security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https://maps.googleapis.com"],
      frameSrc: ["'self'", "https://www.google.com", "https://www.google.co.uk"],
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

// SendGrid configuration
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'enquiries@olivercharles.construction';
if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

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
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.result && data.result.reviews) {
      // Sort by newest first and take top 6
      const sortedReviews = data.result.reviews
        .sort((a, b) => b.time - a.time)
        .slice(0, 6);
      res.json(sortedReviews);
    } else {
      res.json([]);
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// Contact form endpoint with stricter rate limiting
app.post('/api/contact', contactLimiter, express.json(), async (req, res) => {
  const { firstName, lastName, phone, service, message } = req.body;
  
  // Validation
  if (!firstName || !lastName || !phone || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields' });
  }
  
  // Phone number validation (UK format)
  const phoneRegex = /^[\d\s\-+()]{10,20}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: 'Please enter a valid phone number' });
  }
  
  const fullName = `${firstName} ${lastName}`;
  
  // If SendGrid is configured, send email
  if (SENDGRID_API_KEY) {
    try {
      const msg = {
        to: BUSINESS_EMAIL,
        from: BUSINESS_EMAIL, // Must be verified in SendGrid
        subject: `New Enquiry from ${fullName}`,
        text: `
Name: ${fullName}
Phone: ${phone}
Service: ${service || 'Not specified'}

Message:
${message}
        `,
        html: `
<h2>New Website Enquiry</h2>
<p><strong>Name:</strong> ${fullName}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Service:</strong> ${service || 'Not specified'}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };
      
      await sgMail.send(msg);
      console.log(`Contact form submitted by ${fullName}`);
      res.json({ success: true, message: 'Thank you! We will contact you soon.' });
    } catch (error) {
      console.error('SendGrid error:', error);
      res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
  } else {
    // SendGrid not configured - just log it
    console.log('Contact form submission (SendGrid not configured):');
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
