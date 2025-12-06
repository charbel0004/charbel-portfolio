/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050711",
        surface: "#0B0F1A",
        accent: "#3B82F6",
        accentSoft: "#1D283A",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
