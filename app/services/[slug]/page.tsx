import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle2, ShieldCheck, Clock, MapPin } from "lucide-react";
import { services } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/constants";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${SITE_URL}/services/${slug}`,
      title: service.metaTitle,
      description: service.metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${service.title} - Brahmani Travels Ahmedabad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    serviceType: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: SITE_URL,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.line,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.pincode,
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Ahmedabad",
    },
    url: `${SITE_URL}/services/${slug}`,
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/#services" },
              { label: service.title },
            ]}
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight mt-4">
            {service.h1}
          </h1>
          <p className="mt-4 max-w-3xl text-slate-600 text-base sm:text-lg leading-relaxed">
            {service.intro}
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
              href={`${siteConfig.whatsAppUrl}?text=Hello%20Brahmani%20Travels,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
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

      {/* Main Content Body */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column (8 cols): Article content */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
                {service.body.split("\n\n").map((para, idx) => {
                  if (para.startsWith("### ") || para.startsWith("Why Choose ") || para.startsWith("Our Chauffeur-Driven ") || para.startsWith("Popular Outstation ") || para.startsWith("Our Airport Transfer ") || para.startsWith("Our Tempo Traveller ") || para.startsWith("Our Bus & Coach ") || para.startsWith("Our Wedding Car ") || para.startsWith("Corporate Mobility ") || para.startsWith("Top One-Way ") || para.startsWith("Our Signature Gujarat ")) {
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

              {/* Trust Strip Inside Card */}
              <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-gold-dark shrink-0" />
                  <div>
                    <p className="font-bold text-navy-deep text-sm">24/7 Available</p>
                    <p className="text-xs text-slate-500">Day & night service</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-bold text-navy-deep text-sm">Sanitized AC</p>
                    <p className="text-xs text-slate-500">Cleaned before every trip</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-blue-600 shrink-0" />
                  <div>
                    <p className="font-bold text-navy-deep text-sm">Doorstep Pickup</p>
                    <p className="text-xs text-slate-500">Anywhere in Ahmedabad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Quick Booking Box & Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm sticky top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">
                  Instant Booking Desk
                </span>
                <h3 className="font-serif text-xl font-bold text-navy-deep mb-4">
                  Need a Ride Now?
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Call or WhatsApp our 24/7 dispatch office directly for guaranteed car confirmation with zero surge pricing.
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
                    href={siteConfig.whatsAppUrl}
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
                    Other Popular Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {services
                      .filter((s) => s.slug !== slug)
                      .slice(0, 5)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="text-navy hover:text-gold-dark font-medium transition-colors flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                            <span>{s.title}</span>
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

      {/* FAQs Section */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block text-center mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-deep text-center mb-8">
              Frequently Asked Questions About {service.title}
            </h2>

            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
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

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-navy-deep text-white mt-12">
        <Container className="text-center">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-3">
            Book Your {service.title} in Ahmedabad Today
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Honest rates starting from ₹11/km. Punctual verified chauffeurs and clean sanitized cars ready 24/7.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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
              href={siteConfig.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<WhatsAppIcon className="w-5 h-5 text-emerald-400" />}
              className="border-white text-white hover:bg-white hover:text-navy-deep font-bold"
            >
              WhatsApp Us
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

