/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'nu-purple': '#4E2A84',
				'nu-light-purple': '#E4E0EE',
				'nu-dark-purple': '#401F68',
			}
		},
	},
	plugins: [],
}
