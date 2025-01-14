import { ValidatedTextInput } from '@/shared/ui';

import { useUpdateList } from '@/features/list/UpdateList/model/useUpdateList';

interface UpdateListProps {
    exitEditing: () => void;
    title: string;
    boardId: number;
    listId: number;
    onListEditing: () => void;
}

export const UpdateList = ({ exitEditing, title, boardId, listId, onListEditing }: UpdateListProps) => {
    const {
        title: currentTitle,
        errorMessage,
        handleTitleChange,
        handleSubmit,
    } = useUpdateList({
        initialTitle: title,
        boardId,
        listId,
        onListEditing,
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
