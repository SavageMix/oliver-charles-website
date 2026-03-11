"use client";

import { useState } from "react";

import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  "Porcelain Patio",
  "Composite Decking",
  "Glass Balustrade",
  "Full Landscaping",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    postcode: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          postcode: "",
          message: "",
        });
      } else {
        setSubmitError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError("Failed to send enquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                      href="#contact-form"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("contact-form")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-white/70 hover:text-[#c9b896] transition-colors cursor-pointer"
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

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#c9b896]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#c9b896]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#2c2c2c] mb-2">Thank You!</h4>
                    <p className="text-[#666666]">
                      Your enquiry has been sent. We&apos;ll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#666666] mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-[#c9b896]/30 focus:outline-none focus:ring-2 focus:ring-[#c9b896] focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#666666] mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-[#c9b896]/30 focus:outline-none focus:ring-2 focus:ring-[#c9b896] focus:border-transparent"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#666666] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-[#c9b896]/30 focus:outline-none focus:ring-2 focus:ring-[#c9b896] focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#666666] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-[#c9b896]/30 focus:outline-none focus:ring-2 focus:ring-[#c9b896] focus:border-transparent"
                          placeholder="07837666766"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#666666] mb-1">
                          Service Required *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-[#c9b896]/30 focus:outline-none focus:ring-2 focus:ring-[#c9b896] focus:border-transparent"
                        >
                          <option value="">Select a service...</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#666666] mb-1">
                          Your Postcode *
                        </label>
                        <input
                          type="text"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-[#c9b896]/30 focus:outline-none focus:ring-2 focus:ring-[#c9b896] focus:border-transparent"
                          placeholder="HP6 5XX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#666666] mb-1">
                        Tell Us About Your Project
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-[#c9b896]/30 focus:outline-none focus:ring-2 focus:ring-[#c9b896] focus:border-transparent resize-none"
                        placeholder="Please describe your project, including any specific requirements or questions..."
                      />
                    </div>

                    {submitError && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] py-4 text-lg font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 w-5 h-5 border-2 border-[#2c2c2c]/30 border-t-[#2c2c2c] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Enquiry
                        </>
                      )}
                    </button>

                    <p className="text-xs text-[#666666] text-center">
                      By submitting this form, you agree to our privacy policy. Your
                      information will never be shared with third parties.
                    </p>
                  </form>
                )}
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
