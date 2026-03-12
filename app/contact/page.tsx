import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { generateCanonicalMetadata } from "../lib/metadata";
import ContactForm from "./ContactForm";

export const metadata = generateCanonicalMetadata("/contact", {
  title: "Contact Us | Free Quotes | Oliver Charles Garden Design",
  description: "Get in touch for a free quote on your garden project. Call 07837 666 766 or fill out our contact form. Serving Amersham, Chesham & Buckinghamshire."
});

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Contact Section - Dark Background */}
      <section id="contact" className="py-24 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#c9b896]/20 text-[#c9b896] rounded-full text-sm font-semibold mb-4">
                Get In Touch
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your{" "}
                <span className="text-[#c9b896]">Outdoor Space?</span>
              </h1>
              <p className="text-lg text-white/70 mb-8">
                Contact us today for a free, no-obligation quote. We&apos;d love to discuss
                your landscaping project in Amersham or Buckinghamshire.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9b896]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#c9b896]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:07837666766"
                      className="text-white/70 hover:text-[#c9b896] transition-colors"
                    >
                      07837 666 766
                    </a>
                    <p className="text-sm text-white/50 mt-1">Call or WhatsApp us anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9b896]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#c9b896]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:enquiries@olivercharlesgardendesign.com"
                      className="text-white/70 hover:text-[#c9b896] transition-colors"
                    >
                      enquiries@olivercharlesgardendesign.com
                    </a>
                    <p className="text-sm text-white/50 mt-1">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9b896]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#c9b896]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-white/70">Amersham, Buckinghamshire</p>
                    <p className="text-sm text-white/50 mt-1">
                      Serving HP6, HP7 and surrounding areas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9b896]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#c9b896]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                    <p className="text-white/70">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-white/70">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-sm text-white/50 mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-[#c9b896]/10 border border-[#c9b896]/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-[#c9b896]" />
                  <h3 className="font-semibold text-lg">Our Promise</h3>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li>• Free, no-obligation site survey</li>
                  <li>• Detailed quote within 24-48 hours</li>
                  <li>• No pressure or hard sell</li>
                  <li>• Expert advice and honest pricing</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div id="contact-form" className="scroll-mt-24">
              <div className="bg-white rounded-2xl p-8 text-[#2c2c2c]">
                <h3 className="text-2xl font-bold mb-2">Request a Free Quote</h3>
                <p className="text-[#666666] mb-6">
                  Fill in the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">Areas We Cover</h2>
            <p className="text-[#666666]">
              We provide landscaping services throughout Buckinghamshire and the Home
              Counties.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Amersham",
              "Chesham",
              "Beaconsfield",
              "Chalfont St Giles",
              "Little Chalfont",
              "Great Missenden",
              "High Wycombe",
            ].map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white text-[#2c2c2c] rounded-full text-sm font-medium shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/areas/"
              className="inline-flex items-center text-[#c9b896] font-semibold hover:underline"
            >
              View all areas we cover
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
