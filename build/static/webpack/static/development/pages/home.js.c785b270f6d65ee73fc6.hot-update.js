webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./src/components/data/index.js":
/*!**************************************!*\
  !*** ./src/components/data/index.js ***!
  \**************************************/
/*! exports provided: TYPES, mechanicalPropertiesData, operationalPropertiesData, waterOriginData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPES", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mechanicalPropertiesData", function() { return mechanicalPropertiesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationalPropertiesData", function() { return operationalPropertiesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterOriginData", function() { return waterOriginData; });
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
var operationalPropertiesData = [createRangeData('CWR - Cooling Water Return temperature', 'oC', MANDATORY, TYPES.RANGE, 25, 40, 3, 'd21'), createRangeData('CWS - Cooling Water Supply temperature', 'oC', MANDATORY, TYPES.RANGE, 25, 40, 2, 'd22'), createNumericData('Temperature difference', 'oC', NOT_MANDATORY, TYPES.NOT_EDITABLE, 'd23'), createRangeData('Skin Temp. (highest in the system) ', 'oC', MANDATORY, TYPES.RANGE, 60, 100, 10, 'd24'), createRangeData('Days of week in operation', 'days per week', MANDATORY, TYPES.RANGE, 1, 7, 1, 'd25'), createRangeData('Hours/day in operation)', 'hours per day', MANDATORY, TYPES.RANGE, 1, 24, 1, 'd26'), createNumericData('# weeks in operation', 'weeks per year', MANDATORY, TYPES.NUMERIC, 'd27')];
var waterOriginData = [createSelectData('Water Source', 'Public/Well/River/Reuse', MANDATORY, TYPES.SELECT, ['Public', 'Well', 'River', 'Reuse'], 'j8'), createNumericData('Water Cost', 'oC', MANDATORY, TYPES.NUMERIC, 'j9'), createNumericData('Drain Cost', 'oC', MANDATORY, TYPES.NUMERIC, 'j10')]; // export const waterAnalysisData = [
//     createRangeData('CWR - Cooling Water Return temperature', 'oC', MANDATORY, TYPES.RANGE, 25, 40, 3, 'd21'),
//     createRangeData('CWS - Cooling Water Supply temperature', 'oC', MANDATORY, TYPES.RANGE, 25, 40, 2, 'd22'),
//     createRangeData('Temperature difference', 'oC', NOT_MANDATORY, TYPES.NOT_EDITABLE, 'd23'),
//     createRangeData('Skin Temp. (highest in the system) ', 'oC', MANDATORY, TYPES.RANGE, 60, 100, 10, 'd24'),
//     createRangeData('Days of week in operation', 'days per week', MANDATORY, TYPES.RANGE, 1, 7, 1, 'd25'),
//     createRangeData('Hours/day in operation)', 'hours per day', MANDATORY, TYPES.RANGE, 1, 24, 1, 'd26'),
//     createRangeData('# weeks in operation', 'weeks per year', MANDATORY, TYPES.NUMERIC, 'd27'),
// ]

/***/ }),

/***/ "./src/components/tables/Tables.js":
/*!*****************************************!*\
  !*** ./src/components/tables/Tables.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _table_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table/Table */ "./src/components/table/Table.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ "./src/components/data/index.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Tables =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Tables, _Component);

  function Tables() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tables);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Tables).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tables, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      return __jsx("div", {
        className: className
      }, __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        tableTitle: 'Mechanical Properties',
        data: _data__WEBPACK_IMPORTED_MODULE_7__["mechanicalPropertiesData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        tableTitle: 'Operational Properties',
        data: _data__WEBPACK_IMPORTED_MODULE_7__["operationalPropertiesData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        tableTitle: 'Water Origin',
        data: _data__WEBPACK_IMPORTED_MODULE_7__["waterOriginData"]
      }));
    }
  }]);

  return Tables;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tables);

/***/ })

})
//# sourceMappingURL=home.js.c785b270f6d65ee73fc6.hot-update.js.map