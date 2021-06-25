self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\React\\amazon\\src\\components\\Product.js",
    _s = $RefreshSig$();






const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image
}) => {
  _s();

  const {
    0: rating
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
  const {
    0: hasPrime
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.random() < 0.5);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative flex flex-col m-5 bg-white z-30",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map((_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {
        className: "h-5"
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: price,
        currency: "GBP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "https://links.papareact.com/fdw",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Free Next-Day Delivery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      children: "Add to Basket"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

_s(Product, "iAFI4jNUmIsuo72nUPAkXMwMyHY=");

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJ1c2VTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhhc1ByaW1lIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQW5COztBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUFDO0FBQUVDLElBQUY7QUFBTUMsT0FBTjtBQUFhQyxPQUFiO0FBQW9CQyxhQUFwQjtBQUFpQ0MsVUFBakM7QUFBMkNDO0FBQTNDLENBQUQsS0FBd0Q7QUFBQTs7QUFDdEUsUUFBTTtBQUFBLE9BQUNDO0FBQUQsTUFBV0MsK0NBQVEsQ0FDdkJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJiLFVBQVUsR0FBR0MsVUFBYixHQUEwQixDQUEzQyxDQUFYLElBQTREQSxVQURyQyxDQUF6QjtBQUdBLFFBQU07QUFBQSxPQUFDYTtBQUFELE1BQWFKLCtDQUFRLENBQUNDLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUFqQixDQUEzQjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDBDQUFmO0FBQUEsNEJBQ0U7QUFBQSxnQkFBSU47QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVDLEtBQVo7QUFBbUIsWUFBTSxFQUFFLEdBQTNCO0FBQWdDLFdBQUssRUFBRSxHQUF2QztBQUE0QyxlQUFTLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsZ0JBQUtKO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxnQkFDR1csS0FBSyxDQUFDTixNQUFELENBQUwsQ0FDRU8sSUFERixHQUVFQyxHQUZGLENBRU0sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLGtCQUNILDhEQUFDLDREQUFEO0FBQWtCLGlCQUFTLEVBQUM7QUFBNUIsU0FBZUEsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhIO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVdFO0FBQUEsZ0JBQUliO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixlQVlFO0FBQUEsNkJBQ0UsOERBQUMsaUVBQUQ7QUFBVSxnQkFBUSxFQUFFRCxLQUFwQjtBQUEyQixnQkFBUSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLEVBZUdTLFFBQVEsaUJBQ1A7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBQyxpQ0FBVDtBQUEyQyxXQUFHLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkosZUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBeUJELENBOUJEOztHQUFNWixPOztLQUFBQSxPO0FBZ0NOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNlNDk2ZmJlNWFmYjJiZmZkYTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwicmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyXCI7XHJcblxyXG5jb25zdCBNQVhfUkFUSU5HID0gNTtcclxuY29uc3QgTUlOX1JBVElORyA9IDE7XHJcblxyXG5jb25zdCBQcm9kdWN0ID0gKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiB7XHJcbiAgY29uc3QgW3JhdGluZ10gPSB1c2VTdGF0ZShcclxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNQVhfUkFUSU5HIC0gTUlOX1JBVElORyArIDEpKSArIE1JTl9SQVRJTkdcclxuICApO1xyXG4gIGNvbnN0IFtoYXNQcmltZV0gPSB1c2VTdGF0ZShNYXRoLnJhbmRvbSgpIDwgMC41KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG0tNSBiZy13aGl0ZSB6LTMwXCI+XHJcbiAgICAgIDxwPntjYXRlZ29yeX08L3A+XHJcbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XHJcbiAgICAgIDxoND57dGl0bGV9PC9oND5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgPFN0YXJJY29uIGtleT17aX0gY2xhc3NOYW1lPVwiaC01XCIgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e3ByaWNlfSBjdXJyZW5jeT1cIkdCUFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aGFzUHJpbWUgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mZHdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPHA+RnJlZSBOZXh0LURheSBEZWxpdmVyeTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGJ1dHRvbj5BZGQgdG8gQmFza2V0PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==