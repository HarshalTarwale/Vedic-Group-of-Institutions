/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F59E0B', // Primary Orange
          light: '#F59E0B', 
          dark: '#D97706',
        },
        navy: {
          DEFAULT: '#1E293B', // Dark Navy
          light: '#334155',
        },
        green: {
          DEFAULT: '#10B981', // Green
        },
        gray: {
          light: '#F3F4F6', // Light Gray
          text: '#6B7280', // Text Gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
