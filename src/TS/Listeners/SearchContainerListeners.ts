// Constants
import { SearchTextBoxPrefix } from "Shared/Constants";

export const InitialiseSearchListeners = (element: Element, uuid: number): void => {
    const searchElement = document.getElementById(`${SearchTextBoxPrefix}-${uuid}`) as HTMLInputElement;

    searchElement.addEventListener("keyup", (event) => {
        console.log("New Value: ", searchElement.value);
    });
}

export const DestroySearchListeners = (element: Element): void => {
}