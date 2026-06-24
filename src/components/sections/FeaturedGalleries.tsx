"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolioUtils";

interface FeaturedGalleriesProps {
  items: PortfolioItem[];
}

export default function FeaturedGalleries({ items }: FeaturedGalleriesProps) {
  // Define the categories we want to highlight on the homepage
  const highlightCategories = [
    { id: "mehndi", title: "Featured Mehndi Designs", subtitle: "Intricate & elegant henna artistry" },
    { id: "rangoli", title: "Featured Rangoli Art", subtitle: "Vibrant traditional floor patterns" },
    { id: "paintings", title: "Featured Paintings", subtitle: "Original canvas & digital artworks" },
    { id: "stitching", title: "Featured Stitching & Alterations", subtitle: "Expert tailoring & custom stitching work" },
    { id: "home-decor", title: "Featured Home Decor", subtitle: "Handcrafted interior aesthetics" },
  ];

  return (
    <>
      {highlightCategories.map((cat, index) => {
        // Get up to 6 items for this category
        const categoryItems = items
          .filter((item) => item.category === cat.id)
          .slice(0, 6);

        if (categoryItems.length === 0) return null;

        return (
          <section 
            key={cat.id} 
            className={`py-12 sm:py-16 md:py-20 ${index % 2 !== 0 ? 'bg-[var(--surface)] dark:bg-dark-surface' : ''}`}
            id={`gallery-${cat.id}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
              <SectionHeading
                title={cat.title}
                subtitle={cat.subtitle}
              />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-10">
                {categoryItems.map((item, i) => (
                  <AnimatedSection key={item.id} delay={i * 0.1} variant="scale">
                    <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-5">
                        <div>
                          <span className="text-antique-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider capitalize block mb-1">
                            {item.category.replace("-", " ")}
                          </span>
                          <h3 className="text-white font-heading font-bold text-sm sm:text-base leading-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      {/* Border glow on hover */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-antique-gold/40 transition-colors duration-500 pointer-events-none" />
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Only show View Full Portfolio button on the last section */}
              {index === highlightCategories.length - 1 && (
                <AnimatedSection className="text-center mt-10 sm:mt-12">
                  <Button href="/portfolio" variant="outline">
                    View Full Portfolio
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </AnimatedSection>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
