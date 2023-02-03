const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1312px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      container: {
        padding: "1rem",
        center: true,
        screens: { sm: "576px", md: "768px", lg: "984px", xl: "1312px" },
      },
      fontFamily: {
        sans: ["var(--IBMPlexSans-font)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
