// Constants
import { CONSTANTS } from "Shared/Constants";

// Types
import { SearchBoxOptions, SearchBoxGroups } from "src/TS/Types/ListBoxItem";

export const ConfigureMarkup = (element: Element, uuid: number): string => {
    const placeholderText = element.getAttribute("data-placeholder") || "Select an option";

    return `
        <div id="${CONSTANTS.ListboxSelectionClassPrefix}-${uuid}" class="sb-selection" data-selectbox-id="${uuid}">
            <div role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="" aria-controls="">
                <span class="selection" id="${CONSTANTS.SelectionBoxPrefix}-${uuid}" role="textbox" aria-readonly="true">${placeholderText}</span>
                <span class="caret">
                    <span></span>
                </span>
            </div>
        </div>
    `;
}

export const GenerateResultContainerMarkup = (options: Array<SearchBoxGroups | SearchBoxOptions>, uuid: number): string => {
    return `
        <div class="results-container" aria-hidden="false">
            <div class="search">
                <input id="${CONSTANTS.SearchTextBoxPrefix}-${uuid}"
                        type="search" tabindex="0" autocorrect="off" autocapitialize="none" spellcheck="false" aria-autocomplete="list" autocomplete="off" aria-label="" aria-controls="" />
            </div>
            <div class="results" dir="ltr" id="${CONSTANTS.ResultsContainerPrefix}-${uuid}">
                ${GenerateOptionsMarkup(options)}
            </div>
        </div>
    `;
}

export const GenerateOptionsMarkup = (options: Array<SearchBoxGroups | SearchBoxOptions>): string => {
    let markup = "";
    options.forEach((item: SearchBoxGroups | SearchBoxOptions) => {
        let listOptions = "";
        const group = item as SearchBoxGroups;

        if (group.options && group.options.length > 0) {
            group.options.forEach((option: SearchBoxOptions) => {
                listOptions += `
                    <li class="option" aria-selected="false" role="option" tabindex="0"
                        data-value="${option.value}" data-text="${option.text}">
                        ${option.text}
                    </li>
                `;
            });
        }

        markup += `
            <li class="group" role="group" aria-label="">
                <strong class="group-name">${item.text}</strong>
                <ul class="options" role="none">
                    ${listOptions.toString()}
                </ul>
            </li>
        `
    });

    return `
        <ul class="result-groups" role="listbox">
            ${markup.toString()}
        </ul>
    `;
}