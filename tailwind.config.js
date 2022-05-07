module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      metropolis: [
        "Metropolis",
        "-apple-system",
        "Segoe UI",
        "Helvetica Neue",
        "Helvetica",
        "Roboto",
        "Arial",
        "sans-serif",
        "system-ui",
        "Apple Color Emoji",
        "Segoe UI Emoji",
      ],
    },
    extend: {
      colors: {
        darker: "hsl(235, 19%, 12%)",
        dark: "hsl(240, 15%, 17%)",
        lighter: "hsl(0, 0%, 100%)",
        light: "hsl(0, 0%, 64%)",
        inverse: "hsl(235, 19%, 12%)",
        primary: "hsl(240, 67%, 64%)",
        "primary-lighter": "hsl(240, 25%, 64%)",
        danger: "hsl(345, 86%, 56%)",
        "danger-lighter": "hsl(345, 86%, 80%)",
      },
    },
  },
  plugins: [],
};