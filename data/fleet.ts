import { formatRate } from "@/lib/utils";

export { formatRate };

export type FilterGroup = "All" | "Sedan" | "SUV" | "10+ Seaters" | "Bus";

export interface Car {
  slug: string;
  name: string;
  type: string;
  seats: number;
  features: string[];
  ratePerKm: number;
  image: string;
  filterGroup: "Sedan" | "SUV" | "10+ Seaters" | "Bus";
  badge?: string;
}

export const COMMON_CAR_FEATURES: string[] = [];

export const FLEET_FILTER_TABS: readonly FilterGroup[] = [
  "All",
  "Sedan",
  "SUV",
  "10+ Seaters",
  "Bus",
] as const;

export const BUS_EMPTY_STATE = {
  title: "Bus bookings available on request. Call us!",
  description:
    "We arrange 25 to 56-seater luxury AC buses and mini-coaches for weddings, pilgrimages, corporate retreats, and school excursions across Gujarat and India.",
  callToAction: "Call Now for Bus Bookings",
};

export const fleet: Car[] = [
  {
    slug: "swift-dzire",
    name: "Swift Dzire",
    type: "Sedan",
    seats: 4,
    features: [],
    ratePerKm: 11,
    image: "/images/fleet/swift-dzire.webp",
    filterGroup: "Sedan",
  },
  {
    slug: "maruti-suzuki-ertiga",
    name: "Maruti Suzuki Ertiga",
    type: "MUV",
    seats: 6,
    features: [],
    ratePerKm: 13,
    image: "/images/fleet/maruti-suzuki-ertiga.webp",
    filterGroup: "SUV",
  },
  {
    slug: "toyota-innova",
    name: "Toyota Innova",
    type: "SUV",
    seats: 7,
    features: [],
    ratePerKm: 15,
    image: "/images/fleet/toyota-innova.webp",
    filterGroup: "SUV",
  },
  {
    slug: "chevrolet-tavera",
    name: "Chevrolet Tavera",
    type: "SUV",
    seats: 9,
    features: [],
    ratePerKm: 16,
    image: "/images/fleet/chevrolet-tavera.webp",
    filterGroup: "SUV",
  },
  {
    slug: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    type: "SUV",
    seats: 7,
    features: [],
    ratePerKm: 18,
    image: "/images/fleet/toyota-innova-crysta.webp",
    filterGroup: "SUV",
  },
  {
    slug: "tempo-traveller-11",
    name: "Tempo Traveller (11 Seater)",
    type: "Tempo Traveller",
    seats: 11,
    features: [],
    ratePerKm: 23,
    image: "/images/fleet/tempo-traveller-11.webp",
    filterGroup: "10+ Seaters",
  },
  {
    slug: "tempo-traveller-14",
    name: "Tempo Traveller (14 Seater)",
    type: "Tempo Traveller",
    seats: 14,
    features: [],
    ratePerKm: 24,
    image: "/images/fleet/tempo-traveller-14.webp",
    filterGroup: "10+ Seaters",
  },
  {
    slug: "tempo-traveller-17",
    name: "Tempo Traveller (17 Seater)",
    type: "Tempo Traveller",
    seats: 17,
    features: [],
    ratePerKm: 25,
    image: "/images/fleet/tempo-traveller-17.webp",
    filterGroup: "10+ Seaters",
  },
  {
    slug: "tempo-traveller-20",
    name: "Tempo Traveller (20 Seater)",
    type: "Tempo Traveller",
    seats: 20,
    features: [],
    ratePerKm: 30,
    image: "/images/fleet/tempo-traveller-20.webp",
    filterGroup: "10+ Seaters",
  },
];
