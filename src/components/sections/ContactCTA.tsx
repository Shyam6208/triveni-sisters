"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-28 gradient-hero relative overflow-hidden" id="contact-cta">
      {/* Decorative elements */}
      <div className="absolute inset-0 mehndi-pattern" />
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-antique-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose-gold/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-5 md:px-6 text-center">
        <AnimatedSection variant="fadeUp">
          <div className="ornament-line mb-4 sm:mb-6">
            <span className="text-antique-gold text-xl sm:text-2xl">✦</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Ready to Create Something{" "}
            <span className="text-antique-gold">Beautiful</span>?
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed font-body">
            Whether it&apos;s your dream bridal mehndi, a custom outfit, or a heartfelt handmade gift — 
            we&apos;re here to bring your vision to life. Let&apos;s create something extraordinary together.
          </p>
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
            <Button href="/booking" variant="gold" size="md" className="md:px-9 md:py-4 md:text-lg text-sm sm:text-base" id="cta-book-now">
              Book Your Consultation
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="md"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white/10 dark:hover:text-white md:px-9 md:py-4 md:text-lg text-sm sm:text-base"
              id="cta-contact"
            >
              Get In Touch
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
