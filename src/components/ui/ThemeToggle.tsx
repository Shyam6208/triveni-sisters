"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center text-burgundy dark:text-antique-gold hover:bg-burgundy/10 dark:hover:bg-antique-gold/10 transition-all duration-300 cursor-pointer"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      id="theme-toggle"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
