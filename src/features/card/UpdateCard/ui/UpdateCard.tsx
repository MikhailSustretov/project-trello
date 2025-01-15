import { IListCard } from '@/entities/List';
import { GrayButton, ValidatedTextInput } from '@/shared/ui';

import { useUpdateCard } from '@/features/card/UpdateCard/model/useUpdateCard';
import { useContext } from 'react';
import { BoardContext } from '@/widgets/Board/model/context/BoardContext';

interface UpdateCardProps {
    card: IListCard;
    listId: number;
    exitCardEditing: () => void;
}

export const UpdateCard = (props: UpdateCardProps) => {
    const { boardId, refreshBoard } = useContext(BoardContext);

    const { title, errorMessage, handleInputChange, handleSubmit, isUpdateDisabled } = useUpdateCard({
        boardId,
        listId: props.listId,
        card: props.card,
        exitCardEditing: props.exitCardEditing,
        refreshBoard,
    });

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            handleSubmit();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={handleBackdropClick}
        >
            <div className="w-[400px] h-[140px] bg-gray-300 rounded p-5 flex flex-col relative">
                <div className={'mb-4'}>
                    <ValidatedTextInput
                        value={title}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        error={errorMessage}
                        className="rounded"
                        placeholder="Enter card title"
                    />
                </div>
                <GrayButton onClick={handleSubmit} className={`py-1`} disabled={isUpdateDisabled}>
                    Update
                </GrayButton>
            </div>
        </div>
    );
};
