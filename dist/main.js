/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --gutter: 16px;
    --header-height: 50px;
    --narrow-hero-height: 30vh;

    --main-content-width: min(80%, 700px);
    --menu-photo-width: 150px;

    --base-font-size: 1.3rem;

    --tab-number: 3;

    --primary-color: #617d4f;    
    --primary-color-light: #bad4aa;
    --secondary-color: #3c3f77;
    --secondary-color-light: #aaacd4;
    --secondary-color-xlight:#e7e8f3;
    --text-color-dark: #0c0e0b;
    --text-color-light: #32382e;
    --background-color: #dae2d5;
    --surface-color: white;
    --light-blue: #b6cfd4;

}

/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: var(--secondary-color);
}

h1, h2, h3 {
    color: var(--text-color-dark);
}

/* Major sections */

body {
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-rows: var(--header-height) auto;
    font-size: var(--base-font-size);
    color: var(--text-color-light);
    font-family: Georgia, 'Times New Roman', Times, serif;
}

header {
    background-color: var(--background-color);
}

nav {
    display: grid;
    grid-template-columns: repeat(var(--tab-number), 1fr);
    gap: var(--gutter);
}

nav>button {
    background-color: var(--primary-color-light);
    border: none;
    border-radius: 20%, 0, 0, 0;
    width: 100%;
    height: var(--header-height);
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
}

nav>button.selected {
    background-color: var(--secondary-color-light);
    font-size: 1.3rem;
    font-weight: bold;
}

nav>button:hover {
    filter: brightness(1.1);
}

#content {
    position: relative;
    background-color: var(--background-color);
}

/* top image (used in menu, contact) */
#content img.top {
    position: absolute;
    height: var(--narrow-hero-height);
    width: 100%;
    object-fit: cover;
}

/* main card (used in menu, contact) */
.main-card {
    width: var(--main-content-width);
    background-color: var(--surface-color);
    border-radius: 2rem;
    opacity: 70%;
    margin: auto;
    margin-top: 15vh;
    margin-bottom: 15vh;
    padding: calc(var(--gutter) * 2) calc(var(--gutter) * 3) calc(var(--gutter) * 3);
}

.main-card section:not(:first-of-type){
    margin-top: calc(var(--gutter) * 4);
}

.main-card h1 {
    margin-bottom: calc(var(--gutter) * 3);
    font-size: 2.7rem;
    text-align: center;
}

.main-card h2 {
    margin: var(--gutter) 0;
    font-size: 2rem;
    border-bottom: 1px solid var(--text-color-light);
}

.main-card h3 {
    font-size: 1.4rem;
}


/* Home  */
#content[data-tab="home"] img.background {
    height: calc(100vh - var(--header-height));
    width: 100%;
    object-fit: cover;
}

#home-text {
    position: absolute;
    bottom: 18%;
    background: var(--surface-color);
    opacity: 70%;
    backdrop-filter: blur(10px);
    width: 100%;
    padding: var(--gutter);
    text-align: right;
    display: grid;
    justify-items: center;
}

#home-text > * {
    width: var(--main-content-width);
}

/* Calculated on https://min-max-calculator.9elements.com/ */
#home-text > h1 {
    font-size: clamp(2rem, 1.455rem + 2.73vw, 3.5rem);
}

#home-text > p {
    font-size: clamp(1rem, 0.818rem + 0.91vw, 1.5rem);
}


/* Menu */

#menu-card ul {
    display: grid;
    gap: calc(var(--gutter) * 3);
}

#menu-card li {
    display: grid;
    column-gap: var(--gutter);
    align-items: center;
    
    grid-template: repeat(2, 1fr) / var(--menu-photo-width) 1fr 3rem;
    grid-template-areas: 
        "image name price"
        "image description description"
    ;
}

#menu-card li img {
    grid-area: image;
}

#menu-card li h3 {
    grid-area: name;
}

#menu-card li .price {
    grid-area: price;
    font-size: 1.6rem;
}

#menu-card li .description {
    grid-area: description;
    align-self: start;
    font-size: var(--base-font-size);
    color: var(--text-color-light);
}

/* Contact */

table#opening-hours {
    margin: var(--gutter);
    font-size: 1.4rem;
    border-collapse: collapse;
}

.table-wrapper {
    width: fit-content;
    margin: calc(var(--gutter)*2) auto;
    padding: var(--gutter);
    border: 5px double var(--primary-color);
}

#opening-hours th,
#opening-hours td {
    padding: calc(var(--gutter)/2) calc(var(--gutter) * 2)
}

#opening-hours th {
    color: var(--text-color-dark);
    border-right: 1px solid var(--primary-color);
    text-align: left;
}

/* For smaller screens */
@media screen and (max-width: 700px) {
    .main-card h2 {
        text-align: center;
    }
    #menu-card li {
        grid-template: 150px 1fr 1fr / 1fr 3rem;
        grid-template-areas: 
            "image image"
            "name price"
            "description description"
        ;
    }   
    #menu-card img {
        justify-self: center;
        padding-bottom: var(--gutter);
    }
    #menu-card h2 {
        margin-bottom: calc(var(--gutter)*3);
    }
}

@media screen and (max-width: 450px) {
    .main-card {
        width: 90%;
        padding-right: calc(var(--gutter)*2);
        padding-left: calc(var(--gutter)*2);
    }
    #menu-card li {
        grid-template-rows: 150px 1fr 1fr auto;
        grid-template-columns:none;
        grid-template-areas: 
            "image"
            "name"
            "price"
            "description"
        ;
    }
    
    #menu-card h2 {
        text-align: center;
        border: none;
        border-radius: 1rem;
        background-color: var(--primary-color-light);
    }

    #opening-hour {
        margin: 0;
    }

    #opening-hours th,
    #opening-hours td {
        padding: calc(var(--gutter)/2) calc(var(--gutter) * 1);
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --gutter: 16px;\n    --header-height: 50px;\n    --narrow-hero-height: 30vh;\n\n    --main-content-width: min(80%, 700px);\n    --menu-photo-width: 150px;\n\n    --base-font-size: 1.3rem;\n\n    --tab-number: 3;\n\n    --primary-color: #617d4f;    \n    --primary-color-light: #bad4aa;\n    --secondary-color: #3c3f77;\n    --secondary-color-light: #aaacd4;\n    --secondary-color-xlight:#e7e8f3;\n    --text-color-dark: #0c0e0b;\n    --text-color-light: #32382e;\n    --background-color: #dae2d5;\n    --surface-color: white;\n    --light-blue: #b6cfd4;\n\n}\n\n/* Reset CSS */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nul {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: var(--secondary-color);\n}\n\nh1, h2, h3 {\n    color: var(--text-color-dark);\n}\n\n/* Major sections */\n\nbody {\n    display: grid;\n    width: 100vw;\n    height: 100vh;\n    grid-template-rows: var(--header-height) auto;\n    font-size: var(--base-font-size);\n    color: var(--text-color-light);\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\nheader {\n    background-color: var(--background-color);\n}\n\nnav {\n    display: grid;\n    grid-template-columns: repeat(var(--tab-number), 1fr);\n    gap: var(--gutter);\n}\n\nnav>button {\n    background-color: var(--primary-color-light);\n    border: none;\n    border-radius: 20%, 0, 0, 0;\n    width: 100%;\n    height: var(--header-height);\n    font-size: 1.2rem;\n    letter-spacing: 0.1rem;\n}\n\nnav>button.selected {\n    background-color: var(--secondary-color-light);\n    font-size: 1.3rem;\n    font-weight: bold;\n}\n\nnav>button:hover {\n    filter: brightness(1.1);\n}\n\n#content {\n    position: relative;\n    background-color: var(--background-color);\n}\n\n/* top image (used in menu, contact) */\n#content img.top {\n    position: absolute;\n    height: var(--narrow-hero-height);\n    width: 100%;\n    object-fit: cover;\n}\n\n/* main card (used in menu, contact) */\n.main-card {\n    width: var(--main-content-width);\n    background-color: var(--surface-color);\n    border-radius: 2rem;\n    opacity: 70%;\n    margin: auto;\n    margin-top: 15vh;\n    margin-bottom: 15vh;\n    padding: calc(var(--gutter) * 2) calc(var(--gutter) * 3) calc(var(--gutter) * 3);\n}\n\n.main-card section:not(:first-of-type){\n    margin-top: calc(var(--gutter) * 4);\n}\n\n.main-card h1 {\n    margin-bottom: calc(var(--gutter) * 3);\n    font-size: 2.7rem;\n    text-align: center;\n}\n\n.main-card h2 {\n    margin: var(--gutter) 0;\n    font-size: 2rem;\n    border-bottom: 1px solid var(--text-color-light);\n}\n\n.main-card h3 {\n    font-size: 1.4rem;\n}\n\n\n/* Home  */\n#content[data-tab=\"home\"] img.background {\n    height: calc(100vh - var(--header-height));\n    width: 100%;\n    object-fit: cover;\n}\n\n#home-text {\n    position: absolute;\n    bottom: 18%;\n    background: var(--surface-color);\n    opacity: 70%;\n    backdrop-filter: blur(10px);\n    width: 100%;\n    padding: var(--gutter);\n    text-align: right;\n    display: grid;\n    justify-items: center;\n}\n\n#home-text > * {\n    width: var(--main-content-width);\n}\n\n/* Calculated on https://min-max-calculator.9elements.com/ */\n#home-text > h1 {\n    font-size: clamp(2rem, 1.455rem + 2.73vw, 3.5rem);\n}\n\n#home-text > p {\n    font-size: clamp(1rem, 0.818rem + 0.91vw, 1.5rem);\n}\n\n\n/* Menu */\n\n#menu-card ul {\n    display: grid;\n    gap: calc(var(--gutter) * 3);\n}\n\n#menu-card li {\n    display: grid;\n    column-gap: var(--gutter);\n    align-items: center;\n    \n    grid-template: repeat(2, 1fr) / var(--menu-photo-width) 1fr 3rem;\n    grid-template-areas: \n        \"image name price\"\n        \"image description description\"\n    ;\n}\n\n#menu-card li img {\n    grid-area: image;\n}\n\n#menu-card li h3 {\n    grid-area: name;\n}\n\n#menu-card li .price {\n    grid-area: price;\n    font-size: 1.6rem;\n}\n\n#menu-card li .description {\n    grid-area: description;\n    align-self: start;\n    font-size: var(--base-font-size);\n    color: var(--text-color-light);\n}\n\n/* Contact */\n\ntable#opening-hours {\n    margin: var(--gutter);\n    font-size: 1.4rem;\n    border-collapse: collapse;\n}\n\n.table-wrapper {\n    width: fit-content;\n    margin: calc(var(--gutter)*2) auto;\n    padding: var(--gutter);\n    border: 5px double var(--primary-color);\n}\n\n#opening-hours th,\n#opening-hours td {\n    padding: calc(var(--gutter)/2) calc(var(--gutter) * 2)\n}\n\n#opening-hours th {\n    color: var(--text-color-dark);\n    border-right: 1px solid var(--primary-color);\n    text-align: left;\n}\n\n/* For smaller screens */\n@media screen and (max-width: 700px) {\n    .main-card h2 {\n        text-align: center;\n    }\n    #menu-card li {\n        grid-template: 150px 1fr 1fr / 1fr 3rem;\n        grid-template-areas: \n            \"image image\"\n            \"name price\"\n            \"description description\"\n        ;\n    }   \n    #menu-card img {\n        justify-self: center;\n        padding-bottom: var(--gutter);\n    }\n    #menu-card h2 {\n        margin-bottom: calc(var(--gutter)*3);\n    }\n}\n\n@media screen and (max-width: 450px) {\n    .main-card {\n        width: 90%;\n        padding-right: calc(var(--gutter)*2);\n        padding-left: calc(var(--gutter)*2);\n    }\n    #menu-card li {\n        grid-template-rows: 150px 1fr 1fr auto;\n        grid-template-columns:none;\n        grid-template-areas: \n            \"image\"\n            \"name\"\n            \"price\"\n            \"description\"\n        ;\n    }\n    \n    #menu-card h2 {\n        text-align: center;\n        border: none;\n        border-radius: 1rem;\n        background-color: var(--primary-color-light);\n    }\n\n    #opening-hour {\n        margin: 0;\n    }\n\n    #opening-hours th,\n    #opening-hours td {\n        padding: calc(var(--gutter)/2) calc(var(--gutter) * 1);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _parseHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseHtml */ "./src/parseHtml.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_map_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/map.jpg */ "./src/images/map.jpg");




function contact(){
    const content = document.querySelector("#content");
    content.setAttribute("data-tab", "contact");

    const imgMain = new Image();
    imgMain.src = _images_map_jpg__WEBPACK_IMPORTED_MODULE_2__;
    imgMain.alt = "Leaves, a map, and a vintage camera on the wood floor";
    imgMain.classList.add("top");
    content.appendChild(imgMain);

    const contactCardHtml = `        
        <div id="contact-card" class="main-card">
            <h1>Contact Us</h1>
            <section>
                <h2>Opening Hours</h2>
                <div class="table-wrapper">
                <table id="opening-hours">
                    <tr>
                        <th scope="row">Mon</th>
                        <td>11 AM to 19 PM</td>
                    </tr>
                    <tr>
                        <th scope="row">Tue</th>
                        <td>11 AM to 19 PM</td>
                    </tr>
                    <tr>
                        <th scope="row">Wed</th>
                        <td>11 AM to 15 PM</td>
                    </tr>
                    <tr>
                        <th scope="row">Thu</th>
                        <td>11 AM to 19 PM</td>
                    </tr>
                    <tr>
                        <th scope="row">Fri</th>
                        <td>11 AM to 19 PM</td>
                    </tr>
                    <tr>
                        <th scope="row">Sat</th>
                        <td>11 AM to 20 PM</td>
                    </tr>
                    <tr>
                        <th scope="row">Sun</th>
                        <td>Closed</td>
                    </tr>
                </table>
                </div>
            </section>
            <section>
                <h2>Contact Info</h2>
                <h3>Address</h3>
                <p>16918 Ambrose St., Kier, PE 01234</p>
                <h3>Phone</h3>
                <p>1-720-499-8760</p>
                <h3>Email</h3>
                <p>
                    <a href="mailto:customer@tamsdiner.com">
                        customer@tamsdiner.com
                    </a>
                </p>
            </section>
        </div>
    `;
    const contactCard = (0,_parseHtml__WEBPACK_IMPORTED_MODULE_0__["default"])(contactCardHtml);

    content.appendChild(contactCard);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _parseHtml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseHtml.js */ "./src/parseHtml.js");
/* harmony import */ var _images_tables_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/tables.jpg */ "./src/images/tables.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




function home(){
    const content = document.querySelector("#content");
    content.setAttribute("data-tab", "home");

    const imgMain = new Image();
    imgMain.src = _images_tables_jpg__WEBPACK_IMPORTED_MODULE_1__;
    imgMain.alt = "Restaurant interior with tables, chairs, and plants";
    imgMain.classList.add("background");
    content.appendChild(imgMain);

    const homeTextHtml = `
            <div id="home-text">
                <h1>Welcome to Tam's! </h1>
                <p>
                    Dine beneath a canopy of leaves, feeling as though you've discovered a secret garden in the heart of the city.
                </p>
            </div>
    `;
    const homeText = (0,_parseHtml_js__WEBPACK_IMPORTED_MODULE_0__["default"])(homeTextHtml);
    content.appendChild(imgMain);
    content.appendChild(homeText);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/images/menu sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*******************************************************************!*\
  !*** ./src/images/menu/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./fresh_herb_lemonade.jpg": "./src/images/menu/fresh_herb_lemonade.jpg",
	"./garden_harvest_bowl.jpg": "./src/images/menu/garden_harvest_bowl.jpg",
	"./green_goddess_sandwich.jpg": "./src/images/menu/green_goddess_sandwich.jpg",
	"./green_goddess_smoothie.jpg": "./src/images/menu/green_goddess_smoothie.jpg",
	"./herb_crusted_goat_cheese_salad.jpg": "./src/images/menu/herb_crusted_goat_cheese_salad.jpg",
	"./herb_infused_fruit_crumble.jpg": "./src/images/menu/herb_infused_fruit_crumble.jpg",
	"./herb_roasted_chicken_panini.jpg": "./src/images/menu/herb_roasted_chicken_panini.jpg",
	"./herbed_quinoa_stuffed_peppers.jpg": "./src/images/menu/herbed_quinoa_stuffed_peppers.jpg",
	"./iced_hibiscus_tea.jpg": "./src/images/menu/iced_hibiscus_tea.jpg",
	"./lavender_honey_panna_cotta.jpg": "./src/images/menu/lavender_honey_panna_cotta.jpg",
	"./lemon_basil_sorbet.jpg": "./src/images/menu/lemon_basil_sorbet.jpg",
	"./portobello_steak_sandwich.jpg": "./src/images/menu/portobello_steak_sandwich.jpg",
	"./roasted_tomato_basil_soup.jpg": "./src/images/menu/roasted_tomato_basil_soup.jpg",
	"./seasonal_vegetable_frittata.jpg": "./src/images/menu/seasonal_vegetable_frittata.jpg",
	"./urban_oasis_cold_brew.jpg": "./src/images/menu/urban_oasis_cold_brew.jpg",
	"./vegetable_minestrone.jpg": "./src/images/menu/vegetable_minestrone.jpg",
	"./vegetable_quiche.jpg": "./src/images/menu/vegetable_quiche.jpg",
	"./zesty_citrus_avocado_salad.jpg": "./src/images/menu/zesty_citrus_avocado_salad.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/menu sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _parseHtml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseHtml.js */ "./src/parseHtml.js");
/* harmony import */ var _images_herbs_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/herbs.jpg */ "./src/images/herbs.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




// Import all images for menu items
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(__webpack_require__("./src/images/menu sync \\.(png%7Cjpe?g%7Csvg)$"));


const menuData = [
    {
        "category": "Salads",
        "items": [
            {
                "name": "Garden Harvest Bowl",
                "price": 12,
                "description": "Mixed greens, roasted seasonal vegetables, quinoa, herb vinaigrette",
                "src": "garden_harvest_bowl.jpg"
            },
            {
                "name": "Herb-Crusted Goat Cheese Salad",
                "price": 14,
                "description": "Arugula, beets, candied walnuts, balsamic reduction",
                "src": "herb_crusted_goat_cheese_salad.jpg"
            },
            {
                "name": "Zesty Citrus & Avocado Salad",
                "price": 13,
                "description": "Spinach, grapefruit segments, avocado, cilantro-lime dressing",
                "src": "zesty_citrus_avocado_salad.jpg"
            }
        ]
    },
    {
        "category": "Sandwiches",
        "items": [
            {
                "name": "The Green Goddess",
                "price": 11,
                "description": "Grilled zucchini, eggplant, roasted peppers, pesto, focaccia",
                "src": "green_goddess_sandwich.jpg"
            },
            {
                "name": "Herb-Roasted Chicken Panini",
                "price": 13,
                "description": "Free-range chicken, sun-dried tomatoes, mozzarella, basil aioli",
                "src": "herb_roasted_chicken_panini.jpg"
            },
            {
                "name": "Portobello Steak Sandwich",
                "price": 12,
                "description": "Marinated portobello, caramelized onions, Swiss cheese, garlic aioli",
                "src": "portobello_steak_sandwich.jpg"
            }
        ]
    },
    {
        "category": "House Specials",
        "items": [
            {
                "name": "Vegetable Quiche of the Day",
                "price": 14,
                "description": "Served with a side salad (Ask your server for today's selection)",
                "src": "vegetable_quiche.jpg"
            },
            {
                "name": "Herbed Quinoa Stuffed Bell Peppers",
                "price": 15,
                "description": "Served with tomato sauce and mixed greens",
                "src": "herbed_quinoa_stuffed_peppers.jpg"
            },
            {
                "name": "Seasonal Vegetable Frittata",
                "price": 13,
                "description": "With goat cheese and fresh herbs, served with toast",
                "src": "seasonal_vegetable_frittata.jpg"
            }
        ]
    },
    {
        "category": "Soups",
        "items": [
            {
                "name": "Roasted Tomato Basil Soup",
                "price": 7,
                "description": "Served with a grilled cheese crouton",
                "src": "roasted_tomato_basil_soup.jpg"
            },
            {
                "name": "Vegetable Minestrone",
                "price": 6,
                "description": "Seasonal vegetables, herbs, small pasta",
                "src": "vegetable_minestrone.jpg"
            }
        ]
    },
    {
        "category": "Drinks",
        "items": [
            {
                "name": "Fresh Herb Lemonade",
                "price": 4,
                "description": "Choice of basil, rosemary, or mint",
                "src": "fresh_herb_lemonade.jpg"
            },
            {
                "name": "Green Goddess Smoothie",
                "price": 6,
                "description": "Spinach, kale, banana, pineapple, coconut water",
                "src": "green_goddess_smoothie.jpg"
            },
            {
                "name": "Iced Hibiscus Tea",
                "price": 3,
                "description": "Naturally caffeine-free, slightly tart and sweet",
                "src": "iced_hibiscus_tea.jpg"
            },
            {
                "name": "Urban Oasis Cold Brew",
                "price": 4,
                "description": "House-made, smooth and refreshing",
                "src": "urban_oasis_cold_brew.jpg"
            }
        ]
    },
    {
        "category": "Desserts",
        "items": [
            {
                "name": "Lavender Honey Panna Cotta",
                "price": 8,
                "description": "With fresh berries",
                "src": "lavender_honey_panna_cotta.jpg"
            },
            {
                "name": "Herb-Infused Fruit Crumble",
                "price": 7,
                "description": "Seasonal fruit, thyme, rosemary (Ask for today's selection)",
                "src": "herb_infused_fruit_crumble.jpg"
            },
            {
                "name": "Lemon Basil Sorbet",
                "price": 6,
                "description": "Light and refreshing",
                "src": "lemon_basil_sorbet.jpg"
            }
        ]
    }
];


function createMenuCard(menuData) {
    const menuCard = document.createElement("div");
    menuCard.id = "menu-card";
    menuCard.classList.add("main-card");
    const title = document.createElement("h1");
    title.textContent = "Menu"
    menuCard.appendChild(title);
    for (let sectionData of menuData) {
        const section = document.createElement("section");
        const category = document.createElement("h2");
        category.textContent = sectionData.category;
        section.appendChild(category);

        const list = document.createElement("ul");

        for (let item of sectionData.items) {
            const itemHtml = `
                <li>
                    <img src=${images[item.src]} alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p class="price">$${item.price}</p>
                    <p class="description">${item.description}</p>
                </li>
            `
            console.log(itemHtml);
            const itemElement = (0,_parseHtml_js__WEBPACK_IMPORTED_MODULE_0__["default"])(itemHtml);
            console.log(itemElement);
            list.appendChild((0,_parseHtml_js__WEBPACK_IMPORTED_MODULE_0__["default"])(itemHtml));
        }

        section.appendChild(list);
        menuCard.appendChild(section);
    }
    return menuCard;
}


function menu(){
    const content = document.querySelector("#content");
    content.setAttribute("data-tab", "menu");

    const imgMain = new Image();
    imgMain.src = _images_herbs_jpg__WEBPACK_IMPORTED_MODULE_1__;
    imgMain.alt = "A small cup of olive oil, herbs, and garlic cloves on a plate";
    imgMain.classList.add("top");
    content.appendChild(imgMain);

    content.appendChild(createMenuCard(menuData));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/parseHtml.js":
/*!**************************!*\
  !*** ./src/parseHtml.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function parseHtml(htmlText) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    return doc.body.firstElementChild;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseHtml);

/***/ }),

/***/ "./src/images/herbs.jpg":
/*!******************************!*\
  !*** ./src/images/herbs.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "808b9ea76a670e367741.jpg";

/***/ }),

/***/ "./src/images/map.jpg":
/*!****************************!*\
  !*** ./src/images/map.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3eb9e37b97a1efdb55d0.jpg";

/***/ }),

/***/ "./src/images/menu/fresh_herb_lemonade.jpg":
/*!*************************************************!*\
  !*** ./src/images/menu/fresh_herb_lemonade.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/garden_harvest_bowl.jpg":
/*!*************************************************!*\
  !*** ./src/images/menu/garden_harvest_bowl.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/green_goddess_sandwich.jpg":
/*!****************************************************!*\
  !*** ./src/images/menu/green_goddess_sandwich.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/green_goddess_smoothie.jpg":
/*!****************************************************!*\
  !*** ./src/images/menu/green_goddess_smoothie.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/herb_crusted_goat_cheese_salad.jpg":
/*!************************************************************!*\
  !*** ./src/images/menu/herb_crusted_goat_cheese_salad.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/herb_infused_fruit_crumble.jpg":
/*!********************************************************!*\
  !*** ./src/images/menu/herb_infused_fruit_crumble.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/herb_roasted_chicken_panini.jpg":
/*!*********************************************************!*\
  !*** ./src/images/menu/herb_roasted_chicken_panini.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/herbed_quinoa_stuffed_peppers.jpg":
/*!***********************************************************!*\
  !*** ./src/images/menu/herbed_quinoa_stuffed_peppers.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/iced_hibiscus_tea.jpg":
/*!***********************************************!*\
  !*** ./src/images/menu/iced_hibiscus_tea.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/lavender_honey_panna_cotta.jpg":
/*!********************************************************!*\
  !*** ./src/images/menu/lavender_honey_panna_cotta.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/lemon_basil_sorbet.jpg":
/*!************************************************!*\
  !*** ./src/images/menu/lemon_basil_sorbet.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/portobello_steak_sandwich.jpg":
/*!*******************************************************!*\
  !*** ./src/images/menu/portobello_steak_sandwich.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/roasted_tomato_basil_soup.jpg":
/*!*******************************************************!*\
  !*** ./src/images/menu/roasted_tomato_basil_soup.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/seasonal_vegetable_frittata.jpg":
/*!*********************************************************!*\
  !*** ./src/images/menu/seasonal_vegetable_frittata.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/urban_oasis_cold_brew.jpg":
/*!***************************************************!*\
  !*** ./src/images/menu/urban_oasis_cold_brew.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/vegetable_minestrone.jpg":
/*!**************************************************!*\
  !*** ./src/images/menu/vegetable_minestrone.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/vegetable_quiche.jpg":
/*!**********************************************!*\
  !*** ./src/images/menu/vegetable_quiche.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/menu/zesty_citrus_avocado_salad.jpg":
/*!********************************************************!*\
  !*** ./src/images/menu/zesty_citrus_avocado_salad.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60826590afb838d2d9ab.jpg";

/***/ }),

/***/ "./src/images/tables.jpg":
/*!*******************************!*\
  !*** ./src/images/tables.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "532959d1c37c5b74107e.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");





const content = document.querySelector("#content");
document.querySelectorAll("nav>button").forEach(
    button => {
        button.addEventListener(
            "click",
            e => {
                content.textContent = "";
                switch(button.id) {
                    case "home":
                        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
                        break;
                    case "menu":
                        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
                        break;
                    case "contact":
                        (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                        break;
                }
                document.querySelector("nav>.selected")
                    .classList.remove("selected");
                button.classList.add("selected");
            }
        )
    }
)
content.textContent = "";

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGNBQWMsYUFBYSxjQUFjLGNBQWMsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFB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Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ007QUFDTjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBSTtBQUM1QjtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFJO0FBQzVCO0FBQ0E7QUFDQSx3QkFBd0IsdURBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvbWVudS8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhcnNlSHRtbC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1ndXR0ZXI6IDE2cHg7XG4gICAgLS1oZWFkZXItaGVpZ2h0OiA1MHB4O1xuICAgIC0tbmFycm93LWhlcm8taGVpZ2h0OiAzMHZoO1xuXG4gICAgLS1tYWluLWNvbnRlbnQtd2lkdGg6IG1pbig4MCUsIDcwMHB4KTtcbiAgICAtLW1lbnUtcGhvdG8td2lkdGg6IDE1MHB4O1xuXG4gICAgLS1iYXNlLWZvbnQtc2l6ZTogMS4zcmVtO1xuXG4gICAgLS10YWItbnVtYmVyOiAzO1xuXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNjE3ZDRmOyAgICBcbiAgICAtLXByaW1hcnktY29sb3ItbGlnaHQ6ICNiYWQ0YWE7XG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMzYzNmNzc7XG4gICAgLS1zZWNvbmRhcnktY29sb3ItbGlnaHQ6ICNhYWFjZDQ7XG4gICAgLS1zZWNvbmRhcnktY29sb3IteGxpZ2h0OiNlN2U4ZjM7XG4gICAgLS10ZXh0LWNvbG9yLWRhcms6ICMwYzBlMGI7XG4gICAgLS10ZXh0LWNvbG9yLWxpZ2h0OiAjMzIzODJlO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2RhZTJkNTtcbiAgICAtLXN1cmZhY2UtY29sb3I6IHdoaXRlO1xuICAgIC0tbGlnaHQtYmx1ZTogI2I2Y2ZkNDtcblxufVxuXG4vKiBSZXNldCBDU1MgKi9cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbmgxLCBoMiwgaDMge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xufVxuXG4vKiBNYWpvciBzZWN0aW9ucyAqL1xuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0taGVhZGVyLWhlaWdodCkgYXV0bztcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtZm9udC1zaXplKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbm5hdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS10YWItbnVtYmVyKSwgMWZyKTtcbiAgICBnYXA6IHZhcigtLWd1dHRlcik7XG59XG5cbm5hdj5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMCUsIDAsIDAsIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xufVxuXG5uYXY+YnV0dG9uLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItbGlnaHQpO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5uYXY+YnV0dG9uOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcbn1cblxuI2NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLyogdG9wIGltYWdlICh1c2VkIGluIG1lbnUsIGNvbnRhY3QpICovXG4jY29udGVudCBpbWcudG9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiB2YXIoLS1uYXJyb3ctaGVyby1oZWlnaHQpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4vKiBtYWluIGNhcmQgKHVzZWQgaW4gbWVudSwgY29udGFjdCkgKi9cbi5tYWluLWNhcmQge1xuICAgIHdpZHRoOiB2YXIoLS1tYWluLWNvbnRlbnQtd2lkdGgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgb3BhY2l0eTogNzAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xuICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1ndXR0ZXIpICogMikgY2FsYyh2YXIoLS1ndXR0ZXIpICogMykgY2FsYyh2YXIoLS1ndXR0ZXIpICogMyk7XG59XG5cbi5tYWluLWNhcmQgc2VjdGlvbjpub3QoOmZpcnN0LW9mLXR5cGUpe1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tZ3V0dGVyKSAqIDQpO1xufVxuXG4ubWFpbi1jYXJkIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWd1dHRlcikgKiAzKTtcbiAgICBmb250LXNpemU6IDIuN3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluLWNhcmQgaDIge1xuICAgIG1hcmdpbjogdmFyKC0tZ3V0dGVyKSAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG59XG5cbi5tYWluLWNhcmQgaDMge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG5cbi8qIEhvbWUgICovXG4jY29udGVudFtkYXRhLXRhYj1cImhvbWVcIl0gaW1nLmJhY2tncm91bmQge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuI2hvbWUtdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTglO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY29sb3IpO1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogdmFyKC0tZ3V0dGVyKTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuI2hvbWUtdGV4dCA+ICoge1xuICAgIHdpZHRoOiB2YXIoLS1tYWluLWNvbnRlbnQtd2lkdGgpO1xufVxuXG4vKiBDYWxjdWxhdGVkIG9uIGh0dHBzOi8vbWluLW1heC1jYWxjdWxhdG9yLjllbGVtZW50cy5jb20vICovXG4jaG9tZS10ZXh0ID4gaDEge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMS40NTVyZW0gKyAyLjczdncsIDMuNXJlbSk7XG59XG5cbiNob21lLXRleHQgPiBwIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDAuODE4cmVtICsgMC45MXZ3LCAxLjVyZW0pO1xufVxuXG5cbi8qIE1lbnUgKi9cblxuI21lbnUtY2FyZCB1bCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IGNhbGModmFyKC0tZ3V0dGVyKSAqIDMpO1xufVxuXG4jbWVudS1jYXJkIGxpIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGNvbHVtbi1nYXA6IHZhcigtLWd1dHRlcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgMWZyKSAvIHZhcigtLW1lbnUtcGhvdG8td2lkdGgpIDFmciAzcmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcImltYWdlIG5hbWUgcHJpY2VcIlxuICAgICAgICBcImltYWdlIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXCJcbiAgICA7XG59XG5cbiNtZW51LWNhcmQgbGkgaW1nIHtcbiAgICBncmlkLWFyZWE6IGltYWdlO1xufVxuXG4jbWVudS1jYXJkIGxpIGgzIHtcbiAgICBncmlkLWFyZWE6IG5hbWU7XG59XG5cbiNtZW51LWNhcmQgbGkgLnByaWNlIHtcbiAgICBncmlkLWFyZWE6IHByaWNlO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4jbWVudS1jYXJkIGxpIC5kZXNjcmlwdGlvbiB7XG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtZm9udC1zaXplKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG59XG5cbi8qIENvbnRhY3QgKi9cblxudGFibGUjb3BlbmluZy1ob3VycyB7XG4gICAgbWFyZ2luOiB2YXIoLS1ndXR0ZXIpO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLWd1dHRlcikqMikgYXV0bztcbiAgICBwYWRkaW5nOiB2YXIoLS1ndXR0ZXIpO1xuICAgIGJvcmRlcjogNXB4IGRvdWJsZSB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuI29wZW5pbmctaG91cnMgdGgsXG4jb3BlbmluZy1ob3VycyB0ZCB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1ndXR0ZXIpLzIpIGNhbGModmFyKC0tZ3V0dGVyKSAqIDIpXG59XG5cbiNvcGVuaW5nLWhvdXJzIHRoIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4vKiBGb3Igc21hbGxlciBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIC5tYWluLWNhcmQgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICNtZW51LWNhcmQgbGkge1xuICAgICAgICBncmlkLXRlbXBsYXRlOiAxNTBweCAxZnIgMWZyIC8gMWZyIDNyZW07XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgXCJpbWFnZSBpbWFnZVwiXG4gICAgICAgICAgICBcIm5hbWUgcHJpY2VcIlxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblwiXG4gICAgICAgIDtcbiAgICB9ICAgXG4gICAgI21lbnUtY2FyZCBpbWcge1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLWd1dHRlcik7XG4gICAgfVxuICAgICNtZW51LWNhcmQgaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWd1dHRlcikqMyk7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5tYWluLWNhcmQge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWd1dHRlcikqMik7XG4gICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1ndXR0ZXIpKjIpO1xuICAgIH1cbiAgICAjbWVudS1jYXJkIGxpIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCAxZnIgMWZyIGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpub25lO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgIFwiaW1hZ2VcIlxuICAgICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgICAgIFwicHJpY2VcIlxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiXG4gICAgICAgIDtcbiAgICB9XG4gICAgXG4gICAgI21lbnUtY2FyZCBoMiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgICB9XG5cbiAgICAjb3BlbmluZy1ob3VyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICNvcGVuaW5nLWhvdXJzIHRoLFxuICAgICNvcGVuaW5nLWhvdXJzIHRkIHtcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1ndXR0ZXIpLzIpIGNhbGModmFyKC0tZ3V0dGVyKSAqIDEpO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLDBCQUEwQjs7SUFFMUIscUNBQXFDO0lBQ3JDLHlCQUF5Qjs7SUFFekIsd0JBQXdCOztJQUV4QixlQUFlOztJQUVmLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHFCQUFxQjs7QUFFekI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0MsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscURBQXFEO0lBQ3JELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3Qzs7QUFFQSxzQ0FBc0M7QUFDdEM7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUEsc0NBQXNDO0FBQ3RDO0lBQ0ksZ0NBQWdDO0lBQ2hDLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdGQUFnRjtBQUNwRjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBLFVBQVU7QUFDVjtJQUNJLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBLDREQUE0RDtBQUM1RDtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRDs7O0FBR0EsU0FBUzs7QUFFVDtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjs7SUFFbkIsZ0VBQWdFO0lBQ2hFOzs7SUFHQTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyw4QkFBOEI7QUFDbEM7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsdUNBQXVDO0FBQzNDOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNENBQTRDO0lBQzVDLGdCQUFnQjtBQUNwQjs7QUFFQSx3QkFBd0I7QUFDeEI7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksdUNBQXVDO1FBQ3ZDOzs7O1FBSUE7SUFDSjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksb0NBQW9DO0lBQ3hDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixvQ0FBb0M7UUFDcEMsbUNBQW1DO0lBQ3ZDO0lBQ0E7UUFDSSxzQ0FBc0M7UUFDdEMsMEJBQTBCO1FBQzFCOzs7OztRQUtBO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQiw0Q0FBNEM7SUFDaEQ7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7O1FBRUksc0RBQXNEO0lBQzFEO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWd1dHRlcjogMTZweDtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiA1MHB4O1xcbiAgICAtLW5hcnJvdy1oZXJvLWhlaWdodDogMzB2aDtcXG5cXG4gICAgLS1tYWluLWNvbnRlbnQtd2lkdGg6IG1pbig4MCUsIDcwMHB4KTtcXG4gICAgLS1tZW51LXBob3RvLXdpZHRoOiAxNTBweDtcXG5cXG4gICAgLS1iYXNlLWZvbnQtc2l6ZTogMS4zcmVtO1xcblxcbiAgICAtLXRhYi1udW1iZXI6IDM7XFxuXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzYxN2Q0ZjsgICAgXFxuICAgIC0tcHJpbWFyeS1jb2xvci1saWdodDogI2JhZDRhYTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMzYzNmNzc7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiAjYWFhY2Q0O1xcbiAgICAtLXNlY29uZGFyeS1jb2xvci14bGlnaHQ6I2U3ZThmMztcXG4gICAgLS10ZXh0LWNvbG9yLWRhcms6ICMwYzBlMGI7XFxuICAgIC0tdGV4dC1jb2xvci1saWdodDogIzMyMzgyZTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMmQ1O1xcbiAgICAtLXN1cmZhY2UtY29sb3I6IHdoaXRlO1xcbiAgICAtLWxpZ2h0LWJsdWU6ICNiNmNmZDQ7XFxuXFxufVxcblxcbi8qIFJlc2V0IENTUyAqL1xcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbmgxLCBoMiwgaDMge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKTtcXG59XFxuXFxuLyogTWFqb3Igc2VjdGlvbnMgKi9cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLWhlYWRlci1oZWlnaHQpIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1mb250LXNpemUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tdGFiLW51bWJlciksIDFmcik7XFxuICAgIGdhcDogdmFyKC0tZ3V0dGVyKTtcXG59XFxuXFxubmF2PmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwJSwgMCwgMCwgMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG5cXG5uYXY+YnV0dG9uLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5uYXY+YnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLyogdG9wIGltYWdlICh1c2VkIGluIG1lbnUsIGNvbnRhY3QpICovXFxuI2NvbnRlbnQgaW1nLnRvcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXJyb3ctaGVyby1oZWlnaHQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi8qIG1haW4gY2FyZCAodXNlZCBpbiBtZW51LCBjb250YWN0KSAqL1xcbi5tYWluLWNhcmQge1xcbiAgICB3aWR0aDogdmFyKC0tbWFpbi1jb250ZW50LXdpZHRoKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIG9wYWNpdHk6IDcwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXZoO1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWd1dHRlcikgKiAyKSBjYWxjKHZhcigtLWd1dHRlcikgKiAzKSBjYWxjKHZhcigtLWd1dHRlcikgKiAzKTtcXG59XFxuXFxuLm1haW4tY2FyZCBzZWN0aW9uOm5vdCg6Zmlyc3Qtb2YtdHlwZSl7XFxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tZ3V0dGVyKSAqIDQpO1xcbn1cXG5cXG4ubWFpbi1jYXJkIGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1ndXR0ZXIpICogMyk7XFxuICAgIGZvbnQtc2l6ZTogMi43cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWNhcmQgaDIge1xcbiAgICBtYXJnaW46IHZhcigtLWd1dHRlcikgMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxufVxcblxcbi5tYWluLWNhcmQgaDMge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuXFxuLyogSG9tZSAgKi9cXG4jY29udGVudFtkYXRhLXRhYj1cXFwiaG9tZVxcXCJdIGltZy5iYWNrZ3JvdW5kIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbiNob21lLXRleHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTglO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNvbG9yKTtcXG4gICAgb3BhY2l0eTogNzAlO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1ndXR0ZXIpO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZS10ZXh0ID4gKiB7XFxuICAgIHdpZHRoOiB2YXIoLS1tYWluLWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5cXG4vKiBDYWxjdWxhdGVkIG9uIGh0dHBzOi8vbWluLW1heC1jYWxjdWxhdG9yLjllbGVtZW50cy5jb20vICovXFxuI2hvbWUtdGV4dCA+IGgxIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCAxLjQ1NXJlbSArIDIuNzN2dywgMy41cmVtKTtcXG59XFxuXFxuI2hvbWUtdGV4dCA+IHAge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDAuODE4cmVtICsgMC45MXZ3LCAxLjVyZW0pO1xcbn1cXG5cXG5cXG4vKiBNZW51ICovXFxuXFxuI21lbnUtY2FyZCB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogY2FsYyh2YXIoLS1ndXR0ZXIpICogMyk7XFxufVxcblxcbiNtZW51LWNhcmQgbGkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBjb2x1bW4tZ2FwOiB2YXIoLS1ndXR0ZXIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDFmcikgLyB2YXIoLS1tZW51LXBob3RvLXdpZHRoKSAxZnIgM3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiaW1hZ2UgbmFtZSBwcmljZVxcXCJcXG4gICAgICAgIFxcXCJpbWFnZSBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCJcXG4gICAgO1xcbn1cXG5cXG4jbWVudS1jYXJkIGxpIGltZyB7XFxuICAgIGdyaWQtYXJlYTogaW1hZ2U7XFxufVxcblxcbiNtZW51LWNhcmQgbGkgaDMge1xcbiAgICBncmlkLWFyZWE6IG5hbWU7XFxufVxcblxcbiNtZW51LWNhcmQgbGkgLnByaWNlIHtcXG4gICAgZ3JpZC1hcmVhOiBwcmljZTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbiNtZW51LWNhcmQgbGkgLmRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1mb250LXNpemUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxufVxcblxcbi8qIENvbnRhY3QgKi9cXG5cXG50YWJsZSNvcGVuaW5nLWhvdXJzIHtcXG4gICAgbWFyZ2luOiB2YXIoLS1ndXR0ZXIpO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLnRhYmxlLXdyYXBwZXIge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1ndXR0ZXIpKjIpIGF1dG87XFxuICAgIHBhZGRpbmc6IHZhcigtLWd1dHRlcik7XFxuICAgIGJvcmRlcjogNXB4IGRvdWJsZSB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuI29wZW5pbmctaG91cnMgdGgsXFxuI29wZW5pbmctaG91cnMgdGQge1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWd1dHRlcikvMikgY2FsYyh2YXIoLS1ndXR0ZXIpICogMilcXG59XFxuXFxuI29wZW5pbmctaG91cnMgdGgge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi8qIEZvciBzbWFsbGVyIHNjcmVlbnMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAubWFpbi1jYXJkIGgyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAjbWVudS1jYXJkIGxpIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDE1MHB4IDFmciAxZnIgLyAxZnIgM3JlbTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgICAgIFxcXCJpbWFnZSBpbWFnZVxcXCJcXG4gICAgICAgICAgICBcXFwibmFtZSBwcmljZVxcXCJcXG4gICAgICAgICAgICBcXFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cXFwiXFxuICAgICAgICA7XFxuICAgIH0gICBcXG4gICAgI21lbnUtY2FyZCBpbWcge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tZ3V0dGVyKTtcXG4gICAgfVxcbiAgICAjbWVudS1jYXJkIGgyIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ3V0dGVyKSozKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgICAubWFpbi1jYXJkIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWd1dHRlcikqMik7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tZ3V0dGVyKSoyKTtcXG4gICAgfVxcbiAgICAjbWVudS1jYXJkIGxpIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMWZyIDFmciBhdXRvO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm5vbmU7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgICAgICBcXFwiaW1hZ2VcXFwiXFxuICAgICAgICAgICAgXFxcIm5hbWVcXFwiXFxuICAgICAgICAgICAgXFxcInByaWNlXFxcIlxcbiAgICAgICAgICAgIFxcXCJkZXNjcmlwdGlvblxcXCJcXG4gICAgICAgIDtcXG4gICAgfVxcbiAgICBcXG4gICAgI21lbnUtY2FyZCBoMiB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxuICAgIH1cXG5cXG4gICAgI29wZW5pbmctaG91ciB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgI29wZW5pbmctaG91cnMgdGgsXFxuICAgICNvcGVuaW5nLWhvdXJzIHRkIHtcXG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZ3V0dGVyKS8yKSBjYWxjKHZhcigtLWd1dHRlcikgKiAxKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwYXJzZUh0bWwgZnJvbSAnLi9wYXJzZUh0bWwnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSW1nT3BlbiBmcm9tICcuL2ltYWdlcy9tYXAuanBnJztcblxuZnVuY3Rpb24gY29udGFjdCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiLCBcImNvbnRhY3RcIik7XG5cbiAgICBjb25zdCBpbWdNYWluID0gbmV3IEltYWdlKCk7XG4gICAgaW1nTWFpbi5zcmMgPSBJbWdPcGVuO1xuICAgIGltZ01haW4uYWx0ID0gXCJMZWF2ZXMsIGEgbWFwLCBhbmQgYSB2aW50YWdlIGNhbWVyYSBvbiB0aGUgd29vZCBmbG9vclwiO1xuICAgIGltZ01haW4uY2xhc3NMaXN0LmFkZChcInRvcFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGltZ01haW4pO1xuXG4gICAgY29uc3QgY29udGFjdENhcmRIdG1sID0gYCAgICAgICAgXG4gICAgICAgIDxkaXYgaWQ9XCJjb250YWN0LWNhcmRcIiBjbGFzcz1cIm1haW4tY2FyZFwiPlxuICAgICAgICAgICAgPGgxPkNvbnRhY3QgVXM8L2gxPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGgyPk9wZW5pbmcgSG91cnM8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGlkPVwib3BlbmluZy1ob3Vyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5Nb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjExIEFNIHRvIDE5IFBNPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+VHVlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMSBBTSB0byAxOSBQTTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPldlZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTEgQU0gdG8gMTUgUE08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5UaHU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjExIEFNIHRvIDE5IFBNPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+RnJpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMSBBTSB0byAxOSBQTTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPlNhdDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTEgQU0gdG8gMjAgUE08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5TdW48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNsb3NlZDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoMj5Db250YWN0IEluZm88L2gyPlxuICAgICAgICAgICAgICAgIDxoMz5BZGRyZXNzPC9oMz5cbiAgICAgICAgICAgICAgICA8cD4xNjkxOCBBbWJyb3NlIFN0LiwgS2llciwgUEUgMDEyMzQ8L3A+XG4gICAgICAgICAgICAgICAgPGgzPlBob25lPC9oMz5cbiAgICAgICAgICAgICAgICA8cD4xLTcyMC00OTktODc2MDwvcD5cbiAgICAgICAgICAgICAgICA8aDM+RW1haWw8L2gzPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmN1c3RvbWVyQHRhbXNkaW5lci5jb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyQHRhbXNkaW5lci5jb21cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBjb25zdCBjb250YWN0Q2FyZCA9IHBhcnNlSHRtbChjb250YWN0Q2FyZEh0bWwpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q2FyZCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDtcbiIsImltcG9ydCBwYXJzZUh0bWwgZnJvbSBcIi4vcGFyc2VIdG1sLmpzXCJcbmltcG9ydCBJbWdUYWJsZXMgZnJvbSAnLi9pbWFnZXMvdGFibGVzLmpwZyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gaG9tZSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiLCBcImhvbWVcIik7XG5cbiAgICBjb25zdCBpbWdNYWluID0gbmV3IEltYWdlKCk7XG4gICAgaW1nTWFpbi5zcmMgPSBJbWdUYWJsZXM7XG4gICAgaW1nTWFpbi5hbHQgPSBcIlJlc3RhdXJhbnQgaW50ZXJpb3Igd2l0aCB0YWJsZXMsIGNoYWlycywgYW5kIHBsYW50c1wiO1xuICAgIGltZ01haW4uY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmRcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWdNYWluKTtcblxuICAgIGNvbnN0IGhvbWVUZXh0SHRtbCA9IGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJob21lLXRleHRcIj5cbiAgICAgICAgICAgICAgICA8aDE+V2VsY29tZSB0byBUYW0ncyEgPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgRGluZSBiZW5lYXRoIGEgY2Fub3B5IG9mIGxlYXZlcywgZmVlbGluZyBhcyB0aG91Z2ggeW91J3ZlIGRpc2NvdmVyZWQgYSBzZWNyZXQgZ2FyZGVuIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnN0IGhvbWVUZXh0ID0gcGFyc2VIdG1sKGhvbWVUZXh0SHRtbCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWdNYWluKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVUZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZnJlc2hfaGVyYl9sZW1vbmFkZS5qcGdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9mcmVzaF9oZXJiX2xlbW9uYWRlLmpwZ1wiLFxuXHRcIi4vZ2FyZGVuX2hhcnZlc3RfYm93bC5qcGdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9nYXJkZW5faGFydmVzdF9ib3dsLmpwZ1wiLFxuXHRcIi4vZ3JlZW5fZ29kZGVzc19zYW5kd2ljaC5qcGdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9ncmVlbl9nb2RkZXNzX3NhbmR3aWNoLmpwZ1wiLFxuXHRcIi4vZ3JlZW5fZ29kZGVzc19zbW9vdGhpZS5qcGdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9ncmVlbl9nb2RkZXNzX3Ntb290aGllLmpwZ1wiLFxuXHRcIi4vaGVyYl9jcnVzdGVkX2dvYXRfY2hlZXNlX3NhbGFkLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L2hlcmJfY3J1c3RlZF9nb2F0X2NoZWVzZV9zYWxhZC5qcGdcIixcblx0XCIuL2hlcmJfaW5mdXNlZF9mcnVpdF9jcnVtYmxlLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L2hlcmJfaW5mdXNlZF9mcnVpdF9jcnVtYmxlLmpwZ1wiLFxuXHRcIi4vaGVyYl9yb2FzdGVkX2NoaWNrZW5fcGFuaW5pLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L2hlcmJfcm9hc3RlZF9jaGlja2VuX3BhbmluaS5qcGdcIixcblx0XCIuL2hlcmJlZF9xdWlub2Ffc3R1ZmZlZF9wZXBwZXJzLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L2hlcmJlZF9xdWlub2Ffc3R1ZmZlZF9wZXBwZXJzLmpwZ1wiLFxuXHRcIi4vaWNlZF9oaWJpc2N1c190ZWEuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvaWNlZF9oaWJpc2N1c190ZWEuanBnXCIsXG5cdFwiLi9sYXZlbmRlcl9ob25leV9wYW5uYV9jb3R0YS5qcGdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9sYXZlbmRlcl9ob25leV9wYW5uYV9jb3R0YS5qcGdcIixcblx0XCIuL2xlbW9uX2Jhc2lsX3NvcmJldC5qcGdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9sZW1vbl9iYXNpbF9zb3JiZXQuanBnXCIsXG5cdFwiLi9wb3J0b2JlbGxvX3N0ZWFrX3NhbmR3aWNoLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L3BvcnRvYmVsbG9fc3RlYWtfc2FuZHdpY2guanBnXCIsXG5cdFwiLi9yb2FzdGVkX3RvbWF0b19iYXNpbF9zb3VwLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L3JvYXN0ZWRfdG9tYXRvX2Jhc2lsX3NvdXAuanBnXCIsXG5cdFwiLi9zZWFzb25hbF92ZWdldGFibGVfZnJpdHRhdGEuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvc2Vhc29uYWxfdmVnZXRhYmxlX2ZyaXR0YXRhLmpwZ1wiLFxuXHRcIi4vdXJiYW5fb2FzaXNfY29sZF9icmV3LmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L3VyYmFuX29hc2lzX2NvbGRfYnJldy5qcGdcIixcblx0XCIuL3ZlZ2V0YWJsZV9taW5lc3Ryb25lLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L3ZlZ2V0YWJsZV9taW5lc3Ryb25lLmpwZ1wiLFxuXHRcIi4vdmVnZXRhYmxlX3F1aWNoZS5qcGdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS92ZWdldGFibGVfcXVpY2hlLmpwZ1wiLFxuXHRcIi4vemVzdHlfY2l0cnVzX2F2b2NhZG9fc2FsYWQuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvemVzdHlfY2l0cnVzX2F2b2NhZG9fc2FsYWQuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9tZW51IHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsImltcG9ydCBwYXJzZUh0bWwgZnJvbSBcIi4vcGFyc2VIdG1sLmpzXCJcbmltcG9ydCBJbWdUYWJsZXMgZnJvbSAnLi9pbWFnZXMvaGVyYnMuanBnJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBJbXBvcnQgYWxsIGltYWdlcyBmb3IgbWVudSBpdGVtc1xuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgICBsZXQgaW1hZ2VzID0ge307XG4gICAgci5rZXlzKCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XG4gICAgcmV0dXJuIGltYWdlcztcbn1cblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvbWVudScsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcblxuXG5jb25zdCBtZW51RGF0YSA9IFtcbiAgICB7XG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJTYWxhZHNcIixcbiAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2FyZGVuIEhhcnZlc3QgQm93bFwiLFxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogMTIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1peGVkIGdyZWVucywgcm9hc3RlZCBzZWFzb25hbCB2ZWdldGFibGVzLCBxdWlub2EsIGhlcmIgdmluYWlncmV0dGVcIixcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcImdhcmRlbl9oYXJ2ZXN0X2Jvd2wuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGVyYi1DcnVzdGVkIEdvYXQgQ2hlZXNlIFNhbGFkXCIsXG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiAxNCxcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQXJ1Z3VsYSwgYmVldHMsIGNhbmRpZWQgd2FsbnV0cywgYmFsc2FtaWMgcmVkdWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCJoZXJiX2NydXN0ZWRfZ29hdF9jaGVlc2Vfc2FsYWQuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiWmVzdHkgQ2l0cnVzICYgQXZvY2FkbyBTYWxhZFwiLFxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogMTMsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwaW5hY2gsIGdyYXBlZnJ1aXQgc2VnbWVudHMsIGF2b2NhZG8sIGNpbGFudHJvLWxpbWUgZHJlc3NpbmdcIixcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcInplc3R5X2NpdHJ1c19hdm9jYWRvX3NhbGFkLmpwZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIlNhbmR3aWNoZXNcIixcbiAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGhlIEdyZWVuIEdvZGRlc3NcIixcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IDExLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHcmlsbGVkIHp1Y2NoaW5pLCBlZ2dwbGFudCwgcm9hc3RlZCBwZXBwZXJzLCBwZXN0bywgZm9jYWNjaWFcIixcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcImdyZWVuX2dvZGRlc3Nfc2FuZHdpY2guanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGVyYi1Sb2FzdGVkIENoaWNrZW4gUGFuaW5pXCIsXG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiAxMyxcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRnJlZS1yYW5nZSBjaGlja2VuLCBzdW4tZHJpZWQgdG9tYXRvZXMsIG1venphcmVsbGEsIGJhc2lsIGFpb2xpXCIsXG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCJoZXJiX3JvYXN0ZWRfY2hpY2tlbl9wYW5pbmkuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUG9ydG9iZWxsbyBTdGVhayBTYW5kd2ljaFwiLFxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogMTIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hcmluYXRlZCBwb3J0b2JlbGxvLCBjYXJhbWVsaXplZCBvbmlvbnMsIFN3aXNzIGNoZWVzZSwgZ2FybGljIGFpb2xpXCIsXG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCJwb3J0b2JlbGxvX3N0ZWFrX3NhbmR3aWNoLmpwZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkhvdXNlIFNwZWNpYWxzXCIsXG4gICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlZlZ2V0YWJsZSBRdWljaGUgb2YgdGhlIERheVwiLFxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogMTQsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNlcnZlZCB3aXRoIGEgc2lkZSBzYWxhZCAoQXNrIHlvdXIgc2VydmVyIGZvciB0b2RheSdzIHNlbGVjdGlvbilcIixcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcInZlZ2V0YWJsZV9xdWljaGUuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGVyYmVkIFF1aW5vYSBTdHVmZmVkIEJlbGwgUGVwcGVyc1wiLFxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogMTUsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNlcnZlZCB3aXRoIHRvbWF0byBzYXVjZSBhbmQgbWl4ZWQgZ3JlZW5zXCIsXG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCJoZXJiZWRfcXVpbm9hX3N0dWZmZWRfcGVwcGVycy5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTZWFzb25hbCBWZWdldGFibGUgRnJpdHRhdGFcIixcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IDEzLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaXRoIGdvYXQgY2hlZXNlIGFuZCBmcmVzaCBoZXJicywgc2VydmVkIHdpdGggdG9hc3RcIixcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcInNlYXNvbmFsX3ZlZ2V0YWJsZV9mcml0dGF0YS5qcGdcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJTb3Vwc1wiLFxuICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJSb2FzdGVkIFRvbWF0byBCYXNpbCBTb3VwXCIsXG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiA3LFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXJ2ZWQgd2l0aCBhIGdyaWxsZWQgY2hlZXNlIGNyb3V0b25cIixcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcInJvYXN0ZWRfdG9tYXRvX2Jhc2lsX3NvdXAuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVmVnZXRhYmxlIE1pbmVzdHJvbmVcIixcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNlYXNvbmFsIHZlZ2V0YWJsZXMsIGhlcmJzLCBzbWFsbCBwYXN0YVwiLFxuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwidmVnZXRhYmxlX21pbmVzdHJvbmUuanBnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNhdGVnb3J5XCI6IFwiRHJpbmtzXCIsXG4gICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyZXNoIEhlcmIgTGVtb25hZGVcIixcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IDQsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNob2ljZSBvZiBiYXNpbCwgcm9zZW1hcnksIG9yIG1pbnRcIixcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcImZyZXNoX2hlcmJfbGVtb25hZGUuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR3JlZW4gR29kZGVzcyBTbW9vdGhpZVwiLFxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogNixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BpbmFjaCwga2FsZSwgYmFuYW5hLCBwaW5lYXBwbGUsIGNvY29udXQgd2F0ZXJcIixcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcImdyZWVuX2dvZGRlc3Nfc21vb3RoaWUuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSWNlZCBIaWJpc2N1cyBUZWFcIixcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IDMsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5hdHVyYWxseSBjYWZmZWluZS1mcmVlLCBzbGlnaHRseSB0YXJ0IGFuZCBzd2VldFwiLFxuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaWNlZF9oaWJpc2N1c190ZWEuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVXJiYW4gT2FzaXMgQ29sZCBCcmV3XCIsXG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiA0LFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIb3VzZS1tYWRlLCBzbW9vdGggYW5kIHJlZnJlc2hpbmdcIixcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcInVyYmFuX29hc2lzX2NvbGRfYnJldy5qcGdcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJEZXNzZXJ0c1wiLFxuICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMYXZlbmRlciBIb25leSBQYW5uYSBDb3R0YVwiLFxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogOCxcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiV2l0aCBmcmVzaCBiZXJyaWVzXCIsXG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCJsYXZlbmRlcl9ob25leV9wYW5uYV9jb3R0YS5qcGdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIZXJiLUluZnVzZWQgRnJ1aXQgQ3J1bWJsZVwiLFxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogNyxcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2Vhc29uYWwgZnJ1aXQsIHRoeW1lLCByb3NlbWFyeSAoQXNrIGZvciB0b2RheSdzIHNlbGVjdGlvbilcIixcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcImhlcmJfaW5mdXNlZF9mcnVpdF9jcnVtYmxlLmpwZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxlbW9uIEJhc2lsIFNvcmJldFwiLFxuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogNixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGlnaHQgYW5kIHJlZnJlc2hpbmdcIixcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcImxlbW9uX2Jhc2lsX3NvcmJldC5qcGdcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuXG5mdW5jdGlvbiBjcmVhdGVNZW51Q2FyZChtZW51RGF0YSkge1xuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q2FyZC5pZCA9IFwibWVudS1jYXJkXCI7XG4gICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZChcIm1haW4tY2FyZFwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGZvciAobGV0IHNlY3Rpb25EYXRhIG9mIG1lbnVEYXRhKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGNhdGVnb3J5LnRleHRDb250ZW50ID0gc2VjdGlvbkRhdGEuY2F0ZWdvcnk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuXG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBzZWN0aW9uRGF0YS5pdGVtcykge1xuICAgICAgICAgICAgY29uc3QgaXRlbUh0bWwgPSBgXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke2ltYWdlc1tpdGVtLnNyY119IGFsdD1cIiR7aXRlbS5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+JHtpdGVtLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiQke2l0ZW0ucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbUh0bWwpO1xuICAgICAgICAgICAgY29uc3QgaXRlbUVsZW1lbnQgPSBwYXJzZUh0bWwoaXRlbUh0bWwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbUVsZW1lbnQpO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChwYXJzZUh0bWwoaXRlbUh0bWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gbWVudUNhcmQ7XG59XG5cblxuZnVuY3Rpb24gbWVudSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiLCBcIm1lbnVcIik7XG5cbiAgICBjb25zdCBpbWdNYWluID0gbmV3IEltYWdlKCk7XG4gICAgaW1nTWFpbi5zcmMgPSBJbWdUYWJsZXM7XG4gICAgaW1nTWFpbi5hbHQgPSBcIkEgc21hbGwgY3VwIG9mIG9saXZlIG9pbCwgaGVyYnMsIGFuZCBnYXJsaWMgY2xvdmVzIG9uIGEgcGxhdGVcIjtcbiAgICBpbWdNYWluLmNsYXNzTGlzdC5hZGQoXCJ0b3BcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWdNYWluKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQobWVudURhdGEpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCJmdW5jdGlvbiBwYXJzZUh0bWwoaHRtbFRleHQpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sVGV4dCwgJ3RleHQvaHRtbCcpO1xuICAgIHJldHVybiBkb2MuYm9keS5maXJzdEVsZW1lbnRDaGlsZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VIdG1sOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lLmpzXCJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIlxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5qc1wiXG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXY+YnV0dG9uXCIpLmZvckVhY2goXG4gICAgYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBzd2l0Y2goYnV0dG9uLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBob21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1lbnVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXY+LnNlbGVjdGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbilcbmNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG5ob21lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9