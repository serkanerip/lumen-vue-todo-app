module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: "#4dc0b5",
        white: "#fff",
        green: "#38c172",
        grey: "#9babb4",
        red: "#e3342f",
      },
    },
    colors: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
