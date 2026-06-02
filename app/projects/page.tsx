import { generateCanonicalMetadata, BASE_URL } from "../lib/metadata";
import { ArrowRight } from "lucide-react";
import ProjectGrid from "./ProjectGrid";
import { projects, categories } from "../lib/projects";

export const metadata = generateCanonicalMetadata("/projects", {
  title: "Our Projects | Garden Landscaping Portfolio | Buckinghamshire",
  description: "Browse our portfolio of completed porcelain patios, composite decking, and glass balustrade installations across Amersham and Buckinghamshire."
});

export default function ProjectsPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.olivercharlesgardendesign.com/projects/' }
            ]
          })
        }}
      />

      {/* Schema.org CollectionPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Our Projects | Garden Landscaping Portfolio | Buckinghamshire',
            description: 'Browse our portfolio of completed porcelain patios, composite decking, and glass balustrade installations across Amersham and Buckinghamshire.',
            url: `${BASE_URL}/projects/`,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: projects.map((project, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `${BASE_URL}/projects/${project.slug}/`
              }))
            }
          }),
        }}
      />

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
              href="/contact/#contact-form"
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
