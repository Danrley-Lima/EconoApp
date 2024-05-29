/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#000000",
        textAlternativ: "#868686",
        verde: "#31A063",
        vermelho: "#E64C54",
        "verde-gradiente-end": "#31A078",
        "verde-gradiente-start": "#31A05F",
      },
      fontFamily: {
        "DM-Sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
