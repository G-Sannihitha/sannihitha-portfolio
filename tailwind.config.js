/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
        ],
      },
      colors: {
        brand: { 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca" }, // Indigo
      },
      boxShadow: {
        card: "0 12px 30px -8px rgba(0,0,0,.15)",
      },
    },
  },
  plugins: [],
};
