// Constants
import { SearchTextBoxPrefix, SessionStorageOptionsPrefix } from "Shared/Constants";

// Models
import { SearchBoxOptions, SearchBoxGroups } from "Models/SearchBoxOptions";

// Services
import { GenerateOptionsMarkup } from "Services/MarkupService";
import { GetJSONObject } from "Services/SessionManagementService";

export const InitialiseSearchListeners = (element: Element, uuid: number): void => {
    const optionsStorageKey = `${SessionStorageOptionsPrefix}-${uuid}`,
        resultsContainer = element.querySelector("div.container div.results"),
        searchElement = document.getElementById(`${SearchTextBoxPrefix}-${uuid}`) as HTMLInputElement;

    searchElement.addEventListener("input", () => {
        console.log(123);
        const options = GetJSONObject(optionsStorageKey) as Array<SearchBoxGroups | SearchBoxOptions>;

        if (options) {
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
        }
    });
}

export const DestroySearchListeners = (element: Element): void => {
    element.replaceWith(element.cloneNode(true));
}