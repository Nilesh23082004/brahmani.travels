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
  children?: React.ReactNode;
}

export function CarImage({
  src,
  carName,
  className,
  containerClassName,
  alt,
  priority = false,
  sizes = "(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw",
  children,
  ...props
}: CarImageProps) {
  const [hasError, setHasError] = useState(false);
  const altText = alt || `${carName} for rent in Ahmedabad`;

  return (
    <div
      className={cn(
        "relative w-full aspect-video overflow-hidden rounded-2xl bg-slate-100",
        containerClassName
      )}
    >
      {!hasError && src ? (
        <Image
          src={src}
          alt={altText}
          fill
          priority={priority}
          sizes={sizes}
          onError={() => setHasError(true)}
          className={cn(
            "object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105",
            className
          )}
          {...props}
        />
      ) : (
        /* Fallback */
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center select-none w-full h-full bg-[#0A1F5C] text-white">
          <div className="relative mb-2 flex items-center justify-center">
            <div className="relative h-14 w-20 rounded-xl border border-gold/30 bg-navy/60 backdrop-blur-md flex flex-col items-center justify-center shadow-lg">
              <CarIcon className="w-7 h-7 text-gold animate-pulse" />
              <div className="mt-0.5 flex items-center gap-1 text-[8px] font-bold tracking-widest uppercase text-gold-light">
                <Sparkles className="w-2 h-2" />
                <span>Brahmani</span>
              </div>
            </div>
          </div>

          <p className="font-serif text-sm font-bold text-white tracking-wide">
            {carName}
          </p>
          <span className="text-[10px] font-medium text-slate-300 mt-0.5">
            Verified Clean & AC Fleet
          </span>
        </div>
      )}
      {children}
    </div>
  );
}

