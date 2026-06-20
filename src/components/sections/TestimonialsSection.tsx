"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const featured = TESTIMONIALS.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[var(--surface-2)] dark:bg-dark-surface" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from the wonderful people who trusted us with their special moments"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
