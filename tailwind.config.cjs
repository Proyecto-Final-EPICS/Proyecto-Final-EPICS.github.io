/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryPlayLearn: "#8195A2",
        secondaryPlayLearn: "#FCFC00",
        terciaryPlayLearn: "#6C90AA",
        primaryEyeland: "#0D9749",
        secondaryEyeland: "#9BE931",
      },
      plugins: [],
    }
  }
}
