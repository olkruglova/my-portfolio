/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      "dark-blue": {
        100: "#2A6F97",
        200: "#014F86",
        300: "#01497C",
        400: "#013A63",
        500: "#012A4A",
        DEFAULT: "#012A4A",
      },
      "light-blue": {
        100: "#A9D6E5",
        200: "#89C2D9",
        300: "#61A5C2",
        400: "#468FAF",
        500: "#2C7DA0",
        DEFAULT: "#89C2D9",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      fontFamily: {
        header: ['"Oswald"', "sans-serif"],
        body: ['"Lato"', "sans-serif"],
      },
      backgroundImage: {
        "main-bg": "url('./assets/images/deep-bg.jpg')",
      },
    },
  },
  plugins: [],
};
