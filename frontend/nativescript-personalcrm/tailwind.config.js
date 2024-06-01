const path = require("path");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{scss,css,xml,html,ts,tsx}"],
  // darkMode: ['class', '.ns-dark'],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f7fc",
          100: "#e7f0f7",
          200: "#c9dfee",
          300: "#99c5e0",
          400: "#62a6ce",
          500: "#3e8bb9",
          600: "#3178a8",
          700: "#26597e",
          800: "#234d69",
          900: "#224158",
          950: "#162a3b",
        },
        success: {
          100: "#e6f9f0",
          200: "#daf6e9",
          300: "#b3edd1",
          400: "#5ed89d",
          500: "#09c46a",
          600: "#079d55",
          700: "#079350",
          800: "#057640",
          900: "#045830",
        },
        warning: {
          100: "#fffbe6",
          200: "#fff9d9",
          300: "#fff3b0",
          400: "#ffe558",
          500: "#ffd800",
          600: "#ccad00",
          700: "#bfa200",
          800: "#998200",
          900: "#736100",
        },
        danger: {
          100: "#fbebea",
          200: "#f9e2df",
          300: "#f2c2bd",
          400: "#e47e73",
          500: "#d63b2a",
          600: "#c13526",
          700: "#ab2f22",
          800: "#a12c20",
          900: "#802319",
        },
        gray: {
          100: "#ffffff",
          200: "#fdfdfd",
          300: "#f2f2f3",
          400: "#dedfe0",
          500: "#c8c9cc",
          600: "#9c9ea2",
          700: "#5e6269",
          800: "#3d424a",
          900: "#222831",
        },
        light: "#fdfdfd",
        dark: "#232b43",
      },
    },
  },
  plugins: [
    /**
     * A simple inline plugin that adds the ios: and android: variants
     *
     * Example usage:
     *
     *   <Label class="android:text-red-500 ios:text-blue-500" />
     *
     */
    /**
     *     plugin(function ({ addVariant }) {
      addVariant('android', '.ns-android &');
      addVariant('ios', '.ns-ios &');
    }),
     */
  ],
  corePlugins: {
    preflight: false, // disables browser-specific resets
  },
};
