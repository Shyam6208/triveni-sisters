"use client";

import { useState, useMemo, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PortfolioItem from "@/components/ui/PortfolioItem";
import Lightbox from "@/components/ui/Lightbox";
import ContactCTA from "@/components/sections/ContactCTA";
import {
  PORTFOLIO_ITEMS,
  PORTFOLIO_CATEGORIES,
  type PortfolioItem as PortfolioItemType,
} from "@/lib/constants";

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = useMemo(
    () =>
      activeCategory === "all"
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const handleItemClick = useCallback(
    (item: PortfolioItemType) => {
      const index = filteredItems.findIndex((i) => i.id === item.id);
      setLightboxIndex(index);
      setLightboxOpen(true);
    },
    [filteredItems]
  );

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

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
              Our Portfolio
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A curated collection of our finest work — each piece crafted with passion and precision.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Category Filters */}
          <AnimatedSection variant="fadeUp" className="flex flex-wrap justify-center gap-3 mb-12">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-burgundy text-white shadow-lg shadow-burgundy/20 dark:bg-antique-gold dark:text-dark-bg"
                    : "bg-[var(--surface)] text-charcoal-light dark:bg-dark-surface dark:text-dark-text-muted border border-[var(--border)] hover:border-burgundy/30 dark:hover:border-antique-gold/30"
                }`}
                id={`filter-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <PortfolioItem key={item.id} item={item} onClick={handleItemClick} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <ContactCTA />
    </>
  );
}
