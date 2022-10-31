import React, { useId, useState } from "react";

// Types
import { SearchBoxOptions } from "./Types/ListBoxItem";

// Components
import { Input } from "./Components/Input";
import { Listbox } from "./Components/Listbox";
import { ListboxOptions } from "./Components/ListboxOptions";

type SearchBoxProps = {
    id?: string;
    placeholder?: string;

    value: string | Array<string>;
    options: Array<SearchBoxOptions>;
};

export const SearchBox = ({
    id,
    value = [],
    options = [],
    placeholder = "Please select an option",
}: SearchBoxProps) => {
    const componentId = id ?? useId();

    const [open, setOpen] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");

    const [modifiedOptions, setModifiedOptions] = useState<Array<SearchBoxOptions>>(options);

    return (
        <div className="searchbox">
            <Listbox id={componentId} placeholder={placeholder} open={open} onToggle={setOpen} value={value} />
            
            {open && (
                <div className="results-container">
                    <div className="search">
                        <Input onUpdate={(value) => setModifiedOptions(filterSearchOptions(value, options))} />
                    </div>
                    <ListboxOptions value={value} options={modifiedOptions} />
                </div>
            )}
        </div>
    );
};

export const filterSearchOptions = (value: string, originalOptions: Array<SearchBoxOptions>) => {
    let filteredOptions = originalOptions;
    
    if (value !== null && value !== undefined) {
        filteredOptions = originalOptions.filter((option) => option.text.toLowerCase().includes(value.toLowerCase()));
    }

    return filteredOptions;
};
