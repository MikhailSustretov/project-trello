import { useState } from 'react';

import { useBoardApi } from '@/entities/Board';
import { logError, defaultValidateTitle } from '@/shared/lib';

interface UseCreateBoardReturn {
    title: string;
    errorMessage: string | null;
    handleTitleChange: (value: string) => void;
    createBoard: () => Promise<void>;
    resetForm: () => void;
    isCreateDisabled: boolean;
}

/**
 * Hook for managing board creation form state and logic
 * @param onSuccess - Callback function to be called after successful board creation
 * @param onClose - Callback function to be called after closing the modal
 * @returns Object containing form state and handlers
 */
export const useCreateBoard = (onSuccess: () => void, onClose: () => void): UseCreateBoardReturn => {
    const [title, setTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { createNewBoard } = useBoardApi();

    const handleTitleChange = (value: string) => {
        const error = defaultValidateTitle(value);
        setErrorMessage(error);
        setTitle(value);
    };

    const createBoard = async () => {
        try {
            const response = await createNewBoard({ title });
            if (response.result === 'Created') {
                setErrorMessage(null);
                onSuccess();
                onClose();
            } else {
                console.error('Failed to create the board.');
            }
        } catch (error) {
            logError(error, 'Error during board creation');
        }
    };

    const resetForm = () => {
        setTitle('');
        setErrorMessage('');
    };

    return {
        title,
        errorMessage,
        handleTitleChange,
        createBoard,
        resetForm,
        isCreateDisabled: title.trim() === '' || errorMessage !== null,
    };
};
