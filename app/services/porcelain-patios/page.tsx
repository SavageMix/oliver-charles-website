import Image from "next/image";
import { ArrowRight, Check, Phone, MapPin, Calendar, Ruler } from "lucide-react";
import { generateCanonicalMetadata } from "../../lib/metadata";
import ProjectModal from "./ProjectModal";

export const metadata = generateCanonicalMetadata("/services/porcelain-patios", {
  title: "Porcelain Patio Installation | Amersham & Buckinghamshire",
  description: "Stunning porcelain patio installations in Amersham & Buckinghamshire. Frost-resistant, slip-proof, stain-proof. 10+ year lifespan. Free quotes."
});

const projects = [
  {
    id: 1,
    slug: "modern-porcelain-patio-hemel-hempstead",
    title: "Modern Porcelain Patio",
    location: "Hemel Hempstead, HP3",
    date: "July 2024",
    size: "90m²",
    description:
      "A stunning 90m² modern porcelain patio installation featuring Kandla grey tiles with elegant two-tone border detailing. The project included professionally recessed manholes and seamless integration with bi-fold doors.",
    features: [
      "Kandla grey porcelain tiles",
      "Recessed manholes",
      "Two-tone border detail",
      "90m² installation",
      "Bi-fold door integration",
    ],
    images: [
      "/images/projects/project-11/porcelain-patio-hemel-hempstead-kandla-grey-tiles-1.jpg",
      "/images/projects/project-11/porcelain-patio-hemel-hempstead-recessed-manhole-2.jpg",
      "/images/projects/project-11/porcelain-patio-hemel-hempstead-two-tone-border-3.jpg",
      "/images/projects/project-11/porcelain-patio-hemel-hempstead-bifold-integration-4.jpg",
    ],
    testimonial: {
      quote:
        "Absolutely thrilled with our new patio. The Kandla grey tiles look fantastic and the two-tone border adds a lovely finishing touch. Professional service from start to finish.",
      author: "Charlie's Patio",
      location: "Hemel Hempstead"
    },
  },
  {
    id: 5,
    slug: "wood-effect-porcelain-patio-little-chalfont",
    title: "Wood-Effect Porcelain Patio",
    location: "Little Chalfont, HP7",
    date: "August 2025",
    size: "38m²",
    description:
      "Beautiful wood-effect porcelain patio that combines the warmth of timber with the durability and low maintenance of porcelain.",
    features: [
      "Wood-effect porcelain",
      "Natural timber look",
      "Zero maintenance",
      "Frost resistant",
    ],
    images: [
      "/images/wood-effect-patio-little-chalfont-1.jpg",
      "/images/wood-effect-patio-little-chalfont-2.jpg",
    ],
    testimonial: {
      quote:
        "We wanted the look of wood without the maintenance. This porcelain patio is perfect – looks amazing and needs no upkeep!",
      author: "Robert & Helen Parker",
      location: "Little Chalfont"
    },
  },
  {
    id: 8,
    slug: "porcelain-patio-sleeper-retaining-wall-bovingdon",
    title: "Patio with Sleeper Wall",
    location: "Bovingdon, HP3",
    date: "March 2021",
    size: "16m²",
    description:
      "A new porcelain patio installation featuring brickslot ACO drains and new sleeper retaining dwarf walls, creating a functional and attractive outdoor space.",
    features: [
      "Porcelain patio",
      "Water drainage system",
      "Sleeper retaining wall",
      "Brickslot ACO drains",
    ],
    images: [
      "/images/projects/project-8/porcelain-patio-bovingdon-main-view-1.jpg",
      "/images/projects/project-8/porcelain-patio-bovingdon-drainage-2.jpg",
      "/images/projects/project-8/porcelain-patio-bovingdon-sleeper-wall-3.jpg",
    ],
    testimonial: {
      quote:
        "The team have done a fantastic job on our patio. From start to finish they have been professional and hardworking.",
      author: "David Quinton",
      location: "Bovingdon",
      googleReviewUrl: "https://maps.app.goo.gl/HzeAQYR1ESMJcy2Z7"
    },
  },
  {
    id: 9,
    slug: "porcelain-patio-charcoal-border-holmer-green",
    title: "Charcoal Border Patio",
    location: "Holmer Green, HP15",
    date: "March 2023",
    size: "11m²",
    description:
      "A new porcelain patio installation featuring a charcoal border detail and new sleeper retaining dwarf walls, creating a stylish and practical outdoor space.",
    features: [
      "Porcelain patio",
      "Charcoal border detail",
      "Sleeper retaining wall",
      "Clean finish",
    ],
    images: [
      "/images/projects/project-9/porcelain-patio-holmer-green-main-view-1.jpg",
      "/images/projects/project-9/porcelain-patio-holmer-green-charcoal-border-2.jpg",
      "/images/projects/project-9/porcelain-patio-holmer-green-sleeper-wall-3.jpg",
    ],
    testimonial: {
      quote: "Professional service and excellent workmanship. Highly recommend!",
      author: "David Robson",
      location: "Holmer Green"
    },
  },
  {
    id: 10,
    slug: "porcelain-patio-kerb-edgings-woburn-green",
    title: "Patio with Kerb Edgings",
    location: "Woburn Green",
    date: "March 2022",
    size: "11m²",
    description:
      "A new porcelain patio installation with kerb edgings and composite fencing for privacy, featuring picket fence sections to create an open, airy garden feel.",
    features: [
      "Porcelain patio",
      "Kerb edgings",
      "Composite fencing",
      "Picket fence sections",
      "Privacy screening",
    ],
    images: [
      "/images/projects/project-10/porcelain-patio-woburn-green-1.jpg",
      "/images/projects/project-10/porcelain-patio-woburn-green-2.jpg",
      "/images/projects/project-10/porcelain-patio-woburn-green-3.jpg",
      "/images/projects/project-10/porcelain-patio-woburn-green-4.jpg",
    ],
    testimonial: {
      quote: "TLDR",
      author: "Jonathon",
      location: "Woburn Green"
    },
  },
  {
    id: 12,
    slug: "raised-porcelain-patio-lighting-amersham",
    title: "Raised Porcelain Patio with Lighting",
    location: "Amersham",
    date: "Feb 2023",
    size: "110m²",
    description:
      "A new raised porcelain patio with lighting around the perimeter, creating a stunning outdoor entertaining space for evening use.",
    features: [
      "Raised porcelain patio",
      "Perimeter lighting",
      "110m² installation",
      "Evening entertaining space",
      "Modern design",
    ],
    images: [
      "/images/projects/project-12/porcelain-patio-high-wycombe-4.jpg",
      "/images/projects/project-12/porcelain-patio-high-wycombe-3.jpg",
      "/images/projects/project-12/porcelain-patio-high-wycombe-1.jpg",
      "/images/projects/project-12/porcelain-patio-high-wycombe-2.jpg",
    ],
    testimonial: {
      quote: "TLDR",
      author: "Tom",
      location: "High Wycombe"
    },
  },
  {
    id: 15,
    slug: "natural-grey-porcelain-patio-watford",
    title: "Natural Grey Porcelain patio",
    location: "Watford",
    date: "October 2023",
    size: "30m²",
    description:
      "We installed a new porcelain patio in Watford, we transformed the main patio area, and pathways with recessed manholes details.",
    features: [
      "Natural grey porcelain tiles",
      "Recessed manholes",
      "Pathway installation",
      "Patio transformation",
      "30m² installation",
    ],
    images: [
      "/images/projects/project-15/porcelain-patio-watford-1.jpg",
      "/images/projects/project-15/porcelain-patio-watford-2.jpg",
      "/images/projects/project-15/porcelain-patio-watford-3.jpg",
      "/images/projects/project-15/porcelain-patio-watford-4.jpg",
    ],
    testimonial: {
      quote: "tldr",
      author: "Mary",
      location: "Watford"
    },
  },
  {
    id: 19,
    slug: "sandstone-patio-sleeper-retaining-wall-high-wycombe",
    title: "Sandstone Patio With sleeper retaining wall",
    location: "High Wycombe",
    date: "August 2024",
    size: "30m²",
    description:
      "A stunning 30m² raised Kandla grey sandstone patio installation in High Wycombe, framed by robust oak sleeper retaining walls that elegantly manage the garden's level change. The natural tonal variations of the sandstone create a beautiful, organic surface, while integrated oak sleeper steps provide easy access from the lawn. A new featheredge fence with secure gate completes this fully enclosed outdoor entertaining space.",
    features: [
      "Kandla grey sandstone patio",
      "Oak sleeper retaining walls",
      "Integrated oak steps",
      "Featheredge fencing with gate",
      "30m² installation",
      "Raised patio design",
    ],
    images: [
      "/images/projects/project-19/porcelain-patio-high-wycombe-1.jpg",
      "/images/projects/project-19/porcelain-patio-high-wycombe-2.jpg",
      "/images/projects/project-19/porcelain-patio-high-wycombe-3.jpg",
      "/images/projects/project-19/porcelain-patio-high-wycombe-4.jpg",
      "/images/projects/project-19/porcelain-patio-high-wycombe-5.jpg",
    ],
    testimonial: {
      quote: "TLDR",
      author: "James",
      location: "High Wycombe"
    },
  },
];

const features = [
  "Frost & slip-resistant surfaces",
  "Stain and scratch-proof",
  "Wide range of styles & colours",
  "10+ year lifespan",
  "Easy to clean & maintain",
  "Adds property value",
];

const areas = [
  "Amersham",
  "Chesham",
  "Beaconsfield",
  "Chalfont St Giles",
  "Little Chalfont",
  "Great Missenden",
  "High Wycombe",
  "Bovingdon",
  "Holmer Green",
];

export default function PorcelainPatiosPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Porcelain Patios', item: 'https://www.olivercharlesgardendesign.co.uk/services/porcelain-patios/' }
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
            name: 'Porcelain Patio Installation',
            description: 'Premium porcelain patio specialists serving Amersham, Chesham, Beaconsfield and surrounding areas. Frost-resistant, slip-proof, and built to last with our 5-year guarantee.',
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
            serviceType: 'Porcelain Patio Installation',
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
            src="/images/porcelain-patio.webp"
            alt="Beautiful porcelain patio installation in Amersham garden with grey tiles"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-overlay-services" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.1] mb-6">
              Porcelain Patio<br />
              Installation
            </h1>
            <div className="w-12 h-0.5 bg-[var(--color-bronze)] mb-6" />
            <p className="text-xl sm:text-2xl text-[var(--color-bronze)] font-medium mb-6">
              Amersham & Buckinghamshire
            </p>
            <p className="text-base sm:text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
              Premium porcelain patio specialists serving Amersham, Chesham, Beaconsfield and surrounding areas. Frost-resistant, slip-proof, and built to last with our 5-year guarantee.
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
                Why Choose Porcelain Paving?
              </h2>
              <p className="text-[var(--color-text-light)] text-lg mb-8">
                Transform your garden with stunning porcelain patio installations. Our premium porcelain paving offers timeless beauty with minimal maintenance requirements.
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
                src="/images/porcelain-patio.webp"
                alt="Beautiful porcelain patio installation in Amersham garden with grey tiles"
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
              Our Porcelain Patio Projects
            </h2>
            <p className="text-[var(--color-text-light)]">
              Browse our recent porcelain patio installations across Buckinghamshire.
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
              Porcelain Patio Installation Areas
            </h2>
            <p className="text-[var(--color-text-light)]">
              We install porcelain patios throughout Buckinghamshire and surrounding areas.
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
            Ready for Your New Porcelain Patio?
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
