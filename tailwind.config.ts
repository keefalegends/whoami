import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        aero: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          cyan: "#22d3ee",
          green: "#4ade80",
          xpBlueStart: "#3a7ceb",
          xpBlueMid: "#1d52d4",
          xpBlueEnd: "#123eaf",
          xpBevel: "#ece9d8",
          xpBorder: "#a6a495",
        },
      },
      boxShadow: {
        "aero-glass": "0 10px 30px 0 rgba(14, 165, 233, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.2)",
        "aero-card": "0 15px 35px -5px rgba(2, 132, 199, 0.18), inset 0 2px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(2, 132, 199, 0.1)",
        "glossy-btn": "inset 0 1px 1px rgba(255, 255, 255, 0.9), inset 0 -2px 2px rgba(0, 0, 0, 0.15), 0 4px 15px rgba(2, 132, 199, 0.35)",
        "glossy-btn-secondary": "inset 0 1px 1px rgba(255, 255, 255, 0.9), inset 0 -1px 1px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.06)",
        "xp-window": "0 20px 45px -10px rgba(12, 74, 110, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.7)",
      },
      backgroundImage: {
        "aero-gradient": "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 40%, #bae6fd 100%)",
        "xp-titlebar": "linear-gradient(180deg, #3a7ceb 0%, #1d52d4 50%, #123eaf 100%)",
        "glossy-blue": "linear-gradient(180deg, #38bdf8 0%, #0284c7 50%, #0369a1 100%)",
        "glossy-cyan": "linear-gradient(180deg, #22d3ee 0%, #06b6d4 50%, #0891b2 100%)",
        "glossy-light": "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 249, 255, 0.7) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-12px) scale(1.03)" },
        },
        drift: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(15px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.95)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
