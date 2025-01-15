import { UpdateList } from '@/features/list';

interface ListTitleProps {
    title: string;
    isEditing: boolean;
    listId: number;
    onEditStart: () => void;
    onEditEnd: () => void;
}

export const ListTitle = ({ title, isEditing, listId, onEditStart, onEditEnd }: ListTitleProps) => {
    if (!isEditing) {
        return (
            <div className="text-black rounded text-2xl text-center truncate" onClick={onEditStart}>
                {title}
            </div>
        );
    }

    return <UpdateList title={title} exitEditing={onEditEnd} listId={listId} />;
};
