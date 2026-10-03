import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${siteConfig.name}`,
  description:
    "Find answers to common questions about Brahmani Travels car rental rates, booking process, driver verification, and outstation trips in Ahmedabad.",
};

export default function FaqPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50 pt-28 pb-12">
      {/* Page Hero Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 py-16 sm:py-20 text-slate-900 text-center border-b border-slate-200/80">
        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-4 font-semibold"
          >
            <Link href="/" className="hover:text-gold-dark transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-gold-dark">FAQ</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Help & Support Center</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-deep tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions about booking our cabs, outstation pricing, or payment terms? Everything you need to know is right here.
          </p>
        </Container>
      </section>

      {/* Main Accordion FAQ Section */}
      <FaqSection
        showHeader={false}
        className="bg-transparent py-14 sm:py-16"
      />

      {/* Bottom CTA Banner */}
      <CtaBanner />
    </main>
  );
}
