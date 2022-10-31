import React from "react";

// Types
import { SearchBoxOptions } from "../Types/ListBoxItem";

// Constants
import { CONSTANTS } from "../Shared/Constants";

type ListboxOptionsProps = {
    value?: string | Array<string>;
    options: Array<SearchBoxOptions>;
};

export const ListboxOptions = ({
    options
}: ListboxOptionsProps) => {
    // let markup = "";
    // options.forEach((item: SearchBoxGroups | SearchBoxOptions) => {
    //     let listOptions = "";
    //     const group = item as SearchBoxGroups;

    //     if (group.options && group.options.length > 0) {
    //         group.options.forEach((option: SearchBoxOptions) => {
    //             listOptions += `
    //                 <li class="option" aria-selected="false" role="option" tabindex="0"
    //                     data-value="${option.value}" data-text="${option.text}">
    //                     ${option.text}
    //                 </li>
    //             `;
    //         });
    //     }

    //     markup += `
    //         <li class="group" role="group" aria-label="">
    //             <strong class="group-name">${item.text}</strong>
    //             <ul class="options" role="none">
    //                 ${listOptions.toString()}
    //             </ul>
    //         </li>
    //     `
    // });

    return (
        <div className="results" dir="ltr">
            <ul className="result-groups" role="listbox">
                <li className="group" role="group" aria-label="">Option 1</li>
                <li className="group" role="group" aria-label="">Option 2</li>
                <li className="group" role="group" aria-label="">Option 3</li>
                <li className="group" role="group" aria-label="">Option 4</li>
            </ul>
        </div>
    );
}