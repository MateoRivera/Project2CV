/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#E8F2F4',
        gray: '#83A2A7',
        black: '#001D23',
        primary: '#2B4352',
        secondary: '#FF4A76',
        tertiary: '#FFA34E',
      },
      fontFamily: {
        Nunito: ['Nunito'],
      },
    },
  },
  plugins: [],
};
