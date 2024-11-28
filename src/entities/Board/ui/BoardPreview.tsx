export const BoardPreview = ({ id, title, custom }) => {
    return (
        <div style={custom} className="text-white rounded p-4 h-20">
            <h2>{title}</h2>
        </div>
    );
};
