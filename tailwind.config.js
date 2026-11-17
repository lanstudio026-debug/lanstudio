/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lan: {
          burgundy: {
            DEFAULT: '#8C173A',
            50: '#FBF3F5',
            100: '#F5DEE5',
            200: '#ECC2CF',
            300: '#DE9BB1',
            400: '#C76383',
            500: '#A82B51',
            600: '#8C173A', // Primary brand color from PDF
            700: '#75112F',
            800: '#5F0C25',
            900: '#48081B',
            950: '#2E030F',
          },
          cream: {
            DEFAULT: '#FAF8F2',
            light: '#FFFDF9',
            muted: '#F3EFE6',
            border: '#E8E1D3',
            dark: '#DCD3C0'
          },
          gold: {
            DEFAULT: '#C99738',
            light: '#E2B860',
            dark: '#A67922'
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Cabinet Grotesk', 'sans-serif'],
        script: ['Playfair Display', 'Caveat', 'cursive']
      },
      boxShadow: {
        'lan-sm': '0 2px 8px -2px rgba(140, 23, 58, 0.08)',
        'lan-md': '0 8px 24px -4px rgba(140, 23, 58, 0.12)',
        'lan-lg': '0 16px 36px -6px rgba(140, 23, 58, 0.18)',
        'lan-glow': '0 0 35px rgba(140, 23, 58, 0.3)',
      }
    },
  },
  plugins: [],
}
