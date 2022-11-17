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
            transform: "translateY(-410%)",
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
            filter: "blur(4px)",
            opacity: "0",
          },
          to: {
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "from-top": {
          from: {
            opacity: "0",
            transform: "translateY(-100%)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "vertical-scroll": "scrolledV 10s linear infinite",
        "horizontal-scroll": "scrolledH 12s linear infinite",
        "fade-in": "fade-in 2s ease",
        "from-top-200": "from-top 1s ease 200ms",
        "from-top-400": "from-top 1s ease 300ms",
        "from-top-600": "from-top 1s ease 200ms",
      },
    },
  },
  plugins: [],
};
