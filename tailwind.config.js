/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sbc-blue': '#1976D2',
        'sbc-blue-dark': '#0D47A1',
        'sbc-blue-light': '#E3F2FD',
        'sbc-accent': '#43A047',
        'sbc-white': '#FFFFFF',
        'sbc-off-white': '#F8F9FA',
        'sbc-gray-50': '#FAFAFA',
        'sbc-gray-100': '#F5F5F5',
        'sbc-gray-200': '#EEEEEE',
        'sbc-gray-600': '#757575',
        'sbc-gray-900': '#212121',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
