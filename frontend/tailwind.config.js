/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Zinc is already neutral gray in Tailwind, no need to override
      // Just use zinc- classes instead of slate- classes in components
    },
  },
  plugins: [],
}
