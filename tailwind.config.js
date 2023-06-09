/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      boxShadow: {
        "2sm": "0px 5px 15px rgba(59,2,132, 0.35)",
      },
      hover: {
        normal: "transform: scale(1.05)",
      },
      colors: {
        white: "#f5f5f5",
        secondaryColor: "#5db1a2",
        overlaycolor: "#1c0140",
        lightGrey: "#e8e6ec",
        tertiaryColor: "#3b0284",
        primaryColor: "#dfdfdf",
        grey: "#38333E",
        darkPurple: "#3b0284",
        lightPurple: "#DFDFDF",
      },
      screens: {
        xxxs: "280px",
        xxs: "320px",
        xs: "480px",
        xsm: "600px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
