webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/store/tables/watcher.js":
/*!*************************************!*\
  !*** ./src/store/tables/watcher.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/store/tables/types.js");
/* harmony import */ var _workers_updateTablesValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workers/updateTablesValues */ "./src/store/tables/workers/updateTablesValues.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(tablesWatcher);





function tablesWatcher() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function tablesWatcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_2__["default"].UPDATE_TABLES_VALUES, _workers_updateTablesValues__WEBPACK_IMPORTED_MODULE_3__["default"]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/* harmony default export */ __webpack_exports__["default"] = (tablesWatcher);

/***/ })

})
//# sourceMappingURL=_app.js.c79bc484f803dd58a98b.hot-update.js.map