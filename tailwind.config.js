/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        riad_background: "var(--riad-background)",
        riad_primary: "var(--riad-primary)",
        riad_secondary: "var(--riad-secondary)",
      },
      fontFamily: {
        robotoThin: ["RobotoThin", "sans-serif"],
        tntSport: ["TNTSportsSerif", "serif"],
      },
      animation: {
        "slide-left": "slideLeft 2s ease-in-out forwards",
        "slide-right": "slideRight 2s ease-in-out forwards",
        "scale-3d": "scale3D 1.8s ease-in-out forwards",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        scale3D: {
          "0%": { transform: "scale(1) rotateX(0deg)" },
          "100%": { transform: "scale(1.8) rotateX(0deg)" },
        },
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        3000: "3000ms",
        5000: "5000ms",
      },
      height: {
        screen: ["100dvh"], // overrides h-screen
      },
    },
  },
  plugins: [],
};
