import React from "react";

// Constants
import { CONSTANTS } from "../Shared/Constants";

type ListboxProps = {
    id: string,
    open: boolean;
    placeholder?: string;
    value?: string | Array<string>;
    onToggle: (state: boolean) => void;
};

export const Listbox = ({
    id,
    open,
    onToggle,
    placeholder = "Test"
}: ListboxProps) => {
    const selectedContentId = `${CONSTANTS.SelectionBoxPrefix}-${id}`;
    const selectionContainerId = `${CONSTANTS.ListboxSelectionClassPrefix}-${id}`;

    return (
        <div id={selectionContainerId} className="sb-selection" data-selectbox-id="${uuid}" onClick={() => onToggle(!open)}>
            <div role="combobox" aria-haspopup="true" aria-expanded={open} tabIndex={0} aria-disabled="false" aria-labelledby="" aria-controls="">
                <span className="selection" id={selectedContentId} role="textbox" aria-readonly="true">{placeholder}</span>
                <span className="caret">
                    <span></span>
                </span>
            </div>
        </div>
    );
};
