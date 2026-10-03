import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://brahmanitravels.com"),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "cab in Ahmedabad",
    "taxi in Ahmedabad",
    "car rental in Ahmedabad",
    "tempo traveller in Ahmedabad",
    "Nava Naroda car rental",
    "taxi service Nava Naroda",
    "cab hire Nava Naroda",
    "Brahmani Travels",
    "Swift Dzire rental Ahmedabad",
    "Innova Crysta rental Ahmedabad",
    "outstation taxi Ahmedabad",
    "wedding car rental Ahmedabad",
    "Ahmedabad to Udaipur cab",
    "Ahmedabad to Somnath Dwarka tour",
    "Rajesh Prajapati Brahmani Travels",
  ],
  authors: [{ name: siteConfig.contactPerson }],
  creator: siteConfig.name,
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
    shortcut: ["/logo.png"],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://brahmanitravels.com",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: `${siteConfig.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-soft-bg text-navy-deep font-sans antialiased selection:bg-gold selection:text-navy-deep overflow-x-hidden">
        {/* Structured Data for SEO */}
        <JsonLd />

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
