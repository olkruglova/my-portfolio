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
      sans: ["Raleway", "sans-serif"],
    },
    extend: {
      fontFamily: {
        header: ['"Oswald"', "sans-serif"],
        body: ['"Lato"', "sans-serif"],
      },
      backgroundImage: {
        "main-bg": "url('./assets/images/deep-bg.jpg')",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(45deg)" },
          "50%": { transform: "rotate(90deg)" },
          "75%": { transform: "rotate(135deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        squizz: {
          "0%": { transform: "scaleY(1)", opacity: "1" },
          "100%": { transform: "scaleY(0)", opacity: "0" },
        },
        "appear-x": {
          "0%": { transform: "translateX(-50%) scaleX(0)", opacity: "0" },
          "100%": { transform: "translateX(0) scaleX(1)", opacity: "1" },
        },
        "appear-y": {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        rotation: "rotate 0.3s ease-in-out",
        squizz: "squizz 0.2s ease-in-out forwards",
        "appearance-x": "appear-x 0.3s ease-in-out 0.1s forwards",
        "appearance-y": "appear-y 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
