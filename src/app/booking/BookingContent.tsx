"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { SERVICE_CATEGORIES, getServicesByCategory, BUDGET_RANGES, CONTACT_INFO } from "@/lib/constants";

export default function BookingContent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    eventDate: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Hi! I'd like to book a consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nService: ${formData.service}\nEvent Date: ${formData.eventDate || 'N/A'}\nBudget: ${formData.budget || 'N/A'}\n\nMessage: ${formData.message || 'N/A'}`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`, "_blank");
  };


  const inputClasses =
    "w-full px-4 py-3 bg-[var(--surface)] dark:bg-dark-surface-2 border border-[var(--border)] rounded-xl text-charcoal dark:text-dark-text placeholder:text-charcoal-light/50 dark:placeholder:text-dark-text-muted/50 focus:outline-none focus:border-burgundy dark:focus:border-antique-gold focus:ring-2 focus:ring-burgundy/10 dark:focus:ring-antique-gold/10 transition-all duration-300 font-body text-sm";

  const labelClasses = "block text-sm font-medium text-charcoal dark:text-dark-text mb-2 font-body";

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 mehndi-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <AnimatedSection variant="fadeUp">
            <div className="ornament-line mb-6">
              <span className="text-antique-gold text-2xl">✦</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Book Your Consultation
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to bring your creative vision to life? Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Booking Form Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <AnimatedSection variant="slideLeft" className="lg:col-span-2">
              <div className="bg-[var(--surface)] dark:bg-dark-surface rounded-3xl p-6 md:p-10 border border-[var(--border)] shadow-[var(--shadow-card)]">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">✨</div>
                    <h3 className="font-heading text-2xl font-bold text-charcoal dark:text-dark-text mb-3">
                      Thank You!
                    </h3>
                    <p className="text-charcoal-light dark:text-dark-text-muted">
                      We&apos;ve received your inquiry and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" id="booking-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className={labelClasses}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="Your full name"
                          className={inputClasses}
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClasses}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          placeholder="+91 99538 89028"
                          className={inputClasses}
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        className={inputClasses}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className={labelClasses}>
                          Service Required *
                        </label>
                        <select
                          id="service"
                          required
                          className={inputClasses}
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                        >
                          <option value="">Select a service</option>
                          {SERVICE_CATEGORIES.map((cat) => (
                            <optgroup key={cat.id} label={cat.title}>
                              {getServicesByCategory(cat.id).map((s) => (
                                <option key={s.id} value={s.title}>
                                  {s.title}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="eventDate" className={labelClasses}>
                          Event Date
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          className={inputClasses}
                          value={formData.eventDate}
                          onChange={(e) =>
                            setFormData({ ...formData, eventDate: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className={labelClasses}>
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        className={inputClasses}
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                      >
                        <option value="">Select budget range</option>
                        {BUDGET_RANGES.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClasses}>
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your requirements, ideas, or any special requests..."
                        className={`${inputClasses} resize-none`}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20BD5A] transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                        <MessageCircle className="w-6 h-6" />
                        Book via WhatsApp
                      </button>
                      <p className="text-center text-xs text-charcoal-light dark:text-dark-text-muted mt-3">
                        You will be redirected to WhatsApp to complete your booking.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection variant="slideRight">
              <div className="space-y-6">
                {/* Contact Card */}
                <div className="bg-[var(--surface)] dark:bg-dark-surface rounded-3xl p-6 border border-[var(--border)] shadow-[var(--shadow-card)]">
                  <h3 className="font-heading text-xl font-bold text-charcoal dark:text-dark-text mb-6">
                    Contact Information
                  </h3>
                  <ul className="space-y-5">
                    {[
                      { icon: Phone, label: "Phone", value: CONTACT_INFO.phone },
                      { icon: Mail, label: "Email", value: CONTACT_INFO.email },
                      { icon: MapPin, label: "Address", value: CONTACT_INFO.address },
                    ].map(({ icon: Icon, label, value }) => (
                      <li key={label} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-burgundy/5 dark:bg-antique-gold/5 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-burgundy dark:text-antique-gold" />
                        </div>
                        <div>
                          <span className="text-xs text-charcoal-light dark:text-dark-text-muted uppercase tracking-wider">
                            {label}
                          </span>
                          <p className="text-charcoal dark:text-dark-text text-sm font-medium">
                            {value}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hours Card */}
                <div className="bg-[var(--surface)] dark:bg-dark-surface rounded-3xl p-6 border border-[var(--border)] shadow-[var(--shadow-card)]">
                  <h3 className="font-heading text-xl font-bold text-charcoal dark:text-dark-text mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-antique-gold" />
                    Business Hours
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      { day: "Mon – Fri", hours: CONTACT_INFO.hours.weekdays },
                      { day: "Saturday", hours: CONTACT_INFO.hours.saturday },
                      { day: "Sunday", hours: CONTACT_INFO.hours.sunday },
                    ].map(({ day, hours }) => (
                      <li key={day} className="flex justify-between">
                        <span className="text-charcoal-light dark:text-dark-text-muted">{day}</span>
                        <span className="text-charcoal dark:text-dark-text font-medium">{hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
