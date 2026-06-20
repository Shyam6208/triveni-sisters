import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Discover the story of Triveni Art House — three sisters united by their passion for art, mehndi, fashion, and handcrafted creations.",
  path: "/about",
  image: "/images/about-sisters.png",
});

export default function AboutPage() {
  return <AboutContent />;
}
