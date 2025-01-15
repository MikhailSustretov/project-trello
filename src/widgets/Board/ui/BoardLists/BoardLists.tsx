import { FullBoardResponse } from '@/entities/Board';
import { CreateList } from '@/features/list';
import { ListWidget } from '@/widgets/List';

const LISTS_CLASSES = {
    wrapper: 'flex gap-4 overflow-x-auto',
    list: 'flex-shrink-0 flex-grow-0 basis-1/6 min-w-0',
    listItem: 'flex-shrink-0 flex-grow-0 basis-1/6 min-w-0 bg-gray-200 rounded p-5',
} as const;

interface BoardListsProps {
    lists: FullBoardResponse['lists'];
}

export const BoardLists: React.FC<BoardListsProps> = ({ lists }) => {
    return (
        <div className={LISTS_CLASSES.wrapper}>
            <CreateList className={LISTS_CLASSES.list} />
            {lists.map((list) => (
                <ListWidget key={list.id} list={list} className={LISTS_CLASSES.listItem} />
            ))}
        </div>
    );
};
