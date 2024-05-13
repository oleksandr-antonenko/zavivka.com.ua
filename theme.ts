// /theme.ts
"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D7A908", // Основной акцентный цвет
    },
    secondary: {
      main: "#FFEE95", // Вторичный акцентный цвет
    },
    background: {
      default: "#343434", // Основной фон
      paper: "#343434", // Фон элементов UI, таких как карточки, бумага и т.д.
    },
    text: {
      primary: "#FBFBFB", // Основной цвет текста
      secondary: "#EAEAEA", // Вторичный цвет текста
    },
  },
  typography: {
    fontFamily: ["Inter", "Ubuntu", "KyivTypeSansRegular", "sans-serif"].join(
      ",",
    ),
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none", // Отключение box-shadow для всех аккордеонов
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'KyivTypeSansRegular';
          src: url('/fonts/KyivTypeSansRegular.woff2') format('woff2'),
               url('/fonts/KyivTypeSansRegular.woff') format('woff');
        }
        @font-face {
          font-family: 'KyivTypeSansBold';
          src: url('/fonts/KyivTypeSansBold.woff2') format('woff2'),
               url('/fonts/KyivTypeSansBold.woff') format('woff');
        }
        @font-face {
          font-family: 'KyivTypeSansRegularThinMidline';
          src: url('/fonts/KyivTypeSansRegularThinMidline.woff2') format('woff2'),
               url('/fonts/KyivTypeSansRegularThinMidline.woff') format('woff');
        }
      `,
    },
  },
});
