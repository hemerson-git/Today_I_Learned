webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Calculator/index.js":
/*!****************************************!*\
  !*** ./components/Calculator/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calculator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calculator.module.scss */ "./components/Calculator/Calculator.module.scss");
/* harmony import */ var _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Mine\\Cursos\\Today_I_Learned\\React-n-React-Native\\sejadev\\imc\\components\\Calculator\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Calculator() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      height = _useState[0],
      setHeight = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      weight = _useState2[0],
      setWeight = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      imc = _useState3[0],
      setImc = _useState3[1];

  function getImc() {
    console.log(weight);
    setImc((weight / (height * height)).toFixed(2));
  }

  function getImcStatus() {
    console.log(imc);

    switch (imc) {
      case imc < 18.5:
        return 'Abaixo do peso';

      case imc < 24.9:
        return 'Peso Normal';

      case imc < 29.9:
        return 'Sobrepeso';

      case imc < 34.9:
        return 'Obesidade Grau 1';

      case imc < 39.9:
        return 'Obesidade Grau 2';

      default:
        return 'Obesidade Grau 3';
    }
  }

  return __jsx("div", {
    className: _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.calculator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Calculator"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Altura em cm",
    variant: "filled",
    fullWidth: true,
    type: "number",
    onChange: function onChange(e) {
      setHeight(parseFloat(e.target.value));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Massa em Kg",
    variant: "filled",
    fullWidth: true,
    type: "number",
    onChange: function onChange(e) {
      setWeight(parseFloat(e.target.value));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: getImc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Calcular")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "O seu IMC \xE9: ", imc, " kg/m\xB2 - ", getImcStatus())))));
}

_s(Calculator, "SZkJCRtAs6BbNR6mVUWiCcIx/d0=");

_c = Calculator;

var _c;

$RefreshReg$(_c, "Calculator");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJ1c2VTdGF0ZSIsImhlaWdodCIsInNldEhlaWdodCIsIndlaWdodCIsInNldFdlaWdodCIsImltYyIsInNldEltYyIsImdldEltYyIsImNvbnNvbGUiLCJsb2ciLCJ0b0ZpeGVkIiwiZ2V0SW1jU3RhdHVzIiwic3R5bGVzIiwiY2FsY3VsYXRvciIsImUiLCJwYXJzZUZsb2F0IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsQ0FBRCxDQUREO0FBQUEsTUFDNUJDLE1BRDRCO0FBQUEsTUFDcEJDLFNBRG9COztBQUFBLG1CQUVQRixzREFBUSxDQUFDLENBQUQsQ0FGRDtBQUFBLE1BRTVCRyxNQUY0QjtBQUFBLE1BRXBCQyxTQUZvQjs7QUFBQSxtQkFHYkosc0RBQVEsQ0FBQyxDQUFELENBSEs7QUFBQSxNQUc1QkssR0FINEI7QUFBQSxNQUd2QkMsTUFIdUI7O0FBS25DLFdBQVNDLE1BQVQsR0FBa0I7QUFDaEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixNQUFaO0FBQ0FHLFVBQU0sQ0FBQyxDQUFDSCxNQUFNLElBQUlGLE1BQU0sR0FBR0EsTUFBYixDQUFQLEVBQTZCUyxPQUE3QixDQUFxQyxDQUFyQyxDQUFELENBQU47QUFDRDs7QUFFRCxXQUFTQyxZQUFULEdBQXdCO0FBQ3RCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBWjs7QUFDQSxZQUFRQSxHQUFSO0FBQ0UsV0FBTUEsR0FBRyxHQUFHLElBQVo7QUFDRSxlQUFPLGdCQUFQOztBQUNGLFdBQU1BLEdBQUcsR0FBRyxJQUFaO0FBQ0UsZUFBTyxhQUFQOztBQUNGLFdBQU1BLEdBQUcsR0FBRyxJQUFaO0FBQ0UsZUFBTyxXQUFQOztBQUNGLFdBQU1BLEdBQUcsR0FBRyxJQUFaO0FBQ0UsZUFBTyxrQkFBUDs7QUFDRixXQUFNQSxHQUFHLEdBQUcsSUFBWjtBQUNFLGVBQU8sa0JBQVA7O0FBQ0Y7QUFDRSxlQUFPLGtCQUFQO0FBWko7QUFjRDs7QUFFRCxTQUNFO0FBQUssYUFBUyxFQUFFTyw4REFBTSxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBR0UsTUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUMsUUFBMUI7QUFBbUMsV0FBTyxFQUFFLENBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQVcsU0FBSyxFQUFDLGNBQWpCO0FBQWdDLFdBQU8sRUFBQyxRQUF4QztBQUFpRCxhQUFTLE1BQTFEO0FBQTJELFFBQUksRUFBQyxRQUFoRTtBQUNFLFlBQVEsRUFBRSxrQkFBQUMsQ0FBQyxFQUFJO0FBQ2JaLGVBQVMsQ0FBQ2EsVUFBVSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFYLENBQVQ7QUFDRCxLQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBU0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFXLFNBQUssRUFBQyxhQUFqQjtBQUErQixXQUFPLEVBQUMsUUFBdkM7QUFBZ0QsYUFBUyxNQUF6RDtBQUEwRCxRQUFJLEVBQUMsUUFBL0Q7QUFDRSxZQUFRLEVBQUUsa0JBQUFILENBQUMsRUFBSTtBQUNiVixlQUFTLENBQUNXLFVBQVUsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBWCxDQUFUO0FBQ0QsS0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FURixFQWlCRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFNBQUssRUFBQyxTQUFsQztBQUE0QyxhQUFTLE1BQXJEO0FBQXNELFdBQU8sRUFBRVYsTUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQWpCRixFQXVCRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQTBCRixHQUExQixrQkFBd0NNLFlBQVksRUFBcEQsQ0FERixDQXZCRixDQURGLENBSEYsQ0FERjtBQW1DRDs7R0EvRHVCWixVOztLQUFBQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhNDlhMzI3ZmIzNjY5OGEwYTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5LCBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhbGN1bGF0b3IubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsY3VsYXRvcigpIHtcclxuICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3dlaWdodCwgc2V0V2VpZ2h0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbWMsIHNldEltY10gPSB1c2VTdGF0ZSgwKTtcclxuICBcclxuICBmdW5jdGlvbiBnZXRJbWMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh3ZWlnaHQpXHJcbiAgICBzZXRJbWMoKHdlaWdodCAvIChoZWlnaHQgKiBoZWlnaHQpKS50b0ZpeGVkKDIpKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gZ2V0SW1jU3RhdHVzKCkge1xyXG4gICAgY29uc29sZS5sb2coaW1jKVxyXG4gICAgc3dpdGNoIChpbWMpIHtcclxuICAgICAgY2FzZSAoaW1jIDwgMTguNSk6XHJcbiAgICAgICAgcmV0dXJuICdBYmFpeG8gZG8gcGVzbyc7XHJcbiAgICAgIGNhc2UgKGltYyA8IDI0LjkpOlxyXG4gICAgICAgIHJldHVybiAnUGVzbyBOb3JtYWwnXHJcbiAgICAgIGNhc2UgKGltYyA8IDI5LjkpOlxyXG4gICAgICAgIHJldHVybiAnU29icmVwZXNvJ1xyXG4gICAgICBjYXNlIChpbWMgPCAzNC45KTpcclxuICAgICAgICByZXR1cm4gJ09iZXNpZGFkZSBHcmF1IDEnXHJcbiAgICAgIGNhc2UgKGltYyA8IDM5LjkpOlxyXG4gICAgICAgIHJldHVybiAnT2Jlc2lkYWRlIEdyYXUgMidcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ09iZXNpZGFkZSBHcmF1IDMnXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGN1bGF0b3J9PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMyc+Q2FsY3VsYXRvcjwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiQWx0dXJhIGVtIGNtXCIgdmFyaWFudD1cImZpbGxlZFwiIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRIZWlnaHQocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIk1hc3NhIGVtIEtnXCIgdmFyaWFudD1cImZpbGxlZFwiIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRXZWlnaHQocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgZnVsbFdpZHRoIG9uQ2xpY2s9e2dldEltY30+XHJcbiAgICAgICAgICAgICAgQ2FsY3VsYXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+TyBzZXUgSU1DIMOpOiB7aW1jfSBrZy9twrIgLSB7Z2V0SW1jU3RhdHVzKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=