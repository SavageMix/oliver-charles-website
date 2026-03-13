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
      "/images/projects/project-7/porcelain-patio-hemel-hempstead-kandla-grey-tiles-1.jpg",
      "/images/projects/project-7/porcelain-patio-hemel-hempstead-recessed-manhole-2.jpg",
      "/images/projects/project-7/porcelain-patio-hemel-hempstead-two-tone-border-3.jpg",
      "/images/projects/project-7/porcelain-patio-hemel-hempstead-bifold-integration-4.jpg",
    ],
    testimonial: {
      quote:
        "Absolutely thrilled with our new patio. The Kandla grey tiles look fantastic and the two-tone border adds a lovely finishing touch. Professional service from start to finish.",
      author: "Charlie's Patio",
      location: "Hemel Hempstead",
    },
  },
  {
    id: 5,
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
      location: "Little Chalfont",
    },
  },
  {
    id: 8,
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
      googleReviewUrl: "https://maps.app.goo.gl/HzeAQYR1ESMJcy2Z7",
    },
  },
  {
    id: 9,
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
      location: "Holmer Green",
    },
  },
  {
    id: 10,
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
      location: "Woburn Green",
    },
  },
  {
    id: 12,
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
      location: "High Wycombe",
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
      {/* Hero Section */}
      <section className="relative py-24 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Porcelain Patio Installation
              <span className="block text-[#c9b896] text-2xl md:text-3xl mt-2">
                Amersham & Buckinghamshire
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premium porcelain patio specialists serving Amersham, Chesham,
              Beaconsfield and surrounding areas. Frost-resistant, slip-proof, and
              built to last with our 5-year guarantee.
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-6">
                Why Choose Porcelain Paving?
              </h2>
              <p className="text-[#666666] text-lg mb-8">
                Transform your garden with stunning porcelain patio installations.
                Our premium porcelain paving offers timeless beauty with minimal
                maintenance requirements.
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/porcelain-patio.jpg"
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
      <section className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-4">
              Our Porcelain Patio Projects
            </h2>
            <p className="text-[#666666]">
              Browse our recent porcelain patio installations across
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
              Porcelain Patio Installation Areas
            </h2>
            <p className="text-[#666666]">
              We install porcelain patios throughout Buckinghamshire and
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
            Ready for Your New Porcelain Patio?
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
