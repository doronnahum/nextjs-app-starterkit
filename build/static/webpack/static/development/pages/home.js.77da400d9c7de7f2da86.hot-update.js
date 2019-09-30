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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _TableTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TableTitle */ "./src/components/table/TableTitle.js");
/* harmony import */ var _HeaderCols__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeaderCols */ "./src/components/table/HeaderCols.js");
/* harmony import */ var _NoDataTableCell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NoDataTableCell */ "./src/components/table/NoDataTableCell.js");
/* harmony import */ var _WaterAnalysisTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WaterAnalysisTitle */ "./src/components/table/WaterAnalysisTitle.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./connect */ "./src/components/table/connect.js");
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
  var data = props.data,
      headerCols = props.headerCols,
      tableTitle = props.tableTitle,
      tablesData = props.tablesData,
      actions = props.actions;
  var updateTablesValues = actions.updateTablesValues;
  var classes = useStyles();
  console.log("tablesData", tablesData);
  var tableValues = tablesData;
  var influencingValues = [tableValues.d10, tableValues.d11, tableValues.d21, tableValues.d22, tableValues.e30, tableValues.d32];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    updateReadOnlyValues();
  }, influencingValues);

  var updateReadOnlyValues = function updateReadOnlyValues() {
    if (tableValues.d10 && tableValues.d11) {
      // d12
      var res = tableValues.d10 - tableValues.d11;
      updateTablesValues({
        values: {
          d12: res
        }
      });
    }

    if (tableValues.d21 && tableValues.d22) {
      // d23
      var _res = tableValues.d21 - tableValues.d22;

      updateTablesValues({
        values: {
          d23: _res
        }
      });
    }

    if (tableValues.e30 && tableValues.d32) {
      // e32
      var _res2 = tableValues.e30 * tableValues.d32;

      updateTablesValues({
        values: {
          e32: _res2
        }
      });
    }
  };

  var renderTableData = function renderTableData() {
    if (!data) return __jsx(_NoDataTableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.TableCell
    });
    return data.map(function (row) {
      return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: row.location
      }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "left",
        className: classes.TableCell
      }, row.name), row.units && __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "left"
      }, row.units), row.fields ? row.fields.map(function (field) {
        return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
          align: "left"
        }, Object(_utils__WEBPACK_IMPORTED_MODULE_8__["renderValueType"])(field, updateTablesValues, tableValues, classes));
      }) : __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "left"
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_8__["renderValueType"])(row, updateTablesValues, tableValues, classes)));
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], null, tableTitle && __jsx(_TableTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.tableTitle,
    tableTitle: tableTitle
  }), _WaterAnalysisTitle__WEBPACK_IMPORTED_MODULE_13__["default"] && __jsx(_WaterAnalysisTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: tableValues['e30'] || '',
    handleInputChange: function handleInputChange(e) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["handleInputChange"])(e, updateTablesValues);
    }
  }), headerCols && __jsx(_HeaderCols__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: headerCols
  })), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, renderTableData())));
} // SimpleTable.defaultProps = {
//     units: true
// };
// SimpleTable.propTypes = {
//     units: PropTypes.bool
// };


/* harmony default export */ __webpack_exports__["default"] = (Object(_connect__WEBPACK_IMPORTED_MODULE_15__["default"])(SimpleTable));

/***/ }),

/***/ "./src/components/table/TableDiffrent.js":
false,

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
      }, __jsx(TableDiffrent, {
        headerCols: ['Mechanical Properties', 'Units', 'value'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["mechanicalPropertiesData"]
      }), __jsx(TableDiffrent, {
        headerCols: ['Operational Properties', 'Units', 'value'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["operationalPropertiesData"]
      }), __jsx(TableDiffrent, {
        headerCols: ['Water Origin', 'Units', 'value'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["waterOriginData"]
      }), __jsx(TableDiffrent, {
        headerCols: ['Operation Costs ', 'Units', 'value'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["operationCostsData"]
      }), __jsx(TableDiffrent, {
        headerCols: ['Enironmental Data', 'Units', 'value'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["enironmentalData"]
      }), __jsx(TableDiffrent, {
        tableTitle: 'Customer\'s problems and requests',
        headerCols: ['Option List', 'Mark if applicable'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["customersProblemsAndRequestsData"]
      }), __jsx(TableDiffrent, {
        headerCols: ['Water Analysis', 'Units', 'Make up', 'Actual Circulation', 'Calculated Circulation'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["waterAnalysisData"]
      }));
    }
  }]);

  return Tables;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tables);

/***/ })

})
//# sourceMappingURL=home.js.77da400d9c7de7f2da86.hot-update.js.map