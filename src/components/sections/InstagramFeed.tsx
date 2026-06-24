"use client";

import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { PORTFOLIO_ITEMS, CONTACT_INFO } from "@/lib/constants";
import { InstagramIcon } from "@/components/ui/SocialIcons";

export default function InstagramFeed() {
  // Grab a visually diverse mix of items to mock the IG feed
  const feedItems = [
    PORTFOLIO_ITEMS[0], // Bridal Mehndi
    PORTFOLIO_ITEMS[4], // Digital Mandala
    PORTFOLIO_ITEMS[5], // Portrait
    PORTFOLIO_ITEMS[7], // Dress
    PORTFOLIO_ITEMS[9], // Crafts
    PORTFOLIO_ITEMS[12], // Wall Art
    PORTFOLIO_ITEMS[1], // Engagement Mehndi
    PORTFOLIO_ITEMS[3], // Canvas Painting
  ].filter(Boolean); // Safety check in case array changes

  return (
    <section className="py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <AnimatedSection variant="fadeUp" className="text-center mb-10 sm:mb-12">
          <SectionHeading
            title="Follow Our Journey"
            subtitle="Join our community on Instagram for daily inspiration, behind-the-scenes, and our latest creations."
          />
          <div className="mt-5 sm:mt-6 flex justify-center">
            <a
              href={CONTACT_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-charcoal dark:bg-dark-surface text-white text-xs sm:text-sm font-medium hover:bg-burgundy dark:hover:bg-antique-gold dark:hover:text-charcoal transition-all duration-300 shadow-lg touch-target"
            >
              <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>@triveni.arthouse</span>
            </a>
          </div>
        </AnimatedSection>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 md:gap-4 max-w-5xl mx-auto">
          {feedItems.map((item, index) => (
            <AnimatedSection key={`${item.id}-${index}`} delay={index * 0.1} variant="fadeUp">
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden bg-[var(--surface-2)] dark:bg-dark-surface cursor-pointer rounded-sm md:rounded-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white backdrop-blur-sm">
                  <div className="flex items-center gap-2 font-body font-semibold">
                    <Heart className="w-6 h-6 fill-white" />
                    <span>{120 + (index * 15)}</span>
                  </div>
                  <div className="flex items-center gap-2 font-body font-semibold">
                    <MessageCircle className="w-6 h-6 fill-white" />
                    <span>{8 + (index * 2)}</span>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
