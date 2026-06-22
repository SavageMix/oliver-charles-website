import Image from "next/image";
import { ArrowRight, Check, Phone, MapPin, Calendar, Ruler } from "lucide-react";
import { generateCanonicalMetadata } from "../../lib/metadata";
import ProjectModal from "./ProjectModal";

export const metadata = generateCanonicalMetadata("/services/glass-balustrades", {
  title: "Glass Balustrade Installation | Frameless & Framed | Amersham",
  description: "Stunning glass balustrade installations for balconies, decks & stairs. Toughened safety glass, BS compliant. Free quotes in Buckinghamshire."
});

const projects = [
  {
    id: 4,
    title: "Glass Balustrade Balcony",
    slug: "glass-balustrade-balcony-beaconsfield",
    location: "Beaconsfield, HP9",
    date: "September 2025",
    size: "18m",
    description:
      "Stunning frameless glass balustrade installation for a first-floor balcony, providing safety without compromising the panoramic countryside views.",
    features: [
      "Frameless glass panels",
      "Stainless steel posts",
      "BS compliant installation",
      "Easy-clean coating",
    ],
    images: [
      "/images/glass-balustrade-beaconsfield-balcony-1.jpg",
      "/images/glass-balustrade-beaconsfield-view-2.jpg",
    ],
    testimonial: {
      quote:
        "Professional installation from start to finish. The glass balustrade looks fantastic and we can finally enjoy our view.",
      author: "Michael & Linda Foster",
      location: "Beaconsfield"
    },
  },
  {
    id: 3,
    title: "Garden Transformation",
    slug: "garden-transformation-bourne-end",
    location: "Bourne End, SL8",
    date: "February 2024",
    size: "75m²",
    description:
      "A total garden refurbishment featuring a retaining wall with glass balustrade, providing safety while maintaining an open feel.",
    features: [
      "Porcelain patio",
      "Composite decking",
      "Glass balustrade",
      "Retaining wall brickwork",
      "Garden lighting",
    ],
    images: [
      "/images/projects/project-3/garden-transformation-bourne-end-before-after-1.jpg",
      "/images/projects/project-3/garden-transformation-bourne-end-glass-balustrade-4.jpg",
      "/images/projects/project-3/garden-transformation-bourne-end-detail-6.jpg",
      "/images/projects/project-3/garden-transformation-bourne-end-patio-2.jpg",
      "/images/projects/project-3/garden-transformation-bourne-end-wall-5.jpg",
      "/images/projects/project-3/garden-transformation-bourne-end-decking-3.jpg",
    ],
    testimonial: {
      quote:
        "The glass balustrade on the retaining wall looks amazing! It provides safety while keeping the garden feeling open.",
      author: "Hannah",
      location: "Bourne End"
    },
  },
];

const features = [
  "Frameless and semi-frameless options",
  "Toughened safety glass to BS standards",
  "Stainless steel or powder-coated posts",
  "Easy-clean coating available",
  "Internal and external applications",
  "Building regulation compliant",
];

const areas = [
  "Amersham",
  "Chesham",
  "Beaconsfield",
  "Chalfont St Giles",
  "Little Chalfont",
  "Great Missenden",
  "High Wycombe",
  "Bourne End",
];

export default function GlassBalustradesPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.olivercharlesgardendesign.co.uk/services/' },
              { '@type': 'ListItem', position: 3, name: 'Glass Balustrades', item: 'https://www.olivercharlesgardendesign.co.uk/services/glass-balustrades/' }
            ]
          })
        }}
      />

      {/* Schema.org Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Glass Balustrade Installation',
            description: 'Elegant glass balustrades that provide safety without sacrificing views. Perfect for balconies, terraces, and garden levels in Amersham, Chesham & Beaconsfield.',
            provider: {
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
            },
            areaServed: areas.map((area) => ({
              '@type': 'City',
              name: area
            })),
            serviceType: 'Glass Balustrade Installation',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '50',
              bestRating: '5'
            }
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/glass-balustrade.webp"
            alt="Frameless glass balustrade installation on balcony in Beaconsfield"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-overlay-services" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.1] mb-6">
              Glass Balustrade<br />
              Installation
            </h1>
            <div className="w-12 h-0.5 bg-[var(--color-bronze)] mb-6" />
            <p className="text-xl sm:text-2xl text-[var(--color-bronze)] font-medium mb-6">
              Amersham & Buckinghamshire
            </p>
            <p className="text-base sm:text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
              Elegant glass balustrades that provide safety without sacrificing views. Perfect for balconies, terraces, and garden levels in Amersham, Chesham & Beaconsfield.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact/#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-dark)] text-white font-medium transition-colors"
              >
                GET A FREE QUOTE
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+447837666766"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#173026]/60 border border-[var(--color-bronze)]/40 text-white font-medium hover:bg-[#173026]/80 transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                +44 7837 666766
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-stone)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[var(--color-text)] mb-6">
                Why Choose Glass Balustrades?
              </h2>
              <p className="text-[var(--color-text-light)] text-lg mb-8">
                Create stunning visual impact with our premium glass balustrade systems. Whether for a balcony, terrace, or garden retaining wall, glass provides unobstructed views while meeting all safety requirements.
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-[var(--color-bronze)]" />
                    <span className="text-[var(--color-text)] font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
              <Image
                src="/images/glass-balustrade.webp"
                alt="Frameless glass balustrade installation on balcony in Beaconsfield"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-stone)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--color-bronze)] uppercase mb-4">
              Our Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[var(--color-forest)] mb-4">
              Our Glass Balustrade Projects
            </h2>
            <p className="text-[var(--color-text-light)]">
              Browse our recent glass balustrade installations across Buckinghamshire.
            </p>
          </div>

          <ProjectModal projects={projects} />
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 lg:py-20 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-serif font-medium text-[var(--color-text)] mb-4">
              Glass Balustrade Installation Areas
            </h2>
            <p className="text-[var(--color-text-light)]">
              We install glass balustrades throughout Buckinghamshire and surrounding areas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-[var(--color-stone)] text-[var(--color-text)] text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-[var(--color-forest)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white mb-4">
            Ready for Your Glass Balustrade?
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            Get a free, no-obligation quote. We serve Amersham, Chesham, Beaconsfield and all surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-dark)] text-white font-medium transition-colors"
            >
              Request Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+447837666766"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none border border-white/40 text-white hover:bg-white/10 font-medium transition-colors"
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
