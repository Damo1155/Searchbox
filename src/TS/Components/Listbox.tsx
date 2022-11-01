import React, { HTMLProps } from "react";

// Types
import { SearchBoxOption } from "../Types/ListBoxItem";

type ListboxProps = {
    open: boolean;
    disabled?: boolean;
    placeholder: string;
    onToggle: (state: boolean) => void;
    value: SearchBoxOption | Array<SearchBoxOption>;
};

export const Listbox = ({
    open,
    onToggle,
    disabled,
    placeholder
}: ListboxProps) => {
    return (
        <button
            aria-controls=""
            disabled={disabled}
            aria-haspopup={true}
            className="sb-selection"
            onClick={() => onToggle(!open)}
        >
            {placeholder}
        </button>
    );
};
