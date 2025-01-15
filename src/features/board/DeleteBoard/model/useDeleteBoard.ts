import { useBoardApi } from '@/entities/Board';
import { useState } from 'react';

interface UseDeleteBoardProps {
    boardId: number;
    onDelete: () => void;
}

export const useDeleteBoard = ({ boardId, onDelete }: UseDeleteBoardProps) => {
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const { deleteBoard } = useBoardApi();

    const handleDeleteBoard = async () => {
        try {
            const response = await deleteBoard(boardId);
            if (response.result === 'Deleted') {
                onDelete();
            } else {
                console.error('Failed to delete the board.');
            }
        } catch (error) {
            console.error('Error deleting board:', error);
            throw error;
        }
    };

    return { handleDeleteBoard, isConfirmModalOpen, setIsConfirmModalOpen };
};
