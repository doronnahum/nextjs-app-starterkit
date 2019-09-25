webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./src/components/data/index.js":
/*!**************************************!*\
  !*** ./src/components/data/index.js ***!
  \**************************************/
/*! exports provided: mechanicalProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mechanicalProperties", function() { return mechanicalProperties; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");

var MANDATORY = true;
var NOT_MANDATORY = false;
var min = false;
var max = false;
var ticks = false;
var TYPES = {
  NUMERIC: 'NUMERIC',
  RANGE: 'RANGE',
  SELECT: 'SELECT'
};

function createRangeData(name, value, mandatory, type, min, max, ticks) {
  return {
    name: name,
    value: value,
    mandatory: mandatory,
    type: type,
    min: min,
    max: max,
    ticks: ticks
  };
}

function createNumericData(name, value, mandatory, type) {
  return {
    name: name,
    value: value,
    mandatory: mandatory,
    type: type
  };
}

function createSelectData(name, value, mandatory, type, ticks, min, max) {
  return {
    name: name,
    range: range
  };
}

var mechanicalProperties = [createRangeData('Number of CT (interconnected)', '# (interconnected cooling towers)', NOT_MANDATORY, TYPES.RANGE, min = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("min"), 1), max = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("max"), 10), ticks = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("ticks"), 1)), createRangeData('Number of Circulation Pumps', '#  (operational + standby) ', NOT_MANDATORY, TYPES.RANGE, min = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("min"), 1), max = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("max"), 20), ticks = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("ticks"), 1)), createRangeData('Total pumps flow rate capacity', 'm3/h', NOT_MANDATORY, TYPES.RANGE, min = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("min"), 1), max = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("max"), 50), ticks = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("ticks"), 1)), createNumericData('Actual cooling circulation flow rate', 'm3/h', NOT_MANDATORY, TYPES.NUMERIC), createNumericData('Available flowrate for UET units', 'm3/h', MANDATORY, TYPES.NUMERIC), createRangeData('Total Basin volume (with equation line)', 'm3', NOT_MANDATORY, TYPES.RANGE, min = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("min"), 10), max = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("max"), 200), ticks = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("ticks"), 10))];

/***/ })

})
//# sourceMappingURL=home.js.32e357cb395a73d38103.hot-update.js.map