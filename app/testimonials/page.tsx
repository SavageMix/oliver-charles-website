import { Star, ArrowRight, Quote } from "lucide-react";
import { generateCanonicalMetadata } from "../lib/metadata";
import GoogleReviews from "./GoogleReviews";

export const metadata = generateCanonicalMetadata("/testimonials");

// Static testimonials for SEO (rendered in HTML immediately, used as fallback)
const staticTestimonials = [
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

const stats = [
  { value: "5.0", label: "Average Rating" },
  { value: "50+", label: "Happy Customers" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Would Recommend" },
];

export default function TestimonialsPage() {
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
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

      {/* Testimonials - Client Component with fallback data */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">
              Featured Testimonials
            </h2>
            <p className="text-[#666666]">
              Real feedback from our satisfied customers across Buckinghamshire
            </p>
          </div>

          <GoogleReviews fallbackTestimonials={staticTestimonials} />
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
