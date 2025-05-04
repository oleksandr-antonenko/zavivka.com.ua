import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      banner: ["KyivTypeSansRegular", "sans-serif"],
      primary: ["var(--font-ubuntu)"],
      secondary: ["var(--font-inter)"],
      mali: ["var(--font-mali)"],
    },
    screens: {
      extraSm: "200px",
      sm: "375px",
      md: "768px",
      xl: "1380px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        grey: "#A4A4A4",
        white: "#FBFBFB",
        "white-light": "#EAEAEA",
        black: "#212121",
        "grey-light": "#EAEAEA",
        yellow: "#FFEE95",
        "yellow-border": "#D7A908",
        orange: "#D7A908",
        "grey-middle": "#4E4E4E",
        "common-background": "#343434",
      },
      borderRadius: {
        DEFAULT: "40px",
      },
      backgroundImage: {
        backgroundForm: "url('/images/fun.jpg')",
        backgroundFormMen: "url('/images/menlong.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
