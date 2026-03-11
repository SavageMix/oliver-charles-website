"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Check, Phone, MapPin, Calendar, Ruler, Star, X } from "lucide-react";

const projects = [
  {
    id: 2,
    title: 'Egyptian Limestone Patio',
    location: 'Beaconsfield, HP9',
    date: 'December 2025',
    size: '120m²',
    description: 'A total garden refurbishment featuring Egyptian limestone paving with herringbone detailed work, new turf area, water feature and front drive transformation.',
    features: ['Egyptian limestone patio', 'Herringbone pattern detail', 'Water feature', 'Planting areas', 'New turf lawn'],
    images: ['/images/projects/project-2/egyptian-limestone-beaconsfield-aerial-view-1.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-main-patio-2.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-herringbone-3.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-garden-4.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-walkway-5.jpg', '/images/projects/project-2/egyptian-limestone-beaconsfield-overview-6.jpg'],
    testimonial: {
      quote: "Absolutely love our new garden! The Egyptian limestone with the herringbone pattern is stunning. The team worked tirelessly.",
      author: "Kaylee",
      location: "Beaconsfield"
    }
  },
  {
    id: 3,
    title: 'Garden Transformation',
    location: 'Bourne End, SL8',
    date: 'February 2024',
    size: '75m²',
    description: 'A total garden refurbishment featuring a retaining wall with glass balustrade, new porcelain patio and composite decking area.',
    features: ['Porcelain patio', 'Composite decking', 'Glass balustrade', 'Retaining wall brickwork', 'Garden lighting'],
    images: ['/images/projects/project-3/garden-transformation-bourne-end-before-after-1.jpg', '/images/projects/project-3/garden-transformation-bourne-end-glass-balustrade-4.jpg', '/images/projects/project-3/garden-transformation-bourne-end-detail-6.jpg', '/images/projects/project-3/garden-transformation-bourne-end-patio-2.jpg', '/images/projects/project-3/garden-transformation-bourne-end-wall-5.jpg', '/images/projects/project-3/garden-transformation-bourne-end-decking-3.jpg'],
    testimonial: {
      quote: "We couldn't be happier with our new garden. The team was professional, hardworking and the attention to detail was outstanding.",
      author: "Hannah",
      location: "Bourne End"
    }
  }
];

const features = [
  'Complete garden redesign & build',
  'Hard and soft landscaping',
  'Water features & garden structures',
  'Planting schemes & lawn installation',
  'Lighting & irrigation systems',
  '5-year workmanship guarantee'
];

export default function GardenLandscapingPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const modalImagesRef = useRef<HTMLDivElement>(null);
  const targetImageIndexRef = useRef<number>(0);

  // Keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage || !selectedProject) return;
      
      if (e.key === 'Escape') {
        setLightboxImage(null);
      } else if (e.key === 'ArrowLeft') {
        const newIndex = lightboxIndex === 0 ? selectedProject.images.length - 1 : lightboxIndex - 1;
        setLightboxIndex(newIndex);
        setLightboxImage(selectedProject.images[newIndex]);
        targetImageIndexRef.current = newIndex;
      } else if (e.key === 'ArrowRight') {
        const newIndex = lightboxIndex === selectedProject.images.length - 1 ? 0 : lightboxIndex + 1;
        setLightboxIndex(newIndex);
        setLightboxImage(selectedProject.images[newIndex]);
        targetImageIndexRef.current = newIndex;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, lightboxIndex, selectedProject]);

  // Scroll to target image when lightbox closes
  useEffect(() => {
    if (!lightboxImage && selectedProject) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const targetEl = modalImagesRef.current?.querySelector(`[data-image-index="${targetImageIndexRef.current}"]`);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'instant', block: 'center' });
          }
        }, 100);
      });
    }
  }, [lightboxImage, selectedProject]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Garden Landscaping
              <span className="block text-[#c9b896] text-2xl md:text-3xl mt-2">Amersham & Buckinghamshire</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Complete garden transformations from design to completion. We bring your 
              outdoor vision to life across Amersham, Chesham, Beaconsfield and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:07837666766"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#c9b896] text-[#c9b896] font-semibold rounded-lg hover:bg-[#c9b896] hover:text-[#2c2c2c] transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                07837 666 766
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/landscaping.jpg"
                alt="Complete garden landscaping transformation in Buckinghamshire featuring patio installation and professional planting schemes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                priority
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-6">
                Complete Garden Transformations
              </h2>
              <p className="text-[#666666] text-lg mb-8">
                From initial concept to final planting, we handle every aspect of your 
                garden transformation. Our team combines creative design with expert 
                craftsmanship to create outdoor spaces that exceed expectations.
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-[#c9b896]" />
                    <span className="text-[#2c2c2c] font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-4">
              Our Landscaping Projects
            </h2>
            <p className="text-[#666666]">
              Browse our recent garden transformations across Buckinghamshire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} - Garden landscaping project in ${project.location}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#c9b896] text-[#2c2c2c] text-xs font-semibold rounded-full">
                      Full Landscaping
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 bg-white text-[#2c2c2c] text-sm font-semibold rounded-lg">
                      Click to view
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-[#666666] mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Ruler className="w-4 h-4" />
                      {project.size}
                    </span>
                  </div>
                  <p className="text-[#666666] mb-4">{project.description}</p>
                  
                  {/* Testimonial */}
                  <div className="bg-[#f5f0e6] p-4 rounded-xl">
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-[#c9b896] fill-[#c9b896]" />
                      ))}
                    </div>
                    <p className="text-[#666666] text-sm italic mb-2">&ldquo;{project.testimonial.quote}&rdquo;</p>
                    <p className="text-[#2c2c2c] text-sm font-medium">
                      {project.testimonial.author} — {project.testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">
              Garden Landscaping Areas
            </h2>
            <p className="text-[#666666]">
              We provide complete garden landscaping throughout Buckinghamshire and surrounding areas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Amersham', 'Chesham', 'Beaconsfield', 'Chalfont St Giles', 'Little Chalfont', 'Great Missenden', 'High Wycombe', 'Bourne End'].map((area) => (
              <span key={area} className="px-4 py-2 bg-[#f5f0e6] text-[#2c2c2c] rounded-full text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2c2c2c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get a free, no-obligation quote. We serve Amersham, Chesham, Beaconsfield and all surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors"
            >
              Request Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:07837666766"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#c9b896] text-[#c9b896] font-semibold rounded-lg hover:bg-[#c9b896] hover:text-[#2c2c2c] transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              07837 666 766
            </a>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && !lightboxImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelectedProject(null)} />
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
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-6">
              {/* Images */}
              <div ref={modalImagesRef} className="space-y-4">
                {selectedProject.images.map((image, idx) => (
                  <div 
                    key={idx}
                    data-image-index={idx}
                    className="relative w-full cursor-pointer rounded-xl overflow-hidden group"
                    style={{ paddingBottom: '75%' }}
                    onClick={() => { 
                      targetImageIndexRef.current = idx;
                      setLightboxImage(image);
                      setLightboxIndex(idx);
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${selectedProject.title} - view ${idx + 1}`}
                      fill
                      className="absolute inset-0 w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
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
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-[#c9b896] fill-[#c9b896]" />
                    ))}
                  </div>
                  <p className="text-[#666666] italic mb-3">&ldquo;{selectedProject.testimonial.quote}&rdquo;</p>
                  <div className="text-sm mb-2">
                    <span className="font-semibold text-[#2c2c2c]">{selectedProject.testimonial.author}</span>
                    <span className="text-[#666666]"> — {selectedProject.testimonial.location}</span>
                  </div>
                </div>

                <a
                  href="/contact/"
                  onClick={() => setSelectedProject(null)}
                  className="block w-full text-center bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Enquire About Similar Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxImage && selectedProject && (
        <div className="fixed inset-0 z-[200] animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/95" onClick={() => setLightboxImage(null)} />
          
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-6 text-white text-5xl hover:text-gray-300 z-10"
            >
              ×
            </button>

            <button 
              onClick={() => {
                const newIndex = lightboxIndex === 0 ? selectedProject.images.length - 1 : lightboxIndex - 1;
                setLightboxIndex(newIndex);
                setLightboxImage(selectedProject.images[newIndex]);
                targetImageIndexRef.current = newIndex;
              }}
              className="absolute left-4 text-white text-6xl hover:text-gray-300 p-4"
            >
              ‹
            </button>

            <Image
              src={lightboxImage}
              alt="Project photo"
              width={1200}
              height={900}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />

            <button 
              onClick={() => {
                const newIndex = lightboxIndex === selectedProject.images.length - 1 ? 0 : lightboxIndex + 1;
                setLightboxIndex(newIndex);
                setLightboxImage(selectedProject.images[newIndex]);
                targetImageIndexRef.current = newIndex;
              }}
              className="absolute right-4 text-white text-6xl hover:text-gray-300 p-4"
            >
              ›
            </button>

            <div className="absolute bottom-8 text-white bg-black/50 px-4 py-2 rounded-full">
              {lightboxIndex + 1} / {selectedProject.images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
