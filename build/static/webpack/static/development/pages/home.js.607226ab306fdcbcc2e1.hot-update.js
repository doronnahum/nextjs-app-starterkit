webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./src/components/data/index.js":
/*!**************************************!*\
  !*** ./src/components/data/index.js ***!
  \**************************************/
/*! exports provided: mechanicalProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mechanicalProperties", function() { return mechanicalProperties; });
var MANDATORY = true;
var NOT_MANDATORY = false;
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

var mechanicalProperties = [createRangeData('Number of CT (interconnected)', '# (interconnected cooling towers)', NOT_MANDATORY, TYPES.RANGE, 1, 10, 1), createRangeData('Number of Circulation Pumps', '#  (operational + standby) ', NOT_MANDATORY, TYPES.RANGE, 1, 20, 1), createRangeData('Total pumps flow rate capacity', 'm3/h', NOT_MANDATORY, TYPES.RANGE, 1, 50, 1), createNumericData('Actual cooling circulation flow rate', 'm3/h', NOT_MANDATORY, TYPES.NUMERIC), createNumericData('Available flowrate for UET units', 'm3/h', MANDATORY, TYPES.NUMERIC), createRangeData('Total Basin volume (with equation line)', 'm3', NOT_MANDATORY, TYPES.RANGE, 10, 200, 10), createNumericData('Pipe length from CT to H.Ex. (approx.)', 'meters', MANDATORY, TYPES.NUMERIC), createSelectData('type of fluid to be chilled', 'Water/Ammonia/Freon/Ethylene-glycol', MANDATORY, TYPES.SELECT, ['Water', 'Ammonia', 'Freon', 'Ethylene-glycol']), createSelectData('Cooling Tower type', 'meters', MANDATORY, TYPES.SELECT, ['external heat exchanger', 'evaporator - condenser*', 'direct contact'])];

/***/ })

})
//# sourceMappingURL=home.js.607226ab306fdcbcc2e1.hot-update.js.map