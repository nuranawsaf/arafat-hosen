module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: "rgba(0, 0, 0, 0.45)",
        primary: "#1267E4",
        secondary: "#FF8717",
        tertiary: "#ED1C3D",
        white_orange: "#F5F2EF",
        black: "#07031F",
      },
      fontFamily: {
        poppins:'Poppins, sans-serif'
      },
    },
  },
  variants: {},
  plugins: [],
};
