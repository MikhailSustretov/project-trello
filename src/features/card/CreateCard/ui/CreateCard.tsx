import { ValidatedTextInput, GrayButton, CloseButton } from '@/shared/ui';

import { useCreateCard } from '@/features/card/CreateCard/model/useCreateCard';

interface CreateCardProps {
    boardId: number;
    listId: number;
    onUpdate: () => void;
}

export const CreateCard = (props: CreateCardProps) => {
    const { isCardCreating, title, errorMessage, handleInputChange, handleSubmit, openCardCreation, exitCardCreation } =
        useCreateCard(props);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
        if (event.key === 'Escape') {
            exitCardCreation();
        }
    };

    if (!isCardCreating) {
        return (
            <GrayButton className="w-full text-left px-2 py-1" onClick={openCardCreation}>
                + Add card
            </GrayButton>
        );
    }

    return (
        <div className="p-2">
            <div className="flex flex-col gap-2">
                <ValidatedTextInput
                    value={title}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    error={errorMessage}
                    className="rounded"
                    placeholder="Enter card title"
                />
                <div className="flex justify-start gap-1">
                    <GrayButton className="w-2/3 self-start text-l p-1" onClick={handleSubmit}>
                        Add card
                    </GrayButton>
                    <CloseButton className="w-1/6 hover:bg-gray-400" onClick={exitCardCreation} />
                </div>
            </div>
        </div>
    );
};
