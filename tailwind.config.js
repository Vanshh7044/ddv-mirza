/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: '#EDE7DA',
        bone: '#F8F5EE',
        ink: '#191C22',
        stone: '#8A8272',
        dusk: '#232A3B',
        gold: '#B3823A',
        'gold-deep': '#94692A',
        safari: {
          orange: '#D96B27',
          'orange-hover': '#C35B1A',
          olive: '#4F583E',
          'olive-dark': '#3F4632',
          muted: '#727965',
          card: '#FAF9F8',
          input: '#EDE8E1',
          dark: '#1E2316',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Fraunces', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Fraunces', 'serif'],
        body: ['"Plus Jakarta Sans"', '"Public Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Public Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    }
  },
  plugins: [],
}
