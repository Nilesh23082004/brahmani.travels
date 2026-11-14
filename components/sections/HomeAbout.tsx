import React from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, Clock, Award, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { aboutContent } from "@/data/about";
import { siteConfig } from "@/data/site";

export function HomeAbout() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-slate-200/80">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>About Brahmani Travels</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-deep tracking-tight">
              Your Journey, Our Responsibility
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full mx-auto mt-3 sm:mt-4" />
          </div>

          {/* Clean Previous Content from data/about.ts */}
          <div className="space-y-4 sm:space-y-6">
            {/* Story Card */}
            <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-sm">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-deep mb-3">
                Serving Ahmedabad for Over 26 Years
              </h3>
              <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                {aboutContent.about}
              </p>
            </div>

            {/* Why Choose Us Short Card */}
            <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-sm">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-deep mb-3">
                Our Commitment to You
              </h3>
              <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                {aboutContent.whyChooseUsShort}
              </p>
            </div>
          </div>

          {/* Highlights Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center shadow-sm">
              <Award className="w-6 h-6 text-gold-dark mb-2" />
              <span className="font-serif font-bold text-base sm:text-lg text-navy-deep">26+ Years</span>
              <span className="text-xs text-slate-500 mt-0.5">Trusted Experience</span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center shadow-sm">
              <Clock className="w-6 h-6 text-navy mb-2" />
              <span className="font-serif font-bold text-base sm:text-lg text-navy-deep">24/7 Service</span>
              <span className="text-xs text-slate-500 mt-0.5">Always On Call</span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center shadow-sm">
              <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
              <span className="font-serif font-bold text-base sm:text-lg text-navy-deep">Sanitized Fleet</span>
              <span className="text-xs text-slate-500 mt-0.5">Clean &amp; Verified</span>
            </div>
          </div>

          {/* CTA Link */}
          <div className="text-center mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="md"
              href="/about"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold border-slate-300 text-navy-deep hover:border-gold hover:text-gold-dark"
            >
              Read More About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
