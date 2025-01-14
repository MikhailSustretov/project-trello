import { useParams } from 'react-router-dom';

import { useBoard } from '@/entities/Board';
import { Board } from '@/widgets/Board';

const BoardPage: React.FC = () => {
    const { board_id } = useParams<{ board_id: string }>();
    const boardId = parseInt(String(board_id), 10);
    const { board, refreshBoard } = useBoard(boardId);

    if (!board) return null;

    return <Board boardId={boardId} board={board} onUpdate={refreshBoard} />;
};

export default BoardPage;
