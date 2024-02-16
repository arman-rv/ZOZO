/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "F6F6F6",
        },
        secondary: {
          DEFAULT: "#4a4a4a",
        },
        third: {
          DEFAULT: "#8D8C8A",
        },
      },
      fontFamily:{
        zozo:"Bodoni"
      }
    },
  },
  plugins: [],
};
