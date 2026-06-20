"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { CREATIVE_PROCESS } from "@/lib/constants";

export default function CreativeProcess() {
  return (
    <section className="py-20 md:py-28" id="creative-process">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Creative Process"
          subtitle="From your initial vision to the final masterpiece — here's how we bring your ideas to life"
        />

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />

          <div className="grid grid-cols-4 gap-8">
            {CREATIVE_PROCESS.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.15} variant="fadeUp">
                <div className="relative text-center">
                  {/* Step Circle */}
                  <div className="relative z-10 w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-br from-burgundy to-burgundy-dark flex items-center justify-center shadow-lg">
                    <span className="font-heading text-white text-xl font-bold">{step.step}</span>
                  </div>
                  {/* Outer ring */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[62px] h-[62px] rounded-full border-2 border-antique-gold/30" />

                  <h3 className="font-heading text-lg font-bold text-charcoal dark:text-dark-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-light dark:text-dark-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {CREATIVE_PROCESS.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 0.1} variant="slideRight">
              <div className="flex gap-4">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-burgundy to-burgundy-dark flex items-center justify-center shadow-lg">
                    <span className="font-heading text-white text-lg font-bold">{step.step}</span>
                  </div>
                  {i < CREATIVE_PROCESS.length - 1 && (
                    <div className="w-[2px] h-8 mx-auto mt-2 bg-gradient-to-b from-rose-gold/30 to-transparent" />
                  )}
                </div>
                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-heading text-lg font-bold text-charcoal dark:text-dark-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-light dark:text-dark-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
