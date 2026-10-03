import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "gold"
  | "navy"
  | "glass"
  | "outline"
  | "success";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  dot?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  gold:
    "bg-gold/10 text-gold-dark border border-gold/30 shadow-sm shadow-gold/10",
  navy:
    "bg-navy text-white border border-gold/30 shadow-sm shadow-navy/20",
  glass:
    "bg-white/15 backdrop-blur-md text-white border border-white/30 shadow-sm shadow-black/10",
  outline:
    "bg-transparent text-navy border border-navy/20 hover:border-gold transition-colors",
  success:
    "bg-emerald-500/10 text-emerald-700 border border-emerald-500/30",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[11px] px-2.5 py-0.5 rounded-full gap-1 font-medium",
  md: "text-xs px-3.5 py-1 rounded-full gap-1.5 font-semibold tracking-wide",
  lg: "text-sm px-4 py-1.5 rounded-full gap-2 font-semibold",
};

export function Badge({
  variant = "gold",
  size = "md",
  icon,
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center select-none uppercase tracking-wider transition-all duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
        </span>
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
