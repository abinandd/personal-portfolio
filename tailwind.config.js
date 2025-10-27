/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#3b82f6', // tailwind blue-500
        },
      },
      boxShadow: {
        glow: '0 0 0 3px rgba(59,130,246,0.25)',
      },
      keyframes: {
        pulseBorder: {
          '0%, 100%': { opacity: 0.15 },
          '50%': { opacity: 0.6 },
        },
      },
      animation: {
        pulseBorder: 'pulseBorder 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

