"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Phone, HelpCircle, Sparkles } from "lucide-react";
import { faqs, FAQItem } from "@/data/faq";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";

export interface FaqSectionProps {
  id?: string;
  className?: string;
  showHeader?: boolean;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export function FaqSection({
  id = "faq",
  className,
  showHeader = true,
  eyebrow = "Got Questions?",
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our car rentals, driver allocation, and billing policies in Ahmedabad.",
}: FaqSectionProps) {
  // All FAQ items closed by default
  const [openId, setOpenId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (itemId: string) => {
    setOpenId((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white overflow-hidden",
        className
      )}
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-gold/5 blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container>
        {/* Header Block */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-xs font-bold uppercase tracking-widest mb-3.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>{eyebrow}</span>
            </motion.div>

            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight"
            >
              {title}
            </motion.h2>

            {subtitle && (
              <motion.p
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {/* Modern Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq: FAQItem, index: number) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: "easeOut",
                }}
                className={cn(
                  "rounded-2xl bg-white border shadow-sm transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "border-slate-200 border-l-4 border-l-gold shadow-md"
                    : "border-slate-200/90 hover:border-gold/40 hover:shadow-md"
                )}
              >
                {/* Accordion Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
                >
                  <span
                    className={cn(
                      "font-serif text-base sm:text-lg font-bold transition-colors duration-200",
                      isOpen ? "text-navy" : "text-slate-800 hover:text-navy"
                    )}
                  >
                    {faq.question}
                  </span>

                  {/* Gold "+" Icon rotating to "×" */}
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                      isOpen
                        ? "bg-gold text-slate-950 rotate-45 shadow-sm shadow-gold/30"
                        : "bg-slate-100 text-slate-600 group-hover:bg-gold/20 group-hover:text-gold-dark"
                    )}
                  >
                    <Plus className="w-4 h-4 transition-transform duration-200" />
                  </div>
                </button>

                {/* Animated Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      animate={{ height: "auto", opacity: 1 }}
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/70">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom "Still have questions?" Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-16 max-w-2xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 shadow-lg text-center relative overflow-hidden"
        >
          {/* Subtle gold glow accent */}
          <div
            className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-gold/15 blur-2xl rounded-full"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold-dark flex items-center justify-center mb-4 border border-gold/30">
              <HelpCircle className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-deep mb-2">
              Still Have Questions?
            </h3>

            <p className="text-slate-600 text-sm sm:text-base mb-6 max-w-md leading-relaxed">
              Can&apos;t find what you are looking for? Our local team in Ahmedabad is available 24/7 to assist with your custom booking.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                href={siteConfig.phoneTel}
                leftIcon={<Phone className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-md shadow-gold/20"
              >
                Call {siteConfig.phone}
              </Button>

              <Button
                variant="outline"
                size="md"
                href={siteConfig.whatsAppUrl || "https://wa.me/918980179677"}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<WhatsAppIcon className="w-4 h-4 text-emerald-600" />}
                className="w-full sm:w-auto border-emerald-500 text-emerald-700 hover:bg-emerald-50"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
