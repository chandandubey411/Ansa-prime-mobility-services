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
          DEFAULT: '#0f172a',
          1:       '#1e293b',
          2:       '#334155',
          3:       '#475569',
          4:       '#64748b',
          grey:    '#94a3b8',
          card:    '#ffffff',
        },
        light: {
          DEFAULT: '#ffffff',
          1:       '#f8fafc',
          2:       '#f1f5f9',
          3:       '#e2e8f0',
          4:       '#cbd5e1',
        },
      },
      fontFamily: {
        heading: ['Inter', 'Outfit', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        body:    ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        gold:    '0 0 25px rgba(212,167,60,0.3)',
        'gold-lg':'0 0 55px rgba(212,167,60,0.5)',
        luxury:  '0 20px 60px rgba(0,0,0,0.10)',
        card:    '0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4A73C 0%, #c49535 50%, #B8891F 100%)',
        'light-gradient': 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
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
          '50%':     { transform: 'translateY(-14px)' },
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