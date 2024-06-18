/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      centerContent: true,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        blue: "#4B17E6",
        blackPearl: "#071838",
        turquoise: "#05D5FB",
        bubbles: "#E9FCFF",
        blueChalk: "#E6DEFF",
        electricViolet: '#5925F2',
        skyBlue: "#50E2FC"
      },
      lineHeight: {
        107: "107%",
        120: "120%",
        150: "150%",
        183: "183%",
      },
      fontSize: {
        "custom-4xl": "40px",
        "custom-6xl": "64px",
        "custom-8xl": "88.41px",
      },
    
      backgroundImage: {},
      boxShadow: {
        blueChalk: ['0px 10px 20px 0px #4B17E62B'],
        painIcon: "0px 12.63px 25.25px 0px #4B17E62B",
        graphicIcon: "0px 10px 20px 0px #05D5FB29",
        nav: "0px 0px 13px 0px #00000024",
      },
    },
  },
  plugins: [],
};
