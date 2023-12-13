/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mountains': "url('assets/hero.jpg')",
        'peak': "url('assets/peak.png')",
        'snow-peak': "url('assets/snow.jpg')",
       
      },
    fontFamily: {
      'Bebas': [ 'Bebas Neue'],
      'Oswald': ['Oswald', 'sans-serif']
    }
  },
  plugins: [],
}
}