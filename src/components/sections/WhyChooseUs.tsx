"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[var(--surface-2)] dark:bg-dark-surface mehndi-pattern" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <SectionHeading
          title="Why Choose Us"
          subtitle="What makes Triveni Art House the perfect choice for your creative needs"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          {WHY_CHOOSE_US.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1} variant="fadeUp">
              <div className="text-center p-4 sm:p-6 md:p-8 bg-[var(--surface)] dark:bg-dark-surface-2 rounded-2xl border border-[var(--border)] hover:border-antique-gold/30 hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 h-full touch-target">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="font-heading text-sm sm:text-lg font-bold text-charcoal dark:text-dark-text mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-light dark:text-dark-text-muted text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
