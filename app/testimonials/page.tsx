import { ArrowRight, Phone, Users, ShieldCheck, Award } from "lucide-react";
import { generateCanonicalMetadata } from "../lib/metadata";
import GoogleReviews from "./GoogleReviews";

export const metadata = generateCanonicalMetadata("/testimonials", {
  title: "Customer Reviews | Testimonials | Oliver Charles",
  description: "Read what our customers say about their garden transformations. 5-star rated landscaping company in Amersham & Buckinghamshire."
});

// Static testimonials for SEO (rendered in HTML immediately, used as fallback)
const staticTestimonials = [
  {
    quote: "The team at Oliver Charles Garden Design & Build have done a fantastic job on are patio. From start to Finnish they have been professional and hardworking. Couldn't recommend enough. We will definitely be using them again.",
    author: "David Quinton",
    location: "Bovingdon",
    rating: 5,
    project: "Porcelain Patio",
    googleReviewUrl: "https://maps.app.goo.gl/HzeAQYR1ESMJcy2Z7",
  },
  {
    quote: "Absolutely love our new garden! The Egyptian limestone with the herringbone pattern is stunning. The team worked tirelessly and the result is beyond what we imagined.",
    author: "Kaylee",
    location: "Beaconsfield",
    rating: 5,
    project: "Egyptian Limestone Patio",
  },
  {
    quote: "We couldn't be happier with our new garden. The team was professional, hardworking and the attention to detail was outstanding. The glass balustrade on the retaining wall looks amazing!",
    author: "Hannah",
    location: "Bourne End",
    rating: 5,
    project: "Garden Transformation",
  },
  {
    quote: "Oliver Charles completely transformed our tired garden into a beautiful outdoor living space. Professional service from start to finish. Highly recommend!",
    author: "Emma Richardson",
    location: "Chalfont St Giles",
    rating: 5,
    project: "Garden Transformation",
  },
  {
    quote: "The decking has transformed how we use our garden. The multi-level design gives us distinct areas for dining and relaxing. The glass balustrade gives us amazing views while keeping the kids safe.",
    author: "David Thompson",
    location: "Chesham",
    rating: 5,
    project: "Composite Decking",
  },
  {
    quote: "Professional installation from start to finish. The glass balustrade looks fantastic and we can finally enjoy our view without any obstruction.",
    author: "Michael & Linda Foster",
    location: "Beaconsfield",
    rating: 5,
    project: "Glass Balustrade",
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const stats = [
  { value: "5.0", label: "Google Rating", icon: GoogleIcon },
  { value: "50+", label: "Happy Clients", icon: Users },
  { value: "10+", label: "Years Experience", icon: ShieldCheck },
  { value: "5-Year", label: "Workmanship Guarantee", icon: Award },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      {/* BreadcrumbList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.olivercharlesgardendesign.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Testimonials', item: 'https://www.olivercharlesgardendesign.co.uk/testimonials/' }
            ]
          })
        }}
      />

      {/* Schema.org AggregateRating & Review Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '50',
              bestRating: '5',
              worstRating: '1',
              itemReviewed: {
                '@type': 'HomeAndConstructionBusiness',
                name: 'Oliver Charles Garden Design & Build',
                url: 'https://www.olivercharlesgardendesign.co.uk',
                telephone: '+447837666766',
                email: 'info@ocgardendesign.co.uk',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Suite 103, Unit 5, Chiltern business center, 63-65 Woodside Rd',
                  addressLocality: 'Amersham',
                  addressRegion: 'Buckinghamshire',
                  postalCode: 'HP6 6AA',
                  addressCountry: 'GB'
                },
                image: 'https://www.olivercharlesgardendesign.co.uk/og-image.jpg'
              }
            },
            ...staticTestimonials.map((t) => ({
              '@context': 'https://schema.org',
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: String(t.rating),
                bestRating: '5'
              },
              reviewBody: t.quote,
              author: {
                '@type': 'Person',
                name: t.author
              },
              itemReviewed: {
                '@type': 'HomeAndConstructionBusiness',
                name: 'Oliver Charles Garden Design & Build',
                url: 'https://www.olivercharlesgardendesign.co.uk'
              }
            }))
          ]),
        }}
      />

      {/* Hero */}
      <section className="py-24 bg-[var(--color-forest)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-[11px] tracking-[0.15em] uppercase text-[var(--color-bronze)] font-medium mb-4">
              Testimonials
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white mb-6">
              Customer Reviews
            </h1>
            <p className="text-lg text-white/70">
              Don&apos;t just take our word for it — see what our customers have to say
              about their garden transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 bg-[var(--color-stone)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)]">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center text-center py-6 px-4 first:pl-0 last:pr-0"
                >
                  <div className="text-4xl md:text-5xl font-serif text-[var(--color-bronze)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[var(--color-text)] text-sm font-medium mb-3">
                    {stat.label}
                  </div>
                  <Icon className="w-7 h-7 text-[var(--color-bronze)]" strokeWidth={1.5} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Client Component with fallback data */}
      <section className="py-24 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-[var(--color-text)] mb-4">
              Featured Testimonials
            </h2>
            <p className="text-[var(--color-text-light)]">
              Real feedback from our satisfied customers across Buckinghamshire
            </p>
          </div>

          <GoogleReviews fallbackTestimonials={staticTestimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-forest)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-medium text-white mb-4">
            Join Our Happy Customers
          </h2>
          <p className="text-white/70 mb-8">
            Ready to transform your outdoor space? Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-dark)] text-white font-medium rounded-none transition-colors"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+447837666766"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white hover:bg-white/10 font-medium rounded-none transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              +44 7837 666766
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
