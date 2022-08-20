/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#BD0707",
        color2: "#FFFEFE",
        color3: "#7E8CAC",
        color4: "#2C273F",
        color5: "#F6DADA",
        color6: "#974A4A",
      },
    },
  },
  plugins: [],
};
