import { Hero } from "@/components/sections/Hero";
import { FleetSection } from "@/components/sections/FleetSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Fleet Section ("Choose Your Car") */}
      <FleetSection />

      {/* Why Choose Us (Deep Navy, Brand Story + 6 Feature Cards) */}
      <WhyChooseUs />

      {/* How It Works (Light Background, 4-Step Process) */}
      <HowItWorks />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* CTA Banner (Navy Gradient + Gold Swoosh) */}
      <CtaBanner />
    </main>
  );
}
