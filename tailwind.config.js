module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'colorFooter': '#2B2B35',
      'white': '#FFFFFF',
      'greyFooter': '#B5B5C2',
      'circleShop' : '#DEE3EE',
    },
    extend: {
      fontFamily: {
        'deca': ['"Lexend Deca"', 'modern']
    },
    lineHeight: {
      'extra-loose': '2.5',
      '12': '3rem',
      'my': '6.5rem',
    },
    height: {
      '200': '200px',
      '800' : '600px',
    },
    inset: {
      'footer': '46.99rem',
    },
    spacing: {
      'footer': '46.99rem',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0.5': '0.5px',
    }
    },
  },
  plugins: [],
}
