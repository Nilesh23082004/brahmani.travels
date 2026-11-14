import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Online Cab Booking in Ahmedabad | Instant WhatsApp Confirmation",
  description:
    "Book your cab or taxi in Ahmedabad online with Brahmani Travels. Instant confirmation via WhatsApp, transparent per-km rates from ₹11/km, 24/7 service.",
  alternates: {
    canonical: `${SITE_URL}/booking`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/booking`,
    title: "Online Cab Booking in Ahmedabad | Brahmani Travels",
    description:
      "Book your cab or taxi in Ahmedabad online with Brahmani Travels. Instant confirmation via WhatsApp, rates from ₹11/km.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Online Cab Booking in Ahmedabad - Brahmani Travels",
      },
    ],
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

