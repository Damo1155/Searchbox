// Enums
import { EventListenerTypes } from "Enums/EventListenerTypes";

const SearchboxPrefix = "sb";

export const SelectionBoxPrefix = `${SearchboxPrefix}-selection`;
export const HiddenTextBoxPrefix = `${SearchboxPrefix}-selected`;
export const ResultsContainerPrefix = `${SearchboxPrefix}-results`;
export const ListboxSelectionClassPrefix = `${SearchboxPrefix}-lbs`;

export const EnterKeyCode = "Enter";
export const SpaceKeyCode = "Space";

export const StandardEventListeners = [EventListenerTypes.Click, EventListenerTypes.FocusOut, EventListenerTypes.Keydown] as Array<EventListenerTypes>;