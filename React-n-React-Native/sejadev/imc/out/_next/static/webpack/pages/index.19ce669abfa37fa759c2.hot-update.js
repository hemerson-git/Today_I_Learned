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
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Calculator"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 39,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 47,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Calcular")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJ1c2VTdGF0ZSIsImhlaWdodCIsInNldEhlaWdodCIsIndlaWdodCIsInNldFdlaWdodCIsImltYyIsInNldEltYyIsImdldEltYyIsInRvRml4ZWQiLCJnZXRJbWNTdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiY2FsY3VsYXRvciIsImUiLCJwYXJzZUZsb2F0IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsQ0FBRCxDQUREO0FBQUEsTUFDNUJDLE1BRDRCO0FBQUEsTUFDcEJDLFNBRG9COztBQUFBLG1CQUVQRixzREFBUSxDQUFDLENBQUQsQ0FGRDtBQUFBLE1BRTVCRyxNQUY0QjtBQUFBLE1BRXBCQyxTQUZvQjs7QUFBQSxtQkFHYkosc0RBQVEsQ0FBQyxDQUFELENBSEs7QUFBQSxNQUc1QkssR0FINEI7QUFBQSxNQUd2QkMsTUFIdUI7O0FBS25DLFdBQVNDLE1BQVQsR0FBa0I7QUFDaEJELFVBQU0sQ0FBQyxDQUFDSCxNQUFNLFlBQUdGLE1BQUgsRUFBVyxDQUFYLENBQVAsRUFBcUJPLE9BQXJCLENBQTZCLENBQTdCLENBQUQsQ0FBTjtBQUNEOztBQUVELFdBQVNDLFlBQVQsR0FBd0I7QUFDdEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixHQUFaOztBQUNBLFlBQVFBLEdBQVI7QUFDRSxXQUFLQSxHQUFHLEdBQUcsSUFBWDtBQUNFLGVBQU8sZ0JBQVA7O0FBQ0YsV0FBS0EsR0FBRyxHQUFHLElBQVg7QUFDRSxlQUFPLGFBQVA7O0FBQ0YsV0FBS0EsR0FBRyxHQUFHLElBQVg7QUFDRSxlQUFPLFdBQVA7O0FBQ0YsV0FBS0EsR0FBRyxHQUFHLElBQVg7QUFDRSxlQUFPLGtCQUFQOztBQUNGLFdBQUtBLEdBQUcsR0FBRyxJQUFYO0FBQ0UsZUFBTyxrQkFBUDs7QUFDRjtBQUNFLGVBQU8sa0JBQVA7QUFaSjtBQWNEOztBQUVELFNBQ0U7QUFBSyxhQUFTLEVBQUVPLDhEQUFNLENBQUNDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFHRSxNQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFtQyxXQUFPLEVBQUUsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBVyxTQUFLLEVBQUMsY0FBakI7QUFBZ0MsV0FBTyxFQUFDLFFBQXhDO0FBQWlELGFBQVMsTUFBMUQ7QUFBMkQsUUFBSSxFQUFDLFFBQWhFO0FBQ0UsWUFBUSxFQUFFLGtCQUFBQyxDQUFDLEVBQUk7QUFDYlosZUFBUyxDQUFDYSxVQUFVLENBQUNELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVgsQ0FBVDtBQUNELEtBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFTRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQVcsU0FBSyxFQUFDLGFBQWpCO0FBQStCLFdBQU8sRUFBQyxRQUF2QztBQUFnRCxhQUFTLE1BQXpEO0FBQTBELFFBQUksRUFBQyxRQUEvRDtBQUNFLFlBQVEsRUFBRSxrQkFBQUgsQ0FBQyxFQUFJO0FBQ2JWLGVBQVMsQ0FBQ1csVUFBVSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFYLENBQVQ7QUFDRCxLQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVRGLEVBaUJFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsU0FBSyxFQUFDLFNBQWxDO0FBQTRDLGFBQVMsTUFBckQ7QUFBc0QsV0FBTyxFQUFFVixNQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBakJGLEVBdUJFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBMEJGLEdBQTFCLGtCQUF3Q0ksWUFBWSxFQUFwRCxDQURGLENBdkJGLENBREYsQ0FIRixDQURGO0FBbUNEOztHQTlEdUJWLFU7O0tBQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTljZTY2OWFiZmEzN2ZhNzU5YzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxjdWxhdG9yKCkge1xyXG4gIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbd2VpZ2h0LCBzZXRXZWlnaHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2ltYywgc2V0SW1jXSA9IHVzZVN0YXRlKDApO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGdldEltYygpIHtcclxuICAgIHNldEltYygod2VpZ2h0IC8gaGVpZ2h0KioyKS50b0ZpeGVkKDIpKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gZ2V0SW1jU3RhdHVzKCkge1xyXG4gICAgY29uc29sZS5sb2coaW1jKVxyXG4gICAgc3dpdGNoIChpbWMpIHtcclxuICAgICAgY2FzZSBpbWMgPCAxOC41OlxyXG4gICAgICAgIHJldHVybiAnQWJhaXhvIGRvIHBlc28nO1xyXG4gICAgICBjYXNlIGltYyA8IDI0Ljk6XHJcbiAgICAgICAgcmV0dXJuICdQZXNvIE5vcm1hbCdcclxuICAgICAgY2FzZSBpbWMgPCAyOS45OlxyXG4gICAgICAgIHJldHVybiAnU29icmVwZXNvJ1xyXG4gICAgICBjYXNlIGltYyA8IDM0Ljk6XHJcbiAgICAgICAgcmV0dXJuICdPYmVzaWRhZGUgR3JhdSAxJ1xyXG4gICAgICBjYXNlIGltYyA8IDM5Ljk6XHJcbiAgICAgICAgcmV0dXJuICdPYmVzaWRhZGUgR3JhdSAyJ1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnT2Jlc2lkYWRlIEdyYXUgMydcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsY3VsYXRvcn0+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJz5DYWxjdWxhdG9yPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJBbHR1cmEgZW0gY21cIiB2YXJpYW50PVwiZmlsbGVkXCIgZnVsbFdpZHRoIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEhlaWdodChwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiTWFzc2EgZW0gS2dcIiB2YXJpYW50PVwiZmlsbGVkXCIgZnVsbFdpZHRoIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFdlaWdodChwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBmdWxsV2lkdGggb25DbGljaz17Z2V0SW1jfT5cclxuICAgICAgICAgICAgICBDYWxjdWxhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5PIHNldSBJTUMgw6k6IHtpbWN9IGtnL23CsiAtIHtnZXRJbWNTdGF0dXMoKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==