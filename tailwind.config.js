/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF", 
        secondary: "#FFD700", // test navbar (debuggeo)
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
