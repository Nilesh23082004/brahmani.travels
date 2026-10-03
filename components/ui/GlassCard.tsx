"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export type GlassCardVariant = "light" | "dark" | "gold-accent" | "frost";

export interface GlassCardProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  variant?: GlassCardVariant;
  rounded?: "2xl" | "3xl" | "xl";
  hoverLift?: boolean;
  goldGlow?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<GlassCardVariant, string> = {
  light:
    "bg-white/85 backdrop-blur-xl border border-white/70 shadow-xl shadow-navy/5 text-navy-deep",
  dark:
    "bg-[#06123A]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/30 text-white",
  "gold-accent":
    "bg-[#0A1F5C]/85 backdrop-blur-xl border border-gold/30 shadow-xl shadow-gold/10 text-white hover:border-gold/60",
  frost:
    "bg-white/60 backdrop-blur-2xl border border-white/40 shadow-lg shadow-navy-deep/5 text-navy-deep",
};

const roundedStyles = {
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
};

export function GlassCard({
  variant = "light",
  rounded = "2xl",
  hoverLift = true,
  goldGlow = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hoverLift
          ? {
              y: -5,
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        variantStyles[variant],
        roundedStyles[rounded],
        goldGlow && "hover:shadow-2xl hover:shadow-gold/20",
        className
      )}
      {...props}
    >
      {/* Subtle top reflection sheen */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70"
        aria-hidden="true"
      />
      {children}
    </motion.div>
  );
}
