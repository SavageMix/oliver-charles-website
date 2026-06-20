
import { ArrowLeft, Home, Phone } from "lucide-react";

export const metadata = {
  title: "Page Not Found | Oliver Charles Garden Design",
  description: "Sorry, the page you're looking for doesn't exist. Browse our services or contact us for help.",
};

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[var(--color-stone)] flex items-center justify-center py-24">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="text-9xl font-bold text-[var(--color-bronze)] mb-4">404</div>
        <h1 className="text-4xl md:text-5xl font-medium text-[var(--color-text)] mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-[var(--color-text-light)] mb-8">
          Sorry, we couldn't find the page you're looking for. 
          It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-bronze)] text-[var(--color-forest)] font-semibold rounded-none hover:bg-[var(--color-bronze-light)] transition-colors"
          >
            <Home className="mr-2 w-5 h-5" />
            Back to Home
          </a>
          <a
            href="tel:+447837666766"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--color-forest)] text-[var(--color-forest)] font-semibold rounded-none hover:bg-[var(--color-forest)] hover:text-[var(--color-off-white)] transition-colors"
          >
            <Phone className="mr-2 w-5 h-5" />
            Call Us
          </a>
        </div>
        <div className="bg-[var(--color-off-white)] p-6 rounded-xl">
          <h2 className="text-lg font-medium text-[var(--color-text)] mb-4">Popular Pages</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/services/", label: "Our Services" },
              { href: "/services/porcelain-patios/", label: "Porcelain Patios" },
              { href: "/about/", label: "About Us" },
              { href: "/testimonials/", label: "Testimonials" },
              { href: "/areas/", label: "Areas We Cover" },
              { href: "/contact/#contact-form", label: "Contact Us" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-[var(--color-stone)] text-[var(--color-text)] rounded-lg hover:bg-[var(--color-bronze)] hover:text-[var(--color-forest)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
