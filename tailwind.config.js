/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        mystical: {
          primary: '#5D3FD3',
          secondary: '#191970',
          accent: '#F5D300',
          background: '#121212',
          surface: '#1E1E1E',
        },
      },
      keyframes: {
        'rotate-y': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        'rotate-y': 'rotate-y 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};