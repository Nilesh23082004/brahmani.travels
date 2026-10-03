"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "glass"
  | "navy"
  | "outline"
  | "outline-gold"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  isFullWidth?: boolean;
  magnetic?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-[#E8C468] via-[#C9962E] to-[#A97812] text-navy-deep font-semibold shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/40 border border-gold-light/40 group",
  secondary:
    "bg-transparent border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white shadow-sm transition-colors",
  glass:
    "bg-white/10 backdrop-blur-md border border-white/25 text-white font-medium hover:bg-white/20 hover:border-white/40 shadow-lg shadow-black/10",
  navy:
    "bg-navy text-white font-semibold hover:bg-navy-deep border border-gold/40 shadow-lg shadow-navy-deep/20 hover:border-gold",
  outline:
    "bg-transparent border border-slate-300 text-slate-700 hover:border-gold hover:text-gold-dark hover:bg-slate-50 transition-colors",
  "outline-gold":
    "bg-transparent border-2 border-gold text-gold hover:bg-gradient-to-r hover:from-[#E8C468] hover:via-[#C9962E] hover:to-[#A97812] hover:text-navy-deep font-semibold transition-all",
  ghost:
    "bg-transparent text-navy hover:bg-navy/5 font-medium transition-colors",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3.5 py-1.5 rounded-xl gap-1.5 min-h-[44px]",
  md: "text-sm px-5 py-2.5 rounded-2xl gap-2 min-h-[44px]",
  lg: "text-base px-6 py-3 rounded-2xl gap-2.5 shadow-md min-h-[48px]",
  xl: "text-lg px-8 py-4 rounded-3xl gap-3 shadow-lg min-h-[52px]",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  target,
  rel,
  leftIcon,
  rightIcon,
  isLoading = false,
  isFullWidth = false,
  magnetic = true,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 20 });
  const springY = useSpring(y, { stiffness: 250, damping: 20 });

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!shouldReduceMotion && magnetic && variant === "primary") {
      if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.18);
        y.set((e.clientY - centerY) * 0.18);
      }
    }
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    isFullWidth && "w-full",
    className
  );

  const innerContent = (
    <>
      {/* Shine sweep overlay for primary gold variant */}
      {variant === "primary" && (
        <span
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-inherit"
          aria-hidden="true"
        >
          <span className="absolute -inset-full top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 group-hover:animate-[shine-sweep_1.2s_ease-in-out_infinite]" />
        </span>
      )}

      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}

      <span className="relative z-10 truncate">{children}</span>

      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0 relative z-10 transition-transform duration-200 group-hover:translate-x-1">
          {rightIcon}
        </span>
      )}
    </>
  );

  if (href) {
    const isAnchor = href.startsWith("#");

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isAnchor && href.length > 1) {
        const id = href.replace(/^#/, "");
        const targetElement = document.getElementById(id);
        if (targetElement) {
          e.preventDefault();
          const lenis = (window as any).__lenis;
          if (lenis && typeof lenis.scrollTo === "function") {
            lenis.scrollTo(targetElement, { offset: -90, duration: 1.2 });
          } else {
            const yOffset = -90;
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
          window.history.pushState(null, "", href);
        }
      }
      if (props.onClick) {
        (props.onClick as any)(e);
      }
    };

    return (
      <motion.div
        style={!shouldReduceMotion && magnetic && variant === "primary" ? { x: springX, y: springY } : undefined}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={cn("inline-block", isFullWidth && "w-full")}
      >
        {isAnchor ? (
          <a
            href={href}
            onClick={handleAnchorClick}
            className={baseClasses}
          >
            {innerContent}
          </a>
        ) : (
          <Link
            href={href}
            target={target}
            rel={rel}
            onClick={props.onClick as any}
            className={baseClasses}
          >
            {innerContent}
          </Link>
        )}
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      style={!shouldReduceMotion && magnetic && variant === "primary" ? { x: springX, y: springY } : undefined}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={baseClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {innerContent}
    </motion.button>
  );
}
