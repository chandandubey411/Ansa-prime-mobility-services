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
          DEFAULT: '#1a1a1a',
          1:       '#2a2a2a',
          2:       '#3a3a3a',
          3:       '#4a4a4a',
          4:       '#5a5a5a',
          grey:    '#6a6a6a',
          card:    '#ffffff',
        },
        light: {
          DEFAULT: '#f8f5f0',
          1:       '#f2ede6',
          2:       '#ebe5dc',
          3:       '#e2dbd0',
          4:       '#d8d0c4',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body:    ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        gold:    '0 0 25px rgba(212,167,60,0.35)',
        'gold-lg':'0 0 55px rgba(212,167,60,0.55)',
        luxury:  '0 24px 60px rgba(0,0,0,0.12)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4A73C 0%, #c49535 50%, #B8891F 100%)',
        'light-gradient': 'linear-gradient(135deg, #f8f5f0, #ebe5dc)',
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