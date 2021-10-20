import { ListboxSelectionClassPrefix } from "Structure/Constants";

export const ConfigureMarkup = (element: Element, uuid: number): string => {
    const placeholderText = element.getAttribute("data-placeholder") || "Select an option";

    return `
        <div id="${ListboxSelectionClassPrefix}-${uuid}" class="sb-selection">
            <div role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="" aria-controls="">
                <span class="selection" role="textbox" aria-readonly="true">${placeholderText}</span>
                <span class="caret">
                    <span></span>
                </span>
            </div>
        </div>
        <div class="container" dir="ltr" aria-hidden="true">
            <div class="search">
                <input type="search" tabindex="0" autocorrect="off" autocapitialize="none" spellcheck="false" aria-autocomplete="list" autocomplete="off" aria-label="" aria-controls="" />
            </div>
            <div class="results">
                <ul class="result-groups" role="listbox">
                    <li class="group" role="group" aria-label="">
                        <strong class="group-name">Group Name</strong>
                        <ul class="options" role="none">
                            <li class="option" aria-selected="false" role="option">Option</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    `;
}