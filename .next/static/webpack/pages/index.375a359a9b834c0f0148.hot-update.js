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
  const [hasPrime] = react__WEBPACK_IMPORTED_MODULE_1__.useState;
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
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJ1c2VTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhhc1ByaW1lIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUcsQ0FBbkI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsQ0FBbkI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLENBQUM7QUFBRUMsSUFBRjtBQUFNQyxPQUFOO0FBQWFDLE9BQWI7QUFBb0JDLGFBQXBCO0FBQWlDQyxVQUFqQztBQUEyQ0M7QUFBM0MsQ0FBRCxLQUF3RDtBQUFBOztBQUN0RSxRQUFNO0FBQUEsT0FBQ0M7QUFBRCxNQUFXQywrQ0FBUSxDQUN2QkMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQmIsVUFBVSxHQUFHQyxVQUFiLEdBQTBCLENBQTNDLENBQVgsSUFBNERBLFVBRHJDLENBQXpCO0FBR0EsUUFBTSxDQUFDYSxRQUFELElBQWFKLDJDQUFuQjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBSUg7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVDLEtBQVo7QUFBbUIsWUFBTSxFQUFFLEdBQTNCO0FBQWdDLFdBQUssRUFBRSxHQUF2QztBQUE0QyxlQUFTLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsZ0JBQUtKO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxnQkFDR1csS0FBSyxDQUFDTixNQUFELENBQUwsQ0FDRU8sSUFERixHQUVFQyxHQUZGLENBRU0sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLGtCQUNILDhEQUFDLDREQUFEO0FBQVUsaUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhIO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVdFO0FBQUEsZ0JBQUliO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWVELENBcEJEOztHQUFNSixPOztLQUFBQSxPO0FBc0JOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM3NWEzNTlhOWI4MzRjMGYwMTQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcblxyXG5jb25zdCBNQVhfUkFUSU5HID0gNTtcclxuY29uc3QgTUlOX1JBVElORyA9IDE7XHJcblxyXG5jb25zdCBQcm9kdWN0ID0gKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiB7XHJcbiAgY29uc3QgW3JhdGluZ10gPSB1c2VTdGF0ZShcclxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNQVhfUkFUSU5HIC0gTUlOX1JBVElORyArIDEpKSArIE1JTl9SQVRJTkdcclxuICApO1xyXG4gIGNvbnN0IFtoYXNQcmltZV0gPSB1c2VTdGF0ZVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD57Y2F0ZWdvcnl9PC9wPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxyXG4gICAgICA8aDQ+e3RpdGxlfTwvaDQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIHtBcnJheShyYXRpbmcpXHJcbiAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAubWFwKChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9XCJoLTVcIiAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=