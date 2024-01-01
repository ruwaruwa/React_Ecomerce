/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  colors:{
    primarColor:'#2E86C1',
    secondaryColor:'#DC7633',
    ruwaColor:'#F1948A',
    primary:'#E55604'
  }
    },
  },
  plugins: [],
}

