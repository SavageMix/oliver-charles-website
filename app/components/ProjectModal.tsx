"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <p className="text-sm text-[#c9b896] font-semibold mb-2">{project.category}</p>
          <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">{project.title}</h3>
          <p className="text-[#666666] text-sm mb-4">{project.location}</p>
          <p className="text-[#666666] text-sm line-clamp-2">{project.description}</p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Gallery */}
            <div className="relative h-96">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
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
