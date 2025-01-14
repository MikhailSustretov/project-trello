import { useState, useEffect, useCallback } from 'react';

import { logError } from '@/shared/lib';

import { FullBoardResponse, useBoardApi } from '@/entities/Board';

export const useBoard = (boardId: number) => {
    const [board, setBoard] = useState<FullBoardResponse | null>(null);
    const { getBoardById } = useBoardApi();

    const fetchBoard = useCallback(async () => {
        try {
            const data = await getBoardById(boardId);
            setBoard(data);
        } catch (error) {
            logError(error, 'Error during board GET request');
        }
    }, [boardId, getBoardById]);

    useEffect(() => {
        fetchBoard();
    }, []);

    return { board, refreshBoard: fetchBoard };
};
