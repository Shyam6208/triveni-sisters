import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Portfolio",
  description:
    "Explore our creative portfolio — stunning mehndi designs, original paintings, hand-drawn sketches, bespoke dresses, handmade crafts, custom gifts, and artistic home decor.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return <PortfolioContent />;
}
