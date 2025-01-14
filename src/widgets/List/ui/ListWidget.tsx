import { useState } from 'react';

import { ListCards } from './ListCards/ListCards';
import { ListTitle } from './ListTitle/ListTitle';

interface ListWidgetProps {
    list: any;
    boardId: number;
    onUpdate: () => void;
    className?: string;
}

export const ListWidget = ({ list, boardId, onUpdate, className }: ListWidgetProps) => {
    const [isListEditing, setIsListEditing] = useState(false);

    return (
        <div className={`${className} w-full h-full`}>
            <ListTitle
                title={list.title}
                isEditing={isListEditing}
                boardId={boardId}
                listId={list.id}
                onEditStart={() => setIsListEditing(true)}
                onEditEnd={() => setIsListEditing(false)}
                onUpdate={onUpdate}
            />
            <div className={'mt-5'}>
                <ListCards cards={list.cards} boardId={boardId} listId={list.id} onUpdate={onUpdate} />
            </div>
        </div>
    );
};
