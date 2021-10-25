// Enums
import { EventListenerTypes } from "Enums/EventListenerTypes";

// Constants
import { ListboxSelectionClassPrefix, SpaceKeyCode, EnterKeyCode, StandardEventListeners, SessionStorageOptionsPrefix } from "Shared/Constants";

// Models
import { SearchBoxOptions, SearchBoxGroups } from "Models/SearchBoxOptions";

// Listeners
import { DestroySearchListeners, InitialiseSearchListeners } from "Listeners/SearchContainerListeners";
import { DestroySelectableOptionsListeners, InitialiseSelectableOptionsListeners } from "Listeners/SelectableOptionsListeners";

// Services
import { GenerateOptionsMarkup } from "Services/MarkupService";
import { GetJSONObject } from "Services/SessionManagementService";

export const InitialiseExpanderListeners = (rootElement: Element, uuid: number): void => {
    StandardEventListeners.forEach((eventType: EventListenerTypes) => {
        rootElement.addEventListener(eventType, (event: MouseEvent | KeyboardEvent | FocusEvent) => {
            const listenerConfiguration = {
                "click": (): void => {
                    EventHandler(rootElement, event, uuid);
                },
                "keydown": (): void => {
                    const keyboardEvent = event as KeyboardEvent;

                    if (keyboardEvent.code == SpaceKeyCode || keyboardEvent.code == EnterKeyCode) {
                        EventHandler(rootElement, event, uuid);
                    }
                },
                "focusout": (): void => {
                    EventHandler(rootElement, event, uuid);
                }
            };

            const callback = listenerConfiguration[eventType] as Function;

            if (!callback) {
                throw new Error(`No event listener configured for event type '${eventType}'`);
            }

            callback();
        });
    });
}

export const DestroyExpanderListeners = (element: Element): void => {
    if (!element) {
        return;
    }

    element.replaceWith(element.cloneNode(true));
}

export const CollapseContainer = (element: Element, uuid: number): void => {
    element.classList.remove("expanded");

    const listboxElement = document.getElementById(`${ListboxSelectionClassPrefix}-${uuid}`);
    listboxElement.querySelector("div").setAttribute("aria-expanded", `${false}`);
}

const EventHandler = (rootElement: Element, event: Event, uuid: number): void => {
    const hasRelatedElement = rootElement.contains((<any>event).relatedTarget),
        selectionContainer = document.getElementById(`${ListboxSelectionClassPrefix}-${uuid}`).querySelector("div.sb-selection div");

    const expanderCallback = {
        Expand: (): void => {
            rootElement.classList.add("expanded");
            selectionContainer.setAttribute("aria-expanded", "true");

            const options = GetJSONObject(`${SessionStorageOptionsPrefix}-${uuid}`) as Array<SearchBoxGroups | SearchBoxOptions>;

            if (options && options.length > 0) {
                const newElement = document.createElement("div");

                newElement.innerHTML = GenerateOptionsMarkup(options, uuid);                
                rootElement.appendChild(newElement.firstElementChild);
            } else {
                // OPEN CONTAINER WITH 'NO OPTIONS FOUND' MESSAGE
            }
        },
        Collapse: (): void => {
            rootElement.classList.remove("expanded");
            selectionContainer.setAttribute("aria-expanded", "false");

            const resultsContainerElement = rootElement.querySelector(".results-container");

            // TODO :   Encompassing item to destroy the event listeners
            DestroySearchListeners(resultsContainerElement);
            DestroySelectableOptionsListeners(resultsContainerElement);

            if (resultsContainerElement) {
                resultsContainerElement.remove();
            }
        },
        SelectNode: (): void => {

        }
    };

    // TODO :   If child item selected is LI.OPTION then select it
    //          If child item selected is the search container then do nothing
    //          If child item selected is DIV.SB-SELECTION then close the container          
    //          If child item selected is STRONG.GROUP-NAME then do nothing
    //          If selected item does not belong to the container then hide the search box
    //rootElement.classList.contains("expanded") ? expanderCallback.Collapse() : expanderCallback.Expand();
}