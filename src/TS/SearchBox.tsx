import React, { useState } from "react";

// Types
import { SearchBoxOption } from "./Types/ListBoxItem";

// Components
import { Input } from "./Components/Input";
import { Button } from "./Components/Button";
import { Listbox } from "./Components/Listbox";

type SearchBoxProps = {
    id?: string;
    value?: string;
    placeholder?: string;
    options: Array<SearchBoxOption>;
    onSelect: (id?: string) => void;
};

export const SearchBox = ({
    id,
    value,
    options,
    onSelect,
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
            <Button placeholder={placeholder} open={open} options={options} onToggle={setOpen} value={value} />
            
            {open && (
                <div className="results-container">
                    <Input onChange={onChange} />
                    <Listbox value={value} options={modifiedOptions} onSelect={onSelect} />
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
