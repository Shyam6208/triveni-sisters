"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "@/components/ui/SocialIcons";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal dark:bg-dark-bg text-white border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-6 md:py-8">
        <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6 md:flex-row md:justify-between">
          
          {/* Left: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-heading text-base sm:text-lg font-bold tracking-widest text-antique-gold mb-1">
              TRIVENI <span className="font-light text-white tracking-widest">ART HOUSE</span>
            </div>
            <span className="text-white/40 text-xs text-center md:text-left">
              © {currentYear} All rights reserved. Crafted by Three Sisters.
            </span>
          </div>

          {/* Center: Essential Links */}
          <nav className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-2 order-3 md:order-2 w-full md:w-auto md:justify-start">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((label, index) => (
              <div key={label} className="flex items-center gap-3 sm:gap-4">
                <Link
                  href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium text-white/50 hover:text-antique-gold transition-colors touch-target"
                >
                  {label}
                </Link>
                {index < 4 && (
                  <span className="w-1 h-1 rounded-full bg-white/10 hidden sm:block"></span>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Social & Contact */}
          <div className="flex items-center gap-4 sm:gap-5 order-2 md:order-3">
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
              className="text-white/60 hover:text-antique-gold transition-colors text-xs sm:text-sm flex items-center gap-2 touch-target"
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline text-xs font-medium tracking-wide">
                {CONTACT_INFO.phone}
              </span>
            </a>
            
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            
            <div className="flex items-center gap-4">
              <a href={CONTACT_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-antique-gold transition-colors touch-target" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={CONTACT_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-antique-gold transition-colors touch-target" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href={CONTACT_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-antique-gold transition-colors touch-target" aria-label="YouTube">
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
