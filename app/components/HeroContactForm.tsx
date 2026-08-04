"use client";

import { useState } from "react";
import { Send, CheckCircle, Lock } from "lucide-react";

const services = [
  "Porcelain Patio",
  "Composite Decking",
  "Glass Balustrade",
  "Full Landscaping",
  "Other",
];

export default function HeroContactForm() {
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
      const API_URL = window.location.hostname === 'localhost'
        ? 'http://localhost:3001/api/contact'
        : 'https://www.olivercharlesgardendesign.co.uk/api/contact';
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data: { error?: string } = {};
      try {
        data = await response.json();
      } catch {
        // Response wasn't JSON
      }

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
        setSubmitError(data.error || `Server error ${response.status}: please try again.`);
      }
    } catch (error) {
      console.error('Home form submission error:', error);
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

  if (isSubmitted) {
    return (
      <div className="bg-[var(--color-off-white)] rounded-sm shadow-2xl p-6 sm:p-8 lg:p-10 text-center">
        <div className="w-16 h-16 bg-[var(--color-bronze)]/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-[var(--color-bronze)]" />
        </div>
        <h4 className="text-xl font-serif font-medium text-[var(--color-text)] mb-2">Thank You!</h4>
        <p className="text-[var(--color-text-light)]">
          Your enquiry has been sent. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-off-white)] rounded-sm shadow-2xl p-6 sm:p-8 lg:p-10">
      <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--color-forest)] mb-2">
        Start Your Project
      </h3>
      <div className="w-12 h-[2px] bg-[var(--color-bronze)] mb-4" />
      <p className="text-[var(--color-text-light)] mb-6 text-sm leading-relaxed">
        Every project begins with a conversation about your ideas, budget and timescale.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[var(--color-text)] mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[var(--color-text)] mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
              placeholder="Smith"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[var(--color-text)] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[var(--color-text)] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
              placeholder="09999999"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[var(--color-text)] mb-2">
              Service Interested In
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[var(--color-text)] mb-2">
              Postcode
            </label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
              placeholder="HP6 5EQ"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[var(--color-text)] mb-2">
            Tell us about your project
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            required
            className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        {submitError && (
          <div className="p-4 bg-red-50 text-red-600 text-sm">
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[var(--color-forest)] hover:bg-[var(--color-forest-light)] text-white font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Submit Enquiry
              <Send className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-2 text-xs text-[var(--color-text-light)] text-center">
          <Lock className="w-3 h-3" />
          Your details are safe with us and will never be shared.
        </p>
      </form>
    </div>
  );
}
