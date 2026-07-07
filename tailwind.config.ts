import type { Config } from 'tailwindcss'

const config: Config = {
  // Enables light/dark mode toggling via the 'dark' class on the root element
  darkMode: 'class', 
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian & Emerald Palette
        obsidian: {
          DEFAULT: '#0A0A0A',
          deep: '#0B0E14',
          lighter: '#111111',
        },
        emerald: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
      },
    },
  },
  plugins: [],
}
export default config