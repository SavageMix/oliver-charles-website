"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Calendar, Ruler, Star, X, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Check } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  googleReviewUrl?: string;
}

interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  date: string;
  size: string;
  description: string;
  features: string[];
  images: string[];
  testimonial: Testimonial;
}

interface ProjectModalProps {
  projects: Project[];
}

export default function ProjectModal({ projects }: ProjectModalProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage || !selectedProject) return;

      if (e.key === "Escape") {
        setLightboxImage(null);
      } else if (e.key === "ArrowLeft") {
        const newIndex = lightboxIndex === 0 ? selectedProject.images.length - 1 : lightboxIndex - 1;
        setLightboxIndex(newIndex);
        setLightboxImage(selectedProject.images[newIndex]);
      } else if (e.key === "ArrowRight") {
        const newIndex = lightboxIndex === selectedProject.images.length - 1 ? 0 : lightboxIndex + 1;
        setLightboxIndex(newIndex);
        setLightboxImage(selectedProject.images[newIndex]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, lightboxIndex, selectedProject]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalImageIndex(0);
    setLightboxImage(null);
  };

  const nextModalImage = () => {
    if (!selectedProject) return;
    setModalImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevModalImage = () => {
    if (!selectedProject) return;
    setModalImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  const openLightbox = (index: number) => {
    if (!selectedProject) return;
    setLightboxIndex(index);
    setLightboxImage(selectedProject.images[index]);
  };

  return (
    <>
      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-[var(--color-off-white)] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-[var(--color-border)]"
            onClick={() => openModal(project)}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.images[0]}
                alt={`${project.title} - Porcelain patio installation in ${project.location}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[var(--color-bronze)] text-[var(--color-forest)] text-xs font-medium tracking-[0.05em] uppercase">
                  Glass Balustrade
                </span>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-4 py-2 bg-white text-[var(--color-text)] text-sm font-medium">
                  Click to view
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-[var(--color-text)] mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-light)] mb-4">
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
              <p className="text-[var(--color-text-light)] text-sm line-clamp-2 mb-4">{project.description}</p>

              {/* Testimonial */}
              {project.testimonial.quote && project.testimonial.quote.toLowerCase() !== 'tldr' && (
                <div className="bg-[var(--color-stone)] p-4">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-[var(--color-bronze)] fill-[var(--color-bronze)]" />
                    ))}
                  </div>
                  <p className="text-[var(--color-text-light)] text-sm italic mb-2">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <p className="text-[var(--color-text)] text-sm font-medium">
                    {project.testimonial.author} — {project.testimonial.location}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal - Template Style */}
      {selectedProject && !lightboxImage && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-3 sm:p-4">
          <div className="relative bg-[var(--color-off-white)] max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center text-[var(--color-text-light)] hover:text-[var(--color-text)] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Gallery */}
            <div className="relative w-full lg:w-1/2 h-[280px] sm:h-[380px] lg:h-auto lg:min-h-[580px] bg-[var(--color-forest-dark)]">
              <Image
                src={selectedProject.images[modalImageIndex]}
                alt={`${selectedProject.title} - view ${modalImageIndex + 1}`}
                fill
                className="object-cover cursor-pointer"
                onClick={() => openLightbox(modalImageIndex)}
                priority
              />
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevModalImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextModalImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-3 py-1.5">
                    {modalImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Content Panel */}
            <div className="w-full lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center overflow-y-auto max-h-[50vh] lg:max-h-[90vh]">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-[var(--color-text-light)] tracking-[0.12em] uppercase mb-8">
                <span>{selectedProject.location}</span>
                <span className="text-[var(--color-bronze)]">•</span>
                <span>{selectedProject.date}</span>
                <span className="text-[var(--color-bronze)]">•</span>
                <span>{selectedProject.size}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-medium text-[var(--color-text)] mb-2 leading-[1.05]">
                {selectedProject.title}
              </h2>
              <p className="text-2xl sm:text-3xl text-[var(--color-bronze)] italic font-serif mb-8">
                {selectedProject.location.split(',')[0]}
              </p>

              {/* Description */}
              <p className="text-[var(--color-text-light)] leading-[1.7] mb-8 text-[15px]">
                {selectedProject.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[var(--color-text-light)]">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-[var(--color-bronze)] text-[var(--color-bronze)] mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3" strokeWidth={2.5} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <a
                  href={`/projects/${selectedProject.slug}/`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-forest)] hover:bg-[var(--color-forest-light)] text-white text-sm font-medium rounded-none transition-colors"
                >
                  VIEW FULL PROJECT
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <button
                  onClick={closeModal}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium rounded-none hover:bg-[var(--color-stone)] transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-screen Lightbox */}
      {lightboxImage && selectedProject && (
        <div className="fixed inset-0 z-[200] animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/95" onClick={() => setLightboxImage(null)} />

          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-6 text-white hover:text-gray-300 z-10"
              aria-label="Close lightbox"
            >
              <X className="w-10 h-10" />
            </button>

            {/* Left Arrow */}
            {selectedProject.images.length > 1 && (
              <button
                onClick={() => {
                  const newIndex = lightboxIndex === 0 ? selectedProject.images.length - 1 : lightboxIndex - 1;
                  setLightboxIndex(newIndex);
                  setLightboxImage(selectedProject.images[newIndex]);
                }}
                className="absolute left-4 text-white hover:text-gray-300 p-4 z-10"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-10 h-10" />
              </button>
            )}

            {/* Image */}
            <Image
              src={lightboxImage}
              alt={`${selectedProject.title} - view ${lightboxIndex + 1}`}
              width={1200}
              height={900}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />

            {/* Right Arrow */}
            {selectedProject.images.length > 1 && (
              <button
                onClick={() => {
                  const newIndex = lightboxIndex === selectedProject.images.length - 1 ? 0 : lightboxIndex + 1;
                  setLightboxIndex(newIndex);
                  setLightboxImage(selectedProject.images[newIndex]);
                }}
                className="absolute right-4 text-white hover:text-gray-300 p-4 z-10"
                aria-label="Next image"
              >
                <ArrowRight className="w-10 h-10" />
              </button>
            )}

            {/* Counter */}
            {selectedProject.images.length > 1 && (
              <div className="absolute bottom-8 text-white bg-black/50 px-4 py-2 rounded-full">
                {lightboxIndex + 1} / {selectedProject.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
