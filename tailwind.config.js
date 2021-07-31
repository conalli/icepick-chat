module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ip-black": "#0B0C10",
        "ip-darkgrey": "#1F2833",
        "ip-grey": "#C5C6C7",
        "ip-primary": "#66FCF1",
        "ip-secondary": "#45A29E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
