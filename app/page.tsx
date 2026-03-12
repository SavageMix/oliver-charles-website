import Image from "next/image";
import { Phone, ArrowRight, MapPin, Shield, Award, Check, Star, Calendar, Ruler } from "lucide-react";
import { generateCanonicalMetadata } from "./lib/metadata";
import { ProjectCard } from "./components/ProjectCard";
import ContactForm from "./components/QuickContactForm";

export const metadata = generateCanonicalMetadata("/");

const services = [
  {
    id: 'porcelain-patios',
    title: 'Porcelain Patios',
    subtitle: 'Elegant & Low-Maintenance Outdoor Living',
    description: 'Transform your garden with stunning porcelain patio installations in Amersham and Buckinghamshire. Our premium porcelain paving offers timeless beauty with minimal maintenance requirements.',
    features: ['Frost & slip-resistant surfaces', 'Stain and scratch-proof', 'Wide range of styles & colours', '10+ year lifespan', 'Easy to clean & maintain', 'Adds property value'],
    image: '/images/porcelain-patio.jpg',
    href: '/services/porcelain-patios/'
  },
  {
    id: 'composite-decking',
    title: 'Composite Decking',
    subtitle: 'Durable & Beautiful Outdoor Spaces',
    description: 'Elevate your outdoor living with premium composite decking solutions. Perfect for Amersham gardens, our decking combines natural wood aesthetics with modern durability.',
    features: ['No sanding or staining required', 'Weather-resistant materials', 'Anti-slip surface', 'Eco-friendly recycled materials', '25+ year warranty', 'Wide colour selection'],
    image: '/images/composite-decking.jpg',
    href: '/services/composite-decking/'
  },
  {
    id: 'glass-balustrades',
    title: 'Glass Balustrades',
    subtitle: 'Modern Safety with Uninterrupted Views',
    description: 'Enhance your property with custom glass balustrade installations. From balconies to staircases, our glass solutions provide safety without compromising on style or views.',
    features: ['Toughened safety glass', 'Frameless & framed options', 'BS building regulations compliant', 'Unobstructed views', 'Easy to clean', 'Modern aesthetic appeal'],
    image: '/images/glass-balustrade.jpg',
    href: '/services/glass-balustrades/'
  },
  {
    id: 'landscaping',
    title: 'Garden Landscaping',
    subtitle: 'Complete Outdoor Transformations',
    description: 'Full-service garden landscaping across Buckinghamshire. From design to completion, we create beautiful outdoor spaces tailored to your lifestyle and preferences.',
    features: ['Bespoke garden design', 'Hard & soft landscaping', 'Garden lighting', 'Water features', 'Planting schemes', 'Ongoing maintenance'],
    image: '/images/landscaping.jpg',
    href: '/services/garden-landscaping/'
  }
];

const projects = [
  {
    id: 1,
    title: 'Modern Porcelain Patio - Hemel Hempstead',
    location: 'Hemel Hempstead, HP3',
    category: 'Porcelain Patio',
    date: 'July 2024',
    size: '90m²',
    description: 'A stunning 90m² modern porcelain patio installation featuring Kandla grey tiles with elegant two-tone border detailing. The project included professionally recessed manholes and seamless integration with bi-fold doors.',
    image: '/images/projects/project-7/porcelain-patio-hemel-hempstead-kandla-grey-tiles-1.jpg',
    images: ['/images/projects/project-7/porcelain-patio-hemel-hempstead-kandla-grey-tiles-1.jpg', '/images/projects/project-7/porcelain-patio-hemel-hempstead-recessed-manhole-2.jpg', '/images/projects/project-7/porcelain-patio-hemel-hempstead-two-tone-border-3.jpg', '/images/projects/project-7/porcelain-patio-hemel-hempstead-bifold-integration-4.jpg'],
    features: ['Kandla grey porcelain tiles', 'Recessed manholes', 'Two-tone border detail', '90m² installation', 'Bi-fold door integration'],
    testimonial: {
      quote: "Absolutely thrilled with our new patio. The Kandla grey tiles look fantastic and the two-tone border adds a lovely finishing touch. Professional service from start to finish.",
      author: "Charlie's Patio",
      location: "Hemel Hempstead"
    }
  },
  {
    id: 2,
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
    id: 3,
    title: 'Garden Transformation - Bourne End',
    location: 'Bourne End, SL8',
    category: 'Full Landscaping',
    date: 'October 2025',
    size: '150m²',
    description: 'A complete garden transformation featuring premium decking with glass balustrade, raised porcelain patio, contemporary planting scheme and ambient garden lighting.',
    image: '/images/projects/project-3/garden-transformation-bourne-end-patio-2.jpg',
    images: ['/images/projects/project-3/garden-transformation-bourne-end-before-after-1.jpg', '/images/projects/project-3/garden-transformation-bourne-end-glass-balustrade-4.jpg', '/images/projects/project-3/garden-transformation-bourne-end-detail-6.jpg', '/images/projects/project-3/garden-transformation-bourne-end-patio-2.jpg'],
    features: ['Composite decking', 'Glass balustrade', 'Porcelain patio', 'Retaining wall', 'Garden lighting'],
    testimonial: {
      quote: "We couldn't be happier with our new garden. The team was professional, hardworking and the attention to detail was outstanding. The glass balustrade on the retaining wall looks amazing!",
      author: "Hannah",
      location: "Bourne End"
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

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-patio.jpg"
            alt="Beautiful porcelain patio installation in Amersham garden"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c2c2c]/90 via-[#2c2c2c]/70 to-[#2c2c2c]/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-white space-y-8">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#c9b896]/20 backdrop-blur-sm border border-[#c9b896]/30 rounded-full text-sm font-medium text-[#c9b896]">
                  <Shield className="w-4 h-4" />
                  5-Year Guarantee
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90">
                  <Award className="w-4 h-4" />
                  Family Run
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90">
                  <MapPin className="w-4 h-4" />
                  Amersham & Buckinghamshire
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
                  OLIVER CHARLES
                  <span className="block text-[#c9b896]">GARDEN DESIGN & BUILD</span>
                </h1>
                <p className="text-xl text-white/90 max-w-xl">
                  Specialising in Landscaping & Construction
                </p>
                <p className="text-lg text-white/80 max-w-xl">
                  Premium porcelain patios, composite decking, and glass balustrades 
                  installed by Amersham&apos;s trusted family-run landscaping specialists. 
                  Serving Buckinghamshire including Chesham, Beaconsfield & Chalfont.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c9b896] rounded-full" />
                  <span>Free Site Survey</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c9b896] rounded-full" />
                  <span>Competitive Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c9b896] rounded-full" />
                  <span>Fully Insured</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] text-lg font-semibold rounded-lg transition-colors group"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:07837666766"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] text-lg font-semibold rounded-lg transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call 07837666766
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <div className="flex -space-x-3">
                  {['O', 'C', 'G', 'D'].map((letter, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-[#c9b896] border-2 border-white flex items-center justify-center text-[#2c2c2c] text-xs font-bold"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-[#c9b896] fill-[#c9b896]" />
                    ))}
                  </div>
                  <p className="text-sm text-white/80">
                    <a href="/testimonials/" className="font-semibold text-white hover:text-[#c9b896] transition-colors underline decoration-[#c9b896]/50 hover:decoration-[#c9b896]">
                      Five Star reviews
                    </a> from our Happy customers
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Contact Form */}
            <div className="hidden lg:block">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#c9b896]/20 text-[#2c2c2c] rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c2c2c] mb-6">
              Our Landscaping Services
            </h2>
            <p className="text-lg text-[#666666]">
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
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-xl h-full"
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
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/60 to-transparent md:bg-gradient-to-r" />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-[#c9b896] text-sm font-semibold uppercase tracking-wide">
                        {service.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-[#2c2c2c] mt-2 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-[#666666] mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#c9b896] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#666666]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={service.href}
                      className="w-full flex items-center justify-center px-4 py-3 border-2 border-[#c9b896] text-[#2c2c2c] hover:bg-[#c9b896] rounded-lg font-medium transition-colors group/btn"
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
            <p className="text-[#666666] mb-4">
              Not sure which service is right for your project?
            </p>
            <a
              href="/contact/"
              className="inline-flex items-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors"
            >
              Get Free Expert Advice
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c2c2c] mb-4">
              Recent Projects in Buckinghamshire
            </h2>
            <p className="text-[#666666]">
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
              className="inline-flex items-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#c9b896]/20 text-[#2c2c2c] rounded-full text-sm font-semibold mb-4">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2c2c2c] mb-6">
                Your Trusted Local Landscaping Experts in Amersham
              </h2>
              <p className="text-[#666666] text-lg mb-6">
                At <strong className="text-[#2c2c2c]">Oliver Charles Garden Design & Build</strong>, we take pride in being a family-run business with a genuine passion for transforming outdoor spaces across Amersham, Chesham, and the wider Buckinghamshire area.
              </p>
              <p className="text-[#666666] text-lg mb-8">
                Specialising in <strong>porcelain patios</strong>, <strong>composite decking</strong>, and <strong>glass balustrades</strong>, we bring a personal touch to every project. With over 10 years of experience serving homeowners in the HP6 and HP7 postcode areas.
              </p>
              <a
                href="/about/"
                className="inline-flex items-center px-6 py-3 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Oliver Charles Garden Design team at work on a landscaping project in Buckinghamshire"
                  width={600}
                  height={500}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#c9b896]/20 text-[#c9b896] rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              The Oliver Charles{" "}
              <span className="text-[#c9b896]">Difference</span>
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
                className="group p-8 bg-[#3d3d3d]/50 rounded-2xl border border-[#3d3d3d] hover:border-[#c9b896]/50 hover:bg-[#3d3d3d] transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-white/60 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-16 border-t border-[#3d3d3d]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#c9b896] mb-2">Fully Insured</div>
                <p className="text-white/60 text-sm">Public liability coverage</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c9b896] mb-2">Free Quotes</div>
                <p className="text-white/60 text-sm">No obligation estimates</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c9b896] mb-2">Local Business</div>
                <p className="text-white/60 text-sm">Amersham based team</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c9b896] mb-2">5★ Rated</div>
                <p className="text-white/60 text-sm">Customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover Section */}
      <section id="areas" className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#c9b896]/20 text-[#2c2c2c] rounded-full text-sm font-semibold mb-4">
              Areas We Cover
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c2c2c] mb-4">
              Serving <span className="text-[#c9b896]">Buckinghamshire</span> & Beyond
            </h2>
            <p className="text-[#666666]">
              Based in Amersham, we provide our premium landscaping services across Buckinghamshire and the surrounding Home Counties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <a
                key={area.name}
                href="/areas/"
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#c9b896]/10 hover:border-[#c9b896]/30 block h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#c9b896]/20 rounded-xl flex items-center justify-center group-hover:bg-[#c9b896] transition-colors">
                    <MapPin className="w-6 h-6 text-[#c9b896] group-hover:text-[#2c2c2c] transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-[#666666] bg-[#f5f0e6] px-2 py-1 rounded-full">
                    {area.distance}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#2c2c2c] mb-1 group-hover:text-[#c9b896] transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-[#c9b896] font-medium mb-3">{area.postcode}</p>
                <p className="text-[#666666] text-sm leading-relaxed mb-4">
                  {area.description}
                </p>

                <div className="pt-4 border-t border-[#f5f0e6]">
                  <p className="text-xs text-[#666666] mb-2">Local landmarks:</p>
                  <div className="flex flex-wrap gap-1">
                    {area.landmarks.map((landmark, i) => (
                      <span
                        key={i}
                        className="text-xs text-[#666666] bg-[#f5f0e6] px-2 py-1 rounded"
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
              className="inline-flex items-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors"
            >
              View All Areas We Cover
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c2c2c] mb-6">
            Ready to Start Your <span className="text-[#c9b896]">Garden Project</span>?
          </h2>
          <p className="text-lg text-[#666666] mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. We&apos;d love to discuss your landscaping project in Amersham or Buckinghamshire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] text-lg font-semibold rounded-lg transition-colors"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:07837666766"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#c9b896] text-[#2c2c2c] hover:bg-[#c9b896] text-lg font-semibold rounded-lg transition-colors"
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
