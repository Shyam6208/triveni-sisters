"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-[var(--surface-2)] dark:bg-dark-surface mehndi-pattern" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Why Choose Us"
          subtitle="What makes Triveni Art House the perfect choice for your creative needs"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {WHY_CHOOSE_US.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1} variant="fadeUp">
              <div className="text-center p-6 md:p-8 bg-[var(--surface)] dark:bg-dark-surface-2 rounded-2xl border border-[var(--border)] hover:border-antique-gold/30 hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-lg font-bold text-charcoal dark:text-dark-text mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-light dark:text-dark-text-muted text-sm leading-relaxed">
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
