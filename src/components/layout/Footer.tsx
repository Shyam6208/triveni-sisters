"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "@/components/ui/SocialIcons";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal dark:bg-dark-bg text-white border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="font-heading text-lg font-bold tracking-widest text-antique-gold mb-1">
              TRIVENI <span className="font-light text-white tracking-widest">ART HOUSE</span>
            </div>
            <span className="text-white/40 text-xs text-center md:text-left">
              © {currentYear} All rights reserved. Crafted by Three Sisters.
            </span>
          </div>

          {/* Center: Essential Links */}
          <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((label, index) => (
              <div key={label} className="flex items-center gap-4">
                <Link
                  href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50 hover:text-antique-gold transition-colors"
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
          <div className="flex items-center gap-5">
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
              className="text-white/60 hover:text-antique-gold transition-colors text-sm flex items-center gap-2"
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-medium tracking-wide">
                {CONTACT_INFO.phone}
              </span>
            </a>
            
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            
            <div className="flex items-center gap-4">
              <a href={CONTACT_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-antique-gold transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={CONTACT_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-antique-gold transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href={CONTACT_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-antique-gold transition-colors" aria-label="YouTube">
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
