/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "azul-principal": "#1e40af",
        "azul-claro": "#3b82f6",
        "verde-exito": "#10b981",
        "naranja-acento": "#f59e0b",
        "gris-texto": "#6b7280",
        "gris-fondo": "#f3f4f6",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
