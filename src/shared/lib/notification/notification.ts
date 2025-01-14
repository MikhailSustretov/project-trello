import toast from 'react-hot-toast';

export const notification = {
    success: (message: string) => {
        toast.success(message, {
            icon: '✅',
        });
    },
    error: (message: string) => {
        toast.error(message, {
            icon: '❌',
        });
    },
};
