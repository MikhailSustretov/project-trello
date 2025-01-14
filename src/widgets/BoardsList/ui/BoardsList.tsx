import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { BoardPreview, BoardResponse } from '@/entities/Board';
import { CreateBoard } from '@/features/board';
import { GrayButton } from '@/shared/ui';

interface BoardsListProps {
    boards: BoardResponse[];
    onBoardCreate: () => void;
}

const BoardsList: FC<BoardsListProps> = ({ boards, onBoardCreate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col">
            <h1 className="p-4 m-auto text-3xl font-sans text-white">Your boards</h1>
            <div className="mt-3 flex flex-wrap gap-4">
                {boards.map((board) => (
                    <Link to={`/board/${board.id}`} key={board.id} className="basis-[15%]">
                        <BoardPreview title={board.title} custom={board.custom} />
                    </Link>
                ))}
                <GrayButton onClick={() => setIsModalOpen(true)} className="basis-[15%] p-4 h-20">
                    + add board
                </GrayButton>
            </div>
            {isModalOpen && <CreateBoard onClose={() => setIsModalOpen(false)} onBoardCreation={onBoardCreate} />}
        </div>
    );
};

export default BoardsList;
