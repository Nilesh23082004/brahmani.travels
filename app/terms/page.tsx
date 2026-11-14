import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SITE_URL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for booking cab, taxi and car rental services with Brahmani Travels, Ahmedabad.",
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50 pt-28 pb-16">
      <Container size="default">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-gold-dark transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-dark">Terms & Conditions</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-deep mb-2">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-500 mb-8">Last updated: November 2026</p>

          <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                1. Booking & Confirmation
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>All bookings are subject to vehicle availability at the time of confirmation.</li>
                <li>A booking is confirmed only after you receive a confirmation from our team via phone or WhatsApp.</li>
                <li>Submitting the online form alone does not guarantee a booking until confirmed by our team.</li>
                <li>Please provide accurate pickup location, date, time and passenger count at the time of booking.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                2. Fares & Payment
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>All fares are charged on a per-kilometre basis from the point of departure.</li>
                <li>Tolls, state taxes, parking charges and driver allowance for outstation trips are charged separately and are not included in the per-km rate.</li>
                <li>For outstation trips, a driver allowance of ₹250–₹300 per night may be applicable.</li>
                <li>Payment can be made via UPI, cash, net banking, or card on completion of the trip unless otherwise agreed.</li>
                <li>Quoted fares are indicative and may vary based on actual distance travelled.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                3. Cancellation Policy
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Cancellations made 24 hours or more before the scheduled pickup time are free of charge.</li>
                <li>Cancellations made less than 24 hours before pickup may incur a nominal cancellation fee.</li>
                <li>For multi-day tours, please discuss cancellation terms at the time of booking.</li>
                <li>No-show (passenger not available at pickup point without prior notice) may be charged a base fare.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                4. Passenger Conduct
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Passengers must behave respectfully with our drivers at all times.</li>
                <li>Smoking, consumption of alcohol, and any illegal activity inside the vehicle is strictly prohibited.</li>
                <li>Any damage caused to the vehicle by the passenger(s) will be recovered from the booking party.</li>
                <li>Children must be accompanied by an adult at all times.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                5. Luggage
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Passengers are responsible for their own luggage and valuables.</li>
                <li>Brahmani Travels is not liable for any loss or damage to personal belongings during the trip.</li>
                <li>Please inform us of large or heavy luggage at the time of booking so we can assign a suitable vehicle.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                6. Driver & Vehicle
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>All our drivers hold valid commercial driving licences and have undergone background verification.</li>
                <li>We reserve the right to substitute a vehicle of equivalent or higher capacity if the booked vehicle is unavailable due to a breakdown or emergency.</li>
                <li>Rest stops during long outstation journeys are at the driver&apos;s discretion for safety reasons.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                7. Liability
              </h2>
              <p>
                Brahmani Travels strives to provide safe, punctual and comfortable service. However, we shall not be held liable for delays or inconvenience caused by traffic, road conditions, natural events, government restrictions or any other circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-navy-deep mb-3">
                8. Contact
              </h2>
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                <p className="font-bold text-navy-deep">{siteConfig.name}</p>
                <p>{siteConfig.address.full}</p>
                <p>Phone: <a href={siteConfig.phoneTel} className="text-gold-dark hover:underline">{siteConfig.phone}</a></p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}

