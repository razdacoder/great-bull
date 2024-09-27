/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      keyframes: {
        slideUp: {
          "0%, 25%": { transform: "translateY(100%)", opacity: 0 }, // Start off-screen below
          "30%, 50%": { transform: "translateY(0%)", opacity: 1 }, // Slide up into view
          "55%, 75%": { transform: "translateY(-100%)", opacity: 0 }, // Slide up out of view
          "80%, 100%": { transform: "translateY(100%)", opacity: 0 },
        },

        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      // Add custom animations
      animation: {
        marquee: "marquee 20s linear infinite",
        slideUp: "slideUp 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
