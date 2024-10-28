/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cobalt: '#0047AB',
        'light-gray': '#F0F0F0',
        lime: '#A3D97E',
        'vivid-red': '#FF4C4C',
      },
    },
  },
  plugins: [],
};