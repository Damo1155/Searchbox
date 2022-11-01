// Accessibility Example    :   https://www.w3.org/WAI/ARIA/apg/patterns/listbox/
//                              https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role

import React from "react";

// Types
import { SelectionVariant } from "../Types/Variants";
import { SearchBoxOption } from "../Types/ListBoxItem";

type ListboxProps = {
    variant: SelectionVariant;
    value?: string | Array<string>;
    options: Array<SearchBoxOption>;
    onSelect: (selection?: string | Array<string> | undefined) => void;
};

export const Listbox = ({
    value,
    options,
    variant,
    onSelect,
}: ListboxProps) => {
    const validateSelection = (id: string) => {
        const selectedValues = {
            single: () => (value as string) !== id ? id : "",
            multiple: () => {
                const currentSelection = value as Array<string>;
                const selection = options.find((option) => option.id === id);

                if (selection) {
                    const updatedSelection = [
                        ...currentSelection,
                        selection.id,
                    ];

                    return updatedSelection
                }
                
                return currentSelection;
            }
        };

        const selection = selectedValues[variant]();

        onSelect(selection);
    };

    return (
        <div className="results" dir="ltr">
            <ul className="result-groups" role="listbox">
                {options.map((option) => (
                    <li
                        role="option"
                        key={option.id} 
                        className="group"
                        aria-selected={option.id === value} 
                        onClick={() => validateSelection(option.id)}
                    >
                        {option.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
