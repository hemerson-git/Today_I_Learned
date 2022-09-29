/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#B32127",
        "primary-700": "#600B0D",
        "secondary-900": "#030304",
        "secondary-700": "#1D2B3B",
        "secondary-500": "#4E6476",
        "secondary-300": "#819CB0",
        "success-500": "#657e01",
        "success-300": "#9eaf24",
      },
    },
  },
  plugins: [],
};
