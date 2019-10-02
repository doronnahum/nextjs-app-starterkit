webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/store/tables/reducer.js":
/*!*************************************!*\
  !*** ./src/store/tables/reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tablesReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/store/tables/types.js");
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial */ "./src/store/tables/initial.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");




function tablesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initial__WEBPACK_IMPORTED_MODULE_2__["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = action.payload || {},
      data = _ref.data,
      loading = _ref.loading,
      error = _ref.error;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["default"].SET_VALUES:
      {
        var nextState = Object(immer__WEBPACK_IMPORTED_MODULE_3__["default"])(state, function (draftState) {
          draftState.tablesData.data = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, draftState.tablesData.data, data);
          draftState.tablesData.loading = loading;
          draftState.tablesData.error = error;
        });
        return nextState;
      }

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.241e6627b2ccb10fa881.hot-update.js.map