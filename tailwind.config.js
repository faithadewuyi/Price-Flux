/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greenLight: "#3cb371",
        greenDark: "#001f3f",
        primary: "#DEB887"
      }
    },
  },
  plugins: [],
}
