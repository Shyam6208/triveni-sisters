"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={`text-center mb-12 md:mb-16 ${className}`}>
      <div className="ornament-line mb-4">
        <span className="text-antique-gold text-2xl">✦</span>
      </div>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light
            ? "text-white"
            : "gradient-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            light ? "text-white/80" : "text-charcoal-light dark:text-dark-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="section-divider mt-6" />
    </AnimatedSection>
  );
}
