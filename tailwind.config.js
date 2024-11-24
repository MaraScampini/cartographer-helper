/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'klee': ['Klee One']
    },
    extend: {
      boxShadow: {
        'selected-coin': 'inset 1px 1px 1px 1px rgba(0,0,0,0.3)'
      },
      colors: {
        houses: {
          DEFAULT: "#fec79c"
        },
        water: {
          DEFAULT: "#adeaff"
        },
        farm: {
          DEFAULT: "#fffbad"
        },
        forest: {
          DEFAULT: "#d9fe9c"
        },
        monster: {
          DEFAULT: "#ccadff"
        },
        empty: {
          DEFAULT: "#fcf6ec"
        },
        mountain: {
          DEFAULT: "#b69880"
        },
        ruin: {
          DEFAULT: "#e7d7cb"
        },
        lightBackground: {
          DEFAULT: "#f1f1f1"
        },
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-houses',
    'bg-water',
    'bg-farm',
    'bg-forest',
    'bg-monster',
    'bg-empty',
    'bg-mountain',
    'bg-ruin'
  ]
}

