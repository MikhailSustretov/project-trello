import { BoardPreview } from '../../entities/Board/ui/BoardPreview.tsx';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import instance from '../../shared/api/request.ts';
import { Button } from '../../shared/ui/Button.tsx';
import { BoardService } from '../../entities/Board/services/BoardService.ts';
import CreateBoardModal from '../../features/CreateBoardModal/ui/CreateBoardModal.tsx';

const HomePage = () => {
    const [boards, setBoards] = useState([]);
    const [isModelOpen, setIsModalOpen] = useState(false);

    const openModal = (): boolean => {
        setIsModalOpen(true);
    };

    const closeModal = (): boolean => {
        return true;
    };

    const createNewBoard = (boardTitle: string) => {
        setBoards((prevBoards: string[]) => [...prevBoards, { id: 1, title: boardTitle }]);

        instance.post('/board', { title: boardTitle });

        setIsModalOpen(false);
    };

    useEffect(() => {
        BoardService.getBoards()
            .then((boardsData) => {
                setBoards(boardsData);
            })
            .catch((error) => {
                console.error('Error fetching boards:', error);
            });
    }, []);

    return (
        <div className="m-12 flex flex-col">
            <h1 className="p-4 m-auto rounded text-3xl font-sans text-white">Your boards</h1>
            <div className="mt-3 flex flex-wrap gap-4">
                {boards.map((board) => (
                    <Link to={`/board/${board.id}`} key={board.id} className="basis-[15%]">
                        <BoardPreview id={board.id} title={board.title} custom={board.custom}></BoardPreview>
                    </Link>
                ))}
                <Button onClick={openModal} styles={'basis-[15%] p-4 h-20'}>
                    + add board
                </Button>
            </div>
            <CreateBoardModal isVisible={isModelOpen} onClose={closeModal} onSubmit={createNewBoard} />{' '}
        </div>
    );
};

export default HomePage;
