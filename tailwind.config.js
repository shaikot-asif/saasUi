/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // important: true,
  theme: {
    extend: {
      colors: {
        dark: {
          textDarkLight: "#abadaf",
          backgroundDarkHard: "#171A1D",
          cardBackground: "#1D2025",
        },
        buttonColor: "#6023c0",
        hoverColor: "#7434DB",
        white: "#fff",
        purpleLight: "#a379e7",
      },
      fontFamily: { inter: ["Inter", "sans-serif"] },
    },
  },
};
