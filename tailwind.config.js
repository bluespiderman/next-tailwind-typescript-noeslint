/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans'],
      'serif': ['ui-serif', 'Georgia'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        orange: colors.orange,
        primary: "#0872BF",
        secondary: "#141A1A",
        cs_footer_border_color: "#8D8080",
      }
    },
  },
  plugins: [],
}
