import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Portfolio",
  description:
    "Explore our creative portfolio — stunning mehndi designs, bespoke dresses, handmade crafts, and custom gift creations.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return <PortfolioContent />;
}
