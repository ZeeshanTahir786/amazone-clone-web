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
  const {
    0: hasPrime
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.random() < 0.5);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map((_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {
        className: "h-5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), hasPrime]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJ1c2VTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhhc1ByaW1lIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUcsQ0FBbkI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsQ0FBbkI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLENBQUM7QUFBRUMsSUFBRjtBQUFNQyxPQUFOO0FBQWFDLE9BQWI7QUFBb0JDLGFBQXBCO0FBQWlDQyxVQUFqQztBQUEyQ0M7QUFBM0MsQ0FBRCxLQUF3RDtBQUFBOztBQUN0RSxRQUFNO0FBQUEsT0FBQ0M7QUFBRCxNQUFXQywrQ0FBUSxDQUN2QkMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQmIsVUFBVSxHQUFHQyxVQUFiLEdBQTBCLENBQTNDLENBQVgsSUFBNERBLFVBRHJDLENBQXpCO0FBR0EsUUFBTTtBQUFBLE9BQUNhO0FBQUQsTUFBYUosK0NBQVEsQ0FBQ0MsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQWpCLENBQTNCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLGdCQUFJTjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBRUMsS0FBWjtBQUFtQixZQUFNLEVBQUUsR0FBM0I7QUFBZ0MsV0FBSyxFQUFFLEdBQXZDO0FBQTRDLGVBQVMsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBQSxnQkFBS0o7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBSUU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLGdCQUNHVyxLQUFLLENBQUNOLE1BQUQsQ0FBTCxDQUNFTyxJQURGLEdBRUVDLEdBRkYsQ0FFTSxDQUFDQyxDQUFELEVBQUlDLENBQUosa0JBQ0gsOERBQUMsNERBQUQ7QUFBVSxpQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBV0U7QUFBQSxnQkFBSWI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGLEVBWUdRLFFBWkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFnQkQsQ0FyQkQ7O0dBQU1aLE87O0tBQUFBLE87QUF1Qk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWZhNjI2NTZiZDcxNTMzYjk0MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuXHJcbmNvbnN0IE1BWF9SQVRJTkcgPSA1O1xyXG5jb25zdCBNSU5fUkFUSU5HID0gMTtcclxuXHJcbmNvbnN0IFByb2R1Y3QgPSAoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+IHtcclxuICBjb25zdCBbcmF0aW5nXSA9IHVzZVN0YXRlKFxyXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkpICsgTUlOX1JBVElOR1xyXG4gICk7XHJcbiAgY29uc3QgW2hhc1ByaW1lXSA9IHVzZVN0YXRlKE1hdGgucmFuZG9tKCkgPCAwLjUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD57Y2F0ZWdvcnl9PC9wPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxyXG4gICAgICA8aDQ+e3RpdGxlfTwvaDQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIHtBcnJheShyYXRpbmcpXHJcbiAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAubWFwKChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9XCJoLTVcIiAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICB7aGFzUHJpbWUgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=