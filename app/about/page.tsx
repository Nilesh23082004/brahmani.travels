import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { aboutContent } from "@/data/about";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  Sparkles,
  MapPin,
  Phone,
  User,
  ExternalLink,
  ShieldCheck,
  Clock,
  Compass,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description:
    "Learn about Brahmani Travels, Ahmedabad's trusted car rental agency. Providing verified AC cabs, Tempo Travellers, and personalized tour packages across Gujarat and India.",
};

export default function AboutPage() {
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=B-105+Nand+Vatika,+Near+Mevada+Green+Party+Plot,+Nava+Naroda,+Ahmedabad,+Gujarat+382330&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-28 pb-12">
      {/* Hero Header Banner */}
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
            <span className="text-gold-dark">About Us</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Ahmedabad Trusted Travel Agency</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-deep tracking-tight">
            About Brahmani Travels
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Your Journey, Our Responsibility. Discover our commitment to safe, punctual, and comfortable travel across Ahmedabad and India.
          </p>
        </Container>
      </section>

      {/* Editorial Content + Interactive Google Map + Contact Card */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: 2 Editorial Blocks from /data/about.ts (7 Cols) */}
            <div className="lg:col-span-7 space-y-12">
              {/* Block 1: About Us */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-block mb-3">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-deep">
                    About Us
                  </h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-gold-light to-gold-dark rounded-full mt-2" />
                </div>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed text-left mt-4 font-normal">
                  {aboutContent.about}
                </p>
              </div>

              {/* Block 2: Why Choose Us? */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-block mb-3">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-deep">
                    Why Choose Us?
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-gold-light to-gold-dark rounded-full mt-2" />
                </div>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed text-left mt-4 font-normal">
                  {aboutContent.whyChooseUsShort}
                </p>
              </div>

              {/* Company Highlights Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center">
                  <Clock className="w-6 h-6 text-gold mb-2" />
                  <span className="font-serif font-bold text-lg text-navy-deep">24/7 Service</span>
                  <span className="text-xs text-slate-500 mt-0.5">Always available</span>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
                  <span className="font-serif font-bold text-lg text-navy-deep">Sanitized Fleet</span>
                  <span className="text-xs text-slate-500 mt-0.5">Clean & verified</span>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center">
                  <Compass className="w-6 h-6 text-cyan-600 mb-2" />
                  <span className="font-serif font-bold text-lg text-navy-deep">All-India Tours</span>
                  <span className="text-xs text-slate-500 mt-0.5">State & national</span>
                </div>
              </div>

              {/* Online Contact / Enquiry Form */}
              <div id="contact-form" className="pt-4">
                <ContactForm />
              </div>
            </div>

            {/* Right Column: Google Map Embed + Contact Card (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              {/* Google Map Card */}
              <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md relative group">
                <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span>Office Location</span>
                  </div>
                  <a
                    href={siteConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-dark hover:text-gold transition-colors"
                  >
                    <span>View Larger</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Map Frame with Lazy Loading */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-100">
                  <iframe
                    src={mapEmbedUrl}
                    title="Brahmani Travels Location - Nava Naroda Ahmedabad"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                  />

                  {/* Floating Action Overlay Chip */}
                  <a
                    href={siteConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy/90 hover:bg-navy text-white text-xs font-bold shadow-lg backdrop-blur-md transition-all hover:scale-105 border border-white/20"
                  >
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-slate-300" />
                  </a>
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
                  Contact Information
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-deep mb-4">
                  Visit or Call Our Desk
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-600">
                      <MapPin className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">
                        Head Office Address
                      </span>
                      <p className="font-medium text-slate-800 leading-snug">
                        {siteConfig.address.full}
                      </p>
                    </div>
                  </div>

                  {/* Contact Person */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-600">
                      <User className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">
                        Proprietor & Manager
                      </span>
                      <p className="font-bold text-slate-900">
                        {siteConfig.contactPerson}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-600">
                      <Phone className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">
                        Direct Phone / Call
                      </span>
                      <a
                        href={siteConfig.phoneTel}
                        className="font-bold text-navy hover:text-gold transition-colors text-base"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
                  <Button
                    variant="primary"
                    size="sm"
                    href={siteConfig.phoneTel}
                    leftIcon={<Phone className="w-4 h-4" />}
                    className="w-full font-bold shadow-md shadow-gold/20"
                  >
                    Tap to Call
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    href={siteConfig.whatsAppUrl || "https://wa.me/918980179677"}
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<WhatsAppIcon className="w-4 h-4 text-emerald-600" />}
                    className="w-full border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-bold"
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Full "Why Choose Us" Deep Navy Section */}
      <WhyChooseUs id="about-why-us" className="py-20 sm:py-24" />

      {/* CTA Banner */}
      <CtaBanner />
    </main>
  );
}
