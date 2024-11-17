/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Указываем пути к вашим компонентам
  ],
  theme: {
    extend: {}, // Вы можете добавлять свои стили здесь
  },
  plugins: [],
};
