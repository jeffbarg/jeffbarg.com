module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["GothamPro", "Helvetica", "Arial", "sans-serif"]
      },
      spacing: {
        "72": "20rem",
        "96": "24rem",
        "128": "32rem"
      }
    }
  },
  variants: {},
  plugins: [require("tailwindcss-transitions")()]
};
