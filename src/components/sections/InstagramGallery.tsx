"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { InstagramIcon } from "@/components/ui/SocialIcons";

const INSTAGRAM_IMAGES = [
  { id: "ig1", src: "/images/bridal-mehndi.png", alt: "Bridal mehndi design" },
  { id: "ig2", src: "/images/canvas-painting.png", alt: "Canvas painting" },
  { id: "ig3", src: "/images/stitching/5.jpeg", alt: "Stitching & alterations" },
  { id: "ig4", src: "/images/home-decor.png", alt: "Handmade home decor" },
  { id: "ig5", src: "/images/portrait-sketch.png", alt: "Portrait sketch" },
  { id: "ig6", src: "/images/custom-gifts.png", alt: "Custom gifts" },
  { id: "ig7", src: "/images/wall-decor.png", alt: "Wall decor" },
  { id: "ig8", src: "/images/festival-mehndi.png", alt: "Festival mehndi" },
];

export default function InstagramGallery() {
  return (
    <section className="py-20 md:py-28" id="instagram-gallery">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Follow Our Journey"
          subtitle="Stay inspired — follow us on Instagram for daily creative updates"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
          {INSTAGRAM_IMAGES.map((img, i) => (
            <AnimatedSection key={img.id} delay={i * 0.06} variant="scale">
              <a
                href="https://instagram.com/triveni.arthouse"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden block"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                />
                <div className="absolute inset-0 bg-burgundy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon className="w-8 h-8 text-white" />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
