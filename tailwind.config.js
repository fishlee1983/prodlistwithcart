/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    
    colors: {
      primary: {
        Red: "hsl(14, 86%, 42%)",
        Green: "hsl(159, 69%, 38%)"
      },
      rose: {
        50: "hsl(20, 50%, 98%)",
        100: "hsl(13, 31%, 94%)",
        300: "hsl(14, 25%, 72%)",
        400: "hsl(7, 20%, 60%)",
        500: "hsl(12, 20%, 44%)",
        900: "hsl(14, 65%, 9%)"
      },
      black: "#000",
      white: "#fff"
    },
    fontFamily: {
      sans: ["Red Hat Text", "Helvetica", "Arial"]
    },
    media: {
      sm: "36rem",
      md: "48rem",
      lg: "64rem",
      xl: "68.78rem",
      "2xl": "90rem"
    },

    extend: {},
  },
  plugins: [],
}

