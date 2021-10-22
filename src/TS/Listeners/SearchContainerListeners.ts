// Constants
import { SearchTextBoxPrefix, SessionStorageOptionsPrefix } from "Shared/Constants";

// Services
import { GenerateOptionsMarkup } from "Services/MarkupService";

// Models
import { SearchBoxOptions, SearchBoxGroups } from "Models/SearchBoxOptions";

export const InitialiseSearchListeners = (element: Element, uuid: number): void => {
    const optionsStorageKey = `${SessionStorageOptionsPrefix}-${uuid}`,
        resultsContainer = element.querySelector("div.container div.results"),
        searchElement = document.getElementById(`${SearchTextBoxPrefix}-${uuid}`) as HTMLInputElement;

    searchElement.addEventListener("input", () => {
        const sessionStorageOptions = sessionStorage.getItem(optionsStorageKey);

        if (sessionStorageOptions) {
            const options = JSON.parse(sessionStorageOptions) as Array<SearchBoxGroups | SearchBoxOptions>;

            const mappedItems = options
                .map((item: SearchBoxGroups | SearchBoxOptions) => {
                    const asSearchBoxGroups = (item as SearchBoxGroups).options;

                    const filteredOptions = asSearchBoxGroups.filter((option: SearchBoxOptions) => {
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
        }
    });
}

export const DestroySearchListeners = (element: Element): void => {
}