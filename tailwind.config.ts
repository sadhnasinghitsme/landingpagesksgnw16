import type { Config } from "tailwindcss";

/**
 * Design system ported from the reference theme (msc-warm-theme.vercel.app),
 * recoloured to the SKS maroon / charcoal / cream / gold palette.
 *
 * Reference facts matched:
 *  - body background  #FBF8F3      - hairline border  #E0D7C6
 *  - card radius      10px         - button radius    3px (flat, no shadow)
 *  - card shadow      0 4px 16px rgba(31,33,30,.09)
 *  - headings         Playfair Display serif, weight 400
 *  - body             Inter sans (forms & buttons inherit this too)
 *  - eyebrow          11.5px / 500 / 0.28em / uppercase / bronze
 *  - sections         full-bleed colour bands, ~64px vertical padding
 *
 * Swap `brand` / `gold` when the official brand hex arrives — nothing hard-codes.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7A1F2B", // deep maroon / burgundy
          dark: "#5E1620",
          light: "#97303C",
        },
        charcoal: {
          DEFAULT: "#1F211E", // near-black warm charcoal (ref rgb(31,33,30))
          light: "#2C2E2A",
        },
        cream: {
          DEFAULT: "#FBF8F3", // page + light bands (ref rgb(251,248,243))
          dark: "#F2EBDD", // inset panels
          border: "#E0D7C6", // hairline (ref rgb(224,215,198))
        },
        gold: {
          DEFAULT: "#A8874E", // eyebrow bronze (ref rgb(168,135,78))
          light: "#C9A45F",
          dark: "#8A6C39",
        },
        ink: "#2A2622", // body text on cream
        // School house colours — used only as tasteful accents
        // (borders, tab highlights, icons, hover states), never as fills.
        house: {
          red: "#C0392B",
          blue: "#2C6E9E",
          yellow: "#D9A404",
          green: "#3F8F5B",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "Cambria", "serif"],
      },
      borderRadius: {
        btn: "3px",
        card: "10px",
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      boxShadow: {
        card: "0 4px 16px rgba(31, 33, 30, 0.09)",
        lift: "0 12px 36px rgba(31, 33, 30, 0.18)",
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};

export default config;
