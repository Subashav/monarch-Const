/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      colors: {
        primary: {
          DEFAULT: '#09637E', // Dark Teal
          dark: '#074d61',
          light: '#1480a3',
          pale: '#d1e6ec',    // Very light teal
          extra: '#eef6f8',   // Softest teal
        },
        navy: {
          DEFAULT: '#09637E',
          800: '#074d61',
          900: '#053a49',
        },
        background: '#FFFFFF',
        text: {
          main: '#09637E',
          light: '#1480a3',
        },
        success: '#2ECC71',
        warning: '#F59E0B',
        error: '#EF4444',
      },
    },
  },
  plugins: [],
}
