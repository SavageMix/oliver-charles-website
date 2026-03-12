"use client";

import { useState } from "react";

export default function QuickContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: '',
          phone: formData.phone,
          service: formData.service,
          postcode: '',
          message: formData.message
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ firstName: '', lastName: '', phone: '', service: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-2">Request a Free Quote</h3>
      <p className="text-white/80 mb-6">
        Tell us about your project and we&apos;ll get back to you within 24 hours.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-1">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#c9b896]"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-1">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#c9b896]"
              placeholder="Smith"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-white/90 mb-1">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#c9b896]"
            placeholder="07837666766"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/90 mb-1">Service Required</label>
          <select 
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#c9b896]"
            required
          >
            <option value="" className="text-[#2c2c2c]">Select a service...</option>
            <option value="porcelain-patio" className="text-[#2c2c2c]">Porcelain Patio</option>
            <option value="composite-decking" className="text-[#2c2c2c]">Composite Decking</option>
            <option value="glass-balustrade" className="text-[#2c2c2c]">Glass Balustrade</option>
            <option value="other" className="text-[#2c2c2c]">Other Landscaping</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-white/90 mb-1">Message</label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#c9b896] resize-none"
            placeholder="Tell us about your project..."
            required
          />
        </div>
        {formStatus === 'success' && (
          <div className="bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded-lg text-center">
            Thank you! We&apos;ll be in touch soon.
          </div>
        )}
        {formStatus === 'error' && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-center">
            Something went wrong. Please try again.
          </div>
        )}
        <button
          type="submit"
          disabled={formStatus === 'submitting'}
          className="w-full bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] py-4 text-lg font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'}
        </button>
        <p className="text-xs text-white/60 text-center">
          We respect your privacy. Your information will never be shared.
        </p>
      </form>
    </div>
  );
}
