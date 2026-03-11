import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Oliver Charles Garden Design & Build | Landscaping Amersham",
  description: "Family-run garden design and build specialists in Amersham, Buckinghamshire. Expert installation of porcelain patios, composite decking & glass balustrades. Free quotes, 5-year guarantee.",
  keywords: "garden design, landscaping, porcelain patio, composite decking, glass balustrade, Amersham, Buckinghamshire, HP6, HP7",
  openGraph: {
    title: "Oliver Charles Garden Design & Build",
    description: "Premium landscaping services in Amersham & Buckinghamshire",
    url: "https://www.olivercharlesgardendesign.com",
    siteName: "Oliver Charles Garden Design",
    images: [{
      url: "https://www.olivercharlesgardendesign.com/og-image.jpg",
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
    images: ["https://www.olivercharlesgardendesign.com/og-image.jpg"],
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
