import React from "react";
import { faker } from "@faker-js/faker";

// Types
import { SearchBoxOptions } from "../TS/Types/ListBoxItem";

// Components
import { SearchBox } from "../TS/SearchBox";

export const App = () => {    
    const options: Array<SearchBoxOptions> = [];

    for (let index = 0; index < 10; index++) {
        options.push({
            text: faker.name.fullName(),
            value: faker.datatype.uuid()
        });
    }
    
    return <SearchBox value="" options={options} />;
};