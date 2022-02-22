
module.exports = {
  enabled: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      keyframes: {
        fadeout: {
          '0%' : { opacity: 1},
          '100%': { 
            opacity: 0,
            display: 'none'
          }
        }
      },
      animation: {
        fadeout: 'fadeout 3s ease-in forwards'
      }
    },
  },
  variants: {},
  plugins: [],
};

