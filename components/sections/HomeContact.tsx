"use client";

import React from "react";
import { Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function HomeContact() {
  return (
    <section id="contact-inquiry" className="py-12 sm:py-16 md:py-20 bg-slate-50 border-t border-slate-200/80">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight">
            Send an Inquiry
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Planning a trip, outstation tour, or wedding convoy? Fill out the inquiry form below or call our 24/7 desk directly.
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full mx-auto mt-3 sm:mt-4" />
        </div>

        {/* Main Grid: Contact Form + Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Quick Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-md">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
                24/7 Support Desk
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy-deep mb-4">
                Call or Visit Us
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 text-gold-dark shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-slate-400 block">
                      Direct Call
                    </span>
                    <a
                      href={siteConfig.phoneTel}
                      className="font-bold text-navy-deep hover:text-gold-dark transition-colors text-base"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-600 shadow-sm">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-slate-400 block">
                      WhatsApp Inquiry
                    </span>
                    <a
                      href={siteConfig.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:text-emerald-800 transition-colors text-sm"
                    >
                      Chat on WhatsApp (+91 89801 79677)
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 text-gold-dark shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-slate-400 block">
                      Office Location
                    </span>
                    <p className="font-medium text-slate-800 leading-snug">
                      {siteConfig.address.full}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 text-gold-dark shadow-sm">
                    <Clock className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-slate-400 block">
                      Working Hours
                    </span>
                    <p className="font-bold text-emerald-700">
                      Open 24 Hours / 7 Days a Week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

