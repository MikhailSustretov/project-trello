import { useState } from 'react';

import { useListApi } from '@/entities/List';
import { IListCard } from '@/entities/List';
import { defaultValidateTitle, logError } from '@/shared/lib';

interface UseUpdateCardProps {
    card: IListCard;
    boardId: number;
    listId: number;
    onCardUpdating: () => void;
    exitCardEditing: () => void;
}

export const useUpdateCard = ({ card, boardId, listId, onCardUpdating, exitCardEditing }: UseUpdateCardProps) => {
    const [title, setTitle] = useState(card.title);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { updateListCard } = useListApi();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const error = defaultValidateTitle(value);
        setErrorMessage(error);
        setTitle(value);
    };

    const handleUpdateCard = async (newTitle: string) => {
        if (newTitle === card.title) {
            exitCardEditing();
            return;
        }

        try {
            const result = await updateListCard(boardId, card.id, {
                title: newTitle,
                list_id: listId,
            });

            if (result.result === 'Updated') {
                onCardUpdating();
                exitCardEditing();
            } else {
                setErrorMessage('Failed to update the card');
            }
        } catch (error) {
            logError(error, 'Error occurred during card updating');
            setErrorMessage('Error updating card');
        }
    };

    const handleSubmit = () => {
        const trimmedTitle = title.trim();
        if (!defaultValidateTitle(trimmedTitle)) {
            handleUpdateCard(trimmedTitle);
        }
    };

    return {
        title,
        errorMessage,
        handleInputChange,
        handleSubmit,
    };
};
