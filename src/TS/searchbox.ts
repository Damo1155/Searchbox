// Services
import { ConfigureMarkup } from "Services/MarkupService";
import { GenerateIdentifier } from "Services/UniqueIdentifierService";

// Listeners
import { InitialiseExpanderListeners, DestroyExpanderListeners } from "Listeners/ExpandableContainerListeners";
import { InitialiseSelectableOptionsListeners, DestroySelectableOptionsListeners } from "Listeners/SelectableOptionsListeners";

export const initialise = (): void => {
    const elements = document.getElementsByClassName("searchbox");

    // TODO :   On key down or up navigate the tree of 'options'
    for (const element of elements) {
        const uuid = GenerateIdentifier();

        element.innerHTML = ConfigureMarkup(element, uuid);

        InitialiseExpanderListeners(element, uuid);
        InitialiseSelectableOptionsListeners(uuid);
    }
}

export const destroy = (identifier: string): void => {
    const element = document.getElementById(identifier);

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

export const createSearchBox = (identifier: string): void => {
    const uuid = GenerateIdentifier(),
        element = document.getElementById(identifier);

    element.innerHTML = ConfigureMarkup(element, uuid);

    InitialiseExpanderListeners(element, uuid);
    InitialiseSelectableOptionsListeners(uuid);
}

export const updateSearchBoxOptions = (identifier: string): void => {

}