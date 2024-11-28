import { createBoardRequest, getBoardsRequest } from '../api/board.ts';
import { BoardRequest, BoardResponse } from '../api/board.types.ts';

export const BoardService = {
    createNewBoard(data: BoardRequest) {
        if (!data.title) {
            throw new Error('The board must have a title');
        }
        return createBoardRequest(data);
    },

    getBoards(): Promise<BoardResponse[]> {
        return getBoardsRequest()
            .then((data) => data.boards) // Извлекаем массив досок
            .catch((error) => {
                console.error('Error during boards getting:', error);
                throw error; // Пробрасываем ошибку для обработки
            });
    },
};
