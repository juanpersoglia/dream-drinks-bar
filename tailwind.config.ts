import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          50: '#fefce8',   // Muy claro
          100: '#fef3c7',  // Claro
          200: '#fde68a',  // Claro medio
          300: '#fcd34d',  // Medio
          400: '#f59e0b',  // Medio oscuro - principal
          500: '#d97706',  // Oscuro
          600: '#b45309',  // Muy oscuro
          700: '#92400e',  // Extra oscuro
          800: '#78350f',  // Ultra oscuro
          900: '#451a03',  // Negro dorado
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
