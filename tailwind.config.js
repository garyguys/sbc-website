/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Seniors Professional Network brand ===
        // Sampled directly from the SPN logo artwork.
        // Olive  #4E5111 -> wreath, "SENIORS" wordmark, left figure
        // Terra  #A35E2B -> arc, "NETWORK", right figure
        // Ink    #0A0A0A -> "PROFESSIONAL", centre figure
        olive: {
          50: '#F6F7EC',
          100: '#EBEDD4',
          200: '#D8DCAB',
          300: '#BEC47B',
          400: '#A2AB50',
          500: '#838C36',
          600: '#677026',
          700: '#4E5111', // brand primary
          800: '#3E4110',
          900: '#33350F',
          950: '#1C1D07',
        },
        terra: {
          50: '#FBF4EE',
          100: '#F5E5D6',
          200: '#E9C8AC',
          300: '#DAA47B',
          400: '#C68150',
          500: '#A35E2B', // brand accent
          600: '#8B4E23',
          700: '#6E3D1C',
          800: '#562F16',
          900: '#402311',
        },
        ink: {
          50: '#FAFAF7',
          100: '#F3F3ED',
          200: '#E6E5DB',
          300: '#D2D0C2',
          400: '#94927F', // decorative icons / borders only — never body text
          500: '#747260', // AA on white (4.86) and parchment (4.78)
          600: '#5C5A4E',
          700: '#45443A',
          800: '#2B2A23',
          900: '#16150F',
          950: '#0A0A0A',
        },
        parchment: '#FDFDFC', // logo background
      },
      fontFamily: {
        // Serif display echoes the classical roman caps of the logo wordmark.
        serif: ['"Source Serif 4 Variable"', 'Georgia', 'serif'],
        // Humanist sans for body copy — chosen for legibility at large sizes.
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        // Handwritten annotations ("Genuinely free — we are not a lead broker").
        hand: ['"Caveat Variable"', 'cursive'],
      },
      fontSize: {
        // Base scale nudged up throughout: the primary audience is seniors
        // and the adult children helping them. 17px body, not 16px.
        'base': ['1.0625rem', { lineHeight: '1.7' }],
        'lg': ['1.1875rem', { lineHeight: '1.7' }],
        'xl': ['1.3125rem', { lineHeight: '1.6' }],
      },
      maxWidth: {
        'prose-comfortable': '68ch',
      },
      boxShadow: {
        // The "paper cut-out" look: a solid ink offset instead of a blur.
        // Cards use hard, buttons and chips use hard-sm; hover nudges the
        // element into its own shadow (see .card-press in index.css).
        'hard': '5px 5px 0 0 #16150F',
        'hard-sm': '3px 3px 0 0 #16150F',
        'lift': '0 12px 40px rgba(78,81,17,0.14)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
