const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        backgroundWhite: '#fafafa',
        blueText: '#100e34',
        redText: '#a20610',
        grayText: '#EAEBF0',
      },
    },
  },
  plugins: [],
});