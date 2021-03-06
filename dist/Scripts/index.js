/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Searchbox"] = factory();
	else
		root["Searchbox"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Development/index.ts":
/*!**********************************!*\
  !*** ./src/Development/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TS_searchbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TS/searchbox */ \"./src/TS/searchbox.js\");\n // Models\n\n(0,_TS_searchbox__WEBPACK_IMPORTED_MODULE_0__.initialise)();\n\ndocument.getElementById(\"create-container\").onclick = function () {//createContainer();\n};\n\ndocument.getElementById(\"update-options\").onclick = function () {\n  var element = document.getElementById(\"searchbox-container-1\");\n  (0,_TS_searchbox__WEBPACK_IMPORTED_MODULE_0__.updateOptions)(element, GenerateGroupOptions());\n};\n\ndocument.getElementById(\"clear-options\").onclick = function () {};\n\ndocument.getElementById(\"destroy-container\").onclick = function () {\n  (0,_TS_searchbox__WEBPACK_IMPORTED_MODULE_0__.destroy)(document.getElementById(\"searchbox-container-1\"));\n};\n\nvar GenerateGroupOptions = function GenerateGroupOptions() {\n  var groups = [];\n\n  for (var i = 1; i < 5; i++) {\n    var options = [];\n\n    for (var x = 0; x < 3; x++) {\n      var randomNumber = parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(4).toString().replace(\".\", \"\"));\n      options.push({\n        value: randomNumber,\n        text: \"Option \".concat(randomNumber)\n      });\n    }\n\n    groups.push({\n      options: options,\n      text: \"Group Text \".concat(parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(4).toString().replace(\".\", \"\")))\n    });\n  }\n\n  return groups;\n};\n\n//# sourceURL=webpack://Searchbox/./src/Development/index.ts?");

/***/ }),

/***/ "./src/TS/Enums/EventListenerTypes.js":
/*!********************************************!*\
  !*** ./src/TS/Enums/EventListenerTypes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventListenerTypes\": () => (/* binding */ EventListenerTypes)\n/* harmony export */ });\nvar EventListenerTypes;\n(function (EventListenerTypes) {\n    EventListenerTypes[\"Input\"] = \"input\";\n    EventListenerTypes[\"Click\"] = \"click\";\n    EventListenerTypes[\"Keyup\"] = \"keyup\";\n    EventListenerTypes[\"FocusOut\"] = \"focusout\";\n})(EventListenerTypes || (EventListenerTypes = {}));\n\n//# sourceURL=webpack://Searchbox/./src/TS/Enums/EventListenerTypes.js?");

/***/ }),

/***/ "./src/TS/Listeners/ExpandableContainerListeners.js":
/*!**********************************************************!*\
  !*** ./src/TS/Listeners/ExpandableContainerListeners.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InitialiseExpanderListeners\": () => (/* binding */ InitialiseExpanderListeners),\n/* harmony export */   \"DestroyExpanderListeners\": () => (/* binding */ DestroyExpanderListeners),\n/* harmony export */   \"CollapseContainer\": () => (/* binding */ CollapseContainer)\n/* harmony export */ });\n/* harmony import */ var Enums_EventListenerTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Enums/EventListenerTypes */ \"./src/TS/Enums/EventListenerTypes.js\");\n/* harmony import */ var Shared_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/Constants */ \"./src/TS/Shared/Constants.js\");\n/* harmony import */ var Services_SessionManagementService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Services/SessionManagementService */ \"./src/TS/Services/SessionManagementService.js\");\n/* harmony import */ var Services_MarkupService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Services/MarkupService */ \"./src/TS/Services/MarkupService.js\");\n/* harmony import */ var Listeners_SearchContainerListeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Listeners/SearchContainerListeners */ \"./src/TS/Listeners/SearchContainerListeners.js\");\n/* harmony import */ var Listeners_SelectableOptionsListeners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Listeners/SelectableOptionsListeners */ \"./src/TS/Listeners/SelectableOptionsListeners.js\");\n\n\n\n\n\n\nconst InitialiseExpanderListeners = (rootElement, uuid) => {\n    [Enums_EventListenerTypes__WEBPACK_IMPORTED_MODULE_0__.EventListenerTypes.Click, Enums_EventListenerTypes__WEBPACK_IMPORTED_MODULE_0__.EventListenerTypes.Keyup]\n        .forEach((eventType) => {\n        rootElement.querySelector(\".sb-selection\")\n            .addEventListener(eventType, (event) => {\n            const listenerConfiguration = {\n                \"click\": () => {\n                    ExpandableEventHandler(rootElement, event, uuid);\n                },\n                \"keyup\": () => {\n                }\n            };\n            const callback = listenerConfiguration[eventType];\n            callback ? callback() : new Error(`No event listener configured for event type '${eventType}'`);\n        });\n    });\n};\nconst DestroyExpanderListeners = (element) => {\n    if (!element) {\n        return;\n    }\n    element.replaceWith(element.cloneNode(true));\n};\nconst CollapseContainer = (rootElement, uuid) => {\n    rootElement.classList.remove(\"expanded\");\n    const listboxElement = document.getElementById(`${Shared_Constants__WEBPACK_IMPORTED_MODULE_1__.ListboxSelectionClassPrefix}-${uuid}`);\n    listboxElement.querySelector(\"div\").setAttribute(\"aria-expanded\", `${false}`);\n};\nconst ExpandableEventHandler = (rootElement, event, uuid) => {\n    const selectionBox = document.getElementById(`${Shared_Constants__WEBPACK_IMPORTED_MODULE_1__.SelectionBoxPrefix}-${uuid}`), selectionContainer = document.getElementById(`${Shared_Constants__WEBPACK_IMPORTED_MODULE_1__.ListboxSelectionClassPrefix}-${uuid}`).querySelector(\"div\");\n    const expanderCallback = {\n        Expand: () => {\n            rootElement.classList.add(\"expanded\");\n            selectionContainer.setAttribute(\"aria-expanded\", \"true\");\n            const options = (0,Services_SessionManagementService__WEBPACK_IMPORTED_MODULE_2__.GetJSONObject)(`${Shared_Constants__WEBPACK_IMPORTED_MODULE_1__.SessionStorageOptionsPrefix}-${uuid}`);\n            console.log(options);\n            if (options && options.length > 0) {\n                console.log(\"Accessed\");\n                const newElement = document.createElement(\"div\");\n                newElement.innerHTML = (0,Services_MarkupService__WEBPACK_IMPORTED_MODULE_3__.GenerateResultContainerMarkup)(options, uuid);\n                rootElement.appendChild(newElement.firstElementChild);\n                (0,Listeners_SelectableOptionsListeners__WEBPACK_IMPORTED_MODULE_5__.InitialiseOptionListeners)(rootElement, uuid);\n                (0,Listeners_SearchContainerListeners__WEBPACK_IMPORTED_MODULE_4__.InitialiseSearchListeners)(rootElement, options, uuid);\n            }\n            else {\n            }\n        },\n        Collapse: () => {\n            CollapseContainer(rootElement, uuid);\n        }\n    };\n    const isExpanded = rootElement.classList.contains(\"expanded\");\n    isExpanded ? expanderCallback.Collapse() : expanderCallback.Expand();\n};\n\n//# sourceURL=webpack://Searchbox/./src/TS/Listeners/ExpandableContainerListeners.js?");

/***/ }),

/***/ "./src/TS/Listeners/SearchContainerListeners.js":
/*!******************************************************!*\
  !*** ./src/TS/Listeners/SearchContainerListeners.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InitialiseSearchListeners\": () => (/* binding */ InitialiseSearchListeners),\n/* harmony export */   \"DestroySearchListeners\": () => (/* binding */ DestroySearchListeners)\n/* harmony export */ });\n/* harmony import */ var Enums_EventListenerTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Enums/EventListenerTypes */ \"./src/TS/Enums/EventListenerTypes.js\");\n/* harmony import */ var Shared_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/Constants */ \"./src/TS/Shared/Constants.js\");\n/* harmony import */ var Services_MarkupService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Services/MarkupService */ \"./src/TS/Services/MarkupService.js\");\n/* harmony import */ var Listeners_SelectableOptionsListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Listeners/SelectableOptionsListeners */ \"./src/TS/Listeners/SelectableOptionsListeners.js\");\n\n\n\n\nconst InitialiseSearchListeners = (rootElement, options, uuid) => {\n    rootElement\n        .querySelector(\"div.results-container div.search input\")\n        .addEventListener(Enums_EventListenerTypes__WEBPACK_IMPORTED_MODULE_0__.EventListenerTypes.Input, () => {\n        const searchElement = document.getElementById(`${Shared_Constants__WEBPACK_IMPORTED_MODULE_1__.SearchTextBoxPrefix}-${uuid}`), resultsContainer = rootElement.querySelector(\"div.results-container div.results\");\n        const mappedItems = options\n            .map((item) => {\n            const asGroup = item.options;\n            const filteredOptions = asGroup.filter((option) => {\n                return option.text.includes(searchElement.value);\n            });\n            if ((!item.text.includes(searchElement.value)) && (!filteredOptions || filteredOptions.length == 0)) {\n                return null;\n            }\n            return {\n                text: item.text,\n                options: filteredOptions\n            };\n        })\n            .filter((item) => item != null && item != undefined);\n        resultsContainer.innerHTML = (0,Services_MarkupService__WEBPACK_IMPORTED_MODULE_2__.GenerateOptionsMarkup)(mappedItems);\n        (0,Listeners_SelectableOptionsListeners__WEBPACK_IMPORTED_MODULE_3__.InitialiseOptionListeners)(rootElement, uuid);\n    });\n};\nconst DestroySearchListeners = (element) => {\n    if (!element) {\n        return;\n    }\n    element.replaceWith(element.cloneNode(true));\n};\n\n//# sourceURL=webpack://Searchbox/./src/TS/Listeners/SearchContainerListeners.js?");

/***/ }),

/***/ "./src/TS/Listeners/SelectableOptionsListeners.js":
/*!********************************************************!*\
  !*** ./src/TS/Listeners/SelectableOptionsListeners.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InitialiseOptionListeners\": () => (/* binding */ InitialiseOptionListeners),\n/* harmony export */   \"DestroySelectableOptionsListeners\": () => (/* binding */ DestroySelectableOptionsListeners)\n/* harmony export */ });\n/* harmony import */ var Shared_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/Constants */ \"./src/TS/Shared/Constants.js\");\n/* harmony import */ var Enums_EventListenerTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Enums/EventListenerTypes */ \"./src/TS/Enums/EventListenerTypes.js\");\n/* harmony import */ var Services_SessionManagementService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Services/SessionManagementService */ \"./src/TS/Services/SessionManagementService.js\");\n/* harmony import */ var Listeners_ExpandableContainerListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Listeners/ExpandableContainerListeners */ \"./src/TS/Listeners/ExpandableContainerListeners.js\");\n\n\n\n\nconst InitialiseOptionListeners = (rootElement, uuid) => {\n    const selectionBox = document.getElementById(`${Shared_Constants__WEBPACK_IMPORTED_MODULE_0__.SelectionBoxPrefix}-${uuid}`);\n    rootElement\n        .querySelectorAll(\"div.results-container div.results li.option\")\n        .forEach((element) => {\n        element.addEventListener(Enums_EventListenerTypes__WEBPACK_IMPORTED_MODULE_1__.EventListenerTypes.Click, () => {\n            selectionBox.innerText = element.getAttribute(\"data-text\");\n            (0,Services_SessionManagementService__WEBPACK_IMPORTED_MODULE_2__.SetValue)(`${Shared_Constants__WEBPACK_IMPORTED_MODULE_0__.SessionStorageValuePrefix}-${uuid}`, element.getAttribute(\"data-value\"));\n            (0,Listeners_ExpandableContainerListeners__WEBPACK_IMPORTED_MODULE_3__.CollapseContainer)(rootElement, uuid);\n        });\n    });\n};\nconst DestroySelectableOptionsListeners = (element) => {\n    if (!element) {\n        return;\n    }\n    element.replaceWith(element.cloneNode(true));\n};\n\n//# sourceURL=webpack://Searchbox/./src/TS/Listeners/SelectableOptionsListeners.js?");

/***/ }),

/***/ "./src/TS/Services/MarkupService.js":
/*!******************************************!*\
  !*** ./src/TS/Services/MarkupService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConfigureMarkup\": () => (/* binding */ ConfigureMarkup),\n/* harmony export */   \"GenerateResultContainerMarkup\": () => (/* binding */ GenerateResultContainerMarkup),\n/* harmony export */   \"GenerateOptionsMarkup\": () => (/* binding */ GenerateOptionsMarkup)\n/* harmony export */ });\n/* harmony import */ var Shared_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/Constants */ \"./src/TS/Shared/Constants.js\");\n\nconst ConfigureMarkup = (element, uuid) => {\n    const placeholderText = element.getAttribute(\"data-placeholder\") || \"Select an option\";\n    return `\r\n        <div id=\"${Shared_Constants__WEBPACK_IMPORTED_MODULE_0__.ListboxSelectionClassPrefix}-${uuid}\" class=\"sb-selection\" data-selectbox-id=\"${uuid}\">\r\n            <div role=\"combobox\" aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\" aria-disabled=\"false\" aria-labelledby=\"\" aria-controls=\"\">\r\n                <span class=\"selection\" id=\"${Shared_Constants__WEBPACK_IMPORTED_MODULE_0__.SelectionBoxPrefix}-${uuid}\" role=\"textbox\" aria-readonly=\"true\">${placeholderText}</span>\r\n                <span class=\"caret\">\r\n                    <span></span>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    `;\n};\nconst GenerateResultContainerMarkup = (options, uuid) => {\n    return `\r\n        <div class=\"results-container\" aria-hidden=\"false\">\r\n            <div class=\"search\">\r\n                <input id=\"${Shared_Constants__WEBPACK_IMPORTED_MODULE_0__.SearchTextBoxPrefix}-${uuid}\"\r\n                        type=\"search\" tabindex=\"0\" autocorrect=\"off\" autocapitialize=\"none\" spellcheck=\"false\" aria-autocomplete=\"list\" autocomplete=\"off\" aria-label=\"\" aria-controls=\"\" />\r\n            </div>\r\n            <div class=\"results\" dir=\"ltr\" id=\"${Shared_Constants__WEBPACK_IMPORTED_MODULE_0__.ResultsContainerPrefix}-${uuid}\">\r\n                ${GenerateOptionsMarkup(options)}\r\n            </div>\r\n        </div>\r\n    `;\n};\nconst GenerateOptionsMarkup = (options) => {\n    let markup = \"\";\n    options.forEach((item) => {\n        let listOptions = \"\";\n        const group = item;\n        if (group.options && group.options.length > 0) {\n            group.options.forEach((option) => {\n                listOptions += `\r\n                    <li class=\"option\" aria-selected=\"false\" role=\"option\" tabindex=\"0\"\r\n                        data-value=\"${option.value}\" data-text=\"${option.text}\">\r\n                        ${option.text}\r\n                    </li>\r\n                `;\n            });\n        }\n        markup += `\r\n            <li class=\"group\" role=\"group\" aria-label=\"\">\r\n                <strong class=\"group-name\">${item.text}</strong>\r\n                <ul class=\"options\" role=\"none\">\r\n                    ${listOptions.toString()}\r\n                </ul>\r\n            </li>\r\n        `;\n    });\n    return `\r\n        <ul class=\"result-groups\" role=\"listbox\">\r\n            ${markup.toString()}\r\n        </ul>\r\n    `;\n};\n\n//# sourceURL=webpack://Searchbox/./src/TS/Services/MarkupService.js?");

/***/ }),

/***/ "./src/TS/Services/SessionManagementService.js":
/*!*****************************************************!*\
  !*** ./src/TS/Services/SessionManagementService.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SetValue\": () => (/* binding */ SetValue),\n/* harmony export */   \"SetJSONObject\": () => (/* binding */ SetJSONObject),\n/* harmony export */   \"GetJSONObject\": () => (/* binding */ GetJSONObject),\n/* harmony export */   \"RemoveItem\": () => (/* binding */ RemoveItem)\n/* harmony export */ });\nconst SetValue = (identifier, value) => {\n    sessionStorage.setItem(identifier, value.toString());\n};\nconst SetJSONObject = (identifier, object) => {\n    sessionStorage.setItem(identifier, JSON.stringify(object));\n};\nconst GetJSONObject = (identifier) => {\n    const sessionItem = sessionStorage.getItem(identifier);\n    return sessionItem ? JSON.parse(sessionItem) : null;\n};\nconst RemoveItem = (identifier) => {\n    sessionStorage.removeItem(identifier);\n};\n\n//# sourceURL=webpack://Searchbox/./src/TS/Services/SessionManagementService.js?");

/***/ }),

/***/ "./src/TS/Services/UniqueIdentifierService.js":
/*!****************************************************!*\
  !*** ./src/TS/Services/UniqueIdentifierService.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GenerateIdentifier\": () => (/* binding */ GenerateIdentifier)\n/* harmony export */ });\nconst GenerateIdentifier = () => {\n    return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(16).toString().replace(\".\", \"\"));\n};\n\n//# sourceURL=webpack://Searchbox/./src/TS/Services/UniqueIdentifierService.js?");

/***/ }),

/***/ "./src/TS/Shared/Constants.js":
/*!************************************!*\
  !*** ./src/TS/Shared/Constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchTextBoxPrefix\": () => (/* binding */ SearchTextBoxPrefix),\n/* harmony export */   \"SelectionBoxPrefix\": () => (/* binding */ SelectionBoxPrefix),\n/* harmony export */   \"SessionStorageValuePrefix\": () => (/* binding */ SessionStorageValuePrefix),\n/* harmony export */   \"ResultsContainerPrefix\": () => (/* binding */ ResultsContainerPrefix),\n/* harmony export */   \"SessionStorageOptionsPrefix\": () => (/* binding */ SessionStorageOptionsPrefix),\n/* harmony export */   \"ListboxSelectionClassPrefix\": () => (/* binding */ ListboxSelectionClassPrefix),\n/* harmony export */   \"EnterKeyCode\": () => (/* binding */ EnterKeyCode),\n/* harmony export */   \"SpaceKeyCode\": () => (/* binding */ SpaceKeyCode)\n/* harmony export */ });\nconst SearchboxPrefix = \"sb\";\nconst SearchTextBoxPrefix = `${SearchboxPrefix}-stb`;\nconst SelectionBoxPrefix = `${SearchboxPrefix}-selection`;\nconst SessionStorageValuePrefix = `${SearchboxPrefix}-ssv`;\nconst ResultsContainerPrefix = `${SearchboxPrefix}-results`;\nconst SessionStorageOptionsPrefix = `${SearchboxPrefix}-ssv`;\nconst ListboxSelectionClassPrefix = `${SearchboxPrefix}-lbs`;\nconst EnterKeyCode = \"Enter\";\nconst SpaceKeyCode = \"Space\";\n\n//# sourceURL=webpack://Searchbox/./src/TS/Shared/Constants.js?");

/***/ }),

/***/ "./src/TS/searchbox.js":
/*!*****************************!*\
  !*** ./src/TS/searchbox.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialise\": () => (/* binding */ initialise),\n/* harmony export */   \"createContainer\": () => (/* binding */ createContainer),\n/* harmony export */   \"updateOptions\": () => (/* binding */ updateOptions),\n/* harmony export */   \"addAdditionalOptions\": () => (/* binding */ addAdditionalOptions),\n/* harmony export */   \"destroy\": () => (/* binding */ destroy),\n/* harmony export */   \"destroyAll\": () => (/* binding */ destroyAll)\n/* harmony export */ });\n/* harmony import */ var Shared_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/Constants */ \"./src/TS/Shared/Constants.js\");\n/* harmony import */ var Services_UniqueIdentifierService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Services/UniqueIdentifierService */ \"./src/TS/Services/UniqueIdentifierService.js\");\n/* harmony import */ var Services_SessionManagementService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Services/SessionManagementService */ \"./src/TS/Services/SessionManagementService.js\");\n/* harmony import */ var Services_MarkupService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Services/MarkupService */ \"./src/TS/Services/MarkupService.js\");\n/* harmony import */ var Listeners_SearchContainerListeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Listeners/SearchContainerListeners */ \"./src/TS/Listeners/SearchContainerListeners.js\");\n/* harmony import */ var Listeners_ExpandableContainerListeners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Listeners/ExpandableContainerListeners */ \"./src/TS/Listeners/ExpandableContainerListeners.js\");\n/* harmony import */ var Listeners_SelectableOptionsListeners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Listeners/SelectableOptionsListeners */ \"./src/TS/Listeners/SelectableOptionsListeners.js\");\n\n\n\n\n\n\n\nconst initialise = () => {\n    const elements = document.getElementsByClassName(\"searchbox\");\n    for (const element of elements) {\n        const uuid = (0,Services_UniqueIdentifierService__WEBPACK_IMPORTED_MODULE_1__.GenerateIdentifier)();\n        element.innerHTML = (0,Services_MarkupService__WEBPACK_IMPORTED_MODULE_3__.ConfigureMarkup)(element, uuid);\n        (0,Listeners_ExpandableContainerListeners__WEBPACK_IMPORTED_MODULE_5__.InitialiseExpanderListeners)(element, uuid);\n    }\n};\nconst createContainer = (element, options) => {\n    const uuid = (0,Services_UniqueIdentifierService__WEBPACK_IMPORTED_MODULE_1__.GenerateIdentifier)();\n    element.innerHTML = (0,Services_MarkupService__WEBPACK_IMPORTED_MODULE_3__.ConfigureMarkup)(element, uuid);\n    (0,Listeners_ExpandableContainerListeners__WEBPACK_IMPORTED_MODULE_5__.InitialiseExpanderListeners)(element, uuid);\n    (0,Listeners_SelectableOptionsListeners__WEBPACK_IMPORTED_MODULE_6__.InitialiseOptionListeners)(element, uuid);\n};\nconst updateOptions = (element, options) => {\n    const firstChildElement = element.querySelector(\"div\"), searchBoxUuid = parseInt(firstChildElement.getAttribute(\"data-selectbox-id\"));\n    (0,Services_SessionManagementService__WEBPACK_IMPORTED_MODULE_2__.SetJSONObject)(`${Shared_Constants__WEBPACK_IMPORTED_MODULE_0__.SessionStorageOptionsPrefix}-${searchBoxUuid}`, options);\n};\nconst addAdditionalOptions = (element, options) => {\n};\nconst destroy = (element) => {\n    const searchBoxUuid = element.querySelector(\"div\").getAttribute(\"data-selectbox-id\");\n    (0,Services_SessionManagementService__WEBPACK_IMPORTED_MODULE_2__.RemoveItem)(`${Shared_Constants__WEBPACK_IMPORTED_MODULE_0__.SessionStorageValuePrefix}-${searchBoxUuid}`);\n    (0,Services_SessionManagementService__WEBPACK_IMPORTED_MODULE_2__.RemoveItem)(`${Shared_Constants__WEBPACK_IMPORTED_MODULE_0__.SessionStorageOptionsPrefix}-${searchBoxUuid}`);\n    (0,Listeners_SearchContainerListeners__WEBPACK_IMPORTED_MODULE_4__.DestroySearchListeners)(element);\n    (0,Listeners_ExpandableContainerListeners__WEBPACK_IMPORTED_MODULE_5__.DestroyExpanderListeners)(element);\n    (0,Listeners_SelectableOptionsListeners__WEBPACK_IMPORTED_MODULE_6__.DestroySelectableOptionsListeners)(element);\n    element.remove();\n};\nconst destroyAll = () => {\n    const container = document.getElementsByClassName(\"searchbox\");\n    for (const element of container) {\n        const searchBoxUuid = element.querySelector(\"div\").getAttribute(\"data-searchbox-id\");\n        (0,Services_SessionManagementService__WEBPACK_IMPORTED_MODULE_2__.RemoveItem)(`${Shared_Constants__WEBPACK_IMPORTED_MODULE_0__.SessionStorageValuePrefix}-${searchBoxUuid}`);\n        (0,Services_SessionManagementService__WEBPACK_IMPORTED_MODULE_2__.RemoveItem)(`${Shared_Constants__WEBPACK_IMPORTED_MODULE_0__.SessionStorageOptionsPrefix}-${searchBoxUuid}`);\n        (0,Listeners_SearchContainerListeners__WEBPACK_IMPORTED_MODULE_4__.DestroySearchListeners)(element);\n        (0,Listeners_ExpandableContainerListeners__WEBPACK_IMPORTED_MODULE_5__.DestroyExpanderListeners)(element);\n        (0,Listeners_SelectableOptionsListeners__WEBPACK_IMPORTED_MODULE_6__.DestroySelectableOptionsListeners)(element);\n        element.remove();\n    }\n};\n\n//# sourceURL=webpack://Searchbox/./src/TS/searchbox.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("index." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("5a46d748c206777fd620")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "Searchbox:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateSearchbox"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Development/index.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});