import { MapPin, ArrowRight, Phone } from "lucide-react";
import { generateCanonicalMetadata } from "../lib/metadata";

export const metadata = generateCanonicalMetadata("/areas", {
  title: "Areas We Cover | Landscaping Services Buckinghamshire",
  description: "Bespoke garden design & build studio serving Buckinghamshire including Amersham, Chesham, Beaconsfield, Chalfont St Giles & surrounding areas. Luxury outdoor transformations."
});

const areas = [
  {
    name: "Amersham",
    postcode: "HP6, HP7",
    description: "Our home base. We know Amersham properties inside out, from period homes in Old Amersham to modern developments.",
    landmarks: ["Amersham Old Town", "St Mary's Church", "Amersham Museum"],
    distance: "Local",
    href: "/areas/amersham/",
  },
  {
    name: "Chesham",
    postcode: "HP5",
    description: "Serving Chesham and surrounding villages with the same dedication to quality craftsmanship.",
    landmarks: ["Chesham Town Centre", "Lowndes Park", "The Elgiva Theatre"],
    distance: "3 miles",
    href: "/areas/chesham/",
  },
  {
    name: "Beaconsfield",
    postcode: "HP9",
    description: "Creating beautiful outdoor spaces for Beaconsfield homeowners, from New Town to Old Town.",
    landmarks: ["Beaconsfield Old Town", "Bekonscot Model Village", "Royal Standard"],
    distance: "6 miles",
    href: "/areas/beaconsfield/",
  },
  {
    name: "Chalfont St Giles",
    postcode: "HP8",
    description: "Proud to serve this charming Buckinghamshire village with premium landscaping services.",
    landmarks: ["Milton's Cottage", "The Vache", "Chalfont St Giles Village"],
    distance: "4 miles",
    href: "/areas/chalfont-st-giles/",
  },
  {
    name: "Little Chalfont",
    postcode: "HP7",
    description: "Transforming gardens in Little Chalfont with porcelain patios, decking, and glass balustrades.",
    landmarks: ["Little Chalfont Station", "Chalfont Park", "Local Nature Reserve"],
    distance: "2 miles",
    href: "/areas/little-chalfont/",
  },
  {
    name: "Great Missenden",
    postcode: "HP16",
    description: "Bringing our expertise to Great Missenden and the surrounding Chiltern villages.",
    landmarks: ["Roald Dahl Museum", "Missenden Abbey", "Chiltern Hills"],
    distance: "8 miles",
    href: "/areas/great-missenden/",
  },
  {
    name: "Chorleywood",
    postcode: "WD3",
    description: "Serving Chorleywood with the same family-owned service and attention to detail.",
    landmarks: ["Chorleywood Common", "Chorleywood Station", "Local Golf Club"],
    distance: "5 miles",
    href: "/areas/chorleywood/",
  },
  {
    name: "High Wycombe",
    postcode: "HP10-HP15",
    description: "Extending our services to High Wycombe and the surrounding areas.",
    landmarks: ["Wycombe Swan", "Hughenden Manor", "The Chilterns"],
    distance: "10 miles",
    href: "/areas/high-wycombe/",
  },
];

export default function AreasPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Areas', item: 'https://www.olivercharlesgardendesign.co.uk/areas/' }
            ]
          })
        }}
      />

      {/* Schema.org Place & Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Place',
              name: 'Amersham',
              description: 'Amersham, Buckinghamshire - our home base and primary service area.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Suite 103, Unit 5, Chiltern business center, 63-65 Woodside Rd',
                addressLocality: 'Amersham',
                addressRegion: 'Buckinghamshire',
                postalCode: 'HP6 6AA',
                addressCountry: 'GB'
              }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Garden Landscaping Services',
              description: 'Garden design & landscaping services across Buckinghamshire including Amersham, Chesham, Beaconsfield, Chalfont St Giles & surrounding areas.',
              provider: {
                '@type': 'HomeAndConstructionBusiness',
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
              },
              areaServed: areas.map((area) => ({
                '@type': 'City',
                name: area.name
              }))
            }
          ]),
        }}
      />

      {/* Hero */}
      <section className="py-24 bg-[var(--color-forest)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-[11px] tracking-[0.15em] uppercase text-[var(--color-bronze)] font-medium mb-4">
              Areas We Cover
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white mb-6">
              Serving Buckinghamshire & Beyond
            </h1>
            <p className="text-lg text-white/70">
              Based in Amersham, we provide our premium garden design & build services across Buckinghamshire 
              and the surrounding Home Counties. We&apos;re local, so we&apos;re never far away.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-24 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <a
                key={area.name}
                href={area.href}
                className="group bg-[var(--color-off-white)] p-6 border border-[var(--color-border)] hover:border-[var(--color-bronze)]/40 hover:shadow-lg transition-all duration-300 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[var(--color-bronze)]/10 flex items-center justify-center group-hover:bg-[var(--color-bronze)] transition-colors">
                    <MapPin className="w-6 h-6 text-[var(--color-bronze)] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-[var(--color-text-light)] bg-[var(--color-stone)] px-2 py-1">
                    {area.distance}
                  </span>
                </div>

                <h2 className="text-xl font-medium text-[var(--color-text)] mb-1 group-hover:text-[var(--color-bronze)] transition-colors">
                  {area.name}
                </h2>
                <p className="text-sm text-[var(--color-bronze)] font-medium mb-3">{area.postcode}</p>
                <p className="text-[var(--color-text-light)] text-sm leading-relaxed mb-4">
                  {area.description}
                </p>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <p className="text-xs text-[var(--color-text-light)] mb-2">Local landmarks:</p>
                  <div className="flex flex-wrap gap-1">
                    {area.landmarks.map((landmark, i) => (
                      <span
                        key={i}
                        className="text-xs text-[var(--color-text-light)] bg-[var(--color-stone)] px-2 py-1"
                      >
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Map & CTA Section */}
          <div className="mt-16 grid lg:grid-cols-2 gap-8 items-stretch">
            {/* CTA Box */}
            <div className="bg-[var(--color-stone)] border border-[var(--color-border)] p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-medium text-[var(--color-text)] mb-4">
                Not Sure If We Cover Your Area?
              </h3>
              <p className="text-[var(--color-text-light)] mb-6">
                We&apos;re based in Amersham and typically work within a 15-mile radius. 
                If you&apos;re in Buckinghamshire, Hertfordshire, or nearby counties, 
                get in touch – we may still be able to help with your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact/#contact-form"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-forest)] hover:bg-[var(--color-forest-light)] text-white font-medium rounded-none transition-colors"
                >
                  Check Your Area
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="tel:+447837666766"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-off-white)] font-medium rounded-none transition-colors"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-[var(--color-forest)] h-80 overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98909.85774278657!2d-0.71705265!3d51.67593355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487660e1c1b42bcd%3A0xd0b638a92b1f74dd!2sAmersham!5e0!3m2!1sen!2suk!4v1709999999999!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amersham and surrounding areas - Serving Buckinghamshire"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 text-xs text-[var(--color-text)] font-medium shadow-lg max-w-[200px]">
                <span className="font-semibold">Serving:</span><br/>
                Amersham, Chesham, Beaconsfield, Chalfont St Giles, Little Chalfont, Great Missenden, Chorleywood & High Wycombe
              </div>
            </div>
          </div>

          {/* County Coverage */}
          <div className="mt-16 text-center">
            <p className="text-[var(--color-text-light)] mb-4">We primarily serve the following counties:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Buckinghamshire", "Hertfordshire", "Middlesex", "Oxfordshire"].map((county) => (
                <span
                  key={county}
                  className="px-4 py-2 bg-[var(--color-off-white)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium"
                >
                  {county}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
