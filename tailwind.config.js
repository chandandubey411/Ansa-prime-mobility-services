/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A73C',
          light:   '#E8C460',
          lighter: '#F0D060',
          dark:    '#B8891F',
          muted:   'rgba(212,167,60,0.3)',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          1:       '#111111',
          2:       '#171717',
          3:       '#1E1E1E',
          4:       '#242424',
          grey:    '#1B1B1B',
          card:    '#1E1E1E',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body:    ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        gold:    '0 0 25px rgba(212,167,60,0.35)',
        'gold-lg':'0 0 55px rgba(212,167,60,0.55)',
        luxury:  '0 24px 60px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4A73C 0%, #F0D060 50%, #B8891F 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0a0a0a, #171717)',
      },
      animation: {
        float:    'float 4s ease-in-out infinite',
        shimmer:  'shimmer 3s linear infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        marquee:  'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}