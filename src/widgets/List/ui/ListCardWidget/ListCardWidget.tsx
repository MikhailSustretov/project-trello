import { useState } from 'react';

import { IListCard } from '@/entities/List';
import { UpdateCard } from '@/features/card';
import { CardWidget } from '@/widgets/Card/ui/CardWidget';

interface ListCardWidgetProps {
    card: IListCard;
    listId: number;
}

export const ListCardWidget = ({ card, listId }: ListCardWidgetProps) => {
    const [isCardEditing, setIsCardEditing] = useState(false);

    const handleTitleClick = () => {
        if (!isCardEditing) {
            setIsCardEditing(true);
        }
    };

    const exitCardEditing = () => {
        setIsCardEditing(false);
    };

    return (
        <div>
            <CardWidget card={card} onClick={handleTitleClick} />
            {isCardEditing && <UpdateCard card={card} listId={listId} exitCardEditing={exitCardEditing} />}
        </div>
    );
};
