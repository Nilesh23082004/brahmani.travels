"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "zoom"
  | "fade";

export interface RevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  width?: "fit-content" | "100%";
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 32,
  once = true,
  className,
  width = "fit-content",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = (): Variants => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.2, delay },
        },
      };
    }

    const axisOffset = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
      zoom: { scale: 0.92, opacity: 0 },
      fade: { opacity: 0 },
    }[direction];

    return {
      hidden: {
        opacity: 0,
        ...axisOffset,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      variants={getVariants()}
      className={cn(className)}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
