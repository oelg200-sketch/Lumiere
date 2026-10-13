/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FDF5F7',
          100: '#FAECEF',
          200: '#F5DCE4',
          300: '#EDC4D2',
          400: '#E0A7BC',
          500: '#D0849F',
          600: '#B8647F',
          700: '#9A4B63',
          800: '#7E3A4E',
          900: '#6B2F40',
        },
        rose: {
          50: '#FFF5F6',
          100: '#FFE8EB',
          200: '#FFD0D8',
          300: '#FFB0BE',
          400: '#FF8FA3',
          500: '#F76E88',
          600: '#E04E6B',
        },
        mint: {
          50: '#F0FAF6',
          100: '#D8F2E6',
          200: '#B0E5CC',
          300: '#82D4AE',
          400: '#54C090',
          500: '#38A877',
        },
        lavender: {
          50: '#F7F5FD',
          100: '#EDE9F8',
          200: '#D8D0F0',
          300: '#BBAEE6',
          400: '#9D8DD8',
          500: '#8270CA',
        },
        cream: {
          50: '#FDFCFA',
          100: '#FAF7F2',
          200: '#F3EDE3',
        },
        charcoal: {
          700: '#3A3340',
          800: '#2B2630',
          900: '#1E1A22',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
