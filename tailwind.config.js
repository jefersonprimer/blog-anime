/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Isso é importante! Permite controlar o tema com classes
    theme: {
      extend: {
        // Suas extensões de tema aqui
      },
    },
    plugins: [],
  };