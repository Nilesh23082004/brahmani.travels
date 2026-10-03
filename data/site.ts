export interface NavLink {
  title: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  iconName: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  footerTagline: string;
  description: string;
  contactPerson: string;
  phone: string;
  phoneTel: string;
  phoneRaw: string;
  whatsAppUrl: string;
  alternatePhone?: string;
  email: string;
  address: {
    line: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    full: string;
    googleMapsUrl: string;
  };
  businessHours: BusinessHours[];
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  branding: {
    logoUrl: string;
    colors: {
      navy: string;
      navyDeep: string;
      gold: string;
      goldLight: string;
      goldDark: string;
      softBg: string;
      white: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  name: "Brahmani Travels",
  tagline: "Your Journey, Our Responsibility.",
  footerTagline:
    "Your trusted travel partner for safe and reliable journeys. Explore the world with us!",
  description:
    "Premium car rental and tour booking agency based in Ahmedabad, Gujarat. Luxury cabs, corporate rentals, outstation trips, and tailored travel experiences across India.",
  contactPerson: "Rajesh Prajapati",
  phone: "+91 89801 79677",
  phoneTel: "tel:+918980179677",
  phoneRaw: "+918980179677",
  whatsAppUrl: "https://wa.me/918980179677",
  alternatePhone: "+91 89801 79677",
  email: "contact@brahmanitravels.com",
  address: {
    line: "B-105 Nand Vatika, Near Mevada Green Party Plot, Nava Naroda",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    pincode: "382330",
    full: "B-105 Nand Vatika, Near Mevada Green Party Plot, Nava Naroda, Ahmedabad, Gujarat - 382330",
    googleMapsUrl: "https://maps.google.com/?q=Nand+Vatika+Nava+Naroda+Ahmedabad+Gujarat+382330",
  },
  businessHours: [
    {
      days: "Monday - Sunday",
      hours: "24/7 Available for Bookings & Support",
    },
  ],
  navLinks: [
    { title: "Home", href: "/" },
    { title: "Cars", href: "/cars" },
    { title: "Booking", href: "/booking" },
    { title: "FAQ", href: "/faq" },
    { title: "About Us", href: "/about" },
  ],
  socialLinks: [
    {
      platform: "WhatsApp",
      href: "https://wa.me/918980179677",
      iconName: "MessageCircle",
    },
    {
      platform: "Instagram",
      href: "https://instagram.com/brahmanitravels",
      iconName: "Instagram",
    },
    {
      platform: "Facebook",
      href: "https://facebook.com/brahmanitravels",
      iconName: "Facebook",
    },
    {
      platform: "Google Reviews",
      href: "https://maps.google.com/?q=Brahmani+Travels+Ahmedabad",
      iconName: "Star",
    },
  ],
  branding: {
    logoUrl: "/logo.png",
    colors: {
      navy: "#0A1F5C",
      navyDeep: "#06123A",
      gold: "#C9962E",
      goldLight: "#E8C468",
      goldDark: "#A97812",
      softBg: "#F7F8FC",
      white: "#FFFFFF",
    },
  },
};

export interface TrustStat {
  label: string;
  value: number;
  suffix: string;
}

// TODO: Update placeholder business metrics with finalized live numbers
export const trustStats: TrustStat[] = [
  { label: "Happy Customers", value: 5000, suffix: "+" },
  { label: "Trips Completed", value: 10000, suffix: "+" },
  { label: "Vehicles in Fleet", value: 9, suffix: "" },
  { label: "Years Experience", value: 26, suffix: "+" },
];

export const trustMarqueeItems: string[] = [
  "Premium Rides",
  "Affordable Prices",
  "Always On Time",
  "Sanitized Cars",
  "Direct Booking",
  "Transparent Pricing",
  "24/7 Support",
];

