// Structure
import { ConfigureMarkup } from "Structure/Markup";
import { ListboxSelectionClassPrefix, SpaceKeyCode, EnterKeyCode } from "Structure/Constants";

export const initialise = (): void => {
    const container = document.getElementsByClassName("searchbox");

    for (const item of container) {
        const uuid = UniqueIdentifier();

        item.innerHTML = ConfigureMarkup(item, uuid);

        const listSelectionElement = document.getElementById(`${ListboxSelectionClassPrefix}-${uuid}`);

        // TODO :   Swap these to event based delegation
        listSelectionElement
            .addEventListener("click", () => {
                ExpandableEvent(item, listSelectionElement);
            });

        listSelectionElement
            .addEventListener("keydown", (event: KeyboardEvent) => {
                if (event.code == SpaceKeyCode || event.code == EnterKeyCode) {
                    ExpandableEvent(item, listSelectionElement);
                }
            });
    }
}

const ExpandableEvent = (container: Element, listSelectionElement: HTMLElement): void => {
    const isExpanded = container.matches(".expanded");

    isExpanded ? container.classList.remove("expanded") : container.classList.add("expanded");
    listSelectionElement.querySelector("div").setAttribute("aria-expanded", `${!isExpanded}`);
}

const UniqueIdentifier = (): number => {
    return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(16).toString().replace(".", ""));
}