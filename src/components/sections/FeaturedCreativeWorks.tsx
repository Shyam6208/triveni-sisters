"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const FEATURED_WORKS = [
  { id: "fw1", title: "Royal Bridal Mehndi", category: "Mehndi", image: "/images/bridal-mehndi.png", span: "large" },
  { id: "fw2", title: "Canvas Masterpiece", category: "Painting", image: "/images/canvas-painting.png", span: "small" },
  { id: "fw3", title: "Pencil Portrait", category: "Sketch", image: "/images/portrait-sketch.png", span: "small" },
  { id: "fw4", title: "Designer Lehenga", category: "Fashion", image: "/images/portfolio-dress.png", span: "small" },
  { id: "fw5", title: "Handcrafted Decor", category: "Home Decor", image: "/images/home-decor.png", span: "small" },
  { id: "fw6", title: "Custom Gift Hamper", category: "Gifts", image: "/images/custom-gifts.png", span: "large" },
];

export default function FeaturedCreativeWorks() {
  return (
    <section className="py-20 md:py-28" id="featured-creative-works">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Featured Creative Works"
          subtitle="A curated showcase of our finest creations across paintings, sketches, mehndi, fashion, crafts, and decor"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[240px]">
          {FEATURED_WORKS.map((work, i) => (
            <AnimatedSection
              key={work.id}
              delay={i * 0.1}
              variant="scale"
              className={
                work.span === "large"
                  ? "col-span-2 row-span-2"
                  : "col-span-1 row-span-1"
              }
            >
              <motion.div
                className="group relative w-full h-full overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  sizes={
                    work.span === "large"
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/80 via-burgundy/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-block px-3 py-1 bg-antique-gold/90 text-burgundy-dark text-[10px] md:text-xs font-semibold rounded-full mb-2">
                    {work.category}
                  </span>
                  <h3 className="font-heading text-white text-sm md:text-lg font-bold">
                    {work.title}
                  </h3>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-transparent group-hover:border-antique-gold/30 transition-colors duration-500" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button href="/portfolio" variant="outline">
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
