import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Services",
  description:
    "Explore our premium services: Bridal Mehndi, Engagement Mehndi, Festival Mehndi, Art & Craft, Handmade Gifts, Dress Designing, Stitching & Custom Orders.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesContent />;
}
