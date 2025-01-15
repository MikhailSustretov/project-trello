import { useState } from 'react';
import { ListCards } from './ListCards/ListCards';
import { ListTitle } from './ListTitle/ListTitle';
import { DeleteList } from '@/features/list/DeleteList';

interface ListWidgetProps {
    list: any;
    className?: string;
}

export const ListWidget = ({ list, className }: ListWidgetProps) => {
    const [isListEditing, setIsListEditing] = useState(false);

    return (
        <div className={`${className} w-full h-full relative`}>
            <DeleteList listId={list.id} className={'absolute top-0 right-2 cursor-pointer hover:text-red-500'} />
            <ListTitle
                title={list.title}
                isEditing={isListEditing}
                listId={list.id}
                onEditStart={() => setIsListEditing(true)}
                onEditEnd={() => setIsListEditing(false)}
            />
            <div className={'mt-5'}>
                <ListCards cards={list.cards} listId={list.id} />
            </div>
        </div>
    );
};
