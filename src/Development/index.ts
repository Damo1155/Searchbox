import { destroy, initialise, updateOptions } from "../TS/searchbox";

// Models
import { SearchBoxGroups, SearchBoxOptions } from "../TS/Models/SearchBoxOptions";

initialise();

document.getElementById("update-options").onclick = () => {
    const element = document.getElementById("searchbox-container-1");

    let groups = [] as Array<SearchBoxGroups>;

    for (var i = 1; i < 5; i++) {
        let options = [] as Array<SearchBoxOptions>;
        for (var x = 0; x < 3; x++) {
            const randomNumber = Math.ceil(Math.random() * Date.now());

            options.push({
                value: randomNumber,
                text: `Option ${randomNumber}`
            } as SearchBoxOptions);
        }

        groups.push({
            options: options,
            text: `Group Text ${Math.ceil(Math.random() * Date.now())}`
        } as SearchBoxGroups);
    }

    updateOptions(element, groups);
};

document.getElementById("clear-options").onclick = () => {
};

document.getElementById("destroy-container").onclick = () => {
    const element = document.getElementById("searchbox-container-1");
    destroy(element);
};