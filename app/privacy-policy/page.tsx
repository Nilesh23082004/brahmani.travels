import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SITE_URL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Brahmani Travels. Learn how we collect, use and protect your personal information when you book a cab or taxi service with us.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50 pt-28 pb-16">
      <Container size="default">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-gold-dark transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-dark">Privacy Policy</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-deep mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Last updated: November 2026
          </p>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you use the Brahmani Travels website or contact us to book a
                cab, taxi, or car rental service, we may collect the following
                information:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
                <li>Full name and contact number (mobile)</li>
                <li>Email address (optional, for booking confirmations)</li>
                <li>Pickup and drop locations</li>
                <li>Travel date and time preferences</li>
                <li>Number of passengers</li>
                <li>Any special instructions you provide</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                The information you provide is used exclusively to process your
                booking request and arrange your cab, taxi, or car rental service.
                Specifically:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
                <li>To confirm your booking and assign a driver</li>
                <li>To communicate via phone or WhatsApp about your trip</li>
                <li>To send booking confirmation details if email is provided</li>
                <li>To improve our services based on customer feedback</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                3. WhatsApp Communication
              </h2>
              <p>
                Our primary booking channel is WhatsApp ({siteConfig.phone}).
                When you submit our booking form, the details are shared via
                WhatsApp directly with our team. WhatsApp&apos;s own privacy
                policy governs messages sent through that platform. We do not
                store WhatsApp messages on our website servers.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                4. Data Sharing
              </h2>
              <p>
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes. Your data is shared only
                with the driver assigned to your booking for the purpose of
                completing your trip.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                5. Cookies & Analytics
              </h2>
              <p>
                Our website may use Google Analytics to understand traffic
                patterns and improve user experience. Google Analytics uses
                cookies to collect anonymous usage data. No personally
                identifiable information is shared with Google Analytics.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                6. Data Security
              </h2>
              <p>
                We take reasonable precautions to protect your information from
                unauthorized access, alteration, or disclosure. However, no
                internet transmission is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                7. Your Rights
              </h2>
              <p>
                You may contact us at any time to request access to, correction
                of, or deletion of your personal data that we hold. We will
                respond to such requests within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                8. Contact Us
              </h2>
              <p>
                For any privacy-related queries, please contact:
              </p>
              <div className="mt-3 p-4 bg-white rounded-xl border border-slate-200 text-sm space-y-1">
                <p className="font-bold text-navy-deep">{siteConfig.name}</p>
                <p>{siteConfig.address.full}</p>
                <p>
                  Phone:{" "}
                  <a
                    href={siteConfig.phoneTel}
                    className="text-gold-dark hover:underline font-medium"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
                <p>Email: {siteConfig.email}</p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}

