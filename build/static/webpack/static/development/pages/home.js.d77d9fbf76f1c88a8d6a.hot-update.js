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
      }, 12));
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

/***/ })

})
//# sourceMappingURL=home.js.d77d9fbf76f1c88a8d6a.hot-update.js.map