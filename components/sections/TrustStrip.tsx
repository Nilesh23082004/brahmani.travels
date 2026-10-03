"use client";

import React from "react";
import { trustStats, trustMarqueeItems } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export function TrustStrip() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeContent = [...trustMarqueeItems, ...trustMarqueeItems];

  return (
    <section className="relative bg-white border-b border-slate-200/80 overflow-hidden py-12 sm:py-16 text-slate-900">
      <Container size="default" className="relative z-10">
        {/* Animated Milestones Counter Grid */}
        <Reveal direction="up" className="w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="relative flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 transition-all duration-300 hover:border-gold/50 hover:bg-white hover:shadow-md group"
              >
                <div className="flex items-baseline justify-center">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.0}
                    className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-deep group-hover:text-gold-dark transition-colors"
                  />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-600">
                  {stat.label}
                </p>

                {/* Subtle bottom gold accent indicator */}
                <div className="mt-3 h-0.5 w-8 rounded-full bg-gold/40 group-hover:w-16 group-hover:bg-gold-dark transition-all duration-300" />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Hairline Divider */}
        <div className="my-10 sm:my-12 h-px w-full bg-slate-200/80" />

        {/* Auto-scrolling Infinite Marquee */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee py-1.5 flex items-center gap-8 sm:gap-12">
            {marqueeContent.map((point, index) => (
              <div
                key={`${point}-${index}`}
                className="flex items-center gap-6 sm:gap-8 shrink-0 select-none"
              >
                <span className="font-serif text-sm sm:text-base font-semibold tracking-wide text-slate-700 hover:text-navy-deep transition-colors">
                  {point}
                </span>
                <span className="text-gold-dark text-xs sm:text-sm">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
