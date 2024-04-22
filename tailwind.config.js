/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-1': '#272727',
        'black-2': '#3A3A3A',
        'black-3': '#27323f',
        'grey-75': '#BFBFBF',
        'grey-10': '#EDF1F3',
        'white': '#ffffff',
        'error': '#FF0000',
        'red': '#FE2722',
        'main-blue': '#0573f0',
        'second-blue': '#0769da'
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

