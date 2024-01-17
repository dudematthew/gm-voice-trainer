/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: "#cddcd8",
          200: "#9bb8b1",
          300: "#6a9589",
          400: "#387162",
          500: "#064e3b",
          600: "#053e2f",
          700: "#042f23",
          800: "#021f18",
          900: "#01100c"
        },
        'secondary': {
          100: "#d5e7de",
          200: "#accebd",
          300: "#82b69c",
          400: "#599d7b",
          500: "#2f855a",
          600: "#266a48",
          700: "#1c5036",
          800: "#133524",
          900: "#091b12"
        },
        'accent': {
          100: "#f7ecd5",
          200: "#efd8ab",
          300: "#e6c582",
          400: "#deb158",
          500: "#d69e2e",
          600: "#ab7e25",
          700: "#805f1c",
          800: "#563f12",
          900: "#2b2009"
        },
        'dark': {
          100: "#d1d2d5",
          200: "#a3a6ab",
          300: "#767980",
          400: "#484d56",
          500: "#1a202c",
          600: "#151a23",
          700: "#10131a",
          800: "#0a0d12",
          900: "#050609"
        },
        'surface': {
          100: "#d5d7da",
          200: "#abafb6",
          300: "#818791",
          400: "#575f6d",
          500: "#2d3748",
          600: "#242c3a",
          700: "#1b212b",
          800: "#12161d",
          900: "#090b0e"
        },
        'on-dark': {
          100: "#eceff2",
          200: "#d9dfe6",
          300: "#c6ced9",
          400: "#b3becd",
          500: "#a0aec0",
          600: "#808b9a",
          700: "#606873",
          800: "#40464d",
          900: "#202326"
        },
        'on-primary': '#F7FAFC', // Off White
        'on-secondary': '#F7FAFC', // Off White
        'on-surface': '#A0AEC0', // Dark Grayish Blue
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      },
    },
  },
  plugins: [],
};