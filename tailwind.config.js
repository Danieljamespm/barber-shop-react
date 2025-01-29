/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['"Oswald"'],
        Opensans: ['"Open Sans"']
      },
      backgroundImage: {
        'hero-image' : "url('./hero-image.jpg')",
        'review-image' : "url('./review-image.jpg')",
        'barber-chair' : "url('./barber-chair.jpg')",
      }
    },
  },
  plugins: [],
}