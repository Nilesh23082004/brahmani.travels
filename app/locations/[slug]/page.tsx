import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MapPin, CheckCircle2, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { locations, services, routes } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/constants";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/locations/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${SITE_URL}/locations/${slug}`,
      title: location.metaTitle,
      description: location.metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${location.title} - Brahmani Travels`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  // LocalBusiness Schema tailored to this locality
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    name: `${siteConfig.name} - ${location.location}`,
    description: location.metaDescription,
    url: `${SITE_URL}/locations/${slug}`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line,
      addressLocality: location.location,
      addressRegion: "Gujarat",
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.0763,
      longitude: 72.6749,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "₹₹",
    areaServed: {
      "@type": "City",
      name: location.location,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((f) => ({
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
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Areas We Serve", href: "/#areas" },
              { label: location.location },
            ]}
          />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-bold uppercase tracking-wider mt-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>24/7 Doorstep Service in {location.location}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight mt-3">
            {location.h1}
          </h1>
          <p className="mt-4 max-w-3xl text-slate-600 text-base sm:text-lg leading-relaxed">
            Need a reliable taxi in {location.location}? Brahmani Travels offers 24/7 doorstep cab pickup with verified drivers, sanitized AC cars, and transparent rates starting at just ₹11/km.
          </p>

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
              href={`${siteConfig.whatsAppUrl}?text=Hello%20Brahmani%20Travels,%20I%20need%20a%20cab%20in%20${encodeURIComponent(location.location)}`}
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

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 8 Cols: Location Details */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
                {location.body.split("\n\n").map((para, idx) => (
                  <p key={idx} className="whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>

              {/* Service Highlights */}
              <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-gold/10 text-gold-dark mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-deep text-sm">Fast 15-Min Dispatch</h3>
                    <p className="text-xs text-slate-500 mt-1">Cabs on standby near {location.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-deep text-sm">Verified Chauffeurs</h3>
                    <p className="text-xs text-slate-500 mt-1">Police verified & polite drivers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-deep text-sm">Zero Surge Pricing</h3>
                    <p className="text-xs text-slate-500 mt-1">Fixed, honest per-km rates</p>
                  </div>
                </div>
              </div>

              {/* Popular Routes Departing from this location */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <h3 className="font-serif text-xl font-bold text-navy-deep mb-4">
                  Popular Outstation Routes from {location.location}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {routes.slice(0, 6).map((route) => (
                    <Link
                      key={route.slug}
                      href={`/routes/${route.slug}`}
                      className="p-3.5 rounded-xl border border-slate-200/80 hover:border-gold hover:bg-gold/5 transition-all flex items-center justify-between text-sm group"
                    >
                      <span className="font-semibold text-navy-deep group-hover:text-gold-dark">
                        Ahmedabad to {route.to} Taxi
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-dark group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Sticky Booking Card & Locality Directory */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm sticky top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">
                  Doorstep Pickup in {location.location}
                </span>
                <h3 className="font-serif text-xl font-bold text-navy-deep mb-4">
                  Book a Cab Now
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Fastest cab dispatch in {location.location}. Available 24 hours for city rides, airport drops, and outstation trips.
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
                    href={`${siteConfig.whatsAppUrl}?text=Need%20taxi%20in%20${encodeURIComponent(location.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow hover:bg-[#20bd5a] transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp Booking</span>
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
                    Other Ahmedabad Areas We Serve
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {locations
                      .filter((l) => l.slug !== slug)
                      .map((l) => (
                        <Link
                          key={l.slug}
                          href={`/locations/${l.slug}`}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-gold/10 hover:text-gold-dark text-xs text-slate-700 font-medium transition-colors"
                        >
                          {l.location}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-deep text-center mb-8">
              Frequently Asked Questions About Taxi Service in {location.location}
            </h2>
            <div className="space-y-4">
              {location.faqs.map((faq, i) => (
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

