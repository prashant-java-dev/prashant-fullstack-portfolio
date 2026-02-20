/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"], // Scan all JS/JSX files for Tailwind classes
  darkMode: 'class',                 // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#E63946",         // Professional red
        'primary-dark': "#B0002A",  // Darker red for hover/active
        secondary: "#1A1A1A",       // Deep black
        'secondary-light': "#333333"// Slightly lighter black/gray
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], // Clean modern font
      },
    },
  },
  plugins: [],
};
