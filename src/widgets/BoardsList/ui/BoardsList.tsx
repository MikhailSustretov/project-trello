import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { BoardResponse } from '@/entities/Board';
import { CreateBoard } from '@/features/board';
import { GrayButton } from '@/shared/ui';
import { BoardCard } from '@/widgets/BoardsList/ui/BoardPreview';
import { BoardsProvider } from '@/widgets/BoardsList/model';

interface BoardsListProps {
    boards: BoardResponse[];
    refreshBoards: () => void;
}

const BoardsList: FC<BoardsListProps> = ({ boards, refreshBoards }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <BoardsProvider refreshBoards={refreshBoards}>
            <div className="flex flex-col">
                <h1 className="p-4 m-auto text-3xl font-sans text-white">Your boards</h1>
                <div className="mt-3 flex flex-wrap gap-4">
                    {boards.map((board) => (
                        <Link to={`/board/${board.id}`} key={board.id} className="basis-[15%]">
                            <BoardCard boardId={board.id} title={board.title} custom={board.custom} />
                        </Link>
                    ))}
                    <GrayButton onClick={() => setIsModalOpen(true)} className="basis-[15%] p-4 h-20">
                        + add board
                    </GrayButton>
                </div>
                {isModalOpen && <CreateBoard onClose={() => setIsModalOpen(false)} />}
            </div>
        </BoardsProvider>
    );
};

export { BoardsList };
