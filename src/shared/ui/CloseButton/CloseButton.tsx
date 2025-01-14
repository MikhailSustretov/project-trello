interface ButtonProps {
    className?: string;
    onClick?: () => void;
}

/**
 * A reusable close button component
 * @param className - Additional CSS classes
 * @param onClick - Click handler function
 * @param ariaLabel - Accessibility label for screen readers
 */
const CloseButton = ({ className, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${className} 
              text-gray-600 text-xl hover:text-black rounded w-8 h-8 flex items-center justify-center`}
        >
            &times;
        </button>
    );
};

export default CloseButton;
