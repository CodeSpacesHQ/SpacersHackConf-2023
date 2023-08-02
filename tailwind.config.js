/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        floatAnimation: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "slide-in": "slide-in 1s ease-out",
        float: "floatAnimation 3s infinite ease-in-out;",
      },
      screens: {
        wideScreen: "1400px",
        smallest: "375px",
        xmd: "920px",
        // => @media (min-width: 1400px) { ... }
      },
    },
  },
  plugins: [],
};
