interface BoardPreviewProps {
    title: string;
    custom?: {
        color?: string;
    };
}

export const BoardPreview = ({ title, custom }: BoardPreviewProps) => {
    return (
        <div style={{ backgroundColor: custom?.color }} className="text-white rounded p-4 h-20">
            <h2>{title}</h2>
        </div>
    );
};
