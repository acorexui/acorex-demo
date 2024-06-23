/** @type {import('tailwindcss').Config} */

const acorexPresets = require("@acorex/styles/tailwind-base");

module.exports = {
  presets: [acorexPresets],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
