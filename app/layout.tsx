import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";
import { siteConfig } from "@/data/site";
import { Navbar, Footer, FloatingActions } from "@/components/layout";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { BrandedPageIntro } from "@/components/ui/BrandedPageIntro";
import { JsonLd } from "@/components/seo/JsonLd";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0A1F5C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const rawGsc =
  process.env.NEXT_PUBLIC_GSC_VERIFICATION ||
  "0lgy6At4rX-rvsZkAn9B--otELfj6Zq7rVhovvrS4Hk";
const gscMatch = rawGsc.match(/content=["']?([^"'>\s]+)["']?/i);
const gscToken = gscMatch ? gscMatch[1] : rawGsc.trim();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Brahmani Travels | Best Cab, Taxi & Car Rental in Ahmedabad – From ₹11/km",
    template: `%s | Brahmani Travels Ahmedabad`,
  },
  description: siteConfig.description,
  keywords: [
    "cab in Ahmedabad",
    "taxi in Ahmedabad",
    "car rental Ahmedabad",
    "taxi service Ahmedabad",
    "cab service Ahmedabad",
    "tempo traveller on rent Ahmedabad",
    "taxi service Nava Naroda",
    "best travels Ahmedabad",
    "outstation taxi Ahmedabad",
    "airport taxi Ahmedabad",
    "Innova Crysta on rent Ahmedabad",
    "one way taxi Ahmedabad",
    "Brahmani Travels",
  ],
  authors: [{ name: siteConfig.contactPerson }],
  creator: siteConfig.name,
  icons: {
    icon: [
      { url: "/logo-icon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/logo-icon.png"],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Brahmani Travels | Best Cab, Taxi & Car Rental in Ahmedabad",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Brahmani Travels – Best Cab & Car Rental Service in Ahmedabad, Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brahmani Travels | Best Cab, Taxi & Car Rental in Ahmedabad",
    description: siteConfig.description,
    images: [`${SITE_URL}/og-image.png`],
  },
  verification: {
    google: gscToken || undefined,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-T2S45HLJEF";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-PLTQSXCG";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-soft-bg text-navy-deep font-sans antialiased selection:bg-gold selection:text-navy-deep overflow-x-hidden">
        {/* Structured Data for SEO */}
        <JsonLd />

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                ${GTM_ID ? `gtag('config', '${GTM_ID}');` : ""}
              `}
            </Script>
          </>
        )}

        {/* Google Tag Manager */}
        {GTM_ID && (
          <>
            <Script id="gtm-container" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}

        {/* Branded First-Load Splash Intro */}
        <BrandedPageIntro />

        {/* Smooth Scroll Container with Gold Scrollbar */}
        <SmoothScrollProvider>
          {/* Global Navigation */}
          <Navbar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col w-full pb-16 sm:pb-0 overflow-x-hidden">
            {children}
          </div>

          {/* Global Footer */}
          <Footer />

          {/* Global Floating Actions (WhatsApp, Call, Scroll-to-Top) */}
          <FloatingActions />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
