export const InitialiseExpanderListeners = (rootElement: Element, uuid: number): void => {
    // rootElement.addEventListener("focusout", (event: Event) => {
    //     if (!rootElement.contains((<any>event).relatedTarget)) {
    //         CollapseContainer(rootElement, uuid, true);
    //     }
    // });

    // ["click", "keyup"]
    //     .forEach((eventType: ListenerEventType) => {
    //         rootElement.querySelector(".sb-selection")
    //             .addEventListener(eventType, (event: MouseEvent | KeyboardEvent | FocusEvent) => {
    //                 const listenerConfiguration = {
    //                     "click": (): void => {
    //                         ExpandableEventHandler(rootElement, event, uuid);
    //                     },
    //                     "keyup": (): void => {
    //                         const keyboardEvent = event as KeyboardEvent;
    //                         const keyCode = keyboardEvent.code as KeyboardEventType;

    //                         if (keyCode === "Space" || keyCode === "Enter") {
    //                             ExpandableEventHandler(rootElement, event, uuid);
    //                         }
    //                     }
    //                 };

    //                 const callback = listenerConfiguration[eventType] as Function;

    //                 callback ? callback() : new Error(`No event listener configured for event type '${eventType}'`);
    //             });
    //     });
}

export const DestroyExpanderListeners = (element: Element): void => {
    // if (!element) {
    //     return;
    // }

    // element.replaceWith(element.cloneNode(true));
}

export const CollapseContainer = (rootElement: Element, uuid: number, ignoreRemove: boolean = false): void => {
    // rootElement.classList.remove("expanded");

    // const listboxElement = document.getElementById(`${CONSTANTS.ListboxSelectionClassPrefix}-${uuid}`);
    // listboxElement.querySelector("div").setAttribute("aria-expanded", `${false}`);

    // const resultsContainer = rootElement.querySelector(".results-container");

    // // TODO :   Calls to destroy the event listeners

    // if (resultsContainer && !ignoreRemove) {
    //     resultsContainer.remove();
    // }
}

const ExpandableEventHandler = (rootElement: Element, event: Event, uuid: number): void => {
    // const selectionContainer = document.getElementById(`${CONSTANTS.ListboxSelectionClassPrefix}-${uuid}`).querySelector("div");

    // const expanderCallback = {
    //     Expand: (): void => {
    //         rootElement.classList.add("expanded");
    //         selectionContainer.setAttribute("aria-expanded", "true");

    //         const options = GetJSONObject(`${CONSTANTS.SessionStorageOptionsPrefix}-${uuid}`) as Array<SearchBoxGroups | SearchBoxOptions>;

    //         if (options && options.length > 0) {
    //             const newElement = document.createElement("div");

    //             newElement.innerHTML = GenerateResultContainerMarkup(options, uuid);
    //             rootElement.appendChild(newElement.firstElementChild);

    //             InitialiseOptionListeners(rootElement, uuid);
    //             InitialiseSearchListeners(rootElement, options, uuid);
    //         } else {
    //             // TODO :   Open up with no options available message
    //         }
    //     },
    //     Collapse: (): void => {
    //         CollapseContainer(rootElement, uuid);
    //     }
    // };

    // const isExpanded = rootElement.classList.contains("expanded");

    // isExpanded ? expanderCallback.Collapse() : expanderCallback.Expand();
}