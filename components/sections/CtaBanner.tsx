"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, ArrowRight, Plane, Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface CtaBannerProps {
  id?: string;
  className?: string;
}

export function CtaBanner({ id = "cta-banner", className }: CtaBannerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-24 overflow-hidden", className)}
    >
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white via-slate-50 to-amber-50/20 border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-xl text-center">
          {/* Subtle soft gold ambient glow */}
          <div
            className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-gold/10 rounded-full blur-3xl"
            aria-hidden="true"
          />

          {/* SVG Animated Gold Swoosh + Plane Motif */}
          <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden opacity-25">
            <svg
              viewBox="0 0 1000 400"
              className="w-full h-full"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M -50 350 C 200 300, 450 150, 1050 50"
                stroke="url(#ctaGoldSwoosh)"
                strokeWidth="3.5"
                strokeDasharray="8 8"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="ctaGoldSwoosh" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C9962E" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#C9962E" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C9962E" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Flying Golden Plane Silhouette Gliding across the banner */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -60, y: 30 }
            }
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
            className="pointer-events-none absolute top-8 right-12 sm:right-24 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gold/30 shadow-sm"
          >
            <Plane className="w-5 h-5 text-gold-dark transform -rotate-12" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
              Ahmedabad & Beyond
            </span>
          </motion.div>

          {/* Content Block */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Pill Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>Ready for Departure</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-deep tracking-tight leading-[1.15]"
            >
              Ready to travel?{" "}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-dark">
                Let us take care of the road ahead.
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
            >
              Experience punctual pickups, sanitized cars, and transparent taxi rates across Ahmedabad and all of Gujarat. Your comfort is our commitment.
            </motion.p>

            {/* CTAs: Book Now + Call Now */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                href="/booking"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto px-8 shadow-xl shadow-gold/25 text-base font-bold"
              >
                Book Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={siteConfig.phoneTel}
                leftIcon={<Phone className="w-5 h-5 text-gold-dark" />}
                className="w-full sm:w-auto px-8 text-base border-slate-300 text-slate-800 hover:border-gold hover:text-gold-dark bg-white shadow-sm"
              >
                Call {siteConfig.phone}
              </Button>
            </motion.div>

            {/* Micro Trust Indicators */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Cancellation Stress</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold-dark" />
                <span>Sanitized After Every Trip</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-navy" />
                <span>24/7 Dedicated Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
