module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_e2: "#ffffffe2",
          A700_87: "#ffffff87",
          A700: "#ffffff",
        },
        gray: {
          50: "#fffafa",
          200: "#eaeaea",
          300: "#dbdbdb",
          400: "#baafb9",
          500: "#aa9ea9",
          600: "#707070",
          700: "#595959",
          800: "#3d3d3d",
          900: "#222222",
          "50_01": "#f7f8fa",
          "50_02": "#fcfcfc",
          "500_01": "#a6a6a6",
          "600_01": "#818181",
          "400_01": "#c7c7c7",
          "700_01": "#5f6060",
        },
        red: {
          300: "#ad6359",
          800: "#d11c24",
          "700_87": "#ed1c2487",
          A100: "#f88282",
        },
        amber: { A400: "#fac600" },
        teal: { 400: "#22b37f", 700: "#227e74" },
        yellow: { 600: "#fedf30", 900: "#ff7b12" },
        black: {
          900: "#000000",
          "900_01": "#060919",
          "900_29": "#00000029",
          "900_02": "#030402",
          "900_26": "#00000026",
          "900_e2": "#000000e2",
          "900_2d": "#0000002d",
          "900_99": "#07070799",
        },
        blue_gray: {
          100: "#cccaca",
          700: "#51495b",
          800: "#37474f",
          900: "#333333",
          "900_01": "#263238",
        },
        blue: { 700: "#0575e6" },
      },
      boxShadow: {
        bs: "0px 0px  2px 0px #00000026",
        bs1: "0px 0px  9px 0px #00000029",
        bs2: "0px 3.3px  5px 0px #0000002d",
      },
      fontFamily: { poppins: "Poppins", spacegrotesk: "Space Grotesk" },
      backgroundImage: {
        gradient: "radial-gradient(#ffffff87,#ed1c2487)",
        gradient1: "linear-gradient(180deg ,#ff7b12,#d11c24)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
