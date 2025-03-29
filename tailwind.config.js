/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, 
        padding: {
          DEFAULT: '1.25rem', 
          lg: '5rem', 
        },
      },
      colors: {
        primary: '#2F4157', 
        secondary: '#577C8E', 
        gold: '#CFB680', 
      },
      backgroundImage: {
        'hero-vendor': "url('@/assets/vendor/vendor.png')",

      },
    },
  },
  plugins: [],
}

