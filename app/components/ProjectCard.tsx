"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Ruler, ArrowRight, X, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Project {
  id: number;
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
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
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
            View {project.title} details
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100"
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-sm text-[#c9b896] font-semibold mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold text-[#2c2c2c] mb-2">{project.title}</h3>
              <p className="text-[#666666] mb-4">{project.location}</p>
              
              <div className="flex gap-4 text-sm text-[#666666] mb-6">
                <span>{project.date}</span>
                <span>•</span>
                <span>{project.size}</span>
              </div>

              <p className="text-[#666666] mb-6">{project.description}</p>

              <h4 className="font-bold text-[#2c2c2c] mb-3">Key Features:</h4>
              <ul className="grid md:grid-cols-2 gap-2 mb-6">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#666666]">
                    <span className="w-2 h-2 bg-[#c9b896] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {project.testimonial && (
                <div className="bg-[#f5f0e6] p-6 rounded-xl">
                  <Quote className="w-8 h-8 text-[#c9b896] mb-3" />
                  <p className="text-[#2c2c2c] italic mb-4">&ldquo;{project.testimonial.quote}&rdquo;</p>
                  <p className="text-sm text-[#666666]">
                    <span className="font-semibold">{project.testimonial.author}</span>
                    {project.testimonial.location && `, ${project.testimonial.location}`}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
