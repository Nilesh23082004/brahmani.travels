import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, HeartHandshake, Sparkles, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function HomeAbout() {
  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>Ahmedabad’s Trusted Travel Partner</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight">
              About Brahmani Travels – Ahmedabad’s Premier Cab &amp; Car Rental Service
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full mx-auto mt-4" />
          </div>

          {/* 500+ Words Rich Natural Copy */}
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
            <p>
              Founded and managed by <strong>Rajesh Prajapati</strong>, <strong>Brahmani Travels</strong> has established itself as one of the most reliable and customer-recommended cab services, taxi operators, and car rental agencies in Ahmedabad, Gujarat. Operating round-the-clock from our central headquarters at <strong>B-105 Nand Vatika, Near Mevada Green Party Plot, Nava Naroda, Ahmedabad (382330)</strong>, we bridge the gap between expensive luxury chauffeurs and unpredictable ride-hailing apps by delivering immaculate, air-conditioned vehicles at genuine, affordable rates starting from just <strong>₹11 per kilometre</strong>.
            </p>

            <h3 className="font-serif text-2xl font-bold text-navy-deep pt-2">
              Why Ahmedabad Chooses Brahmani Travels
            </h3>
            <p>
              In a rapidly growing metropolis like Ahmedabad, finding an honest, punctual, and safe cab service can be challenging. Many online aggregators impose frustrating surge multipliers during peak hours, sudden flight arrivals, or monsoon rains, while independent drivers frequently cancel at the last minute. At Brahmani Travels, our operational philosophy is rooted in traditional Gujarati trust (વિશ્વાસ): <em>&ldquo;Your Journey, Our Responsibility.&rdquo;</em> When you book a cab with us, you receive a guaranteed booking confirmation, an assigned vehicle on time, and absolute price transparency with zero hidden surcharges.
            </p>

            <h3 className="font-serif text-2xl font-bold text-navy-deep pt-2">
              Our Complete Vehicle Fleet &amp; Fare Options
            </h3>
            <p>
              Whether you are searching for a compact sedan for quick city travel or a luxury convoy for an extravagant destination wedding, our diverse fleet accommodates every group size and budget:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-slate-700 pl-2">
              <li>
                <strong>Maruti Suzuki Swift Dzire (4-Seater Sedan):</strong> Starting at ₹11/km. The ultimate choice for solo executives, couples, airport drops, and small family weekend getaways.
              </li>
              <li>
                <strong>Maruti Suzuki Ertiga (6-Seater MUV):</strong> Starting at ₹13/km. Perfect for mid-sized families seeking extra legroom and generous boot capacity for outstation pilgrimages.
              </li>
              <li>
                <strong>Toyota Innova (7-Seater SUV):</strong> Starting at ₹15/km. Renowned for supreme highway durability, making long drives to Somnath, Dwarka, and Udaipur effortless.
              </li>
              <li>
                <strong>Chevrolet Tavera (9-Seater MUV):</strong> Starting at ₹16/km. Economical group mobility for extended family functions, rural village visits, and social gatherings.
              </li>
              <li>
                <strong>Toyota Innova Crysta (7-Seater Luxury):</strong> Starting at ₹18/km. Plush captain seats, whisper-quiet cabin acoustics, and executive road presence for VIPs, NRIs, and weddings.
              </li>
              <li>
                <strong>Force Tempo Travellers (11, 14, 17 &amp; 20 Seater):</strong> Starting from ₹23/km to ₹30/km. Luxury pushback seating, ice-cold twin AC blowers, and high-definition entertainment for large group tours.
              </li>
              <li>
                <strong>25 to 56 Seater Luxury Buses:</strong> Available on custom request for school excursions, corporate conferences, and wedding guest transit across Gujarat.
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-navy-deep pt-2">
              Serving All Localities Across Ahmedabad &amp; Gandhinagar
            </h3>
            <p>
              From our operational depot in Nava Naroda, our chauffeur-driven cabs cater to all corners of East and West Ahmedabad. We provide doorstep pickups in Naroda, Nikol, Bapunagar, Thakkarbapa Nagar, Maninagar, Vastral, and Odhav, as well as western commercial corridors including Satellite, Vastrapur, Bodakdev, Navrangpura, CG Road, Ashram Road, Prahlad Nagar, SG Highway, and Chandkheda. We also specialize in swift transfers to GIFT City, Infocity, and Gandhinagar Sachivalaya, as well as industrial hubs in Sanand GIDC and Changodar.
            </p>

            <h3 className="font-serif text-2xl font-bold text-navy-deep pt-2">
              સ્થાનિક સેવા અને વિશ્વસનીયતા (Local Trust in Ahmedabad)
            </h3>
            <p>
              જો તમે અમદાવાદમાં ભાડે ગાડી (ahmedabad ma taxi), એરપોર્ટ ટેક્સી સર્વિસ, અથવા બહારગામ જવા માટે ગાડી શોધી રહ્યા હોવ, તો બ્રહ્માણી ટ્રાવેલ્સ તમારા માટે શ્રેષ્ઠ અને સૌથી વિશ્વસનીય વિકલ્પ છે. અમારા અનુભવી ડ્રાઇવરો, સ્વચ્છ અને સેનિટાઈઝ્ડ એસી ગાડીઓ, અને પારદર્શક ભાડાના દર સાથે અમે દરેક પ્રવાસને સુખદ અને યાદગાર બનાવીએ છીએ.
            </p>

            <p>
              Whether you need an immediate airport drop, a full-day corporate disposal car, or a multi-day pilgrimage tour to Somnath, Dwarka, Statue of Unity, or Mount Abu, Rajesh Prajapati and the team at Brahmani Travels are at your service 24 hours a day, 7 days a week. Call or WhatsApp us at <strong>+91 89801 79677</strong> for instant bookings.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <h4 className="font-bold text-navy-deep text-base">Verified Drivers</h4>
              <p className="text-xs text-slate-500 mt-1">Background checked &amp; polite chauffeurs</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <Award className="w-8 h-8 text-gold-dark mx-auto mb-2" />
              <h4 className="font-bold text-navy-deep text-base">25+ Years Experience</h4>
              <p className="text-xs text-slate-500 mt-1">Serving 10,000+ happy passengers</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <HeartHandshake className="w-8 h-8 text-rose-500 mx-auto mb-2" />
              <h4 className="font-bold text-navy-deep text-base">Honest Pricing</h4>
              <p className="text-xs text-slate-500 mt-1">Zero hidden fees or surge pricing</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

