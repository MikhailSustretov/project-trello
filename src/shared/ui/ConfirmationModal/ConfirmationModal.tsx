interface ConfirmationModalProps {
    onConfirm: () => void;
    onClose: () => void;
    children: React.ReactNode;
}

export const ConfirmationModal = ({ onConfirm, onClose, children }: ConfirmationModalProps) => {
    const onConfirmationClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        onClose();
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            e.stopPropagation();
            e.preventDefault();
            onClose();
        }
    };

    const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onConfirm();
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center cursor-auto"
            onClick={handleBackdropClick}
        >
            <div className="w-[400px] h-[100px] bg-gray-300 rounded p-1 flex flex-col relative">
                <div className="p-2 text-black rounded mx-auto mb-2">{children}</div>
                <div className="flex justify-around gap-2">
                    <button
                        className="text-white bg-red-700 hover:bg-red-900 border border-black rounded py-1 px-2"
                        onClick={onConfirmationClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="text-white bg-green-700 hover:bg-green-900 border border-black rounded py-1 px-2"
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};
