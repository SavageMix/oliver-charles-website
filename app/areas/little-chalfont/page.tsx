import type { Metadata } from "next";
import { MapPin, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Garden Design & Landscaping Little Chalfont HP7 | Oliver Charles",
  description: "Local landscapers in Little Chalfont. Porcelain patios, composite decking, glass balustrades. 5-year guarantee. Free quotes in Little Chalfont HP7.",
  keywords: "landscaping Little Chalfont, garden design Little Chalfont, patio Little Chalfont, decking Little Chalfont, HP7, Chalfont Park",
  openGraph: {
    title: "Landscaping Services in Little Chalfont",
    description: "Garden design & build specialists in Little Chalfont",
    url: "https://www.olivercharlesgardendesign.com/areas/little-chalfont/",
  },
  alternates: {
    canonical: "https://www.olivercharlesgardendesign.com/areas/little-chalfont/",
  },
};

const services = [
  "Porcelain Patio Installation",
  "Composite Decking",
  "Glass Balustrades",
  "Garden Landscaping",
  "Driveway Paving",
  "Garden Lighting",
];

const landmarks = [
  "Little Chalfont Station",
  "Chalfont Park",
  "Chiltern Open Air Museum",
  " local Nature Reserve",
  "The Greyhound",
];

export const dynamic = "force-static";

export default function LittleChalfontPage() {
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
            <span className="text-[#2c2c2c]">Little Chalfont</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#c9b896]" />
              <span className="text-[#c9b896]">2 miles from our base</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Landscaping Services in <span className="text-[#c9b896]">Little Chalfont</span>
            </h1>
            <p className="text-xl text-gray-300">
              Transforming gardens in Little Chalfont with porcelain patios, decking, and glass balustrades. 
              Your local landscaping experts just moments away.
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
                Garden Design & Landscaping in Little Chalfont
              </h2>
              <p className="text-[#666666] text-lg mb-6">
                We're just around the corner from Little Chalfont, making us perfectly positioned 
                to serve this lovely village. From properties near the station to homes in the 
                quieter residential areas, we bring the same dedication to every project.
              </p>
              <p className="text-[#666666] text-lg mb-8">
                Our Little Chalfont portfolio includes stunning wood-effect porcelain patios that 
                combine the beauty of timber with the durability of modern materials.
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
              <h3 className="text-xl font-bold text-[#2c2c2c] mb-6">Areas we serve:</h3>
              <div className="bg-[#f5f0e6] p-6 rounded-xl mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[#c9b896]" />
                  <span className="font-bold text-[#2c2c2c]">Postcode: HP7</span>
                </div>
                <ul className="space-y-2">
                  {["Little Chalfont Village", "Chalfont Park", "Amersham Border", "Chalfont St Peter Border"].map((area) => (
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

      {/* CTA */}
      <section className="py-16 bg-[#2c2c2c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Free Little Chalfont Quote
          </h2>
          <p className="text-gray-300 mb-8">
            Contact your local Little Chalfont landscapers today. Free site survey and quote.
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
