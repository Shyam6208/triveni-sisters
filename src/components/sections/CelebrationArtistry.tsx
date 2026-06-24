"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, Sparkles, Crown, Flower2 } from "lucide-react";

const CELEBRATION_SERVICES = [
  {
    id: "rangoli-art",
    title: "Rangoli Art",
    description: "Traditional & contemporary Rangoli creations crafted to bring beauty and positivity to every celebration.",
    image: "/images/festival-decoration.png",
    icon: Flower2,
    href: "/services#rangoli-art",
  },
  {
    id: "mehndi-arts",
    title: "Mehndi Design",
    description: "Exquisite henna artistry for weddings and festivals, from traditional motifs to modern patterns.",
    image: "/images/bridal-mehndi.png",
    icon: Crown,
    href: "/services#mehndi-arts",
  },
  {
    id: "festival-decorations",
    title: "Festival Decorations",
    description: "Handcrafted decorations for Diwali, Navratri, Eid, and all auspicious occasions.",
    image: "/images/home-decor.png",
    icon: Sparkles,
    href: "/services#home-decor",
  },
];

export default function CelebrationArtistry() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[var(--surface-2)] dark:bg-dark-surface mehndi-pattern" id="celebration-artistry">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <SectionHeading
          title="Celebration Artistry"
          subtitle="Elevating your most cherished moments with our flagship celebratory arts"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {CELEBRATION_SERVICES.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <AnimatedSection key={service.id} delay={index * 0.15} variant="fadeUp">
                <Link href={service.href} className="group block h-full">
                  <motion.div 
                    className="relative h-[400px] sm:h-[450px] rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-antique-gold/30"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal/40 to-transparent dark:from-dark-bg/95 dark:via-dark-bg/50" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 group-hover:bg-burgundy/20 group-hover:border-antique-gold/50 transition-colors duration-500">
                          <Icon className="w-6 h-6 text-white group-hover:text-antique-gold transition-colors duration-500" />
                        </div>
                        
                        <h3 className="font-heading text-2xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        
                        <p className="text-white/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-antique-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          <span>View Designs</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Top Border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-antique-gold via-rose-gold to-burgundy scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
