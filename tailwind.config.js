/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      green: colors.green,
      dark: "#000d17",
      "dark-blue": {
        100: "#2A6F97",
        200: "#014F86",
        300: "#01497C",
        400: "#013A63",
        500: "#012A4A",
        DEFAULT: "#012A4A"
      },
      "light-blue": {
        100: "#A9D6E5",
        200: "#89C2D9",
        300: "#61A5C2",
        400: "#468FAF",
        500: "#2C7DA0",
        DEFAULT: "#89C2D9"
      },
      salmon: {
        100: "#ff8e8e",
        200: "#ff7878",
        300: "#ff6d6d",
        400: "#ff5f5f",
        500: "#ff4e4e",
        DEFAULT: "#ff7878"
      }
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"]
    },
    extend: {
      fontFamily: {
        header: ['"Oswald"', "sans-serif"],
        body: ['"Lato"', "sans-serif"]
      },
      backgroundImage: {
        "main-bg": "url('./assets/images/deep-bg.jpg')",
        "pixel-art-bg": "url('./assets/images/pixel_art.png')",
        "matching-game-bg": "url('./assets/images/matching_game.png')"
      },
      keyframes: {
        "squizz-y": {
          "0%": { transform: "scaleY(1)", opacity: "1" },
          "100%": { transform: "scaleY(0)", opacity: "0" }
        },
        "squizz-x": {
          "0%": { transform: "scaleX(1)", opacity: "1" },
          "100%": { transform: "scaleX(0)", opacity: "0" }
        },
        "appear-x": {
          "0%": {
            transform: "translateX(-100%) scaleX(0)",
            opacity: "0",
            width: "0"
          },
          "100%": {
            transform: "translateX(0) scaleX(1)",
            opacity: "1",
            width: "4rem"
          }
        },
        "appear-y": {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "100%": { transform: "scaleY(1)", opacity: "1" }
        },
        "reverse-appear-x": {
          "0%": {
            transform: "translateX(0) scaleX(1)",
            opacity: "1",
            width: "4rem"
          },
          "100%": {
            transform: "translateX(-100%) scaleX(0)",
            opacity: "0",
            width: "0"
          }
        },
        "reverse-appear-y": {
          "0%": { transform: "scaleY(1)", opacity: "1" },
          "100%": { transform: "scaleY(0)", opacity: "0" }
        }
      },
      animation: {
        "squizz-x": "squizz-x 0.2s ease-in-out forwards",
        "squizz-y": "squizz-y 0.2s ease-in-out forwards",
        "appearance-x": "appear-x 0.3s ease-in-out 0.1s forwards",
        "appearance-y": "appear-y 0.3s ease-in-out forwards",
        "reverse-appearance-x": "reverse-appear-x 0.2s ease-in-out forwards",
        "reverse-appearance-y": "reverse-appear-y 0.2s ease-in-out forwards"
      },
      boxShadow: {
        top: "0 -25px 50px -12px rgb(0 0 0 / 0.25);"
      }
    }
  },
  plugins: []
};
