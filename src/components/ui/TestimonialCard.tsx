"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import type { Testimonial } from "@/lib/constants";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <AnimatedSection delay={index * 0.1} variant="fadeUp">
      <div className="h-full bg-[var(--surface)] dark:bg-dark-surface rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 border border-[var(--border)] relative">
        {/* Quote Mark */}
        <div className="absolute top-4 right-6 text-6xl font-heading text-burgundy/10 dark:text-antique-gold/10 leading-none select-none">
          &ldquo;
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-antique-gold text-antique-gold"
            />
          ))}
        </div>

        {/* Review */}
        <p className="text-charcoal-light dark:text-dark-text-muted text-sm md:text-base leading-relaxed mb-6 italic">
          &ldquo;{testimonial.review}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-auto">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-rose-gold/30">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <p className="font-heading font-bold text-charcoal dark:text-dark-text text-sm">
              {testimonial.name}
            </p>
            <p className="text-xs text-rose-gold">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
