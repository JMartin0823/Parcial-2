/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Button/Button.ts":
/*!*****************************************!*\
  !*** ./src/components/Button/Button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribut\": () => (/* binding */ Attribut),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attribut;\n(function (Attribut) {\n    Attribut[\"animal\"] = \"animal\";\n    Attribut[\"career\"] = \"career\";\n    Attribut[\"celebrity\"] = \"celebrity\";\n    Attribut[\"dev\"] = \"dev\";\n    Attribut[\"explicit\"] = \"explicit\";\n    Attribut[\"fashion\"] = \"fashion\";\n    Attribut[\"food\"] = \"food\";\n    Attribut[\"history\"] = \"history\";\n    Attribut[\"money\"] = \"money\";\n    Attribut[\"movie\"] = \"movie\";\n    Attribut[\"music\"] = \"music\";\n    Attribut[\"political\"] = \"political\";\n    Attribut[\"religion\"] = \"religion\";\n    Attribut[\"science\"] = \"science\";\n    Attribut[\"sport\"] = \"sport\";\n    Attribut[\"travel\"] = \"travel\";\n})(Attribut || (Attribut = {}));\nclass Button extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            animal: null,\n            career: null,\n            celebrity: null,\n            dev: null,\n            explicit: null,\n            fashion: null,\n            food: null,\n            history: null,\n            money: null,\n            movie: null,\n            music: null,\n            political: null,\n            religion: null,\n            science: null,\n            sport: null,\n            travel: null,\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML += `\r\n                <section class = \"card\">\r\n                <button>${this.animal}</button>\r\n                <button>${this.career}</button>\r\n                <button>${this.celebrity}</button>\r\n                <button>${this.dev}</button>\r\n                <button>${this.explicit}</button>\r\n                <button>${this.fashion}</button>\r\n                <button>${this.food}</button>\r\n                <button>${this.history}</button>\r\n                <button>${this.money}</button>\r\n                <button>${this.movie}</button>\r\n                <button>${this.music}</button>\r\n                <button>${this.political}</button>\r\n                <button>${this.religion}</button>\r\n                <button>${this.science}</button>\r\n                <button>${this.sport}</button>\r\n                <button>${this.travel}</button>\r\n                </section>\r\n                `;\n        }\n    }\n}\ncustomElements.define(\"my-button\", Button);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Button/Button.ts?");

/***/ }),

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribute\": () => (/* binding */ Attribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"icon_url\"] = \"icon_url\";\n    Attribute[\"value\"] = \"value\";\n})(Attribute || (Attribute = {}));\nclass Card extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            icon_url: null,\n            value: null,\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML += `\n                <section class = \"card\">\n                <img src=\"${this.icon_url}\" alt=\"\">\n                <h2>${this.value}</h2>\n                </section>\n                `;\n        }\n    }\n}\ncustomElements.define(\"my-card\", Card);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/components/data.ts":
/*!********************************!*\
  !*** ./src/components/data.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bring_api\": () => (/* binding */ bring_api),\n/* harmony export */   \"bring_cat\": () => (/* binding */ bring_cat)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction bring_api() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const array = [];\n            for (let i = 1; i < 2; i++) {\n                const chuck = yield (yield fetch(\"https://api.chucknorris.io/jokes/random\" + i)).json();\n                array.push(chuck);\n            }\n            console.log(array);\n            return array;\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n}\nfunction bring_cat() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const array = [];\n            for (let i = 1; i < 2; i++) {\n                const categories = yield (yield fetch(\"https://api.chucknorris.io/jokes/categories\" + i)).json();\n                array.push(categories);\n            }\n            console.log(array);\n            return array;\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/data.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* reexport safe */ _Button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Card\": () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card */ \"./src/components/card/card.ts\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button/Button */ \"./src/components/Button/Button.ts\");\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/data */ \"./src/components/data.ts\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card/card */ \"./src/components/card/card.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.ChuckList = [];\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const dataChuck = yield (0,_components_data__WEBPACK_IMPORTED_MODULE_1__.bring_api)();\n            dataChuck.forEach((data) => {\n                console.log(data);\n            });\n            dataChuck.forEach((data) => {\n                const ChuckCard = this.ownerDocument.createElement(\"my-card\");\n                ChuckCard.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_2__.Attribute.icon_url, data.icon_url);\n                ChuckCard.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_2__.Attribute.value, data.value);\n                this.ChuckList.push(ChuckCard);\n            });\n            this.render(this.ChuckList);\n        });\n    }\n    render(ChuckList) {\n        var _a;\n        const ChuckCards = this.ownerDocument.createElement(\"section\");\n        ChuckCards.className = \"ChuckSection\";\n        this.ChuckList.forEach((ChuckCard) => {\n            ChuckCards.appendChild(ChuckCard);\n        });\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(ChuckCards);\n    }\n}\ncustomElements.define(\"app-container\", AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;