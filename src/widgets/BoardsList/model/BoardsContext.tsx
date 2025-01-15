import { createContext, useContext } from 'react';

interface BoardsContextType {
    refreshBoards: () => void;
}

const BoardsContext = createContext<BoardsContextType | undefined>(undefined);

interface BoardsProviderProps {
    children: React.ReactNode;
    refreshBoards: () => void;
}

export const BoardsProvider = ({ children, refreshBoards }: BoardsProviderProps) => {
    return <BoardsContext.Provider value={{ refreshBoards }}>{children}</BoardsContext.Provider>;
};

export const useBoardsContext = () => {
    const context = useContext(BoardsContext);
    if (context === undefined) {
        throw new Error('useBoardsContext must be used within a BoardsProvider');
    }
    return context;
};
