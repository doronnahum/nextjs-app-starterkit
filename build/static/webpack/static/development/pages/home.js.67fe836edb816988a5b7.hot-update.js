webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./node_modules/@material-ui/core/esm/Slider/Slider.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Slider/Slider.js ***!
  \*************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _utils_focusVisible__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/focusVisible */ "./node_modules/@material-ui/core/esm/utils/focusVisible.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/reactHelpers */ "./node_modules/@material-ui/core/esm/utils/reactHelpers.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/esm/utils/helpers.js");
/* harmony import */ var _ValueLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ValueLabel */ "./node_modules/@material-ui/core/esm/Slider/ValueLabel.js");
















function asc(a, b) {
  return a - b;
}

function clamp(value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}

function findClosest(values, currentValue) {
  var _values$reduce = values.reduce(function (acc, value, index) {
    var distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance: distance,
        index: index
      };
    }

    return acc;
  }, null),
      closestIndex = _values$reduce.index;

  return closestIndex;
}

function trackFinger(event, touchId) {
  if (touchId.current !== undefined && event.changedTouches) {
    for (var i = 0; i < event.changedTouches.length; i += 1) {
      var touch = event.changedTouches[i];

      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }

    return false;
  }

  return {
    x: event.clientX,
    y: event.clientY
  };
}

function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    var parts = num.toExponential().split('e-');
    var matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  var decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToStep(value, step) {
  var nearest = Math.round(value / step) * step;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function setValueIndex(_ref) {
  var values = _ref.values,
      source = _ref.source,
      newValue = _ref.newValue,
      index = _ref.index;

  // Performance shortcut
  if (values[index] === newValue) {
    return source;
  }

  var output = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(values);

  output[index] = newValue;
  return output;
}

function focusThumb(_ref2) {
  var sliderRef = _ref2.sliderRef,
      activeIndex = _ref2.activeIndex,
      setActive = _ref2.setActive;

  if (!sliderRef.current.contains(document.activeElement) || Number(document.activeElement.getAttribute('data-index')) !== activeIndex) {
    sliderRef.current.querySelector("[data-index=\"".concat(activeIndex, "\"]")).focus();
  }

  if (setActive) {
    setActive(activeIndex);
  }
}

var axisProps = {
  horizontal: {
    offset: function offset(percent) {
      return {
        left: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  'horizontal-reverse': {
    offset: function offset(percent) {
      return {
        right: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  vertical: {
    offset: function offset(percent) {
      return {
        bottom: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        height: "".concat(percent, "%")
      };
    }
  }
};
var defaultMarks = [];

var Identity = function Identity(x) {
  return x;
};

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 2,
      width: '100%',
      boxSizing: 'content-box',
      padding: '11px 0',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      touchAction: 'none',
      color: theme.palette.primary.main,
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      '&$disabled': {
        cursor: 'default',
        color: theme.palette.grey[400]
      },
      '&$vertical': {
        width: 2,
        height: '100%',
        padding: '0 11px'
      }
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {// TODO v5, move the style here
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `marks` is provided with at least one label. */
    marked: {
      marginBottom: 20,
      '&$vertical': {
        marginBottom: 'auto',
        marginRight: 20
      }
    },

    /* Pseudo-class applied to the root element if `orientation="vertical"`. */
    vertical: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the rail element. */
    rail: {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor',
      opacity: 0.38,
      '$vertical &': {
        height: '100%',
        width: 2
      }
    },

    /* Styles applied to the track element. */
    track: {
      display: 'block',
      position: 'absolute',
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor',
      '$vertical &': {
        width: 2
      }
    },

    /* Styles applied to the thumb element. */
    thumb: {
      position: 'absolute',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -5,
      boxSizing: 'border-box',
      borderRadius: '50%',
      outline: 0,
      backgroundColor: 'currentColor',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: theme.transitions.create(['box-shadow'], {
        duration: theme.transitions.duration.shortest
      }),
      '&$focusVisible,&:hover': {
        boxShadow: "0px 0px 0px 8px ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.primary.main, 0.16)),
        '@media (hover: none)': {
          boxShadow: 'none'
        }
      },
      '&$active': {
        boxShadow: "0px 0px 0px 14px ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.primary.main, 0.16))
      },
      '$disabled &': {
        pointerEvents: 'none',
        width: 8,
        height: 8,
        marginLeft: -4,
        marginTop: -3,
        '&:hover': {
          boxShadow: 'none'
        }
      },
      '$vertical &': {
        marginLeft: -5,
        marginBottom: -6
      },
      '$vertical$disabled &': {
        marginLeft: -3,
        marginBottom: -4
      }
    },

    /* Styles applied to the thumb element if `color="primary"`. */
    thumbColorPrimary: {// TODO v5, move the style here
    },

    /* Styles applied to the thumb element if `color="secondary"`. */
    thumbColorSecondary: {
      '&$focusVisible,&:hover': {
        boxShadow: "0px 0px 0px 8px ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.secondary.main, 0.16))
      },
      '&$active': {
        boxShadow: "0px 0px 0px 14px ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.secondary.main, 0.16))
      }
    },

    /* Pseudo-class applied to the thumb element if it's active. */
    active: {},

    /* Pseudo-class applied to the thumb element if keyboard focused. */
    focusVisible: {},

    /* Styles applied to the thumb label element. */
    valueLabel: {},

    /* Styles applied to the mark element. */
    mark: {
      position: 'absolute',
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the mark element if active (depending on the value). */
    markActive: {
      backgroundColor: theme.palette.background.paper,
      opacity: 0.8
    },

    /* Styles applied to the mark label element. */
    markLabel: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.body2, {
      color: theme.palette.text.secondary,
      position: 'absolute',
      top: 22,
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      '$vertical &': {
        top: 'auto',
        left: 22,
        transform: 'translateY(50%)'
      }
    }),

    /* Styles applied to the mark label element if active (depending on the value). */
    markLabelActive: {
      color: theme.palette.text.primary
    }
  };
};
var Slider = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function Slider(props, ref) {
  var ariaLabel = props['aria-label'],
      ariaLabelledby = props['aria-labelledby'],
      ariaValuetext = props['aria-valuetext'],
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'span' : _props$component,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      getAriaLabel = props.getAriaLabel,
      getAriaValueText = props.getAriaValueText,
      _props$marks = props.marks,
      marksProp = _props$marks === void 0 ? defaultMarks : _props$marks,
      _props$max = props.max,
      max = _props$max === void 0 ? 100 : _props$max,
      _props$min = props.min,
      min = _props$min === void 0 ? 0 : _props$min,
      name = props.name,
      onChange = props.onChange,
      onChangeCommitted = props.onChangeCommitted,
      onMouseDown = props.onMouseDown,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      _props$ThumbComponent = props.ThumbComponent,
      ThumbComponent = _props$ThumbComponent === void 0 ? 'span' : _props$ThumbComponent,
      valueProp = props.value,
      _props$ValueLabelComp = props.ValueLabelComponent,
      ValueLabelComponent = _props$ValueLabelComp === void 0 ? _ValueLabel__WEBPACK_IMPORTED_MODULE_14__["default"] : _props$ValueLabelComp,
      _props$valueLabelDisp = props.valueLabelDisplay,
      valueLabelDisplay = _props$valueLabelDisp === void 0 ? 'off' : _props$valueLabelDisp,
      _props$valueLabelForm = props.valueLabelFormat,
      valueLabelFormat = _props$valueLabelForm === void 0 ? Identity : _props$valueLabelForm,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["aria-label", "aria-labelledby", "aria-valuetext", "classes", "className", "color", "component", "defaultValue", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "step", "ThumbComponent", "value", "ValueLabelComponent", "valueLabelDisplay", "valueLabelFormat"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_8__["default"])();

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(valueProp != null),
      isControlled = _React$useRef.current;

  var touchId = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(); // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transfered when inversing a range slider.

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(-1),
      active = _React$useState[0],
      setActive = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(-1),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(defaultValue),
      valueState = _React$useState3[0],
      setValueState = _React$useState3[1];

  var valueDerived = isControlled ? valueProp : valueState;
  var range = Array.isArray(valueDerived);
  var instanceRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var values = range ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(valueDerived).sort(asc) : [valueDerived];
  values = values.map(function (value) {
    return clamp(value, min, max);
  });
  var marks = marksProp === true && step !== null ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(Math.floor((max - min) / step) + 1)).map(function (_, index) {
    return {
      value: min + step * index
    };
  }) : marksProp;
  instanceRef.current = {
    source: valueDerived // Keep track of the input value to leverage immutable state comparison.

  };

  var _useIsFocusVisible = Object(_utils_focusVisible__WEBPACK_IMPORTED_MODULE_10__["useIsFocusVisible"])(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  var _React$useState4 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(-1),
      focusVisible = _React$useState4[0],
      setFocusVisible = _React$useState4[1];

  var sliderRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var handleFocusRef = Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_12__["useForkRef"])(focusVisibleRef, sliderRef);
  var handleRef = Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_12__["useForkRef"])(ref, handleFocusRef);
  var handleFocus = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));

    if (isFocusVisible(event)) {
      setFocusVisible(index);
    }

    setOpen(index);
  });
  var handleBlur = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(function () {
    if (focusVisible !== -1) {
      setFocusVisible(-1);
      onBlurVisible();
    }

    setOpen(-1);
  });
  var handleMouseOver = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));
    setOpen(index);
  });
  var handleMouseLeave = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(function () {
    setOpen(-1);
  });
  var handleKeyDown = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));
    var value = values[index];
    var tenPercents = (max - min) / 10;
    var marksValues = marks.map(function (mark) {
      return mark.value;
    });
    var marksIndex = marksValues.indexOf(value);
    var newValue;

    switch (event.key) {
      case 'Home':
        newValue = min;
        break;

      case 'End':
        newValue = max;
        break;

      case 'PageUp':
        if (step) {
          newValue = value + tenPercents;
        }

        break;

      case 'PageDown':
        if (step) {
          newValue = value - tenPercents;
        }

        break;

      case 'ArrowRight':
      case 'ArrowUp':
        if (step) {
          newValue = value + step;
        } else {
          newValue = marksValues[marksIndex + 1] || marksValues[marksValues.length - 1];
        }

        break;

      case 'ArrowLeft':
      case 'ArrowDown':
        if (step) {
          newValue = value - step;
        } else {
          newValue = marksValues[marksIndex - 1] || marksValues[0];
        }

        break;

      default:
        return;
    }

    event.preventDefault();

    if (step) {
      newValue = roundValueToStep(newValue, step);
    }

    newValue = clamp(newValue, min, max);

    if (range) {
      var previousValue = newValue;
      newValue = setValueIndex({
        values: values,
        source: valueDerived,
        newValue: newValue,
        index: index
      }).sort(asc);
      focusThumb({
        sliderRef: sliderRef,
        activeIndex: newValue.indexOf(previousValue)
      });
    }

    if (!isControlled) {
      setValueState(newValue);
    }

    setFocusVisible(index);

    if (onChange) {
      onChange(event, newValue);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  });
  var previousIndex = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var axis = orientation;

  if (theme.direction === 'rtl' && orientation !== "vertical") {
    axis += '-reverse';
  }

  var getFingerNewValue = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function (_ref3) {
    var finger = _ref3.finger,
        _ref3$move = _ref3.move,
        move = _ref3$move === void 0 ? false : _ref3$move,
        values2 = _ref3.values,
        source = _ref3.source;
    var slider = sliderRef.current;

    var _slider$getBoundingCl = slider.getBoundingClientRect(),
        width = _slider$getBoundingCl.width,
        height = _slider$getBoundingCl.height,
        bottom = _slider$getBoundingCl.bottom,
        left = _slider$getBoundingCl.left;

    var percent;

    if (axis.indexOf('vertical') === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }

    if (axis.indexOf('-reverse') !== -1) {
      percent = 1 - percent;
    }

    var newValue;
    newValue = percentToValue(percent, min, max);

    if (step) {
      newValue = roundValueToStep(newValue, step);
    } else {
      var marksValues = marks.map(function (mark) {
        return mark.value;
      });
      var closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }

    newValue = clamp(newValue, min, max);
    var activeIndex = 0;

    if (range) {
      if (!move) {
        activeIndex = findClosest(values2, newValue);
      } else {
        activeIndex = previousIndex.current;
      }

      var previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        source: source,
        newValue: newValue,
        index: activeIndex
      }).sort(asc);
      activeIndex = newValue.indexOf(previousValue);
      previousIndex.current = activeIndex;
    }

    return {
      newValue: newValue,
      activeIndex: activeIndex
    };
  }, [max, min, axis, range, step, marks]);
  var handleTouchMove = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(function (event) {
    var finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }

    var _getFingerNewValue = getFingerNewValue({
      finger: finger,
      move: true,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue.newValue,
        activeIndex = _getFingerNewValue.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });

    if (!isControlled) {
      setValueState(newValue);
    }

    if (onChange) {
      onChange(event, newValue);
    }
  });
  var handleTouchEnd = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(function (event) {
    var finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }

    var _getFingerNewValue2 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue2.newValue;

    setActive(-1);

    if (event.type === 'touchend') {
      setOpen(-1);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }

    touchId.current = undefined;
    document.body.removeEventListener('mousemove', handleTouchMove);
    document.body.removeEventListener('mouseup', handleTouchEnd); // eslint-disable-next-line no-use-before-define

    document.body.removeEventListener('mouseenter', handleMouseEnter);
    document.body.removeEventListener('touchmove', handleTouchMove);
    document.body.removeEventListener('touchend', handleTouchEnd);
  });
  var handleMouseEnter = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(function (event) {
    // If the slider was being interacted with but the mouse went off the window
    // and then re-entered while unclicked then end the interaction.
    //
    // In Firefox, the event can be triggered when a new DOM node is inserted and hovered.
    // We need to make sure that the relatedTarget (The EventTarget the pointing device exited from)
    // is not null (it should be the html element)
    if (event.buttons === 0 && event.relatedTarget !== null) {
      handleTouchEnd(event);
    }
  });
  var handleTouchStart = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(function (event) {
    // Workaround as Safari has partial support for touchAction: 'none'.
    event.preventDefault();
    var touch = event.changedTouches[0];

    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }

    var finger = trackFinger(event, touchId);

    var _getFingerNewValue3 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue3.newValue,
        activeIndex = _getFingerNewValue3.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });

    if (!isControlled) {
      setValueState(newValue);
    }

    if (onChange) {
      onChange(event, newValue);
    }

    document.body.addEventListener('touchmove', handleTouchMove);
    document.body.addEventListener('touchend', handleTouchEnd);
  });
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (disabled) {
      return function () {};
    }

    var slider = sliderRef.current;
    slider.addEventListener('touchstart', handleTouchStart);
    return function () {
      slider.removeEventListener('touchstart', handleTouchStart);
      document.body.removeEventListener('mousemove', handleTouchMove);
      document.body.removeEventListener('mouseup', handleTouchEnd);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('touchmove', handleTouchMove);
      document.body.removeEventListener('touchend', handleTouchEnd);
    };
  }, [disabled, handleMouseEnter, handleTouchEnd, handleTouchMove, handleTouchStart]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
      if (isControlled !== (valueProp != null)) {
        console.error(["Material-UI: A component is changing ".concat(isControlled ? 'a ' : 'an un', "controlled Slider to be ").concat(isControlled ? 'un' : '', "controlled."), 'Elements should not switch from uncontrolled to controlled (or vice versa).', 'Decide between using a controlled or uncontrolled Slider ' + 'element for the lifetime of the component.', 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [valueProp, isControlled]);
  }

  var handleMouseDown = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(function (event) {
    if (onMouseDown) {
      onMouseDown(event);
    }

    if (disabled) {
      return;
    }

    event.preventDefault();
    var finger = trackFinger(event, touchId);

    var _getFingerNewValue4 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue4.newValue,
        activeIndex = _getFingerNewValue4.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });

    if (!isControlled) {
      setValueState(newValue);
    }

    if (onChange) {
      onChange(event, newValue);
    }

    document.body.addEventListener('mousemove', handleTouchMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseup', handleTouchEnd);
  });
  var trackOffset = valueToPercent(range ? values[0] : min, min, max);
  var trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;

  var trackStyle = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, axisProps[axis].offset(trackOffset), {}, axisProps[axis].leap(trackLeap));

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: handleRef,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, classes["color".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_13__["capitalize"])(color))], className, disabled && classes.disabled, marks.length > 0 && marks.some(function (mark) {
      return mark.label;
    }) && classes.marked, {
      vertical: classes.vertical
    }[orientation]),
    onMouseDown: handleMouseDown
  }, other), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: classes.rail
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: classes.track,
    style: trackStyle
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    value: values.join(','),
    name: name,
    type: "hidden"
  }), marks.map(function (mark) {
    var percent = valueToPercent(mark.value, min, max);
    var style = axisProps[axis].offset(percent);
    var markActive = range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0];
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      key: mark.value
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      style: style,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.mark, markActive && classes.markActive)
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      "aria-hidden": true,
      style: style,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.markLabel, markActive && classes.markLabelActive)
    }, mark.label));
  }), values.map(function (value, index) {
    var percent = valueToPercent(value, min, max);
    var style = axisProps[axis].offset(percent);
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ValueLabelComponent, {
      key: index,
      valueLabelFormat: valueLabelFormat,
      valueLabelDisplay: valueLabelDisplay,
      className: classes.valueLabel,
      value: value,
      index: index,
      open: open === index || active === index,
      disabled: disabled
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ThumbComponent, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.thumb, classes["thumbColor".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_13__["capitalize"])(color))], active === index && classes.active, focusVisible === index && classes.focusVisible),
      tabIndex: disabled ? null : 0,
      role: "slider",
      style: style,
      "data-index": index,
      "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": value,
      "aria-valuetext": getAriaValueText ? getAriaValueText(value, index) : ariaValuetext,
      onKeyDown: handleKeyDown,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave
    }));
  }));
});
 true ? Slider.propTypes = {
  /**
   * The label of the slider.
   */
  'aria-label': Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, function (props) {
    var range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-label'] != null) {
      return new Error('Material-UI: you need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.');
    }

    return null;
  }),

  /**
   * The id of the element containing a label for the slider.
   */
  'aria-labelledby': prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  'aria-valuetext': Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, function (props) {
    var range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-valuetext'] != null) {
      return new Error('Material-UI: you need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.');
    }

    return null;
  }),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number)]),

  /**
   * If `true`, the slider will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   *
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   *
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks will be spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   */
  marks: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array]),

  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * Name attribute of the hidden `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {object} event The event source of the callback.
   * @param {any} value The new value.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {object} event The event source of the callback.
   * @param {any} value The new value.
   */
  onChangeCommitted: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The slider orientation.
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['horizontal', 'vertical']),

  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   */
  step: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * The component used to display the value label.
   */
  ThumbComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number)]),

  /**
   * The value label component.
   */
  ValueLabelComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   */
  valueLabelDisplay: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['on', 'auto', 'off']),

  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   */
  valueLabelFormat: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiSlider'
})(Slider));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Slider/ValueLabel.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Slider/ValueLabel.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");





var styles = function styles(theme) {
  return {
    thumb: {
      '&$open': {
        '& $offset': {
          transform: 'scale(1) translateY(-10px)'
        }
      }
    },
    open: {},
    offset: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      zIndex: 1
    }, theme.typography.body2, {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.2,
      transition: theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.shortest
      }),
      top: -34,
      left: 'calc(-50% + -4px)',
      transformOrigin: 'bottom center',
      transform: 'scale(0)',
      position: 'absolute'
    }),
    circle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: 'currentColor',
      transform: 'rotate(-45deg)'
    },
    label: {
      color: theme.palette.primary.contrastText,
      transform: 'rotate(45deg)'
    }
  };
};
/**
 * @ignore - internal component.
 */


function ValueLabel(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      index = props.index,
      open = props.open,
      value = props.value,
      valueLabelDisplay = props.valueLabelDisplay,
      valueLabelFormat = props.valueLabelFormat;

  if (valueLabelDisplay === 'off') {
    return children;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(children.props.className, (open || valueLabelDisplay === 'on') && classes.open, classes.thumb)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.offset, className)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.circle
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.label
  }, typeof valueLabelFormat === 'function' ? valueLabelFormat(value, index) : valueLabelFormat))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(styles, {
  name: 'PrivateValueLabel'
})(ValueLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Slider/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Slider/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./node_modules/@material-ui/core/esm/Slider/Slider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Slider__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Table.js":
/*!*********************************!*\
  !*** ./src/components/Table.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleTable; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data */ "./src/components/data/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {// width: '100%',
      // marginTop: theme.spacing(3),
      // overflowX: 'auto',
    },
    table: {// width: 600,
    },
    tableTitle: {
      fontSize: 20
    },
    TableCell: {}
  };
});
function SimpleTable(props) {
  var tableTitle = props.tableTitle,
      data = props.data;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({}),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var handleChange = function handleChange() {
    return function (event) {
      setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.id, event.target.value)));
    };
  };

  console.log('values', values);

  var renderValueType = function renderValueType(row) {
    switch (row.type) {
      case _data__WEBPACK_IMPORTED_MODULE_11__["TYPES"].NUMERIC:
        return __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
          id: row.location,
          label: "Number",
          value: values.age,
          onChange: handleChange(),
          type: "tel",
          className: classes.textField
        });

      case _data__WEBPACK_IMPORTED_MODULE_11__["TYPES"].RANGE:
        return __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
          defaultValue: 80,
          getAriaValueText: valuetext,
          "aria-labelledby": "discrete-slider-always",
          step: 10,
          marks: marks,
          valueLabelDisplay: "on"
        });

      case _data__WEBPACK_IMPORTED_MODULE_11__["TYPES"].SELECT:
        return;

      default:
        return row.type;
    }
  };

  var renderTableData = function renderTableData() {
    return data.map(function (row) {
      return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: row.name
      }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: "left",
        className: classes.TableCell
      }, row.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: "left"
      }, row.value), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: "left"
      }, renderValueType(row)));
    });
  };

  console.log('data', data);
  if (!data) return __jsx("div", null, "no data");
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.root
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.table
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.tableTitle,
    align: "left"
  }, tableTitle), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left"
  }, "Value"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left"
  }, "Units"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__["default"], null, renderTableData())));
}

/***/ })

})
//# sourceMappingURL=home.js.67fe836edb816988a5b7.hot-update.js.map