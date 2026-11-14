import React from "react";
import Link from "next/link";
import { Compass, Clock, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { routes } from "@/lib/seo-data";
import { Container } from "@/components/ui/Container";

export function PopularRoutes() {
  return (
    <section id="routes" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Outstation Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight">
            Popular Outstation Taxi Routes from Ahmedabad
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Planning a weekend road trip, business travel, or temple yatra? Check our transparent per-km rates, travel duration, and fare estimates for top highway destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.slice(0, 12).map((route) => (
            <div
              key={route.slug}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md hover:border-gold/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{route.distance}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-dark" />
                    <span>{route.duration}</span>
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-navy-deep mb-2 group-hover:text-gold-dark transition-colors">
                  <Link href={`/routes/${route.slug}`}>
                    Ahmedabad to {route.to}
                  </Link>
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                  {route.placesToSee.slice(0, 3).join(" · ")}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">From</span>
                  <span className="font-bold text-navy-deep text-sm text-gold-dark">
                    {route.fares[0]?.price}
                  </span>
                </div>
                <Link
                  href={`/routes/${route.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-navy-deep group-hover:text-gold-dark transition-colors"
                >
                  <span>Fare Chart</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services/outstation-taxi-ahmedabad"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-navy hover:bg-navy-deep text-white font-bold text-sm shadow transition-all"
          >
            <span>View All 24+ Outstation Routes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

