import Image from "next/image";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Building2, Home, TreePine, Map } from "lucide-react";
import { generateCanonicalMetadata } from "../lib/metadata";
import ContactForm from "./ContactForm";

export const metadata = generateCanonicalMetadata("/contact", {
  title: "Contact Us | Free Quotes | Oliver Charles Garden Design",
  description: "Get in touch for a free quote on your garden project. Call +44 7837 666766 or fill out our contact form. Serving Amersham, Chesham & Buckinghamshire."
});

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* BreadcrumbList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.olivercharlesgardendesign.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.olivercharlesgardendesign.co.uk/contact/' }
            ]
          })
        }}
      />

      {/* Schema.org ContactPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Us | Free Quotes | Oliver Charles Garden Design',
            description: 'Get in touch for a free quote on your garden project. Call +44 7837 666766 or fill out our contact form. Serving Amersham, Chesham & Buckinghamshire.',
            url: 'https://www.olivercharlesgardendesign.co.uk/contact/',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'Oliver Charles Garden Design & Build',
              url: 'https://www.olivercharlesgardendesign.co.uk',
              telephone: '+447837666766',
              email: 'info@ocgardendesign.co.uk',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Suite 103, Unit 5, Chiltern business center, 63-65 Woodside Rd',
                addressLocality: 'Amersham',
                addressRegion: 'Buckinghamshire',
                postalCode: 'HP6 6AA',
                addressCountry: 'GB'
              },
              image: 'https://www.olivercharlesgardendesign.co.uk/og-image.jpg',
              openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-14:00'
            }
          }),
        }}
      />

      {/* Contact Hero Section */}
      <section className="contact-hero relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/new-website-design/hero for contact page 2.png"
          alt="Composite decking and pergola garden design by Oliver Charles"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#123C2C]/85 via-[#123C2C]/50 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 sm:pt-28 lg:pt-32">
          {/* Hero Text */}
          <div className="max-w-xl lg:pl-10">
            <span className="inline-block text-[11px] tracking-[0.15em] uppercase text-[var(--color-bronze)] font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 leading-tight">
              Ready to Transform Your Outdoor Space?
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-md leading-relaxed">
              Contact us today for a free, no-obligation quote. We&apos;d love to discuss
              your landscaping project in Amersham or Buckinghamshire.
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 mt-20 sm:mt-24 lg:mt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            {/* Contact Info Card */}
            <div className="contact-info-card bg-[#123C2C] text-white border border-[#A67B46]/40 rounded-xl p-10 shadow-2xl order-2 lg:order-1">
            <span className="inline-block text-[10px] tracking-[0.15em] uppercase text-[var(--color-bronze)] font-medium mb-3">
              We&apos;re Here to Help
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-white mb-3 leading-tight">
              Let&apos;s Bring Your Vision to Life
            </h2>
            <p className="text-sm text-white/70 mb-6 max-w-sm">
              Every enquiry is answered personally by Oliver, not a call centre.
            </p>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-5 mb-6">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full border border-[var(--color-bronze)] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[var(--color-bronze)]" />
                </div>
                <div>
                  <h3 className="font-medium text-xs mb-0.5">Phone</h3>
                  <a
                    href="tel:+447837666766"
                    className="text-sm text-white/80 hover:text-[var(--color-bronze)] transition-colors"
                  >
                    +44 7837 666766
                  </a>
                  <p className="text-xs text-white/50 mt-0.5">Call or WhatsApp us anytime</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full border border-[var(--color-bronze)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[var(--color-bronze)]" />
                </div>
                <div>
                  <h3 className="font-medium text-xs mb-0.5">Email</h3>
                  <a
                    href="mailto:info@ocgardendesign.co.uk"
                    className="text-sm text-white/80 hover:text-[var(--color-bronze)] transition-colors"
                  >
                    info@ocgardendesign.co.uk
                  </a>
                  <p className="text-xs text-white/50 mt-0.5">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full border border-[var(--color-bronze)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-bronze)]" />
                </div>
                <div>
                  <h3 className="font-medium text-xs mb-0.5">Areas Covered</h3>
                  <p className="text-sm text-white/80">Amersham, Buckinghamshire</p>
                  <p className="text-xs text-white/50 mt-0.5">Serving HP6, HP7 and surrounding areas</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full border border-[var(--color-bronze)] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-bronze)]" />
                </div>
                <div>
                  <h3 className="font-medium text-xs mb-0.5">Opening Hours</h3>
                  <p className="text-sm text-white/80">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-white/80">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-xs text-white/50 mt-0.5">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Our Promise */}
            <div className="border border-[var(--color-bronze)]/60 p-4">
              <h3 className="font-medium text-sm text-[var(--color-bronze)] mb-2.5">Our Promise</h3>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2 text-white/80">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-bronze)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Free site consultation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-bronze)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Expert advice and honest pricing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-bronze)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Detailed quotation within 24-48 hours</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-bronze)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">5-year workmanship guarantee</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-bronze)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">No pressure or hard sell</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form Card */}
          <div className="quote-form-card bg-[#FCFBF8] text-[#1E1E1E] rounded-xl p-10 shadow-2xl order-1 lg:order-2">
            <div id="contact-form" className="scroll-mt-24">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 md:py-24 bg-[var(--color-stone)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
            {/* Left - Heading */}
            <div>
              <span className="inline-block text-[11px] tracking-[0.15em] uppercase text-[var(--color-bronze)] font-medium mb-4">
                Proudly Serving
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[var(--color-text)] mb-4">
                Areas We Cover
              </h2>
              <div className="w-12 h-px bg-[var(--color-bronze)] mb-4" />
              <p className="text-[var(--color-text-light)] leading-relaxed">
                We provide landscaping services throughout Buckinghamshire and the Home Counties.
              </p>
            </div>

            {/* Right - Area Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Amersham", detail: "HP6", icon: Building2 },
                { name: "Chesham", detail: "HP5", icon: Home },
                { name: "Beaconsfield", detail: "HP9", icon: TreePine },
                { name: "High Wycombe", detail: "HP10, HP11", icon: MapPin },
                { name: "Surrounding Areas", detail: "Buckinghamshire", icon: Map },
              ].map((area) => (
                <a
                  key={area.name}
                  href={area.name === "Surrounding Areas" ? "/areas/" : `/areas/${area.name.toLowerCase().replace(/ /g, '-')}/`}
                  className="group flex flex-col items-center text-center py-6 px-3 bg-[var(--color-off-white)] hover:bg-[var(--color-stone)] transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[var(--color-bronze)] text-[var(--color-bronze)] mb-4 group-hover:bg-[var(--color-bronze)] group-hover:text-[var(--color-forest)] transition-colors">
                    <area.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-medium text-[var(--color-text)] mb-1 text-sm">{area.name}</h3>
                  <p className="text-xs text-[var(--color-text-light)]">{area.detail}</p>
                </a>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-[var(--color-text-light)] mt-10">
            If you&apos;re unsure if we cover your area, just get in touch — we&apos;re always happy to help.
          </p>
        </div>
      </section>
    </main>
  );
}
