module.exports = {
  purge: [ './src/**/*.html', './src/**/*.ts'],
  theme: {
    fontSize: {
      '7xl': ['7rem', {
        lineHeight: '1',
      }]
    },
    colors: {
      crimson: {
        DEFAULT: '#dc143c',
      },
      babypink: {
        DEFAULT: '#ffc0cb',
      },
      springgreen: {
        DEFAULT: '#00ff7f'
      }
    },
    // backgroundSize : {  '200%': '200%' }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
};