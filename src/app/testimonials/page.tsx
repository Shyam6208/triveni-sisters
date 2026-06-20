import type { Metadata } from "next";
import TestimonialsContent from "./TestimonialsContent";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Testimonials",
  description:
    "Read what our happy clients say about Triveni Art House. Real reviews from real customers who trusted us with their special moments.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
