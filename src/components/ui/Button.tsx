"use client";

import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  id?: string;
}

const baseStyles =
  "inline-flex items-center justify-center font-body font-medium tracking-wide rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] relative overflow-hidden group";

const variantStyles = {
  primary:
    "bg-burgundy text-white hover:bg-burgundy-light hover:shadow-[0_8px_30px_rgba(122,31,61,0.3)] active:scale-[0.97]",
  secondary:
    "bg-rose-gold text-white hover:bg-rose-gold-light hover:shadow-[0_8px_30px_rgba(183,110,121,0.3)] active:scale-[0.97]",
  outline:
    "border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white dark:border-antique-gold dark:text-antique-gold dark:hover:bg-antique-gold dark:hover:text-dark-bg active:scale-[0.97]",
  ghost:
    "text-burgundy hover:bg-burgundy/10 dark:text-antique-gold dark:hover:bg-antique-gold/10 active:scale-[0.97]",
  gold:
    "bg-gradient-to-r from-antique-gold to-antique-gold-light text-burgundy-dark font-semibold hover:shadow-[0_8px_30px_rgba(212,175,55,0.35)] active:scale-[0.97]",
};

const sizeStyles = {
  sm: "px-4 sm:px-5 py-2 text-xs sm:text-sm gap-1.5",
  md: "px-6 sm:px-7 py-3 text-sm sm:text-base gap-2",
  lg: "px-8 sm:px-9 py-4 text-base sm:text-lg gap-2.5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  id,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} id={id}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} id={id}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
