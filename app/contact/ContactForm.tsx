"use client";

import { useState } from "react";
import { Send, CheckCircle, Star } from "lucide-react";

const services = [
  "Porcelain Patio",
  "Composite Decking",
  "Glass Balustrade",
  "Full Landscaping",
  "Other",
];

export default function ContactForm() {
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
        setSubmitError(data.error || `Server error ${response.status}: please try again.`);
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
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
      <div className="text-center py-12">
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
    <>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[var(--color-bronze)] text-[var(--color-bronze)]" />
          ))}
        </div>
        <p className="text-sm text-[var(--color-text-light)] mb-3">
          Trusted by homeowners across Buckinghamshire
        </p>
        <div className="w-12 h-px bg-[var(--color-bronze)] mx-auto mb-5" />
        <h3 className="text-2xl font-serif font-medium text-[var(--color-text)] mb-2">Request a Free Quote</h3>
        <p className="text-[var(--color-text-light)] text-sm">
          Fill in the form below and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

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
            placeholder="+44 7837 666766"
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
          rows={4}
          className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors resize-none"
          placeholder="Please describe your project, including any specific requirements or ideas you have in mind..."
        />
      </div>

      {submitError && (
        <div className="p-4 bg-red-50 text-red-600">
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
            Send Enquiry
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      {/* Trust Badges */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-[var(--color-border)]">
        <div className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-[var(--color-bronze)] text-[var(--color-bronze)]">
            <CheckCircle className="w-3 h-3" />
          </span>
          <span>We&apos;ll reply within 24 hours</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-[var(--color-bronze)] text-[var(--color-bronze)]">
            <CheckCircle className="w-3 h-3" />
          </span>
          <span>Your details are never shared</span>
        </div>
      </div>
    </form>
    </>
  );
}
