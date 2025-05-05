/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	// darkMode:'class',
	theme: {
		extend: {
			colors:{
				'palete-blue-dark':"#042653",
				'palete-blue-light':"#327ED5",
				'palete-white-blue':"#BEC8DA",
				'palete-white':"#FFFF",
			},
			
		},
	},
	plugins: [],
}
