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
var calculate = function calculate(location, values) {
  switch (location) {
    case 'd12':
      if (values.d10 && values.d11) {
        // debugger
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
//# sourceMappingURL=home.js.98409cd5e87b78466d9e.hot-update.js.map