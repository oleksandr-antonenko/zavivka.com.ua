import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Inter', 'KyivTypeSansRegular', 'Ubuntu', 'Mali', 'sans-serif'],
      },
     colors:{
       'common-background': '#343434',
     }
    },
  },
  plugins: [],
};
export default config;
