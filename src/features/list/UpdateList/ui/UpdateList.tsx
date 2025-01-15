import { ValidatedTextInput } from '@/shared/ui';

import { useUpdateList } from '@/features/list/UpdateList/model/useUpdateList';
import { useContext } from 'react';
import { BoardContext } from '@/widgets/Board/model';

interface UpdateListProps {
    exitEditing: () => void;
    title: string;
    listId: number;
}

export const UpdateList = ({ exitEditing, title, listId }: UpdateListProps) => {
    const { boardId, refreshBoard } = useContext(BoardContext);

    const {
        title: currentTitle,
        errorMessage,
        handleTitleChange,
        handleSubmit,
    } = useUpdateList({
        initialTitle: title,
        boardId,
        listId,
        refreshBoard,
        exitEditing,
    });

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <ValidatedTextInput
            value={currentTitle}
            error={errorMessage}
            onChange={handleTitleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleSubmit}
            placeholder={'Enter new list title'}
        />
    );
};
