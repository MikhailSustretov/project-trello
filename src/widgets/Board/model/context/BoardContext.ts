import { createContext } from 'react';

interface BoardContextType {
    boardId: number;
    refreshBoard: () => void;
}

export const BoardContext = createContext<BoardContextType>({
    boardId: 0,
    refreshBoard: () => {},
});
