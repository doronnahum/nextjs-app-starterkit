webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./src/components/table/utils.js":
/*!***************************************!*\
  !*** ./src/components/table/utils.js ***!
  \***************************************/
/*! exports provided: handleInputChange, handleSelectChange, onChangeSlider, valuetext, getMarks, renderValueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleInputChange", function() { return handleInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSelectChange", function() { return handleSelectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeSlider", function() { return onChangeSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valuetext", function() { return valuetext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarks", function() { return getMarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderValueType", function() { return renderValueType; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/components/data/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var handleInputChange = function handleInputChange(event, updateTablesValues) {
  updateTablesValues({
    values: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.id, event.target.value)
  });
};
var handleSelectChange = function handleSelectChange(event, updateTablesValues) {
  updateTablesValues({
    values: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.id, event.target.value)
  });
};
var onChangeSlider = function onChangeSlider(event, val, location, updateTablesValues) {
  updateTablesValues({
    values: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, location, val)
  });
};
function valuetext(value) {
  return "".concat(value);
}
var getMarks = function getMarks(row) {
  if (!row) return [];
  var arr = [];
  var i = row.min;

  while (i <= row.max) {
    arr.push({
      value: i
    });
    i += row.ticks;
  } // if we want lables in the  edges of the slider
  // if (arr.length) { 
  //     debugger
  //     arr[0].label = row.min.toString()
  //     arr[arr.length - 1].label = row.max.toString()
  // }


  return arr;
};
var renderValueType = function renderValueType(row) {
  switch (row.type) {
    case _data__WEBPACK_IMPORTED_MODULE_2__["TYPES"].NUMERIC:
      return __jsx(Input, {
        id: row.location,
        label: "Number",
        value: tableValues[row.location] || '',
        onChange: function onChange(e) {
          return handleInputChange(e, updateTablesValues);
        },
        type: "number",
        className: classes.textField
      });

    case _data__WEBPACK_IMPORTED_MODULE_2__["TYPES"].RANGE:
      return __jsx(Slider, {
        defaultValue: Math.floor((row.min + row.max) / 2),
        getAriaValueText: valuetext,
        onChange: function onChange(e, val) {
          return onChangeSlider(e, val, row.location, updateTablesValues);
        },
        "aria-labelledby": "discrete-slider-always",
        step: row.ticks,
        min: row.min,
        max: row.max,
        marks: getMarks(row),
        valueLabelDisplay: "on"
      });

    case _data__WEBPACK_IMPORTED_MODULE_2__["TYPES"].SELECT:
      return __jsx(Select, {
        id: row.location,
        "native": true,
        value: tableValues[row.location],
        onChange: function onChange(e) {
          return handleSelectChange(e, updateTablesValues);
        }
      }, row.data.map(function (item, i) {
        return __jsx("option", {
          key: i,
          value: item
        }, item);
      }));

    case _data__WEBPACK_IMPORTED_MODULE_2__["TYPES"].NOT_EDITABLE:
      return __jsx(Input, {
        id: row.location,
        value: tableValues[row.location] || '',
        readOnly: true,
        className: classes.textField
      });

    default:
      return row.type;
  }
};

/***/ })

})
//# sourceMappingURL=home.js.db8e70f5bfbd4a8277b4.hot-update.js.map