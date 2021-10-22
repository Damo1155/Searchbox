// Services
import { GenerateIdentifier } from "Services/UniqueIdentifierService";
import { ConfigureMarkup, GenerateOptionsMarkup } from "Services/MarkupService";

// Listeners
import { InitialiseSearchListeners, DestroySearchListeners } from "Listeners/SearchContainerListeners";
import { InitialiseExpanderListeners, DestroyExpanderListeners } from "Listeners/ExpandableContainerListeners";
import { InitialiseSelectableOptionsListeners, DestroySelectableOptionsListeners } from "Listeners/SelectableOptionsListeners";

// Models
import { SearchBoxOptions, SearchBoxGroups } from "Models/SearchBoxOptions";
import { SessionStorageOptionsPrefix } from "./Shared/Constants";

export const initialise = (): void => {
    const elements = document.getElementsByClassName("searchbox");

    // TODO :   On key down or up navigate the tree of 'options'
    for (const element of elements) {
        const uuid = GenerateIdentifier();

        element.innerHTML = ConfigureMarkup(element, uuid);

        InitialiseExpanderListeners(element, uuid);
        InitialiseSearchListeners(element, uuid);
    }
}

export const destroy = (element: HTMLElement): void => {
    DestroySearchListeners(element);
    DestroyExpanderListeners(element);
    DestroySelectableOptionsListeners(element);

    // TODO :   Remove session storage items from memory (i.e. list of options and selected value)

    element.remove();
}

export const destroyAll = (): void => {
    const container = document.getElementsByClassName("searchbox");

    for (const element of container) {
        DestroySearchListeners(element);
        DestroyExpanderListeners(element);
        DestroySelectableOptionsListeners(element);

        // TODO :   Remove session storage items from memory (i.e. list of options and selected value)

        element.remove();
    }
}

export const createContainer = (element: HTMLElement, options?: Array<SearchBoxGroups> | Array<SearchBoxOptions>): void => {
    const uuid = GenerateIdentifier();

    element.innerHTML = ConfigureMarkup(element, uuid);

    InitialiseExpanderListeners(element, uuid);
    InitialiseSelectableOptionsListeners(element, uuid);
}

export const updateOptions = (element: HTMLElement, options: Array<SearchBoxGroups> | Array<SearchBoxOptions>): void => {
    // TODO :   If current selected options is no longer available after the update then clear the sessionStorage object and reset the search box

    const resultsContainer = element.querySelector("div.container div.results"),
        searchBoxUuid = element.querySelector("div").getAttribute("data-selectbox-id"),
        optionsStorageKey = `${SessionStorageOptionsPrefix}-${searchBoxUuid}`;

    DestroySelectableOptionsListeners(element); // Destroy current listeners as to not cause a memory leak

    resultsContainer.innerHTML = GenerateOptionsMarkup(options);

    InitialiseSelectableOptionsListeners(element, parseInt(searchBoxUuid));

    sessionStorage.setItem(optionsStorageKey, JSON.stringify(options));
}

export const addAdditionalOptions = (element: HTMLElement, options: Array<SearchBoxGroups> | Array<SearchBoxOptions>): void => {

}