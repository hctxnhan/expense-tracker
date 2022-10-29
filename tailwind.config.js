/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      gridTemplateColumns: {
        page: '400px 1fr',
      },
      fontFamily: {
        'source-sans': ['Source Sans Pro', 'sans-serif'],
      },
    },
    screens: {
      '2xl': { max: '1536px' },
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      xs: { max: '490px' },
    },
  },
  plugins: [],
};
