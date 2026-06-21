"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedServices } from "@/lib/constants";
import Link from "next/link";

export default function FeaturedServices() {
  const featured = getFeaturedServices();

  return (
    <section className="py-20 md:py-28 mehndi-pattern" id="featured-services">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Signature Services"
          subtitle="From intricate mehndi artistry to stunning paintings, bespoke fashion, and handcrafted home decor — we bring creativity to every detail"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.id} delay={i * 0.1} variant="fadeUp">
                <Link href={`/services#${service.category}`} className="group block">
                  <div className="relative bg-[var(--surface)] dark:bg-dark-surface rounded-3xl p-8 text-center border border-[var(--border)] hover:border-antique-gold/30 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-2">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-burgundy/5 dark:bg-antique-gold/5 flex items-center justify-center group-hover:bg-burgundy/10 dark:group-hover:bg-antique-gold/10 transition-colors duration-500">
                      <Icon className="w-8 h-8 text-burgundy dark:text-antique-gold" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-bold text-charcoal dark:text-dark-text mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-charcoal-light dark:text-dark-text-muted text-sm leading-relaxed">
                      {service.description.slice(0, 120)}...
                    </p>

                    {/* Decorative line */}
                    <div className="mt-6 h-0.5 w-12 mx-auto bg-gradient-to-r from-burgundy to-rose-gold rounded-full group-hover:w-20 transition-all duration-500" />
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
