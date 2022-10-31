import React, { useId, useState } from "react";

// Types
import { SearchBoxOptions } from "./Types/ListBoxItem";

// Components
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

    return (
        <div className="searchbox">
            <Listbox id={componentId} placeholder={placeholder} open={open} onToggle={setOpen} value={value} />
            
            {open && (
                <div className="results-container">
                    <div className="search">
                        <input />
                    </div>
                    <ListboxOptions value={value} options={options} />
                </div>
            )}
        </div>
    );
};