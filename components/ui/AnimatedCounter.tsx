"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  formatter?: (val: number) => string;
}

export function AnimatedCounter({
  value,
  decimals = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  className,
  formatter,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(
    shouldReduceMotion ? value : 0
  );

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Ease out cubic: 1 - (1 - progress)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * value;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, value, duration, shouldReduceMotion]);

  const formatNumber = (num: number): string => {
    if (formatter) return formatter(num);

    const rounded = num.toFixed(decimals);
    if (decimals > 0) {
      return rounded;
    }

    // Format with Indian numbering system comma separation (e.g., 15,000)
    return Math.floor(num).toLocaleString("en-IN");
  };

  return (
    <span ref={ref} className={cn("tabular-nums inline-block", className)}>
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
}
