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
        'shave-1' : "url('./assets/shave-1.jpg')",
        'shave-2' : "url('./assets/shave-2.jpg')",
        'shave-3' : "url('./assets/shave-3.jpg')",
        'shave-4' : "url('./assets/shave-4.jpg')",
        'shave-5' : "url('./assets/shave-5.jpg')",
        'shave-6' : "url('./assets/shave-6.jpg')",
        'shave-7' : "url('./assets/shave-7.jpg')",
        'shave-8' : "url('./assets/shave-8.jpg')",

        
      }
    },
  },
  plugins: [],
}