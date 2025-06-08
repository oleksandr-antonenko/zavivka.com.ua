import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      banner: ['KyivTypeSansRegular', 'sans-serif'],
      bannerBold: ['KyivTypeSansBold', 'sans-serif'],
      primary: ['var(--font-ubuntu)'],
      secondary: ['var(--font-inter)'],
      mali: ['var(--font-mali)'],
    },
    screens: {
      extraSm: '200px',
      sm: '375px',
      smMax: '480px',
      md: '768px',
      lg: '1024px',
      xlOne: '1281px',
      xl: '1380px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        grey: '#A4A4A4',
        white: '#FBFBFB',
        'white-light': '#EAEAEA',
        black: '#212121',
        'grey-light': '#EAEAEA',
        yellow: '#FFEE95',
        'yellow-border': '#D7A908',
        orange: '#D7A908',
        'grey-middle': '#4E4E4E',
        'common-background': '#343434',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        DEFAULT: '40px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        backgroundForm: "url('/fom-banner.webp')",
        backgroundFormMen: "url('/images/menlong.jpg')",
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'scaleY(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scaleY(1)',
            opacity: '1',
          },
        },
        slideUp: {
          '0%': {
            transform: 'scaleY(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scaleY(0)',
            opacity: '0',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out forwards',
        slideUp: 'slideUp 0.3s ease-out forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      transformOrigin: {
        top: 'top',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
