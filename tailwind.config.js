const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
