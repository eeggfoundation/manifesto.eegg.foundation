/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './public/**/*.{html,js}',
    ],
    theme: {
        container: {
            center: true,
        },
		extend: {
			// ...
		},
		fontFamily: {
			sans: ['Barlow', 'sans-serif'],
		},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
