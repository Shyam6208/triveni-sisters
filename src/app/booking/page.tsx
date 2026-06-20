import type { Metadata } from "next";
import BookingContent from "./BookingContent";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Book Now",
  description:
    "Book your consultation with Triveni Art House. Fill out our inquiry form for bridal mehndi, dress designing, handmade gifts, and custom creative orders.",
  path: "/booking",
});

export default function BookingPage() {
  return <BookingContent />;
}
