webpackHotUpdate("static\\development\\pages\\index.js",{

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
      }, __jsx("div", {
        className: className + '__section-1'
      }, __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        headerCols: ['Mechanical Properties', 'Units', 'value'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["mechanicalPropertiesData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        headerCols: ['Operational Properties', 'Units', 'value'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["operationalPropertiesData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        headerCols: ['Water Origin', 'Units', 'value'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["waterOriginData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        headerCols: ['Operation Costs ', 'Units', 'value'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["operationCostsData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        headerCols: ['Enironmental Data', 'Units', 'value'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["enironmentalData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        tableTitle: 'Customer\'s problems and requests',
        headerCols: ['Option List', 'Mark if applicable'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["customersProblemsAndRequestsData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        waterAnalysisTitle: true,
        headerCols: ['Water Analysis', 'Units', 'Make up', 'Actual Circulation', 'Calculated Circulation'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["waterAnalysisData"]
      })), __jsx("h1", null, "Sizing"), __jsx("div", {
        className: className + '__section-2-sizing'
      }, __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        headerCols: ['Thermodynamic Calculations', 'Value', 'Current', 'UET'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["thermodynamicCalculationsData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        headerCols: ['Sizing Factors', 'Benchmark', 'Factor', 'Actual'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["sizingFactorsData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        headerCols: ['Potential Water Saving', 'Value'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["potentialWaterSavingData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: _data__WEBPACK_IMPORTED_MODULE_7__["SizingOfReactorsData"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        headerCols: ['Predictive Water Analysis', 'Units', 'Make up', 'UET Circulation'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["predictiveWaterAnalysis"]
      }), __jsx(_table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        headerCols: ['Model Configuration', '# of Units', 'rounded up'],
        data: _data__WEBPACK_IMPORTED_MODULE_7__["modelConfigurationData"]
      })));
    }
  }]);

  return Tables;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tables);

/***/ })

})
//# sourceMappingURL=index.js.b64a12f8798dbcd3d888.hot-update.js.map