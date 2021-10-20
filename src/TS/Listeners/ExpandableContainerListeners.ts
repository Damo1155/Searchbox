// Constants
import { ListboxSelectionClassPrefix, SpaceKeyCode, EnterKeyCode } from "Shared/Constants";

export const InitialiseExpanderListeners = (element: Element, uuid: number): void => {
    const listboxElement = document.getElementById(`${ListboxSelectionClassPrefix}-${uuid}`);

    ["click", "keydown", "focusout"].forEach((eventType: string) => {
        listboxElement.addEventListener(eventType, (event) => {
            const listenerConfiguration = {
                "click": () => {
                    ExpandableEvent(element, listboxElement);
                },
                "keydown": () => {
                    const keyboardEvent = event as KeyboardEvent;

                    if (keyboardEvent.code == SpaceKeyCode || keyboardEvent.code == EnterKeyCode) {
                        ExpandableEvent(element, listboxElement);
                    }
                },
                "focusout": () => {
                    // TODO :   Collapse the container if the element focusing out of doesn't belong to the current Searchbox
                }
            }

            const callback = listenerConfiguration[eventType] as Function;

            if (!callback) {
                throw new Error(`No event listener configured for event type '${eventType}'`);
            }

            callback();
        });
    });
}

export const DestroyExpanderListeners = (element: Element): void => {
    ["click", "keydown", "focusout"].forEach((eventType: string) => {
        //element.removeEventListener(eventType);
    });
}

const ExpandableEvent = (element: Element, listboxElement: HTMLElement): void => {
    const isExpanded = element.matches(".expanded");

    isExpanded ? element.classList.remove("expanded") : element.classList.add("expanded");
    listboxElement.querySelector("div").setAttribute("aria-expanded", `${!isExpanded}`);
}