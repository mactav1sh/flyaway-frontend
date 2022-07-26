/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: '#003580',
        brandBlue300: '#00438f',
        brandBlue200: '#4085c0',
        brandBlue100: '#009fe3',
        brandBlueSec200: '#005999',
        brandBlueSec100: '#0071c2',
        brandYellow: '#feba02',
        brandYellowDark: '#dfb540',
        brandBrown: '#666',
        brandGrey: '#f2f6fa',
      },
    },
  },
  plugins: [],
};
