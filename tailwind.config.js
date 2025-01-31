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
        'haircut-1' : "url('./assets/haircut-1.jpg')",
        'haircut-2' : "url('./assets/haircut-2.jpg')",
        'haircut-3' : "url('./assets/haircut-3.jpg')",
        'haircut-4' : "url('./assets/haircut-4.jpg')",
        'haircut-5' : "url('./assets/haircut-5.jpg')",
        'haircut-6' : "url('./assets/haircut-6.jpg')",
        'haircut-7' : "url('./assets/haircut-7.jpg')",
        'haircut-8' : "url('./assets/haircut-8.jpg')",
        
      }
    },
  },
  plugins: [],
}