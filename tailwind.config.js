/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'Kumbh': ['KumbhSans', 'sans-serif'],
      },
      fontWeight: {
        bold: '700',
      },
    },
  },
  plugins: [],
}