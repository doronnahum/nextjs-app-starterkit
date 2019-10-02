webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/store/tables/initial.js":
/*!*************************************!*\
  !*** ./src/store/tables/initial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/data */ "./src/components/data/index.js");


var defaultValues = {};
[].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_components_data__WEBPACK_IMPORTED_MODULE_1__["mechanicalPropertiesData"]), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_components_data__WEBPACK_IMPORTED_MODULE_1__["operationalPropertiesData"]), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_components_data__WEBPACK_IMPORTED_MODULE_1__["waterOriginData"]), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_components_data__WEBPACK_IMPORTED_MODULE_1__["operationCostsData"]), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_components_data__WEBPACK_IMPORTED_MODULE_1__["enironmentalData"]), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_components_data__WEBPACK_IMPORTED_MODULE_1__["waterAnalysisData"]), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_components_data__WEBPACK_IMPORTED_MODULE_1__["customersProblemsAndRequestsData"]), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_components_data__WEBPACK_IMPORTED_MODULE_1__["thermodynamicCalculationsData"]), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_components_data__WEBPACK_IMPORTED_MODULE_1__["potentialWaterSavingData"])).forEach(function (item) {
  if (item.fields) {
    item.fields.forEach(function (field) {
      defaultValues[field.location] = field.defaultValue;
    });
  }

  defaultValues[item.location] = item.defaultValue;
});
var initialState = {
  windowSize: {},
  tablesData: {
    data: defaultValues,
    loading: false,
    error: null
  }
};
/* harmony default export */ __webpack_exports__["default"] = (initialState);

/***/ })

})
//# sourceMappingURL=_app.js.9f454434e2c4780b9048.hot-update.js.map