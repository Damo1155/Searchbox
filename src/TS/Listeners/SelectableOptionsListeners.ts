// Constants
import { SelectionBoxPrefix, SessionStorageValuePrefix } from "Shared/Constants";

// Enums
import { EventListenerTypes } from "Enums/EventListenerTypes";

// Services
import { SetValue } from "Services/SessionManagementService";

// Listeners
import { CollapseContainer } from "Listeners/ExpandableContainerListeners";

export const InitialiseOptionListeners = (rootElement: Element, uuid: number): void => {
    const selectionBox = document.getElementById(`${SelectionBoxPrefix}-${uuid}`);

    rootElement
        .querySelectorAll("div.results-container div.results li.option")
        .forEach((element: Element) => {
            element.addEventListener(EventListenerTypes.Click, () => {
                selectionBox.innerText = element.getAttribute("data-text");
                SetValue(`${SessionStorageValuePrefix}-${uuid}`, element.getAttribute("data-value"));

                CollapseContainer(rootElement, uuid);                
            });
        })
}

export const DestroySelectableOptionsListeners = (element: Element): void => {
    if (!element) {
        return;
    }

    element.replaceWith(element.cloneNode(true));
}