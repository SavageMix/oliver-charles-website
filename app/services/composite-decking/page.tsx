import Image from "next/image";
import { ArrowRight, Check, Phone, MapPin, Calendar, Ruler } from "lucide-react";
import { generateCanonicalMetadata } from "../../lib/metadata";
import ProjectModal from "./ProjectModal";

export const metadata = generateCanonicalMetadata("/services/composite-decking", {
  title: "Composite Decking Installation | Amersham & Buckinghamshire",
  description: "Premium composite decking with 25+ year warranty. No maintenance required, slip-resistant, eco-friendly. Free quotes in Amersham & Buckinghamshire."
});

const projects = [
  {
    id: 6,
    slug: "multi-level-decking-great-missenden",
    title: "Multi-Level Decking",
    location: "Great Missenden, HP16",
    date: "July 2025",
    size: "55m²",
    description:
      "Multi-level composite decking installation creating distinct zones for dining, lounging, and entertaining on a sloping garden.",
    features: [
      "Multi-level design",
      "Integrated seating",
      "Deck lighting",
      "Privacy screening",
    ],
    images: [
      "/images/multi-level-decking-great-missenden-main-1.jpg",
      "/images/multi-level-decking-great-missenden-levels-2.jpg",
    ],
    testimonial: {
      quote:
        "The multi-level design has given us so much more usable space. Every detail was carefully considered and executed.",
      author: "Andrew & Claire Wilson",
      location: "Great Missenden",
    },
  },
  {
    id: 3,
    slug: "garden-transformation-bourne-end",
    title: "Garden Transformation",
    location: "Bourne End, SL8",
    date: "February 2024",
    size: "75m²",
    description:
      "A total garden refurbishment featuring composite decking area alongside a porcelain patio and glass balustrade.",
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
        "We couldn't be happier with our new garden. The composite decking area is perfect for entertaining.",
      author: "Hannah",
      location: "Bourne End",
    },
  },
  {
    id: 13,
    slug: "wooden-decking-chesham",
    title: "Wooden Decking",
    location: "Chesham",
    date: "May 2023",
    size: "80m²",
    description:
      "A new raised wooden decking that transformed the garden. We also renewed the fence and installed some sleeper planters.",
    features: [
      "Raised wooden decking",
      "Fence renewal",
      "Sleeper planters",
      "Garden transformation",
      "80m² installation",
    ],
    images: [
      "/images/projects/project-13/composite-decking-chesham-1.jpg",
      "/images/projects/project-13/composite-decking-chesham-2.jpg",
      "/images/projects/project-13/composite-decking-chesham-3.jpg",
      "/images/projects/project-13/composite-decking-chesham-4.jpg",
      "/images/projects/project-13/composite-decking-chesham-5.jpg",
    ],
    testimonial: {
      quote: "TLDR",
      author: "Neil",
      location: "Chesham",
    },
  },
  {
    id: 16,
    slug: "raised-composite-decking-stokenchurch",
    title: "Raised composite Decking",
    location: "Stokenchurch",
    date: "July 2023",
    size: "45m²",
    description:
      "We installed a new composite decking around our customers garden room.",
    features: [
      "Raised composite decking",
      "Garden room integration",
      "45m² installation",
      "Modern decking solution",
    ],
    images: [
      "/images/projects/project-16/composite-decking-stokenchurch-1.jpg",
      "/images/projects/project-16/composite-decking-stokenchurch-2.jpg",
      "/images/projects/project-16/composite-decking-stokenchurch-3.jpg",
    ],
    testimonial: {
      quote: "tldr",
      author: "Ian",
      location: "Stokenchurch",
    },
  },
  {
    id: 17,
    slug: "pinewood-deck-bovingdon",
    title: "Pinewood Deck",
    location: "Bovingdon",
    date: "July 2024",
    size: "16m²",
    description:
      "We installed a new composite pine decking, with a simple fence and handrail, the existing decking had rotted out, so we had to install around the existing pergola.",
    features: [
      "Composite pine decking",
      "Simple fence",
      "Handrail",
      "Pergola integration",
      "16m² installation",
    ],
    images: [
      "/images/projects/project-17/composite-decking-bovingdon-1.jpg",
      "/images/projects/project-17/composite-decking-bovingdon-2.jpg",
      "/images/projects/project-17/composite-decking-bovingdon-3.jpg",
    ],
    testimonial: {
      quote: "We had the deck and railings of a pergola replaced and Ollie was extremely competent and completed a superb job. He was happy to modify the plan based on our constantly changing minds and super friendly with it all. I would highly recommend.",
      author: "Tony Shock",
      location: "Bovingdon",
    },
  },
  {
    id: 18,
    slug: "raised-composite-decking-garden-room-stokenchurch",
    title: "Raised Composite Decking",
    location: "Stokenchurch",
    date: "July 2024",
    size: "35m²",
    description:
      "A contemporary raised composite decking installation wrapping a cedar-clad garden room with a living green roof. We designed the deck with a bespoke tree cutout to preserve the mature tree, creating a seamless transition between the bi-fold doors and the surrounding woodland. Integrated steps provide gentle access down to the garden below.",
    features: [
      "Raised composite decking",
      "Garden room with green roof",
      "Bespoke tree cutout",
      "Cedar cladding integration",
      "35m² installation",
    ],
    images: [
      "/images/projects/project-18/composite-decking-stokenchurch-1.jpg",
      "/images/projects/project-18/composite-decking-stokenchurch-2.jpg",
      "/images/projects/project-18/composite-decking-stokenchurch-3.jpg",
      "/images/projects/project-18/composite-decking-stokenchurch-4.jpg",
    ],
    testimonial: {
      quote: "TLDR",
      author: "Mark",
      location: "Stokenchurch",
    },
  },
];

const features = [
  "Will not rot, warp or splinter",
  "No staining or sealing required",
  "Hidden fixings for clean look",
  "Slip-resistant surface",
  "25+ year lifespan",
  "Environmentally friendly",
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

export default function CompositeDeckingPage() {
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.olivercharlesgardendesign.com/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.olivercharlesgardendesign.com/services/' },
              { '@type': 'ListItem', position: 3, name: 'Composite Decking', item: 'https://www.olivercharlesgardendesign.com/services/composite-decking/' }
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
            name: 'Composite Decking Installation',
            description: 'Premium composite decking solutions that combine the natural beauty of wood with zero maintenance requirements. Perfect for Amersham, Chesham & Beaconsfield gardens.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Oliver Charles Garden Design & Build',
              url: 'https://www.olivercharlesgardendesign.com',
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
              image: 'https://www.olivercharlesgardendesign.com/og-image.jpg'
            },
            areaServed: areas.map((area) => ({
              '@type': 'City',
              name: area
            })),
            serviceType: 'Composite Decking Installation',
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
      <section className="relative py-24 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Composite Decking
              <span className="block text-[#c9b896] text-2xl md:text-3xl mt-2">
                Amersham & Buckinghamshire
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premium composite decking solutions that combine the natural beauty
              of wood with zero maintenance requirements. Perfect for Amersham,
              Chesham & Beaconsfield gardens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact/#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:07837666766"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#c9b896] text-[#c9b896] font-semibold rounded-lg hover:bg-[#c9b896] hover:text-[#2c2c2c] transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                07837 666 766
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/composite-decking.webp"
                alt="Composite decking installation in Amersham garden - low maintenance outdoor living"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                priority
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-6">
                Why Choose Composite Decking?
              </h2>
              <p className="text-[#666666] text-lg mb-8">
                Enjoy the natural warmth of timber without any of the maintenance
                headaches. Our composite decking is engineered to withstand the
                British weather year after year.
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-[#c9b896]" />
                    <span className="text-[#2c2c2c] font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-4">
              Our Composite Decking Projects
            </h2>
            <p className="text-[#666666]">
              Browse our recent composite decking installations across
              Buckinghamshire.
            </p>
          </div>

          <ProjectModal projects={projects} />
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">
              Composite Decking Installation Areas
            </h2>
            <p className="text-[#666666]">
              We install composite decking throughout Buckinghamshire and
              surrounding areas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-[#f5f0e6] text-[#2c2c2c] rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2c2c2c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your New Deck?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get a free, no-obligation quote. We serve Amersham, Chesham,
            Beaconsfield and all surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors"
            >
              Request Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:07837666766"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#c9b896] text-[#c9b896] font-semibold rounded-lg hover:bg-[#c9b896] hover:text-[#2c2c2c] transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              07837 666 766
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
