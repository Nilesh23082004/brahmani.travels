"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function BrandedPageIntro() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show once per browser session
    const hasSeenIntro = sessionStorage.getItem("bt_intro_seen");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasSeenIntro && !prefersReducedMotion) {
      const showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 0);
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("bt_intro_seen", "true");
      }, 1200);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-navy-deep select-none pointer-events-none"
        >
          {/* Ambient center gold glow */}
          <div
            className="absolute w-80 h-80 rounded-full bg-gold/10 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Fade-in & Scale */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-64 sm:w-80 h-24 sm:h-28 mb-4"
            >
              <Image
                src="/logo.png"
                alt="Brahmani Travels Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Gold Swoosh Drawing SVG */}
            <div className="w-48 h-6 mt-1">
              <svg viewBox="0 0 200 24" className="w-full h-full" fill="none">
                <motion.path
                  d="M 10 18 Q 100 2, 190 14"
                  stroke="url(#introGoldGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="introGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C9962E" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#C9962E" stopOpacity="1" />
                    <stop offset="100%" stopColor="#C9962E" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark mt-1"
            >
              Your Journey, Our Responsibility
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
