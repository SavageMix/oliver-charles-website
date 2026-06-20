"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Ruler, ArrowRight, X, ChevronLeft, ChevronRight, Quote, Check } from "lucide-react";

interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  category: string;
  date: string;
  size: string;
  description: string;
  image: string;
  images: string[];
  features: string[];
  testimonial?: {
    quote: string;
    author: string;
    location: string;
    googleReviewUrl?: string;
  };
}

export function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  const openLightbox = (image: string, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % project.images.length;
    setLightboxIndex(newIndex);
    setLightboxImage(project.images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + project.images.length) % project.images.length;
    setLightboxIndex(newIndex);
    setLightboxImage(project.images[newIndex]);
  };

  return (
    <>
      <div 
        className="group bg-[var(--color-off-white)] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-[var(--color-border)]"
        onClick={openModal}
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
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/70 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[var(--color-bronze)] text-[var(--color-forest)] text-xs font-semibold tracking-[0.05em] uppercase">
              {project.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
            <div className="flex items-center text-white/80 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {project.location}
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-[var(--color-text-light)] mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {project.date}
            </span>
            <span className="flex items-center gap-1">
              <Ruler className="w-4 h-4" />
              {project.size}
            </span>
          </div>
          <p className="text-[var(--color-text-light)] text-sm line-clamp-2 mb-4">
            {project.description}
          </p>
          <span className="inline-flex items-center text-[var(--color-bronze)] font-semibold text-sm group-hover:text-[var(--color-bronze-dark)]">
            View {project.title} details
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative bg-[var(--color-off-white)] max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Gallery */}
            <div className="relative w-full lg:w-3/5 h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[600px] bg-[var(--color-forest-dark)]">
              <Image
                src={lightboxImage || project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Content */}
            <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-[var(--color-off-white)] overflow-y-auto max-h-[50vh] lg:max-h-[90vh]">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--color-text-light)] tracking-[0.08em] uppercase mb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </span>
                <span className="hidden sm:inline w-px h-3 bg-[var(--color-border)]" />
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.date}
                </span>
                <span className="hidden sm:inline w-px h-3 bg-[var(--color-border)]" />
                <span className="flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5" />
                  {project.size}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl font-serif font-medium text-[var(--color-text)] mb-2 leading-[1.1]">
                {project.title.split(' - ')[0]}
              </h3>
              <p className="text-xl sm:text-2xl text-[var(--color-bronze)] italic font-serif mb-6">
                {project.location.split(',')[0]}
              </p>

              {/* Description */}
              <p className="text-[var(--color-text-light)] leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[var(--color-text-light)]">
                    <Check className="w-4 h-4 text-[var(--color-bronze)] mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a
                  href={`/projects/${project.slug}/`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-forest)] hover:bg-[var(--color-forest-light)] text-white font-semibold transition-colors"
                >
                  VIEW FULL PROJECT
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <button
                  onClick={closeModal}
                  className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] font-semibold hover:bg-[var(--color-stone)] transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
