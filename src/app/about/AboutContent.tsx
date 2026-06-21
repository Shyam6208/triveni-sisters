"use client";

import Image from "next/image";
import { Heart, Palette, Gem, Sparkles, Brush, Home } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ContactCTA from "@/components/sections/ContactCTA";
import { BRAND_VALUES } from "@/lib/constants";

const SISTERS = [
  {
    name: "The Mehndi Artist",
    specialty: "Mehndi & Henna Artistry",
    description:
      "With an extraordinary eye for detail and years of practice, she transforms hands into canvases of intricate beauty — from traditional bridal patterns to modern Arabic designs.",
    image: "/images/bridal-mehndi.png",
  },
  {
    name: "The Fashion Designer",
    specialty: "Fashion, Paintings & Sketches",
    description:
      "A master of fabric and form, she creates bespoke outfits and original paintings. Her artistic vision spans from portrait sketches to vibrant canvas artworks.",
    image: "/images/dress-designing.png",
  },
  {
    name: "The Craft Creator",
    specialty: "Crafts, Gifts & Home Decor",
    description:
      "With boundless creativity, she crafts unique art pieces, personalized gifts, and beautiful home decorations that transform any space into a work of art.",
    image: "/images/handmade-crafts.png",
  },
];

const VALUE_ICONS = [Sparkles, Heart, Gem, Palette];

export default function AboutContent() {
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
              Our Story
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A creative studio founded by three sisters bringing together art, mehndi, fashion, paintings, sketches, handcrafted gifts, and home decoration under one artistic brand.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection variant="slideLeft">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-sisters.png"
                    alt="The three sisters of Triveni Art House"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -inset-4 rounded-3xl border border-antique-gold/20 -z-10 hidden md:block" />
              </div>
            </AnimatedSection>

            <AnimatedSection variant="slideRight">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-6">
                  Born from Passion,<br />Built with Love
                </h2>
                <div className="space-y-4 text-charcoal-light dark:text-dark-text-muted leading-relaxed">
                  <p>
                    Triveni Art House began as a dream shared over chai and creative conversations
                    between three sisters. Growing up, our home was always filled with colors, fabrics,
                    and the sweet scent of mehndi — a natural incubator for artistic expression.
                  </p>
                  <p>
                    Each of us discovered our own creative calling. One fell in love with the ancient
                    art of mehndi, another found her passion in fashion design and fine art — creating
                    paintings and sketches that capture the soul, and the third discovered the joy of
                    crafting handmade treasures and beautiful home decorations. Together, we realized
                    that our individual talents could create something truly magical.
                  </p>
                  <p>
                    The name &quot;Triveni&quot; — meaning the confluence of three sacred rivers — perfectly
                    captures our essence: three creative streams merging into one powerful force of art,
                    tradition, and innovation. Today, we offer everything from intricate mehndi artistry
                    to original paintings, pencil sketches, bespoke fashion, handcrafted gifts, and
                    artistic home decor.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sisters Cards */}
      <section className="py-20 md:py-28 bg-[var(--surface-2)] dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeading
            title="Meet the Sisters"
            subtitle="Three creative souls, each bringing their unique talent to Triveni Art House"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SISTERS.map((sister, i) => (
              <AnimatedSection key={sister.name} delay={i * 0.15} variant="fadeUp">
                <div className="bg-[var(--surface)] dark:bg-dark-surface-2 rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-2 border border-[var(--border)] group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={sister.image}
                      alt={sister.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/60 to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-heading text-xl font-bold text-charcoal dark:text-dark-text mb-1">
                      {sister.name}
                    </h3>
                    <p className="text-rose-gold text-sm font-medium mb-3">{sister.specialty}</p>
                    <p className="text-charcoal-light dark:text-dark-text-muted text-sm leading-relaxed">
                      {sister.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <SectionHeading
            title="What We Create"
            subtitle="A complete creative studio offering diverse artistic services"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { icon: Heart, label: "Mehndi Arts" },
              { icon: Brush, label: "Paintings" },
              { icon: Palette, label: "Art & Craft" },
              { icon: Gem, label: "Fashion" },
              { icon: Home, label: "Home Decor" },
              { icon: Sparkles, label: "Gifts" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.label} delay={i * 0.08} variant="scale">
                  <div className="text-center p-4 md:p-6 bg-[var(--surface)] dark:bg-dark-surface rounded-2xl border border-[var(--border)] hover:border-antique-gold/30 transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-burgundy/5 dark:bg-antique-gold/5 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-burgundy dark:text-antique-gold" />
                    </div>
                    <span className="text-sm font-medium text-charcoal dark:text-dark-text">
                      {item.label}
                    </span>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-[var(--surface-2)] dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <SectionHeading title="Our Vision & Mission" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection variant="slideLeft">
              <div className="p-8 bg-[var(--surface)] dark:bg-dark-surface-2 rounded-3xl border border-[var(--border)] h-full">
                <h3 className="font-heading text-2xl font-bold text-burgundy dark:text-antique-gold mb-4">
                  Our Vision
                </h3>
                <p className="text-charcoal-light dark:text-dark-text-muted leading-relaxed">
                  To be the most trusted and beloved creative studio that celebrates handcrafted
                  artistry across mehndi, paintings, fashion, and home decor — making premium creative
                  services accessible to everyone who values quality, tradition, and beauty.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="slideRight">
              <div className="p-8 bg-[var(--surface)] dark:bg-dark-surface-2 rounded-3xl border border-[var(--border)] h-full">
                <h3 className="font-heading text-2xl font-bold text-burgundy dark:text-antique-gold mb-4">
                  Our Mission
                </h3>
                <p className="text-charcoal-light dark:text-dark-text-muted leading-relaxed">
                  To bring creativity, tradition, and personal touch to every creation — whether it&apos;s
                  a bridal mehndi that tells a love story, a portrait sketch that captures a soul, a
                  custom outfit that fits perfectly, or a handmade home decor piece that transforms a space.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 md:py-28 mehndi-pattern">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we create"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_VALUES.map((value, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <AnimatedSection key={value.title} delay={i * 0.1} variant="fadeUp">
                  <div className="text-center p-6 bg-[var(--surface)] dark:bg-dark-surface-2 rounded-2xl border border-[var(--border)] hover:border-antique-gold/30 transition-all duration-500 h-full">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-burgundy/5 dark:bg-antique-gold/5 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-burgundy dark:text-antique-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-charcoal dark:text-dark-text mb-2">
                      {value.title}
                    </h3>
                    <p className="text-charcoal-light dark:text-dark-text-muted text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
