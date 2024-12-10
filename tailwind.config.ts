import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Azul oscuro para el fondo del footer
        secondary: "#10B981", // Verde para los enlaces y detalles
      
      },
    },
  },
  plugins: [],
} satisfies Config;
