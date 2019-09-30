webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./src/components/data/index.js":
/*!**************************************!*\
  !*** ./src/components/data/index.js ***!
  \**************************************/
/*! exports provided: TYPES, mechanicalPropertiesData, operationalPropertiesData, waterOriginData, operationCostsData, enironmentalData, customersProblemsAndRequestsData, waterAnalysisData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPES", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mechanicalPropertiesData", function() { return mechanicalPropertiesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationalPropertiesData", function() { return operationalPropertiesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterOriginData", function() { return waterOriginData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationCostsData", function() { return operationCostsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enironmentalData", function() { return enironmentalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customersProblemsAndRequestsData", function() { return customersProblemsAndRequestsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterAnalysisData", function() { return waterAnalysisData; });
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

function createSelectDataWithoutValue(name, value, mandatory, type, data, location) {
  return {
    name: name,
    mandatory: mandatory,
    type: type,
    data: data,
    location: location
  };
}

var mechanicalPropertiesData = [createRangeData('Number of CT (interconnected)', '# (interconnected cooling towers)', NOT_MANDATORY, TYPES.RANGE, 1, 10, 1, 'd8'), createRangeData('Number of Circulation Pumps', '#  (operational + standby) ', NOT_MANDATORY, TYPES.RANGE, 1, 20, 1, 'd9'), createRangeData('Total pumps flow rate capacity', 'm3/h', NOT_MANDATORY, TYPES.RANGE, 1, 50, 1, 'd10'), createNumericData('Actual cooling circulation flow rate', 'm3/h', NOT_MANDATORY, TYPES.NUMERIC, 'd11'), createNumericData('Available flowrate for UET units', 'm3/h', MANDATORY, TYPES.NOT_EDITABLE, 'd12'), createRangeData('Total Basin volume (with equation line)', 'm3', NOT_MANDATORY, TYPES.RANGE, 10, 200, 10, 'd13'), createNumericData('Pipe length from CT to H.Ex. (approx.)', 'meters', MANDATORY, TYPES.NUMERIC, 'd14'), createSelectData('type of fluid to be chilled', 'Water/Ammonia/Freon/Ethylene-glycol', MANDATORY, TYPES.SELECT, ['', 'Water', 'Ammonia', 'Freon', 'Ethylene-glycol'], 'd15'), createSelectData('Cooling Tower type', 'external heat exchanger/evaporator - condenser*/direct contact', MANDATORY, TYPES.SELECT, ['', 'external heat exchanger', 'evaporator - condenser*', 'direct contact'], 'd16')];
var operationalPropertiesData = [createRangeData('CWR - Cooling Water Return temperature', 'oC', MANDATORY, TYPES.RANGE, 25, 40, 3, 'd21'), createRangeData('CWS - Cooling Water Supply temperature', 'oC', MANDATORY, TYPES.RANGE, 25, 40, 2, 'd22'), createNumericData('Temperature difference', 'oC', NOT_MANDATORY, TYPES.NOT_EDITABLE, 'd23'), createRangeData('Skin Temp. (highest in the system) ', 'oC', MANDATORY, TYPES.RANGE, 60, 100, 10, 'd24'), createRangeData('Days of week in operation', 'days per week', MANDATORY, TYPES.RANGE, 1, 7, 1, 'd25'), createRangeData('Hours/day in operation)', 'hours per day', MANDATORY, TYPES.RANGE, 1, 24, 1, 'd26'), createNumericData('# weeks in operation', 'weeks per year', MANDATORY, TYPES.NUMERIC, 'd27')];
var waterOriginData = [createSelectData('Water Source', 'Public/Well/River/Reuse', MANDATORY, TYPES.SELECT, ['', 'Public', 'Well', 'River', 'Reuse'], 'j8'), createNumericData('Water Cost', '$USD / m3', MANDATORY, TYPES.NUMERIC, 'j9'), createNumericData('Drain Cost', '$USD / m3', MANDATORY, TYPES.NUMERIC, 'j10')];
var operationCostsData = [createNumericData('Chemical costs', '$USD/year', MANDATORY, TYPES.NUMERIC, 'j13'), createNumericData('Elecrtricity Cost', '$USD/kWH', MANDATORY, TYPES.NUMERIC, 'j14'), createNumericData('# plant stoppages due to blockages', '#/year', MANDATORY, TYPES.NUMERIC, 'j15'), createNumericData('Thickness of scaling in heat exhanger', 'mm', MANDATORY, TYPES.NUMERIC, 'j16'), createNumericData('Cost of  cleaning of heat exchanger', '$USD/year', MANDATORY, TYPES.NUMERIC, 'j17')];
var enironmentalData = [createNumericData('Discharge limitations', 'Chlorides (ppm)', MANDATORY, TYPES.NUMERIC, 'j20'), createNumericData('Discharge limitations', 'Sulfates (ppm)', MANDATORY, TYPES.NUMERIC, 'j21'), createNumericData('Discharge limitations', 'pH', MANDATORY, TYPES.NUMERIC, 'j22'), createNumericData('Discharge limitations', 'Chlorine (ppm)', MANDATORY, TYPES.NUMERIC, 'j23'), createSelectData('Water Source', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'j24'), createSelectData('Water Source', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'j25')];
var customersProblemsAndRequestsData = [createSelectDataWithoutValue('Water Conservation', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i29'), createSelectDataWithoutValue('Energy Savings', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i30'), createSelectDataWithoutValue('Bio-contamination problems', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i31'), createSelectDataWithoutValue('Scale Precipitation problems', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i32'), createSelectDataWithoutValue('Silica Related Problems', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i33'), createSelectDataWithoutValue('Chemical Elimination', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i34')];

function createManyValuesData(name, value, mandatory, field1, field2, field3) {
  return {
    name: name,
    value: value,
    mandatory: mandatory,
    field1: field1,
    field2: field2,
    field3: field3
  };
}

var waterAnalysisData = [createManyValuesData('Conductivity', 'µS/cm', MANDATORY, [{
  'd32': TYPES.NUMERIC
}, {
  'e32': TYPES.NOT_EDITABLE
}, {
  'f32': TYPES.NOT_EDITABLE
}]), createManyValuesData('pH', 'Units', MANDATORY, [{
  'd33': TYPES.NUMERIC
}, {
  'e33': TYPES.NOT_EDITABLE
}, {
  'f33': TYPES.NOT_EDITABLE
}]), createManyValuesData('Total Hardness', 'ppm as CaCO3', MANDATORY, [{
  'd34': TYPES.NUMERIC
}, {
  'e34': TYPES.NOT_EDITABLE
}, {
  'f34': TYPES.NOT_EDITABLE
}]), createManyValuesData('Carbonate Hardness', 'ppm as CaCO3', MANDATORY, [{
  'd35': TYPES.NUMERIC
}, {
  'e35': TYPES.NOT_EDITABLE
}, {
  'f35': TYPES.NOT_EDITABLE
}]), createManyValuesData('Chlorides', 'ppm', MANDATORY, [{
  'd36': TYPES.NUMERIC
}, {
  'e36': TYPES.NOT_EDITABLE
}, {
  'f36': TYPES.NOT_EDITABLE
}]), createManyValuesData('Iron', 'ppm', MANDATORY, [{
  'd37': TYPES.NUMERIC
}, {
  'e37': TYPES.NOT_EDITABLE
}, {
  'f37': TYPES.NOT_EDITABLE
}]), createManyValuesData('Silica', 'ppm', MANDATORY, [{
  'd38': TYPES.NUMERIC
}, {
  'e38': TYPES.NOT_EDITABLE
}, {
  'f38': TYPES.NOT_EDITABLE
}]), createManyValuesData('Sulphate', 'ppm', MANDATORY, [{
  'd39': TYPES.NUMERIC
}, {
  'e39': TYPES.NOT_EDITABLE
}, {
  'f39': TYPES.NOT_EDITABLE
}])];

/***/ })

})
//# sourceMappingURL=home.js.c90bcf8673c40b57a502.hot-update.js.map