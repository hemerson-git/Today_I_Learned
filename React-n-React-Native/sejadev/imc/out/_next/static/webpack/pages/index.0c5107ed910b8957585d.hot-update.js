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
    setImc((weight / Math.pow(height, 2)).toFixed(2));
  }

  function getImcStatus() {
    switch (imc) {
      case imc < 18.5:
        return 'Abaixo do peso';

      case imc < 24.9:
        return 'Peso Normal';

      case imc < 29.9:
        return 'Sobrepeso';

      case imc < 34.9:
        return 'Sobrepeso';
    }
  }

  return __jsx("div", {
    className: _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.calculator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Calculator"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 42,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Calcular")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "O seu IMC \xE9: ", imc, " kg/m\xB2")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJ1c2VTdGF0ZSIsImhlaWdodCIsInNldEhlaWdodCIsIndlaWdodCIsInNldFdlaWdodCIsImltYyIsInNldEltYyIsImdldEltYyIsInRvRml4ZWQiLCJnZXRJbWNTdGF0dXMiLCJzdHlsZXMiLCJjYWxjdWxhdG9yIiwiZSIsInBhcnNlRmxvYXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQyxDQUFELENBREQ7QUFBQSxNQUM1QkMsTUFENEI7QUFBQSxNQUNwQkMsU0FEb0I7O0FBQUEsbUJBRVBGLHNEQUFRLENBQUMsQ0FBRCxDQUZEO0FBQUEsTUFFNUJHLE1BRjRCO0FBQUEsTUFFcEJDLFNBRm9COztBQUFBLG1CQUdiSixzREFBUSxDQUFDLENBQUQsQ0FISztBQUFBLE1BRzVCSyxHQUg0QjtBQUFBLE1BR3ZCQyxNQUh1Qjs7QUFLbkMsV0FBU0MsTUFBVCxHQUFrQjtBQUNoQkQsVUFBTSxDQUFDLENBQUNILE1BQU0sWUFBR0YsTUFBSCxFQUFXLENBQVgsQ0FBUCxFQUFxQk8sT0FBckIsQ0FBNkIsQ0FBN0IsQ0FBRCxDQUFOO0FBQ0Q7O0FBRUQsV0FBU0MsWUFBVCxHQUF3QjtBQUN0QixZQUFRSixHQUFSO0FBQ0UsV0FBS0EsR0FBRyxHQUFHLElBQVg7QUFDRSxlQUFPLGdCQUFQOztBQUNGLFdBQUtBLEdBQUcsR0FBRyxJQUFYO0FBQ0UsZUFBTyxhQUFQOztBQUNGLFdBQUtBLEdBQUcsR0FBRyxJQUFYO0FBQ0UsZUFBTyxXQUFQOztBQUNGLFdBQUtBLEdBQUcsR0FBRyxJQUFYO0FBQ0UsZUFBTyxXQUFQO0FBUko7QUFVRDs7QUFFRCxTQUNFO0FBQUssYUFBUyxFQUFFSyw4REFBTSxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBR0UsTUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUMsUUFBMUI7QUFBbUMsV0FBTyxFQUFFLENBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQVcsU0FBSyxFQUFDLGNBQWpCO0FBQWdDLFdBQU8sRUFBQyxRQUF4QztBQUFpRCxhQUFTLE1BQTFEO0FBQTJELFFBQUksRUFBQyxRQUFoRTtBQUNFLFlBQVEsRUFBRSxrQkFBQUMsQ0FBQyxFQUFJO0FBQ2JWLGVBQVMsQ0FBQ1csVUFBVSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFYLENBQVQ7QUFDRCxLQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBU0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFXLFNBQUssRUFBQyxhQUFqQjtBQUErQixXQUFPLEVBQUMsUUFBdkM7QUFBZ0QsYUFBUyxNQUF6RDtBQUEwRCxRQUFJLEVBQUMsUUFBL0Q7QUFDRSxZQUFRLEVBQUUsa0JBQUFILENBQUMsRUFBSTtBQUNiUixlQUFTLENBQUNTLFVBQVUsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBWCxDQUFUO0FBQ0QsS0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FURixFQWlCRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFNBQUssRUFBQyxTQUFsQztBQUE0QyxhQUFTLE1BQXJEO0FBQXNELFdBQU8sRUFBRVIsTUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQWpCRixFQXVCRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQTBCRixHQUExQixjQURGLENBdkJGLENBREYsQ0FIRixDQURGO0FBbUNEOztHQXpEdUJOLFU7O0tBQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGM1MTA3ZWQ5MTBiODk1NzU4NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxjdWxhdG9yKCkge1xyXG4gIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbd2VpZ2h0LCBzZXRXZWlnaHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2ltYywgc2V0SW1jXSA9IHVzZVN0YXRlKDApO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGdldEltYygpIHtcclxuICAgIHNldEltYygod2VpZ2h0IC8gaGVpZ2h0KioyKS50b0ZpeGVkKDIpKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gZ2V0SW1jU3RhdHVzKCkge1xyXG4gICAgc3dpdGNoIChpbWMpIHtcclxuICAgICAgY2FzZSBpbWMgPCAxOC41OlxyXG4gICAgICAgIHJldHVybiAnQWJhaXhvIGRvIHBlc28nO1xyXG4gICAgICBjYXNlIGltYyA8IDI0Ljk6XHJcbiAgICAgICAgcmV0dXJuICdQZXNvIE5vcm1hbCdcclxuICAgICAgY2FzZSBpbWMgPCAyOS45OlxyXG4gICAgICAgIHJldHVybiAnU29icmVwZXNvJ1xyXG4gICAgICBjYXNlIGltYyA8IDM0Ljk6XHJcbiAgICAgICAgcmV0dXJuICdTb2JyZXBlc28nXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGN1bGF0b3J9PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMyc+Q2FsY3VsYXRvcjwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiQWx0dXJhIGVtIGNtXCIgdmFyaWFudD1cImZpbGxlZFwiIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRIZWlnaHQocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIk1hc3NhIGVtIEtnXCIgdmFyaWFudD1cImZpbGxlZFwiIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRXZWlnaHQocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgZnVsbFdpZHRoIG9uQ2xpY2s9e2dldEltY30+XHJcbiAgICAgICAgICAgICAgQ2FsY3VsYXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+TyBzZXUgSU1DIMOpOiB7aW1jfSBrZy9twrI8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==