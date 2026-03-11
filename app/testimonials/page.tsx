"use client";

import { useState, useEffect } from "react";

import { Star, ArrowRight, Quote } from "lucide-react";

// Fallback testimonials (shown if API fails)
const fallbackTestimonials = [
  {
    quote: "The team at Oliver Charles construction have done a fantastic job on are patio. From start to Finnish they have been professional and hardworking. Couldn't recommend enough. We will definitely be using them again.",
    author: "David Quinton",
    location: "Bovingdon",
    rating: 5,
    project: "Porcelain Patio",
    googleReviewUrl: "https://maps.app.goo.gl/HzeAQYR1ESMJcy2Z7",
  },
  {
    quote: "Absolutely love our new garden! The Egyptian limestone with the herringbone pattern is stunning. The team worked tirelessly and the result is beyond what we imagined.",
    author: "Kaylee",
    location: "Beaconsfield",
    rating: 5,
    project: "Egyptian Limestone Patio",
  },
  {
    quote: "We couldn't be happier with our new garden. The team was professional, hardworking and the attention to detail was outstanding. The glass balustrade on the retaining wall looks amazing!",
    author: "Hannah",
    location: "Bourne End",
    rating: 5,
    project: "Garden Transformation",
  },
  {
    quote: "Oliver Charles completely transformed our tired garden into a beautiful outdoor living space. Professional service from start to finish. Highly recommend!",
    author: "Emma Richardson",
    location: "Chalfont St Giles",
    rating: 5,
    project: "Garden Transformation",
  },
  {
    quote: "The decking has transformed how we use our garden. The multi-level design gives us distinct areas for dining and relaxing. The glass balustrade gives us amazing views while keeping the kids safe.",
    author: "David Thompson",
    location: "Chesham",
    rating: 5,
    project: "Composite Decking",
  },
  {
    quote: "Professional installation from start to finish. The glass balustrade looks fantastic and we can finally enjoy our view without any obstruction.",
    author: "Michael & Linda Foster",
    location: "Beaconsfield",
    rating: 5,
    project: "Glass Balustrade",
  },
];

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
  project?: string;
  googleReviewUrl?: string;
  isGoogleReview?: boolean;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasGoogleReviews, setHasGoogleReviews] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const fetchReviews = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);
        
        console.log("Fetching reviews from http://localhost:3001/api/reviews");
        
        // In production, use relative path; in dev, use localhost
const API_URL = typeof window !== 'undefined' && window.location.hostname === 'localhost' 
  ? 'http://localhost:3001/api/reviews' 
  : '/api/reviews';
const response = await fetch(API_URL, {
          signal: controller.signal,
          headers: { 'Accept': 'application/json' }
        });
        
        clearTimeout(timeoutId);
        
        console.log("Response status:", response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Got reviews:", data.length);
        
        // Filter out demo reviews
        const realReviews = data.filter(
          (r: GoogleReview) => !r.author_name?.includes("Demo Review")
        );
        
        if (isMounted) {
          if (realReviews.length > 0) {
            const mapped = realReviews.map((review: GoogleReview) => ({
              quote: review.text,
              author: review.author_name,
              location: review.relative_time_description,
              rating: review.rating,
              project: "Google Review",
              isGoogleReview: true,
            }));
            setTestimonials(mapped);
            setHasGoogleReviews(true);
          } else {
            console.log("No real reviews found, using fallback");
            setTestimonials(fallbackTestimonials);
            setHasGoogleReviews(false);
          }
        }
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
        if (isMounted) {
          setTestimonials(fallbackTestimonials);
          setHasGoogleReviews(false);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchReviews();
    
    return () => { isMounted = false; };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#f5f0e6] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#666666]">
            <a href="/" className="hover:text-[#c9b896]">
              Home
            </a>
            <span className="mx-2">/</span>
            <span className="text-[#2c2c2c]">Testimonials</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#c9b896] fill-[#c9b896]" />
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl text-gray-300">
              Don&apos;t just take our word for it - see what our customers have to say
              about their garden transformations.
            </p>
            {!loading && hasGoogleReviews && (
              <p className="text-[#c9b896] mt-4">
                ✓ Verified Google Reviews
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5.0", label: "Average Rating" },
              { value: "50+", label: "Happy Customers" },
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Would Recommend" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-6 rounded-2xl text-center shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#c9b896] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#666666] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="w-12 h-12 border-3 border-[#c9b896] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-[#666666] mt-4 text-lg">Loading reviews...</p>
            </div>
          )}
          
          {/* Reviews Grid - Only show when not loading */}
          {!loading && (
            <>
              {!hasGoogleReviews && (
                <div className="text-center py-4 mb-8 bg-[#f5f0e6] rounded-xl">
                  <p className="text-[#666666]">
                    Showing featured testimonials.{" "}
                    <a
                      href="https://maps.google.com/?q=Oliver+Charles+Garden+Design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c9b896] hover:underline"
                    >
                      View all on Google
                    </a>
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-[#f5f0e6] p-8 rounded-2xl relative"
                    style={{ zIndex: 1 }}
                  >
                    <Quote className="w-10 h-10 text-[#c9b896] absolute top-6 right-6 opacity-50" />
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#c9b896] fill-[#c9b896]"
                        />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-[#2c2c2c] text-lg mb-6 italic leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <p className="font-bold text-[#2c2c2c]">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-[#666666]">
                          {testimonial.location}
                          {testimonial.project && testimonial.project !== "Google Review" && (
                            <span> • {testimonial.project}</span>
                          )}
                        </p>
                      </div>
                      
                      {testimonial.googleReviewUrl ? (
                        <a
                          href={testimonial.googleReviewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#4285F4] hover:underline"
                        >
                          Verified Google Review
                        </a>
                      ) : testimonial.isGoogleReview ? (
                        <span className="text-sm text-[#4285F4]">Google Review</span>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2c2c2c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Happy Customers
          </h2>
          <p className="text-gray-300 mb-8">
            Ready to transform your outdoor space? Get your free quote today.
          </p>
          <a
            href="/contact/"
            className="inline-flex items-center px-8 py-4 bg-[#c9b896] text-[#2c2c2c] font-semibold rounded-lg hover:bg-[#a8956e] transition-colors"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
