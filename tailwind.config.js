/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'App': "url('/weatherApp/src/assets/weather.mp4')",
      },
    },
  },
  plugins: [],
}

