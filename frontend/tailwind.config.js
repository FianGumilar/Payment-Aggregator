/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fffffe",
        backgroundSecondary: "#F5F7F9",
        parargaph: "#2b2c34",
        button: "#6246ea",
        highlight: "#3da9fc",
        greyBorder: "#cdd0d1",
        inputText: "#484849",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
