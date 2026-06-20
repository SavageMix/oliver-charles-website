"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Calendar, Ruler, ArrowRight, ArrowLeft, X, ChevronLeft, ChevronRight, Check } from "lucide-react";

interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  category: string;
  date: string;
  size: string;
  description: string;
  features: string[];
  images: string[];
  testimonial: {
    quote: string;
    author: string;
    location: string;
    googleReviewUrl?: string;
  };
}

interface ProjectGridProps {
  projects: Project[];
  categories: string[];
}

export default function ProjectGrid({ projects, categories }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Clear project modal and reset showAll when category changes
  useEffect(() => {
    setSelectedProject(null);
    setModalImageIndex(0);
    setLightboxImage(null);
    setLightboxIndex(0);
    setShowAll(false);
  }, [selectedCategory]);

  // Reset modal image index when project changes
  useEffect(() => {
    if (selectedProject) {
      setModalImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

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
      } else if (e.key === 'ArrowRight') {
        const newIndex = lightboxIndex === selectedProject.images.length - 1 ? 0 : lightboxIndex + 1;
        setLightboxIndex(newIndex);
        setLightboxImage(selectedProject.images[newIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, lightboxIndex, selectedProject]);

  const filteredProjects = selectedCategory === 'All'
    ? (showAll ? projects : projects.slice(0, 6))
    : projects.filter(p => p.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalImageIndex(0);
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
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-medium transition-all tracking-[0.05em] uppercase ${
              selectedCategory === category
                ? 'bg-[var(--color-forest)] text-white'
                : 'bg-white text-[var(--color-text-light)] hover:bg-[var(--color-bronze)]/10 border border-[var(--color-border)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div key={selectedCategory} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group bg-[var(--color-off-white)] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-[var(--color-border)]"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => openModal(project)}
          >
            {/* Image - 4:3 aspect ratio */}
            <div className="relative w-full overflow-hidden" style={{ paddingBottom: '75%' }}>
              <Image
                src={project.id === 1 ? project.images[3] : project.id === 9 ? project.images[2] : project.images[0]}
                alt={`${project.title} - ${project.category} in ${project.location}`}
                fill
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ backfaceVisibility: 'hidden' }}
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
              <button className="inline-flex items-center text-[var(--color-bronze)] font-semibold text-sm group-hover:text-[var(--color-bronze-dark)]">
                View {project.title.split(' - ')[0]} details
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See More / Show Less Button - Only show on "All" tab when more than 6 projects */}
      {selectedCategory === 'All' && projects.length > 6 && (
        <div className="mt-10 text-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-5 py-2.5 border border-[var(--color-bronze)] text-[var(--color-forest)] hover:bg-[var(--color-bronze)] hover:text-white font-medium transition-colors text-sm tracking-[0.05em] uppercase"
            >
              See More Projects
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                setShowAll(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center px-5 py-2.5 border border-[var(--color-border)] text-[var(--color-text-light)] hover:border-[var(--color-text-light)] hover:text-[var(--color-text)] font-medium transition-colors text-sm tracking-[0.05em] uppercase"
            >
              <X className="mr-1.5 w-4 h-4" />
              Show Less
            </button>
          )}
        </div>
      )}

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
                {selectedProject.title.split(' - ')[0]}
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
                  className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-forest)] hover:bg-[var(--color-forest-light)] text-white text-sm font-semibold rounded-none transition-colors"
                >
                  VIEW FULL PROJECT
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <button
                  onClick={closeModal}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[var(--color-border)] text-[var(--color-text)] text-sm font-semibold rounded-none hover:bg-[var(--color-stone)] transition-colors"
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
