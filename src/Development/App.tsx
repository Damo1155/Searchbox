import React, { useState } from "react";
import { faker } from "@faker-js/faker";

faker.seed(1234);

// Types
import { SearchBoxOption } from "../TS/Types/ListBoxItem";

// Components
import { SearchBox } from "../TS/SearchBox";

export const App = () => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);    
    return <SearchBox value={selectedValue} options={listboxOptions} onSelect={setSelectedValue}  />;
};

const listboxOptions: Array<SearchBoxOption> = [
    {
        id: faker.datatype.uuid(),
        name: faker.name.fullName()
    },
    {
        id: faker.datatype.uuid(),
        name: faker.name.fullName()
    },
    {
        id: faker.datatype.uuid(),
        name: faker.name.fullName()
    },
    {
        id: faker.datatype.uuid(),
        name: faker.name.fullName()
    },
    {
        id: faker.datatype.uuid(),
        name: faker.name.fullName()
    },
];