import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A5F",
          dark: "#0F172A",
          light: "#2D5A8E",
        },
        secondary: "#059669",
        accent: {
          DEFAULT: "#F59E0B",
          hover: "#D97706",
        },
        nz: "#16A34A",
        au: "#EAB308",
        surface: "#F1F5F9",
        muted: "#64748B",
        foreground: "#0F172A",
        destructive: "#DC2626",
        ring: "#3B82F6",
        border: "#E2E8F0",
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
