"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "@/components/ui/SocialIcons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FAQ from "@/components/sections/FAQ";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Hi! I have an inquiry.\n\nName: ${formData.name}\nEmail: ${formData.email || 'N/A'}\nSubject: ${formData.subject || 'N/A'}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`, "_blank");
  };

  const inputClasses =
    "w-full px-4 py-3 bg-[var(--surface)] dark:bg-dark-surface-2 border border-[var(--border)] rounded-xl text-charcoal dark:text-dark-text placeholder:text-charcoal-light/50 dark:placeholder:text-dark-text-muted/50 focus:outline-none focus:border-burgundy dark:focus:border-antique-gold focus:ring-2 focus:ring-burgundy/10 dark:focus:ring-antique-gold/10 transition-all duration-300 font-body text-sm";

  const CONTACT_CARDS = [
    {
      icon: Phone,
      title: "Call Us",
      primary: CONTACT_INFO.phone,
      secondary: "Mon – Sat, 10 AM – 7 PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: CONTACT_INFO.email,
      secondary: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: CONTACT_INFO.address,
      secondary: "By appointment preferred",
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: CONTACT_INFO.hours.weekdays,
      secondary: `Sat: ${CONTACT_INFO.hours.saturday}`,
    },
  ];

  const SOCIALS = [
    { icon: InstagramIcon, href: CONTACT_INFO.social.instagram, label: "Instagram", color: "hover:bg-[#E4405F]" },
    { icon: FacebookIcon, href: CONTACT_INFO.social.facebook, label: "Facebook", color: "hover:bg-[#1877F2]" },
    { icon: YouTubeIcon, href: CONTACT_INFO.social.youtube, label: "YouTube", color: "hover:bg-[#FF0000]" },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-24 sm:pt-28 md:pt-40 pb-14 sm:pb-16 md:pb-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 mehndi-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-5 md:px-6 text-center">
          <AnimatedSection variant="fadeUp">
            <div className="ornament-line mb-4 sm:mb-6">
              <span className="text-antique-gold text-xl sm:text-2xl">✦</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Get In Touch
            </h1>
            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
              We&apos;d love to hear from you. Reach out through any of the channels below.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Contact Cards */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {CONTACT_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={card.title} delay={i * 0.1} variant="fadeUp">
                  <div className="text-center p-6 bg-[var(--surface)] dark:bg-dark-surface rounded-2xl border border-[var(--border)] hover:border-antique-gold/30 hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 h-full">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-burgundy/5 dark:bg-antique-gold/5 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-burgundy dark:text-antique-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-charcoal dark:text-dark-text mb-2">
                      {card.title}
                    </h3>
                    <p className="text-charcoal dark:text-dark-text text-sm font-medium">
                      {card.primary}
                    </p>
                    <p className="text-charcoal-light dark:text-dark-text-muted text-xs mt-1">
                      {card.secondary}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <AnimatedSection variant="slideLeft">
              <div className="h-full min-h-[400px] bg-[var(--surface)] dark:bg-dark-surface rounded-3xl overflow-hidden border border-[var(--border)] shadow-[var(--shadow-card)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9!2d72.5!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Triveni Art House Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </AnimatedSection>

            {/* Quick Contact Form */}
            <AnimatedSection variant="slideRight">
              <div className="bg-[var(--surface)] dark:bg-dark-surface rounded-3xl p-6 md:p-8 border border-[var(--border)] shadow-[var(--shadow-card)]">
                <SectionHeading title="Send a Message" className="mb-8" />

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">💌</div>
                    <h3 className="font-heading text-xl font-bold text-charcoal dark:text-dark-text mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-charcoal-light dark:text-dark-text-muted text-sm">
                      We&apos;ll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        className={inputClasses}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Your Email *"
                        className={inputClasses}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        className={inputClasses}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                    <div>
                      <textarea
                        rows={4}
                        required
                        placeholder="Your Message *"
                        className={`${inputClasses} resize-none`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-7 md:py-4 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20BD5A] transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                        <Send className="w-5 h-5" />
                        Message via WhatsApp
                      </button>
                      <p className="text-center text-xs text-charcoal-light dark:text-dark-text-muted mt-3">
                        You will be redirected to WhatsApp to send your message.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Social Media */}
          <AnimatedSection variant="fadeUp" className="mt-16 text-center">
            <h3 className="font-heading text-2xl font-bold gradient-text mb-6">
              Connect With Us
            </h3>
            <div className="flex justify-center gap-4">
              {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-2xl bg-[var(--surface)] dark:bg-dark-surface border border-[var(--border)] flex items-center justify-center text-charcoal-light dark:text-dark-text-muted ${color} hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg`}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </>
  );
}
