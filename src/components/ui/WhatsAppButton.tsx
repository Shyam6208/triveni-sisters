"use client";

import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi! I'm interested in your services at Triveni Art House. Could you please share more details?"
  );
  const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-[pulse-glow_2s_infinite]"
      aria-label="Chat on WhatsApp"
      id="whatsapp-button"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
