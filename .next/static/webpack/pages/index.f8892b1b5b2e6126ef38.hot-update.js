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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map((_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {
        className: "h-5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

_s(Product, "oTcfRp8kW6BEKeunmXkQT1CxNuk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJ1c2VTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQW5COztBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUFDO0FBQUVDLElBQUY7QUFBTUMsT0FBTjtBQUFhQyxPQUFiO0FBQW9CQyxhQUFwQjtBQUFpQ0MsVUFBakM7QUFBMkNDO0FBQTNDLENBQUQsS0FBd0Q7QUFBQTs7QUFDdEUsUUFBTTtBQUFBLE9BQUNDO0FBQUQsTUFBV0MsK0NBQVEsQ0FDdkJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJiLFVBQVUsR0FBR0MsVUFBYixHQUEwQixDQUEzQyxDQUFYLElBQTREQSxVQURyQyxDQUF6QjtBQUdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBSU07QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVDLEtBQVo7QUFBbUIsWUFBTSxFQUFFLEdBQTNCO0FBQWdDLFdBQUssRUFBRSxHQUF2QztBQUE0QyxlQUFTLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsZ0JBQUtKO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxnQkFDR1UsS0FBSyxDQUFDTCxNQUFELENBQUwsQ0FDRU0sSUFERixHQUVFQyxHQUZGLENBRU0sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLGtCQUNILDhEQUFDLDREQUFEO0FBQVUsaUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhIO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFlRCxDQW5CRDs7R0FBTWhCLE87O0tBQUFBLE87QUFxQk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjg4OTJiMWI1YjJlNjEyNmVmMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuXHJcbmNvbnN0IE1BWF9SQVRJTkcgPSA1O1xyXG5jb25zdCBNSU5fUkFUSU5HID0gMTtcclxuXHJcbmNvbnN0IFByb2R1Y3QgPSAoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+IHtcclxuICBjb25zdCBbcmF0aW5nXSA9IHVzZVN0YXRlKFxyXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkpICsgTUlOX1JBVElOR1xyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPntjYXRlZ29yeX08L3A+XHJcbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XHJcbiAgICAgIDxoND57dGl0bGV9PC9oND5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgPFN0YXJJY29uIGNsYXNzTmFtZT1cImgtNVwiIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwPjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9