"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Car as CarIcon, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarImageProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  src: string;
  carName: string;
  className?: string;
  containerClassName?: string;
  alt?: string;
  priority?: boolean;
  variant?: "spotlight" | "navy" | "transparent";
  hasFloorShadow?: boolean;
}

export function CarImage({
  src,
  carName,
  className,
  containerClassName,
  alt,
  priority = false,
  variant = "spotlight",
  hasFloorShadow = true,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props
}: CarImageProps) {
  const [hasError, setHasError] = useState(false);
  const altText = alt || `${carName} available for rent in Ahmedabad`;

  const bgStyles =
    variant === "spotlight"
      ? "bg-[radial-gradient(ellipse_at_center,_#ffffff_25%,_#f1f5fa_65%,_#dce5f2_100%)] border border-slate-200/60"
      : variant === "navy"
      ? "bg-gradient-to-br from-[#06123A] via-[#0A1F5C] to-[#122A75]"
      : "bg-transparent";

  return (
    <div
      className={cn(
        "relative w-full aspect-[16/10] overflow-hidden rounded-2xl flex items-center justify-center transition-all duration-300",
        bgStyles,
        containerClassName
      )}
    >
      {/* Decorative ambient background for navy variant */}
      {variant === "navy" && (
        <div
          className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gold/20 blur-2xl rounded-full"
          aria-hidden="true"
        />
      )}

      {/* Realistic studio floor shadow beneath car */}
      {!hasError && src && hasFloorShadow && (
        <div
          className="pointer-events-none absolute bottom-3 sm:bottom-3.5 left-1/2 -translate-x-1/2 w-[72%] max-w-[340px] h-3 sm:h-3.5 bg-slate-900/25 blur-md rounded-full group-hover:scale-95 transition-transform duration-500"
          aria-hidden="true"
        />
      )}

      {!hasError && src ? (
        <Image
          src={src}
          alt={altText}
          width={1600}
          height={1000}
          quality={90}
          sizes={sizes}
          priority={priority}
          onError={() => setHasError(true)}
          className={cn(
            "relative z-10 w-full h-full object-contain p-3 sm:p-4 transition-transform duration-500 ease-out group-hover:scale-105",
            className
          )}
          {...props}
        />
      ) : (
        /* Branded Luxury Silhouette Fallback */
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center select-none w-full h-full">
          {/* Subtle stylized car contours */}
          <div className="relative mb-3 flex items-center justify-center">
            <div className="absolute inset-0 bg-gold/15 blur-xl rounded-full" />
            <div className="relative h-20 w-32 sm:h-24 sm:w-40 rounded-2xl border border-gold/30 bg-navy/60 backdrop-blur-md flex flex-col items-center justify-center shadow-lg shadow-black/30">
              <CarIcon className="w-10 h-10 sm:w-12 sm:h-12 text-gold animate-pulse" />
              <div className="mt-1 flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-gold-light">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Brahmani Fleet</span>
              </div>
            </div>
          </div>

          <p className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
            {carName}
          </p>
          <span className="text-[11px] font-medium text-slate-300 mt-0.5">
            Verified Clean & AC Fleet
          </span>
        </div>
      )}
    </div>
  );
}
