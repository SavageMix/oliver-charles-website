"use client";

import Image from "next/image";

import { useState } from "react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./components/ScrollReveal";
import { 
  Phone, 
  ArrowRight, 
  MapPin, 
  Shield, 
  Award,
  Check,
  Star,
  Calendar,
  Ruler,
  Clock,
  Leaf,
  ThumbsUp,
  Wrench,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

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
    },
    href: '/projects/'
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
    },
    href: '/projects/'
  },
  {
    id: 3,
    title: 'Garden Transformation',
    location: 'Bourne End, SL8',
    category: 'Full Landscaping',
    date: 'February 2024',
    size: '75m²',
    description: 'A total garden refurbishment featuring a retaining wall with glass balustrade, new porcelain patio and composite decking area. A complete outdoor transformation.',
    image: '/images/projects/project-3/garden-transformation-bourne-end-before-after-1.jpg',
    images: ['/images/projects/project-3/garden-transformation-bourne-end-before-after-1.jpg', '/images/projects/project-3/garden-transformation-bourne-end-glass-balustrade-4.jpg', '/images/projects/project-3/garden-transformation-bourne-end-detail-6.jpg', '/images/projects/project-3/garden-transformation-bourne-end-patio-2.jpg'],
    features: ['Porcelain patio', 'Composite decking', 'Glass balustrade', 'Retaining wall brickwork', 'Garden lighting'],
    testimonial: {
      quote: "We couldn't be happier with our new garden. The team was professional, hardworking and the attention to detail was outstanding. The glass balustrade on the retaining wall looks amazing!",
      author: "Hannah",
      location: "Bourne End"
    },
    href: '/projects/'
  }
];

const whyChooseUs = [
  { icon: Shield, title: '5-Year Guarantee', description: 'Every installation comes with our comprehensive 5-year workmanship guarantee, giving you complete peace of mind.' },
  { icon: Clock, title: 'On-Time Completion', description: 'We respect your time. Our projects are completed efficiently without compromising on quality.' },
  { icon: Leaf, title: 'Eco-Friendly Materials', description: 'We prioritise sustainable, environmentally responsible materials wherever possible.' },
  { icon: ThumbsUp, title: 'Premium Quality', description: 'Only the finest materials from trusted UK suppliers make it into our projects.' },
  { icon: Wrench, title: 'Expert Craftsmanship', description: 'Our skilled team brings years of experience and attention to detail to every project.' },
  { icon: MapPin, title: 'Local Knowledge', description: 'Based in Amersham, we understand local properties, weather conditions, and planning requirements.' },
];

const areas = [
  { 
    name: 'Amersham', 
    postcode: 'HP6, HP7',
    description: 'Our home base. We know Amersham properties inside out, from period homes to modern developments.',
    landmarks: ['Old Town', 'St Mary\'s Church', 'Amersham Museum'],
    distance: 'Local'
  },
  { 
    name: 'Chesham', 
    postcode: 'HP5',
    description: 'Serving Chesham and surrounding villages with dedication to quality craftsmanship.',
    landmarks: ['Town Centre', 'Lowndes Park', 'The Elgiva'],
    distance: '3 miles'
  },
  { 
    name: 'Beaconsfield', 
    postcode: 'HP9',
    description: 'Creating beautiful outdoor spaces for Beaconsfield homeowners, New Town to Old Town.',
    landmarks: ['Old Town', 'Bekonscot', 'Royal Standard'],
    distance: '6 miles'
  },
  { 
    name: 'Chalfont St Giles', 
    postcode: 'HP8',
    description: 'Proud to serve this charming Buckinghamshire village with premium landscaping.',
    landmarks: ['Milton\'s Cottage', 'The Vache', 'Village Centre'],
    distance: '4 miles'
  },
  { 
    name: 'Little Chalfont', 
    postcode: 'HP7',
    description: 'Transforming gardens with porcelain patios, decking, and glass balustrades.',
    landmarks: ['Station', 'Chalfont Park', 'Nature Reserve'],
    distance: '2 miles'
  },
  { 
    name: 'Great Missenden', 
    postcode: 'HP16',
    description: 'Bringing our expertise to Great Missenden and surrounding Chiltern villages.',
    landmarks: ['Roald Dahl Museum', 'Missenden Abbey', 'Chiltern Hills'],
    distance: '8 miles'
  },
];

export default function HomePage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: '',
    message: ''
  });

  // Project modal state (like projects page)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  const openImageLightbox = (image: string, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeImageLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      const newIndex = (lightboxIndex + 1) % selectedProject.images.length;
      setLightboxIndex(newIndex);
      setLightboxImage(selectedProject.images[newIndex]);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const newIndex = (lightboxIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
      setLightboxIndex(newIndex);
      setLightboxImage(selectedProject.images[newIndex]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const API_BASE = typeof window !== 'undefined' && window.location.hostname === 'localhost' 
        ? 'http://localhost:3001' 
        : '';
      
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: '', // Not collected in this form
          phone: formData.phone,
          service: formData.service,
          postcode: '', // Not collected in this form
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
                  installed by Amersham's trusted family-run landscaping specialists. 
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
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-2">Request a Free Quote</h3>
                <p className="text-white/80 mb-6">
                  Tell us about your project and we'll get back to you within 24 hours.
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
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
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
          </ScrollReveal>

          {/* Services Grid */}
          <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.15}>
            {services.map((service) => (
              <StaggerItem
                key={service.id}
              >
              <div className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-xl h-full">
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
                        {service.features.map((feature, i) => (
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
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
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
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c2c2c] mb-4">
              Recent Projects in Buckinghamshire
            </h2>
            <p className="text-[#666666]">
              Browse our portfolio of completed porcelain patios, composite decking, and glass balustrade installations.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {projects.map((project) => (
              <StaggerItem key={project.id}>
              <div 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#c9b896] text-[#2c2c2c] text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#666666] mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Ruler className="w-4 h-4" />
                      {project.size}
                    </span>
                  </div>
                  <p className="text-[#666666] text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center text-[#c9b896] font-semibold text-sm group-hover:text-[#a8956e]">
                    View Project Details
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="mt-12 text-center" delay={0.2}>
            <a
              href="/projects/"
              className="inline-flex items-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
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
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2} className="relative">
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
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
          </ScrollReveal>

          {/* Reasons Grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {whyChooseUs.map((reason, index) => (
              <StaggerItem key={index}>
              <div
                className="h-full group p-8 bg-[#3d3d3d]/50 rounded-2xl border border-[#3d3d3d] hover:border-[#c9b896]/50 hover:bg-[#3d3d3d] transition-all duration-300"
                className="group p-8 bg-[#3d3d3d]/50 rounded-2xl border border-[#3d3d3d] hover:border-[#c9b896]/50 hover:bg-[#3d3d3d] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[#c9b896]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#c9b896]/30 transition-colors">
                  <reason.icon className="w-7 h-7 text-[#c9b896]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-white/60 leading-relaxed">{reason.description}</p>
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Trust Badges */}
          <ScrollReveal delay={0.3} className="mt-16 pt-16 border-t border-[#3d3d3d]">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.1}>
              <StaggerItem>
                <div className="text-3xl font-bold text-[#c9b896] mb-2">Fully Insured</div>
                <p className="text-white/60 text-sm">Public liability coverage</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-3xl font-bold text-[#c9b896] mb-2">Free Quotes</div>
                <p className="text-white/60 text-sm">No obligation estimates</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-3xl font-bold text-[#c9b896] mb-2">Local Business</div>
                <p className="text-white/60 text-sm">Amersham based team</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-3xl font-bold text-[#c9b896] mb-2">5★ Rated</div>
                <p className="text-white/60 text-sm">Customer satisfaction</p>
              </StaggerItem>
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </section>

      {/* Areas We Cover Section */}
      <section id="areas" className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#c9b896]/20 text-[#2c2c2c] rounded-full text-sm font-semibold mb-4">
              Areas We Cover
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c2c2c] mb-4">
              Serving <span className="text-[#c9b896]">Buckinghamshire</span> & Beyond
            </h2>
            <p className="text-[#666666]">
              Based in Amersham, we provide our premium landscaping services across Buckinghamshire and the surrounding Home Counties.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {areas.map((area) => (
              <StaggerItem key={area.name}>
              <a
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
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal className="text-center mt-12" delay={0.3}>
            <a
              href="/areas/"
              className="inline-flex items-center px-8 py-4 border-2 border-[#c9b896] text-[#c9b896] hover:bg-[#c9b896] hover:text-[#2c2c2c] font-semibold rounded-lg transition-colors"
            >
              View All Areas We Cover
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#c9b896]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c2c2c] mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-[#2c2c2c]/80 text-lg mb-8">
            Contact us today for a free, no-obligation quote. We'd love to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2c2c2c] hover:bg-[#1a1a1a] text-white font-semibold rounded-lg transition-colors"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:07837666766"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              07837 666 766
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && !lightboxImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeProjectModal} />
          <div className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold text-[#2c2c2c]">{selectedProject.title}</h2>
                <div className="flex items-center gap-4 text-[#666666] text-sm mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Ruler className="w-4 h-4" />
                    {selectedProject.size}
                  </span>
                </div>
              </div>
              <button 
                onClick={closeProjectModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-6">
              {/* Images */}
              <div className="space-y-4">
                {selectedProject.images.map((image, idx) => (
                  <div 
                    key={idx} 
                    className="relative w-full group cursor-pointer rounded-xl overflow-hidden" 
                    style={{ paddingBottom: '75%' }}
                    onClick={() => openImageLightbox(image, idx)}
                  >
                    <Image
                      src={image}
                      alt={`${selectedProject.title} - view ${idx + 1}`}
                      fill
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-xl flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#2c2c2c] mb-2">Project Overview</h4>
                  <p className="text-[#666666]">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#2c2c2c] mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[#666666]">
                        <div className="w-1.5 h-1.5 bg-[#c9b896] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-[#f5f0e6] p-4 rounded-xl">
                  <p className="text-[#666666] italic mb-3">&ldquo;{selectedProject.testimonial.quote}&rdquo;</p>
                  <div className="text-sm">
                    <span className="font-semibold text-[#2c2c2c]">{selectedProject.testimonial.author}</span>
                    <span className="text-[#666666]"> — {selectedProject.testimonial.location}</span>
                  </div>
                </div>

                <a
                  href="/contact/"
                  onClick={closeProjectModal}
                  className="block w-full text-center bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Enquire About Similar Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {lightboxImage && selectedProject && (
        <div className="fixed inset-0 z-[200] animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/95" onClick={closeImageLightbox} />
          
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
            {/* Close Button */}
            <button 
              onClick={closeImageLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            {selectedProject.images.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
              <Image
                src={lightboxImage}
                alt={`${selectedProject.title} - view ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
              {lightboxIndex + 1} / {selectedProject.images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
