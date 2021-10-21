// Services
import { GenerateIdentifier } from "Services/UniqueIdentifierService";
import { ConfigureMarkup, GenerateOptionsMarkup } from "Services/MarkupService";

// Listeners
import { InitialiseExpanderListeners, DestroyExpanderListeners } from "Listeners/ExpandableContainerListeners";
import { InitialiseSelectableOptionsListeners, DestroySelectableOptionsListeners } from "Listeners/SelectableOptionsListeners";

// Models
import { SearchBoxOptions, SearchBoxGroups } from "Models/SearchBoxOptions";

export const initialise = (): void => {
    const elements = document.getElementsByClassName("searchbox");

    // TODO :   On key down or up navigate the tree of 'options'
    for (const element of elements) {
        const uuid = GenerateIdentifier();

        element.innerHTML = ConfigureMarkup(element, uuid);

        InitialiseExpanderListeners(element, uuid);
    }
}

export const destroy = (element: HTMLElement): void => {
    DestroyExpanderListeners(element);
    DestroySelectableOptionsListeners(element);

    element.remove();
}

export const destroyAll = (): void => {
    const container = document.getElementsByClassName("searchbox");

    for (const element of container) {
        DestroyExpanderListeners(element);
        DestroySelectableOptionsListeners(element);

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
    const resultsContainer = element.querySelector("div.container div.results");

    DestroySelectableOptionsListeners(element);

    resultsContainer.innerHTML = GenerateOptionsMarkup(options);

    const searchBoxUuid = element.querySelector("div").getAttribute("data-selectbox-id");
    InitialiseSelectableOptionsListeners(element, parseInt(searchBoxUuid));
}

export const addAdditionalOptions = (element: HTMLElement, options: Array<SearchBoxGroups> | Array<SearchBoxOptions>): void => {

}