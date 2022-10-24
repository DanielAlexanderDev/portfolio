/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    fontFamily: {
      body: ["Epilogue"],
    },
    extend: {
      keyframes: {
        scrolledV: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-485%)",
          },
        },
        scrolledH: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-400%)",
          },
        },
        "fade-in": {
          from: {
            filter: "blur(5px)",
            opacity: "0",
          },
          to: {
            filter: "blur(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "vertical-scroll": "scrolledV 12s linear infinite",
        "horizontal-scroll": "scrolledH 12s linear infinite",
        "fade-in": "fade-in 2s ease",
      },
    },
  },
  plugins: [],
};
