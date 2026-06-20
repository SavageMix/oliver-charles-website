import { MapPin, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { generateCanonicalMetadata } from "../../lib/metadata";

export const metadata = generateCanonicalMetadata("/areas/chorleywood", {
  title: "Porcelain Patios, Composite Decking & Landscaping Chorleywood WD3 | Oliver Charles",
  description: "Professional landscaping services in Chorleywood. Porcelain patios, decking & glass balustrades. Serving WD3 postcode area. Free quotes."
});

const services = [
  "Porcelain Patio Installation",
  "Composite Decking",
  "Glass Balustrades",
  "Garden Landscaping",
  "Driveway Paving",
  "Garden Lighting",
];

const landmarks = [
  "Chorleywood Common",
  "Chorleywood Station",
  "Chorleywood Golf Club",
  "The Black Horse",
  "Chorleywood House Estate",
];

export default function ChorleywoodPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[var(--color-stone)] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[var(--color-text-light)]">
            <a href="/" className="hover:text-[var(--color-bronze)]">Home</a>
            <span className="mx-2">/</span>
            <a href="/areas/" className="hover:text-[var(--color-bronze)]">Areas</a>
            <span className="mx-2">/</span>
            <span className="text-[var(--color-text)]">Chorleywood</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-[var(--color-forest)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[var(--color-bronze)]" />
              <span className="text-[var(--color-bronze)]">5 miles from our base</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              Landscaping Services in <span className="text-[var(--color-bronze)]">Chorleywood</span>
            </h1>
            <p className="text-xl text-white/70">
              Serving Chorleywood with the same Family-Owned service and attention to detail. 
              Quality landscaping near the Common and throughout the village.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-medium text-[var(--color-text)] mb-6">
                Porcelain Patios, Composite Decking & Landscaping in Chorleywood
              </h2>
              <p className="text-[var(--color-text-light)] text-lg mb-6">
                We provide expert landscaping services in Chorleywood, serving properties near 
                the Common, around the station, and throughout the village. Our team understands 
                the mix of period homes and modern developments in the area.
              </p>
              <p className="text-[var(--color-text-light)] text-lg mb-8">
                We are specialists in constructing premium{' '}
                <a href="/services/porcelain-patios/" className="text-[var(--color-bronze)] hover:underline font-medium">porcelain patios</a>{' '}
                and heavy-duty{' '}
                <a href="/services/composite-decking/" className="text-[var(--color-bronze)] hover:underline font-medium">composite decking</a>{' '}
                across the WD3 area. Our team also installs{' '}
                <a href="/services/glass-balustrades/" className="text-[var(--color-bronze)] hover:underline font-medium">glass balustrades</a>{' '}
                for properties throughout Chorleywood and nearby areas.
              </p>
              <h3 className="text-xl font-medium text-[var(--color-text)] mb-4">Services we offer:</h3>
              <ul className="space-y-3 mb-8">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-bronze)]" />
                    <span className="text-[var(--color-text-light)]">{service}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/services/"
                className="inline-flex items-center px-6 py-3 bg-[var(--color-forest)] text-white font-medium rounded-none hover:bg-[var(--color-forest-light)] transition-colors"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[var(--color-text)] mb-6">Areas we serve:</h3>
              <div className="bg-[var(--color-stone)] border border-[var(--color-border)] p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[var(--color-bronze)]" />
                  <span className="font-medium text-[var(--color-text)]">Postcode: WD3</span>
                </div>
                <ul className="space-y-2">
                  {["Chorleywood Village", "Chorleywood Common", "Heronsgate", "Croxley Green (border)"].map((area) => (
                    <li key={area} className="text-[var(--color-text-light)]">• {area}</li>
                  ))}
                </ul>
              </div>
              <h3 className="text-xl font-medium text-[var(--color-text)] mb-4">Local landmarks:</h3>
              <div className="flex flex-wrap gap-2">
                {landmarks.map((landmark) => (
                  <span key={landmark} className="px-3 py-1 bg-[var(--color-stone)] border border-[var(--color-border)] text-[var(--color-text-light)] text-sm">
                    {landmark}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-forest)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-medium text-white mb-4">
            Get Your Free Chorleywood Quote
          </h2>
          <p className="text-white/70 mb-8">
            Contact us today for a free site survey and detailed quote in Chorleywood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-bronze)] text-white font-medium rounded-none hover:bg-[var(--color-bronze-dark)] transition-colors"
            >
              Request Free Quote
            </a>
            <a
              href="tel:+447837666766"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-medium rounded-none hover:bg-white/10 transition-colors"
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
