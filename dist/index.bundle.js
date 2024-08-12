/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/results.js":
/*!***************************!*\
  !*** ./src/js/results.js ***!
  \***************************/
/***/ (() => {

var calorieTarget = document.getElementById("calorie-target");
var proteinTarget = document.getElementById("protein-target");
var fatTarget = document.getElementById("fat-target");
var carbTarget = document.getElementById("carb-target");
var fiberTarget = document.getElementById("fiber-target");
var proteinRatio = document.getElementById("protein-ratio");
var carbRatio = document.getElementById("carb-ratio");
var fatRatio = document.getElementById("fat-ratio");
var macroSliders = document.querySelectorAll('input[type="range"]');
var proteinSlider = document.getElementById("carb-ratio-slider");
var carbSlider = document.getElementById("carb-ratio-slider");
var fatSlider = document.getElementById("fat-ratio-slider");
var calorieObj = {
  calories: 2000,
  ratio: {
    protein: 30,
    fat: 30,
    carbs: 40
  },
  macro: {
    protein: 150,
    fat: 67,
    carbs: 200,
    fiber: 28
  }
};

// Macro Range Slider Event Listener
macroSliders.forEach(function (slider) {
  slider.oninput = function (e) {
    return updateMacroInfo(e);
  };
});

// Updates Macro Info
var updateMacroInfo = function updateMacroInfo(e) {
  if (e.target.name == "protein-ratio-slider") {
    calorieObj.ratio.protein = e.target.value;
    calorieObj.ratio.carbs = 100 - calorieObj.ratio.protein - calorieObj.ratio.fat;
    updateTargets();
    loadTargets();
  } else if (e.target.name == "fat-ratio-slider") {
    calorieObj.ratio.fat = e.target.value;
    calorieObj.ratio.carbs = 100 - calorieObj.ratio.protein - calorieObj.ratio.fat;
    updateTargets();
    loadTargets();
  } else if (e.target.name == "carb-ratio-slider") {
    calorieObj.ratio.carbs = e.target.value;
    calorieObj.ratio.fat = 100 - calorieObj.ratio.protein - calorieObj.ratio.carbs;
    updateTargets();
    loadTargets();
  }
};

// Update Protein Target
var updateTargets = function updateTargets() {
  calorieObj.macro.protein = Math.trunc(calorieObj.calories * (calorieObj.ratio.protein * 0.01) / 4);
  calorieObj.macro.fat = Math.trunc(calorieObj.calories * (calorieObj.ratio.fat * 0.01) / 9);
  calorieObj.macro.carbs = Math.trunc(calorieObj.calories * (calorieObj.ratio.carbs * 0.01) / 4);
};
var loadTargets = function loadTargets() {
  proteinTarget.innerText = "".concat(calorieObj.macro.protein, "g");
  fatTarget.innerText = "".concat(calorieObj.macro.fat, "g");
  carbTarget.innerText = "".concat(calorieObj.macro.carbs, "g");
  calorieTarget.innerText = calorieObj.calories;
  proteinRatio.innerText = "".concat(calorieObj.ratio.protein, "%");
  fatRatio.innerText = "".concat(calorieObj.ratio.fat, "%");
  carbRatio.innerText = "".concat(calorieObj.ratio.carbs, "%");
  proteinSlider.value = calorieObj.ratio.protein;
  fatSlider.value = calorieObj.ratio.fat;
  carbSlider.value = calorieObj.ratio.carbs;
};
loadTargets();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/main.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/main.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Jersey+10&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Jersey+10&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Primary Colors */
/* Typography */
.input-name {
  grid-column: -1/1;
  gap: 8px;
}
.input-name input {
  width: 100%;
}

.input-email {
  grid-column: -1/1;
  gap: 8px;
}
.input-email input {
  width: 100%;
}

.input-height .info-container input {
  width: 24px;
}

.input-activity {
  grid-column: -1/1;
  flex-direction: column;
}
.input-activity .activity-container {
  flex-direction: column;
  border: none;
  padding: 0 16px;
}
.input-activity .activity-container .radio-activity {
  border-width: 0 0 1px 0;
  border-radius: 0;
  border-color: #b8c0cc;
  padding: 16px 8px;
  justify-content: start;
  gap: 16px;
  align-items: center;
}
.input-activity .activity-container .radio-activity input {
  width: 20px;
}
.input-activity .activity-container .radio-activity input:hover {
  cursor: pointer;
}
.input-activity .activity-container .radio-activity:last-of-type {
  border: none;
}

#goal-form div {
  grid-column: -1/1;
}

/* Primary Colors */
/* Typography */
#calorie-form .radio-container {
  justify-content: start;
  gap: 18px;
  padding: 12px 18px;
}
#calorie-form .radio-container label {
  font-weight: 600;
  font-size: 1.5rem;
}
#calorie-form .radio-container label span {
  color: #456aff;
  font-size: clamp(1rem, 3.5vw, 1.2rem);
  padding-left: 8px;
}

#results-form span {
  font-weight: 600;
}
#results-form .calorie-breakdown {
  flex-direction: column;
  text-align: center;
  gap: 0;
}
#results-form .calorie-breakdown .total-calories {
  justify-content: center;
  border: none;
}
#results-form .calorie-breakdown .macro-breakdown {
  border: none;
  gap: 18px;
}
#results-form .range-container {
  flex-direction: column;
  padding: 18px;
}

/* Styling Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
}

/* General Styling */
html {
  height: 100%;
  width: 100%;
}

body {
  background-color: #0d131a;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-size: clamp(1rem, 3.5vw, 1.2rem);
}
body main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
body main .card {
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px;
}
body main .card form {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;
}
body main .card form div {
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  padding: 12px;
  gap: 8px;
}
body main .card form input {
  border: none;
}
body main .card form input:focus,
body main .card form input:active {
  outline: none;
}
body main .card form .info-container {
  border: none;
  padding: 0;
  align-items: center;
}
body main .card form .info-container input {
  width: 32px;
  text-align: end;
}
body main .card form select {
  border: none;
  font-size: clamp(1rem, 3.5vw, 1.2rem);
  text-align: end;
}
body main .card form input {
  accent-color: #456aff;
  font-size: clamp(1rem, 3.5vw, 1.2rem);
}
body main .card form input::-webkit-outer-spin-button,
body main .card form input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
body main .card form .btn-container {
  border: none;
  padding: 16px 0 0 0;
}
body main .card form .btn-container input[type=button] {
  border-radius: 8px;
  font-size: clamp(1rem, 3.5vw, 1.2rem);
  padding: 12px;
  border: 2px solid #456aff;
  font-weight: 600;
}
body main .card form .btn-container .primary-btn {
  background-color: #456aff;
  color: #fff;
  flex: 1;
}
body main .card form .btn-container .secondary-btn {
  background-color: #fff;
  color: #456aff;
  flex: 1;
}
body main .card form .btn-container input[type=button]:hover,
body main .card form .btn-container input[type=button]:active {
  cursor: pointer;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
}
body footer {
  padding: 8px;
  width: 100%;
  margin-top: auto;
}
body footer .footer-link {
  text-decoration: none;
  color: #b8c0cc;
  font-weight: 800;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 4px;
}
body footer .footer-link .github-image {
  width: 24px;
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/_variables.scss","webpack://./src/assets/styles/_index.scss","webpack://./src/assets/styles/main.scss","webpack://./src/assets/styles/_goals.scss","webpack://./src/assets/styles/_calories.scss","webpack://./src/assets/styles/_results.scss"],"names":[],"mappings":"AAEA,mBAAA;AAOA,eAAA;ACTA;EACE,iBAAA;EACA,QAAA;ACKF;ADHE;EACE,WAAA;ACKJ;;ADFA;EACE,iBAAA;EACA,QAAA;ACKF;ADHE;EACE,WAAA;ACKJ;;ADCI;EACE,WAAA;ACEN;;ADGA;EACE,iBAAA;EACA,sBAAA;ACAF;ADEE;EACE,sBAAA;EACA,YAAA;EACA,eAAA;ACAJ;ADEI;EACE,uBAAA;EACA,gBAAA;EACA,qBDjCY;ECkCZ,iBAAA;EACA,sBAAA;EACA,SAAA;EACA,mBAAA;ACAN;ADEM;EACE,WAAA;ACAR;ADGM;EACE,eAAA;ACDR;ADKI;EACE,YAAA;ACHN;;ACjDE;EACE,iBAAA;ADoDJ;;AFpDA,mBAAA;AAOA,eAAA;AINE;EACE,sBAAA;EACA,SAAA;EACA,kBAAA;AFwDJ;AEtDI;EACE,gBJGW;EIFX,iBAAA;AFwDN;AEtDM;EACE,cJVQ;EIWR,qCAAA;EACA,iBAAA;AFwDR;;AGrEE;EACE,gBLSa;AE+DjB;AGrEE;EACE,sBAAA;EACA,kBAAA;EACA,MAAA;AHuEJ;AGrEI;EACE,uBAAA;EACA,YAAA;AHuEN;AGpEI;EACE,YAAA;EACA,SAAA;AHsEN;AGlEE;EACE,sBAAA;EACA,aAAA;AHoEJ;;AAtFA,kBAAA;AACA;;;EAGE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,qBFHa;AE4Ff;;AAtFA,oBAAA;AACA;EACE,YAAA;EACA,WAAA;AAyFF;;AAtFA;EACE,yBFlBiB;EEmBjB,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;EACA,qCFdU;AEuGZ;AAvFE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,OAAA;AAyFJ;AAvFI;EACE,sBFhCE;EEiCF,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,YAAA;AAyFN;AAnFM;EACE,aAAA;EACA,4DAAA;EACA,SAAA;AAqFR;AAnFQ;EACE,sBAAA;EACA,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,aAAA;EACA,QAAA;AAqFV;AAlFQ;EACE,YAAA;AAoFV;AAjFQ;;EAEE,aAAA;AAmFV;AAhFQ;EACE,YAAA;EACA,UAAA;EACA,mBAAA;AAkFV;AAhFU;EACE,WAAA;EACA,eAAA;AAkFZ;AA9EQ;EACE,YAAA;EACA,qCFzEE;EE0EF,eAAA;AAgFV;AA7EQ;EACE,qBFzFM;EE0FN,qCF/EE;AE8JZ;AA3EQ;;EAEE,wBAAA;EACA,SAAA;AA6EV;AA1EQ;EACE,YAAA;EACA,mBAAA;AA4EV;AA1EU;EACE,kBAAA;EAEA,qCFhGA;EEiGA,aAAA;EACA,yBAAA;EACA,gBFrGK;AEgLjB;AAxEU;EACE,yBFlHI;EEmHJ,WFhHJ;EEiHI,OAAA;AA0EZ;AAvEU;EACE,sBFrHJ;EEsHI,cFzHI;EE0HJ,OAAA;AAyEZ;AAtEU;;EAEE,eAAA;EACA,yDAAA;AAwEZ;AAjEE;EACE,YAAA;EACA,WAAA;EACA,gBAAA;AAmEJ;AAjEI;EACE,qBAAA;EACA,cF7IY;EE8IZ,gBFrIM;EEsIN,aAAA;EACA,2BAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;AAmEN;AAjEM;EACE,WAAA;AAmER","sourceRoot":""}]);
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

/***/ "./src/assets/styles/main.scss":
/*!*************************************!*\
  !*** ./src/assets/styles/main.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/main.scss */ "./src/assets/styles/main.scss");
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results */ "./src/js/results.js");
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_results__WEBPACK_IMPORTED_MODULE_1__);



// const units = document.querySelectorAll("input[name=radio-units]");
// units.forEach((unit) =>
//   unit.addEventListener("change", function () {
//     checkUnit();
//   })
// );

// const checkUnit = () => {
//   if (imperial.checked) {
//     document.querySelector(".imperial-form").hidden = false;
//     document.querySelector(".metric-form").hidden = true;
//   } else if (metric.checked) {
//     document.querySelector(".imperial-form").hidden = true;
//     document.querySelector(".metric-form").hidden = false;
//   }
// };

// const formToObj = (form) => {
//   Object.fromEntries(new FormData(form));
// };

// console.log(formToObj(document.querySelector("#calorie-form")));
})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map