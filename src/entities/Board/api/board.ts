import { BoardRequest, BoardResponse } from './board.types.ts';
import instance from '../../../shared/api/request.ts';

export const createBoardRequest = (data: BoardRequest) => {
    return instance.post<BoardResponse>('/board', data);
};

export const getBoardsRequest = (): Promise<{ boards: BoardResponse[] }> => {
    return instance.get('/board');
};
