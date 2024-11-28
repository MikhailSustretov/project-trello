import { IList } from './IList';
import ListCard from '../ListCard/ListCard';

const List = ({ title, cards }: IList) => {
    return (
        <>
            <div className="text-black rounded text-2xl text-center mb-5">{title}</div>
            {cards.map((card) => (
                <div className="bg-white rounded my-2 px-2">
                    <ListCard title={card.title} />
                </div>
            ))}
            <button className="w-full rounded my-2 p-2 hover:bg-gray-400 hover:shadow-lg transition duration-100 ease-in-out">
                + add card
            </button>
        </>
    );
};

export default List;
