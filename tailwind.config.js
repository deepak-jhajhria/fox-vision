
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
        electricViolet: "#5925F2",
        skyBlue: "#50E2FC",
        alto: "#d3d3d3",
        noble: "#b3b3b3",
        silver: "#a6a6a6",
        alabaster: "#f9f9f9",
        violet:"#815DED",
        selago:"#EFEAFD",
        lightGrey:"#0000001A",
        comet:"#525E74"
      },
      lineHeight: {
        107: "107%",
        120: "120%",
        121:"121%",
        150: "150%",
        183: "183%",
        121:"121%"
      },
      fontSize: {
        "custom-2xl": "28px",
        "custom-3xl": "32px",
        "custom-4xl": "40px",
        "custom-6xl": "64px",
        "custom-8xl": "88.41px",
      },

      backgroundImage: {},
      boxShadow: {
        blueChalk: ["0px 10px 20px 0px #4B17E62B"],
        painIcon: "0px 12.63px 25.25px 0px #4B17E62B",
        graphicIcon: "0px 10px 20px 0px #05D5FB29",
        addCards: "0px 16.7px 41.74px 0px #3B3E430D",
        nav: "0px 0px 13px 0px #00000024",
        contactbox :"0px 11.57px 27px 0px #4B17E61A",
        contactCard:"0px 4px 27px 0px #4B17E614",
        designCard:"0px 16.7px 41.74px 0px #3B3E430D",
        designShadow: "0px -51px 68px -51px #00000012",
        inputShadow: "0px 0px 5px -2px #4B17E666",
        angebot: "0px 10px 20px 0px #4B17E62B",
        blueCard: "0px 11.57px 23.15px 0px #05D5FB29",
      
      },
    },
  },
  plugins: [],
};
