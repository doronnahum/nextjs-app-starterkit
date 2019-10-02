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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./src/components/data/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var getValue = function getValue(key, values) {
  return values[key] || 0;
};

var iOneOf = function iOneOf(key, arr) {
  return arr.includes(key);
};

var getCalculateNewValues = function getCalculateNewValues(key, value, tableValues) {
  var newValues = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, tableValues, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value)); // All if's here


  if (iOneOf(['d10', 'd11'])) {
    // d12
    newValues['d12'] = getValue('d10', tableValues) - getValue('d11', tableValues);
  }

  if (tableValues.d21 && tableValues.d22) {
    // d23
    newValues['d23'] = tableValues.d21 - tableValues.d22;
  }

  if (tableValues.e30 && tableValues.d32) {
    // e32
    newValues['e32'] = tableValues.e30 * tableValues.d32;
  }

  if (tableValues.e30 && tableValues.d32) {
    // f32
    newValues['f32'] = tableValues.e30 * tableValues.d32;
  }

  if (tableValues.f32 && tableValues.d32 && tableValues.d34) {
    // f34
    newValues['f34'] = tableValues.f32 / tableValues.d32 * tableValues.d34;
  }

  if (tableValues.f32 && tableValues.d32 && tableValues.d35) {
    // f35
    newValues['f35'] = tableValues.f32 / tableValues.d32 * tableValues.d35;
  }

  if (tableValues.f32 && tableValues.d32 && tableValues.d36) {
    // f36
    newValues['f36'] = tableValues.f32 / tableValues.d32 * tableValues.d36;
  }

  if (tableValues.f32 && tableValues.d32 && tableValues.d37) {
    // f37
    newValues['f37'] = tableValues.f32 / tableValues.d32 * tableValues.d37;
  }

  if (tableValues.f32 && tableValues.d32 && tableValues.d38) {
    // f38
    newValues['f38'] = tableValues.f32 / tableValues.d32 * tableValues.d38;
  }

  if (tableValues.f32 && tableValues.d32 && tableValues.d39) {
    // f39
    newValues['f39'] = tableValues.f32 / tableValues.d32 * tableValues.d39;
  }

  if (tableValues.e30) {
    // d47
    newValues['d47'] = tableValues.e30;
  }

  if (tableValues.d49) {
    // d48
    newValues['d48'] = tableValues.d49 / 560 / 1000;
  }

  if (tableValues.e49) {
    // e48
    newValues['e48'] = tableValues.e49 / 560 / 1000;
  }

  if (tableValues.d11 && tableValues.d23) {
    // d49 AND e49
    newValues['e49'] = tableValues.d11 * tableValues.d23 * 1000;
  }

  if (tableValues.d49) {
    // d50 
    newValues['d50'] = tableValues.d49 * 0.000330693393472;
  }

  if (tableValues.e49) {
    // e50
    newValues['e50'] = tableValues.e49 * 0.000330693393472;
  }

  if (tableValues.d48 && tableValues.d52) {
    // d51
    newValues['d51'] = tableValues.d48 + tableValues.d52;
  }

  if (tableValues.e48 && tableValues.e52) {
    // e51
    newValues['e51'] = tableValues.e48 + tableValues.e52;
  }

  if (tableValues.d48 && tableValues.d47) {
    // d52
    newValues['d52'] = tableValues.d48 * (1 / tableValues.d47);
  }

  if (tableValues.e48 && tableValues.e47) {
    // e52
    newValues['e52'] = tableValues.e48 * (1 / tableValues.e47);
  } // end


  return newValues;
};

var handleInputChange = function handleInputChange(event, updateTablesValues, tableValues) {
  var field = event.target.id;
  var newValue = Number(event.target.value);
  var newValues = getCalculateNewValues(field, newValue, tableValues);
  debugger;
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
        value: tableValues[row.location] || '',
        onChange: function onChange(e) {
          return handleInputChange(e, updateTablesValues, tableValues);
        },
        type: "number",
        className: classes.textField
      });

    case _data__WEBPACK_IMPORTED_MODULE_3__["TYPES"].RANGE:
      return __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
        defaultValue: Math.floor((row.min + row.max) / 2),
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
        value: tableValues[row.location] || '',
        readOnly: true,
        className: classes.textFieldUNEditable
      });

    default:
      return row.type;
  }
};

/***/ })

})
//# sourceMappingURL=home.js.b96a7babc0cc939157ab.hot-update.js.map