/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        shadow2: "0 0 0 1px #4a47b1",
        shadow1:
          "0px 7px 14px rgba(0, 0, 0, .05), 0px 0px 3.12708px rgba(0, 0, 0, .0798), 0px 0px .931014px rgba(0, 0, 0, .1702)",
      },
    },
    colors: {
      background1: "rgba(255,255,255, 0.9)",
      border1: "#b8b8b8",
      border2: "#d6d6d6",
      text1: "#3d3d3d",
      text2: "#e3e2fe",
      BLACK: "#000000",
      RED: "#FF0000",
      GREEN: "#00FF00",
      BLUE: "#0000FF",
      ORANGE: "#FFA500",
      YELLOW: "#FFFF00",
      WHITE: "#FFFFFF",
    },
  },
  plugins: [],
};
