"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function PortfolioHighlights() {
  const highlights = PORTFOLIO_ITEMS.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 md:py-28" id="portfolio-highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <SectionHeading
          title="Our Creative Portfolio"
          subtitle="A glimpse into our world of art, tradition, and handmade beauty"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.1} variant="scale">
              <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 sm:p-4">
                  <div>
                    <span className="text-antique-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider capitalize">
                      {item.category}
                    </span>
                    <h3 className="text-white font-heading font-bold text-sm sm:text-base mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10 sm:mt-12">
          <Button href="/portfolio" variant="outline">
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
