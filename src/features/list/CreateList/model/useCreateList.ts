import { useState } from 'react';

import { useListApi } from '@/entities/List';
import { defaultValidateTitle, logError } from '@/shared/lib';

export function useCreateList(boardId: number, onListCreation: () => void) {
    const [isListCreating, setIsListCreating] = useState(false);
    const [listTitle, setListTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { createNewList } = useListApi();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const error = defaultValidateTitle(value);
        setErrorMessage(error);
        setListTitle(value);
    };

    const openListCreation = () => {
        setIsListCreating(true);
    };

    const exitListCreation = () => {
        setIsListCreating(false);
        setErrorMessage(null);
        setListTitle('');
    };

    const handleListCreation = async () => {
        const trimmedTitle = listTitle.trim();
        if (!defaultValidateTitle(trimmedTitle)) {
            try {
                const result = await createNewList(boardId, {
                    title: trimmedTitle,
                    position: 1,
                });

                if (result.result === 'Created') {
                    onListCreation();
                    exitListCreation();
                } else {
                    setErrorMessage('Failed to create the list');
                }
            } catch (error) {
                logError(error, 'Error during list creation');
                setErrorMessage('Error creating list');
            }
        }
    };

    return {
        isListCreating,
        listTitle,
        errorMessage,
        handleInputChange,
        openListCreation,
        exitListCreation,
        handleListCreation,
    };
}
