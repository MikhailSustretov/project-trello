import { useState } from 'react';

import { useBoardApi, BoardResponse } from '@/entities/Board/api';

export const useBoards = () => {
    const [boards, setBoards] = useState<BoardResponse[]>([]);
    const { getBoards } = useBoardApi();

    const fetchBoards = async () => {
        try {
            const boardsData = await getBoards();
            setBoards(boardsData);
        } catch (error) {
            console.error('Error fetching boards:', error);
        }
    };

    return { boards, refreshBoards: fetchBoards };
};
