import React, { HTMLProps } from "react";

// Types
import { SearchBoxOption } from "../Types/ListBoxItem";

type ListboxProps = {
    open: boolean;
    value?: string;
    disabled?: boolean;
    placeholder: string;
    options: Array<SearchBoxOption>;
    onToggle: (state: boolean) => void;
};

export const Button = ({
    open,
    value,
    options,
    onToggle,
    disabled,
    placeholder
}: ListboxProps) => {
    const selectedOption = options.find((option) => option.id === value);

    return (
        <button
            aria-controls=""
            disabled={disabled}
            aria-haspopup={true}
            className="sb-selection"
            onClick={() => onToggle(!open)}
        >
            {selectedOption?.name ?? placeholder}
        </button>
    );
};
