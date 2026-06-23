/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#050505",
        accentPurple: "#8B5CF6",
        accentViolet: "#A855F7",
        grayText: "#9CA3AF",
        glassBg: "rgba(10, 10, 10, 0.55)",
        glassBorder: "rgba(255, 255, 255, 0.08)",
        glassBorderActive: "rgba(139, 92, 246, 0.3)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'purple-glow': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'violet-glow': '0 0 25px -5px rgba(168, 85, 247, 0.35)',
      }
    },
  },
  plugins: [],
}
