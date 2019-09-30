webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./src/components/table/TableDiffrent.js":
/*!***********************************************!*\
  !*** ./src/components/table/TableDiffrent.js ***!
  \***********************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./connect */ "./src/components/table/connect.js");
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
      tableTitle = props.tableTitle;
  var classes = useStyles();
  console.log("props of ".concat(tableName), props.tablesData);
  var tableValues = props.tablesData;
  var influencingValues = [tableValues.d10, tableValues.d11, tableValues.d21, tableValues.d22, tableValues.e30, tableValues.d32];
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

    if (tableValues.e30 && tableValues.d32) {
      // e32
      var _res2 = tableValues.e30 * tableValues.d32;

      props.actions.updateTablesValues({
        values: {
          e32: _res2
        }
      });
    }
  };

  var renderTableData = function renderTableData() {
    if (!data) return __jsx(NoDataTableCell, {
      className: classes.TableCell
    });
    return data.map(function (row) {
      return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: row.location
      }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "left",
        className: classes.TableCell
      }, row.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "left"
      }, row.value), row.fields.map(function (field) {
        return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
          align: "left"
        }, Object(_utils__WEBPACK_IMPORTED_MODULE_8__["renderValueType"])(field, props.actions.updateTablesValues, tableValues, classes));
      }));
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], null, tableTitle && __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.tableTitle,
    colSpan: 3,
    align: "left"
  }, tableTitle), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.tableTitle,
    colSpan: 3,
    align: "left"
  }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: 'e30',
    label: "Number",
    value: tableValues['e30'] || '',
    onChange: function onChange(e) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["handleInputChange"])(e, props.actions.updateTablesValues);
    },
    type: "number",
    className: classes.textField
  }))), headerCols && __jsx(HeaderCols, {
    data: headerCols
  })), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, renderTableData())));
} // SimpleTable.defaultProps = {
//     units: true
// };
// SimpleTable.propTypes = {
//     units: PropTypes.bool
// };


/* harmony default export */ __webpack_exports__["default"] = (Object(_connect__WEBPACK_IMPORTED_MODULE_11__["default"])(SimpleTable));

/***/ })

})
//# sourceMappingURL=home.js.8fffd7726cac665788ea.hot-update.js.map