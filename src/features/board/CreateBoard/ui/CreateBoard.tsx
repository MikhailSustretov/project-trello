import React, { useEffect } from 'react';
import { GrayButton, ValidatedTextInput, CloseButton } from '@/shared/ui';
import { useCreateBoard } from '@/features/board/CreateBoard/model/useCreateBoard';
import { useBoardsContext } from '@/widgets/BoardsList/model';

interface CreateBoardProps {
    onClose: () => void;
}

const CreateBoard = ({ onClose }: CreateBoardProps) => {
    const { refreshBoards } = useBoardsContext();
    const { title, errorMessage, handleTitleChange, createBoard, resetForm, isCreateDisabled } = useCreateBoard(
        refreshBoards,
        onClose
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleTitleChange(event.target.value);
    };

    const handleEnterButton = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && !isCreateDisabled) {
            createBoard();
        }
    };

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        resetForm();
    }, []);

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={handleBackdropClick}
        >
            <div className="w-[400px] h-[140px] bg-gray-300 rounded p-5 flex flex-col relative">
                <CloseButton className="absolute -top-1 -right-1" onClick={onClose}></CloseButton>

                <div className={'mb-4'}>
                    <ValidatedTextInput
                        value={title}
                        onChange={handleInputChange}
                        onKeyDown={handleEnterButton}
                        error={errorMessage}
                        className={`rounded`}
                        placeholder="Enter board title"
                    />
                </div>

                <GrayButton onClick={createBoard} className={`py-1`} disabled={isCreateDisabled}>
                    Create
                </GrayButton>
            </div>
        </div>
    );
};

export { CreateBoard };
