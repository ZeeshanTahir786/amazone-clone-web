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
    }, undefined), products.slice(5, products.l).map(({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanMiXSwibmFtZXMiOlsiUHJvZHVjdEZlZWQiLCJwcm9kdWN0cyIsInNsaWNlIiwibWFwIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwibCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDcEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUZBQWY7QUFBQSxlQUNHQSxRQUFRLENBQ05DLEtBREYsQ0FDUSxDQURSLEVBQ1csQ0FEWCxFQUVFQyxHQUZGLENBRU0sQ0FBQztBQUFFQyxRQUFGO0FBQU1DLFdBQU47QUFBYUMsV0FBYjtBQUFvQkMsaUJBQXBCO0FBQWlDQyxjQUFqQztBQUEyQ0M7QUFBM0MsS0FBRCxLQUF3RDtBQUMzRCwwQkFDRSw4REFBQyw2Q0FBRDtBQUVFLFVBQUUsRUFBRUwsRUFGTjtBQUdFLGFBQUssRUFBRUMsS0FIVDtBQUlFLGFBQUssRUFBRUMsS0FKVDtBQUtFLG1CQUFXLEVBQUVDLFdBTGY7QUFNRSxnQkFBUSxFQUFFQyxRQU5aO0FBT0UsYUFBSyxFQUFFQztBQVBULFNBQ09MLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVdELEtBZEYsQ0FESCxlQWdCRTtBQUNFLGVBQVMsRUFBQyxrQkFEWjtBQUVFLFNBQUcsRUFBQyxpQ0FGTjtBQUdFLFNBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGLGVBcUJFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSxnQkFDR0gsUUFBUSxDQUNOQyxLQURGLENBQ1EsQ0FEUixFQUNXLENBRFgsRUFFRUMsR0FGRixDQUVNLENBQUM7QUFBRUMsVUFBRjtBQUFNQyxhQUFOO0FBQWFDLGFBQWI7QUFBb0JDLG1CQUFwQjtBQUFpQ0MsZ0JBQWpDO0FBQTJDQztBQUEzQyxPQUFELEtBQXdEO0FBQzNELDRCQUNFLDhEQUFDLDZDQUFEO0FBRUUsWUFBRSxFQUFFTCxFQUZOO0FBR0UsZUFBSyxFQUFFQyxLQUhUO0FBSUUsZUFBSyxFQUFFQyxLQUpUO0FBS0UscUJBQVcsRUFBRUMsV0FMZjtBQU1FLGtCQUFRLEVBQUVDLFFBTlo7QUFPRSxlQUFLLEVBQUVDO0FBUFQsV0FDT0wsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBV0QsT0FkRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJGLEVBc0NHSCxRQUFRLENBQ0pDLEtBREosQ0FDVSxDQURWLEVBQ2FELFFBQVEsQ0FBQ1MsQ0FEdEIsRUFFSVAsR0FGSixDQUVRLENBQUM7QUFBRUMsUUFBRjtBQUFNQyxXQUFOO0FBQWFDLFdBQWI7QUFBb0JDLGlCQUFwQjtBQUFpQ0MsY0FBakM7QUFBMkNDO0FBQTNDLEtBQUQsS0FBd0Q7QUFDM0QsMEJBQ0UsOERBQUMsNkNBQUQ7QUFFRSxVQUFFLEVBQUVMLEVBRk47QUFHRSxhQUFLLEVBQUVDLEtBSFQ7QUFJRSxhQUFLLEVBQUVDLEtBSlQ7QUFLRSxtQkFBVyxFQUFFQyxXQUxmO0FBTUUsZ0JBQVEsRUFBRUMsUUFOWjtBQU9FLGFBQUssRUFBRUM7QUFQVCxTQUNPTCxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFXRCxLQWRKLENBdENIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBd0RELENBekREOztLQUFNSixXO0FBMkROLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNiYTllMTQ1M2FlMTY1NWQ5OGJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3RcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RGZWVkID0gKHsgcHJvZHVjdHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvdy1kZW5zZSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBtZDotbXQtNTIgbXgtYXV0b1wiPlxyXG4gICAgICB7cHJvZHVjdHNcclxuICAgICAgICAuc2xpY2UoMCwgNClcclxuICAgICAgICAubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFByb2R1Y3RcclxuICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLWZ1bGxcIlxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9keXpcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMlwiPlxyXG4gICAgICAgIHtwcm9kdWN0c1xyXG4gICAgICAgICAgLnNsaWNlKDQsIDUpXHJcbiAgICAgICAgICAubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwcm9kdWN0c1xyXG4gICAgICAgICAgLnNsaWNlKDUsIHByb2R1Y3RzLmwpXHJcbiAgICAgICAgICAubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RmVlZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==