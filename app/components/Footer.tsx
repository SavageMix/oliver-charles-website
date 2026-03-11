"use client";


import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Projects', href: '/testimonials/' },
  { label: 'Testimonials', href: '/testimonials/' },
  { label: 'Areas We Cover', href: '/areas/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
];

const services = [
  { label: 'Porcelain Patios', href: '/services/porcelain-patios/' },
  { label: 'Composite Decking', href: '/services/composite-decking/' },
  { label: 'Glass Balustrades', href: '/services/glass-balustrades/' },
  { label: 'Garden Landscaping', href: '/services/garden-landscaping/' },
];

const areas = [
  { label: 'Amersham (HP6, HP7)', href: '/areas/amersham/' },
  { label: 'Chesham (HP5)', href: '/areas/chesham/' },
  { label: 'Beaconsfield (HP9)', href: '/areas/' },
  { label: 'Chalfont St Giles (HP8)', href: '/areas/' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] text-white/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="block text-sm text-white/50 tracking-wider">OLIVER CHARLES</span>
              <span className="block text-xl font-bold text-white tracking-wide">GARDEN DESIGN & BUILD</span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Family-run garden design and build specialists in Amersham, Buckinghamshire. 
              Transforming outdoor spaces with porcelain patios, composite decking, 
              and glass balustrades since 2015.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:07837666766" 
                className="flex items-center gap-3 text-white/60 hover:text-[#c9b896] transition-colors"
              >
                <Phone className="w-5 h-5" />
                07837666766
              </a>
              <a 
                href="mailto:enquiries@olivercharlesgardendesign.com" 
                className="flex items-center gap-3 text-white/60 hover:text-[#c9b896] transition-colors"
              >
                <Mail className="w-5 h-5" />
                enquiries@olivercharlesgardendesign.com
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <MapPin className="w-5 h-5" />
                Amersham, Buckinghamshire
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-[#c9b896] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a 
                    href={service.href}
                    className="text-white/60 hover:text-[#c9b896] transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-lg mb-6 mt-8">Areas We Cover</h3>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area.label}>
                  <a 
                    href={area.href}
                    className="text-white/60 hover:text-[#c9b896] transition-colors"
                  >
                    {area.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Business Hours</h3>
            <ul className="space-y-3 text-white/60 mb-8">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>

            <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9b896] transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:text-[#2c2c2c]" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9b896] transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:text-[#2c2c2c]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/50 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Oliver Charles Garden Design & Build. All rights reserved.</p>
              <p className="mt-1">
                Family-run garden design and build specialists in Amersham, Buckinghamshire.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <a href="/privacy-policy/" className="hover:text-[#c9b896] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms/" className="hover:text-[#c9b896] transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-[#c9b896] rounded-lg flex items-center justify-center hover:bg-[#a8956e] transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-[#2c2c2c]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
