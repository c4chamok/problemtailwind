/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
        '100%': '100% 100%',
    },
      extend: {
        colors: {
          clifford: '#da373d',
    },
      gridTemplateColumns: {
          // Simple 16 column grid
          '16': 'repeat(16, minmax(0, 1fr))',        
          '20': 'repeat(20, minmax(0, 1fr))',
          'four': 'repeat(4, 95%)',         
    },
      gridColumn: {
          'span-16': 'span 16 / span 16',
          'span-13': 'span 13 / span 13',
          'span-14': 'span 14 / span 14',
          'span-20': 'span 20 / span 20',
    }
      },
    },
    plugins: [],
  }