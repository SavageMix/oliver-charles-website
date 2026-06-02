"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Ruler,
  ArrowRight,
  ArrowLeft,
  Home,
  FolderOpen,
  Star,
  Check,
  X,
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

  const categoryServiceUrl: Record<string, string> = {
    'Porcelain Patio': '/services/porcelain-patios/',
    'Composite Decking': '/services/composite-decking/',
    'Glass Balustrade': '/services/glass-balustrades/',
    'Full Landscaping': '/services/garden-landscaping/',
  };
  const serviceUrl = categoryServiceUrl[project.category];

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-[#f5f0e6] border-b border-[#c9b896]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center gap-2 text-sm text-[#666666]">
            <li>
              <Link
                href="/"
                className="hover:text-[#c9b896] transition-colors flex items-center gap-1"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
            </li>
            <li className="text-[#c9b896]">/</li>
            <li>
              <Link
                href="/projects/"
                className="hover:text-[#c9b896] transition-colors flex items-center gap-1"
              >
                <FolderOpen className="w-4 h-4" />
                Projects
              </Link>
            </li>
            <li className="text-[#c9b896]">/</li>
            <li className="text-[#2c2c2c] font-medium truncate max-w-[200px] sm:max-w-xs">
              {project.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-[#2c2c2c] text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={project.images[0]}
            alt={`${project.title} - ${project.category} in ${project.location}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c] via-[#2c2c2c]/70 to-[#2c2c2c]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-[#c9b896]/20 text-[#c9b896] rounded-full text-sm font-semibold mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm md:text-base">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#c9b896]" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#c9b896]" />
                {project.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-[#c9b896]" />
                {project.size}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Images */}
            <div className="lg:col-span-3 space-y-6">
              {/* Main Image */}
              <div
                className="relative w-full rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
                style={{ paddingBottom: "75%" }}
                onClick={() => openLightbox(0)}
              >
                <Image
                  src={project.images[0]}
                  alt={`${project.title} - main view`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                    Click to enlarge
                  </span>
                </div>
              </div>

              {/* Thumbnail Grid */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.images.slice(1).map((image, idx) => (
                    <div
                      key={idx + 1}
                      className="relative w-full rounded-xl overflow-hidden cursor-pointer group shadow-md aspect-[4/3]"
                      onClick={() => openLightbox(idx + 1)}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - view ${idx + 2}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium bg-black/50 px-3 py-1 rounded-full">
                          Enlarge
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4">
                  Project Overview
                </h2>
                <p className="text-[#666666] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Service Link */}
              {serviceUrl && (
                <div className="bg-[#f5f0e6] rounded-2xl p-5">
                  <Link
                    href={serviceUrl}
                    className="inline-flex items-center text-[#c9b896] font-semibold hover:underline"
                  >
                    View more {project.category} projects
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              )}

              {/* Features */}
              <div className="bg-[#f5f0e6] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#2c2c2c] mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[#666666]"
                    >
                      <div className="mt-0.5 w-5 h-5 bg-[#c9b896] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#2c2c2c]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              {project.testimonial.quote &&
                project.testimonial.quote.toLowerCase() !== "tldr" && (
                  <div className="bg-[#2c2c2c] rounded-2xl p-6 text-white">
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#c9b896] fill-[#c9b896]"
                        />
                      ))}
                    </div>
                    <p className="italic mb-4 text-gray-300 leading-relaxed">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <div className="text-sm">
                      <span className="font-semibold text-white">
                        {project.testimonial.author}
                      </span>
                      <span className="text-gray-400">
                        {" "}
                        &mdash; {project.testimonial.location}
                      </span>
                    </div>
                    {project.testimonial.googleReviewUrl && (
                      <a
                        href={project.testimonial.googleReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[#4285F4] hover:underline mt-3"
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
                )}

              {/* CTA */}
              <a
                href="/contact/#contact-form"
                className="block w-full text-center bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold px-6 py-4 rounded-xl transition-colors"
              >
                Enquire about a similar {project.category.toLowerCase()} project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-[#f5f0e6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2c2c2c] mb-3">
                More {project.category} Projects
              </h2>
              <p className="text-[#666666]">
                Explore similar projects in Buckinghamshire and surrounding
                areas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  href={`/projects/${related.slug}/`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ paddingBottom: "75%" }}
                  >
                    <Image
                      src={related.images[0]}
                      alt={`${related.title} - ${related.category} in ${related.location}`}
                      fill
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#c9b896] text-[#2c2c2c] text-xs font-semibold rounded-full">
                        {related.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {related.title}
                      </h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {related.location}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#666666] mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {related.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Ruler className="w-4 h-4" />
                        {related.size}
                      </span>
                    </div>
                    <p className="text-[#c9b896] font-semibold text-sm flex items-center">
                      View project
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-[#2c2c2c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get a free, no-obligation quote for your {project.category.toLowerCase()} project in{" "}
            {locationShort} and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/projects/"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#c9b896] text-[#c9b896] hover:bg-[#c9b896] hover:text-[#2c2c2c] font-semibold rounded-lg transition-colors"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
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
              className="absolute top-4 right-6 text-white text-5xl hover:text-gray-300 z-10"
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
