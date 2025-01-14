import React from 'react';

import { ValidatedTextInput } from '@/shared/ui';

import { useUpdateBoardTitle } from '@/features/board/UpdateBoardTitle/model/useUpdateBoardTitle';

interface UpdateBoardTitleProps {
    boardId: number;
    title: string;
    onUpdate: () => void;
    exitTitleEditing: () => void;
}

export const UpdateBoardTitle: React.FC<UpdateBoardTitleProps> = ({
    boardId,
    title: initialTitle,
    onUpdate,
    exitTitleEditing,
}) => {
    const { title, errorMessage, handleTitleChange, handleTitleSubmit } = useUpdateBoardTitle(
        boardId,
        initialTitle,
        onUpdate,
        exitTitleEditing
    );

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleTitleSubmit();
        }
    };

    return (
        <ValidatedTextInput
            value={title}
            onChange={handleTitleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleTitleSubmit}
            placeholder={'Enter new title'}
            className={'text-black rounded'}
            error={errorMessage}
        />
    );
};
