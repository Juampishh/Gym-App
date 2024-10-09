/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amarillo: "#E6FE58",
        negroClaro: "#171717",
        negro: "#000000",
        grisClaro: "#D8D5D5",
      },
    },
  },
  plugins: [],
};
