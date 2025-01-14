import { CreateCard } from '@/features/card';

import { ListCardWidget } from '@/widgets/List/ui/ListCardWidget/ListCardWidget';

interface ListCardsProps {
    cards: any[];
    boardId: number;
    listId: number;
    onUpdate: () => void;
}

export const ListCards = ({ cards, boardId, listId, onUpdate }: ListCardsProps) => {
    return (
        <>
            {cards.map((card) => (
                <ListCardWidget key={card.id} card={card} boardId={boardId} listId={listId} onUpdate={onUpdate} />
            ))}
            <CreateCard boardId={boardId} listId={listId} onUpdate={onUpdate} />
        </>
    );
};
