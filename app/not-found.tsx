import React from "react";
import { Compass, Home, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="w-full min-h-[85vh] flex items-center justify-center bg-slate-50 text-slate-800 relative overflow-hidden py-24 px-4">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 w-80 h-80 bg-slate-200/60 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center max-w-xl">
        <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6 shadow-md text-gold-dark">
          <Compass className="w-10 h-10 animate-pulse" />
        </div>

        <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark mb-2 block">
          Error 404 • Lost on the Route
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-navy-deep tracking-tight mb-4">
          Destination Not Found
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
          The road you were looking for doesn&apos;t exist or has moved. Let us help you get back on track safely.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="primary"
            size="lg"
            href="/"
            leftIcon={<Home className="w-4 h-4" />}
            className="shadow-xl shadow-gold/25 font-bold"
          >
            Back to Home
          </Button>

          <Button
            variant="outline"
            size="lg"
            href="/cars"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="border-slate-300 text-slate-800 hover:border-gold hover:text-gold-dark bg-white shadow-sm"
          >
            Explore Fleet
          </Button>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500">
          Need immediate roadside assistance or booking?{" "}
          <a
            href={siteConfig.phoneTel}
            className="text-gold-dark font-bold hover:underline"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </Container>
    </main>
  );
}
