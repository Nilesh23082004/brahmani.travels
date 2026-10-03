import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  ExternalLink,
  MessageCircle,
  Star,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 text-slate-600 border-t border-slate-200/80 overflow-hidden">
      {/* Top Gold Gradient Hairline */}
      <div
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9962E] via-50% to-transparent opacity-60"
        aria-hidden="true"
      />

      {/* Subtle Ambient Background */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-slate-200/50 blur-3xl"
        aria-hidden="true"
      />

      {/* Main Footer Content */}
      <Container size="default" className="relative z-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center group" aria-label={`${siteConfig.name} Home`}>
              <div className="relative h-12 w-48 sm:w-52">
                <Image
                  src="/logo.png"
                  alt={`${siteConfig.name} - Ahmedabad, Gujarat`}
                  fill
                  unoptimized
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 192px, 208px"
                />
              </div>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              {siteConfig.footerTagline}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5 md:pl-6">
            <h3 className="font-serif text-lg font-bold tracking-wide text-navy-deep flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span>Quick Links</span>
            </h3>

            <ul className="space-y-3 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-slate-600 hover:text-gold-dark font-medium transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold-dark transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us & Live Google Map */}
          <div className="space-y-5">
            <h3 className="font-serif text-lg font-bold tracking-wide text-navy-deep flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span>Contact Us</span>
            </h3>

            <div className="space-y-4 text-sm text-slate-600">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5 text-gold-dark shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <a
                    href={siteConfig.phoneTel}
                    className="font-bold text-navy-deep hover:text-gold-dark transition-colors text-base block"
                  >
                    {siteConfig.phone}
                  </a>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Contact: {siteConfig.contactPerson}
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5 text-gold-dark shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 block font-medium">
                    Main Office
                  </span>
                  <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                    {siteConfig.address.full}
                  </p>
                </div>
              </div>

              {/* Interactive Google Map on UI */}
              <div className="pt-1">
                <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative bg-slate-100">
                  <iframe
                    title="Brahmani Travels Office Location"
                    src="https://maps.google.com/maps?q=B-105+Nand+Vatika,+Near+Mevada+Green+Party+Plot,+Nava+Naroda,+Ahmedabad,+Gujarat+382330&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-1.5 flex justify-end">
                  <a
                    href={siteConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gold-dark hover:text-gold transition-colors"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-serif italic text-gold-dark text-sm font-semibold">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
        </div>
      </Container>
    </footer>
  );
}
