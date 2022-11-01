import React, { useState } from "react";
import { faker } from "@faker-js/faker";

faker.seed(1234);

// Types
import { SearchBoxOption } from "../TS/Types/ListBoxItem";

// Components
import { SearchBox } from "../TS/SearchBox";

export const App = () => {
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [selectedMultipleValue, setSelectedMultipleValue] = useState<Array<string>>([]);
    return (
        <>
            <div>Single Selection:</div>
            <SearchBox value={selectedValue} options={listboxOptions} onSelect={(value) => setSelectedValue(value as string)} />

            <div>Multiple Selection:</div>
            <SearchBox variant="multiple" value={selectedMultipleValue} options={listboxOptions} onSelect={(value) => setSelectedMultipleValue(value as Array<string>)} />
        </>
    );
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