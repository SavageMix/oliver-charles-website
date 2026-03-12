import Image from "next/image";
import { ArrowRight, Check, Phone, MapPin, Calendar, Ruler } from "lucide-react";
import { generateCanonicalMetadata } from "../../lib/metadata";
import ProjectModal from "./ProjectModal";

export const metadata = generateCanonicalMetadata("/services/garden-landscaping");

const projects = [
  {
    id: 2,
    title: "Egyptian Limestone Patio",
    location: "Beaconsfield, HP9",
    date: "December 2025",
    size: "120m²",
    description:
      "A total garden refurbishment featuring Egyptian limestone paving with herringbone detailed work, new turf area, water feature and front drive transformation.",
    features: [
      "Egyptian limestone patio",
      "Herringbone pattern detail",
      "Water feature",
      "Planting areas",
      "New turf lawn",
    ],
    images: [
      "/images/projects/project-2/egyptian-limestone-beaconsfield-aerial-view-1.jpg",
      "/images/projects/project-2/egyptian-limestone-beaconsfield-main-patio-2.jpg",
      "/images/projects/project-2/egyptian-limestone-beaconsfield-herringbone-3.jpg",
      "/images/projects/project-2/egyptian-limestone-beaconsfield-garden-4.jpg",
      "/images/projects/project-2/egyptian-limestone-beaconsfield-walkway-5.jpg",
      "/images/projects/project-2/egyptian-limestone-beaconsfield-overview-6.jpg",
    ],
    testimonial: {
      quote:
        "Absolutely love our new garden! The Egyptian limestone with the herringbone pattern is stunning. The team worked tirelessly.",
      author: "Kaylee",
      location: "Beaconsfield",
    },
  },
  {
    id: 3,
    title: "Garden Transformation",
    location: "Bourne End, SL8",
    date: "February 2024",
    size: "75m²",
    description:
      "A total garden refurbishment featuring a retaining wall with glass balustrade, new porcelain patio and composite decking area.",
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
        "We couldn't be happier with our new garden. The team was professional, hardworking and the attention to detail was outstanding.",
      author: "Hannah",
      location: "Bourne End",
    },
  },
];

const features = [
  "Complete garden redesign & build",
  "Hard and soft landscaping",
  "Water features & garden structures",
  "Planting schemes & lawn installation",
  "Lighting & irrigation systems",
  "5-year workmanship guarantee",
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

export default function GardenLandscapingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Garden Landscaping
              <span className="block text-[#c9b896] text-2xl md:text-3xl mt-2">
                Amersham & Buckinghamshire
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Complete garden transformations from design to completion. We bring
              your outdoor vision to life across Amersham, Chesham, Beaconsfield
              and beyond.
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
                src="/images/landscaping.jpg"
                alt="Complete garden landscaping transformation in Buckinghamshire featuring patio installation and professional planting schemes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                priority
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-6">
                Complete Garden Transformations
              </h2>
              <p className="text-[#666666] text-lg mb-8">
                From initial concept to final planting, we handle every aspect of
                your garden transformation. Our team combines creative design with
                expert craftsmanship to create outdoor spaces that exceed
                expectations.
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
              Our Landscaping Projects
            </h2>
            <p className="text-[#666666]">
              Browse our recent garden transformations across Buckinghamshire.
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
              Garden Landscaping Areas
            </h2>
            <p className="text-[#666666]">
              We provide complete garden landscaping throughout Buckinghamshire and
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
            Ready to Transform Your Garden?
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
