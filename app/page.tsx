import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FleetSection } from "@/components/sections/FleetSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AreasServed } from "@/components/sections/AreasServed";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PopularRoutes } from "@/components/sections/PopularRoutes";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SITE_URL } from "@/lib/constants";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Brahmani Travels | Best Cab, Taxi & Car Rental in Ahmedabad – From ₹11/km",
  description:
    "Best cab, taxi & car rental in Ahmedabad from ₹11/km. Swift Dzire to Innova Crysta, Tempo Travellers & buses. Airport taxi, outstation trips, 24/7 service – Brahmani Travels, Nava Naroda.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Brahmani Travels | Best Cab, Taxi & Car Rental in Ahmedabad – From ₹11/km",
    description:
      "Best cab, taxi & car rental in Ahmedabad from ₹11/km. Swift Dzire to Innova Crysta, Tempo Travellers & buses. Airport taxi, outstation trips, 24/7 service.",
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
      "Best cab, taxi & car rental in Ahmedabad from ₹11/km. Swift Dzire to Innova Crysta, Tempo Travellers & buses. 24/7 service.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/* 1. Hero Section with Primary H1 & Direct Booking Form */}
      <Hero />

      {/* 2. Fleet Section ("Choose Your Car" - Swift Dzire, Ertiga, Innova, Crysta, Tempo Travellers) */}
      <FleetSection />

      {/* 3. Our Services Section (10 Detailed Landing Services) */}
      <ServicesGrid />

      {/* 4. Why Choose Us (Deep Navy, Brand Story + 6 Feature Cards) */}
      <WhyChooseUs />

      {/* 5. Areas We Serve (15 Local Ahmedabad & Gujarat Destinations) */}
      <AreasServed />

      {/* 6. How It Works (Light Background, 4-Step Process) */}
      <HowItWorks />

      {/* 7. Popular Outstation Taxi Routes (Udaipur, Somnath, Dwarka, Statue of Unity, etc.) */}
      <PopularRoutes />

      {/* 8. Comprehensive 500+ Word Editorial Content on Brahmani Travels */}
      <HomeAbout />

      {/* 9. Testimonials (6 Real Customer Reviews) */}
      <Testimonials />

      {/* 10. Frequently Asked Questions (10 Detailed Questions & Answers) */}
      <FaqSection />

      {/* 11. CTA Banner (Navy Gradient + Gold Swoosh) */}
      <CtaBanner />
    </main>
  );
}
