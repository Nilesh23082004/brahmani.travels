import React from "react";
import Link from "next/link";
import {
  Car,
  Plane,
  Compass,
  Bus,
  HeartHandshake,
  Building2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { services } from "@/lib/seo-data";
import { Container } from "@/components/ui/Container";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "cab-service-ahmedabad": <Car className="w-6 h-6 text-gold-dark" />,
  "car-rental-ahmedabad": <ShieldCheck className="w-6 h-6 text-navy" />,
  "outstation-taxi-ahmedabad": <Compass className="w-6 h-6 text-emerald-600" />,
  "airport-taxi-ahmedabad": <Plane className="w-6 h-6 text-blue-600" />,
  "tempo-traveller-on-rent-ahmedabad": <Bus className="w-6 h-6 text-purple-600" />,
  "bus-on-rent-ahmedabad": <Bus className="w-6 h-6 text-amber-600" />,
  "wedding-car-rental-ahmedabad": <HeartHandshake className="w-6 h-6 text-rose-500" />,
  "corporate-car-rental-ahmedabad": <Building2 className="w-6 h-6 text-cyan-600" />,
  "one-way-taxi-ahmedabad": <ArrowRight className="w-6 h-6 text-teal-600" />,
  "pilgrimage-tour-packages-gujarat": <Sparkles className="w-6 h-6 text-gold-dark" />,
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Comprehensive Mobility Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight">
            Our Cab &amp; Taxi Services in Ahmedabad
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            From daily city rides to luxury wedding convoys and 20-seater Tempo Travellers, Brahmani Travels provides dependable, sanitized transport across Ahmedabad and India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md hover:border-gold/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {SERVICE_ICONS[service.slug] || <Car className="w-6 h-6 text-gold-dark" />}
                </div>

                <h3 className="font-serif text-xl font-bold text-navy-deep mb-2.5 group-hover:text-gold-dark transition-colors">
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {service.metaDescription}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  Starts @ ₹11/km
                </span>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-deep group-hover:text-gold-dark transition-colors"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

