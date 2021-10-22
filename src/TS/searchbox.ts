// Models
import { SearchBoxOptions, SearchBoxGroups } from "Models/SearchBoxOptions";

// Constants
import { SessionStorageOptionsPrefix, SessionStorageValuePrefix } from "Shared/Constants";

// Services
import { GenerateIdentifier } from "Services/UniqueIdentifierService";
import { RemoveItem, SetJSONObject } from "Services/SessionManagementService";
import { ConfigureMarkup, GenerateOptionsMarkup } from "Services/MarkupService";

// Listeners
import { InitialiseSearchListeners, DestroySearchListeners } from "Listeners/SearchContainerListeners";
import { InitialiseExpanderListeners, DestroyExpanderListeners } from "Listeners/ExpandableContainerListeners";
import { InitialiseSelectableOptionsListeners, DestroySelectableOptionsListeners } from "Listeners/SelectableOptionsListeners";

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
    const searchBoxUuid = element.querySelector("div").getAttribute("data-selectbox-id");

    RemoveItem(`${SessionStorageValuePrefix}-${searchBoxUuid}`);
    RemoveItem(`${SessionStorageOptionsPrefix}-${searchBoxUuid}`);

    DestroySearchListeners(element);
    DestroyExpanderListeners(element);
    DestroySelectableOptionsListeners(element);

    element.remove();
}

export const destroyAll = (): void => {
    const container = document.getElementsByClassName("searchbox");

    for (const element of container) {
        const searchBoxUuid = element.querySelector("div").getAttribute("data-selectbox-id");

        RemoveItem(`${SessionStorageValuePrefix}-${searchBoxUuid}`);
        RemoveItem(`${SessionStorageOptionsPrefix}-${searchBoxUuid}`);
        
        DestroySearchListeners(element);
        DestroyExpanderListeners(element);
        DestroySelectableOptionsListeners(element);

        element.remove();
    }
}

export const createContainer = (element: HTMLElement, options?: Array<SearchBoxGroups | SearchBoxOptions>): void => {
    const uuid = GenerateIdentifier();

    element.innerHTML = ConfigureMarkup(element, uuid);

    InitialiseExpanderListeners(element, uuid);
    InitialiseSelectableOptionsListeners(element, uuid);
}

export const updateOptions = (element: HTMLElement, options: Array<SearchBoxGroups | SearchBoxOptions>): void => {
    // TODO :   If selected options is no longer available after the update then clear the sessionStorage object and reset the search box

    const resultsContainer = element.querySelector("div.container div.results"),
        searchBoxUuid = element.querySelector("div").getAttribute("data-selectbox-id");

    DestroySelectableOptionsListeners(element); // Destroy current listeners as to not cause a memory leak

    resultsContainer.innerHTML = GenerateOptionsMarkup(options);

    InitialiseSelectableOptionsListeners(element, parseInt(searchBoxUuid));

    SetJSONObject(`${SessionStorageOptionsPrefix}-${searchBoxUuid}`, options);
}

export const addAdditionalOptions = (element: HTMLElement, options: Array<SearchBoxGroups> | Array<SearchBoxOptions>): void => {

}