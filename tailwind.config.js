/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'public':'#09162A',
      'private':'#FD972D',
      'private2':'rgba(253, 151, 45, .8)',
      'white': '#ffffff',
    },
    extend: {
      
    },
  },
  plugins: [],
}

