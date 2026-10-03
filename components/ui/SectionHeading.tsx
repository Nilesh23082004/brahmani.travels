import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const lineAlignClasses = {
    left: "justify-start",
    center: "justify-center mx-auto",
    right: "justify-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl",
        alignClasses[align],
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2]",
          isDark ? "text-white" : "text-navy-deep"
        )}
      >
        {title}
      </h2>

      {/* Gold Underline with glowing accent */}
      <div
        className={cn(
          "flex items-center gap-1.5 mt-4 mb-3",
          lineAlignClasses[align]
        )}
      >
        <span className="h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-transparent via-[#E8C468] to-[#C9962E]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#C9962E] shadow-sm shadow-gold" />
        <span className="h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-[#C9962E] via-[#A97812] to-transparent" />
      </div>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed mt-2 max-w-2xl",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
