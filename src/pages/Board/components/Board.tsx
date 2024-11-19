import { useState } from 'react';
import { ICard } from '../../../common/interfaces/ICard';
import { List } from '../../List/components/List.tsx';

export const Board = () => {
    const [title, setTitle] = useState('My test board');
    const [lists, setLists] = useState([
        {
            id: 1,
            title: 'Плани',
            cards: [
                { id: 1, title: 'помити кота' },
                { id: 2, title: 'приготувати суп' },
                { id: 3, title: 'сходити в магазин' },
            ],
        },
        {
            id: 2,
            title: 'В процесі',
            cards: [{ id: 4, title: 'подивитися серіал' }],
        },
        {
            id: 3,
            title: 'Зроблено',
            cards: [
                { id: 5, title: 'зробити домашку' },
                { id: 6, title: 'погуляти з собакой' },
            ],
        },
    ]);

    return (
        <div className="bg-gray-800 h-screen relative">
            <div className="p-6">
                <div className="flex flex-col gap-4">
                    <h1 className="p-4 m-auto rounded text-3xl font-sans text-white">{title}</h1>

                    <div className="flex gap-4 overflow-x-auto">
                        <button className="flex-shrink-0 self-start bg-gray-600 text-2xl text-white p-5 rounded hover:bg-gray-700 hover:shadow-lg transition duration-100 ease-in-out">
                            Create list
                        </button>

                        {lists.map((item) => (
                            <div className="flex-shrink-0 bg-gray-200 rounded p-5" key={item.id}>
                                <List title={item.title} cards={item.cards} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
