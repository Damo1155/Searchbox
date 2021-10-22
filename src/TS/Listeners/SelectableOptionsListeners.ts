// Enums
import { EventListenerTypes } from "Enums/EventListenerTypes";

// Listeners
import { CollapseContainer } from "Listeners/ExpandableContainerListeners";

// Constants
import { SpaceKeyCode, EnterKeyCode, ResultsContainerPrefix, SelectionBoxPrefix, StandardEventListeners, SessionStorageValuePrefix } from "Shared/Constants";

export const InitialiseSelectableOptionsListeners = (parentElement: Element, uuid: number): void => {
    const resultsElement = document.getElementById(`${ResultsContainerPrefix}-${uuid}`);
    const optionsElements = resultsElement.querySelectorAll("ul.options li");
    const selectionBox = document.getElementById(`${SelectionBoxPrefix}-${uuid}`);

    optionsElements.forEach((element: Element) => {
        StandardEventListeners.forEach((eventType: EventListenerTypes) => {
            element.addEventListener(eventType, (event) => {
                const listenerConfiguration = {
                    "click": (): void => {
                        CollapseContainer(parentElement, uuid);
                        SetValueSelected(element, selectionBox, uuid);
                    },
                    "keydown": () => {
                        const keyboardEvent = event as KeyboardEvent;

                        if (keyboardEvent.code == SpaceKeyCode || keyboardEvent.code == EnterKeyCode) {
                            CollapseContainer(parentElement, uuid);
                            SetValueSelected(element, selectionBox, uuid);
                        }
                    },
                    "focusout": (): void => {
                        const focusEvent = event as FocusEvent,
                            hasRelatedElement = parentElement.contains(<any>focusEvent.relatedTarget);

                        // Purpose  :   If the click event is not related to the focused search box then close 
                        //              the Searchbox.
                        if (!hasRelatedElement) {
                            CollapseContainer(parentElement, uuid);
                        }
                    }
                }

                const callback = listenerConfiguration[eventType] as Function;

                if (!callback) {
                    throw new Error(`No event listener configured for event type '${eventType}'`);
                }

                callback();
            });
        });
    });
}

export const DestroySelectableOptionsListeners = (element: Element): void => {
    StandardEventListeners.forEach((eventType: EventListenerTypes) => {
        //element.removeEventListener(eventType);
    });
}

const SetValueSelected = (element: Element, selectionBox: HTMLElement, uuid: number): void => {
    selectionBox.innerText = element.getAttribute("data-text");
    sessionStorage.setItem(`${SessionStorageValuePrefix}-${uuid}`, element.getAttribute("data-value"));
}