import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { FleetSection } from "@/components/sections/FleetSection";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: `Our Fleet | ${siteConfig.name}`,
  description:
    "Explore Brahmani Travels premium fleet in Ahmedabad. From Swift Dzire to Innova Crysta and 11 to 20 seater Tempo Travellers. Verified AC cabs with punctual drivers.",
};

export default function CarsPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50 pt-28 pb-12">
      {/* Page Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 py-16 text-slate-900 text-center border-b border-slate-200/80">
        <Container className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Ahmedabad Premium Fleet</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight">
            Our Luxury & Everyday Fleet
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Every vehicle in the Brahmani Travels fleet is sanitized daily, fully air-conditioned, and piloted by courteous, background-verified chauffeurs.
          </p>
        </Container>
      </section>

      {/* Reusable Fleet Section with interactive filters */}
      <FleetSection
        showHeader={true}
        eyebrow="Fleet Selection"
        title="Choose Your Car"
        subtitle="Filter by vehicle category to find the ideal car for your family trip, airport transfer, or group tour."
        className="bg-transparent py-14"
      />
    </main>
  );
}
