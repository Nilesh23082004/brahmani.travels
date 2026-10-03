export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: "Crown" | "Clock" | "ShieldCheck" | "Handshake" | "Users" | "BadgeIndianRupee";
}

export const whyUsItems: WhyUsItem[] = [
  {
    id: "luxury-rates",
    title: "Luxury Experience at Taxi Rates",
    description: "Feel like a VIP without paying extra. Premium rides, affordable prices.",
    iconName: "Crown",
  },
  {
    id: "on-time",
    title: "Every Ride. On Time. Every Time.",
    description: "Punctuality is our promise. We reach before the clock does.",
    iconName: "Clock",
  },
  {
    id: "sanitized-cars",
    title: "Sanitized Cars. Every Single Day.",
    description: "Your safety is our responsibility. Clean, fresh, and hygiene-checked vehicles.",
    iconName: "ShieldCheck",
  },
  {
    id: "direct-booking",
    title: "Direct Booking, No Middlemen",
    description: "Talk to us, book with us. No agents, no hidden charges — just honest service.",
    iconName: "Handshake",
  },
  {
    id: "trusted-by-all",
    title: "Trusted by Families, Corporates & Travellers Alike",
    description: "From daily rides to special tours — everyone chooses Brahmani Travels with confidence.",
    iconName: "Users",
  },
  {
    id: "transparent-pricing",
    title: "Transparent Pricing, No Surprises",
    description: "What you see is what you pay — honest fares with zero hidden costs.",
    iconName: "BadgeIndianRupee",
  },
];

export const whyUsParagraph: string =
  "At Brahmani Travels, we don't just arrange journeys—we make travelling easy, comfortable, and worry-free. We understand that every traveller looks for a service they can trust, which is why we focus on providing a reliable, convenient, and customer-first travel experience from start to finish. Whether you're planning a family vacation, a business trip, a pilgrimage, or a memorable getaway, we are committed to making every part of your journey smooth and hassle-free. With personalized service, dependable travel solutions, transparent communication, and dedicated customer support, we ensure you can travel with confidence and peace of mind. Your time, comfort, and satisfaction matter to us, and we always strive to go the extra mile to make your journey truly worthwhile. Ready to travel? Book your journey with Brahmani Travels today and let us take care of the road ahead. Your Journey, Our Responsibility.";
