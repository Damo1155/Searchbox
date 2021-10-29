// Enums
import { EventListenerTypes } from "Enums/EventListenerTypes";

// Constants
import { SearchTextBoxPrefix } from "Shared/Constants";

// Models
import { SearchBoxOptions, SearchBoxGroups } from "Models/SearchBoxOptions";

// Services
import { GenerateOptionsMarkup } from "Services/MarkupService";

// Listeners
import { InitialiseOptionListeners } from "Listeners/SelectableOptionsListeners";

export const InitialiseSearchListeners = (rootElement: Element, options: Array<SearchBoxGroups | SearchBoxOptions>, uuid: number): void => {
    rootElement
        .querySelector("div.results-container div.search input")
        .addEventListener(EventListenerTypes.Input, () => {
            const searchElement = document.getElementById(`${SearchTextBoxPrefix}-${uuid}`) as HTMLInputElement,
                resultsContainer = rootElement.querySelector("div.results-container div.results");

            const mappedItems = options
                .map((item: SearchBoxGroups | SearchBoxOptions) => {
                    const asGroup = (item as SearchBoxGroups).options;

                    const filteredOptions = asGroup.filter((option: SearchBoxOptions) => {
                        return option.text.includes(searchElement.value);
                    });

                    if ((!item.text.includes(searchElement.value)) && (!filteredOptions || filteredOptions.length == 0)) {
                        return null;
                    }

                    return {
                        text: item.text,
                        options: filteredOptions
                    } as SearchBoxGroups
                })
                .filter((item) => item != null && item != undefined);

            resultsContainer.innerHTML = GenerateOptionsMarkup(mappedItems);

            InitialiseOptionListeners(rootElement, uuid);
        });
}

export const DestroySearchListeners = (element: Element): void => {
    if (!element) {
        return;
    }

    element.replaceWith(element.cloneNode(true));
}