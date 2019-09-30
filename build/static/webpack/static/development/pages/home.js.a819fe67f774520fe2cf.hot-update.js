webpackHotUpdate("static\\development\\pages\\home.js",{

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
/* harmony import */ var _table_TableDiffrent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../table/TableDiffrent */ "./src/components/table/TableDiffrent.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data */ "./src/components/data/index.js");





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
        data: _data__WEBPACK_IMPORTED_MODULE_8__["mechanicalPropertiesData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        tableTitle: 'Operational Properties',
        data: _data__WEBPACK_IMPORTED_MODULE_8__["operationalPropertiesData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        tableTitle: 'Water Origin',
        data: _data__WEBPACK_IMPORTED_MODULE_8__["waterOriginData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        tableTitle: 'Operation Costs',
        data: _data__WEBPACK_IMPORTED_MODULE_8__["operationCostsData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        tableTitle: 'Enironmental Data',
        data: _data__WEBPACK_IMPORTED_MODULE_8__["enironmentalData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"] // tableTitle={'Customer\'s problems and requests'}
      , {
        data: _data__WEBPACK_IMPORTED_MODULE_8__["customersProblemsAndRequestsData"],
        tableSubTitle: 'Customer\'s problems and requests',
        headerTitles: ['Option List', 'Mark if applicable']
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        tableTitle: 'Water Analysis',
        data: _data__WEBPACK_IMPORTED_MODULE_8__["waterAnalysisData"]
      }));
    }
  }]);

  return Tables;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tables);

/***/ })

})
//# sourceMappingURL=home.js.a819fe67f774520fe2cf.hot-update.js.map