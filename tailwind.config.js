import BananaBackground from "../assets/images/banana.webp"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('./assets/images/gradient_background.png')",
      },
      backgroundColor:{
        "menu":"#141215",
      }
    }
  },
  plugins: [
  ],
}

