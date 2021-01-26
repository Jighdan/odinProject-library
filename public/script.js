/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ComponentBase.js":
/*!*****************************************!*\
  !*** ./src/components/ComponentBase.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ComponentBase\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.js\");\n\n\nclass ComponentBase {\n\tconstructor(props={}) {\n\t\tthis.render = this.render || function(){};\n\n\t\tif (props.store instanceof _store_store__WEBPACK_IMPORTED_MODULE_0__.default) {\n\t\t\tprops.store.events.subscribe(\"stateChange\", () => this.render());\n\t\t};\n\n\t\tif (props.hasOwnProperty(\"element\")) {\n\t\t\tthis.element = props.element;\n\t\t};\n\t};\n};\n\n\n//# sourceURL=webpack://odin-project-library/./src/components/ComponentBase.js?");

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Form\n/* harmony export */ });\n/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentBase */ \"./src/components/ComponentBase.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../store/index */ \"./src/store/index.js\");\n\n\n\nclass Form extends _ComponentBase__WEBPACK_IMPORTED_MODULE_0__.default {\n\tconstructor() {\n\t\tsuper({ store: _store_index__WEBPACK_IMPORTED_MODULE_1__.default, element: document.getElementById(\"newBookForm\") });\n\t\tthis.hasRenderedOnce = false;\n\t};\n\n\taddEvents() {\n\t\tthis.element.addEventListener(\"submit\", (event) => {\n\t\t\tevent.preventDefault();\n\n\t\t\tconst formElements = this.element.elements;\n\t\t\tconst bookData = {\n\t\t\t\ttitle: formElements.title.value,\n\t\t\t\tauthor: formElements.author.value,\n\t\t\t\t// Converting string to boolean -> \n\t\t\t\t//\thttps://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript\n\t\t\t\tstatus: (formElements.status.value === \"true\")\n\t\t\t};\n\n\t\t\t// Clear form elements values\n\t\t\tformElements.title.value = \"\";\n\t\t\tformElements.author.value = \"\";\n\n\t\t\t_store_index__WEBPACK_IMPORTED_MODULE_1__.default.commit(\"addBook\", { bookData });\n\t\t});\n\t};\n\n\trender() {\n\t\tif (!this.hasRenderedOnce) {\n\t\t\tthis.addEvents();\n\t\t};\n\n\t\tthis.hasRenderedOnce = true;\n\t\treturn this.element;\n\t};\n};\n\n//# sourceURL=webpack://odin-project-library/./src/components/Form.js?");

/***/ }),

/***/ "./src/components/Table/TableRowDelete.js":
/*!************************************************!*\
  !*** ./src/components/Table/TableRowDelete.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TableRowDelete\n/* harmony export */ });\n/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentBase */ \"./src/components/ComponentBase.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.js\");\n\n\n\nclass TableRowDelete extends _ComponentBase__WEBPACK_IMPORTED_MODULE_0__.default {\n\tconstructor(rowId) {\n\t\tsuper({ store: _store_index__WEBPACK_IMPORTED_MODULE_1__.default, element: document.createElement(\"button\") });\n\t\tthis.rowId = rowId;\n\t\tthis.hasRenderedOnce = false;\n\n\t\tthis.element.setAttribute(\"type\", \"button\");\n\t\tthis.element.classList.add(\"btn\", \"btn-danger\");\n\t\tthis.element.innerText = \"Delete\";\n\t};\n\n\taddEvents() {\n\t\tthis.element.addEventListener(\"click\", () => {\n\t\t\t_store_index__WEBPACK_IMPORTED_MODULE_1__.default.commit(\"removeBook\", { bookId: this.rowId });\n\t\t});\n\t};\n\n\trender() {\n\t\tif (!this.hasRenderedOnce) {\n\t\t\tthis.addEvents();\n\t\t};\n\n\t\tthis.hasRenderedOnce = true;\n\t\treturn this.element;\n\t}\n};\n\n//# sourceURL=webpack://odin-project-library/./src/components/Table/TableRowDelete.js?");

/***/ }),

/***/ "./src/components/Table/TableRowStatus.js":
/*!************************************************!*\
  !*** ./src/components/Table/TableRowStatus.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TableRowStatus\n/* harmony export */ });\n/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentBase */ \"./src/components/ComponentBase.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.js\");\n// For more information on styling -> https://getbootstrap.com/docs/5.0/components/buttons/#outline-buttons\n\n\n\nclass TableRowStatus extends _ComponentBase__WEBPACK_IMPORTED_MODULE_0__.default {\n\tconstructor (rowId, status) {\n\t\tsuper({ store: _store_index__WEBPACK_IMPORTED_MODULE_1__.default, element: document.createElement(\"button\") });\n\t\tthis.rowId = rowId;\n\t\tthis.status = status;\n\t\tthis.hasRenderedOnce = false;\n\n\t\tthis.element.setAttribute(\"type\", \"button\");\n\t\tthis.element.classList.add(\"btn\");\n\t};\n\n\taddEvents() {\n\t\tthis.element.addEventListener(\"click\", () => {\n\t\t\tthis.element.classList.remove(\"btn-outline-secondary\", \"btn-outline-success\");\n\t\t\t_store_index__WEBPACK_IMPORTED_MODULE_1__.default.commit(\"updateBookStatus\", { bookId: this.rowId });\n\t\t});\n\t};\n\n\trender() {\n\t\tif (!this.hasRenderedOnce) {\n\t\t\tthis.addEvents();\n\t\t};\n\n\t\tif (!this.status) {\n\t\t\tthis.element.classList.add(\"btn-outline-secondary\");\n\t\t\tthis.element.innerText = \"Not Read\";\n\t\t};\n\n\t\tif (this.status) {\n\t\t\tthis.element.classList.add(\"btn-outline-success\");\n\t\t\tthis.element.innerText = \"Read\";\n\t\t};\n\n\t\tthis.hasRenderedOnce = true;\n\t\treturn this.element;\n\t};\n};\n\n//# sourceURL=webpack://odin-project-library/./src/components/Table/TableRowStatus.js?");

/***/ }),

/***/ "./src/components/Table/index.js":
/*!***************************************!*\
  !*** ./src/components/Table/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Table\n/* harmony export */ });\n/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentBase */ \"./src/components/ComponentBase.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.js\");\n/* harmony import */ var _tableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableRow */ \"./src/components/Table/tableRow.js\");\n// For more information on styling -> https://getbootstrap.com/docs/5.0/content/tables/\n\n\n\n\nclass Table extends _ComponentBase__WEBPACK_IMPORTED_MODULE_0__.default {\n\tconstructor() {\n\t\tsuper({ store: _store_index__WEBPACK_IMPORTED_MODULE_1__.default, element: document.getElementById(\"libraryContainer\") });\n\t\tthis.tableBody = document.createElement(\"tbody\");\n\t\tthis.element.appendChild(this.tableBody);\n\n\t\tthis.hasRenderedOnce = false;\n\t};\n\n\tgenerateHeaders() {\n\t\t// Need a last empty header to compensate for the `delete` button of each row\n\t\tconst availableHeaders = [\"#\", \"Title\", \"Author\", \"Status\", \"\"];\n\t\tconst tableHeader = document.createElement(\"thead\");\n\n\t\tconst headers = availableHeaders.map(headerText => {\n\t\t\tconst headerItemContainer = document.createElement(\"th\");\n\t\t\theaderItemContainer.setAttribute(\"scope\", \"col\");\n\n\t\t\tconst headerItemText = document.createElement(\"h4\");\n\t\t\theaderItemText.innerText = headerText;\n\n\t\t\theaderItemContainer.appendChild(headerItemText);\n\t\t\treturn headerItemContainer;\n\t\t});\n\n\t\ttableHeader.append(...headers);\n\t\tthis.element.appendChild(tableHeader);\n\t};\n\n\tgenerateBody() {\n\t\tconst tableRows = _store_index__WEBPACK_IMPORTED_MODULE_1__.default.state.library.map(book => new _tableRow__WEBPACK_IMPORTED_MODULE_2__.default(book).render());\n\t\tthis.tableBody.append(...tableRows);\n\t};\n\n\tgeneratePlaceholderText() {\n\t\tconst placeholderText = document.createElement(\"p\");\n\t\tplaceholderText.classList.add(\"lead\");\n\t\tplaceholderText.innerText = \"No Books Added... Yet\"\n\n\t\treturn placeholderText;\n\t};\n\n\trender() {\n\t\t// Headers will be generated independently there's content\n\t\tif (!this.hasRenderedOnce) {\n\t\t\tthis.generateHeaders();\n\t\t};\n\n\t\t// Clear the table body\n\t\tthis.tableBody.innerHTML = \"\";\n\n\t\tconst storedLibraryHasContent = _store_index__WEBPACK_IMPORTED_MODULE_1__.default.state.library.length;\n\n\t\tif (!storedLibraryHasContent) {\n\t\t\tconst placeholderText = this.generatePlaceholderText();\n\t\t\tthis.tableBody.appendChild(placeholderText);\n\t\t};\n\n\t\tif (storedLibraryHasContent) {\n\t\t\tthis.generateBody();\n\t\t};\n\n\t\tthis.hasRenderedOnce = true;\n\t\treturn this.element;\n\t}\n}\n\n//# sourceURL=webpack://odin-project-library/./src/components/Table/index.js?");

/***/ }),

/***/ "./src/components/Table/tableRow.js":
/*!******************************************!*\
  !*** ./src/components/Table/tableRow.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TableRow\n/* harmony export */ });\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.js\");\n/* harmony import */ var _TableRowStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableRowStatus */ \"./src/components/Table/TableRowStatus.js\");\n/* harmony import */ var _TableRowDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableRowDelete */ \"./src/components/Table/TableRowDelete.js\");\n\n\n\n\nclass TableRow {\n\tconstructor(rowData) {\n\t\tthis.rowData = rowData;\n\t\tthis.element = document.createElement(\"tr\");\n\t\tthis.element.setAttribute(\"data-row-id\", rowData.id);\n\t};\n\n\tgenerateRow() {\n\t\tconst rowNumber = _store_index__WEBPACK_IMPORTED_MODULE_0__.default.state.library.indexOf(this.rowData) + 1;\n\t\tconst rowHeader = document.createElement(\"th\");\n\t\trowHeader.setAttribute(\"scope\", \"row\");\n\t\trowHeader.innerText = rowNumber;\n\n\t\tconst buttonDelete = new _TableRowDelete__WEBPACK_IMPORTED_MODULE_2__.default(this.rowData.id).render();\n\t\tconst rowDelete = document.createElement(\"td\");\n\t\trowDelete.appendChild(buttonDelete);\n\n\t\tconst rowCells = Object.keys(this.rowData.data).map(dataItem => {\n\t\t\tconst cell = document.createElement(\"td\");\n\n\t\t\tif (dataItem === \"status\") {\n\t\t\t\tconst cellStatus = new _TableRowStatus__WEBPACK_IMPORTED_MODULE_1__.default(this.rowData.id, this.rowData.data[\"status\"]);\n\t\t\t\tcell.appendChild(cellStatus.render());\n\t\t\t\treturn cell;\n\t\t\t};\n\n\t\t\tcell.innerText = this.rowData.data[dataItem];\n\n\t\t\treturn cell;\n\t\t});\n\n\t\tthis.element.append(rowHeader, ...rowCells, rowDelete)\n\t};\n\n\trender() {\n\t\tthis.generateRow();\n\n\t\treturn this.element;\n\t};\n};\n\n//# sourceURL=webpack://odin-project-library/./src/components/Table/tableRow.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/index */ \"./src/store/index.js\");\n/* harmony import */ var _components_Table_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Table/index */ \"./src/components/Table/index.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Form */ \"./src/components/Form.js\");\n\n\n\n\n// Fetch stored state\n_store_index__WEBPACK_IMPORTED_MODULE_0__.default.fetchSavedState();\n\nconst instanceOfTable = new _components_Table_index__WEBPACK_IMPORTED_MODULE_1__.default();\nconst instanceOfForm = new _components_Form__WEBPACK_IMPORTED_MODULE_2__.default();\n\ninstanceOfTable.render();\ninstanceOfForm.render();\n\n\n//# sourceURL=webpack://odin-project-library/./src/main.js?");

/***/ }),

/***/ "./src/plugins/eventManager.js":
/*!*************************************!*\
  !*** ./src/plugins/eventManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ EventManager\n/* harmony export */ });\n/*\n\t- WTF! I don't get this.\n\t- Read this my child -> https://refactoring.guru/design-patterns/observer\n*/\n\nclass EventManager {\n\tconstructor () {\n\t\tthis.events = {};\n\t};\n\n\tsubscribe (event, callback) {\n\t\tif (!this.events.hasOwnProperty(event)) {\n\t\t\tthis.events[event] = [];\n\t\t};\n\n\t\treturn this.events[event].push(callback);\n\t};\n\n\tnotify (event, data) {\n\t\tif (!this.events.hasOwnProperty(event)) {\n\t\t\treturn [];\n\t\t};\n\n\t\t// Go through each subscription an call it's callback\n\t\t// with the new data\n\t\treturn this.events[event].map(callback => callback(data));\n\t};\n};\n\n//# sourceURL=webpack://odin-project-library/./src/plugins/eventManager.js?");

/***/ }),

/***/ "./src/plugins/idGenerator.js":
/*!************************************!*\
  !*** ./src/plugins/idGenerator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n\tconst template = \"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\";\n\tconst regexPattern = /[xy]/g;\n\n\tconst id = template.replace(regexPattern, (character) => {\n\t\tlet randomNumber = Math.random() * 16 | 0;\n\t\tlet vector = character == \"x\" ? randomNumber : (randomNumber & 0x3 | 0x8);\n\t\treturn vector.toString();\n\t});\n\n\treturn id;\n});\n\n\n//# sourceURL=webpack://odin-project-library/./src/plugins/idGenerator.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/store/store.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _store__WEBPACK_IMPORTED_MODULE_0__.default());\n\n//# sourceURL=webpack://odin-project-library/./src/store/index.js?");

/***/ }),

/***/ "./src/store/mutations.js":
/*!********************************!*\
  !*** ./src/store/mutations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _plugins_idGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/idGenerator */ \"./src/plugins/idGenerator.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\taddBook (state, { bookData }) {\n\t\tstate.library.push({\n\t\t\tid: (0,_plugins_idGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(),\n\t\t\tdata: {\n\t\t\t\t...bookData\n\t\t\t}\n\t\t});\n\t},\n\n\tremoveBook (state, { bookId }) {\n\t\tconst selectedBook = state.library.find(book => book.id === bookId);\n\t\tif (selectedBook) {\n\t\t\tconst bookIndex = state.library.indexOf(selectedBook);\n\t\t\tstate.library.splice(bookIndex, 1);\n\t\t};\n\t},\n\n\tupdateBookStatus(state, { bookId }) {\n\t\tconst selectedBook = state.library.find(book => book.id === bookId);\n\t\tif (selectedBook) {\n\t\t\tconst bookIndex = state.library.indexOf(selectedBook);\n\t\t\tstate.library[bookIndex].data.status = !selectedBook.data.status;\n\t\t};\n\t}\n});\n\n//# sourceURL=webpack://odin-project-library/./src/store/mutations.js?");

/***/ }),

/***/ "./src/store/state.js":
/*!****************************!*\
  !*** ./src/store/state.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst state = {\n\tlibrary: []\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);\n\n//# sourceURL=webpack://odin-project-library/./src/store/state.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Store\n/* harmony export */ });\n/* harmony import */ var _plugins_eventManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/eventManager */ \"./src/plugins/eventManager.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/store/state.js\");\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ \"./src/store/mutations.js\");\n\n\n\n\nclass Store {\n\tconstructor() {\n\t\tthis.state = _state__WEBPACK_IMPORTED_MODULE_1__.default;\n\t\tthis.mutations = _mutations__WEBPACK_IMPORTED_MODULE_2__.default;\n\t\tthis.events = new _plugins_eventManager__WEBPACK_IMPORTED_MODULE_0__.default();\n\t\tthis.localStoreKey = \"odinProject-library-state\";\n\t};\n\n\tcommit (mutationName, payload, notifyEvents=true) {\n\t\tif (typeof this.mutations[mutationName] !== \"function\") {\n\t\t\tconsole.error(`Mutation ${mutationName} doesn't seem to exist`);\n\t\t\treturn false;\n\t\t};\n\n\t\tthis.mutations[mutationName](this.state, payload);\n\n\t\tif (notifyEvents) {\n\t\t\tthis.events.notify(\"stateChange\", this.state);\n\t\t};\n\n\t\tlocalStorage.setItem(this.localStoreKey, JSON.stringify(this.state.library));\n\t};\n\n\tfetchSavedState() {\n\t\tconst localStorageState = localStorage.getItem(this.localStoreKey);\n\t\tif (localStorageState) {\n\t\t\tthis.state.library = JSON.parse(localStorageState);\n\t\t};\n\t};\n};\n\n//# sourceURL=webpack://odin-project-library/./src/store/store.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;