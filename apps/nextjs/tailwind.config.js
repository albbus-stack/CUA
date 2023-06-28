/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("nativewind/tailwind/css")],
  important: "html",
  theme: {
    extend: {},
  },
};
