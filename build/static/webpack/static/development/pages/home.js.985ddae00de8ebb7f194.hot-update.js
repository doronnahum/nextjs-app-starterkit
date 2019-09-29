webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./src/components/table/Table.js":
/*!***************************************!*\
  !*** ./src/components/table/Table.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./src/components/table/utils.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./connect */ "./src/components/table/connect.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









 // import { calculate } from 'src/components/data/tableUtils';


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
    },
    TableCell: {}
  };
});

function SimpleTable(props) {
  var tableTitle = props.tableTitle,
      data = props.data,
      headerTitles = props.headerTitles,
      tableSubTitle = props.tableSubTitle;
  var classes = useStyles();
  console.log("props of ".concat(tableTitle), props.tablesData);
  var tableValues = props.tablesData;
  var influencingValues = [tableValues.d10, tableValues.d11, tableValues.d21, tableValues.d22];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    updateReadOnlyValues();
  }, influencingValues);

  var updateReadOnlyValues = function updateReadOnlyValues() {
    if (tableValues.d10 && tableValues.d11) {
      // d12
      var res = tableValues.d10 - tableValues.d11;
      props.actions.updateTablesValues({
        values: {
          d12: res
        }
      });
    }

    if (tableValues.d21 && tableValues.d22) {
      // d23
      var _res = tableValues.d21 - tableValues.d22;

      props.actions.updateTablesValues({
        values: {
          d23: _res
        }
      });
    }
  };

  var renderTableData = function renderTableData() {
    if (!data) return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "left",
      className: classes.TableCell
    }, "no data"));
    return data.map(function (row) {
      return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: row.location
      }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "left",
        className: classes.TableCell
      }, row.name), row.value && __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "left"
      }, row.value), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "left"
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_8__["renderValueType"])(row)));
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], null, tableSubTitle && __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.tableTitle,
    colSpan: 3,
    align: "left"
  }, tableSubTitle)), headerTitles ? __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, headerTitles.map(function (title) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: title,
      align: "left"
    }, title);
  })) : __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.tableTitle,
    align: "left"
  }, tableTitle), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    align: "left"
  }, "Value"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    align: "left"
  }, "Units"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, renderTableData())));
}

SimpleTable.defaultProps = {
  units: true
};
SimpleTable.propTypes = {
  units: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_connect__WEBPACK_IMPORTED_MODULE_10__["default"])(SimpleTable));

/***/ }),

/***/ "./src/components/table/utils.js":
/*!***************************************!*\
  !*** ./src/components/table/utils.js ***!
  \***************************************/
/*! exports provided: handleInputChange, handleSelectChange, onChangeSlider, valuetext, getMarks, renderValueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleInputChange", function() { return handleInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSelectChange", function() { return handleSelectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeSlider", function() { return onChangeSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valuetext", function() { return valuetext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarks", function() { return getMarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderValueType", function() { return renderValueType; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
var handleInputChange = function handleInputChange(event, updateTablesValues) {
  updateTablesValues({
    values: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.id, event.target.value)
  });
};
var handleSelectChange = function handleSelectChange(event, updateTablesValues) {
  updateTablesValues({
    values: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.id, event.target.value)
  });
};
var onChangeSlider = function onChangeSlider(event, val, location, updateTablesValues) {
  updateTablesValues({
    values: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, location, val)
  });
};
function valuetext(value) {
  return "".concat(value);
}
var getMarks = function getMarks(row) {
  if (!row) return [];
  var arr = [];
  var i = row.min;

  while (i <= row.max) {
    arr.push({
      value: i
    });
    i += row.ticks;
  } // if we want lables in the  edges of the slider
  // if (arr.length) { 
  //     debugger
  //     arr[0].label = row.min.toString()
  //     arr[arr.length - 1].label = row.max.toString()
  // }


  return arr;
};
var renderValueType = function renderValueType(row) {
  switch (row.type) {
    case TYPES.NUMERIC:
      return __jsx(Input, {
        id: row.location,
        label: "Number",
        value: tableValues[row.location] || '',
        onChange: function onChange(e) {
          return handleInputChange(e, updateTablesValues);
        },
        type: "number",
        className: classes.textField
      });

    case TYPES.RANGE:
      return __jsx(Slider, {
        defaultValue: Math.floor((row.min + row.max) / 2),
        getAriaValueText: valuetext,
        onChange: function onChange(e, val) {
          return onChangeSlider(e, val, row.location, updateTablesValues);
        },
        "aria-labelledby": "discrete-slider-always",
        step: row.ticks,
        min: row.min,
        max: row.max,
        marks: getMarks(row),
        valueLabelDisplay: "on"
      });

    case TYPES.SELECT:
      return __jsx(Select, {
        id: row.location,
        "native": true,
        value: tableValues[row.location],
        onChange: function onChange(e) {
          return handleSelectChange(e, updateTablesValues);
        }
      }, row.data.map(function (item, i) {
        return __jsx("option", {
          key: i,
          value: item
        }, item);
      }));

    case TYPES.NOT_EDITABLE:
      return __jsx(Input, {
        id: row.location,
        value: tableValues[row.location] || '',
        readOnly: true,
        className: classes.textField
      });

    default:
      return row.type;
  }
};

/***/ })

})
//# sourceMappingURL=home.js.985ddae00de8ebb7f194.hot-update.js.map