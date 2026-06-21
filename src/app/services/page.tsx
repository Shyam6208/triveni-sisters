import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Services",
  description:
    "Explore our premium services: Mehndi Arts, Paintings & Sketches, Art & Craft, Fashion & Stitching, Handmade Gifts, and Home Decor — each crafted with passion by three sisters.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesContent />;
}
