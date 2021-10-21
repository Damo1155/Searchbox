// Enums
import { EventListenerTypes } from "Enums/EventListenerTypes";

// Constants
import { ListboxSelectionClassPrefix, SpaceKeyCode, EnterKeyCode, StandardEventListeners } from "Shared/Constants";

export const InitialiseExpanderListeners = (element: Element, uuid: number): void => {
    const listboxElement = document.getElementById(`${ListboxSelectionClassPrefix}-${uuid}`);

    StandardEventListeners.forEach((eventType: EventListenerTypes) => {
        listboxElement.addEventListener(eventType, (event: MouseEvent | KeyboardEvent | FocusEvent) => {
            const listenerConfiguration = {
                "click": (): void => {
                    ExpandableEvent(element, listboxElement);
                },
                "keydown": (): void => {
                    const keyboardEvent = event as KeyboardEvent;

                    if (keyboardEvent.code == SpaceKeyCode || keyboardEvent.code == EnterKeyCode) {
                        ExpandableEvent(element, listboxElement);
                    }
                },
                "focusout": (): void => {
                    const focusEvent = event as FocusEvent,
                        hasRelatedElement = element.contains(<any>focusEvent.relatedTarget);

                    // Purpose  :   If the click event is not related to the focused search box then close 
                    //              the Searchbox.
                    if (!hasRelatedElement) {
                        ExpandableEvent(element, listboxElement);
                    }
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
    StandardEventListeners.forEach((eventType: EventListenerTypes) => {
        //element.removeEventListener(eventType);
    });
}

export const CollapseContainer = (element: Element, uuid: number): void => {
    element.classList.remove("expanded");

    const listboxElement = document.getElementById(`${ListboxSelectionClassPrefix}-${uuid}`);
    listboxElement.querySelector("div").setAttribute("aria-expanded", `${false}`);
}

const ExpandableEvent = (element: Element, listboxElement: HTMLElement): void => {
    const isExpanded = element.matches(".expanded");

    isExpanded ? element.classList.remove("expanded") : element.classList.add("expanded");
    listboxElement.querySelector("div").setAttribute("aria-expanded", `${!isExpanded}`);
}