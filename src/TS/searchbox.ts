// Models
import { SearchBoxOptions, SearchBoxGroups } from "Models/SearchBoxOptions";

// Constants
import { SessionStorageOptionsPrefix, SessionStorageValuePrefix } from "Shared/Constants";

// Services
import { ConfigureMarkup } from "Services/MarkupService";
import { GenerateIdentifier } from "Services/UniqueIdentifierService";
import { RemoveItem, SetJSONObject } from "Services/SessionManagementService";

// Listeners
import { DestroySearchListeners } from "Listeners/SearchContainerListeners";
import { InitialiseExpanderListeners, DestroyExpanderListeners } from "Listeners/ExpandableContainerListeners";
import { InitialiseOptionListeners, DestroySelectableOptionsListeners } from "Listeners/SelectableOptionsListeners";

export const initialise = (): void => {
    const elements = document.getElementsByClassName("searchbox");

    // TODO :   On key down or up navigate the tree of 'options'
    for (const element of elements) {
        const uuid = GenerateIdentifier();

        element.innerHTML = ConfigureMarkup(element, uuid);

        InitialiseExpanderListeners(element, uuid);
    }

    // TODO :   Before closing the tab, refresh or redirect wipe out the session storeage
}

export const createContainer = (element: HTMLElement, options?: Array<SearchBoxGroups | SearchBoxOptions>): void => {
    const uuid = GenerateIdentifier();

    element.innerHTML = ConfigureMarkup(element, uuid);

    InitialiseExpanderListeners(element, uuid);
    InitialiseOptionListeners(element, uuid);
}

export const updateOptions = (element: HTMLElement, options: Array<SearchBoxGroups | SearchBoxOptions>): void => {
    // TODO :   If selected options is no longer available after the update then clear the sessionStorage object and reset the search box

    const firstChildElement = element.querySelector("div"),
        searchBoxUuid = parseInt(firstChildElement.getAttribute("data-selectbox-id"));

    SetJSONObject(`${SessionStorageOptionsPrefix}-${searchBoxUuid}`, options);
}

export const addAdditionalOptions = (element: HTMLElement, options: Array<SearchBoxGroups> | Array<SearchBoxOptions>): void => {

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
        const searchBoxUuid = element.querySelector("div").getAttribute("data-searchbox-id");

        RemoveItem(`${SessionStorageValuePrefix}-${searchBoxUuid}`);
        RemoveItem(`${SessionStorageOptionsPrefix}-${searchBoxUuid}`);
        
        DestroySearchListeners(element);
        DestroyExpanderListeners(element);
        DestroySelectableOptionsListeners(element);

        element.remove();
    }
}