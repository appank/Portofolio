/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "green-bright": "#51C77A",
        "green-normal": "#23823E",
        "red-bright": "#C8463A",
        "red-dark": "#83160F",
        "accent-orange": "#D78C66",
        "accent-yellow": "#D6D86B",
        "soft-white": "#E3E8E8",
        "table-heading": "#7A7E87",
      },
    },
  },
  plugins: [],
};
