"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Crown,
  Clock,
  ShieldCheck,
  Handshake,
  Users,
  Coins,
  Sparkles,
  Plane,
  CheckCircle2,
} from "lucide-react";
import { whyUsItems } from "@/data/whyUs";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export interface WhyChooseUsProps {
  id?: string;
  className?: string;
  showSubtitle?: boolean;
}

export function WhyChooseUs({
  id = "why-choose-us",
  className,
  showSubtitle = true,
}: WhyChooseUsProps) {
  const shouldReduceMotion = useReducedMotion();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Crown":
        return <Crown className="w-6 h-6 text-slate-950" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-slate-950" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-slate-950" />;
      case "Handshake":
        return <Handshake className="w-6 h-6 text-slate-950" />;
      case "Users":
        return <Users className="w-6 h-6 text-slate-950" />;
      case "BadgeIndianRupee":
      default:
        return <Coins className="w-6 h-6 text-slate-950" />;
    }
  };

  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-24 bg-slate-50/70 text-slate-900 border-t border-slate-200/80 overflow-hidden",
        className
      )}
    >
      <Container className="relative z-10">
        {/* Header Block with Eyebrow and Gold Accent Line */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-xs font-bold uppercase tracking-widest mb-3.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Why Choose Us</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep tracking-tight leading-[1.2]"
          >
            Your Journey, Our Responsibility.
          </motion.h2>

          {/* Gold Gradient Accent Line */}
          <div className="h-1 w-20 sm:w-28 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 rounded-full" />

          {showSubtitle && (
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              Discover why thousands of travellers and corporate clients across Gujarat place their trust in Brahmani Travels.
            </motion.p>
          )}
        </div>

        {/* Brand Paragraph + Visual Graphic Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Column: Brand Paragraph with Exact Wording and Highlights */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md">
              {/* Gold vertical accent bar */}
              <div className="absolute top-8 left-0 w-1.5 h-16 bg-gradient-to-b from-gold-light via-gold to-gold-dark rounded-r-full" />

              <div className="pl-3 sm:pl-4">
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-[65ch]">
                  At Brahmani Travels, we don&apos;t just arrange journeys—we make
                  travelling{" "}
                  <span className="font-bold text-gold-dark">
                    easy, comfortable, and worry-free
                  </span>
                  . We understand that every traveller looks for a service they
                  can trust, which is why we focus on providing a reliable,
                  convenient, and customer-first travel experience from start to
                  finish. Whether you&apos;re planning a family vacation, a
                  business trip, a pilgrimage, or a memorable getaway, we are
                  committed to making every part of your journey smooth and
                  hassle-free. With personalized service, dependable travel
                  solutions, transparent communication, and dedicated customer
                  support, we ensure you can travel with confidence and peace of
                  mind. Your time, comfort, and satisfaction matter to us, and we
                  always strive to go the extra mile to make your journey truly
                  worthwhile. Ready to travel? Book your journey with Brahmani
                  Travels today and let us take care of the road ahead.
                </p>

                {/* Final sentence highlighted prominently */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-dark shrink-0" />
                  <span className="font-serif font-bold text-lg sm:text-xl text-navy-deep tracking-wide">
                    Your Journey, Our Responsibility.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Car Visual with Elegant Badge */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md aspect-square rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col items-center justify-center overflow-hidden shadow-md">
              {/* Subtle ambient spotlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-slate-50 to-transparent pointer-events-none" />

              {/* Central Vehicle Image */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="relative w-56 sm:w-64 aspect-[16/10] drop-shadow-[0_12px_20px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/images/fleet/toyota-innova-crysta.webp"
                    alt="Brahmani Travels Innova Crysta"
                    fill
                    className="object-contain"
                    sizes="280px"
                  />
                </div>
                <div className="w-48 h-3 -mt-2 bg-slate-900/10 blur-md rounded-full" />
              </div>

              {/* Tour & Airport Ready Badge */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-sm">
                <Plane className="w-3.5 h-3.5 text-gold-dark transform -rotate-12" />
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-700">
                  Tour & Airport Ready
                </span>
              </div>

              {/* 100% Punctual Guarantee Badge */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-800">
                  100% Punctual Guarantee
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
              className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              <div className="relative z-10">
                {/* Gold Gradient Circular Chip */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center shadow-md shadow-gold/20 mb-6 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(item.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-deep mb-3 group-hover:text-gold-dark transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom hairline */}
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-gold-dark">Brahmani Standard</span>
                <span className="text-[11px] font-mono text-slate-400">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
