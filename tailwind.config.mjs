import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        areda: {
          primary: '#eda011',
          secondary: '#42302e',
        },
        lazaro: {
          DEFAULT: '#07418C',
          dark: '#1E2D59',
          backgound: '#ACEBF2',
          foreground: '#fff',
          'foreground-contrast': '#000',
          'background-contrast': '#fff',
          'background-contrast-2': '#fff',
          'background-contrast-3': '##1E2D59',
          // add secondary and tertiary colors
          secondary: '#13C9F2',
          'secondary-foreground': '#000',
          tertiary: '#04D976',
          'tertiary-foreground': '#000',
          // add accent colors
          accent: '#F2F2F2',
          'accent-foreground': '#000',
          // add border colors
          border: '#E0E0E0',
          'border-contrast': '#000',
          // add ring colors
          ring: '#E0E0E0',
          'ring-contrast': '#000',
        },
      },
      fontFamily: {
        snas: ['Barlow', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
