"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

const SERVICE_WORDS = [
  "Mehndi",
  "Paintings",
  "Sketches",
  "Fashion",
  "Crafts",
  "Home Decor",
];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % SERVICE_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.png"
          alt="Triveni Art House - Premium Creative Studio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full border border-antique-gold/20 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-20 h-20 rounded-full border border-rose-gold/15 hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-antique-gold/40 hidden lg:block"
        animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-antique-gold/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-antique-gold" />
            <span className="text-sm text-white/90 font-medium">Est. by Three Sisters</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
          >
            Where Art, Tradition &{" "}
            <span className="text-antique-gold">Creativity</span> Come Together
          </motion.h1>

          {/* Animated subtitle with rotating words */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10"
          >
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-body">
              Premium{" "}
              <span className="relative inline-block min-w-[120px] text-antique-gold font-semibold">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {SERVICE_WORDS[currentWord]}
                  </motion.span>
                </AnimatePresence>
              </span>
              {" "}by Three Sisters
            </p>
            <p className="text-sm md:text-base text-white/50 mt-2 font-body tracking-wide">
              Mehndi · Paintings · Sketches · Fashion · Crafts · Gifts · Home Decor
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/portfolio" variant="gold" size="lg" id="hero-explore-cta">
              Explore Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="/booking" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 hover:text-white dark:border-white/40 dark:text-white dark:hover:bg-white/10 dark:hover:text-white" id="hero-booking-cta">
              Book Consultation
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase font-body">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-antique-gold/60 to-transparent" />
      </motion.div>
    </section>
  );
}
