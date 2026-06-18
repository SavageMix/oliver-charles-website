"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Ruler, ArrowRight, X, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
          <div className="bg-[var(--color-off-white)] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white flex items-center justify-center hover:bg-[var(--color-stone)]"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Gallery */}
            <div className="relative h-96">
              <Image
                src={lightboxImage || project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-xs text-[var(--color-bronze)] font-semibold tracking-[0.1em] uppercase mb-2">{project.category}</p>
              <h3 className="text-2xl font-serif font-medium text-[var(--color-text)] mb-2">{project.title}</h3>
              <p className="text-[var(--color-text-light)] mb-4">{project.location}</p>
              
              <div className="flex gap-4 text-sm text-[var(--color-text-light)] mb-6">
                <span>{project.date}</span>
                <span>•</span>
                <span>{project.size}</span>
              </div>

              <p className="text-[var(--color-text-light)] mb-6">{project.description}</p>

              <h4 className="font-bold text-[var(--color-text)] mb-3">Key Features:</h4>
              <ul className="grid md:grid-cols-2 gap-2 mb-6">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
                    <span className="w-2 h-2 bg-[var(--color-bronze)] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {project.testimonial && project.testimonial.quote.toLowerCase() !== 'tldr' && (
                <div className="bg-[var(--color-stone)] p-6">
                  <Quote className="w-8 h-8 text-[var(--color-bronze)] mb-3" />
                  <p className="text-[var(--color-text)] italic mb-4">&ldquo;{project.testimonial.quote}&rdquo;</p>
                  <p className="text-sm text-[var(--color-text-light)]">
                    <span className="font-semibold">{project.testimonial.author}</span>
                    {project.testimonial.location && `, ${project.testimonial.location}`}
                  </p>
                  {project.testimonial.googleReviewUrl && (
                    <a 
                      href={project.testimonial.googleReviewUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[#4285F4] hover:underline mt-3"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Verified Google Review
                    </a>
                  )}
                </div>
              )}

              <a
                href={`/projects/${project.slug}/`}
                className="block w-full text-center bg-[var(--color-forest)] hover:bg-[var(--color-forest-light)] text-[var(--color-off-white)] font-semibold px-6 py-3 transition-colors"
              >
                View full project page
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
