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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");

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
var renderValueType = function renderValueType(row, updateTablesValues, tableValues) {
  switch (row.type) {
    case _data__WEBPACK_IMPORTED_MODULE_2__["TYPES"].NUMERIC:
      return __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      return __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
      return __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      return __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
//# sourceMappingURL=home.js.3dbb28fa6a0f121ebb61.hot-update.js.map