webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./src/components/data/index.js":
/*!**************************************!*\
  !*** ./src/components/data/index.js ***!
  \**************************************/
/*! exports provided: TYPES, mechanicalProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPES", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mechanicalProperties", function() { return mechanicalProperties; });
var MANDATORY = true;
var NOT_MANDATORY = false;
var TYPES = {
  NUMERIC: 'NUMERIC',
  RANGE: 'RANGE',
  SELECT: 'SELECT'
};

function createRangeData(name, value, mandatory, type, min, max, ticks, location) {
  return {
    name: name,
    value: value,
    mandatory: mandatory,
    type: type,
    min: min,
    max: max,
    ticks: ticks,
    location: location
  };
}

function createNumericData(name, value, mandatory, type, location) {
  return {
    name: name,
    value: value,
    mandatory: mandatory,
    type: type,
    location: location
  };
}

function createSelectData(name, value, mandatory, type, data, location) {
  return {
    name: name,
    value: value,
    mandatory: mandatory,
    type: type,
    data: data,
    location: location
  };
}

var mechanicalProperties = [createRangeData('Number of CT (interconnected)', '# (interconnected cooling towers)', NOT_MANDATORY, TYPES.RANGE, 1, 10, 1, 'd8'), createRangeData('Number of Circulation Pumps', '#  (operational + standby) ', NOT_MANDATORY, TYPES.RANGE, 1, 20, 1, 'd9'), createRangeData('Total pumps flow rate capacity', 'm3/h', NOT_MANDATORY, TYPES.RANGE, 1, 50, 1, 'd10'), createNumericData('Actual cooling circulation flow rate', 'm3/h', NOT_MANDATORY, TYPES.NUMERIC, 'd11'), createNumericData('Available flowrate for UET units', 'm3/h', MANDATORY, TYPES.NUMERIC, 'd12'), createRangeData('Total Basin volume (with equation line)', 'm3', NOT_MANDATORY, TYPES.RANGE, 10, 200, 10, 'd13'), createNumericData('Pipe length from CT to H.Ex. (approx.)', 'meters', MANDATORY, TYPES.NUMERIC, 'd14'), createSelectData('type of fluid to be chilled', 'Water/Ammonia/Freon/Ethylene-glycol', MANDATORY, TYPES.SELECT, ['Water', 'Ammonia', 'Freon', 'Ethylene-glycol'], 'd15'), createSelectData('Cooling Tower type', 'external heat exchanger/evaporator - condenser*/direct contact', MANDATORY, TYPES.SELECT, ['external heat exchanger', 'evaporator - condenser*', 'direct contact'], 'd16')];

/***/ })

})
//# sourceMappingURL=home.js.79202a9ded842e0f1e56.hot-update.js.map