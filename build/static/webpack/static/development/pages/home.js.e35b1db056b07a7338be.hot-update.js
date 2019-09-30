webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./src/components/table/utils.js":
/*!***************************************!*\
  !*** ./src/components/table/utils.js ***!
  \***************************************/
/*! exports provided: handleInputChange, renderValueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleInputChange", function() { return handleInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderValueType", function() { return renderValueType; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/components/data/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");


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

var renderValueType = function renderValueType(row, updateTablesValues, tableValues, classes) {
  var type = row.type;

  switch (type) {
    case _data__WEBPACK_IMPORTED_MODULE_2__["TYPES"].NUMERIC:
      return __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      return __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      return __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      return __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
//# sourceMappingURL=home.js.e35b1db056b07a7338be.hot-update.js.map