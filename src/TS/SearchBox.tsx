import React, { useState } from "react";

// Types
import { SelectionVariant } from "./Types/Variants";
import { SearchBoxOption } from "./Types/ListBoxItem";

// Components
import { Input } from "./Components/Input";
import { Button } from "./Components/Button";
import { Listbox } from "./Components/Listbox";

type SearchBoxProps = {
    placeholder?: string;
    variant?: SelectionVariant;
    value?: string | Array<string>;
    options: Array<SearchBoxOption>;
    onSelect: (selection?: string | Array<string>) => void;
};

export const SearchBox = ({
    value,
    options,
    onSelect,
    variant = "single",
    placeholder = "Please select an option",
}: SearchBoxProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [modifiedOptions, setModifiedOptions] = useState<Array<SearchBoxOption>>(options);

    const onChange = (value: string) => {
        const filteredOptions = filterSearchOptions(value, options);
        setModifiedOptions(filteredOptions);
    };

    return (
        <div className="searchbox">
            <Button placeholder={placeholder} open={open} options={options} onToggle={setOpen} value={value} variant={variant} />
            
            {open && (
                <div className="results-container">
                    <Input onChange={onChange} />
                    <Listbox variant={variant} value={value} options={modifiedOptions} onSelect={onSelect} />
                </div>
            )}
        </div>
    );
};

export const filterSearchOptions = (value: string, originalOptions: Array<SearchBoxOption>) => {
    let filteredOptions = originalOptions;
    
    if (value !== null && value !== undefined) {
        filteredOptions = originalOptions.filter((option) => option.name.toLowerCase().includes(value.toLowerCase()));
    }

    return filteredOptions;
};
