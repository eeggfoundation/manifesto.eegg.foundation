/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
        },
		extend: {
			// ...
		},
		fontFamily: {
            sans: ['IBM Plex Sans', 'sans-serif'],
        },
        fontWeight: {
            normal: 400,
            bold: 600,
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
