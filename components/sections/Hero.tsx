"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { fleet } from "@/data/fleet";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CarImage } from "@/components/ui/CarImage";
import { BookingForm } from "@/components/forms/BookingForm";

export function Hero() {
  const featuredCar =
    fleet.find((car) => car.slug === "toyota-innova-crysta") || fleet[0];

  const headlineWords = [
    { text: "Luxury", isGold: true },
    { text: "Experience", isGold: true },
    { text: "at", isGold: false },
    { text: "Taxi", isGold: false },
    { text: "Rates.", isGold: false },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("book-your-ride");
    if (el) {
      const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(el, { offset: -90, duration: 1.2 });
      } else {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", "#book-your-ride");
      }
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9] text-slate-900 overflow-hidden pt-28 sm:pt-36 pb-14 sm:pb-20 border-b border-slate-200/70">
      {/* Soft warm ambient lighting for prestige (no dark/sci-fi blobs) */}
      <div
        className="pointer-events-none absolute top-10 right-1/4 w-[40rem] h-[40rem] bg-gradient-to-b from-gold/10 via-gold/5 to-transparent rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 bg-navy/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Main Content */}
      <Container size="default" className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Gold Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-xs sm:text-sm font-bold shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>Premium Cabs & Tours · Ahmedabad</span>
            </motion.div>

            {/* Word-by-Word Revealed Headline */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-navy-deep"
            >
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className={
                    word.isGold
                      ? "inline-block mr-3 sm:mr-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark bg-clip-text text-transparent"
                      : "inline-block mr-3 sm:mr-4 text-navy-deep"
                  }
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.h1>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-normal"
            >
              Premium rides, affordable prices. Punctual drivers, sanitized
              cars and honest fares, from daily city rides to outstation tours across Gujarat.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                href="#book-your-ride"
                onClick={scrollToBooking}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto text-base font-bold shadow-lg shadow-gold/25"
              >
                Book Your Ride
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={siteConfig.phoneTel}
                leftIcon={<Phone className="w-4 h-4 text-navy" />}
                className="w-full sm:w-auto text-base font-bold bg-white hover:bg-slate-50 border-slate-300 text-navy hover:text-navy-deep hover:border-navy shadow-sm"
              >
                Call {siteConfig.phone}
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Featured Vehicle with Crisp Lighting & Real Floating Chips */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4 lg:pt-0">
            {/* Subtle soft warm radial highlight */}
            <div
              className="pointer-events-none absolute inset-0 -top-6 bg-gradient-to-b from-gold/15 via-slate-100/50 to-transparent blur-2xl rounded-full scale-110 -z-10"
              aria-hidden="true"
            />

            {/* Car Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-lg lg:max-w-none group"
            >
              {/* Floating Badge 1: Price */}
              <div className="absolute -top-3 left-2 sm:-left-4 z-20 animate-float [animation-delay:0s]">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 text-navy-deep shadow-lg shadow-slate-900/5 text-xs sm:text-sm font-bold">
                  <Sparkles className="w-4 h-4 text-gold-dark" />
                  <span>From ₹11/Km</span>
                </div>
              </div>

              {/* Floating Badge 2: Sanitized Daily */}
              <div className="absolute top-1/3 -right-2 sm:-right-4 z-20 animate-float [animation-delay:1.5s]">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 text-navy-deep shadow-lg shadow-slate-900/5 text-xs sm:text-sm font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Sanitized Daily</span>
                </div>
              </div>

              {/* Floating Badge 3: On-Time Guarantee */}
              <div className="absolute -bottom-3 left-6 sm:left-10 z-20 animate-float [animation-delay:3s]">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 text-navy-deep shadow-lg shadow-slate-900/5 text-xs sm:text-sm font-bold">
                  <Clock className="w-4 h-4 text-gold-dark" />
                  <span>On-Time Guarantee</span>
                </div>
              </div>

              {/* Hero Featured Car Image */}
              <div className="relative z-10 w-full drop-shadow-[0_16px_24px_rgba(0,0,0,0.12)]">
                <CarImage
                  src={featuredCar.image}
                  carName={featuredCar.name}
                  priority
                  variant="transparent"
                  containerClassName="border-0 bg-transparent shadow-none"
                  className="scale-105"
                />
              </div>

              {/* Natural Floor Shadow */}
              <div
                className="pointer-events-none -mt-4 sm:-mt-6 mx-auto h-6 sm:h-8 w-4/5 rounded-full bg-slate-900/20 blur-xl"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>

        {/* Exact Book Your Ride Form on Homepage (Direct WhatsApp) */}
        <div id="book-your-ride" className="mt-12 sm:mt-16 w-full max-w-4xl mx-auto scroll-mt-28">
          <BookingForm
            title="Book Your Ride"
            subtitle="Fill in your travel details below. All details will be sent directly to our WhatsApp for instant booking."
          />
        </div>
      </Container>
    </section>
  );
}
