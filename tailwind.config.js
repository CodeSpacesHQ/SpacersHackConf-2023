/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      gelion: ["gelion"],
      poppins: ["Poppins"],
      inter: ["Inter", "sans-serif"],
      "dm-sans": ["DM Sans"],
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
        headShake: {
          "0%, 100%": {
            transform: "rotate(0)",
          },
          "25%": {
            transform: "rotate(30deg)",
          },
          "75%": { transform: "rotate(-30deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "spin-shake": "headShake 3s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "slide-in": "slide-in 1s ease-out",
        float: "floatAnimation 3s infinite ease-in-out;",
        headShake: "headShake 3s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
      screens: {
        wideScreen: "1400px",
        smallest: "376px",
        xmd: "920px",
        // => @media (min-width: 1400px) { ... }
      },
    },
  },
  plugins: [],
};
