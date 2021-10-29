// Enums
import { EventListenerTypes } from "Enums/EventListenerTypes";
import { KeyboardEventTypes } from "Enums/KeyboardEventTypes";

// Constants
import { ListboxSelectionClassPrefix, SelectionBoxPrefix, SessionStorageOptionsPrefix } from "Shared/Constants";

// Models
import { SearchBoxOptions, SearchBoxGroups } from "Models/SearchBoxOptions";

// Services
import { GetJSONObject } from "Services/SessionManagementService";
import { GenerateResultContainerMarkup } from "Services/MarkupService";
import { InitialiseSearchListeners } from "Listeners/SearchContainerListeners";
import { InitialiseOptionListeners } from "Listeners/SelectableOptionsListeners";

export const InitialiseExpanderListeners = (rootElement: Element, uuid: number): void => {
    [EventListenerTypes.Click, EventListenerTypes.Keyup]
        .forEach((eventType: EventListenerTypes) => {
            rootElement.querySelector(".sb-selection")
                .addEventListener(eventType, (event: MouseEvent | KeyboardEvent | FocusEvent) => {
                    const listenerConfiguration = {
                        "click": (): void => {
                            ExpandableEventHandler(rootElement, event, uuid);
                        },
                        "keyup": (): void => {
                            const keyboardEvent = event as KeyboardEvent;

                            if (keyboardEvent.code == KeyboardEventTypes.SpaceKeyCode || keyboardEvent.code == KeyboardEventTypes.EnterKeyCode) {
                                ExpandableEventHandler(rootElement, event, uuid);
                            }
                        }
                    };

                    const callback = listenerConfiguration[eventType] as Function;

                    callback ? callback() : new Error(`No event listener configured for event type '${eventType}'`);
                });
        });
}

export const DestroyExpanderListeners = (element: Element): void => {
    if (!element) {
        return;
    }

    element.replaceWith(element.cloneNode(true));
}

export const CollapseContainer = (rootElement: Element, uuid: number): void => {
    rootElement.classList.remove("expanded");

    const listboxElement = document.getElementById(`${ListboxSelectionClassPrefix}-${uuid}`);
    listboxElement.querySelector("div").setAttribute("aria-expanded", `${false}`);

    const resultsContainer = rootElement.querySelector(".results-container");

    // TODO :   Calls to destroy the event listeners

    if (resultsContainer) {
        resultsContainer.remove();
    }
}

const ExpandableEventHandler = (rootElement: Element, event: Event, uuid: number): void => {
    const selectionContainer = document.getElementById(`${ListboxSelectionClassPrefix}-${uuid}`).querySelector("div");

    const expanderCallback = {
        Expand: (): void => {
            rootElement.classList.add("expanded");
            selectionContainer.setAttribute("aria-expanded", "true");

            const options = GetJSONObject(`${SessionStorageOptionsPrefix}-${uuid}`) as Array<SearchBoxGroups | SearchBoxOptions>;

            if (options && options.length > 0) {
                const newElement = document.createElement("div");

                newElement.innerHTML = GenerateResultContainerMarkup(options, uuid);
                rootElement.appendChild(newElement.firstElementChild);

                InitialiseOptionListeners(rootElement, uuid);
                InitialiseSearchListeners(rootElement, options, uuid);
            } else {

            }
        },
        Collapse: (): void => {
            CollapseContainer(rootElement, uuid);
        }
    };

    const isExpanded = rootElement.classList.contains("expanded");

    isExpanded ? expanderCallback.Collapse() : expanderCallback.Expand();
}