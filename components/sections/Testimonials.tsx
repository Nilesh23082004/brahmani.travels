import React from "react";
import { Star, Quote, CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface Testimonial {
  name: string;
  location: string;
  route: string;
  rating: number;
  date: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Hiren Patel",
    location: "Satellite, Ahmedabad",
    route: "Ahmedabad to Udaipur (Innova Crysta)",
    rating: 5,
    date: "October 2026",
    review:
      "Booked an Innova Crysta for a family weekend trip to Udaipur. The car was spotless, AC was chilled, and driver Ramesh bhai was extremely polite and drove very steadily through the Aravalli hills. Transparent billing without any surprise tolls. Highly recommended!",
  },
  {
    name: "Bhavik Shah",
    location: "Nava Naroda, Ahmedabad",
    route: "Ahmedabad Airport Pickup (Swift Dzire)",
    rating: 5,
    date: "October 2026",
    review:
      "Land at 2:30 AM at SVPI Airport Terminal 2. Rajesh bhai’s driver was already waiting right at the exit with my name board. Zero surge pricing compared to app cabs demanding double. Great local service in Nava Naroda!",
  },
  {
    name: "Mehul Prajapati",
    location: "Nikol, Ahmedabad",
    route: "Dwarka & Somnath 3-Day Tour (Ertiga)",
    rating: 5,
    date: "September 2026",
    review:
      "Took my elderly parents for Somnath and Dwarkadhish darshan. The Maruti Ertiga was very comfortable for long hours and the driver knew exact temple parking spots and aarti timings. My parents were completely relaxed throughout the 1,000 km trip.",
  },
  {
    name: "Anjali Dave",
    location: "Bodakdev, SG Highway",
    route: "Wedding Convoy (Innova Crysta + 2 Dzires)",
    rating: 5,
    date: "September 2026",
    review:
      "We hired Brahmani Travels for our sister’s wedding logistics between SG Highway party plot and hotels. All three cars arrived 30 minutes early, perfectly cleaned. Chauffeurs were well-dressed and very helpful with elderly relatives.",
  },
  {
    name: "Sandeep Varma",
    location: "Sanand GIDC",
    route: "Corporate Client Transit (Innova Crysta)",
    rating: 5,
    date: "August 2026",
    review:
      "Our manufacturing company regularly books executive cabs for visiting delegates from Germany and Japan. Brahmani Travels delivers 100% punctual airport pickups, polite English-speaking chauffeurs, and proper GST tax invoices.",
  },
  {
    name: "Ketan Mehta",
    location: "Bapunagar, Ahmedabad",
    route: "Statue of Unity Day Trip (17-Seater Tempo Traveller)",
    rating: 5,
    date: "August 2026",
    review:
      "Hired a 17-seater Tempo Traveller for a 15-person family day trip to Kevadia. Pushback seats were super comfortable, the music system kept kids entertained, and AC was powerful. Best rate in Ahmedabad without middlemen.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Passenger Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight">
            What Our Passengers Say
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Real feedback from families, corporate travelers, and pilgrims who trust Brahmani Travels for their daily and outstation journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-semibold">{t.date}</span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="font-serif font-bold text-navy-deep text-base">
                  {t.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.location}
                </p>
                <span className="inline-block mt-2 px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-semibold text-gold-dark">
                  {t.route}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

