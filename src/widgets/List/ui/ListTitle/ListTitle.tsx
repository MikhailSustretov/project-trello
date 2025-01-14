import { UpdateList } from '@/features/list';

interface ListTitleProps {
    title: string;
    isEditing: boolean;
    boardId: number;
    listId: number;
    onEditStart: () => void;
    onEditEnd: () => void;
    onUpdate: () => void;
}

export const ListTitle = ({ title, isEditing, boardId, listId, onEditStart, onEditEnd, onUpdate }: ListTitleProps) => {
    if (!isEditing) {
        return (
            <div className="text-black rounded text-2xl text-center truncate" onClick={onEditStart}>
                {title}
            </div>
        );
    }

    return (
        <UpdateList title={title} exitEditing={onEditEnd} boardId={boardId} listId={listId} onListEditing={onUpdate} />
    );
};
