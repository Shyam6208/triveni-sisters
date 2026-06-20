"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import ContactCTA from "@/components/sections/ContactCTA";
import { SERVICES } from "@/lib/constants";

export default function ServicesContent() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 mehndi-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <AnimatedSection variant="fadeUp">
            <div className="ornament-line mb-6">
              <span className="text-antique-gold text-2xl">✦</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Discover our complete range of creative services — each designed with passion, precision, and a personal touch.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeading
            title="What We Offer"
            subtitle="Premium creative services handcrafted with love and expertise"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
