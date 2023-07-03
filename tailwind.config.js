/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "#000",
                secondary: "#c00",
                tertiary: '#38383f'
            },
        },
    },
    plugins: [],
};
