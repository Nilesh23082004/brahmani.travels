import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { services, routes, locations } from "@/lib/seo-data";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

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

      {/* Main Footer Content */}
      <Container size="default" className="relative z-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & NAP Block (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center group"
              aria-label={`${siteConfig.name} Home`}
            >
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

            {/* Semantic NAP Block for Crawlers & Local SEO */}
            <address
              itemScope
              itemType="https://schema.org/LocalBusiness"
              className="not-italic space-y-2.5 text-xs text-slate-600 pt-2 border-t border-slate-200/80"
            >
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">{siteConfig.address.line}</span>,{" "}
                  <span itemProp="addressLocality">{siteConfig.address.city}</span>,{" "}
                  <span itemProp="addressRegion">{siteConfig.address.state}</span> –{" "}
                  <span itemProp="postalCode">{siteConfig.address.pincode}</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-dark shrink-0" />
                <span>
                  Phone:{" "}
                  <a
                    href={siteConfig.phoneTel}
                    itemProp="telephone"
                    className="font-bold text-navy-deep hover:text-gold-dark transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Open 24 Hours / 7 Days a Week</span>
              </div>
            </address>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-navy hover:bg-navy-deep text-white text-xs font-bold transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Now</span>
              </a>
              <a
                href={siteConfig.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-base font-bold tracking-wide text-navy-deep flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span>Quick Links</span>
            </h3>

            <ul className="space-y-2 text-xs">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-slate-600 hover:text-gold-dark font-medium transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-gold transition-transform group-hover:translate-x-0.5" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-1.5 text-slate-600 hover:text-gold-dark font-medium transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-gold transition-transform group-hover:translate-x-0.5" />
                  <span>Travel Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="group inline-flex items-center gap-1.5 text-slate-600 hover:text-gold-dark font-medium transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-gold transition-transform group-hover:translate-x-0.5" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="group inline-flex items-center gap-1.5 text-slate-600 hover:text-gold-dark font-medium transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-gold transition-transform group-hover:translate-x-0.5" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-base font-bold tracking-wide text-navy-deep flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span>Our Services</span>
            </h3>

            <ul className="space-y-2 text-xs">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-1.5 text-slate-600 hover:text-gold-dark font-medium transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-gold transition-transform group-hover:translate-x-0.5" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Popular Routes & Google Maps Embed (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-base font-bold tracking-wide text-navy-deep flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span>Popular Taxi Routes</span>
            </h3>

            <ul className="space-y-1.5 text-xs">
              {routes.slice(0, 7).map((route) => (
                <li key={route.slug}>
                  <Link
                    href={`/routes/${route.slug}`}
                    className="group inline-flex items-center gap-1.5 text-slate-600 hover:text-gold-dark font-medium transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-gold transition-transform group-hover:translate-x-0.5" />
                    <span>Ahmedabad to {route.to} Cab</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Embedded Google Map (lazy loaded) */}
            <div className="pt-2">
              <div className="w-full h-32 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative bg-slate-100">
                <iframe
                  title="Brahmani Travels Nava Naroda Location"
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
              <div className="mt-1 flex justify-end">
                <a
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-dark hover:text-gold transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Areas We Serve Keyword Pill Cluster for Strong Local SEO */}
        <div className="mt-12 pt-8 border-t border-slate-200/80">
          <h4 className="font-serif text-sm font-bold text-navy-deep mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-dark" />
            <span>Local Areas Served in Ahmedabad & Gujarat:</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600 hover:text-gold-dark hover:border-gold transition-all"
              >
                {loc.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
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
