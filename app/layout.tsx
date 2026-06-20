import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Script from "next/script";
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oliver Charles Garden Design & Build | Landscaping Amersham",
  description: "Family-Owned garden design and build specialists in Amersham, Buckinghamshire. Expert installation of porcelain patios, composite decking & glass balustrades. Free quotes, 5-year guarantee.",
  keywords: "garden design, landscaping, porcelain patio, composite decking, glass balustrade, Amersham, Buckinghamshire, HP6, HP7",
  alternates: {
    canonical: "https://www.olivercharlesgardendesign.co.uk",
  },
  openGraph: {
    title: "Oliver Charles Garden Design & Build",
    description: "Premium landscaping services in Amersham & Buckinghamshire",
    url: "https://www.olivercharlesgardendesign.co.uk",
    siteName: "Oliver Charles Garden Design",
    images: [{
      url: "https://www.olivercharlesgardendesign.co.uk/og-image.jpg",
      width: 1200,
      height: 630,
    }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliver Charles Garden Design & Build",
    description: "Premium landscaping services in Amersham & Buckinghamshire",
    images: ["https://www.olivercharlesgardendesign.co.uk/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "peIlLoA_JHK_k8SpjoMjDVBNIQjAZ75aZD4g8ymQO-k",
  },
};

// Schema.org LocalBusiness markup
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Oliver Charles Garden Design & Build LTD",
  "description": "Family-Owned garden design and build specialists in Amersham, Buckinghamshire. Expert installation of porcelain patios, composite decking & glass balustrades.",
  "url": "https://www.olivercharlesgardendesign.co.uk",
  "telephone": "+447837666766",
  "email": "info@ocgardendesign.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Suite 103, Unit 5, Chiltern business center, 63-65 Woodside Rd",
    "addressLocality": "Amersham",
    "addressRegion": "Buckinghamshire",
    "postalCode": "HP6 6AA",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.6755",
    "longitude": "-0.6076"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Amersham"
    },
    {
      "@type": "City",
      "name": "Chesham"
    },
    {
      "@type": "City",
      "name": "Beaconsfield"
    },
    {
      "@type": "City",
      "name": "Chalfont St Giles"
    },
    {
      "@type": "City",
      "name": "Little Chalfont"
    },
    {
      "@type": "City",
      "name": "Great Missenden"
    },
    {
      "@type": "City",
      "name": "Chorleywood"
    },
    {
      "@type": "City",
      "name": "High Wycombe"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Garden Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Porcelain Patio Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Composite Decking"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Glass Balustrades"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Garden Landscaping"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Garden Design"
        }
      }
    ]
  },
  "priceRange": "££",
  "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
  "image": "https://www.olivercharlesgardendesign.co.uk/og-image.jpg",
  "sameAs": [
    "https://www.google.com/maps/place/?q=place_id:ChIJJ--wA6YE_CIRI_NAoevhoAY",
    "https://www.facebook.com/OlivercharlesGardenDesign",
    "https://www.instagram.com/ocgardendesign.uk/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HCE862XXWG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HCE862XXWG');
          `}
        </Script>

        {/* Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18189121818"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18189121818');
          `}
        </Script>
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased font-body">
        <Navigation />
        {children}
        <Footer />
        
        {/* Cookie Consent Banner */}
        <div id="cookie-consent" className="fixed bottom-0 left-0 right-0 bg-[var(--color-forest)] text-white p-4 z-50 shadow-lg transform translate-y-full transition-transform duration-300">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/80">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              <a href="/privacy-policy/" className="text-[var(--color-bronze)] hover:underline ml-1">View our Privacy Policy</a>
            </p>
            <div className="flex gap-3">
              <button 
                id="cookie-decline"
                className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                Decline
              </button>
              <button 
                id="cookie-accept"
                className="px-6 py-2 bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-light)] text-[var(--color-forest)] text-sm font-semibold rounded-none transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
        
        <Script id="cookie-consent-script" strategy="lazyOnload">
          {`
            (function() {
              const consent = localStorage.getItem('cookie-consent');
              const banner = document.getElementById('cookie-consent');
              
              if (!consent) {
                setTimeout(() => {
                  banner.classList.remove('translate-y-full');
                }, 1000);
              }
              
              document.getElementById('cookie-accept').addEventListener('click', function() {
                localStorage.setItem('cookie-consent', 'accepted');
                banner.classList.add('translate-y-full');
              });
              
              document.getElementById('cookie-decline').addEventListener('click', function() {
                localStorage.setItem('cookie-consent', 'declined');
                banner.classList.add('translate-y-full');
              });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
