"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  // We duplicate the testimonials to create a seamless infinite loop
  const scrollingTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[var(--surface-2)] dark:bg-dark-surface overflow-hidden" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 mb-10 sm:mb-12">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from the wonderful people who trusted us with their special moments"
        />
      </div>

      <div className="relative w-full overflow-hidden flex items-center pb-8 sm:pb-12 pt-2 sm:pt-4">
        {/* Fading Edges for sleek luxury effect */}
        <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-16 md:w-40 bg-gradient-to-r from-[var(--surface-2)] dark:from-dark-surface to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-8 sm:w-16 md:w-40 bg-gradient-to-l from-[var(--surface-2)] dark:from-dark-surface to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div 
          className="flex gap-4 sm:gap-6 md:gap-8 min-w-max hover:[animation-play-state:paused] px-2 sm:px-4"
          style={{ animation: "marquee 45s linear infinite" }}
        >
          {scrollingTestimonials.map((testimonial, i) => (
            <div key={`${testimonial.id}-${i}`} className="w-[280px] sm:w-[300px] md:w-[400px]">
              <TestimonialCard testimonial={testimonial} index={i % TESTIMONIALS.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
