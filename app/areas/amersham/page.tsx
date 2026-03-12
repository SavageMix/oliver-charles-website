import { MapPin, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { generateCanonicalMetadata } from "../../lib/metadata";

export const metadata = generateCanonicalMetadata("/areas/amersham", {
  title: "Garden Design & Landscaping Amersham HP6 HP7 | Oliver Charles",
  description: "Professional garden landscaping services in Amersham. Porcelain patios, composite decking, glass balustrades. Free quotes for HP6 & HP7 postcodes."
});

const services = [
  "Porcelain Patio Installation",
  "Composite Decking",
  "Glass Balustrades",
  "Garden Landscaping",
  "Retaining Walls",
  "Garden Lighting",
];

const landmarks = [
  "Amersham Old Town",
  "St Mary's Church",
  "Amersham Museum",
  "The Elephant & Castle",
  "Memorial Gardens",
];

export default function AmershamPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#f5f0e6] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#666666]">
            <a href="/" className="hover:text-[#c9b896]">Home</a>
            <span className="mx-2">/</span>
            <a href="/areas/" className="hover:text-[#c9b896]">Areas</a>
            <span className="mx-2">/</span>
            <span className="text-[#2c2c2c]">Amersham</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#c9b896]" />
              <span className="text-[#c9b896]">Our Home Base</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Landscaping Services in <span className="text-[#c9b896]">Amersham</span>
            </h1>
            <p className="text-xl text-gray-300">
              Your local garden design & build specialists in Amersham. We know Amersham properties 
              inside out, from period homes in Old Amersham to modern developments.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#2c2c2c] mb-6">
                Garden Design & Landscaping in Amersham
              </h2>
              <p className="text-[#666666] text-lg mb-6">
                As Amersham-based landscapers, we're never far away. We understand the unique character 
                of Amersham properties and gardens, from the historic cottages in Old Amersham to 
                contemporary homes in newer developments.
              </p>
              <p className="text-[#666666] text-lg mb-8">
                Our team provides expert landscaping services tailored to the local area, considering 
                the Chiltern landscape, local planning requirements, and the specific needs of 
                Amersham homeowners.
              </p>
              <h3 className="text-xl font-bold text-[#2c2c2c] mb-4">Services we offer:</h3>
              <ul className="space-y-3 mb-8">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c9b896]" />
                    <span className="text-[#666666]">{service}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/services/"
                className="inline-flex items-center px-6 py-3 bg-[#c9b896] text-[#2c2c2c] font-semibold rounded-lg hover:bg-[#a8956e] transition-colors"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2c2c2c] mb-6">Areas we serve in Amersham:</h3>
              <div className="bg-[#f5f0e6] p-6 rounded-xl mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[#c9b896]" />
                  <span className="font-bold text-[#2c2c2c]">Postcodes: HP6, HP7</span>
                </div>
                <ul className="space-y-2">
                  {["Old Amersham", "Amersham on the Hill", "Amersham Common", "Little Chalfont (border)"].map((area) => (
                    <li key={area} className="text-[#666666]">• {area}</li>
                  ))}
                </ul>
              </div>
              <h3 className="text-xl font-bold text-[#2c2c2c] mb-4">Local landmarks:</h3>
              <div className="flex flex-wrap gap-2">
                {landmarks.map((landmark) => (
                  <span key={landmark} className="px-3 py-1 bg-[#f5f0e6] text-[#666666] text-sm rounded-full">
                    {landmark}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">
              Why Choose a Local Amersham Landscaper?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Local Knowledge", desc: "We understand Amersham's soil conditions, drainage patterns, and local planning requirements." },
              { title: "Quick Response", desc: "Being based in Amersham means we can visit your property quickly for consultations and quotes." },
              { title: "Community Focus", desc: "We're proud to be part of the Amersham community and support local businesses." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">{item.title}</h3>
                <p className="text-[#666666]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2c2c2c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Free Amersham Quote
          </h2>
          <p className="text-gray-300 mb-8">
            Contact your local Amersham landscapers today. Free site survey and detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c9b896] text-[#2c2c2c] font-semibold rounded-lg hover:bg-[#a8956e] transition-colors"
            >
              Request Free Quote
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
