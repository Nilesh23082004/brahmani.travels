import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FleetSection } from "@/components/sections/FleetSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { HomeContact } from "@/components/sections/HomeContact";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SITE_URL } from "@/lib/constants";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Brahmani Travels | Best Cab, Taxi & Car Rental in Ahmedabad – From ₹11/km",
  description:
    "Best cab, taxi & car rental in Ahmedabad from ₹11/km. Swift Dzire to Innova Crysta, Force Urbania, Tempo Travellers & buses. Airport taxi, outstation trips, 24/7 service – Brahmani Travels, Nava Naroda.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Brahmani Travels | Best Cab, Taxi & Car Rental in Ahmedabad – From ₹11/km",
    description:
      "Best cab, taxi & car rental in Ahmedabad from ₹11/km. Swift Dzire to Innova Crysta, Force Urbania, Tempo Travellers & buses. Airport taxi, outstation trips, 24/7 service.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Brahmani Travels – Best Cab & Car Rental in Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brahmani Travels | Best Cab, Taxi & Car Rental in Ahmedabad – From ₹11/km",
    description:
      "Best cab, taxi & car rental in Ahmedabad from ₹11/km. Swift Dzire to Innova Crysta, Force Urbania, Tempo Travellers & buses. 24/7 service.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Fleet Section ("Choose Your Car") */}
      <FleetSection />

      {/* Why Choose Us (Deep Navy, Brand Story + 6 Feature Cards) */}
      <WhyChooseUs />

      {/* About Brahmani Travels (Original 26-Year Brand Story) */}
      <HomeAbout />

      {/* How It Works (Light Background, 4-Step Process) */}
      <HowItWorks />

      {/* Send an Inquiry / Contact Section */}
      <HomeContact />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* CTA Banner (Navy Gradient + Gold Swoosh) */}
      <CtaBanner />
    </main>
  );
}
