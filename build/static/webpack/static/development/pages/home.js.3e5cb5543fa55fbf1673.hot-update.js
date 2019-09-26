webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./src/components/data/tableUtils.js":
/*!*******************************************!*\
  !*** ./src/components/data/tableUtils.js ***!
  \*******************************************/
/*! exports provided: calculate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculate", function() { return calculate; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var calculate = function calculate(location, values, setValues) {
  switch (location) {
    case 'd12':
      if (values.d10 && values.d11) {
        setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, values, {
          d12: event.target.value
        }));
        return values.d10 - values.d11;
      }

    case 'd23':
      if (values.d21 && values.d22) {
        return values.d21 - values.d22;
      }

    default:
      return '';
  }
};

/***/ })

})
//# sourceMappingURL=home.js.3e5cb5543fa55fbf1673.hot-update.js.map