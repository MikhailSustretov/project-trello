import { useEffect } from 'react';

import { useBoards } from '@/entities/Board';
import { BoardsList } from '@/widgets/BoardsList';

const HomePage = () => {
    const { boards, refreshBoards } = useBoards();

    useEffect(() => {
        refreshBoards();
    }, []);

    return (
        <div className="m-12">
            <BoardsList boards={boards} refreshBoards={refreshBoards} />
        </div>
    );
};

export default HomePage;
