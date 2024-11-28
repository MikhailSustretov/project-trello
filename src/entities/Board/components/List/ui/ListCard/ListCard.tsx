import { ICard } from './IListCard';

const ListCard = ({ title }: ICard) => {
    return (
        <>
            <h1>○ {title}</h1>
        </>
    );
};

export default ListCard;
