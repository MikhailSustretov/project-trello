/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                progress: {
                    '0%': { transform: 'scaleX(0)' },
                    '50%': { transform: 'scaleX(0.5)' },
                    '100%': { transform: 'scaleX(1)' },
                },
            },
            animation: {
                progress: 'progress 1s infinite linear',
            },
        },
    },
    plugins: [],
};
