/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 0%)",
        secondary: "hsl(0, 0%, 11%)",
        other: "hsl(0, 0%, 61%)",
        tag: "hsl(0, 0%, 55%)",
        accent: {
          DEFAULT: "hsl(160, 100%, 70%)",
          other: "hsl(166, 100%, 80%)",
        },
        main: "hsl(0, 0%, 95%)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Fira Sans'",
          "'Segoe UI'",
          "'Roboto'",
          "'Oxygen'",
          "'Ubuntu'",
          "'Cantarell'",
          "'Fira Sans'",
          "'Droid Sans'",
          "'Helvetica Neue'",
          "sans-serif",
        ],
      },
      keyframes: {
        "bounce-in-left": {
          "0%": { transform: "translateX(-600px)", opacity: "0", animationTimingFunction: "ease-in" },
          "38%": { transform: "translateX(0)", opacity: "1", animationTimingFunction: "ease-out" },
          "55%": { transform: "translateX(-68px)", animationTimingFunction: "ease-in" },
          "72%": { transform: "translateX(0)", animationTimingFunction: "ease-out" },
          "81%": { transform: "translateX(-28px)", animationTimingFunction: "ease-in" },
          "90%": { transform: "translateX(0)", animationTimingFunction: "ease-out" },
          "95%": { transform: "translateX(-8px)", animationTimingFunction: "ease-in" },
          "100%": { transform: "translateX(0)", animationTimingFunction: "ease-out" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-1000px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "bounce-in-left": "bounce-in-left 1.1s both 0.3s",
        "fade-in": "fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s both",
        "slide-in-top": "slide-in-top 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both",
      },
    },
  },
  plugins: [],
}
