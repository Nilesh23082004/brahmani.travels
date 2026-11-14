import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { faqs } from "@/data/faq";
import { SITE_URL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Cab Rental Ahmedabad – Brahmani Travels",
  description:
    "Common questions about cab booking in Ahmedabad, per-km rates, airport transfers, outstation fares, Tempo Traveller hire, and payment terms.",
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/faq`,
    title: "FAQ | Brahmani Travels Cab Service Ahmedabad",
    description:
      "Find answers to common questions about cab rental rates, airport pickup, outstation trips, and driver verification in Ahmedabad.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Brahmani Travels FAQ",
      },
    ],
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-28 pb-12">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Hero Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 py-16 sm:py-20 text-slate-900 text-center border-b border-slate-200/80">
        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Frequently Asked Questions" }]}
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-3 mt-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Help &amp; Support Center</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-deep tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions about booking our cabs, outstation pricing, or payment terms? Everything you need to know about Brahmani Travels services in Ahmedabad.
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
