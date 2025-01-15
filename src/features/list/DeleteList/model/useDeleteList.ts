import { useListApi } from '@/entities/List/api';
import { useState } from 'react';

interface UseDeleteListProps {
    boardId: number;
    listId: number;
    refreshBoard: () => void;
}

export const useDeleteList = ({ boardId, listId, refreshBoard }: UseDeleteListProps) => {
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const { deleteList } = useListApi();

    const handleDeleteList = async () => {
        try {
            const response = await deleteList(boardId, listId);
            if (response.result === 'Deleted') {
                refreshBoard();
            } else {
                console.error('Failed to delete the list.');
            }
            setIsConfirmModalOpen(false);
        } catch (error) {
            console.error('Error deleting list:', error);
            throw error;
        }
    };

    return {
        deleteList: handleDeleteList,
        isConfirmModalOpen,
        setIsConfirmModalOpen,
    };
};
