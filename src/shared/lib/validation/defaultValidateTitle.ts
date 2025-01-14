const invalidChars = /[^a-zA-Z0-9 .\-_]/g;

export const defaultValidateTitle = (title: string): string | null => {
    if (!title.trim()) {
        return 'Title cannot be empty';
    }
    if (title.match(invalidChars)) {
        return 'Only A-Z, 0-9, " ", ".", "-", "_"';
    }
    return null;
};
