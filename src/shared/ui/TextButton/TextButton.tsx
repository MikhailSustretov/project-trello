interface TextButtonProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

const TextButton = ({ className, children, onClick, disabled = false }: TextButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${className} ${disabled && 'cursor-not-allowed'} 
            p-2 text-white rounded transition hover:underline hover:bg-gray-700 duration-100 ease-in-out`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default TextButton;
