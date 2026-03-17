/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'aeon-red': '#E60012',
        'aeon-red-dark': '#C4000F',
        'aeon-bg': '#F8F9FA',
        'aeon-card': '#FFFFFF',
        'aeon-text': '#1A1A2E',
        'aeon-muted': '#6B7280',
        'aeon-border': '#E5E7EB',
        'aeon-success': '#10B981',
        'aeon-warning': '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
