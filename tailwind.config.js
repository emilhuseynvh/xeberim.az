/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red_" : '#ea2027'
      },
      screens: {
        'medium': '870px',
        'xs' : '500px',
        'xxs' : '350px'
      },
    },
  },
  plugins: [],
}