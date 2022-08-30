/** @type {import('tailwindcss').Config} */
module.exports = {
  //purge: ['.src/**/*.html'],
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.html'],

  theme: {
    extend: {
      colors: {
        prototurk: '#32445a'
      },
      spacing: {
        '15': '3.75rem'
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  
  plugins: [],
}
