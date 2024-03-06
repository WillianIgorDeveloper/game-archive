/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [],
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      backgroundImage: {
        "brand-gradient": "linear-gradient(160deg, #60a5fa 20%, #2563eb 75%)",
        "brand-gradient-hover": "linear-gradient(160deg, #3b82f6 20%, #1d4ed8 75%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-left": {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-right": {
          from: { opacity: "0", transform: "translateX(10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-left": "fade-left 0.2s ease-out",
        "fade-right": "fade-right 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
