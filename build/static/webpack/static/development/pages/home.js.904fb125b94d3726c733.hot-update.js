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
function calculate(location, values) {
  switch (location) {
    case 'd12':
      if (values.d10 && values.d11) {
        var res = values.d10 - values.d11;
        return res;
      }

    case 'd23':
      if (values.d21 && values.d22) {
        return values.d21 - values.d22;
      }

    default:
      return '';
  }
}

/***/ })

})
//# sourceMappingURL=home.js.904fb125b94d3726c733.hot-update.js.map