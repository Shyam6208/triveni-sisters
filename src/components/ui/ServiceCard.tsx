"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import Button from "./Button";
import type { Service } from "@/lib/constants";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <AnimatedSection delay={index * 0.1} variant="fadeUp">
      <div className="group h-full bg-[var(--surface)] dark:bg-dark-surface rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 border border-[var(--border)]">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <Icon className="w-5 h-5 text-burgundy dark:text-antique-gold" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-charcoal dark:text-dark-text mb-3">
            {service.title}
          </h3>
          <p className="text-charcoal-light dark:text-dark-text-muted text-sm leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-charcoal-light dark:text-dark-text-muted"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-antique-gold flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <Button href="/booking" variant="outline" size="sm" className="w-full">
            Book Now
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
