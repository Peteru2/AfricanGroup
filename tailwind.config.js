/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'public':'#09162A',
      'private':'#8AB863',
      'private2':'rgba(253, 151, 45, .8)',
      'white': '#ffffff',
      'black':'#000000',
      'gray':'#c7c6c1',
      'red':'#FF0000'
      
    },
    fontFamily:{
      roboto:["Roboto", "sans-serif"],
      lora:["Lora", "serif"]
    },
    extend: {
      
    },
  },
  plugins: [],
}

