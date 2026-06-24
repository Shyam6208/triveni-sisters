"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const FAQS = [
  {
    question: "How far in advance should I book bridal mehndi?",
    answer: "We recommend booking your bridal mehndi at least 3-6 months in advance, especially during peak wedding seasons, to secure your preferred dates and time slots.",
  },
  {
    question: "Do you take custom orders for paintings and sketches?",
    answer: "Yes! We specialize in custom artworks including portraits, canvas paintings, and charcoal sketches. You can share your reference photos and requirements via WhatsApp, and we'll discuss the details.",
  },
  {
    question: "Can I get my dress customized or altered?",
    answer: "Absolutely. We offer bespoke dress designing and precise alteration services. Whether it's a bridal lehenga, Anarkali, or an Indo-Western fusion dress, we tailor it perfectly to your fit and style.",
  },
  {
    question: "Do you ship home decor and handmade gifts?",
    answer: "Yes, we ship our art pieces, home decor, and custom gift hampers across India. Shipping costs and delivery times depend on the size of the item and your location.",
  },
  {
    question: "How do I make a booking or place an order?",
    answer: "All bookings and orders are handled directly through WhatsApp to ensure personalized communication. Simply click the WhatsApp button on our site or fill out the contact form to get started.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-[var(--surface-2)] dark:bg-dark-surface-2 rounded-2xl md:rounded-3xl mx-3 sm:mx-4 md:mx-6 my-6 sm:my-8 md:my-16 border border-[var(--border)] shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6">
        <AnimatedSection variant="fadeUp" className="text-center mb-10 sm:mb-12">
          <SectionHeading title="Frequently Asked Questions" subtitle="Find answers to common queries about our services, bookings, and custom orders." />
        </AnimatedSection>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 0.1} variant="fadeUp">
                <div 
                  className={`bg-[var(--surface)] dark:bg-dark-surface rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-burgundy dark:border-antique-gold shadow-md" : "border-[var(--border)] hover:border-burgundy/30 dark:hover:border-antique-gold/30"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left cursor-pointer focus:outline-none touch-target"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-charcoal dark:text-dark-text pr-8">
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 w-9 h-9 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-300 touch-target ${
                      isOpen ? "bg-burgundy text-white dark:bg-antique-gold dark:text-charcoal" : "bg-burgundy/5 text-burgundy dark:bg-antique-gold/10 dark:text-antique-gold"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-5 md:p-6 pt-0 text-charcoal-light dark:text-dark-text-muted leading-relaxed text-sm md:text-base border-t border-[var(--border)] mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
