import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { SITE_URL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FleetSection } from "@/components/sections/FleetSection";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Fleet & Car Rental Rates in Ahmedabad | Brahmani Travels",
  description:
    "Explore Brahmani Travels car rental fleet in Ahmedabad from ₹11/km. Swift Dzire, Maruti Ertiga, Toyota Innova Crysta, and 11 to 20 seater Tempo Travellers.",
  alternates: {
    canonical: `${SITE_URL}/cars`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/cars`,
    title: "Our Fleet & Car Rental Rates in Ahmedabad | Brahmani Travels",
    description:
      "Explore Brahmani Travels car rental fleet in Ahmedabad from ₹11/km. Swift Dzire, Ertiga, Innova Crysta, and 11 to 20 seater Tempo Travellers.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Brahmani Travels Fleet in Ahmedabad",
      },
    ],
  },
};

export default function CarsPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50 pt-28 pb-12">
      {/* Page Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 py-16 text-slate-900 text-center border-b border-slate-200/80">
        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Our Fleet" }]}
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-4 mt-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Ahmedabad Premium Fleet</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight">
            Our Luxury &amp; Everyday Fleet
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Every vehicle in the Brahmani Travels fleet is sanitized daily, fully air-conditioned, and piloted by courteous, background-verified chauffeurs. Fares start from ₹11/km.
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
