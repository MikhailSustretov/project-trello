interface GrayButtonProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

const GrayButton = ({ className, children, onClick, disabled = false }: GrayButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${className} ${disabled && 'cursor-not-allowed'} 
            w-full bg-gray-600 text-white rounded hover:bg-gray-700 hover:shadow-lg transition duration-100 ease-in-out`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default GrayButton;
