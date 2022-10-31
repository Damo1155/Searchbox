import React, { useState } from "react";

// Types
import { SearchBoxOptions } from "../Types/ListBoxItem";

// Constants
import { CONSTANTS } from "../Shared/Constants";

type ListboxOptionsProps = {
    value?: string | Array<string>;
    options: Array<SearchBoxOptions>;
};

export const ListboxOptions = ({
    options,
}: ListboxOptionsProps) => {
    return (
        <div className="results" dir="ltr">
            <ul className="result-groups" role="listbox">
                {options.map((option) => (
                    <li key={option.value} className="group" role="group" aria-label="">{option.text}</li>
                ))}
            </ul>
        </div>
    );
}
