webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./src/components/data/index.js":
/*!**************************************!*\
  !*** ./src/components/data/index.js ***!
  \**************************************/
/*! exports provided: TYPES, mechanicalPropertiesData, operationalPropertiesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPES", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mechanicalPropertiesData", function() { return mechanicalPropertiesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationalPropertiesData", function() { return operationalPropertiesData; });
var MANDATORY = true;
var NOT_MANDATORY = false;
var TYPES = {
  NUMERIC: 'NUMERIC',
  RANGE: 'RANGE',
  SELECT: 'SELECT',
  NOT_EDITABLE: 'NOT_EDITABLE'
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

var mechanicalPropertiesData = [createRangeData('Number of CT (interconnected)', '# (interconnected cooling towers)', NOT_MANDATORY, TYPES.RANGE, 1, 10, 1, 'd8'), createRangeData('Number of Circulation Pumps', '#  (operational + standby) ', NOT_MANDATORY, TYPES.RANGE, 1, 20, 1, 'd9'), createRangeData('Total pumps flow rate capacity', 'm3/h', NOT_MANDATORY, TYPES.RANGE, 1, 50, 1, 'd10'), createNumericData('Actual cooling circulation flow rate', 'm3/h', NOT_MANDATORY, TYPES.NUMERIC, 'd11'), createNumericData('Available flowrate for UET units', 'm3/h', MANDATORY, TYPES.NOT_EDITABLE, 'd12'), createRangeData('Total Basin volume (with equation line)', 'm3', NOT_MANDATORY, TYPES.RANGE, 10, 200, 10, 'd13'), createNumericData('Pipe length from CT to H.Ex. (approx.)', 'meters', MANDATORY, TYPES.NUMERIC, 'd14'), createSelectData('type of fluid to be chilled', 'Water/Ammonia/Freon/Ethylene-glycol', MANDATORY, TYPES.SELECT, ['Water', 'Ammonia', 'Freon', 'Ethylene-glycol'], 'd15'), createSelectData('Cooling Tower type', 'external heat exchanger/evaporator - condenser*/direct contact', MANDATORY, TYPES.SELECT, ['external heat exchanger', 'evaporator - condenser*', 'direct contact'], 'd16')];
var operationalPropertiesData = [createRangeData('CWR - Cooling Water Return temperature', 'oC', MANDATORY, TYPES.RANGE, 25, 40, 3, 'd21'), createRangeData('CWS - Cooling Water Supply temperature', 'oC', MANDATORY, TYPES.RANGE, 25, 40, 2, 'd22'), createNumericData('Temperature difference', 'oC', NOT_MANDATORY, TYPES.NOT_EDITABLE, 'd23'), createRangeData('Skin Temp. (highest in the system) ', 'oC', MANDATORY, TYPES.RANGE, 60, 100, 10, 'd24'), createRangeData('Days of week in operation', 'days per week', MANDATORY, TYPES.RANGE, 1, 7, 1, 'd25'), createRangeData('Hours/day in operation)', 'hours per day', MANDATORY, TYPES.RANGE, 1, 24, 1, 'd26'), createNumericData('# weeks in operation', 'weeks per year', MANDATORY, TYPES.RANGE, 'd27')];

/***/ })

})
//# sourceMappingURL=home.js.322e4594b4f6c9a790dc.hot-update.js.map