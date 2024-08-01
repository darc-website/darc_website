const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./page.js",
    flowbite.content(),
  ],
  plugins: [
    "./page.js",
    flowbite.plugin(),
  ],
};