import Image from "next/image";
import { Phone, ArrowRight, MapPin, Shield, Award, Check, Star, Ruler, Leaf, Hammer, Sprout } from "lucide-react";
import { generateCanonicalMetadata } from "./lib/metadata";
import { ProjectCard } from "./components/ProjectCard";
import HeroContactForm from "./components/HeroContactForm";

export const metadata = generateCanonicalMetadata("/");

const services = [
  {
    id: 'porcelain-patios',
    title: 'Porcelain Patios',
    subtitle: 'Elegant & Low-Maintenance Outdoor Living',
    description: 'Transform your garden with stunning porcelain patio installations in Amersham and Buckinghamshire. Our premium porcelain paving offers timeless beauty with minimal maintenance requirements.',
    features: ['Frost & slip-resistant surfaces', 'Stain and scratch-proof', 'Wide range of styles & colours', '10+ year lifespan', 'Easy to clean & maintain', 'Adds property value'],
    image: '/images/porcelain-patio.webp',
    href: '/services/porcelain-patios/'
  },
  {
    id: 'composite-decking',
    title: 'Composite Decking',
    subtitle: 'Durable & Beautiful Outdoor Spaces',
    description: 'Elevate your outdoor living with premium composite decking solutions. Perfect for Amersham gardens, our decking combines natural wood aesthetics with modern durability.',
    features: ['No sanding or staining required', 'Weather-resistant materials', 'Anti-slip surface', 'Eco-friendly recycled materials', '25+ year warranty', 'Wide colour selection'],
    image: '/images/composite-decking.webp',
    href: '/services/composite-decking/'
  },
  {
    id: 'glass-balustrades',
    title: 'Glass Balustrades',
    subtitle: 'Modern Safety with Uninterrupted Views',
    description: 'Enhance your property with custom glass balustrade installations. From balconies to staircases, our glass solutions provide safety without compromising on style or views.',
    features: ['Toughened safety glass', 'Frameless & framed options', 'BS building regulations compliant', 'Unobstructed views', 'Easy to clean', 'Modern aesthetic appeal'],
    image: '/images/glass-balustrade.webp',
    href: '/services/glass-balustrades/'
  },
  {
    id: 'landscaping',
    title: 'Garden Landscaping',
    subtitle: 'Complete Outdoor Transformations',
    description: 'Full-service garden landscaping across Buckinghamshire. From design to completion, we create beautiful outdoor spaces tailored to your lifestyle and preferences.',
    features: ['Bespoke garden design', 'Hard & soft landscaping', 'Garden lighting', 'Water features', 'Planting schemes', 'Ongoing maintenance'],
    image: '/images/landscaping.webp',
    href: '/services/garden-landscaping/'
  }
];

const projects = [
  {
    id: 1,
    slug: 'modern-porcelain-patio-hemel-hempstead',
    title: 'Modern Porcelain Patio - Hemel Hempstead',
    location: 'Hemel Hempstead, HP3',
    category: 'Porcelain Patio',
    date: 'July 2024',
    size: '90m²',
    description: 'A stunning 90m² modern porcelain patio installation featuring Kandla grey tiles with elegant two-tone border detailing. The project included professionally recessed manholes and seamless integration with bi-fold doors.',
    image: '/images/projects/project-11/porcelain-patio-hemel-hempstead-bifold-integration-4.jpg',
    images: ['/images/projects/project-11/porcelain-patio-hemel-hempstead-kandla-grey-tiles-1.jpg', '/images/projects/project-11/porcelain-patio-hemel-hempstead-recessed-manhole-2.jpg', '/images/projects/project-11/porcelain-patio-hemel-hempstead-two-tone-border-3.jpg', '/images/projects/project-11/porcelain-patio-hemel-hempstead-bifold-integration-4.jpg'],
    features: ['Kandla grey porcelain tiles', 'Recessed manholes', 'Two-tone border detail', '90m² installation', 'Bi-fold door integration'],
    testimonial: {
      quote: "Absolutely thrilled with our new patio. The Kandla grey tiles look fantastic and the two-tone border adds a lovely finishing touch. Professional service from start to finish.",
      author: "Charlie's Patio",
      location: "Hemel Hempstead"
    }
  },
  {
    id: 2,
    slug: 'egyptian-limestone-patio-herringbone-beaconsfield',
    title: 'Egyptian Limestone Patio',
    location: 'Beaconsfield, HP9',
    category: 'Full Landscaping',
    date: 'December 2025',
    size: '120m²',
    description: 'A total garden refurbishment featuring Egyptian limestone paving with herringbone detailed work, new turf area, water feature and front drive transformation.',
    image: '/images/projects/project-2/egyptian-limestone-beaconsfield-aerial-view-1.jpg',
    images: ['/images/projects/project-2/egyptian-limestone-beaconsfield-aerial-view-1.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-main-patio-2.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-herringbone-3.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-garden-4.jpg'],
    features: ['Egyptian limestone patio', 'Herringbone pattern detail', 'Water feature', 'Planting areas', 'New turf lawn'],
    testimonial: {
      quote: "Absolutely love our new garden! The Egyptian limestone with the herringbone pattern is stunning. The team worked tirelessly and the result is beyond what we imagined.",
      author: "Kaylee",
      location: "Beaconsfield"
    }
  },
  {
    id: 12,
    slug: 'raised-porcelain-patio-lighting-amersham',
    title: 'Raised Porcelain Patio with Lighting',
    location: 'Amersham',
    category: 'Porcelain Patio',
    date: 'Feb 2023',
    size: '110m²',
    description: 'A new raised porcelain patio with lighting around the perimeter, creating a stunning outdoor entertaining space for evening use.',
    image: '/images/projects/project-12/porcelain-patio-high-wycombe-4.jpg',
    images: ['/images/projects/project-12/porcelain-patio-high-wycombe-4.jpg', '/images/projects/project-12/porcelain-patio-high-wycombe-3.jpg', '/images/projects/project-12/porcelain-patio-high-wycombe-1.jpg', '/images/projects/project-12/porcelain-patio-high-wycombe-2.jpg'],
    features: ['Raised porcelain patio', 'Perimeter lighting', '110m² installation', 'Evening entertaining space', 'Modern design'],
    testimonial: {
      quote: "TLDR",
      author: "Tom",
      location: "Amersham"
    }
  }
];

const whyChooseUs = [
  { title: '5-Year Guarantee', description: 'Every installation comes with our comprehensive 5-year workmanship guarantee, giving you complete peace of mind.' },
  { title: 'On-Time Completion', description: 'We respect your time. Our projects are completed efficiently without compromising on quality.' },
  { title: 'Eco-Friendly Materials', description: 'We prioritise sustainable, environmentally responsible materials wherever possible.' },
  { title: 'Premium Quality', description: 'Only the finest materials from trusted UK suppliers make it into our projects.' },
  { title: 'Expert Craftsmanship', description: 'Our skilled team brings years of experience and attention to detail to every project.' },
  { title: 'Local Knowledge', description: 'Based in Amersham, we understand local properties, weather conditions, and planning requirements.' },
];

const areas = [
  { name: 'Amersham', postcode: 'HP6, HP7', description: 'Our home base. We know Amersham properties inside out, from period homes to modern developments.', landmarks: ['Old Town', 'St Mary\'s Church', 'Amersham Museum'], distance: 'Local' },
  { name: 'Chesham', postcode: 'HP5', description: 'Serving Chesham and surrounding villages with dedication to quality craftsmanship.', landmarks: ['Town Centre', 'Lowndes Park', 'The Elgiva'], distance: '3 miles' },
  { name: 'Beaconsfield', postcode: 'HP9', description: 'Creating beautiful outdoor spaces for Beaconsfield homeowners, New Town to Old Town.', landmarks: ['Old Town', 'Bekonscot', 'Royal Standard'], distance: '6 miles' },
  { name: 'Chalfont St Giles', postcode: 'HP8', description: 'Proud to serve this charming Buckinghamshire village with premium landscaping.', landmarks: ['Milton\'s Cottage', 'The Vache', 'Village Centre'], distance: '4 miles' },
  { name: 'Little Chalfont', postcode: 'HP7', description: 'Transforming gardens with porcelain patios, decking, and glass balustrades.', landmarks: ['Station', 'Chalfont Park', 'Nature Reserve'], distance: '2 miles' },
  { name: 'Great Missenden', postcode: 'HP16', description: 'Bringing our expertise to Great Missenden and surrounding Chiltern villages.', landmarks: ['Roald Dahl Museum', 'Missenden Abbey', 'Chiltern Hills'], distance: '8 miles' },
];

const heroFeatures = [
  {
    icon: Ruler,
    title: 'Bespoke Design',
    description: 'Tailored to you and your lifestyle'
  },
  {
    icon: Leaf,
    title: 'Quality Materials',
    description: 'Carefully selected for lasting beauty'
  },
  {
    icon: Hammer,
    title: 'Expert Build',
    description: 'Skilled craftsmanship in every detail'
  },
  {
    icon: Sprout,
    title: 'Made to Last',
    description: 'Built to be enjoyed for years to come'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/new-website-design/hero-page.png"
            alt="Beautifully lit porcelain patio and garden design at night"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Forest Green Overlay - Left Side */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[var(--color-forest)] via-[var(--color-forest)]/85 to-transparent md:from-[var(--color-forest)] md:via-[var(--color-forest)]/80 md:to-transparent" />
        <div className="absolute inset-0 z-[1] hidden md:block bg-[var(--color-forest)]/75" style={{ clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0% 100%)' }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="text-white space-y-8">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-bronze)]/20 backdrop-blur-sm border border-[var(--color-bronze)]/30 text-sm font-medium text-[var(--color-bronze)]">
                  <Shield className="w-4 h-4" />
                  5-Year Guarantee
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white/90">
                  <Award className="w-4 h-4" />
                  Family Run
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white/90">
                  <MapPin className="w-4 h-4" />
                  Amersham & Buckinghamshire
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.1]">
                  Exceptional outdoor spaces, beautifully built.
                </h1>
                <div className="w-16 h-[2px] bg-[var(--color-bronze)]" />
                <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
                  We create considered gardens through thoughtful design, expert craftsmanship and meticulous construction.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="/projects/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-light)] text-[var(--color-forest)] text-sm font-semibold tracking-[0.1em] uppercase transition-colors group"
                >
                  View Our Work
                </a>
                <a
                  href="/contact/#contact-form"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:border-[var(--color-bronze)] text-white hover:text-[var(--color-bronze)] text-sm font-semibold tracking-[0.1em] uppercase transition-colors"
                >
                  Book a Consultation
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/20 max-w-md">
                <div className="flex -space-x-3">
                  {['O', 'C', 'G', 'D'].map((letter, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-[var(--color-bronze)] border-2 border-white flex items-center justify-center text-[var(--color-forest)] text-xs font-bold"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-[var(--color-bronze)] fill-[var(--color-bronze)]" />
                    ))}
                  </div>
                  <p className="text-sm text-white/80">
                    <a href="/testimonials/" className="font-medium text-white hover:text-[var(--color-bronze)] transition-colors underline decoration-[var(--color-bronze)]/50 hover:decoration-[var(--color-bronze)]">
                      Five Star reviews
                    </a> from our happy customers
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Project Enquiry Form */}
            <div className="hidden lg:block">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Features Bar */}
      <section className="bg-[var(--color-forest)] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {heroFeatures.map((feature, index) => (
              <div key={index} className="text-center md:text-left">
                <feature.icon className="w-8 h-8 text-[var(--color-bronze)] mx-auto md:mx-0 mb-4" strokeWidth={1.5} />
                <h3 className="text-white font-semibold tracking-[0.05em] uppercase text-sm mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Hero Form */}
      <section className="lg:hidden bg-[var(--color-stone)] py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <HeroContactForm />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-[var(--color-stone)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-bronze)] mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[var(--color-text)] mb-6">
              Our Landscaping Services
            </h2>
            <p className="text-lg text-[var(--color-text-light)]">
              Specialising in porcelain patios, composite decking, and glass balustrades, 
              we bring years of experience and a commitment to excellence to every project 
              across HP6, HP7 and surrounding areas.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="group overflow-hidden bg-[var(--color-off-white)] shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image */}
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading={service.id === 'porcelain-patios' ? 'eager' : 'lazy'}
                      priority={service.id === 'porcelain-patios'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/60 to-transparent md:bg-gradient-to-r" />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-[var(--color-bronze)] text-xs font-semibold tracking-[0.15em] uppercase">
                        {service.subtitle}
                      </span>
                      <h3 className="text-2xl font-serif font-medium text-[var(--color-text)] mt-2 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-[var(--color-text-light)] mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[var(--color-bronze)] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[var(--color-text-light)]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={service.href}
                      className="w-full flex items-center justify-center px-4 py-3 border border-[var(--color-forest)] text-[var(--color-forest)] hover:bg-[var(--color-forest)] hover:text-[var(--color-off-white)] text-sm font-semibold tracking-[0.05em] uppercase transition-colors group/btn"
                    >
                      Enquire About {service.title}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[var(--color-text-light)] mb-6">
              Not sure which service is right for your project?
            </p>
            <a
              href="/contact/#contact-form"
              className="inline-flex items-center px-8 py-4 bg-[var(--color-forest)] hover:bg-[var(--color-forest-light)] text-[var(--color-off-white)] text-sm font-semibold tracking-[0.1em] uppercase transition-colors"
            >
              Get Free Expert Advice
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 lg:py-32 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-bronze)] mb-4">
              Recent Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[var(--color-text)] mb-4">
              Recent Projects in Buckinghamshire
            </h2>
            <p className="text-[var(--color-text-light)]">
              Browse our portfolio of completed porcelain patios, composite decking, and glass balustrade installations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/projects/"
              className="inline-flex items-center px-8 py-4 bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-light)] text-[var(--color-forest)] text-sm font-semibold tracking-[0.1em] uppercase transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-[var(--color-stone)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-bronze)] mb-4">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[var(--color-text)] mb-6">
                Your Trusted Local Landscaping Experts in Amersham
              </h2>
              <p className="text-[var(--color-text-light)] text-lg mb-6 leading-relaxed">
                At <strong className="text-[var(--color-text)]">Oliver Charles Garden Design & Build</strong>, we take pride in being a family-run business with a genuine passion for transforming outdoor spaces across Amersham, Chesham, and the wider Buckinghamshire area.
              </p>
              <p className="text-[var(--color-text-light)] text-lg mb-8 leading-relaxed">
                Specialising in <strong>porcelain patios</strong>, <strong>composite decking</strong>, and <strong>glass balustrades</strong>, we bring a personal touch to every project. With over 10 years of experience serving homeowners in the HP6 and HP7 postcode areas.
              </p>
              <a
                href="/about/"
                className="inline-flex items-center px-6 py-3 bg-[var(--color-forest)] hover:bg-[var(--color-forest-light)] text-[var(--color-off-white)] text-sm font-semibold tracking-[0.1em] uppercase transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden shadow-xl">
                <Image
                  src="/images/about-team.webp"
                  alt="Oliver Charles Garden Design team at work on a landscaping project in Buckinghamshire"
                  width={600}
                  height={500}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--color-bronze)]/10 -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-[var(--color-bronze)]/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-forest)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-bronze)] mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-6">
              The Oliver Charles{" "}
              <span className="text-[var(--color-bronze)]">Difference</span>
            </h2>
            <p className="text-lg text-white/70">
              When you choose Oliver Charles Garden Design & Build, you&apos;re not just getting a landscaping service – 
              you&apos;re partnering with a dedicated team that truly cares about your outdoor space.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="group p-8 bg-[var(--color-forest-light)]/30 border border-white/10 hover:border-[var(--color-bronze)]/50 hover:bg-[var(--color-forest-light)]/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-white/60 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-serif font-medium text-[var(--color-bronze)] mb-2">Fully Insured</div>
                <p className="text-white/60 text-sm">Public liability coverage</p>
              </div>
              <div>
                <div className="text-2xl font-serif font-medium text-[var(--color-bronze)] mb-2">Free Quotes</div>
                <p className="text-white/60 text-sm">No obligation estimates</p>
              </div>
              <div>
                <div className="text-2xl font-serif font-medium text-[var(--color-bronze)] mb-2">Local Business</div>
                <p className="text-white/60 text-sm">Amersham based team</p>
              </div>
              <div>
                <div className="text-2xl font-serif font-medium text-[var(--color-bronze)] mb-2">5★ Rated</div>
                <p className="text-white/60 text-sm">Customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover Section */}
      <section id="areas" className="py-24 lg:py-32 bg-[var(--color-stone)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-bronze)] mb-4">
              Areas We Cover
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[var(--color-text)] mb-4">
              Serving <span className="text-[var(--color-bronze)]">Buckinghamshire</span> & Beyond
            </h2>
            <p className="text-[var(--color-text-light)]">
              Based in Amersham, we provide our premium landscaping services across Buckinghamshire and the surrounding Home Counties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <a
                key={area.name}
                href="/areas/"
                className="group bg-[var(--color-off-white)] p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--color-border)] hover:border-[var(--color-bronze)]/30 block h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[var(--color-forest)]/10 flex items-center justify-center group-hover:bg-[var(--color-forest)] transition-colors">
                    <MapPin className="w-6 h-6 text-[var(--color-forest)] group-hover:text-[var(--color-bronze)] transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-[var(--color-text-light)] bg-[var(--color-stone)] px-2 py-1">
                    {area.distance}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-forest)] transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-[var(--color-bronze)] font-medium mb-3">{area.postcode}</p>
                <p className="text-[var(--color-text-light)] text-sm leading-relaxed mb-4">
                  {area.description}
                </p>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <p className="text-xs text-[var(--color-text-light)] mb-2">Local landmarks:</p>
                  <div className="flex flex-wrap gap-1">
                    {area.landmarks.map((landmark, i) => (
                      <span
                        key={i}
                        className="text-xs text-[var(--color-text-light)] bg-[var(--color-stone)] px-2 py-1"
                      >
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/areas/"
              className="inline-flex items-center px-8 py-4 bg-[var(--color-forest)] hover:bg-[var(--color-forest-light)] text-[var(--color-off-white)] text-sm font-semibold tracking-[0.1em] uppercase transition-colors"
            >
              View All Areas We Cover
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-off-white)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[var(--color-text)] mb-6">
            Ready to Start Your <span className="text-[var(--color-bronze)]">Garden Project</span>?
          </h2>
          <p className="text-lg text-[var(--color-text-light)] mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. We&apos;d love to discuss your landscaping project in Amersham or Buckinghamshire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-light)] text-[var(--color-forest)] text-sm font-semibold tracking-[0.1em] uppercase transition-colors"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:07837666766"
              className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-forest)] text-[var(--color-forest)] hover:bg-[var(--color-forest)] hover:text-[var(--color-off-white)] text-sm font-semibold tracking-[0.1em] uppercase transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call 07837666766
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
