/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Neumorphic colors
        'neumorphic-bg': '#e0e0e0',
        'neumorphic-shadow': '#bebebe',
        'neumorphic-highlight': '#ffffff',
        // Glassmorphic colors
        'glass-bg': 'rgba(255, 255, 255, 0.15)',
      },
      boxShadow: {
        // Neumorphic shadows
        'neumorphic': '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
      },
      backdropBlur: {
        'glass': '10px',
      },
      screens: {
        // Ensure mobile-first breakpoints
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}