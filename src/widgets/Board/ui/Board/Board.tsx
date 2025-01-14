import clsx from 'clsx';
import React from 'react';

import { FullBoardResponse } from '@/entities/Board';

import { BoardContext } from '@/widgets/Board/model';
import { BoardHeader } from '@/widgets/Board/ui/BoardHeader';
import { BoardLists } from '@/widgets/Board/ui/BoardLists';

interface BoardProps {
    boardId: number;
    board: FullBoardResponse;
    onUpdate: () => void;
    className?: string;
}

export const Board: React.FC<BoardProps> = ({ boardId, board, onUpdate, className }) => {
    const contextValue = {
        boardId,
        onUpdate,
    };

    return (
        <BoardContext.Provider value={contextValue}>
            <div className={clsx('h-screen p-6', className)} style={{ backgroundColor: board.custom?.color }}>
                <BoardHeader title={board.title} />
                <BoardLists lists={board.lists} />
            </div>
        </BoardContext.Provider>
    );
};
