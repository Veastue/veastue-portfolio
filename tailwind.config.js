/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { borderRadius: '42% 44% 42% 47% / 36% 53% 38% 53%' },
          '50%': { borderRadius: '50% 37% 51% 37% / 43% 37% 53% 46%'},
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
