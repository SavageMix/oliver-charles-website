"use client";

import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
  project?: string;
  googleReviewUrl?: string;
  isGoogleReview?: boolean;
}

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

interface GoogleReviewsProps {
  fallbackTestimonials: Testimonial[];
}

export default function GoogleReviews({ fallbackTestimonials }: GoogleReviewsProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const [loading, setLoading] = useState(true);
  const [hasGoogleReviews, setHasGoogleReviews] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const fetchReviews = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);
        
        // Use full URL in dev (localhost), relative in production
        const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3001/api/reviews' : '/api/reviews';
        console.log('Fetching reviews from:', API_URL);
        
        const response = await fetch(API_URL, {
          signal: controller.signal,
          headers: { 'Accept': 'application/json' }
        });
        console.log('Response status:', response.status);
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        
        // Filter out demo reviews
        const realReviews = data.filter(
          (r: GoogleReview) => !r.author_name?.includes("Demo Review")
        );
        
        if (isMounted && realReviews.length > 0) {
          const mapped = realReviews.map((review: GoogleReview) => ({
            quote: review.text,
            author: review.author_name,
            location: review.relative_time_description,
            rating: review.rating,
            isGoogleReview: true,
          }));
          setTestimonials(mapped);
          setHasGoogleReviews(true);
        }
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
        if (err instanceof Error) {
          console.error("Error name:", err.name, "Message:", err.message);
        }
        // Keep using fallback testimonials on error
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchReviews();
    
    return () => { isMounted = false; };
  }, [fallbackTestimonials]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="w-8 h-8 border-2 border-[#c9b896] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        <p className="text-[#666666] text-sm">Loading Google Reviews...</p>
      </div>
    );
  }

  return (
    <>
      {hasGoogleReviews && (
        <div className="text-center mb-8">
          <p className="text-[#c9b896] font-semibold mb-2">✓ Verified Google Reviews</p>
          <p className="text-[#666666] text-sm">
            Latest reviews from our Google Business Profile
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-[#f5f0e6] p-8 rounded-2xl relative"
          >
            <Quote className="w-8 h-8 text-[#c9b896] absolute top-6 right-6 opacity-50" />
            
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#c9b896] fill-[#c9b896]"
                />
              ))}
            </div>
            
            {/* Project badge */}
            {testimonial.project && (
              <span className="inline-block bg-[#c9b896] text-white text-xs px-3 py-1 rounded-full mb-3">
                {testimonial.project}
              </span>
            )}
            
            {/* Quote */}
            <p className="text-lg mb-6 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            
            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-[#666666]">{testimonial.location}</p>
              </div>
              {testimonial.googleReviewUrl && (
                <a 
                  href={testimonial.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4285F4] text-sm hover:underline"
                >
                  Verified Google Review
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://maps.google.com/?q=Oliver+Charles+Garden+Design"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#666666] hover:text-[#c9b896] transition-colors"
        >
          View all our reviews on Google →
        </a>
      </div>
    </>
  );
}
