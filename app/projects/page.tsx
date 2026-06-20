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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.olivercharlesgardendesign.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.olivercharlesgardendesign.co.uk/projects/' }
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
      <section className="py-24 lg:py-32 bg-[var(--color-forest)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--color-bronze)] uppercase mb-4">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
              Recent Projects in <span className="text-[var(--color-bronze)]">Buckinghamshire</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Browse our portfolio of completed porcelain patios, composite decking, and glass balustrade
              installations across Amersham, Chesham, and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-stone)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGrid projects={projects} categories={categories} />

          {/* View All CTA */}
          <div className="mt-12 text-center">
            <a
              href="/contact/#contact-form"
              className="inline-flex items-center px-8 py-4 bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-dark)] text-white font-semibold transition-colors"
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
