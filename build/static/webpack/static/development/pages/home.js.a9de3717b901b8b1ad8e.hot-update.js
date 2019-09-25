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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data */ "./src/components/data/index.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  }),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var handleChange = function handleChange(name) {
    return function (event) {
      debugger;
      setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, event.target.value)));
    };
  };

  var renderValueType = function renderValueType(row) {
    switch (row.type) {
      case _data__WEBPACK_IMPORTED_MODULE_11__["TYPES"].NUMERIC:
        return __jsx(TextField, {
          id: "stasdsdandard-numberasdasdasdsadsasadasd",
          label: "Number",
          value: values.age,
          onChange: handleChange('val'),
          type: "number",
          className: classes.textField,
          InputLabelProps: {
            shrink: true
          },
          margin: "normal"
        });

      case _data__WEBPACK_IMPORTED_MODULE_11__["TYPES"].RANGE:
        return;

      case _data__WEBPACK_IMPORTED_MODULE_11__["TYPES"].SELECT:
        return;

      default:
        return row.type;
    }
  };

  var renderTableData = function renderTableData() {
    if (!data) return __jsx("div", null, "no data");
    return data.map(function (row) {
      return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: row.name
      }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: "left"
      }, row.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: "left"
      }, row.value), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: "left"
      }, renderValueType(row)));
    });
  };

  console.log('data', data);
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.root
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.table
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.tableTitle,
    align: "left"
  }, tableTitle), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left"
  }, "Value"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left"
  }, "Units"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__["default"], null, renderTableData())));
}

/***/ })

})
//# sourceMappingURL=home.js.a9de3717b901b8b1ad8e.hot-update.js.map