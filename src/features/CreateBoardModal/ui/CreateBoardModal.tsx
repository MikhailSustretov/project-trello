import React, { useEffect, useState } from 'react';
import { ModalProps } from './ICreateBoardModal';
import { Button } from '../../../shared/ui/Button.tsx';

const CreateBoardModal = ({ isVisible, onClose, onSubmit }: ModalProps) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        setInputValue('');
    }, [isVisible]);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="w-[300px] h-[100px] bg-gray-300 rounded">
                <div className="flex flex-col m-5">
                    <input
                        className="mb-4 rounded"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter board title"
                    />
                    <Button onClick={() => onSubmit(inputValue)} styles={'py-1'}>
                        Create
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateBoardModal;
