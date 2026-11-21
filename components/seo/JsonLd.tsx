import React from "react";
import { siteConfig } from "@/data/site";
import { fleet } from "@/data/fleet";
import { SITE_URL } from "@/lib/constants";

export function JsonLd() {
  const areasServedList = [
    "Ahmedabad",
    "Nava Naroda",
    "Naroda",
    "Nikol",
    "Bapunagar",
    "Thakkarbapa Nagar",
    "Maninagar",
    "Satellite",
    "Vastrapur",
    "Navrangpura",
    "SG Highway",
    "Gandhinagar",
    "Sanand",
    "Chandkheda",
    "Ranip",
    "Vastral",
    "Vadodara",
    "Surat",
    "Rajkot",
    "Udaipur",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: siteConfig.name,
        legalName: "Brahmani Travels",
        founder: {
          "@type": "Person",
          name: siteConfig.contactPerson,
        },
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
          caption: siteConfig.name,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "gu", "hi"],
        },
        sameAs: siteConfig.socialLinks.map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: siteConfig.name,
        alternateName: [
          "Brahmani Travels",
          "Brahmani Travels Ahmedabad",
          "Brahmani Travels Nava Naroda",
          "Brahmani Travels Cab Service",
        ],
        description: siteConfig.description,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": ["LocalBusiness", "TaxiService", "AutoRental"],
        "@id": `${SITE_URL}/#localbusiness`,
        name: siteConfig.name,
        image: `${SITE_URL}/logo.png`,
        url: SITE_URL,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Net Banking",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.line,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.0763,
          longitude: 72.6749,
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
        areaServed: areasServedList.map((area) => ({
          "@type": "City",
          name: area,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Brahmani Travels Fleet & Cab Rental Rates",
          itemListElement: fleet.map((car, idx) => ({
            "@type": "Offer",
            position: idx + 1,
            name: `${car.name} Rental in Ahmedabad`,
            description: `${car.seats}-seater ${car.type} available with verified chauffeur at ₹${car.ratePerKm}/Km for local, airport and outstation trips.`,
            price: car.ratePerKm,
            priceCurrency: "INR",
            unitCode: "KMT",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: car.ratePerKm,
              priceCurrency: "INR",
              unitText: "per kilometer",
            },
          })),
        },
        sameAs: siteConfig.socialLinks.map((s) => s.href),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
