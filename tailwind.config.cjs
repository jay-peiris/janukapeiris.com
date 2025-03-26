/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        tertiary: "#112240",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "white-200": "#e5e5e5",
        "gray-100": "#f5f5f5",
        "gray-200": "#e5e5e5",
        "gray-300": "#d4d4d4",
        "gray-400": "#a3a3a3",
        "gray-500": "#737373",
        "gray-600": "#525252",
        "gray-700": "#404040",
        "gray-800": "#262626",
        "gray-900": "#171717",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        sm: "1px 2px 8px rgba(0, 0, 0, 0.12)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "meteor-effect-2": "meteor 5s linear infinite 1s",
        "meteor-effect-3": "meteor 5s linear infinite 2s",
        "meteor-effect-4": "meteor 5s linear infinite 3s",
        "meteor-effect-5": "meteor 5s linear infinite 4s",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
