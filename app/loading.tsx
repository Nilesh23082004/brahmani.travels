import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-navy-deep">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute w-72 h-72 rounded-full bg-gold/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Pulsing Logo */}
        <div className="relative w-48 h-20 mb-4 animate-pulse">
          <Image
            src="/logo.png"
            alt="Brahmani Travels"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Loading Spinner */}
        <div className="w-10 h-10 border-2 border-gold/20 border-t-gold-dark rounded-full animate-spin mb-3" />

        <p className="font-serif text-sm font-semibold tracking-wider text-slate-600">
          Preparing Your Journey...
        </p>
      </div>
    </div>
  );
}
