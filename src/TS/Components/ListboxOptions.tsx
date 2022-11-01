// Accessibility Example    :   https://www.w3.org/WAI/ARIA/apg/patterns/listbox/

import React from "react";

// Types
import { SearchBoxOption } from "../Types/ListBoxItem";

type ListboxOptionsProps = {
    options: Array<SearchBoxOption>;
    value?: SearchBoxOption | Array<SearchBoxOption>;
};

export const ListboxOptions = ({
    options,
}: ListboxOptionsProps) => {
    return (
        <div className="results" dir="ltr">
            <ul className="result-groups" role="listbox">
                {options.map((option) => (
                    <li key={option.value} className="group" role="option" aria-selected={false}>{option.text}</li>
                ))}
            </ul>
        </div>
    );
}
