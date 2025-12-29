/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1A2E26', // Deep Forest Green
                    dark: '#11221C',
                    light: '#2C4A3E',
                    // Dark mode variants can be handled via utilities or distinct vars if needed
                },
                secondary: {
                    DEFAULT: '#101828', // Midnight Navy
                    light: '#1D2939',
                },
                accent: {
                    gold: '#C5A065', // Muted Gold
                    sage: '#9EB3A8', // Sage
                    coral: '#F97316',
                },
                background: {
                    DEFAULT: '#FFFFFF',
                    off: '#F9FAFB', // Very light grey
                    dark: '#020617', // slate-950 for dark mode background
                    card: '#1E293B', // slate-800 for dark mode cards
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1.5rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1440px',
                },
            },
            borderRadius: {
                'xl': '12px',
                '2xl': '16px',
                '3xl': '24px',
            }
        },
    },
    plugins: [],
}
