import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  Sparkles,
  MapPin,
  Phone,
  User,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description:
    "Get in touch with Brahmani Travels in Nava Naroda, Ahmedabad. 24/7 taxi booking, outstation tour planning, and tempo traveller rental enquiries.",
};

export default function ContactPage() {
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=B-105+Nand+Vatika,+Near+Mevada+Green+Party+Plot,+Nava+Naroda,+Ahmedabad,+Gujarat+382330&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-28 pb-16">
      {/* Hero Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 py-16 text-slate-900 text-center border-b border-slate-200/80">
        <Container className="relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-4 font-semibold"
          >
            <Link href="/" className="hover:text-gold-dark transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-gold-dark">Contact</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>24/7 Ahmedabad Desk</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight">
            Contact Brahmani Travels
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions about fares, custom tour packages, or bus bookings? Call us directly or send an online enquiry.
          </p>
        </Container>
      </section>

      {/* Main Content: Form + Office Details */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Office Location & Map (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Quick Contact Info */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
                  Head Office
                </span>
                <h2 className="font-serif text-2xl font-bold text-navy-deep mb-4">
                  Visit or Call Us
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-600">
                      <MapPin className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">
                        Office Address
                      </span>
                      <p className="font-medium text-slate-800 leading-snug">
                        {siteConfig.address.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-600">
                      <User className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">
                        Contact Person
                      </span>
                      <p className="font-bold text-slate-900">
                        {siteConfig.contactPerson}
                      </p>
                    </div>
                  </div>

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

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-600">
                      <Clock className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">
                        Operating Hours
                      </span>
                      <p className="font-semibold text-emerald-700">
                        24 Hours / 7 Days a Week
                      </p>
                    </div>
                  </div>
                </div>

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

              {/* Map Card */}
              <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md">
                <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span>Nava Naroda Map Location</span>
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
                <div className="relative w-full aspect-[16/10] bg-slate-100">
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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
