import { generateCanonicalMetadata } from "../lib/metadata";
import { ArrowRight } from "lucide-react";
import ProjectGrid from "./ProjectGrid";

export const metadata = generateCanonicalMetadata("/projects", {
  title: "Our Projects | Garden Landscaping Portfolio | Buckinghamshire",
  description: "Browse our portfolio of completed porcelain patios, composite decking, and glass balustrade installations across Amersham and Buckinghamshire."
});

// Static projects data for SEO (rendered in HTML)
const projects = [
  {
    id: 1,
    title: 'Modern Porcelain Patio - Hemel Hempstead',
    location: 'Hemel Hempstead, HP3',
    category: 'Porcelain Patio',
    date: 'July 2024',
    size: '90m²',
    description: 'A stunning 90m² modern porcelain patio installation featuring Kandla grey tiles with elegant two-tone border detailing. The project included professionally recessed manholes and seamless integration with bi-fold doors.',
    features: ['Kandla grey porcelain tiles', 'Recessed manholes', 'Two-tone border detail', '90m² installation', 'Bi-fold door integration'],
    images: ['/images/projects/project-7/porcelain-patio-hemel-hempstead-kandla-grey-tiles-1.jpg', '/images/projects/project-7/porcelain-patio-hemel-hempstead-recessed-manhole-2.jpg', '/images/projects/project-7/porcelain-patio-hemel-hempstead-two-tone-border-3.jpg', '/images/projects/project-7/porcelain-patio-hemel-hempstead-bifold-integration-4.jpg'],
    testimonial: {
      quote: "Absolutely thrilled with our new patio. The Kandla grey tiles look fantastic and the two-tone border adds a lovely finishing touch. Professional service from start to finish.",
      author: "Charlie's Patio",
      location: "Hemel Hempstead"
    }
  },
  {
    id: 2,
    title: 'Egyptian Limestone Patio with Herringbone Pattern',
    location: 'Beaconsfield, HP9',
    category: 'Full Landscaping',
    date: 'December 2025',
    size: '120m²',
    description: 'A total garden refurbishment featuring Egyptian limestone paving with herringbone detailed work, new turf area, water feature and front drive transformation.',
    features: ['Egyptian limestone patio', 'Herringbone pattern detail', 'Water feature', 'Planting areas', 'New turf lawn'],
    images: ['/images/projects/project-2/egyptian-limestone-beaconsfield-aerial-view-1.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-main-patio-2.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-herringbone-3.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-garden-4.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-walkway-5.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-overview-6.jpg'],
    testimonial: {
      quote: "Absolutely love our new garden! The Egyptian limestone with the herringbone pattern is stunning. The team worked tirelessly and the result is beyond what we imagined.",
      author: "Kaylee",
      location: "Beaconsfield"
    }
  },
  {
    id: 3,
    title: 'Garden Transformation - Bourne End',
    location: 'Bourne End, SL8',
    category: 'Full Landscaping',
    date: 'February 2024',
    size: '75m²',
    description: 'A total garden refurbishment featuring a retaining wall with glass balustrade, new porcelain patio and composite decking area. A complete outdoor transformation.',
    features: ['Porcelain patio', 'Composite decking', 'Glass balustrade', 'Retaining wall brickwork', 'Garden lighting'],
    images: ['/images/projects/project-3/garden-transformation-bourne-end-before-after-1.jpg', '/images/projects/project-3/garden-transformation-bourne-end-glass-balustrade-4.jpg', '/images/projects/project-3/garden-transformation-bourne-end-detail-6.jpg', '/images/projects/project-3/garden-transformation-bourne-end-patio-2.jpg', '/images/projects/project-3/garden-transformation-bourne-end-wall-5.jpg', '/images/projects/project-3/garden-transformation-bourne-end-decking-3.jpg'],
    testimonial: {
      quote: "We couldn't be happier with our new garden. The team was professional, hardworking and the attention to detail was outstanding. The glass balustrade on the retaining wall looks amazing!",
      author: "Hannah",
      location: "Bourne End"
    }
  },
  {
    id: 4,
    title: 'Glass Balustrade Balcony',
    location: 'Beaconsfield, HP9',
    category: 'Glass Balustrade',
    date: 'September 2025',
    size: '18m',
    description: 'Stunning frameless glass balustrade installation for a first-floor balcony, providing safety without compromising the panoramic countryside views.',
    features: ['Frameless glass panels', 'Stainless steel posts', 'BS compliant installation', 'Easy-clean coating'],
    images: ['/images/glass-balustrade-beaconsfield-balcony-1.jpg', '/images/glass-balustrade-beaconsfield-view-2.jpg'],
    testimonial: {
      quote: "Professional installation from start to finish. The glass balustrade looks fantastic and we can finally enjoy our view.",
      author: "Michael & Linda Foster",
      location: "Beaconsfield"
    }
  },
  {
    id: 5,
    title: 'Wood-Effect Porcelain Patio',
    location: 'Little Chalfont, HP7',
    category: 'Porcelain Patio',
    date: 'August 2025',
    size: '38m²',
    description: 'Beautiful wood-effect porcelain patio that combines the warmth of timber with the durability and low maintenance of porcelain.',
    features: ['Wood-effect porcelain', 'Natural timber look', 'Zero maintenance', 'Frost resistant'],
    images: ['/images/wood-effect-patio-little-chalfont-main-1.jpg', '/images/wood-effect-patio-little-chalfont-detail-2.jpg'],
    testimonial: {
      quote: "We wanted the look of wood without the maintenance. This porcelain patio is perfect – looks amazing and needs no upkeep!",
      author: "Robert & Helen Parker",
      location: "Little Chalfont"
    }
  },
  {
    id: 6,
    title: 'Multi-Level Decking',
    location: 'Great Missenden, HP16',
    category: 'Composite Decking',
    date: 'July 2025',
    size: '55m²',
    description: 'Multi-level composite decking installation creating distinct zones for dining, lounging, and entertaining on a sloping garden.',
    features: ['Multi-level design', 'Integrated seating', 'Deck lighting', 'Privacy screening'],
    images: ['/images/multi-level-decking-great-missenden-main-1.jpg', '/images/multi-level-decking-great-missenden-levels-2.jpg'],
    testimonial: {
      quote: "The multi-level design has given us so much more usable space. Every detail was carefully considered and executed.",
      author: "Andrew & Claire Wilson",
      location: "Great Missenden"
    }
  },
  {
    id: 8,
    title: 'Porcelain Patio with Sleeper Retaining Wall',
    location: 'Bovingdon, HP3',
    category: 'Porcelain Patio',
    date: 'March 2021',
    size: '16m²',
    description: 'A new porcelain patio installation featuring brickslot ACO drains and new sleeper retaining dwarf walls, creating a functional and attractive outdoor space.',
    features: ['Porcelain patio', 'Water drainage system', 'Sleeper retaining wall', 'Brickslot ACO drains'],
    images: ['/images/projects/project-8/porcelain-patio-bovingdon-main-view-1.jpg', '/images/projects/project-8/porcelain-patio-bovingdon-drainage-2.jpg', '/images/projects/project-8/porcelain-patio-bovingdon-sleeper-wall-3.jpg'],
    testimonial: {
      quote: "The team at Oliver Charles construction have done a fantastic job on are patio. From start to Finnish they have been professional and hardworking. Couldn't recommend enough. We will definitely be using them again.",
      author: "David Quinton",
      location: "Bovingdon",
      googleReviewUrl: "https://maps.app.goo.gl/HzeAQYR1ESMJcy2Z7"
    }
  },
  {
    id: 9,
    title: 'Porcelain Patio with Charcoal Border',
    location: 'Holmer Green, HP15',
    category: 'Porcelain Patio',
    date: 'March 2023',
    size: '11m²',
    description: 'A new porcelain patio installation featuring a charcoal border detail and new sleeper retaining dwarf walls, creating a stylish and practical outdoor space.',
    features: ['Porcelain patio', 'Charcoal border detail', 'Sleeper retaining wall', 'Clean finish'],
    images: ['/images/projects/project-9/porcelain-patio-holmer-green-main-view-1.jpg', '/images/projects/project-9/porcelain-patio-holmer-green-charcoal-border-2.jpg', '/images/projects/project-9/porcelain-patio-holmer-green-sleeper-wall-3.jpg'],
    testimonial: {
      quote: "TLDR",
      author: "David Robson",
      location: "Holmer Green"
    }
  }
];

const categories = ['All', 'Porcelain Patio', 'Composite Decking', 'Glass Balustrade', 'Full Landscaping'];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-[#c9b896]/20 text-[#c9b896] rounded-full text-sm font-semibold mb-4">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Recent Projects in <span className="text-[#c9b896]">Buckinghamshire</span>
            </h1>
            <p className="text-xl text-gray-300">
              Browse our portfolio of completed porcelain patios, composite decking, and glass balustrade 
              installations across Amersham, Chesham, and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGrid projects={projects} categories={categories} />

          {/* View All CTA */}
          <div className="mt-12 text-center">
            <a
              href="/contact/"
              className="inline-flex items-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
