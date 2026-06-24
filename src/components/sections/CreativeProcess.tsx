"use client";

import { MessageCircle, PenLine, Hand, ShieldCheck, PackageCheck } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { CREATIVE_PROCESS } from "@/lib/constants";

const STEP_ICONS = [MessageCircle, PenLine, Hand, ShieldCheck, PackageCheck];

export default function CreativeProcess() {
  return (
    <section className="py-16 sm:py-20 md:py-28" id="creative-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <SectionHeading
          title="Our Creative Process"
          subtitle="From your initial vision to the final masterpiece — here's how we bring your ideas to life"
        />

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />

          <div className="grid grid-cols-5 gap-6">
            {CREATIVE_PROCESS.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <AnimatedSection key={step.step} delay={i * 0.12} variant="fadeUp">
                  <div className="relative text-center">
                    {/* Step Circle */}
                    <div className="relative z-10 w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-br from-burgundy to-burgundy-dark flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {/* Outer ring */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[62px] h-[62px] rounded-full border-2 border-antique-gold/30" />

                    {/* Step number */}
                    <span className="inline-block text-xs font-bold text-antique-gold dark:text-antique-gold mb-2 tracking-wider">
                      STEP {step.step}
                    </span>

                    <h3 className="font-heading text-lg font-bold text-charcoal dark:text-dark-text mb-3">
                      {step.title}
                    </h3>
                    <p className="text-charcoal-light dark:text-dark-text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {CREATIVE_PROCESS.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <AnimatedSection key={step.step} delay={i * 0.1} variant="slideRight">
                <div className="flex gap-4">
                  {/* Step Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-burgundy to-burgundy-dark flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {i < CREATIVE_PROCESS.length - 1 && (
                      <div className="w-[2px] h-8 mx-auto mt-2 bg-gradient-to-b from-rose-gold/30 to-transparent" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pt-1">
                    <span className="text-[10px] font-bold text-antique-gold tracking-wider">
                      STEP {step.step}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-charcoal dark:text-dark-text mb-2">
                      {step.title}
                    </h3>
                    <p className="text-charcoal-light dark:text-dark-text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
