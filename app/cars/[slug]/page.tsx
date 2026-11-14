import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, Users, CheckCircle2, ShieldCheck, Sparkles, Fuel, ArrowRight } from "lucide-react";
import { cars } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/constants";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export async function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);
  if (!car) return {};

  return {
    title: car.metaTitle,
    description: car.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/cars/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${SITE_URL}/cars/${slug}`,
      title: car.metaTitle,
      description: car.metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: `${SITE_URL}${car.image}`,
          width: 800,
          height: 500,
          alt: `${car.name} on Rent in Ahmedabad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: car.metaTitle,
      description: car.metaDescription,
      images: [`${SITE_URL}${car.image}`],
    },
  };
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);
  if (!car) notFound();

  // Vehicle / Product Schema
  const carSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${car.name} Rental in Ahmedabad`,
    image: `${SITE_URL}${car.image}`,
    description: car.metaDescription,
    brand: {
      "@type": "Brand",
      name: car.name.split(" ")[0],
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/cars/${slug}`,
      priceCurrency: "INR",
      price: car.specs.ratePerKm,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: siteConfig.name,
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: car.faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carSchema) }}
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
              { label: "Cars", href: "/cars" },
              { label: car.name },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-4">
            {/* Left 7 Cols */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Clean Fleet · ₹{car.specs.ratePerKm}/Km</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight">
                {car.h1}
              </h1>

              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                {car.metaDescription}
              </p>

              {/* Specs Pills */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2 text-sm font-semibold text-navy-deep">
                  <Users className="w-4 h-4 text-gold-dark" />
                  <span>{car.specs.seatsDisplay || `${car.specs.seats} Passenger Seats`}</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2 text-sm font-semibold text-navy-deep">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>{car.specs.type}</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2 text-sm font-semibold text-navy-deep">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Full Chilled AC</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Button
                  variant="primary"
                  size="lg"
                  href={`/booking?car=${car.slug}`}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="shadow-lg shadow-gold/25 font-bold"
                >
                  Book This Vehicle
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href={siteConfig.phoneTel}
                  leftIcon={<Phone className="w-4 h-4" />}
                  className="font-bold"
                >
                  Call {siteConfig.phone}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={`${siteConfig.whatsAppUrl}?text=Hello%20Brahmani%20Travels,%20I%20want%20to%20rent%20${encodeURIComponent(car.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<WhatsAppIcon className="w-5 h-5 text-emerald-600" />}
                  className="border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-bold"
                >
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Right 5 Cols: Car Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[16/10] bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 flex items-center justify-center">
                <Image
                  src={car.image}
                  alt={`${car.name} on Rent in Ahmedabad`}
                  fill
                  priority
                  className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-navy text-white text-xs font-bold shadow">
                  ₹{car.specs.ratePerKm}/Km
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content & Specs */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 8 Cols: Description */}
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm">
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
                  {car.body.split("\n\n").map((para, idx) => {
                    if (para.startsWith("Key Specifications") || para.startsWith("Ideal Use Cases:")) {
                      return (
                        <h2 key={idx} className="font-serif text-2xl font-bold text-navy-deep pt-4">
                          {para}
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

                <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-navy-deep text-base mb-1">
                    Ideal Best Use:
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {car.specs.idealFor}
                  </p>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Quick Booking Card & Other Cars */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm sticky top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">
                  Transparent Tariff
                </span>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-navy-deep">₹{car.specs.ratePerKm}</span>
                  <span className="text-slate-500 text-sm font-semibold">/ Kilometre</span>
                </div>

                <p className="text-xs text-slate-500 mb-6">
                  * Garage to garage calculation. Tolls, state tax, and parking paid on actuals. Driver night allowance ₹250-₹300/night applies for overnight outstation trips.
                </p>

                <div className="space-y-3">
                  <Link
                    href={`/booking?car=${car.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold hover:bg-gold-dark text-navy-deep font-bold text-sm shadow transition-all"
                  >
                    <span>Instant Booking Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={siteConfig.phoneTel}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy text-white font-bold text-sm shadow hover:bg-navy-deep transition-all"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                    <span>Call {siteConfig.phone}</span>
                  </a>
                  <a
                    href={`${siteConfig.whatsAppUrl}?text=Need%20${encodeURIComponent(car.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow hover:bg-[#20bd5a] transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp Booking</span>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Other Cars in Fleet
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {cars
                      .filter((c) => c.slug !== slug)
                      .map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/cars/${c.slug}`}
                            className="text-navy hover:text-gold-dark font-medium transition-colors flex items-center justify-between"
                          >
                            <span>{c.name}</span>
                            <span className="text-xs text-slate-400 font-bold">₹{c.specs.ratePerKm}/km</span>
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
              Frequently Asked Questions About Renting {car.name}
            </h2>
            <div className="space-y-4">
              {car.faqs.map((faq, i) => (
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

