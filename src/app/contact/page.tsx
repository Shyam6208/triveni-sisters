import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Triveni Art House. Find our location, phone, email, social media links, and business hours.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
