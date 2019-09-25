webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./src/components/Table.js":
/*!*********************************!*\
  !*** ./src/components/Table.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data */ "./src/components/data/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {// width: '100%',
      // marginTop: theme.spacing(3),
      // overflowX: 'auto',
    },
    table: {// width: 600,
    },
    tableTitle: {
      fontSize: 20
    }
  };
});
function SimpleTable(props) {
  var tableTitle = props.tableTitle,
      data = props.data;
  var classes = useStyles();

  var renderValueType = function renderValueType(row) {
    switch (row.type) {
      case _data__WEBPACK_IMPORTED_MODULE_8__["TYPES"].NUMERIC:
        return;

      case _data__WEBPACK_IMPORTED_MODULE_8__["TYPES"].RANGE:
        return;

      case _data__WEBPACK_IMPORTED_MODULE_8__["TYPES"].SELECT:
        return;

      default:
        break;
    }
  };

  var renderTableData = function renderTableData() {
    if (!data) return __jsx("div", null, "no data");
    return data.map(function (row) {
      return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: row.name
      }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "left"
      }, row.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "left"
      }, row.value), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "left"
      }, renderValueType));
    });
  };

  console.log('data', data);
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.tableTitle,
    align: "left"
  }, tableTitle), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    align: "left"
  }, "Value"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    align: "left"
  }, "Units"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, renderTableData())));
}

/***/ }),

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

function createSelectData(name, value, mandatory, type, data) {
  return {
    name: name,
    value: value,
    mandatory: mandatory,
    type: type,
    data: data
  };
}

var mechanicalProperties = [createRangeData('Number of CT (interconnected)', '# (interconnected cooling towers)', NOT_MANDATORY, TYPES.RANGE, 1, 10, 1), createRangeData('Number of Circulation Pumps', '#  (operational + standby) ', NOT_MANDATORY, TYPES.RANGE, 1, 20, 1), createRangeData('Total pumps flow rate capacity', 'm3/h', NOT_MANDATORY, TYPES.RANGE, 1, 50, 1), createNumericData('Actual cooling circulation flow rate', 'm3/h', NOT_MANDATORY, TYPES.NUMERIC), createNumericData('Available flowrate for UET units', 'm3/h', MANDATORY, TYPES.NUMERIC), createRangeData('Total Basin volume (with equation line)', 'm3', NOT_MANDATORY, TYPES.RANGE, 10, 200, 10), createNumericData('Pipe length from CT to H.Ex. (approx.)', 'meters', MANDATORY, TYPES.NUMERIC), createSelectData('type of fluid to be chilled', 'Water/Ammonia/Freon/Ethylene-glycol', MANDATORY, TYPES.SELECT, ['Water', 'Ammonia', 'Freon', 'Ethylene-glycol']), createSelectData('Cooling Tower type', 'external heat exchanger/evaporator - condenser*/direct contact', MANDATORY, TYPES.SELECT, ['external heat exchanger', 'evaporator - condenser*', 'direct contact'])];

/***/ })

})
//# sourceMappingURL=home.js.a10b2cd72a22dad141f7.hot-update.js.map