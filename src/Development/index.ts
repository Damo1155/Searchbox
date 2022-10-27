// import { destroy, initialise, updateOptions } from "../TS/searchbox";

// // Models
// import { SearchBoxGroups, SearchBoxOptions } from "../TS/Models/SearchBoxOptions";

// initialise();

// document.getElementById("create-container").onclick = () => {
//     //createContainer();
// };

// document.getElementById("update-options").onclick = () => {
//     const element = document.getElementById("searchbox-container-1");
//     updateOptions(element, GenerateGroupOptions());
// };

// document.getElementById("clear-options").onclick = () => {
// };

// document.getElementById("destroy-container").onclick = () => {
//     destroy(document.getElementById("searchbox-container-1"));
// };

// const GenerateGroupOptions = (): Array<SearchBoxGroups> => {
//     let groups = [] as Array<SearchBoxGroups>;

//     for (var i = 1; i < 5; i++) {
//         let options = [] as Array<SearchBoxOptions>;
//         for (var x = 0; x < 3; x++) {
//             const randomNumber = parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(4).toString().replace(".", ""));

//             options.push({
//                 value: randomNumber,
//                 text: `Option ${randomNumber}`
//             } as SearchBoxOptions);
//         }

//         groups.push({
//             options: options,
//             text: `Group Text ${parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(4).toString().replace(".", ""))}`
//         } as SearchBoxGroups);
//     }

//     return groups
// }