import { ICard } from '../../../common/interfaces/ICard';

export const Card = ({ title }: ICard) => {
    return (
        <>
            <h1>○ {title}</h1>
        </>
    );
};
