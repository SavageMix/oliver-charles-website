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
    images: ['/images/wood-effect-patio-little-chalfont-1.jpg', '/images/wood-effect-patio-little-chalfont-2.jpg'],
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
  },
  {
    id: 10,
    title: 'Porcelain Patio with Kerb Edgings',
    location: 'Woburn Green',
    category: 'Porcelain Patio',
    date: 'March 2022',
    size: '11m²',
    description: 'A new porcelain patio installation with kerb edgings and composite fencing for privacy, featuring picket fence sections to create an open, airy garden feel.',
    features: ['Porcelain patio', 'Kerb edgings', 'Composite fencing', 'Picket fence sections', 'Privacy screening'],
    images: ['/images/projects/project-10/porcelain-patio-woburn-green-1.jpg', '/images/projects/project-10/porcelain-patio-woburn-green-2.jpg', '/images/projects/project-10/porcelain-patio-woburn-green-3.jpg', '/images/projects/project-10/porcelain-patio-woburn-green-4.jpg'],
    testimonial: {
      quote: "TLDR",
      author: "Jonathon",
      location: "Woburn Green"
    }
  },
  {
    id: 12,
    title: 'Raised Porcelain Patio with Lighting',
    location: 'Amersham',
    category: 'Porcelain Patio',
    date: 'Feb 2023',
    size: '110m²',
    description: 'A new raised porcelain patio with lighting around the perimeter, creating a stunning outdoor entertaining space for evening use.',
    features: ['Raised porcelain patio', 'Perimeter lighting', '110m² installation', 'Evening entertaining space', 'Modern design'],
    images: ['/images/projects/project-12/porcelain-patio-high-wycombe-4.jpg', '/images/projects/project-12/porcelain-patio-high-wycombe-3.jpg', '/images/projects/project-12/porcelain-patio-high-wycombe-1.jpg', '/images/projects/project-12/porcelain-patio-high-wycombe-2.jpg'],
    testimonial: {
      quote: "TLDR",
      author: "Tom",
      location: "Amersham"
    }
  },
  {
    id: 13,
    title: 'Wooden Decking',
    location: 'Chesham',
    category: 'Composite Decking',
    date: 'May 2023',
    size: '80m²',
    description: 'A new raised wooden decking that transformed the garden. We also renewed the fence and installed some sleeper planters.',
    features: ['Raised wooden decking', 'Fence renewal', 'Sleeper planters', 'Garden transformation', '80m² installation'],
    images: ['/images/projects/project-13/composite-decking-chesham-1.jpg', '/images/projects/project-13/composite-decking-chesham-2.jpg', '/images/projects/project-13/composite-decking-chesham-3.jpg', '/images/projects/project-13/composite-decking-chesham-4.jpg', '/images/projects/project-13/composite-decking-chesham-5.jpg'],
    testimonial: {
      quote: "TLDR",
      author: "Neil",
      location: "Chesham"
    }
  },
  {
    id: 14,
    title: 'Small garden Rebuild',
    location: 'High Wycombe',
    category: 'Full Landscaping',
    date: 'Sept 2023',
    size: '40m²',
    description: 'A new build garden revamp, we extended the existing patio, and built a retaining garden wall to split the tier level of the garden, we installed a new path and a planter border around the edge of the garden.',
    features: ['Patio extension', 'Retaining garden wall', 'Tiered garden levels', 'New path installation', 'Planter border'],
    images: ['/images/projects/project-14/full-landscaping-high-wycombe-5.jpg', '/images/projects/project-14/full-landscaping-high-wycombe-1.jpg', '/images/projects/project-14/full-landscaping-high-wycombe-2.jpg', '/images/projects/project-14/full-landscaping-high-wycombe-3.jpg', '/images/projects/project-14/full-landscaping-high-wycombe-4.jpg'],
    testimonial: {
      quote: "tldr",
      author: "Neil",
      location: "High Wycombe"
    }
  },
  {
    id: 15,
    title: 'Natural Grey Porcelain patio',
    location: 'Watford',
    category: 'Porcelain Patio',
    date: 'October 2023',
    size: '30m²',
    description: 'We installed a new porcelain patio in Watford, we transformed the main patio area, and pathways with recessed manholes details.',
    features: ['Natural grey porcelain tiles', 'Recessed manholes', 'Pathway installation', 'Patio transformation', '30m² installation'],
    images: ['/images/projects/project-15/porcelain-patio-watford-1.jpg', '/images/projects/project-15/porcelain-patio-watford-2.jpg', '/images/projects/project-15/porcelain-patio-watford-3.jpg', '/images/projects/project-15/porcelain-patio-watford-4.jpg'],
    testimonial: {
      quote: "tldr",
      author: "Mary",
      location: "Watford"
    }
  },
  {
    id: 16,
    title: 'Raised composite Decking',
    location: 'Stokenchurch',
    category: 'Composite Decking',
    date: 'July 2023',
    size: '45m²',
    description: 'We installed a new composite decking around our customers garden room.',
    features: ['Raised composite decking', 'Garden room integration', '45m² installation', 'Modern decking solution'],
    images: ['/images/projects/project-16/composite-decking-stokenchurch-1.jpg', '/images/projects/project-16/composite-decking-stokenchurch-2.jpg', '/images/projects/project-16/composite-decking-stokenchurch-3.jpg'],
    testimonial: {
      quote: "tldr",
      author: "Ian",
      location: "Stokenchurch"
    }
  },
  {
    id: 17,
    title: 'Pinewood Deck',
    location: 'Bovingdon',
    category: 'Composite Decking',
    date: 'July 2024',
    size: '16m²',
    description: 'We installed a new composite pine decking, with a simple fence and handrail, the existing decking had rotted out, so we had to install around the existing pergola.',
    features: ['Composite pine decking', 'Simple fence', 'Handrail', 'Pergola integration', '16m² installation'],
    images: ['/images/projects/project-17/composite-decking-bovingdon-1.jpg', '/images/projects/project-17/composite-decking-bovingdon-2.jpg', '/images/projects/project-17/composite-decking-bovingdon-3.jpg'],
    testimonial: {
      quote: "We had the deck and railings of a pergola replaced and Ollie was extremely competent and completed a superb job. He was happy to modify the plan based on our constantly changing minds and super friendly with it all. I would highly recommend.",
      author: "Tony Shock",
      location: "Bovingdon"
    }
  },
  {
    id: 18,
    title: 'Raised Composite Decking',
    location: 'Stokenchurch',
    category: 'Composite Decking',
    date: 'July 2024',
    size: '35m²',
    description: 'A contemporary raised composite decking installation wrapping a cedar-clad garden room with a living green roof. We designed the deck with a bespoke tree cutout to preserve the mature tree, creating a seamless transition between the bi-fold doors and the surrounding woodland. Integrated steps provide gentle access down to the garden below.',
    features: ['Raised composite decking', 'Garden room with green roof', 'Bespoke tree cutout', 'Cedar cladding integration', '35m² installation'],
    images: ['/images/projects/project-18/composite-decking-stokenchurch-1.jpg', '/images/projects/project-18/composite-decking-stokenchurch-2.jpg', '/images/projects/project-18/composite-decking-stokenchurch-3.jpg', '/images/projects/project-18/composite-decking-stokenchurch-4.jpg'],
    testimonial: {
      quote: "TLDR",
      author: "Mark",
      location: "Stokenchurch"
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
