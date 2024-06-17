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
        '107': '107%',
        '120': '120%',
        '150': '150%',
        '183': '183%',
      },
      fontSize: {
        'custom-4xl': '40px',
        'custom-6xl': '64px',
        'custom-8xl': '88.41px',
      },
      backgroundImage: {
      },
      boxShadow: {
        blueChalk: '0px_10px_20px_0px_#4B17E62B',

      },
    },
  },
  plugins: [],
}