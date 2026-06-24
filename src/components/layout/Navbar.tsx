"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
        id="main-navbar"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0" id="nav-logo">
            <div className="relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-burgundy to-burgundy-dark flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(122,31,61,0.3)] transition-shadow duration-500">
                <span className="font-heading text-white text-base sm:text-lg md:text-xl font-bold">T</span>
              </div>
              <div className="absolute -inset-1 rounded-full border border-antique-gold/30 group-hover:border-antique-gold/60 transition-colors duration-500" />
            </div>
            <div className="hidden xs:block">
              <span className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold text-charcoal dark:text-dark-text block leading-tight">
                Triveni
              </span>
              <span className="text-[8px] sm:text-[10px] md:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-rose-gold font-body">
                Art House
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.filter((l) => l.label !== "Book Now").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  pathname === link.href
                    ? "text-burgundy dark:text-antique-gold"
                    : "text-charcoal-light dark:text-dark-text-muted hover:text-burgundy dark:hover:text-antique-gold"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-antique-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button href="/booking" variant="primary" size="sm">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-charcoal dark:text-dark-text hover:bg-burgundy/10 dark:hover:bg-antique-gold/10 transition-colors cursor-pointer touch-target"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
            id="mobile-menu"
          >
            <div
              className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div className="absolute right-0 top-0 bottom-0 w-[90vw] sm:w-80 max-w-sm bg-[var(--background)] shadow-2xl flex flex-col pt-20 sm:pt-24 px-5 sm:px-6 pb-8 overflow-y-auto">
              {/* Decorative top line */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-gold-line" />

              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors touch-target ${
                        pathname === link.href
                          ? "text-burgundy dark:text-antique-gold bg-burgundy/5 dark:bg-antique-gold/5"
                          : "text-charcoal dark:text-dark-text hover:text-burgundy dark:hover:text-antique-gold hover:bg-burgundy/5 dark:hover:bg-antique-gold/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-[var(--border)]">
                <Button href="/booking" variant="primary" size="md" className="w-full text-sm sm:text-base">
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
