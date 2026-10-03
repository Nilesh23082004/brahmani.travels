"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import {
  Users,
  Phone,
  ArrowRight,
  Bus as BusIcon,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import {
  fleet,
  Car,
  FilterGroup,
  FLEET_FILTER_TABS,
  BUS_EMPTY_STATE,
} from "@/data/fleet";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { CarImage } from "@/components/ui/CarImage";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface FleetSectionProps {
  id?: string;
  className?: string;
  showHeader?: boolean;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  isPageHeader?: boolean;
  initialFilter?: FilterGroup;
}

function FleetCarCard({
  car,
}: {
  car: Car;
}) {
  return (
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: "easeOut" },
        },
      }}
      id={`fleet-${car.slug}`}
      className="group flex flex-col justify-between h-full bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(10,31,92,0.06)] hover:shadow-[0_20px_35px_-8px_rgba(10,31,92,0.15)] hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 relative"
    >
      <div>
        {/* Step 2 & 4: Image Area with aspect-video, next/image fill, object-cover object-center, scale-105 duration-500 */}
        <CarImage
          src={car.image}
          carName={car.name}
          alt={`${car.name} ${car.seats} seater for rent in Ahmedabad`}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        >
          {/* Glass badges on the image */}
          {/* Top-left: seat count ("17 Seats") */}
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur text-xs font-semibold text-slate-800 shadow-sm border border-white/40">
              <Users className="w-3.5 h-3.5 text-slate-600" />
              <span>{car.seats} Seats</span>
            </div>
          </div>

          {/* Top-right: category chip */}
          <div className="absolute top-3 right-3 z-10 pointer-events-none">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/80 backdrop-blur text-xs font-semibold text-slate-800 shadow-sm border border-white/40">
              {car.type}
            </span>
          </div>
        </CarImage>

        {/* Car Name */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1F5C] mt-4 mb-1 line-clamp-1">
          {car.name}
        </h3>
        <p className="text-xs text-slate-500 font-medium">
          Sanitized AC · Verified Chauffeur
        </p>
      </div>

      {/* Bottom Pricing & Actions */}
      <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
            Starting at
          </span>
          <div className="flex items-baseline">
            <span className="text-2xl sm:text-3xl font-sans font-bold text-[#0A1F5C] tracking-tight">
              ₹{car.ratePerKm}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-500 ml-1">
              /Km
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Round Call Button */}
          <a
            href={siteConfig.phoneTel}
            aria-label={`Call to book ${car.name}`}
            title={`Call to book ${car.name}`}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[#0A1F5C] shadow-sm flex items-center justify-center transition-all duration-200 hover:scale-105 hover:border-gold shrink-0 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#0A1F5C]" />
          </a>

          {/* Book Now Button */}
          <Button
            variant="primary"
            size="sm"
            href={`/booking?car=${car.slug}`}
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            className="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-gold/20"
          >
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function FleetSection({
  id = "fleet",
  className,
  showHeader = true,
  eyebrow = "Our Fleet",
  title = "Choose Your Car",
  subtitle = "From economical sedans to spacious luxury tempo travellers, explore our sanitized and verified fleet tailored for every journey.",
  isPageHeader = false,
  initialFilter = "All",
}: FleetSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterGroup>(initialFilter);

  // Filter cars based on selected tab
  const filteredCars =
    activeFilter === "All"
      ? fleet
      : activeFilter === "Bus"
      ? []
      : fleet.filter((car) => car.filterGroup === activeFilter);


  return (
    <section
      id={id}
      className={cn("relative py-20 bg-slate-50/70 overflow-hidden", className)}
    >
      {/* Ambient background blur elements */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-72 bg-gradient-to-b from-gold/5 via-navy/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-xs font-bold uppercase tracking-widest mb-3.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>{eyebrow}</span>
            </motion.div>

            {isPageHeader ? (
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight"
              >
                {title}
              </motion.h1>
            ) : (
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight"
              >
                {title}
              </motion.h2>
            )}

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
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

        {/* Filter Pill Tabs - Guaranteed Single Line on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center mb-10 sm:mb-12 px-2"
        >
          <div className="inline-flex flex-nowrap items-center justify-start sm:justify-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-white border border-slate-200 shadow-sm max-w-full overflow-x-auto no-scrollbar scroll-smooth">
            {FLEET_FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={cn(
                    "relative px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 select-none cursor-pointer whitespace-nowrap shrink-0",
                    isActive
                      ? "text-slate-950"
                      : "text-slate-600 hover:text-navy hover:bg-slate-50"
                  )}
                >
                  {/* Sliding Gold Gradient Highlight */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFleetFilter"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark shadow-md"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Fleet Grid / Empty State */}
        <AnimatePresence mode="wait">
          {activeFilter === "Bus" ? (
            /* Bus Friendly Empty State */
            <motion.div
              key="bus-empty-state"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="max-w-2xl mx-auto rounded-3xl bg-white border border-gold/30 p-8 sm:p-12 shadow-xl text-center relative overflow-hidden group"
            >
              {/* Background ambient gold shine */}
              <div
                className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-gold/15 rounded-full blur-3xl"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-light to-gold-dark text-slate-950 flex items-center justify-center shadow-lg shadow-gold/20 mb-5">
                  <BusIcon className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-3">
                  {BUS_EMPTY_STATE.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                  {BUS_EMPTY_STATE.description}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    href={siteConfig.phoneTel}
                    leftIcon={<Phone className="w-4 h-4" />}
                    className="w-full sm:w-auto shadow-md shadow-gold/30"
                  >
                    {BUS_EMPTY_STATE.callToAction}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
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
          ) : (
            /* Cards Grid with Subtle 3D Tilt on Desktop */
            <motion.div
              key={activeFilter}
              layout
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
            >
              {filteredCars.map((car: Car) => (
                <FleetCarCard
                  key={car.slug}
                  car={car}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Note Card Below Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-16 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-md text-slate-900 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
                <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
                <span>Custom Travel Solutions</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-deep tracking-tight">
                Need a different vehicle or a bus? Call us and we&apos;ll arrange it.
              </h3>
              <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                We organize tailored wedding convoys, corporate coaches, pilgrimage packages, and 25 to 56-seater buses across Gujarat and North India.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                href={siteConfig.phoneTel}
                leftIcon={<Phone className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-md shadow-gold/25 font-bold"
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
                className="w-full sm:w-auto border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-bold"
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
