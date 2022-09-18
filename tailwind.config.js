/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      fontInter: 'Inter',
      fontLexend: 'Lexend Deca',
    },
    colors: {
      white: '#fff',
      black: '#000',
      veryDarkBlue: 'hsl(233, 47%, 7%)',
      darkCardBg: 'hsl(244, 38%, 16%)',
      violet: ' hsl(277, 64%, 61%)',
      whitePar: 'hsla(0, 0%, 100%, 0.75)',
      whiteHeading: 'hsla(0, 0%, 100%, 0.6)',
    },
    container: {
      center: 'true',
    },
    extend: {},
  },
  plugins: [],
}
