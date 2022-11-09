/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueAss': '#1A2647',
        'yellow': '#FF9900',
        'orange': '#FF7A00',
        'darkBlue': '#11172D',
      },
      maxWidth: {
        '1440': '1440px',
      },
      width: {
        '280': '280px',
        '40%': '40%',
        '80%': '80%',
        '60%': '60%',
        '70%': '70%',
        '90%': '90%',
      },
    },
  },
  plugins: [require("daisyui")],
}