// Enums
import { EventListenerTypes } from "Enums/EventListenerTypes";

const SearchboxPrefix = "sb";

export const SearchTextBoxPrefix = `${SearchboxPrefix}-stb`;
export const SelectionBoxPrefix = `${SearchboxPrefix}-selection`;
export const SessionStorageValuePrefix = `${SearchboxPrefix}-ssv`;
export const ResultsContainerPrefix = `${SearchboxPrefix}-results`;
export const SessionStorageOptionsPrefix = `${SearchboxPrefix}-ssv`;
export const ListboxSelectionClassPrefix = `${SearchboxPrefix}-lbs`;

export const EnterKeyCode = "Enter";
export const SpaceKeyCode = "Space";

export const StandardEventListeners = [EventListenerTypes.Click, EventListenerTypes.FocusOut, EventListenerTypes.Keydown] as Array<EventListenerTypes>;