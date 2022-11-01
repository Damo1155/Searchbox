// Accessibility Example    :   https://www.w3.org/WAI/ARIA/apg/patterns/listbox/

import React from "react";

// Types
import { SearchBoxOption } from "../Types/ListBoxItem";

type ListboxProps = {
    value?: string | Array<string>;
    onSelect: (id?: string) => void;
    options: Array<SearchBoxOption>;
};

export const Listbox = ({
    value,
    options,
    onSelect,
}: ListboxProps) => {
    const validateSelection = (id: string) => {
        onSelect(value !== id ? id : undefined);
    };

    return (
        <div className="results" dir="ltr">
            <ul className="result-groups" role="listbox">
                {options.map((option) => (
                    <li
                        role="option"
                        key={option.id} 
                        className="group"
                        aria-selected={false} 
                        onClick={() => validateSelection(option.id)}
                    >
                        {option.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
