import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MapPin, Clock, Calendar, Compass, ShieldCheck, CheckCircle2, Car as CarIcon } from "lucide-react";
import { routes, services } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/constants";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export async function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = routes.find((r) => r.slug === slug);
  if (!route) return {};

  return {
    title: route.metaTitle,
    description: route.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/routes/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${SITE_URL}/routes/${slug}`,
      title: route.metaTitle,
      description: route.metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${route.h1} - Brahmani Travels Ahmedabad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: route.metaTitle,
      description: route.metaDescription,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = routes.find((r) => r.slug === slug);
  if (!route) notFound();

  // Service Schema for this specific route
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: route.h1,
    serviceType: `Outstation Taxi from Ahmedabad to ${route.to}`,
    description: route.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: SITE_URL,
      telephone: siteConfig.phone,
    },
    areaServed: [
      { "@type": "City", name: "Ahmedabad" },
      { "@type": "City", name: route.to },
    ],
    url: `${SITE_URL}/routes/${slug}`,
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: route.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-28 pb-14">
      {/* Schema Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Routes", href: "/#routes" },
              { label: `Ahmedabad to ${route.to}` },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-bold uppercase tracking-wider mt-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Outstation Route Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight mt-3">
            {route.h1}
          </h1>

          <p className="mt-4 max-w-3xl text-slate-600 text-base sm:text-lg leading-relaxed">
            {route.metaDescription}
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3">
              <MapPin className="w-7 h-7 text-rose-500 shrink-0" />
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Distance</span>
                <span className="text-base sm:text-lg font-bold text-navy-deep">{route.distance}</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3">
              <Clock className="w-7 h-7 text-gold-dark shrink-0" />
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Travel Time</span>
                <span className="text-base sm:text-lg font-bold text-navy-deep">{route.duration}</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3">
              <Calendar className="w-7 h-7 text-emerald-600 shrink-0" />
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Best Season</span>
                <span className="text-xs sm:text-sm font-bold text-navy-deep">{route.bestTime}</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3">
              <CarIcon className="w-7 h-7 text-blue-600 shrink-0" />
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Fares From</span>
                <span className="text-base sm:text-lg font-bold text-navy-deep">{route.fares[0]?.price}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Button
              variant="primary"
              size="lg"
              href={siteConfig.phoneTel}
              leftIcon={<Phone className="w-5 h-5" />}
              className="shadow-lg shadow-gold/25 font-bold"
            >
              Call {siteConfig.phone}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={`${siteConfig.whatsAppUrl}?text=Hello%20Brahmani%20Travels,%20I%20want%20to%20book%20a%20taxi%20from%20Ahmedabad%20to%20${encodeURIComponent(route.to)}`}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<WhatsAppIcon className="w-5 h-5 text-emerald-600" />}
              className="border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-bold"
            >
              WhatsApp Us
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/booking"
              className="font-bold"
            >
              Book Online
            </Button>
          </div>
        </Container>
      </section>

      {/* Main Content & Fare Table */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-10">
              {/* Fare Table Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">
                  Transparent Fare Estimates
                </span>
                <h2 className="font-serif text-2xl font-bold text-navy-deep mb-4">
                  Ahmedabad to {route.to} Taxi Fare Table
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Estimated one-way and round-trip fares based on vehicle class. Tolls and state border taxes are charged transparently on actuals.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-700 font-bold text-xs uppercase tracking-wider">
                        <th className="py-3 px-4">Vehicle Model</th>
                        <th className="py-3 px-4">Seating</th>
                        <th className="py-3 px-4 text-right">Est. Base Fare</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {route.fares.map((f, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-3.5 px-4 font-semibold text-navy-deep">
                            {f.vehicle}
                          </td>
                          <td className="py-3.5 px-4 text-slate-600">
                            {f.vehicle.includes("4-Seater") ? "4 Guests" : f.vehicle.includes("6-Seater") ? "6 Guests" : f.vehicle.includes("14-Seater") ? "14 Guests" : "7 Guests"}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-navy-deep text-right text-base text-gold-dark">
                            {f.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-[11px] text-slate-400 mt-4">
                  * Note: Indicative base fares. Final rate may vary slightly based on exact pickup/drop location within city limits and total distance traveled.
                </p>
              </div>

              {/* Places to See in Destination */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">
                  Sightseeing Highlights
                </span>
                <h2 className="font-serif text-2xl font-bold text-navy-deep mb-4">
                  Top Attractions to Visit in {route.to}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {route.placesToSee.map((place, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-3 text-sm font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{place}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Route Editorial Article */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm">
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
                  {route.body.split("\n\n").map((para, idx) => {
                    if (para.startsWith("### ")) {
                      return (
                        <h2 key={idx} className="font-serif text-2xl font-bold text-navy-deep pt-4">
                          {para.replace("### ", "")}
                        </h2>
                      );
                    }
                    return (
                      <p key={idx} className="whitespace-pre-line">
                        {para}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Sticky Card & Other Routes */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm sticky top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">
                  Direct Highway Booking
                </span>
                <h3 className="font-serif text-xl font-bold text-navy-deep mb-4">
                  Book Ahmedabad to {route.to} Cab
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Doorstep pickup, verified chauffeur, and clean sanitized AC car. Available 24/7.
                </p>

                <div className="space-y-3">
                  <a
                    href={siteConfig.phoneTel}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy text-white font-bold text-sm shadow hover:bg-navy-deep transition-all"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                    <span>Call {siteConfig.phone}</span>
                  </a>
                  <a
                    href={`${siteConfig.whatsAppUrl}?text=Need%20cab%20Ahmedabad%20to%20${encodeURIComponent(route.to)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow hover:bg-[#20bd5a] transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp Direct Booking</span>
                  </a>
                  <Link
                    href="/booking"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 text-navy font-semibold text-sm hover:bg-slate-50 transition-all"
                  >
                    <span>Online Booking Form</span>
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Other Popular Routes
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {routes
                      .filter((r) => r.slug !== slug)
                      .slice(0, 6)
                      .map((r) => (
                        <li key={r.slug}>
                          <Link
                            href={`/routes/${r.slug}`}
                            className="text-navy hover:text-gold-dark font-medium transition-colors flex items-center justify-between"
                          >
                            <span>Ahmedabad to {r.to}</span>
                            <span className="text-xs text-slate-400 font-normal">{r.distance}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-deep text-center mb-8">
              Frequently Asked Questions About Ahmedabad to {route.to} Taxi
            </h2>
            <div className="space-y-4">
              {route.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 open:bg-white open:shadow-sm transition-all"
                >
                  <summary className="font-serif font-bold text-navy-deep cursor-pointer text-base sm:text-lg flex justify-between items-center list-none">
                    <span>{faq.q}</span>
                    <span className="text-gold-dark transition-transform group-open:rotate-180 ml-4">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

