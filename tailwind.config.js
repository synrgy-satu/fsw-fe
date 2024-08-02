/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'blue-gsm-100': '#333999'
      }
    },
  },
  plugins: [],
}