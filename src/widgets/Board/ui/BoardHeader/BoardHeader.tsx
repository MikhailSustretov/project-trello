import { useContext, useState } from 'react';

import { UpdateBoardTitle, UpdateBoardColor } from '@/features/board';

import { BoardContext } from '@/widgets/Board/model';

const HEADER_CLASSES = {
    wrapper: 'flex flex-col gap-4 relative',
    title: 'p-4 m-auto font-sans text-white text-3xl',
    heading: 'hover:bg-gray-500 p-2 rounded cursor-pointer',
} as const;

interface BoardHeaderProps {
    title: string;
}

export const BoardHeader: React.FC<BoardHeaderProps> = ({ title }) => {
    const { boardId, onUpdate } = useContext(BoardContext);
    const [isEditingTitle, setIsEditingTitle] = useState(false);

    const handleTitleClick = () => setIsEditingTitle(true);
    const exitTitleEditing = () => setIsEditingTitle(false);

    return (
        <div className={HEADER_CLASSES.wrapper}>
            <UpdateBoardColor boardId={boardId} onUpdate={onUpdate} />
            <div className={HEADER_CLASSES.title} onClick={handleTitleClick}>
                {isEditingTitle ? (
                    <UpdateBoardTitle
                        boardId={boardId}
                        title={title}
                        exitTitleEditing={exitTitleEditing}
                        onUpdate={onUpdate}
                    />
                ) : (
                    <h1 className={HEADER_CLASSES.heading}>{title}</h1>
                )}
            </div>
        </div>
    );
};