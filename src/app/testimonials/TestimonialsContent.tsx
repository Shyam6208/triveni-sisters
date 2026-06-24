"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ContactCTA from "@/components/sections/ContactCTA";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsContent() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 mehndi-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-6 text-center">
          <AnimatedSection variant="fadeUp">
            <div className="ornament-line mb-6">
              <span className="text-antique-gold text-2xl">✦</span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Client Love
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Nothing makes us happier than seeing our clients smile. Here&apos;s what they have to say about us.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
