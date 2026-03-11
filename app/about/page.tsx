import type { Metadata } from "next";
import Image from "next/image";

import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { generateCanonicalMetadata } from "../lib/metadata";

export const metadata: Metadata = {
  title: "About Us | Oliver Charles Garden Design | Family-Run Landscapers Amersham",
  description: "Meet Oliver Charles Garden Design & Build - your trusted family-run landscaping specialists in Amersham. 10+ years experience, 5-year guarantee, premium materials.",
  keywords: "about us, garden designers, landscaping company, family business, Amersham, Buckinghamshire",
  openGraph: {
    title: "About Oliver Charles Garden Design & Build",
    description: "Family-run landscaping specialists in Amersham & Buckinghamshire",
    url: "https://www.olivercharlesgardendesign.com/about/",
  },
  ...generateCanonicalMetadata("/about"),
};

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#f5f0e6] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#666666]">
            <a href="/" className="hover:text-[#c9b896]">Home</a>
            <span className="mx-2">/</span>
            <span className="text-[#2c2c2c]">About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Oliver Charles</h1>
            <p className="text-xl text-gray-300">
              Your trusted local landscaping experts in Amersham, Buckinghamshire.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2c2c2c] mb-6">
                Your Trusted Local Landscaping Experts
              </h2>
              <p className="text-[#666666] text-lg mb-6">
                At <strong className="text-[#2c2c2c]">Oliver Charles Garden Design & Build</strong>, we take pride in being a family-run business with a genuine passion for transforming outdoor spaces across Amersham, Chesham, and the wider Buckinghamshire area.
              </p>
              <p className="text-[#666666] text-lg mb-6">
                Specialising in <strong>porcelain patios</strong>, <strong>composite decking</strong>, and <strong>glass balustrades</strong>, we bring a personal touch to every project. With over 10 years of experience serving homeowners in the HP6 and HP7 postcode areas, we understand the unique character of local properties.
              </p>
              <p className="text-[#666666] text-lg mb-8">
                Our commitment to excellence means we never cut corners. From the initial consultation to the final installation, we work closely with you to ensure your vision becomes reality.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Family-run local business",
                  "Fully insured & qualified",
                  "Premium UK-sourced materials",
                  "5-year guarantee on all work",
                  "Free, no-obligation quotes",
                  "10+ years experience",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#c9b896]" />
                    <span className="text-[#2c2c2c] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Oliver Charles Garden Design team at work on a landscaping project in Buckinghamshire"
                  width={600}
                  height={500}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-4">
              The Oliver Charles Difference
            </h2>
            <p className="text-[#666666]">
              When you choose us, you're partnering with a dedicated team that truly cares.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "5-Year Guarantee", desc: "Every installation comes with our comprehensive workmanship guarantee" },
              { title: "On-Time Completion", desc: "We respect your time and complete projects efficiently" },
              { title: "Eco-Friendly Materials", desc: "We prioritise sustainable, environmentally responsible materials" },
              { title: "Premium Quality", desc: "Only the finest materials from trusted UK suppliers" },
              { title: "Expert Craftsmanship", desc: "Our skilled team brings years of experience to every project" },
              { title: "Local Knowledge", desc: "We understand local properties, weather, and planning requirements" },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">{item.title}</h3>
                <p className="text-[#666666]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">Get In Touch</h2>
            <p className="text-[#666666]">Ready to start your project? We'd love to hear from you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-[#f5f0e6] rounded-xl">
              <Phone className="w-8 h-8 text-[#c9b896] mx-auto mb-4" />
              <h3 className="font-bold text-[#2c2c2c] mb-2">Phone</h3>
              <a href="tel:07837666766" className="text-[#666666] hover:text-[#c9b896]">07837 666 766</a>
            </div>
            <div className="text-center p-6 bg-[#f5f0e6] rounded-xl">
              <Mail className="w-8 h-8 text-[#c9b896] mx-auto mb-4" />
              <h3 className="font-bold text-[#2c2c2c] mb-2">Email</h3>
              <a href="mailto:enquiries@olivercharlesgardendesign.com" className="text-[#666666] hover:text-[#c9b896]">enquiries@olivercharlesgardendesign.com</a>
            </div>
            <div className="text-center p-6 bg-[#f5f0e6] rounded-xl">
              <MapPin className="w-8 h-8 text-[#c9b896] mx-auto mb-4" />
              <h3 className="font-bold text-[#2c2c2c] mb-2">Location</h3>
              <span className="text-[#666666]">Amersham, Buckinghamshire</span>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/contact/"
              className="inline-flex items-center px-8 py-4 bg-[#c9b896] text-[#2c2c2c] font-semibold rounded-lg hover:bg-[#a8956e] transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
