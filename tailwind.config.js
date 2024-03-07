/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F6F6F6",
          600: "#EEEEEE",
          700: "#CCCCCC",
        },
        secondary: {
          DEFAULT: "#4a4a4a",
          550: "#404040",
          600: "#343434",
          700: "#2b2b2b",
        },
        third: {
          DEFAULT: "#8D8C8A",
        },
      },
      fontFamily: {
        zozo: "Bodoni",
      },
    },
  },
  plugins: [],
};
