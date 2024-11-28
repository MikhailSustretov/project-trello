export interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    onSubmit: (value: string) => void;
}
