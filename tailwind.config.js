/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        '#646A73':'#646A73',
        '#DEE0E3':'#DEE0E3',
        '#3370FF':'#3370FF',
        '#4973F2':'#4973F2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
