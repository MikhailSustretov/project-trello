import { memo, useEffect, useRef } from 'react';

interface ValidatedTextInputProps {
    /** Input value */
    value: string;
    /** Change handler */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Error message */
    error?: string | null;
    /** Keydown handler */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /** Blur handler */
    onBlur?: () => void;
    /** Placeholder text */
    placeholder?: string;
    /** Additional CSS classes */
    className?: string;
    /** Whether to autofocus the input */
    autoFocus?: boolean;
    /** Input name attribute */
    name?: string;
    /** Input id attribute */
    id?: string;
}

/**
 * A text input component with validation support
 */
const ValidatedTextInput = memo(
    ({
        value,
        onChange,
        error,
        onKeyDown,
        onBlur,
        placeholder,
        className = '',
        autoFocus = true,
        name,
        id,
    }: ValidatedTextInputProps) => {
        const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            if (autoFocus && inputRef.current) {
                inputRef.current.focus();
            }
        }, [autoFocus]);

        const inputClassName = `
        ${className} 
        p-1 
        transition-colors
        focus:outline-none
        ${error ? 'border-red-500 text-red-500 bg-red-100 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}
    `.trim();

        return (
            <div className="flex flex-col">
                <input
                    ref={inputRef}
                    className={inputClassName}
                    type="text"
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    name={name}
                    id={id}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                />
                {error && (
                    <p className="text-red-500 text-sm mt-1" id={`${id}-error`} role="alert">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

export default ValidatedTextInput;
