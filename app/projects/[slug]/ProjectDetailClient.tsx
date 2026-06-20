"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Ruler,
  ArrowRight,
  ArrowLeft,
  X,
  Check,
  Star,
} from "lucide-react";
import type { Project } from "../../lib/projects";

interface ProjectDetailClientProps {
  project: Project;
  relatedProjects: Project[];
}

export default function ProjectDetailClient({
  project,
  relatedProjects,
}: ProjectDetailClientProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);

  // Keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;

      if (e.key === "Escape") {
        setLightboxImage(null);
      } else if (e.key === "ArrowLeft") {
        const newIndex =
          lightboxIndex === 0
            ? project.images.length - 1
            : lightboxIndex - 1;
        setLightboxIndex(newIndex);
        setLightboxImage(project.images[newIndex]);
      } else if (e.key === "ArrowRight") {
        const newIndex =
          lightboxIndex === project.images.length - 1
            ? 0
            : lightboxIndex + 1;
        setLightboxIndex(newIndex);
        setLightboxImage(project.images[newIndex]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, lightboxIndex, project.images]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxImage]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxImage(project.images[index]);
  };

  const locationShort = project.location.split(",")[0];

  const hasValidTestimonial =
    project.testimonial.quote &&
    project.testimonial.quote.toLowerCase() !== "tldr";

  const thumbnailImages = project.images.slice(0, 4);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-[var(--color-forest)] text-white overflow-hidden">
        <div className="absolute inset-0 lg:left-1/3">
          <Image
            src={project.images[0]}
            alt={`${project.title} - ${project.category} in ${project.location}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-forest)] via-[var(--color-forest)]/90 to-[var(--color-forest)]/40 lg:via-[var(--color-forest)]/80 lg:to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] tracking-[0.15em] uppercase text-[var(--color-bronze)] font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-3 leading-[1.05]">
              {project.title.split(' - ')[0]}
            </h1>
            <p className="text-2xl md:text-3xl text-[var(--color-bronze)] italic font-serif mb-8">
              {locationShort}
            </p>
            <div className="flex flex-wrap items-center gap-5 text-white/80 text-sm">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[var(--color-bronze)]" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[var(--color-bronze)]" />
                {project.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-[var(--color-bronze)]" />
                {project.size}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Images */}
            <div className="lg:col-span-3 space-y-4">
              {/* Main Image */}
              <div
                className="relative w-full rounded-lg overflow-hidden cursor-pointer group shadow-md"
                style={{ paddingBottom: "66%" }}
                onClick={() => openLightbox(mainImageIndex)}
              >
                <Image
                  src={project.images[mainImageIndex]}
                  alt={`${project.title} - main view`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Thumbnail Grid */}
              {thumbnailImages.length > 1 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {thumbnailImages.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMainImageIndex(idx)}
                      className={`relative w-full rounded-lg overflow-hidden aspect-[4/3] ${
                        idx === mainImageIndex
                          ? "ring-2 ring-[var(--color-bronze)]"
                          : "opacity-80 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - view ${idx + 1}`}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-serif font-medium text-[var(--color-text)] mb-4">
                  Project Overview
                </h2>
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="bg-[var(--color-stone)] border border-[var(--color-border)] rounded-lg p-6">
                <h3 className="text-lg font-serif font-medium text-[var(--color-text)] mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-light)]"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-bronze)]/10 text-[var(--color-bronze)] mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3" strokeWidth={2.5} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              {hasValidTestimonial && (
                <div className="bg-[var(--color-forest)] rounded-lg p-6 text-white">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[var(--color-bronze)] fill-[var(--color-bronze)]"
                      />
                    ))}
                  </div>
                  <p className="italic mb-4 text-white/80 leading-relaxed text-sm">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="text-sm">
                    <span className="font-medium text-white">
                      {project.testimonial.author}
                    </span>
                    <span className="text-white/60">
                      {" "}&mdash; {project.testimonial.location}
                    </span>
                  </div>
                </div>
              )}

              {/* CTA */}
              <a
                href="/contact/#contact-form"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-dark)] text-white text-sm font-medium rounded-none transition-colors"
              >
                ENQUIRE ABOUT A SIMILAR PROJECT
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-[var(--color-stone)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-medium text-[var(--color-text)] mb-3">
                More {project.category} Projects
              </h2>
              <p className="text-[var(--color-text-light)]">
                Explore similar projects in Buckinghamshire and surrounding areas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <a
                  key={related.id}
                  href={`/projects/${related.slug}/`}
                  className="group bg-[var(--color-off-white)] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ paddingBottom: "66%" }}
                  >
                    <Image
                      src={related.images[0]}
                      alt={`${related.title} - ${related.category} in ${related.location}`}
                      fill
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[var(--color-bronze)] text-white text-[10px] font-medium tracking-[0.08em] uppercase">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[var(--color-text)] font-medium text-lg mb-2">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-[var(--color-text-light)] mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {related.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {related.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Ruler className="w-3.5 h-3.5" />
                        {related.size}
                      </span>
                    </div>
                    <span className="inline-flex items-center text-[var(--color-bronze)] text-xs font-medium tracking-[0.08em] uppercase">
                      VIEW PROJECT
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full-screen Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[200] animate-in fade-in duration-200">
          <div
            className="absolute inset-0 bg-black/95"
            onClick={() => setLightboxImage(null)}
          />

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
            {project.images.length > 1 && (
              <button
                onClick={() => {
                  const newIndex =
                    lightboxIndex === 0
                      ? project.images.length - 1
                      : lightboxIndex - 1;
                  setLightboxIndex(newIndex);
                  setLightboxImage(project.images[newIndex]);
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
              alt={`${project.title} - view ${lightboxIndex + 1}`}
              width={1200}
              height={900}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />

            {/* Right Arrow */}
            {project.images.length > 1 && (
              <button
                onClick={() => {
                  const newIndex =
                    lightboxIndex === project.images.length - 1
                      ? 0
                      : lightboxIndex + 1;
                  setLightboxIndex(newIndex);
                  setLightboxImage(project.images[newIndex]);
                }}
                className="absolute right-4 text-white hover:text-gray-300 p-4 z-10"
                aria-label="Next image"
              >
                <ArrowRight className="w-10 h-10" />
              </button>
            )}

            {/* Counter */}
            {project.images.length > 1 && (
              <div className="absolute bottom-8 text-white bg-black/50 px-4 py-2 rounded-full">
                {lightboxIndex + 1} / {project.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
