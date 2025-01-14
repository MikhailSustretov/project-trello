import { useState } from 'react';

import { useBoardApi, CreationResponse } from '@/entities/Board';
import { defaultValidateTitle, logError } from '@/shared/lib';

export const useUpdateBoardTitle = (
    boardId: number,
    initialTitle: string,
    onUpdate: () => void,
    exitTitleEditing: () => void
) => {
    const [title, setTitle] = useState(initialTitle);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { updateBoard } = useBoardApi();

    const updateBoardTitle = (newTitle: string) => {
        return updateBoard(boardId, { title: newTitle })
            .then((response: CreationResponse) => {
                if (response.result === 'Updated') {
                    onUpdate();
                } else {
                    console.error('Failed to update the board.');
                }
            })
            .catch((error) => logError(error, 'Error during board updating'));
    };

    const handleTitleSubmit = () => {
        const trimmedTitle = title.trim();
        if (!defaultValidateTitle(trimmedTitle)) {
            if (trimmedTitle !== initialTitle) {
                updateBoardTitle(trimmedTitle);
            }
            exitTitleEditing();
        }
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const error = defaultValidateTitle(value);
        setErrorMessage(error);
        setTitle(value);
    };

    return {
        title,
        errorMessage,
        handleTitleChange,
        handleTitleSubmit,
    };
};
