interface ButtonProps {
    styles?: string; // Классы Tailwind или любые другие стили
    children: React.ReactNode; // Содержимое кнопки (например, текст)
    onClick?: () => void; // Обработчик клика
}

export const Button = ({ styles, children, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${styles} bg-gray-700 text-gray-300 hover:bg-gray-500 hover:text-white transition duration-100 ease-in-out rounded`}
        >
            {children}
        </button>
    );
};
