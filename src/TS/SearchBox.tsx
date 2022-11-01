import React, { ChangeEventHandler, useId, useState } from "react";

// Types
import { SearchBoxOption } from "./Types/ListBoxItem";

// Components
import { Input } from "./Components/Input";
import { Listbox } from "./Components/Listbox";
import { ListboxOptions } from "./Components/ListboxOptions";

type SearchBoxProps = {
    id?: string;
    placeholder?: string;
    options: Array<SearchBoxOption>;
    value: SearchBoxOption | Array<SearchBoxOption>;
};

export const SearchBox = ({
    id,
    value,
    options,
    placeholder = "Please select an option",
}: SearchBoxProps) => {
    const componentId = id ?? useId();

    const [open, setOpen] = useState<boolean>(false);
    const [modifiedOptions, setModifiedOptions] = useState<Array<SearchBoxOption>>(options);

    const onUpdate = (value: string) => {
        const filteredOptions = filterSearchOptions(value, options);
        setModifiedOptions(filteredOptions);
    };

    return (
        <div className="searchbox">
            <Listbox placeholder={placeholder} open={open} onToggle={setOpen} value={value} />
            
            {open && (
                <div className="results-container">
                    <Input onUpdate={onUpdate} />
                    <ListboxOptions value={value} options={modifiedOptions} />
                </div>
            )}
        </div>
    );
};

export const filterSearchOptions = (value: string, originalOptions: Array<SearchBoxOption>) => {
    let filteredOptions = originalOptions;
    
    if (value !== null && value !== undefined) {
        filteredOptions = originalOptions.filter((option) => option.text.toLowerCase().includes(value.toLowerCase()));
    }

    return filteredOptions;
};
