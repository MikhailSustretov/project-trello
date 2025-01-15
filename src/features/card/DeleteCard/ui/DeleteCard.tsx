import { useContext } from 'react';
import { useDeleteCard } from '@/features/card/DeleteCard/model/useDeleteCard';
import { BoardContext } from '@/widgets/Board/model';
import { ConfirmationModal } from '@/shared/ui/ConfirmationModal';

interface DeleteCardProps {
    cardId: number;
    className?: string;
}

export const DeleteCard = ({ className, cardId }: DeleteCardProps) => {
    const { boardId, refreshBoard } = useContext(BoardContext);

    const { handleDeleteCard, isConfirmModalOpen, setIsConfirmModalOpen } = useDeleteCard({
        boardId,
        cardId,
        refreshBoard,
    });

    return (
        <>
            <button
                className={`${className} hover:text-red-500`}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsConfirmModalOpen(true);
                }}
            >
                ✕
            </button>
            {isConfirmModalOpen && (
                <ConfirmationModal onClose={() => setIsConfirmModalOpen(false)} onConfirm={handleDeleteCard}>
                    <p className="text-black">Are you sure you want to delete this card?</p>
                </ConfirmationModal>
            )}
        </>
    );
};
