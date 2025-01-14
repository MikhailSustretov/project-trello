export const toastConfig = {
    position: 'bottom-right' as const,
    toastOptions: {
        success: {
            duration: 2000,
            style: {
                background: 'rgb(5 150 105)',
                color: '#fff',
                padding: '16px',
                fontSize: '16px',
                maxWidth: '400px',
                minWidth: '300px',
            },
        },
        error: {
            duration: 3000,
            style: {
                background: 'rgb(220 38 38)',
                color: '#fff',
                padding: '16px',
                fontSize: '16px',
                maxWidth: '400px',
                minWidth: '300px',
            },
        },
    },
};
