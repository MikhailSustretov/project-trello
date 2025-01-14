import { createContext } from 'react';

interface BoardContextType {
    boardId: number;
    onUpdate: () => void;
}

export const BoardContext = createContext<BoardContextType>({
    boardId: 0,
    onUpdate: () => {},
});
