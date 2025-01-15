import React, { useContext } from 'react';

import { ValidatedTextInput } from '@/shared/ui';

import { useUpdateBoardTitle } from '@/features/board/UpdateBoardTitle/model/useUpdateBoardTitle';
import { BoardContext } from '@/widgets/Board/model';

interface UpdateBoardTitleProps {
    title: string;
    exitTitleEditing: () => void;
}

export const UpdateBoardTitle = ({ title: initialTitle, exitTitleEditing }: UpdateBoardTitleProps) => {
    const { boardId, refreshBoard } = useContext(BoardContext);

    const { title, errorMessage, handleTitleChange, handleTitleSubmit } = useUpdateBoardTitle(
        boardId,
        initialTitle,
        refreshBoard,
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
