import { ConfirmationModal } from '@/shared/ui/ConfirmationModal';
import { useDeleteBoard } from '@/features/board/DeleteBoard/model/useDeleteBoard';
import { useBoardsContext } from '@/widgets/BoardsList/model';

interface DeleteBoardProps {
    boardId: number;
    className?: string;
}

const DeleteBoard = ({ boardId, className }: DeleteBoardProps) => {
    const { refreshBoards } = useBoardsContext();
    const { handleDeleteBoard, isConfirmModalOpen, setIsConfirmModalOpen } = useDeleteBoard({
        onDelete: refreshBoards,
        boardId,
    });

    return (
        <>
            <button
                className={className}
                onClick={(e) => {
                    e.preventDefault();
                    setIsConfirmModalOpen(true);
                }}
            >
                ✕
            </button>
            {isConfirmModalOpen && (
                <ConfirmationModal onClose={() => setIsConfirmModalOpen(false)} onConfirm={handleDeleteBoard}>
                    <p className="text-black">Are you sure you want to delete this board?</p>
                </ConfirmationModal>
            )}
        </>
    );
};

export { DeleteBoard };
