/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'grey-1': '#666666',
        'grey-2': '#656565',
        'white': '#ffffff',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      gridTemplateColumns: {
        'header': '20% 70% 10%'
      },
      backgroundImage: {
        'home': "url(https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-hero-image.jpg)"
      }
    },
  },
  plugins: [],
}

