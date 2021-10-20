// Constants
import { SpaceKeyCode, EnterKeyCode, ResultsContainerPrefix, HiddenTextBoxPrefix, SelectionBoxPrefix } from "Shared/Constants";

export const InitialiseSelectableOptionsListeners = (uuid: number): void => {
    const resultsElement = document.getElementById(`${ResultsContainerPrefix}-${uuid}`);
    const optionsElements = resultsElement.querySelectorAll("ul.options li");
    const hiddenInput = document.getElementById(`${HiddenTextBoxPrefix}-${uuid}`) as HTMLInputElement;
    const selectionBox = document.getElementById(`${SelectionBoxPrefix}-${uuid}`);

    optionsElements.forEach((element: Element) => {
        ["click", "keydown", "focusout"].forEach((eventType: string) => {
            element.addEventListener(eventType, (event) => {
                const listenerConfiguration = {
                    "click": () => {
                        SetValueSelected(element, hiddenInput, selectionBox);
                    },
                    "keydown": () => {
                        const keyboardEvent = event as KeyboardEvent;

                        if (keyboardEvent.code == SpaceKeyCode || keyboardEvent.code == EnterKeyCode) {
                            SetValueSelected(element, hiddenInput, selectionBox);
                        }
                    },
                    "focusout": () => {
                        // TODO :   Collapse the whole container and leave the selected value alone
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
    ["click", "keydown", "focusout"].forEach((eventType: string) => {
        //element.removeEventListener(eventType);
    });
}

const SetValueSelected = (element: Element, input: HTMLInputElement, selectionBox: HTMLElement): void => {
    // TODO :   Close container after selection

    input.value = element.getAttribute("data-value");
    selectionBox.innerText = element.getAttribute("data-text");
}