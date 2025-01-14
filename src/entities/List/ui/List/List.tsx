interface ListProps {
    id: number;
    title: string;
    cards: Array<any>; // заменить any на правильный тип карточки
    className?: string;
}

const List = ({ id, title, cards, className }: ListProps) => {
    return (
        <div className={`${className} w-full h-full`}>
            <div className="text-black rounded text-2xl text-center truncate">{title}</div>
            <div className="mt-5">
                {cards.map((card) => (
                    <div key={card.id}>{card.title}</div>
                ))}
            </div>
        </div>
    );
};

export { List };
