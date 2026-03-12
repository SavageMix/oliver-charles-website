"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

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

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#c9b896]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-[#c9b896]" />
        </div>
        <h4 className="text-xl font-bold text-[#2c2c2c] mb-2">Thank You!</h4>
        <p className="text-[#666666]">
          Your enquiry has been sent. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
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
            placeholder="07837 666 766"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#666666] mb-1">
            Service Interested In
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#c9b896]/30 focus:outline-none focus:ring-2 focus:ring-[#c9b896] focus:border-transparent"
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
          <label className="block text-sm font-medium text-[#666666] mb-1">
            Postcode
          </label>
          <input
            type="text"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#c9b896]/30 focus:outline-none focus:ring-2 focus:ring-[#c9b896] focus:border-transparent"
            placeholder="HP6 5EQ"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#666666] mb-1">
          Tell us about your project
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-[#c9b896]/30 focus:outline-none focus:ring-2 focus:ring-[#c9b896] focus:border-transparent resize-none"
          placeholder="Please describe your project, including any specific requirements or ideas you have in mind..."
        />
      </div>

      {submitError && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
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

      <p className="text-sm text-[#666666] text-center">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  );
}
