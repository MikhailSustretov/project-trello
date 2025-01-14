import React, { useState } from 'react';

import { useUpdateBoardColor } from '@/features/board/UpdateBoardColor/model/useUpdateBoardColor';

const STYLES = {
    wrapper: 'w-full flex justify-end',
    label: 'text-white cursor-pointer hover:underline',
    input: 'invisible',
} as const;

interface UpdateBoardColorProps {
    boardId: number;
    className?: string;
    onUpdate: () => void;
}

export const UpdateBoardColor: React.FC<UpdateBoardColorProps> = ({ boardId, onUpdate }) => {
    const [newBoardColor, setNewBoardColor] = useState('#000000');
    const { updateBoardColor } = useUpdateBoardColor(boardId, onUpdate);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value !== newBoardColor) {
            updateBoardColor(value);
        }
        setNewBoardColor(value);
    };

    return (
        <div className={STYLES.wrapper}>
            <label className={STYLES.label} htmlFor="colorPicker">
                change board color
            </label>
            <input
                value={newBoardColor}
                type="color"
                id="colorPicker"
                className={STYLES.input}
                onChange={handleColorChange}
            />
        </div>
    );
};
