// Constants
import { ListboxSelectionClassPrefix, ResultsContainerPrefix, SelectionBoxPrefix, SearchTextBoxPrefix } from "Shared/Constants";

// Models
import { SearchBoxOptions, SearchBoxGroups } from "Models/SearchBoxOptions";

export const ConfigureMarkup = (element: Element, uuid: number): string => {
    const placeholderText = element.getAttribute("data-placeholder") || "Select an option";

    return `
        <div data-selectbox-id="${uuid}">
            <div id="${ListboxSelectionClassPrefix}-${uuid}" class="sb-selection">
                <div role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="" aria-controls="">
                    <span class="selection" id="${SelectionBoxPrefix}-${uuid}" role="textbox" aria-readonly="true">${placeholderText}</span>
                    <span class="caret">
                        <span></span>
                    </span>
                </div>
            </div>
            <div class="container" aria-hidden="true">
                <div class="search">
                    <input id="${SearchTextBoxPrefix}-${uuid}"
                           type="search" tabindex="0" autocorrect="off" autocapitialize="none" spellcheck="false" aria-autocomplete="list" autocomplete="off" aria-label="" aria-controls="" />
                </div>
                <div class="results" dir="ltr" id="${ResultsContainerPrefix}-${uuid}">
                    
                </div>
            </div>
        </div>
    `;
}

export const GenerateOptionsMarkup = (options: Array<SearchBoxGroups | SearchBoxOptions>): string => {
    // TODO :   If a flat list of options then change up 'result-groups' architecture as it's currently dependent on child items being provided.
    // TODO :   If no options available on search then display an appropriate message

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