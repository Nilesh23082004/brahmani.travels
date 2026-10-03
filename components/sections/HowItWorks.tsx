"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Car,
  ClipboardList,
  PhoneCall,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export interface HowItWorksProps {
  id?: string;
  className?: string;
}

const steps = [
  {
    step: "01",
    title: "Choose Your Car",
    description:
      "Select your ideal ride from our wide fleet of sedans, SUVs, or 11 to 20-seater Tempo Travellers.",
    icon: Car,
  },
  {
    step: "02",
    title: "Fill Booking Details",
    description:
      "Enter your travel dates, pickup location, destination, and passenger requirements.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "We Confirm on Call/WhatsApp",
    description:
      "Our team directly confirms your booking, verifies timings, and provides honest, fixed fares.",
    icon: PhoneCall,
  },
  {
    step: "04",
    title: "Enjoy Your Ride",
    description:
      "Step into your sanitized vehicle on time and travel with peace of mind. Your journey, our responsibility.",
    icon: Sparkles,
  },
];

export function HowItWorks({ id = "how-it-works", className }: HowItWorksProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn(
        "relative py-24 sm:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden",
        className
      )}
    >
      {/* Background ambient decorative shapes */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-64 bg-gold/5 blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-xs font-bold uppercase tracking-widest mb-3.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Simple & Transparent</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight"
          >
            How It Works
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Book your journey with Brahmani Travels in 4 effortless steps. No hidden charges, no complicated paperwork.
          </motion.p>
        </div>

        {/* 4 Steps Container with Animated Connecting Gold Line */}
        <div className="relative">
          {/* Desktop Horizontal Gold Connecting Line */}
          <div className="hidden lg:block absolute top-28 left-[12%] right-[12%] h-[3px] pointer-events-none -z-0">
            {/* Background track line */}
            <div className="w-full h-full bg-slate-200/80 rounded-full" />
            {/* Animated drawing gold line on scroll */}
            <motion.div
              initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ originX: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full shadow-[0_0_12px_rgba(201,150,46,0.6)]"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.15,
                    ease: "easeOut",
                  }}
                  className="group relative flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold/40 transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Step Number & Icon Circle */}
                  <div className="relative mb-6">
                    {/* Glowing gold circular halo */}
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-md group-hover:scale-110 transition-transform duration-300" />

                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#E8C468] via-[#C9962E] to-[#A97812] text-slate-950 flex flex-col items-center justify-center shadow-lg shadow-gold/25 border-4 border-white group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                      <span className="text-[10px] font-bold font-mono tracking-wider mt-0.5 opacity-90">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-xl font-bold text-navy-deep mb-2.5 group-hover:text-gold-dark transition-colors">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Mobile/Tablet Arrow Indicator between steps */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-6 text-gold/60 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 transform rotate-90 md:rotate-0" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
