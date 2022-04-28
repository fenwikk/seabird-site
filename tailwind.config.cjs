module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "4.5rem"
            },
            fontFamily: {
                "mulish": ['Mulish', 'sans-serif'],
                "oswald": ['Oswald', 'sans-serif'],
                "roboto": ['Roboto', 'sans-serif'],
                "brush": ['Water Brush', 'cursive'],
            },
            backgroundImage: {
                'hero': `url('/src/lib/assets/hero.webp')`,
            },
            colors: {
                'sb-dark-blue': "#132E40",
                'sb-gray': "#CED4D3",
                'sb-pink': "#CB807D",
                'sb-black': "#261F1E",
                'sb-light-blue': "#2997A7"
            }
        },
    },
    plugins: [],
}
