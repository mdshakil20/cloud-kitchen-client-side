/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueAss': '#1A2647',
        'orange': '#FF7A00',
      },
      maxWidth: {
        '1440': '1440px',
      },
    },
  },
  plugins: [require("daisyui")],
}