/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      fontFamily: {
        Kumbh: ["KumbhSans", "sans-serif"],
      },
      fontWeight: {
        bold: "700",
      },
      colors: {
        orange: "hsl(26, 100%, 55%)",
        "pale-orange": "hsl(25, 100%, 94%)",
      },
    },
  },
  plugins: [],
};
