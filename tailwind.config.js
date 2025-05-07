/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          darkbg: '#0b0b0b', 
        },
        gold: '#d4af37',
        golddark: '#B29126',
        light: {
          bg1: '#FFFFFF',
          bg2: '#E6E6E6',
          text: '#222222',
          card1: '#ffffff',
          border: '#dddddd',
          shadow: 'rgba(0, 0, 0, 0.05)',
        },
        dark: {
          bg1: '#000000',
          bg2: '#1A1A1A',
          text: '#f5f5f5',
          card1: '#1a1a1a',
          border: '#333333',
          shadow: 'rgba(0, 0, 0, 0.6)',
        },
      },
    },
  },
  plugins: [],
}
