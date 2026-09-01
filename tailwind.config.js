/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: '#EAE5DB',
        bone: '#F8F6F0',
        ink: '#0F172A',
        stone: '#64748B',
        dusk: '#1E293B',
        gold: '#D97706',
        'gold-deep': '#B45309',
        safari: {
          orange: '#EA580C',
          'orange-hover': '#C2410C',
          olive: '#3F4D38',
          'olive-dark': '#2B3526',
          muted: '#64748B',
          card: '#FFFFFF',
          input: '#F1F5F9',
          dark: '#111827',
        }
      },
      fontFamily: {
        display: ['"DM Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', '"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    }
  },
  plugins: [],
}
