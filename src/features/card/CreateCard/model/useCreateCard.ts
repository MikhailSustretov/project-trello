import { useState } from 'react';

import { useListApi } from '@/entities/List';
import { defaultValidateTitle, logError } from '@/shared/lib';

interface UseCreateCardProps {
    boardId: number;
    listId: number;
    onUpdate: () => void;
}

export const useCreateCard = ({ boardId, listId, onUpdate }: UseCreateCardProps) => {
    const [isCardCreating, setIsCardCreating] = useState(false);
    const [title, setTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { addCardToList } = useListApi();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const error = defaultValidateTitle(value);
        setErrorMessage(error);
        setTitle(value);
    };

    const handleCreateCard = async (cardTitle: string) => {
        try {
            const result = await addCardToList(boardId, { title: cardTitle, list_id: listId, position: 0 });
            if (result.result === 'Created') {
                onUpdate();
                exitCardCreation();
            } else {
                setErrorMessage('Failed to create the card');
            }
        } catch (error) {
            logError(error, 'Error during card creation');
            setErrorMessage('Error creating card');
        }
    };

    const handleSubmit = () => {
        const trimmedTitle = title.trim();
        if (!defaultValidateTitle(trimmedTitle)) {
            handleCreateCard(trimmedTitle);
        }
    };

    const openCardCreation = () => {
        setIsCardCreating(true);
    };

    const exitCardCreation = () => {
        setIsCardCreating(false);
        setTitle('');
        setErrorMessage(null);
    };

    return {
        isCardCreating,
        title,
        errorMessage,
        handleInputChange,
        handleSubmit,
        openCardCreation,
        exitCardCreation,
    };
};
