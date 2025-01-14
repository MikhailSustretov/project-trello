import { useState } from 'react';

import { ListCard } from '@/entities/List';
import { IListCard } from '@/entities/List';
import { UpdateCard } from '@/features/card';

interface ListCardWidgetProps {
    card: IListCard;
    boardId: number;
    listId: number;
    onUpdate: () => void;
}

export const ListCardWidget = ({ card, boardId, listId, onUpdate }: ListCardWidgetProps) => {
    const [isCardEditing, setIsCardEditing] = useState(false);

    const handleTitleClick = () => {
        if (!isCardEditing) {
            setIsCardEditing(true);
        }
    };

    const onCardUpdate = () => {
        onUpdate();
        setIsCardEditing(false);
    };

    const exitCardEditing = () => {
        setIsCardEditing(false);
    };

    return (
        <div>
            <ListCard card={card} onClick={handleTitleClick} />
            {isCardEditing && (
                <UpdateCard
                    card={card}
                    boardId={boardId}
                    listId={listId}
                    onCardUpdating={onCardUpdate}
                    exitCardEditing={exitCardEditing}
                />
            )}
        </div>
    );
};
