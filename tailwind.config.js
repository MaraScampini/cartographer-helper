/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        houses: {
          DEFAULT: "#d60000"
        },
        water: {
          DEFAULT: "#2ad8e7"
        },
        farm: {
          DEFAULT: "#ffc32f"
        },
        forest: {
          DEFAULT: "#33b000"
        },
        monster: {
          DEFAULT: "#aa2fff"
        },
        empty: {
          DEFAULT: "#f4eede"
        },
        mountain: {
          DEFAULT: "#5c4b21"
        },
        ruin: {
          DEFAULT: "#dcd7c8"
        }
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

