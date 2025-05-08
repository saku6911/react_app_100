/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // appディレクトリを使っている場合
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
