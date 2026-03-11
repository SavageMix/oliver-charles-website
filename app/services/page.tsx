"use client";

import Image from "next/image";
import { ArrowRight, Phone, Check } from "lucide-react";

const services = [
  {
    id: "porcelain-patios",
    title: "Porcelain Patios",
    description: "Premium porcelain patio installations featuring frost-resistant, slip-proof paving with stunning designs that last decades.",
    image: "/images/porcelain-patio.jpg",
    features: ["Frost & slip-resistant", "Stain-proof surface", "10+ year lifespan", "Low maintenance"],
  },
  {
    id: "composite-decking",
    title: "Composite Decking",
    description: "Beautiful composite decking that combines the natural warmth of timber with zero maintenance requirements.",
    image: "/images/composite-decking.jpg",
    features: ["Won't rot or warp", "No staining required", "25+ year lifespan", "Eco-friendly"],
  },
  {
    id: "glass-balustrades",
    title: "Glass Balustrades",
    description: "Elegant glass balustrade installations that provide safety without compromising your stunning views.",
    image: "/images/glass-balustrade.jpg",
    features: ["Frameless options", "BS compliant", "Easy-clean coating", "Indoor & outdoor"],
  },
  {
    id: "garden-landscaping",
    title: "Garden Landscaping",
    description: "Complete garden transformations from design to completion. Hard and soft landscaping tailored to your vision.",
    image: "/images/landscaping-service.jpg",
    features: ["Complete redesign", "Hard & soft landscaping", "Water features", "5-year guarantee"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
              <span className="block text-[#c9b896] text-2xl md:text-3xl mt-2">Garden Design & Build</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional garden landscaping services in Amersham, Chesham, Beaconsfield 
              and throughout Buckinghamshire. From porcelain patios to complete garden transformations.
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

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Professional installation by Oliver Charles Garden Design`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-[#666666] mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[#666666]">
                          <Check className="w-4 h-4 text-[#c9b896]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/services/${service.id}/`}
                      className="inline-flex items-center text-[#c9b896] font-semibold hover:underline mt-auto"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-4">
              Why Choose Oliver Charles?
            </h2>
            <p className="text-[#666666]">
              We bring expertise, craftsmanship and dedication to every project.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "10+ Years Experience",
                description: "Over 5 years creating beautiful outdoor spaces across Buckinghamshire."
              },
              {
                title: "5-Year Guarantee",
                description: "All our work comes with a comprehensive 5-year workmanship guarantee."
              },
              {
                title: "Local Expertise",
                description: "Based in Amersham, serving Chesham, Beaconsfield and surrounding areas."
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-3">{item.title}</h3>
                <p className="text-[#666666]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2c2c2c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get a free, no-obligation quote. We serve Amersham, Chesham, Beaconsfield and all surrounding areas.
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
