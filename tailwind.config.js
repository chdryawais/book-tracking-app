module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      textColor: {
        devilGrey: '#696969',
        codGray: '#1E1E1E',
        darkcharcolGray: '#3C3C3C',
        silverGrey: '#C3C3C3',
        dustyGrey: '#969696',
        onyxGrey: '#0F0F0F',
        snowWhite: '#F9F9F9',
        altoGrey: '#D2D2D2;',
        concreteGrey: '#F0F0F0',
      },
      backgroundColor: {
        snowWhite: '#F9F9F9',
        white: '#FFFFFF',
        codGray: '#1E1E1E',
        silverGrey: '#C3C3C3',
        devilGrey: '#696969',
        concreteGrey: '#F0F0F0',
        onyxGrey: '#0F0F0F',
        'white-0.16': 'rgba(255, 255, 255, 0.1666)',
        'black-0.6': 'rgba(0, 0, 0, 0.6666)',
        blue: '#2478F0',
      },
      borderColor: {
        codGray: '#1E1E1E',
        concreteGrey: '#F0F0F0',
        mercuryGrey: '#E1E1E1',
      },
      borderRadius: {
        18: '18px',
        xl: '0.75rem',
        '6xl': '3rem',
      },
      height: {
        13: '3.375rem',
      },
      width: {
        41: '41rem',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      borderStyle: ['hover', 'focus'],
    },
  },
  plugins: [],
};
