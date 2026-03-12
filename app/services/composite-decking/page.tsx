import Image from "next/image";
import { ArrowRight, Check, Phone, MapPin, Calendar, Ruler } from "lucide-react";
import { generateCanonicalMetadata } from "../../lib/metadata";
import ProjectModal from "./ProjectModal";

export const metadata = generateCanonicalMetadata("/services/composite-decking");

const projects = [
  {
    id: 6,
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
                href="/contact/"
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
                src="/images/composite-decking.jpg"
                alt="Composite decking installation in Amersham garden - low maintenance outdoor living"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
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
              href="/contact/"
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
