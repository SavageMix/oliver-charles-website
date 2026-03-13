"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin, Calendar, Ruler, Star, X } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  googleReviewUrl?: string;
}

interface Project {
  id: number;
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
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const modalImagesRef = useRef<HTMLDivElement>(null);
  const targetImageIndexRef = useRef<number>(0);

  // Keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage || !selectedProject) return;

      if (e.key === "Escape") {
        setLightboxImage(null);
      } else if (e.key === "ArrowLeft") {
        const newIndex =
          lightboxIndex === 0
            ? selectedProject.images.length - 1
            : lightboxIndex - 1;
        setLightboxIndex(newIndex);
        setLightboxImage(selectedProject.images[newIndex]);
        targetImageIndexRef.current = newIndex;
      } else if (e.key === "ArrowRight") {
        const newIndex =
          lightboxIndex === selectedProject.images.length - 1
            ? 0
            : lightboxIndex + 1;
        setLightboxIndex(newIndex);
        setLightboxImage(selectedProject.images[newIndex]);
        targetImageIndexRef.current = newIndex;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, lightboxIndex, selectedProject]);

  // Scroll to target image when lightbox closes
  useEffect(() => {
    if (!lightboxImage && selectedProject) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const targetEl = modalImagesRef.current?.querySelector(
            `[data-image-index="${targetImageIndexRef.current}"]`
          );
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "instant", block: "center" });
          }
        }, 100);
      });
    }
  }, [lightboxImage, selectedProject]);

  return (
    <>
      {/* Projects Grid */}
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
                alt={`${project.title} - Porcelain patio installation in ${project.location}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#c9b896] text-[#2c2c2c] text-xs font-semibold rounded-full">
                  Porcelain Patio
                </span>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-4 py-2 bg-white text-[#2c2c2c] text-sm font-semibold rounded-lg">
                  Click to view
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">
                {project.title}
              </h3>
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
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#c9b896] fill-[#c9b896]"
                    />
                  ))}
                </div>
                <p className="text-[#666666] text-sm italic mb-2">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <p className="text-[#2c2c2c] text-sm font-medium">
                  {project.testimonial.author} — {project.testimonial.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && !lightboxImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold text-[#2c2c2c]">
                  {selectedProject.title}
                </h2>
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
                    style={{ paddingBottom: "75%" }}
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
                  <h4 className="font-semibold text-[#2c2c2c] mb-2">
                    Project Overview
                  </h4>
                  <p className="text-[#666666]">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#2c2c2c] mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-[#666666]"
                      >
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
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#c9b896] fill-[#c9b896]"
                      />
                    ))}
                  </div>
                  <p className="text-[#666666] italic mb-3">
                    &ldquo;{selectedProject.testimonial.quote}&rdquo;
                  </p>
                  <div className="text-sm mb-2">
                    <span className="font-semibold text-[#2c2c2c]">
                      {selectedProject.testimonial.author}
                    </span>
                    <span className="text-[#666666]">
                      {" "}
                      — {selectedProject.testimonial.location}
                    </span>
                  </div>
                  {selectedProject.testimonial.googleReviewUrl && (
                    <a
                      href={selectedProject.testimonial.googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[#4285F4] hover:underline"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Verified Google Review
                    </a>
                  )}
                </div>

                <a
                  href="/contact/"
                  onClick={() => setSelectedProject(null)}
                  className="block w-full text-center bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Enquire about a similar {selectedProject?.title || 'porcelain patio'} project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxImage && selectedProject && (
        <div className="fixed inset-0 z-[200] animate-in fade-in duration-200">
          <div
            className="absolute inset-0 bg-black/95"
            onClick={() => setLightboxImage(null)}
          />

          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-6 text-white text-5xl hover:text-gray-300 z-10"
            >
              ×
            </button>

            {/* Left Arrow */}
            <button
              onClick={() => {
                const newIndex =
                  lightboxIndex === 0
                    ? selectedProject.images.length - 1
                    : lightboxIndex - 1;
                setLightboxIndex(newIndex);
                setLightboxImage(selectedProject.images[newIndex]);
                targetImageIndexRef.current = newIndex;
              }}
              className="absolute left-4 text-white text-6xl hover:text-gray-300 p-4"
            >
              ‹
            </button>

            {/* Image */}
            <Image
              src={lightboxImage}
              alt="Project photo"
              width={1200}
              height={900}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />

            {/* Right Arrow */}
            <button
              onClick={() => {
                const newIndex =
                  lightboxIndex === selectedProject.images.length - 1
                    ? 0
                    : lightboxIndex + 1;
                setLightboxIndex(newIndex);
                setLightboxImage(selectedProject.images[newIndex]);
                targetImageIndexRef.current = newIndex;
              }}
              className="absolute right-4 text-white text-6xl hover:text-gray-300 p-4"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-8 text-white bg-black/50 px-4 py-2 rounded-full">
              {lightboxIndex + 1} / {selectedProject.images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
