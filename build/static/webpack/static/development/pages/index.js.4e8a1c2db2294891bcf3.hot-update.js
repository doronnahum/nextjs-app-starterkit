webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/components/data/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var getCalculateNewValues = function getCalculateNewValues(key, value, tableValues) {
  var newValues = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, tableValues, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value)); // All if's here


  newValues['d12'] = newValues.d10 - newValues.d11;
  newValues['d23'] = newValues.d21 - newValues.d22;
  newValues['e32'] = tableValues.e30 * tableValues.d32;
  newValues['f32'] = tableValues.e30 * tableValues.d32;
  newValues['f34'] = tableValues.f32 / tableValues.d32 * tableValues.d34;
  newValues['f35'] = tableValues.f32 / tableValues.d32 * tableValues.d35;
  newValues['f36'] = tableValues.f32 / tableValues.d32 * tableValues.d36;
  newValues['f37'] = tableValues.f32 / tableValues.d32 * tableValues.d37;
  newValues['f38'] = tableValues.f32 / tableValues.d32 * tableValues.d38;
  newValues['f39'] = tableValues.f32 / tableValues.d32 * tableValues.d39;
  newValues['d47'] = tableValues.e30;
  newValues['d48'] = tableValues.d49 / 560 / 1000;
  newValues['e48'] = tableValues.e49 / 560 / 1000;
  newValues['e49'] = tableValues.d11 * tableValues.d23 * 1000;
  newValues['d50'] = tableValues.d49 * 0.000330693393472;
  newValues['e50'] = tableValues.e49 * 0.000330693393472;
  newValues['d51'] = tableValues.d48 + tableValues.d52;
  newValues['e51'] = tableValues.e48 + tableValues.e52;
  newValues['d52'] = tableValues.d48 * (1 / tableValues.d47);
  newValues['e52'] = tableValues.e48 * (1 / tableValues.e47);
  newValues['c56'] = tableValues.d25 * tableValues.d26 * tableValues.d27;
  newValues['c57'] = tableValues.c55 * tableValues.c56;
  newValues['c58'] = tableValues.c55 / tableValues.d52;
  newValues['c59'] = tableValues.c55 / tableValues.d51;
  newValues['d63'] = tableValues.d32;
  newValues['d64'] = tableValues.d33;
  newValues['d65'] = tableValues.d34;
  newValues['d66'] = tableValues.d35;
  newValues['d67'] = tableValues.d36;
  newValues['d68'] = tableValues.d37;
  newValues['d69'] = tableValues.d38;
  newValues['d70'] = tableValues.d39;
  newValues['e63'] = tableValues.d63 * tableValues.e47;
  newValues['e65'] = tableValues.d65 * tableValues.e47 * 0.75;
  newValues['e66'] = tableValues.d66 * tableValues.e47 * 0.65;
  newValues['e67'] = tableValues.d67 * tableValues.e47;
  newValues['e69'] = tableValues.d69 * tableValues.e47 * 0.985;
  newValues['e70'] = tableValues.d70 * e47; // end

  return newValues;
};

var handleInputChange = function handleInputChange(event, updateTablesValues, tableValues) {
  var field = event.target.id;
  var newValue = Number(event.target.value);
  var newValues = getCalculateNewValues(field, newValue, tableValues); // debugger

  updateTablesValues({
    values: newValues
  });
};

var handleSelectChange = function handleSelectChange(event, updateTablesValues, tableValues) {
  var field = event.target.id;
  var newValue = event.target.value;
  var newValues = getCalculateNewValues(field, newValue, tableValues);
  updateTablesValues({
    values: newValues
  });
};

var onChangeSlider = function onChangeSlider(event, val, location, updateTablesValues, tableValues) {
  var field = location;
  var newValue = val;
  var newValues = getCalculateNewValues(field, newValue, tableValues);
  updateTablesValues({
    values: newValues
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
    case _data__WEBPACK_IMPORTED_MODULE_3__["TYPES"].NUMERIC:
      return __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: row.location,
        label: "Number",
        value: tableValues[row.location] === 0 ? '' : tableValues[row.location],
        onChange: function onChange(e) {
          return handleInputChange(e, updateTablesValues, tableValues);
        },
        type: "number",
        className: classes.textField
      });

    case _data__WEBPACK_IMPORTED_MODULE_3__["TYPES"].RANGE:
      return __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
        defaultValue: tableValues[row.location] //Math.floor((row.min + row.max) / 2)
        ,
        getAriaValueText: valuetext,
        onChange: function onChange(e, val) {
          return onChangeSlider(e, val, row.location, updateTablesValues, tableValues);
        },
        "aria-labelledby": "discrete-slider-always",
        step: row.ticks,
        min: row.min,
        max: row.max,
        marks: getMarks(row),
        valueLabelDisplay: "on"
      });

    case _data__WEBPACK_IMPORTED_MODULE_3__["TYPES"].SELECT:
      return __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: row.location,
        "native": true,
        value: tableValues[row.location],
        onChange: function onChange(e) {
          return handleSelectChange(e, updateTablesValues, tableValues);
        }
      }, row.data.map(function (item, i) {
        return __jsx("option", {
          key: i,
          value: item
        }, item);
      }));

    case _data__WEBPACK_IMPORTED_MODULE_3__["TYPES"].NOT_EDITABLE:
      return __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: row.location,
        value: isNaN(tableValues[row.location]) || tableValues[row.location] === 0 ? '' : tableValues[row.location],
        readOnly: true,
        className: classes.textFieldUNEditable
      });

    default:
      return row.type;
  }
};

/***/ })

})
//# sourceMappingURL=index.js.4e8a1c2db2294891bcf3.hot-update.js.map