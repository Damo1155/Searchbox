import React from "react";

// Types
import { SelectionVariant } from "../Types/Variants";
import { SearchBoxOption } from "../Types/ListBoxItem";

type ListboxProps = {
    open: boolean;
    disabled?: boolean;
    placeholder: string;
    variant: SelectionVariant;
    value?: string | Array<string>;
    options: Array<SearchBoxOption>;
    onToggle: (state: boolean) => void;
};

export const Button = ({
    open,
    value,
    variant,
    options,
    onToggle,
    disabled,
    placeholder,
}: ListboxProps) => {
    const displayValue = {
        single: () => {
            const selectedOption = options.find((option) => option.id === value as string);

            return selectedOption?.name ?? placeholder;
        },
        multiple: () => {
            const selectedOptions = options
                .filter((option) => (value as Array<string>).includes(option.id))
                .map((option) => (<div>{option.name}</div>));

            return selectedOptions.length > 0 ? selectedOptions : placeholder;
        }
    };

    return (
        <button
            disabled={disabled}
            aria-expanded={open}
            aria-haspopup={true}
            className="sb-selection"
            onClick={() => onToggle(!open)}
        >
            {displayValue[variant]()}
        </button>
    );
};
