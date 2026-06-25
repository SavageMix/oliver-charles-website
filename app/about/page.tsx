import Image from "next/image";
import { ArrowRight, Users, Gem, Leaf, Shield, Award, Clock, CheckCircle, Phone } from "lucide-react";
import { generateCanonicalMetadata } from "../lib/metadata";

export const metadata = generateCanonicalMetadata("/about", {
  title: "About Us | Oliver Charles Garden Design | Family-Owned Landscapers",
  description: "Meet Oliver Charles Garden Design & Build - your trusted family-owned landscaping specialists in Amersham. 10+ years experience, 5-year guarantee."
});

export default function AboutPage() {
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
              { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.olivercharlesgardendesign.co.uk/about/' }
            ]
          })
        }}
      />

      {/* Schema.org AboutPage & Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              name: 'About Us | Oliver Charles Garden Design | Family-Owned Landscapers',
              description: 'Meet Oliver Charles Garden Design & Build - your trusted family-owned landscaping specialists in Amersham. 10+ years experience, 5-year guarantee.',
              url: 'https://www.olivercharlesgardendesign.co.uk/about/',
              mainEntity: {
                '@type': 'Organization',
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
                sameAs: [
                  'https://www.google.com/maps/place/?q=place_id:ChIJJ--wA6YE_CIRI_NAoevhoAY'
                ]
              }
            }
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative bg-[var(--color-forest)] text-white overflow-hidden">
        <div className="absolute inset-0 lg:left-[45%]">
          <Image
            src="/images/new-website-design/hero for about page.webp"
            alt="Oliver Charles Garden Design landscaped garden"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-forest)] via-[var(--color-forest)]/90 to-[var(--color-forest)]/30 lg:via-[var(--color-forest)]/80 lg:to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] tracking-[0.15em] uppercase text-[var(--color-bronze)] font-medium mb-4">
              ABOUT OLIVER CHARLES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 leading-[1.05]">
              Designed with Purpose.<br />
              Built Without Compromise.
            </h1>
            <div className="w-16 h-0.5 bg-[var(--color-bronze)] mb-6" />
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              Oliver Charles was founded with one simple goal â€” to create exceptional outdoor spaces through considered design, meticulous craftsmanship and a commitment to doing things properly.
            </p>
          </div>
        </div>
      </section>

      {/* A Different Approach */}
      <section className="py-20 md:py-28 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <span className="inline-block text-[11px] tracking-[0.15em] uppercase text-[var(--color-bronze)] font-medium mb-4">
                ENGINEERED TO LAST
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[var(--color-text)] mb-6 leading-[1.1]">
                Ground-Up Construction. Zero Compromise.
              </h2>
              <div className="space-y-5 text-[var(--color-text-light)] leading-relaxed">
                <p>
                  A great garden relies entirely on what sits beneath the surface. We do not just roll out turf and lay slabs; we engineer the entire outdoor space. From substantial site clearance and deep excavation to correct drainage layouts and load-bearing sub-bases, our builds are physically structurally sound.
                </p>
                <p>
                  Every project we undertake is built completely in-house by our own team. We manage the structural masonry, precision brickwork, custom timber framing, and porcelain paving from day one until handover.
                </p>
                <p>
                  We do not rush ground preparation, and we do not cut corners on material specifications. We build gardens designed to handle the British weather and remain perfectly level for decades.
                </p>
              </div>
            </div>

            {/* Right Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-lg overflow-hidden">
              {[
                { icon: Users, title: "Family-Owned", desc: "Every project is personally managed from consultation through to completion." },
                { icon: Gem, title: "Exceptional Craftsmanship", desc: "Attention to detail at every stage, from the foundations to the final finishing touches." },
                { icon: Leaf, title: "Premium Materials", desc: "We carefully select products that combine longevity, performance and timeless design." },
                { icon: Shield, title: "Built to Last", desc: "Every installation is completed using proven construction methods and backed by our workmanship guarantee." },
                { icon: CheckCircle, title: "Fully Insured & Qualified", desc: "Complete peace of mind knowing your project is in safe hands." },
                { icon: Award, title: "10+ Years Experience", desc: "Over a decade of hands-on experience delivering exceptional outdoor spaces." },
              ].map((item) => (
                <div key={item.title} className="bg-[var(--color-off-white)] p-8 text-center">
                  <item.icon className="w-8 h-8 text-[var(--color-bronze)] mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-[var(--color-text)] font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image Placeholder */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[var(--color-forest-dark)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/60">
                <span className="text-2xl font-serif italic mb-2">Photo of me</span>
                <span className="text-xl font-serif italic">coming soon!</span>
              </div>
            </div>

            {/* Founder Content */}
            <div>
              <span className="inline-block text-[11px] tracking-[0.15em] uppercase text-[var(--color-bronze)] font-medium mb-4">
                MEET THE FOUNDER
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-[var(--color-text)] mb-2">
                Oliver Charles
              </h2>
              <p className="text-xl text-[var(--color-bronze)] italic font-serif mb-8">
                Founder & Director
              </p>
              <div className="space-y-5 text-[var(--color-text-light)] leading-relaxed mb-8">
                <p>
                  I started Oliver Charles because I believed homeowners deserved a better experience.
                </p>
                <p>
                  Not just beautiful gardens. But thoughtful communication, honest advice and craftsmanship that stands the test of time.
                </p>
              </div>
              <p className="text-3xl font-serif italic text-[var(--color-text)]">
                Oliver Charles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-28 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[var(--color-text)] mb-12">
            Our Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { num: "01", title: "Site Survey & Brief", desc: "We visit your property to assess the ground conditions, check levels, analyze drainage requirements, and map out your structural layout goals." },
              { num: "02", title: "Master Planning & Spec", desc: "We engineer a comprehensive master plan, mapping out the precise materials, structural brickwork details, and structural sub-base depths required." },
              { num: "03", title: "Fixed Itemized Estimate", desc: "You receive a fully transparent, breakdown cost estimate. No hidden fees, no guesswork—clear material pricing and timelines from the start." },
              { num: "04", title: "In-House Groundworks", desc: "Our team handles the entire build. We manage the deep excavation, drainage installations, heavy brickwork, and precision masonry entirely in-house." },
              { num: "05", title: "Final Sign-Off & Handover", desc: "We conduct a final structural walk-through with you to inspect levels, clean the site completely, and formally sign off on your new outdoor space." },
            ].map((item, idx) => (
              <div key={item.num} className="relative">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-bronze)] text-[var(--color-bronze)] text-sm font-medium mb-4">
                  {item.num}
                </span>
                <h3 className="text-[var(--color-text)] font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{item.desc}</p>
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-5 left-14 right-0 h-px bg-[var(--color-border)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-[var(--color-forest)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {[
              { icon: Award, value: "10+", label: "Years Experience" },
              { icon: Leaf, value: "50+", label: "Projects Completed" },
              { icon: Shield, value: "5 Years", label: "Workmanship Guarantee" },
              { icon: Users, value: "100%", label: "Personally Managed" },
            ].map((stat, idx) => (
              <div key={stat.label} className={`text-center ${idx < 3 ? 'lg:border-r lg:border-white/20' : ''}`}>
                <stat.icon className="w-7 h-7 text-[var(--color-bronze)] mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl font-serif text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / CTA */}
      <section className="py-20 md:py-28 bg-[var(--color-stone)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-7xl font-serif text-[var(--color-bronze)] leading-none">&ldquo;</span>
              <p className="text-2xl md:text-3xl font-serif font-medium text-[var(--color-text)] -mt-4 mb-6">
                We treat every project as if it were our own home.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-[var(--color-text-light)] leading-relaxed">
                From small patios to complete garden transformations, our commitment to quality and service is the same.
              </p>
              <a
                href="/contact/#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-dark)] text-white text-sm font-medium rounded-none transition-colors"
              >
                BOOK A CONSULTATION
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
