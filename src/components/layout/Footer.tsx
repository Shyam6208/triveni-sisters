"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "@/components/ui/SocialIcons";
import { CONTACT_INFO, SERVICES } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal dark:bg-dark-bg text-white overflow-hidden mehndi-pattern">
      {/* Decorative top border */}
      <div className="h-1 gradient-gold-line" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About Column */}
          <AnimatedSection variant="fadeUp" delay={0}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-burgundy to-burgundy-dark flex items-center justify-center">
                  <span className="font-heading text-white text-lg font-bold">T</span>
                </div>
                <div>
                  <span className="font-heading text-lg font-bold block leading-tight">
                    Triveni
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-rose-gold">
                    Art House
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Where Art, Tradition & Creativity Come Together. Premium Mehndi, Handmade Crafts &
                Dress Designing by Three Sisters.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: InstagramIcon, href: CONTACT_INFO.social.instagram, label: "Instagram" },
                  { icon: FacebookIcon, href: CONTACT_INFO.social.facebook, label: "Facebook" },
                  { icon: YouTubeIcon, href: CONTACT_INFO.social.youtube, label: "YouTube" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-antique-gold hover:text-charcoal transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <div>
              <h3 className="font-heading text-lg font-bold mb-5 text-antique-gold">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Portfolio", "Testimonials", "Book Now", "Contact"].map(
                  (label) => (
                    <li key={label}>
                      <Link
                        href={
                          label === "Home"
                            ? "/"
                            : label === "Book Now"
                            ? "/booking"
                            : `/${label.toLowerCase()}`
                        }
                        className="text-white/60 hover:text-antique-gold transition-colors text-sm"
                      >
                        {label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </AnimatedSection>

          {/* Services */}
          <AnimatedSection variant="fadeUp" delay={0.2}>
            <div>
              <h3 className="font-heading text-lg font-bold mb-5 text-antique-gold">Services</h3>
              <ul className="space-y-3">
                {SERVICES.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link
                      href="/services"
                      className="text-white/60 hover:text-antique-gold transition-colors text-sm"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection variant="fadeUp" delay={0.3}>
            <div>
              <h3 className="font-heading text-lg font-bold mb-5 text-antique-gold">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/60 text-sm">
                  <Phone className="w-4 h-4 text-antique-gold flex-shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-start gap-3 text-white/60 text-sm">
                  <Mail className="w-4 h-4 text-antique-gold flex-shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.email}</span>
                </li>
                <li className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 text-antique-gold flex-shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.address}</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {currentYear} Triveni Art House. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Crafted with ❤️ by Three Sisters
          </p>
        </div>
      </div>
    </footer>
  );
}
