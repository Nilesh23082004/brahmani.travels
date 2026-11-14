import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/constants";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

export const metadata: Metadata = {
  title: "Travel Guides, Cab Fare Tips & Road Trip Itineraries | Blog",
  description:
    "Explore in-depth travel guides, outstation taxi fare breakdowns, road trip itineraries, and vehicle comparisons from Ahmedabad by Brahmani Travels.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/blog`,
    title: "Brahmani Travels Blog | Ahmedabad Travel & Taxi Guides",
    description:
      "Expert travel guides, highway route reviews, temple itineraries and cab fare guides from Ahmedabad.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Brahmani Travels Travel Blog",
      },
    ],
  },
};

export default function BlogIndexPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50 pt-28 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <Container>
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Travel Blog" }]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-bold uppercase tracking-wider mt-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Travel Guides & Highway Tips</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight mt-3">
            Brahmani Travels Blog & Guides
          </h1>

          <p className="mt-4 max-w-3xl text-slate-600 text-base sm:text-lg leading-relaxed">
            Planning a road trip from Ahmedabad? Read our expert guides on highway routes, airport taxi fares, wedding convoy planning, temple darshan itineraries, and vehicle comparisons.
          </p>
        </Container>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              // Extract first 160 characters for excerpt
              const cleanExcerpt = post.body
                .replace(/###\s+/g, "")
                .replace(/\n+/g, " ")
                .slice(0, 160)
                .trim() + "...";

              return (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-gold-dark" />
                      <span>{post.publishDate}</span>
                      <span>·</span>
                      <span>5 min read</span>
                    </div>

                    <h2 className="font-serif text-xl font-bold text-navy-deep group-hover:text-gold-dark transition-colors line-clamp-2 leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {cleanExcerpt}
                    </p>
                  </div>

                  <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-navy-deep group-hover:text-gold-dark inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}

