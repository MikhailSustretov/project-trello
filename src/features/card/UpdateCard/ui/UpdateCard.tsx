import { IListCard } from '@/entities/List';
import { ValidatedTextInput } from '@/shared/ui';

import { useUpdateCard } from '@/features/card/UpdateCard/model/useUpdateCard';

interface UpdateCardProps {
    card: IListCard;
    boardId: number;
    listId: number;
    onCardUpdating: () => void;
    exitCardEditing: () => void;
}

export const UpdateCard = (props: UpdateCardProps) => {
    const { title, errorMessage, handleInputChange, handleSubmit } = useUpdateCard(props);

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
            <div className="w-[400px] h-[100px] bg-gray-300 rounded p-5 flex flex-col relative">
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
            </div>
        </div>
    );
};
