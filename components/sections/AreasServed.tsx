import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import { locations } from "@/lib/seo-data";
import { Container } from "@/components/ui/Container";

export function AreasServed() {
  return (
    <section id="areas" className="py-20 bg-white border-t border-slate-200/80">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Local Doorstep Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight">
            Taxi Service Across Ahmedabad &amp; Gujarat
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Headquartered in Nava Naroda, we dispatch clean cabs within 15–20 minutes to all major residential, commercial, and industrial hubs across Ahmedabad and Gandhinagar.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-gold hover:bg-gold/5 transition-all flex flex-col justify-between group"
            >
              <div>
                <MapPin className="w-5 h-5 text-gold-dark mb-2.5 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif font-bold text-navy-deep text-base group-hover:text-gold-dark transition-colors">
                  {loc.location}
                </h3>
                <span className="text-xs text-slate-500 mt-1 block">
                  Cab &amp; Taxi Service
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-gold-dark">
                <span>View Rates</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

