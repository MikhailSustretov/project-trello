import { DeleteCard } from '@/features/card/DeleteCard';
import { IListCard } from '@/entities/List';
interface CardWidgetProps {
    card: IListCard;
    onClick?: () => void;
    className?: string;
}

const CardWidget = ({ card, onClick, className }: CardWidgetProps) => {
    return (
        <div
            className={`bg-white rounded my-2 px-2 hover:outline hover:cursor-pointer hover:outline-gray-800 relative ${className}`}
            onClick={onClick}
        >
            <DeleteCard cardId={card.id} className="absolute top-0 right-1" />
            <h1>○ {card.title}</h1>
        </div>
    );
};

export { CardWidget };
