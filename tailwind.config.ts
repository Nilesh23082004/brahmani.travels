import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1F5C",
          deep: "#06123A",
        },
        "navy-deep": "#06123A",
        gold: {
          light: "#E8C468",
          DEFAULT: "#C9962E",
          dark: "#A97812",
        },
        "gold-light": "#E8C468",
        "gold-dark": "#A97812",
        "soft-bg": "#F7F8FC",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
