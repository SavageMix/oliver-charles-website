import Image from "next/image";
import { ArrowRight, Phone, Layers, LayoutGrid, Square, Leaf } from "lucide-react";
import { generateCanonicalMetadata } from "../lib/metadata";

export const metadata = generateCanonicalMetadata("/services", {
  title: "Our Services | Porcelain Patios, Decking & Glass Balustrades",
  description: "Premium landscaping services in Amersham & Buckinghamshire. Porcelain patios, composite decking, glass balustrades and complete garden transformations."
});

const services = [
  {
    id: "porcelain-patios",
    title: "Porcelain Terraces",
    description: "Elegant, hard-wearing porcelain terraces that combine timeless beauty with outstanding performance.",
    image: "/images/porcelain-patio.webp",
    icon: Layers,
  },
  {
    id: "composite-decking",
    title: "Composite Decking",
    description: "Low-maintenance composite decking that brings warmth, style and lasting quality to your garden.",
    image: "/images/composite-decking.webp",
    icon: LayoutGrid,
  },
  {
    id: "glass-balustrades",
    title: "Glass Balustrades",
    description: "Sleek, frameless glass balustrades that maximise views and create a seamless, contemporary finish.",
    image: "/images/glass-balustrade.webp",
    icon: Square,
  },
  {
    id: "garden-landscaping",
    title: "Garden Landscaping",
    description: "Complete garden transformations, from planting schemes to structural features and finishing touches.",
    image: "/images/landscaping.webp",
    icon: Leaf,
  },
];

export default function ServicesPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.olivercharlesgardendesign.co.uk/services/' }
            ]
          })
        }}
      />

      {/* Schema.org ItemList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: services.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Service',
                name: service.title,
                description: service.description,
                url: `https://www.olivercharlesgardendesign.co.uk/services/${service.id}/`,
                provider: {
                  '@type': 'LocalBusiness',
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
                }
              }
            }))
          }),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[700px] lg:min-h-[750px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/new-website-design/hero for services page.webp"
            alt="Beautiful porcelain patio installation by Oliver Charles Garden Design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-overlay-services" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-6 font-serif">
              Complete Garden<br />
              Design & Build
            </h1>
            <div className="w-12 h-0.5 bg-[var(--color-bronze)] mb-6" />
            <p className="text-xl sm:text-2xl text-[var(--color-bronze)] font-medium mb-6">
              Beautiful outdoor spaces, crafted to endure.
            </p>
            <p className="text-base sm:text-lg text-white/75 max-w-lg mb-10 leading-relaxed">
              From design to completion, we create exceptional gardens through thoughtful design, expert craftsmanship and meticulous attention to detail.
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

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-[var(--color-stone)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-medium tracking-[0.2em] text-[var(--color-bronze)] uppercase mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--color-forest)] mb-6 font-serif">
              Expert design. Exceptional build. Enduring results.
            </h2>
            <div className="w-12 h-0.5 bg-[var(--color-bronze)] mx-auto mb-6" />
            <p className="text-[var(--color-text-light)] text-lg leading-relaxed">
              We offer a complete range of garden design and construction services, delivering beautiful, functional spaces tailored to you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-[var(--color-off-white)] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} - Professional installation by Oliver Charles Garden Design`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading={service.id === 'porcelain-patios' ? 'eager' : 'lazy'}
                        priority={service.id === 'porcelain-patios'}
                      />
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <Icon className="w-10 h-10 text-[var(--color-bronze)] mb-5" strokeWidth={1.25} />
                      <h3 className="text-2xl font-medium text-[var(--color-forest)] mb-4 font-serif">
                        {service.title}
                      </h3>
                      <p className="text-[var(--color-text-light)] mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <a
                        href={`/services/${service.id}/`}
                        className="inline-flex items-center text-sm font-medium tracking-[0.1em] text-[var(--color-bronze)] hover:text-[var(--color-bronze-dark)] transition-colors mt-auto uppercase"
                      >
                        FIND OUT MORE
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-24 bg-[var(--color-forest)] overflow-hidden">
        {/* Faint OC watermark */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
          <Image
            src="/images/new-website-design/logo 2.jpg"
            alt=""
            width={320}
            height={350}
            className="object-contain"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">
            <div className="lg:w-1/2 lg:pr-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.15] font-serif">
                Ready to create your<br />
                perfect outdoor space?
              </h2>
            </div>
            <div className="hidden lg:block w-px h-24 bg-[var(--color-bronze)]/40 self-center" />
            <div className="lg:w-1/2 lg:pl-12">
              <p className="text-white/80 mb-8 leading-relaxed">
                Let&apos;s bring your ideas to life.<br />
                Contact us today for a no-obligation consultation.
              </p>
              <a
                href="/contact/#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-dark)] text-white font-medium transition-colors"
              >
                GET A FREE QUOTE
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
