/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#1E1E1E',
        accent: '#6C63FF',
        warning: '#ED7878',
        input: '#F2F2F2',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        formShadow: '0px 0px 10px 5px rgba(30, 30, 30, 0.11)',
      },
    },
  },
  plugins: [],
};
