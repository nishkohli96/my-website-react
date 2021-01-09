module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.js', './public/**/*.html'],
    },
    darkMode: false,
    theme: {
        extend: {
            colors: {
                headercol: '#1F1F1F',
                bodycol: '#2B2B2B',
                cocowhite: '#F7F6F3',
            },
            screens: {
                xs: '300px',
                mobile: { min: '380px', max: '550px' },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
