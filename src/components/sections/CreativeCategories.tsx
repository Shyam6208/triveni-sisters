"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICE_CATEGORIES, getServicesByCategory } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function CreativeCategories() {
  return (
    <section
      className="py-16 sm:py-20 md:py-28 bg-[var(--surface-2)] dark:bg-dark-surface mehndi-pattern"
      id="creative-categories"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <SectionHeading
          title="Creative Categories"
          subtitle="Explore our diverse range of artistic services — each category crafted with passion and expertise"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {SERVICE_CATEGORIES.map((category, i) => {
            const Icon = category.icon;
            const serviceCount = getServicesByCategory(category.id).length;

            return (
              <AnimatedSection key={category.id} delay={i * 0.1} variant="fadeUp">
                <Link href={`/services#${category.id}`} className="group block h-full touch-target">
                  <motion.div
                    className="relative h-full bg-[var(--surface)] dark:bg-dark-surface-2 rounded-3xl p-5 sm:p-6 md:p-8 border border-[var(--border)] hover:border-antique-gold/40 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 overflow-hidden"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Decorative corner gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-burgundy/5 via-transparent to-transparent dark:from-antique-gold/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-burgundy/5 dark:bg-antique-gold/5 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-burgundy/10 dark:group-hover:bg-antique-gold/10 transition-colors duration-500">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-burgundy dark:text-antique-gold" />
                    </div>

                    {/* Title + Service Count */}
                    <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-charcoal dark:text-dark-text">
                        {category.title}
                      </h3>
                      <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-full bg-rose-gold/10 text-rose-gold dark:bg-antique-gold/10 dark:text-antique-gold font-medium flex-shrink-0">
                        {serviceCount}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-charcoal-light dark:text-dark-text-muted text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                      {category.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-burgundy dark:text-antique-gold text-xs sm:text-sm font-medium">
                      <span>Explore Services</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>

                    {/* Decorative bottom line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-burgundy via-rose-gold to-antique-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
