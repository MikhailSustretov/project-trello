interface BoardTitleProps {
    title: string;
}

export const BoardTitle = ({ title }: BoardTitleProps) => {
    return (
        <div className="p-4">
            <h2>{title}</h2>
        </div>
    );
};
