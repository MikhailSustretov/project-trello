import { CreateCard } from '@/features/card';

import { ListCardWidget } from '@/widgets/List/ui/ListCardWidget/ListCardWidget';

interface ListCardsProps {
    cards: any[];
    listId: number;
}

export const ListCards = ({ cards, listId }: ListCardsProps) => {
    return (
        <>
            {cards.map((card) => (
                <ListCardWidget key={card.id} card={card} listId={listId} />
            ))}
            <CreateCard listId={listId} />
        </>
    );
};
