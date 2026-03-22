import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FFF8F0',
          100: '#FEEDD8',
          200: '#FDD9B0',
          300: '#F5BC7A',
          400: '#E8A04C',
          500: '#E8873C',
          600: '#D4762F',
          700: '#B55E20',
          800: '#8C4818',
          900: '#6B3612',
        },
        dark: '#1A1A1A',
      },
      maxWidth: {
        'content': '1200px',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
} satisfies Partial<Config>
