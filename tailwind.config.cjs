/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.{js,jsx,ts,tsx,vue}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        baseLight: "#FFFEFC",
        baseAlternate: "#00F6FF",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
    xxl: "1920px",
    xxxl: "2560px",
  },
  plugins: [],
};
