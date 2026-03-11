"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services/", label: "Services" },
    { href: "/about/", label: "About" },
    { href: "/projects/", label: "Projects" },
    { href: "/testimonials/", label: "Testimonials" },
    { href: "/areas/", label: "Areas" },
    { href: "/faq/", label: "FAQ" },
    { href: "/contact/", label: "Contact" },
  ];

  // Determine if we're on a page that should have transparent nav initially
  const isHomePage = pathname === "/";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? "bg-[#2c2c2c]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className="font-bold text-white"
            >
              <span className="block text-sm font-normal opacity-80 tracking-wider">OLIVER CHARLES</span>
              <span className="block text-lg tracking-wide">GARDEN DESIGN & BUILD</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-0 xl:space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-white/80 hover:text-[#c9b896] hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <a
                href="tel:07837666766"
                className="flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-medium text-white/80 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">07837666766</span>
                <span className="xl:hidden">Call Us</span>
              </a>
              <a
                href="/contact/"
                className="bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold px-2 xl:px-3 py-2 rounded-md transition-colors text-xs xl:text-base whitespace-nowrap"
              >
                <span className="hidden xl:inline">CONTACT US</span>
                <span className="xl:hidden">CONTACT</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-[#2c2c2c] shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-white/80 hover:text-[#c9b896] hover:bg-white/5 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="tel:07837666766"
                className="flex items-center gap-2 px-4 py-3 text-white/80 font-medium"
              >
                <Phone className="w-5 h-5" />
                07837666766
              </a>
              <a
                href="/contact/"
                className="block w-full text-center mt-2 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold px-4 py-3 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
