// Constants
import { ListboxSelectionClassPrefix, HiddenTextBoxPrefix, ResultsContainerPrefix, SelectionBoxPrefix } from "Shared/Constants";

export const ConfigureMarkup = (element: Element, uuid: number): string => {
    const placeholderText = element.getAttribute("data-placeholder") || "Select an option";

    // TODO :   If a flat list of options then change up 'result-groups' architecture as it's currently dependent on child items being provided.
    // TODO :   If no options available on search then display an appropriate message
    return `
        <input id="${HiddenTextBoxPrefix}-${uuid}" type="hidden" disabled="true" aria-hidden="true" />
        <div id="${ListboxSelectionClassPrefix}-${uuid}" class="sb-selection">
            <div role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="" aria-controls="">
                <span class="selection" id="${SelectionBoxPrefix}-${uuid}" role="textbox" aria-readonly="true">${placeholderText}</span>
                <span class="caret">
                    <span></span>
                </span>
            </div>
        </div>
        <div class="container" aria-hidden="true">
            <div class="search">
                <input type="search" tabindex="0" autocorrect="off" autocapitialize="none" spellcheck="false" aria-autocomplete="list" autocomplete="off" aria-label="" aria-controls="" />
            </div>
            <div class="results" dir="ltr" id="${ResultsContainerPrefix}-${uuid}">
                <ul class="result-groups" role="listbox">
                    <li class="group" role="group" aria-label="">
                        <strong class="group-name">Group Name</strong>
                        <ul class="options" role="none">
                            <li class="option" aria-selected="false" role="option"
                                data-value="1" data-text="Option 1">
                                Option 1
                            </li>
                            <li class="option" aria-selected="false" role="option"
                                data-value="2" data-text="Option 2">
                                Option 2
                            </li>
                            <li class="option" aria-selected="false" role="option"
                                data-value="3" data-text="Option 3">
                                Option 3
                            </li>
                            <li class="option" aria-selected="false" role="option"
                                data-value="4" data-text="Option 4">
                                Option 4
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    `;
}