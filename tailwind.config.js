/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "Class",
  theme: {
    extend: {
      fontFamily: {
        Epilogue: ["Epilogue, sans-serif"],
      },
      colors: {
        almostblack: "hsl(0, 0%, 8%)",
        mediumgray: "hsl(0, 0%, 41%)",
        almostwhite: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
