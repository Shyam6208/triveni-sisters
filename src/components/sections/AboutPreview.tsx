"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-[var(--surface-2)] dark:bg-dark-surface" id="about-preview">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection variant="slideLeft">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-sisters.png"
                  alt="The three sisters of Triveni Art House"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-3xl border border-antique-gold/20 -z-10 hidden md:block" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-burgundy/10 backdrop-blur-sm flex items-center justify-center hidden md:flex">
                <span className="font-heading text-2xl text-burgundy dark:text-antique-gold font-bold">3</span>
                <span className="text-xs text-charcoal-light dark:text-dark-text-muted ml-1">Sisters</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection variant="slideRight">
            <div>
              <div className="ornament-line justify-start mb-4">
                <span className="text-antique-gold text-xl">✦</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
                Three Sisters,<br />One Passion
              </h2>
              <p className="text-charcoal-light dark:text-dark-text-muted text-base md:text-lg leading-relaxed mb-6">
                Triveni Art House was born from the shared passion of three sisters who believe that
                art has the power to transform moments into memories. With expertise spanning mehndi
                artistry, fashion design, and handcrafted creations, we bring a unique blend of
                tradition and innovation to everything we create.
              </p>
              <p className="text-charcoal-light dark:text-dark-text-muted text-base md:text-lg leading-relaxed mb-8">
                Every design we create tells a story — your story. From the intricate swirls of
                bridal mehndi to the delicate stitches of a custom outfit, we pour our heart into
                every piece.
              </p>
              <Button href="/about" variant="primary">
                Our Full Story
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
