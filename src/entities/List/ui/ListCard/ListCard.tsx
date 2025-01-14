import { IListCard } from './IListCard';

interface ListCardProps {
    card: IListCard;
    onClick?: () => void;
    className?: string;
}

const ListCard = ({ card, onClick, className }: ListCardProps) => {
    return (
        <div
            className={`bg-white rounded my-2 px-2 hover:outline hover:cursor-pointer hover:outline-gray-800 ${className}`}
            onClick={onClick}
        >
            <h1>○ {card.title}</h1>
        </div>
    );
};

export { ListCard };
