import { useBoardApi, CreationResponse } from '@/entities/Board';
import { logError } from '@/shared/lib';

export const useUpdateBoardColor = (boardId: number, onUpdate: () => void) => {
    const { updateBoard } = useBoardApi();

    const updateBoardColor = (newColor: string) => {
        return updateBoard(boardId, { custom: { color: newColor } })
            .then((response: CreationResponse) => {
                if (response.result === 'Updated') {
                    onUpdate();
                } else {
                    console.error('Failed to update the board.');
                }
            })
            .catch((error) => logError(error, 'Error during board updating'));
    };

    return { updateBoardColor };
};
