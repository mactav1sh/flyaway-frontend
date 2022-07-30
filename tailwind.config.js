/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: '#003580',
        brandBlue400: '#00224f',
        brandBlue300: '#00438f',
        brandBlue200: '#4085c0',
        brandBlue100: '#009fe3',
        brandBlueSec200: '#005999',
        brandBlueSec100: '#0071c2',
        brandYellow: '#feba02',
        brandYellowDark: '#dfb540',
        brandBrown: '#666',
        brandLightBlue100: '#f0f7fb',
        brandLightBlue200: '#c2ddf0',
      },
    },
  },
  plugins: [],
};
