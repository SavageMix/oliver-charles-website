"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects/", label: "Projects" },
    { href: "/services/", label: "Services" },
    { href: "/about/", label: "About" },
    { href: "/contact/", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-forest)] border-b border-white/10"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-[var(--color-bronze)] flex items-center justify-center text-[var(--color-bronze)] font-serif text-lg group-hover:bg-[var(--color-bronze)] group-hover:text-[var(--color-forest)] transition-colors">
                OC
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-medium tracking-[0.2em] text-[var(--color-bronze)] uppercase">
                  Oliver Charles
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-[0.15em] text-white/70 uppercase">
                  Garden Design & Build
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase transition-colors ${
                    isActive(link.href)
                      ? "text-[var(--color-bronze)]"
                      : "text-white/80 hover:text-[var(--color-bronze)]"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-[var(--color-bronze)]" />
                  )}
                </a>
              ))}
            </div>

            {/* CTA & Phone */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:07837666766"
                className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-[var(--color-bronze)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                07837 666766
              </a>
              <a
                href="/contact/#contact-form"
                className="px-5 py-2.5 border border-[var(--color-bronze)] text-[var(--color-bronze)] text-xs font-semibold tracking-[0.1em] uppercase hover:bg-[var(--color-bronze)] hover:text-[var(--color-forest)] transition-colors"
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-[var(--color-forest)] border-t border-white/10 shadow-xl transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-sm font-medium tracking-[0.1em] uppercase rounded ${
                  isActive(link.href)
                    ? "text-[var(--color-bronze)] bg-white/5"
                    : "text-white/80 hover:text-[var(--color-bronze)] hover:bg-white/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
              <a
                href="tel:07837666766"
                className="flex items-center gap-2 px-4 py-3 text-white/80 font-medium"
              >
                <Phone className="w-5 h-5" />
                07837 666766
              </a>
              <a
                href="/contact/#contact-form"
                className="block w-full text-center px-4 py-3 bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-light)] text-[var(--color-forest)] font-semibold tracking-[0.1em] uppercase transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
