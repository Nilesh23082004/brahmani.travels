import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, Phone, ArrowRight, Share2, Compass, CheckCircle2 } from "lucide-react";
import { blogPosts, routes, services } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/constants";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      locale: "en_IN",
      url: `${SITE_URL}/blog/${slug}`,
      title: post.metaTitle,
      description: post.metaDescription,
      siteName: siteConfig.name,
      publishedTime: new Date("2026-11-01").toISOString(),
      authors: [siteConfig.contactPerson],
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}/og-image.png`,
    datePublished: "2026-11-01T08:00:00+05:30",
    dateModified: "2026-11-07T12:00:00+05:30",
    author: {
      "@type": "Person",
      name: siteConfig.contactPerson,
      jobTitle: "Founder & Fleet Manager",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-28 pb-16">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Header */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />

            <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold mt-4 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold-dark" />
                <span>{post.publishDate}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-gold-dark" />
                <span>By {siteConfig.contactPerson}</span>
              </span>
              <span>·</span>
              <span>8 min read</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              {post.metaDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Article Body Content */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Article Content: 8 cols */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-12 shadow-sm">
              <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed text-base sm:text-lg space-y-6">
                {post.body.split("\n\n").map((para, idx) => {
                  if (para.startsWith("### ")) {
                    return (
                      <h2
                        key={idx}
                        className="font-serif text-2xl sm:text-3xl font-bold text-navy-deep pt-6 pb-2 border-b border-slate-100"
                      >
                        {para.replace("### ", "")}
                      </h2>
                    );
                  }
                  if (para.startsWith("#### ")) {
                    return (
                      <h3
                        key={idx}
                        className="font-serif text-xl sm:text-2xl font-bold text-navy-deep pt-4"
                      >
                        {para.replace("#### ", "")}
                      </h3>
                    );
                  }
                  if (para.startsWith("- ") || para.startsWith("1. ")) {
                    return (
                      <div key={idx} className="whitespace-pre-line pl-2">
                        {para}
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="whitespace-pre-line leading-relaxed">
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Author Box */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4 bg-slate-50 p-6 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold-dark font-serif font-bold text-xl shrink-0">
                  RP
                </div>
                <div>
                  <h4 className="font-serif font-bold text-navy-deep text-base">
                    About {siteConfig.contactPerson}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Founder and Managing Director at Brahmani Travels, Ahmedabad. With over 25+ years in the passenger transit and car rental industry across Gujarat, Rajesh ensures every passenger travels safely and comfortably.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar: 4 cols */}
            <div className="lg:col-span-4 space-y-6">
              {/* Sticky Booking Desk */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm sticky top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">
                  Plan Your Trip
                </span>
                <h3 className="font-serif text-xl font-bold text-navy-deep mb-3">
                  Book a Cab for Your Next Journey
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Doorstep pickup in Ahmedabad, transparent per-km billing from ₹11/km, and 24/7 customer support.
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
                    <span>WhatsApp Us</span>
                  </a>
                  <Link
                    href="/booking"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 text-navy font-semibold text-sm hover:bg-slate-50 transition-all"
                  >
                    <span>Instant Booking Form</span>
                  </Link>
                </div>

                {/* Internal Links: Popular Routes */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Top Road Trip Routes
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {routes.slice(0, 6).map((r) => (
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
    </main>
  );
}

