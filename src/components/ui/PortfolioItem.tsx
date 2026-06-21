"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PortfolioItem as PortfolioItemType } from "@/lib/constants";

// Aspect ratio patterns for masonry variety
const ASPECT_PATTERNS = [
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
];

interface PortfolioItemProps {
  item: PortfolioItemType;
  onClick: (item: PortfolioItemType) => void;
  index?: number;
}

export default function PortfolioItem({ item, onClick, index = 0 }: PortfolioItemProps) {
  const aspectClass = ASPECT_PATTERNS[index % ASPECT_PATTERNS.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid ${aspectClass}`}
      onClick={() => onClick(item)}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/80 via-burgundy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
        <span className="inline-block px-3 py-1 bg-antique-gold/90 text-burgundy-dark text-xs font-semibold rounded-full mb-2 w-fit capitalize">
          {item.category.replace("-", " ")}
        </span>
        <h3 className="font-heading text-white text-lg font-bold">{item.title}</h3>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-antique-gold/40 transition-colors duration-500" />
    </motion.div>
  );
}
