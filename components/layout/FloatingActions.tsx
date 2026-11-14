"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";

export function FloatingActions() {
  const whatsAppPrefilledUrl = `${siteConfig.whatsAppUrl}?text=${encodeURIComponent(
    "Hi Brahmani Travels, I want to book a car."
  )}`;

  return (
    <aside
      aria-label="Floating quick actions"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* Gold "Call Now" Floating Pill */}
      <motion.a
        href={siteConfig.phoneTel}
        onClick={() => trackCallClick("floating_button")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        aria-label={`Call ${siteConfig.name} at ${siteConfig.phone}`}
        className="pointer-events-auto group inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-r from-[#E8C468] via-[#C9962E] to-[#A97812] text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-gold/25 border border-gold-light/50 transition-all hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-gold/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        <span className="p-1 rounded-full bg-black/10 group-hover:rotate-12 transition-transform">
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
        </span>
        <span className="font-extrabold tracking-wide">Call Now</span>
      </motion.a>

      {/* Attractive Floating WhatsApp Action */}
      <div className="relative pointer-events-auto group flex items-center gap-2.5">
        {/* Hover / Ambient Tooltip Pill */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-bold shadow-lg shadow-slate-900/10 border border-emerald-100 select-none transition-transform group-hover:scale-105"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>WhatsApp Us</span>
        </motion.div>

        {/* WhatsApp Button with Official Icon & Premium Gradient */}
        <div className="relative">
          {/* Subtle Ambient Pulse Wave */}
          <span
            className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"
            aria-hidden="true"
          />

          <motion.a
            href={whatsAppPrefilledUrl}
            onClick={() => trackWhatsAppClick("floating_button")}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            aria-label="Direct WhatsApp Chat with Brahmani Travels"
            className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-600/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
          >
            <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </motion.a>
        </div>
      </div>
    </aside>
  );
}
