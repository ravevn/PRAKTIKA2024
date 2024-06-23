/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-500': '#FF4D4D', // Добавьте красный цвет 
        'gray-300': '#D1D5DB', // Добавьте серый цвет
      }
    },
  },
  plugins: [],
}