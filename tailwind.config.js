const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      accent: "#8A099F",
      dark: "#0A0909",
      ...colors,
    },
    fontFamily: {
      monster: ["Raleway"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
