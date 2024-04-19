import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				areda: {
					primary: '#eda011',
					secondary: '#42302e'
				}
			},
			fontFamily: {
				snas: ["Barlow", 'sans-serif', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
