/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'animate-slideInRight',
    'animate-slideInLeft',
  ],
  theme: {
    extend: {

      colors: {
      'theme_color': "#ff5722",
      'theme_text': "#fff",
      'footer_bg': "#120902",
      'text-gray': "#999",
      'accordion-bg': "#f2f3f6",
      'heading': '#000000b0',
      'map-bg': '#f5f5f5'
      },
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        slideInRight: 'slideInRight 0.5s ease-out',
        slideInLeft: 'slideInLeft 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

