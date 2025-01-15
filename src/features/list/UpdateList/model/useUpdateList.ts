import { useState } from 'react';

import { useListApi } from '@/entities/List';
import { defaultValidateTitle, logError } from '@/shared/lib';

interface UseUpdateListProps {
    initialTitle: string;
    boardId: number;
    listId: number;
    refreshBoard: () => void;
    exitEditing: () => void;
}

export const useUpdateList = ({ initialTitle, boardId, listId, refreshBoard, exitEditing }: UseUpdateListProps) => {
    const [title, setTitle] = useState(initialTitle);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { updateList } = useListApi();

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const error = defaultValidateTitle(value);
        setErrorMessage(error);
        setTitle(value);
    };

    const updateListTitle = async (newTitle: string) => {
        if (newTitle === initialTitle) {
            exitEditing();
            return;
        }

        try {
            const response = await updateList(boardId, listId, { title: newTitle });
            if (response.result === 'Updated') {
                refreshBoard();
                exitEditing();
            } else {
                setErrorMessage('Failed to update the list');
            }
        } catch (error) {
            logError(error, 'Error during list updating');
            setErrorMessage('Error updating list');
        }
    };

    const handleSubmit = () => {
        const trimmedTitle = title.trim();
        if (!defaultValidateTitle(trimmedTitle)) {
            updateListTitle(trimmedTitle);
        }
    };

    return {
        title,
        errorMessage,
        handleTitleChange,
        handleSubmit,
    };
};
