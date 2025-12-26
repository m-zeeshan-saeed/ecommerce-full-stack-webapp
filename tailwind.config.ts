import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        brand: "#0D6EFD",          // Blue buttons & brand
        muted: "#F7F8FA",          // Page background
        border: "#DEE2E6",
        textMuted: "#6C757D",
        greenHero: "#9FE3D0",      // Hero banner green
        blueSoft: "#E7F0FF",       // Login card
        orangeSoft: "#FFE6CC",     // Offer card
        tealSoft: "#E6F7F4",       // Quote card
      },
      borderRadius: {
        card: "10px",
      },
      fontSize: {
        xs2: "11px",
      },
    },
  },
  plugins: [],
};

export default config;
