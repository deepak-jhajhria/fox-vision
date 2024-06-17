/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: "#4B17E6",
        blackPearl: "#071838",
        turquoise: "#05D5FB",
        bubbles: "#E9FCFF",
        blueChalk: "#E6DEFF",
      },
      lineHeight: {
        '1.5': '1.5',
      },
      fontSize: {
      },
      backgroundImage: {
      },
      boxShadow: {

      },
    },
  },
  plugins: [],
}