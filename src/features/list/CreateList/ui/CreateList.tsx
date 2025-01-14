import { ValidatedTextInput, CloseButton, GrayButton } from '@/shared/ui';

import { useCreateList } from '@/features/list/CreateList/model/useCreateList';

interface CreateListProps {
    boardId: number;
    onListCreation: () => void;
    className: string;
}

const CreateList = ({ boardId, onListCreation, className }: CreateListProps) => {
    const {
        isListCreating,
        listTitle,
        errorMessage,
        handleInputChange,
        openListCreation,
        exitListCreation,
        handleListCreation,
    } = useCreateList(boardId, onListCreation);

    return (
        <div className={`${className}`}>
            {!isListCreating ? (
                <GrayButton className={`flex-shrink-0 self-start text-xl p-2`} onClick={openListCreation}>
                    Create list
                </GrayButton>
            ) : (
                <div className={'bg-gray-200 p-2 rounded'}>
                    <div className={'flex flex-col gap-2'}>
                        <ValidatedTextInput
                            value={listTitle}
                            onChange={handleInputChange}
                            placeholder={'Enter list title'}
                            error={errorMessage}
                            className={'rounded text-xl'}
                        />
                        <div className={'flex justify-start gap-1'}>
                            <GrayButton className={'w-2/3 text-l p-1'} onClick={handleListCreation}>
                                Add list
                            </GrayButton>
                            <CloseButton className={'w-1/6 hover:bg-gray-400'} onClick={exitListCreation} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { CreateList };
