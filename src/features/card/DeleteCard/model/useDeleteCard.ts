import { useListApi } from '@/entities/List/api/useListApi';
import { useState } from 'react';

interface UseDeleteCardProps {
    boardId: number;
    cardId: number;
    refreshBoard: () => void;
}

export const useDeleteCard = ({ boardId, cardId, refreshBoard }: UseDeleteCardProps) => {
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const { deleteCard } = useListApi();

    const handleDeleteCard = async () => {
        try {
            const response = await deleteCard(boardId, cardId);
            if (response.result === 'Deleted') {
                refreshBoard();
            } else {
                console.error('Failed to delete the card.');
            }
        } catch (error) {
            console.error('Error deleting card:', error);
            throw error;
        }
        setIsConfirmModalOpen(false);
    };

    return { handleDeleteCard, isConfirmModalOpen, setIsConfirmModalOpen };
};
