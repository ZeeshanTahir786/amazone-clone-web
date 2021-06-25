self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ "./src/components/Product.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "F:\\React\\amazon\\src\\components\\ProductFeed.js";



const ProductFeed = ({
  products
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto",
    children: [products.slice(0, 4).map(({
      id,
      title,
      price,
      description,
      category,
      image
    }) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, undefined);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "md:col-span-full",
      src: "https://links.papareact.com/dyz",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:col-span-2",
      children: products.slice(4, 5).map(({
        id,
        title,
        price,
        description,
        category,
        image
      }) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
          id: id,
          title: title,
          price: price,
          description: description,
          category: category,
          image: image
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), products.slice(5, products.le).map(({
      id,
      title,
      price,
      description,
      category,
      image
    }) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

_c = ProductFeed;
/* harmony default export */ __webpack_exports__["default"] = (ProductFeed);

var _c;

$RefreshReg$(_c, "ProductFeed");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanMiXSwibmFtZXMiOlsiUHJvZHVjdEZlZWQiLCJwcm9kdWN0cyIsInNsaWNlIiwibWFwIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ3BDLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlGQUFmO0FBQUEsZUFDR0EsUUFBUSxDQUNOQyxLQURGLENBQ1EsQ0FEUixFQUNXLENBRFgsRUFFRUMsR0FGRixDQUVNLENBQUM7QUFBRUMsUUFBRjtBQUFNQyxXQUFOO0FBQWFDLFdBQWI7QUFBb0JDLGlCQUFwQjtBQUFpQ0MsY0FBakM7QUFBMkNDO0FBQTNDLEtBQUQsS0FBd0Q7QUFDM0QsMEJBQ0UsOERBQUMsNkNBQUQ7QUFFRSxVQUFFLEVBQUVMLEVBRk47QUFHRSxhQUFLLEVBQUVDLEtBSFQ7QUFJRSxhQUFLLEVBQUVDLEtBSlQ7QUFLRSxtQkFBVyxFQUFFQyxXQUxmO0FBTUUsZ0JBQVEsRUFBRUMsUUFOWjtBQU9FLGFBQUssRUFBRUM7QUFQVCxTQUNPTCxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFXRCxLQWRGLENBREgsZUFnQkU7QUFDRSxlQUFTLEVBQUMsa0JBRFo7QUFFRSxTQUFHLEVBQUMsaUNBRk47QUFHRSxTQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixlQXFCRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsZ0JBQ0dILFFBQVEsQ0FDTkMsS0FERixDQUNRLENBRFIsRUFDVyxDQURYLEVBRUVDLEdBRkYsQ0FFTSxDQUFDO0FBQUVDLFVBQUY7QUFBTUMsYUFBTjtBQUFhQyxhQUFiO0FBQW9CQyxtQkFBcEI7QUFBaUNDLGdCQUFqQztBQUEyQ0M7QUFBM0MsT0FBRCxLQUF3RDtBQUMzRCw0QkFDRSw4REFBQyw2Q0FBRDtBQUVFLFlBQUUsRUFBRUwsRUFGTjtBQUdFLGVBQUssRUFBRUMsS0FIVDtBQUlFLGVBQUssRUFBRUMsS0FKVDtBQUtFLHFCQUFXLEVBQUVDLFdBTGY7QUFNRSxrQkFBUSxFQUFFQyxRQU5aO0FBT0UsZUFBSyxFQUFFQztBQVBULFdBQ09MLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVdELE9BZEY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRixFQXNDR0gsUUFBUSxDQUNKQyxLQURKLENBQ1UsQ0FEVixFQUNhRCxRQUFRLENBQUNTLEVBRHRCLEVBRUlQLEdBRkosQ0FFUSxDQUFDO0FBQUVDLFFBQUY7QUFBTUMsV0FBTjtBQUFhQyxXQUFiO0FBQW9CQyxpQkFBcEI7QUFBaUNDLGNBQWpDO0FBQTJDQztBQUEzQyxLQUFELEtBQXdEO0FBQzNELDBCQUNFLDhEQUFDLDZDQUFEO0FBRUUsVUFBRSxFQUFFTCxFQUZOO0FBR0UsYUFBSyxFQUFFQyxLQUhUO0FBSUUsYUFBSyxFQUFFQyxLQUpUO0FBS0UsbUJBQVcsRUFBRUMsV0FMZjtBQU1FLGdCQUFRLEVBQUVDLFFBTlo7QUFPRSxhQUFLLEVBQUVDO0FBUFQsU0FDT0wsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBV0QsS0FkSixDQXRDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXdERCxDQXpERDs7S0FBTUosVztBQTJETiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iOTk5YzE3MTNiYjIwYTQ3NmIyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0XCI7XHJcblxyXG5jb25zdCBQcm9kdWN0RmVlZCA9ICh7IHByb2R1Y3RzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgbWQ6LW10LTUyIG14LWF1dG9cIj5cclxuICAgICAge3Byb2R1Y3RzXHJcbiAgICAgICAgLnNsaWNlKDAsIDQpXHJcbiAgICAgICAgLm1hcCgoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQcm9kdWN0XHJcbiAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi1mdWxsXCJcclxuICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZHl6XCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTJcIj5cclxuICAgICAgICB7cHJvZHVjdHNcclxuICAgICAgICAgIC5zbGljZSg0LCA1KVxyXG4gICAgICAgICAgLm1hcCgoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8UHJvZHVjdFxyXG4gICAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cHJvZHVjdHNcclxuICAgICAgICAgIC5zbGljZSg1LCBwcm9kdWN0cy5sZSlcclxuICAgICAgICAgIC5tYXAoKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFByb2R1Y3RcclxuICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RGZWVkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9