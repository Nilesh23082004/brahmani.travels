import React from "react";
import { siteConfig } from "@/data/site";
import { fleet } from "@/data/fleet";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://brahmanitravels.com/#organization",
    name: siteConfig.name,
    legalName: "Brahmani Travels",
    url: "https://brahmanitravels.com",
    logo: "https://brahmanitravels.com/logo.png",
    image: "https://brahmanitravels.com/logo.png",
    description:
      "Premier car rental and taxi booking service in Ahmedabad and Nava Naroda, Gujarat. Swift Dzire, Innova Crysta, and 11-20 seater Tempo Travellers with verified AC and professional chauffeurs.",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "B-105 Nand Vatika, Near Mevada Green Party Plot, Nava Naroda",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382330",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.0763",
      longitude: "72.6749",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Ahmedabad" },
      { "@type": "AdministrativeArea", name: "Gujarat" },
      { "@type": "Country", name: "India" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Brahmani Travels Fleet Rentals",
      itemListElement: fleet.map((car, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        name: `${car.name} Rental in Ahmedabad`,
        description: `${car.seats}-seater ${car.type} available at ₹${car.ratePerKm}/Km`,
        price: car.ratePerKm,
        priceCurrency: "INR",
        unitCode: "KMT",
      })),
    },
    sameAs: [
      "https://maps.google.com/?q=Nand+Vatika+Nava+Naroda+Ahmedabad+Gujarat+382330",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
