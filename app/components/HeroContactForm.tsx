"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

export default function HeroContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3001/api/contact' : '/api/contact';
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.name,
          lastName: '',
          email: formData.email,
          phone: formData.phone,
          service: '',
          postcode: formData.location,
          message: formData.message
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', location: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-[var(--color-off-white)] rounded-sm shadow-2xl p-6 sm:p-8 lg:p-10">
      <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--color-forest)] mb-2">
        Start Your Project
      </h3>
      <div className="w-12 h-[2px] bg-[var(--color-bronze)] mb-4" />
      <p className="text-[var(--color-text-light)] mb-6 text-sm leading-relaxed">
        Every project begins with a conversation about your ideas, budget and timescale.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-[var(--color-text)] mb-2">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-[var(--color-text)] mb-2">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
            placeholder="Your email address"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-[var(--color-text)] mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
            placeholder="Your phone number"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-[var(--color-text)] mb-2">
            Project Location
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
            placeholder="e.g. Amersham, Buckinghamshire"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-[var(--color-text)] mb-2">
            Tell us about your project
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full px-4 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors resize-none"
            placeholder="Tell us about your project..."
            required
          />
        </div>

        {formStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-center text-sm">
            Thank you! We&apos;ll be in touch soon.
          </div>
        )}
        {formStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-center text-sm">
            Something went wrong. Please try again.
          </div>
        )}

        <button
          type="submit"
          disabled={formStatus === 'submitting'}
          className="w-full bg-[var(--color-forest)] hover:bg-[var(--color-forest-light)] text-[var(--color-off-white)] py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formStatus === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
        </button>

        <p className="flex items-center justify-center gap-2 text-xs text-[var(--color-text-light)] text-center">
          <Lock className="w-3 h-3" />
          Your details are safe with us and will never be shared.
        </p>
      </form>
    </div>
  );
}
