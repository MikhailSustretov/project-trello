import { DeleteBoard } from '@/features/board/DeleteBoard';
import { BoardTitle } from '@/widgets/BoardsList/ui/BoardTitle/ui/BoardTitle';

interface BoardCardProps {
    boardId: number;
    title: string;
    custom?: {
        color?: string;
    };
}

export const BoardPreview = ({ boardId, title, custom }: BoardCardProps) => {
    return (
        <>
            <div style={{ backgroundColor: custom?.color }} className="text-white rounded h-20 relative">
                <DeleteBoard boardId={boardId} className="absolute top-0 right-2 cursor-pointer hover:text-red-500" />
                <BoardTitle title={title} />
            </div>
        </>
    );
};
