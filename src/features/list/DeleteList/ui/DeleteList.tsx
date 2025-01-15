import { BoardContext } from '@/widgets/Board/model';
import { useDeleteList } from '@/features/list/DeleteList/model/useDeleteList';
import { useContext } from 'react';
import { ConfirmationModal } from '@/shared/ui/ConfirmationModal';

interface DeleteListProps {
    listId: number;
    className?: string;
}

export const DeleteList = ({ className, listId }: DeleteListProps) => {
    const { boardId, refreshBoard } = useContext(BoardContext);

    const { deleteList, isConfirmModalOpen, setIsConfirmModalOpen } = useDeleteList({ boardId, listId, refreshBoard });

    return (
        <>
            <button className={className} onClick={() => setIsConfirmModalOpen(true)}>
                ✕
            </button>
            {isConfirmModalOpen && (
                <ConfirmationModal onClose={() => setIsConfirmModalOpen(false)} onConfirm={deleteList}>
                    <p className="text-black">Are you sure you want to delete this list?</p>
                </ConfirmationModal>
            )}
        </>
    );
};
