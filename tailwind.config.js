/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vedic: {
          saffron: '#EB5C2B',
          saffronLight: '#FF7D4D',
          saffronDark: '#B8380A',
          amber: '#F3931B',
          amberLight: '#FBBF24',
          gold: '#D97706',
          goldLight: '#FDE68A',
          goldDeep: '#92400E',
          maroon: '#680E0E',
          maroonDark: '#3E0808',
          maroonLight: '#8A1818',
          cream: '#FFFDF7',
          creamDark: '#FFF5E6',
          dark: '#1C1613',
          border: '#EADBC7',
        }
      },
      fontFamily: {
        serif: ['"Rozha One"', '"Cinzel"', 'serif'],
        sans: ['"Mukta"', '"Poppins"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'divine': '0 10px 30px -10px rgba(235, 92, 43, 0.35)',
        'divine-lg': '0 20px 45px -15px rgba(235, 92, 43, 0.45)',
        'gold-glow': '0 0 25px rgba(245, 158, 11, 0.4)',
        'maroon-glow': '0 0 30px rgba(104, 14, 14, 0.5)',
      },
      animation: {
        'spin-very-slow': 'spin 45s linear infinite',
        'spin-reverse-slow': 'spinReverse 60s linear infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
        'float-delayed': 'floatGentle 5s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'diya-flicker': 'diyaFlicker 1.8s ease-in-out infinite',
        'shimmer-sweep': 'shimmerSweep 3.5s infinite',
        'bell-ring': 'bellRing 1s ease-in-out',
      },
      keyframes: {
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        diyaFlicker: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '25%': { opacity: '1', transform: 'scale(1.08)' },
          '50%': { opacity: '0.75', transform: 'scale(0.96)' },
          '75%': { opacity: '0.95', transform: 'scale(1.04)' },
        },
        shimmerSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        bellRing: {
          '0%': { transform: 'rotate(0)' },
          '20%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-14deg)' },
          '60%': { transform: 'rotate(8deg)' },
          '80%': { transform: 'rotate(-4deg)' },
          '100%': { transform: 'rotate(0)' },
        }
      }
    },
  },
  plugins: [],
}
