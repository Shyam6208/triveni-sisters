"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import ContactCTA from "@/components/sections/ContactCTA";
import {
  SERVICE_CATEGORIES,
  getServicesByCategory,
} from "@/lib/constants";

export default function ServicesContent() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToCategory = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
    const el = sectionRefs.current[categoryId];
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

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
              Our Services
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Discover our complete range of creative services — mehndi, paintings, sketches, fashion, crafts, gifts, and home decor, each designed with passion and a personal touch.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Category Nav Pills */}
      <section className="sticky top-[72px] z-30 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {SERVICE_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-burgundy text-white shadow-lg shadow-burgundy/20 dark:bg-antique-gold dark:text-dark-bg"
                      : "bg-[var(--surface)] text-charcoal-light dark:bg-dark-surface dark:text-dark-text-muted border border-[var(--border)] hover:border-burgundy/30 dark:hover:border-antique-gold/30"
                  }`}
                  id={`service-tab-${cat.id}`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {SERVICE_CATEGORIES.map((category, catIndex) => {
        const services = getServicesByCategory(category.id);
        const Icon = category.icon;

        return (
          <section
            key={category.id}
            id={category.id}
            ref={(el) => { sectionRefs.current[category.id] = el; }}
            className={`py-16 md:py-24 ${catIndex % 2 === 1 ? "bg-[var(--surface-2)] dark:bg-dark-surface" : ""}`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              {/* Category Header */}
              <AnimatedSection variant="fadeUp">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-burgundy/10 dark:bg-antique-gold/10 flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <Icon className="w-6 h-6 text-burgundy dark:text-antique-gold" />
                  </motion.div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold gradient-text">
                      {category.title}
                    </h2>
                  </div>
                </div>
                <p className="text-charcoal-light dark:text-dark-text-muted text-base leading-relaxed max-w-3xl mb-10">
                  {category.description}
                </p>
                <div className="section-divider mb-12" />
              </AnimatedSection>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, i) => (
                  <ServiceCard key={service.id} service={service} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <ContactCTA />
    </>
  );
}
