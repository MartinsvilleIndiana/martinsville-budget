/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        civic: {
          navy: '#0B2341',
          gold: '#C8A24D',
        }
      }
    },
  },
  plugins: [],
};
