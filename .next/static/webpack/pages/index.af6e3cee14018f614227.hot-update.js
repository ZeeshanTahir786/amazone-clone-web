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
      }, void 0, false, {
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
    }, undefined), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Has Prime Delivery"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 20
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


/***/ }),

/***/ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")) :
	0;
}(this, (function (react,PropTypes) { 'use strict';

react = react && react.hasOwnProperty('default') ? react['default'] : react;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

var locales = {
  af: {
    p: '!#,##0.00',
    g: ' ',
    d: ','
  },
  af_NA: {
    h: 'af'
  },
  af_ZA: {
    h: 'af'
  },
  agq: {
    p: '#,##0.00!',
    g: ' ',
    d: ','
  },
  agq_CM: {
    h: 'agq'
  },
  ak: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ak_GH: {
    h: 'ak'
  },
  am: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  am_ET: {
    h: 'am'
  },
  ar: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ar_001: {
    h: 'ar'
  },
  ar_AE: {
    h: 'ar'
  },
  ar_BH: {
    h: 'ar'
  },
  ar_DJ: {
    h: 'ar'
  },
  ar_DZ: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_EG: {
    h: 'ar'
  },
  ar_EH: {
    h: 'ar'
  },
  ar_ER: {
    h: 'ar'
  },
  ar_IL: {
    h: 'ar'
  },
  ar_IQ: {
    h: 'ar'
  },
  ar_JO: {
    h: 'ar'
  },
  ar_KM: {
    h: 'ar'
  },
  ar_KW: {
    h: 'ar'
  },
  ar_LB: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_LY: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_MA: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_MR: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_OM: {
    h: 'ar'
  },
  ar_PS: {
    h: 'ar'
  },
  ar_QA: {
    h: 'ar'
  },
  ar_SA: {
    h: 'ar'
  },
  ar_SD: {
    h: 'ar'
  },
  ar_SO: {
    h: 'ar'
  },
  ar_SS: {
    h: 'ar'
  },
  ar_SY: {
    h: 'ar'
  },
  ar_TD: {
    h: 'ar'
  },
  ar_TN: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_YE: {
    h: 'ar'
  },
  as: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  as_IN: {
    h: 'as'
  },
  asa: {
    p: '#,##0.00 !',
    g: ',',
    d: '.'
  },
  asa_TZ: {
    h: 'asa'
  },
  ast: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ast_ES: {
    h: 'ast'
  },
  az: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  az_Cyrl: {
    h: 'az'
  },
  az_Cyrl_AZ: {
    h: 'az'
  },
  az_Latn: {
    h: 'az'
  },
  az_Latn_AZ: {
    h: 'az'
  },
  bas: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  bas_CM: {
    h: 'bas'
  },
  be: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  be_BY: {
    h: 'be'
  },
  bem: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  bem_ZM: {
    h: 'bem'
  },
  bez: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  bez_TZ: {
    h: 'bez'
  },
  bg: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  bg_BG: {
    h: 'bg'
  },
  bm: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  bm_ML: {
    h: 'bm'
  },
  bn: {
    p: '#,##,##0.00!',
    g: ',',
    d: '.'
  },
  bn_BD: {
    h: 'bn'
  },
  bn_IN: {
    h: 'bn'
  },
  bo: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  bo_CN: {
    h: 'bo'
  },
  bo_IN: {
    h: 'bo'
  },
  br: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  br_FR: {
    h: 'br'
  },
  brx: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  brx_IN: {
    h: 'brx'
  },
  bs: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  bs_Cyrl: {
    h: 'bs'
  },
  bs_Cyrl_BA: {
    h: 'bs'
  },
  bs_Latn: {
    h: 'bs'
  },
  bs_Latn_BA: {
    h: 'bs'
  },
  ca: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ca_AD: {
    h: 'ca'
  },
  ca_ES: {
    h: 'ca'
  },
  ca_ES_VALENCIA: {
    h: 'ca'
  },
  ca_FR: {
    h: 'ca'
  },
  ca_IT: {
    h: 'ca'
  },
  ce: {
    p: '#,##0.00 !',
    g: ',',
    d: '.'
  },
  ce_RU: {
    h: 'ce'
  },
  cgg: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  cgg_UG: {
    h: 'cgg'
  },
  chr: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  chr_US: {
    h: 'chr'
  },
  ckb: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ckb_IQ: {
    h: 'ckb'
  },
  ckb_IR: {
    h: 'ckb'
  },
  cs: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  cs_CZ: {
    h: 'cs'
  },
  cu: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  cu_RU: {
    h: 'cu'
  },
  cy: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  cy_GB: {
    h: 'cy'
  },
  da: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  da_DK: {
    h: 'da'
  },
  da_GL: {
    h: 'da'
  },
  dav: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  dav_KE: {
    h: 'dav'
  },
  de: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  de_AT: {
    p: '! #,##0.00',
    g: ' ',
    d: ','
  },
  de_BE: {
    h: 'de'
  },
  de_CH: {
    p: '! #,##0.00;!-#,##0.00',
    g: '\'',
    d: '.'
  },
  de_DE: {
    h: 'de'
  },
  de_LI: {
    p: '! #,##0.00',
    g: '\'',
    d: '.'
  },
  de_LU: {
    h: 'de'
  },
  dje: {
    p: '#,##0.00!',
    g: ' ',
    d: '.'
  },
  dje_NE: {
    h: 'dje'
  },
  dsb: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  dsb_DE: {
    h: 'dsb'
  },
  dua: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  dua_CM: {
    h: 'dua'
  },
  dyo: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  dyo_SN: {
    h: 'dyo'
  },
  dz: {
    p: '!#,##,##0.00',
    g: ',',
    d: '.'
  },
  dz_BT: {
    h: 'dz'
  },
  ebu: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ebu_KE: {
    h: 'ebu'
  },
  ee: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ee_GH: {
    h: 'ee'
  },
  ee_TG: {
    h: 'ee'
  },
  el: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  el_CY: {
    h: 'el'
  },
  el_GR: {
    h: 'el'
  },
  en: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  en_001: {
    h: 'en'
  },
  en_150: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  en_AG: {
    h: 'en'
  },
  en_AI: {
    h: 'en'
  },
  en_AS: {
    h: 'en'
  },
  en_AT: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  en_AU: {
    h: 'en'
  },
  en_BB: {
    h: 'en'
  },
  en_BE: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  en_BI: {
    h: 'en'
  },
  en_BM: {
    h: 'en'
  },
  en_BS: {
    h: 'en'
  },
  en_BW: {
    h: 'en'
  },
  en_BZ: {
    h: 'en'
  },
  en_CA: {
    h: 'en'
  },
  en_CC: {
    h: 'en'
  },
  en_CH: {
    p: '! #,##0.00;!-#,##0.00',
    g: ',',
    d: '.'
  },
  en_CK: {
    h: 'en'
  },
  en_CM: {
    h: 'en'
  },
  en_CX: {
    h: 'en'
  },
  en_CY: {
    h: 'en'
  },
  en_DE: {
    h: 'en'
  },
  en_DG: {
    h: 'en'
  },
  en_DK: {
    h: 'en'
  },
  en_DM: {
    h: 'en'
  },
  en_ER: {
    h: 'en'
  },
  en_FI: {
    p: '!#,##0.00',
    g: ' ',
    d: '.'
  },
  en_FJ: {
    h: 'en'
  },
  en_FK: {
    h: 'en'
  },
  en_FM: {
    h: 'en'
  },
  en_GB: {
    h: 'en'
  },
  en_GD: {
    h: 'en'
  },
  en_GG: {
    h: 'en'
  },
  en_GH: {
    h: 'en'
  },
  en_GI: {
    h: 'en'
  },
  en_GM: {
    h: 'en'
  },
  en_GU: {
    h: 'en'
  },
  en_GY: {
    h: 'en'
  },
  en_HK: {
    h: 'en'
  },
  en_IE: {
    h: 'en'
  },
  en_IL: {
    h: 'en'
  },
  en_IM: {
    h: 'en'
  },
  en_IN: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  en_IO: {
    h: 'en'
  },
  en_JE: {
    h: 'en'
  },
  en_JM: {
    h: 'en'
  },
  en_KE: {
    h: 'en'
  },
  en_KI: {
    h: 'en'
  },
  en_KN: {
    h: 'en'
  },
  en_KY: {
    h: 'en'
  },
  en_LC: {
    h: 'en'
  },
  en_LR: {
    h: 'en'
  },
  en_LS: {
    h: 'en'
  },
  en_MG: {
    h: 'en'
  },
  en_MH: {
    h: 'en'
  },
  en_MO: {
    h: 'en'
  },
  en_MP: {
    h: 'en'
  },
  en_MS: {
    h: 'en'
  },
  en_MT: {
    h: 'en'
  },
  en_MU: {
    h: 'en'
  },
  en_MW: {
    h: 'en'
  },
  en_MY: {
    h: 'en'
  },
  en_NA: {
    h: 'en'
  },
  en_NF: {
    h: 'en'
  },
  en_NG: {
    h: 'en'
  },
  en_NL: {
    p: '! #,##0.00;! -#,##0.00',
    g: ',',
    d: '.'
  },
  en_NR: {
    h: 'en'
  },
  en_NU: {
    h: 'en'
  },
  en_NZ: {
    h: 'en'
  },
  en_PG: {
    h: 'en'
  },
  en_PH: {
    h: 'en'
  },
  en_PK: {
    h: 'en'
  },
  en_PN: {
    h: 'en'
  },
  en_PR: {
    h: 'en'
  },
  en_PW: {
    h: 'en'
  },
  en_RW: {
    h: 'en'
  },
  en_SB: {
    h: 'en'
  },
  en_SC: {
    h: 'en'
  },
  en_SD: {
    h: 'en'
  },
  en_SE: {
    p: '!#,##0.00',
    g: ' ',
    d: '.'
  },
  en_SG: {
    h: 'en'
  },
  en_SH: {
    h: 'en'
  },
  en_SI: {
    h: 'en'
  },
  en_SL: {
    h: 'en'
  },
  en_SS: {
    h: 'en'
  },
  en_SX: {
    h: 'en'
  },
  en_SZ: {
    h: 'en'
  },
  en_TC: {
    h: 'en'
  },
  en_TK: {
    h: 'en'
  },
  en_TO: {
    h: 'en'
  },
  en_TT: {
    h: 'en'
  },
  en_TV: {
    h: 'en'
  },
  en_TZ: {
    h: 'en'
  },
  en_UG: {
    h: 'en'
  },
  en_UM: {
    h: 'en'
  },
  en_US: {
    h: 'en'
  },
  en_US_POSIX: {
    p: '! #0.00',
    g: ',',
    d: '.'
  },
  en_VC: {
    h: 'en'
  },
  en_VG: {
    h: 'en'
  },
  en_VI: {
    h: 'en'
  },
  en_VU: {
    h: 'en'
  },
  en_WS: {
    h: 'en'
  },
  en_ZA: {
    p: '!#,##0.00',
    g: ' ',
    d: ','
  },
  en_ZM: {
    h: 'en'
  },
  en_ZW: {
    h: 'en'
  },
  eo: {
    p: '!#,##0.00',
    g: ' ',
    d: ','
  },
  eo_001: {
    h: 'eo'
  },
  es: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  es_419: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  es_AR: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  es_BO: {
    h: 'es'
  },
  es_BR: {
    h: 'es'
  },
  es_CL: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  es_CO: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  es_CR: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  es_CU: {
    h: 'es'
  },
  es_DO: {
    h: 'es'
  },
  es_EA: {
    h: 'es'
  },
  es_EC: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  es_ES: {
    h: 'es'
  },
  es_GQ: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  es_GT: {
    h: 'es'
  },
  es_HN: {
    h: 'es'
  },
  es_IC: {
    h: 'es'
  },
  es_MX: {
    h: 'es'
  },
  es_NI: {
    h: 'es'
  },
  es_PA: {
    h: 'es'
  },
  es_PE: {
    h: 'es'
  },
  es_PH: {
    h: 'es'
  },
  es_PR: {
    h: 'es'
  },
  es_PY: {
    p: '! #,##0.00;! -#,##0.00',
    g: '.',
    d: ','
  },
  es_SV: {
    h: 'es'
  },
  es_US: {
    h: 'es'
  },
  es_UY: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  es_VE: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  et: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  et_EE: {
    h: 'et'
  },
  eu: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  eu_ES: {
    h: 'eu'
  },
  ewo: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ewo_CM: {
    h: 'ewo'
  },
  fa: {
    p: '‎!#,##0.00',
    g: ',',
    d: '.'
  },
  fa_AF: {
    h: 'fa'
  },
  fa_IR: {
    h: 'fa'
  },
  ff: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ff_CM: {
    h: 'ff'
  },
  ff_GN: {
    h: 'ff'
  },
  ff_MR: {
    h: 'ff'
  },
  ff_SN: {
    h: 'ff'
  },
  fi: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  fi_FI: {
    h: 'fi'
  },
  fil: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  fil_PH: {
    h: 'fil'
  },
  fo: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  fo_DK: {
    h: 'fo'
  },
  fo_FO: {
    h: 'fo'
  },
  fr: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  fr_BE: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  fr_BF: {
    h: 'fr'
  },
  fr_BI: {
    h: 'fr'
  },
  fr_BJ: {
    h: 'fr'
  },
  fr_BL: {
    h: 'fr'
  },
  fr_CA: {
    h: 'fr'
  },
  fr_CD: {
    h: 'fr'
  },
  fr_CF: {
    h: 'fr'
  },
  fr_CG: {
    h: 'fr'
  },
  fr_CH: {
    p: '! #,##0.00;!-#,##0.00',
    g: ' ',
    d: '.'
  },
  fr_CI: {
    h: 'fr'
  },
  fr_CM: {
    h: 'fr'
  },
  fr_DJ: {
    h: 'fr'
  },
  fr_DZ: {
    h: 'fr'
  },
  fr_FR: {
    h: 'fr'
  },
  fr_GA: {
    h: 'fr'
  },
  fr_GF: {
    h: 'fr'
  },
  fr_GN: {
    h: 'fr'
  },
  fr_GP: {
    h: 'fr'
  },
  fr_GQ: {
    h: 'fr'
  },
  fr_HT: {
    h: 'fr'
  },
  fr_KM: {
    h: 'fr'
  },
  fr_LU: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  fr_MA: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  fr_MC: {
    h: 'fr'
  },
  fr_MF: {
    h: 'fr'
  },
  fr_MG: {
    h: 'fr'
  },
  fr_ML: {
    h: 'fr'
  },
  fr_MQ: {
    h: 'fr'
  },
  fr_MR: {
    h: 'fr'
  },
  fr_MU: {
    h: 'fr'
  },
  fr_NC: {
    h: 'fr'
  },
  fr_NE: {
    h: 'fr'
  },
  fr_PF: {
    h: 'fr'
  },
  fr_PM: {
    h: 'fr'
  },
  fr_RE: {
    h: 'fr'
  },
  fr_RW: {
    h: 'fr'
  },
  fr_SC: {
    h: 'fr'
  },
  fr_SN: {
    h: 'fr'
  },
  fr_SY: {
    h: 'fr'
  },
  fr_TD: {
    h: 'fr'
  },
  fr_TG: {
    h: 'fr'
  },
  fr_TN: {
    h: 'fr'
  },
  fr_VU: {
    h: 'fr'
  },
  fr_WF: {
    h: 'fr'
  },
  fr_YT: {
    h: 'fr'
  },
  fur: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  fur_IT: {
    h: 'fur'
  },
  fy: {
    p: '! #,##0.00;! #,##0.00-',
    g: '.',
    d: ','
  },
  fy_NL: {
    h: 'fy'
  },
  ga: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ga_IE: {
    h: 'ga'
  },
  gd: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  gd_GB: {
    h: 'gd'
  },
  gl: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  gl_ES: {
    h: 'gl'
  },
  gsw: {
    p: '#,##0.00 !',
    g: '’',
    d: '.'
  },
  gsw_CH: {
    h: 'gsw'
  },
  gsw_FR: {
    h: 'gsw'
  },
  gsw_LI: {
    h: 'gsw'
  },
  gu: {
    p: '!#,##,##0.00',
    g: ',',
    d: '.'
  },
  gu_IN: {
    h: 'gu'
  },
  guz: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  guz_KE: {
    h: 'guz'
  },
  gv: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  gv_IM: {
    h: 'gv'
  },
  ha: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ha_GH: {
    h: 'ha'
  },
  ha_NE: {
    h: 'ha'
  },
  ha_NG: {
    h: 'ha'
  },
  haw: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  haw_US: {
    h: 'haw'
  },
  he: {
    p: '#,##0.00 !',
    g: ',',
    d: '.'
  },
  he_IL: {
    h: 'he'
  },
  hi: {
    p: '!#,##,##0.00',
    g: ',',
    d: '.'
  },
  hi_IN: {
    h: 'hi'
  },
  hr: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  hr_BA: {
    h: 'hr'
  },
  hr_HR: {
    h: 'hr'
  },
  hsb: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  hsb_DE: {
    h: 'hsb'
  },
  hu: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  hu_HU: {
    h: 'hu'
  },
  hy: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  hy_AM: {
    h: 'hy'
  },
  id: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  id_ID: {
    h: 'id'
  },
  ig: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ig_NG: {
    h: 'ig'
  },
  ii: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ii_CN: {
    h: 'ii'
  },
  is: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  is_IS: {
    h: 'is'
  },
  it: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  it_CH: {
    p: '! #,##0.00;!-#,##0.00',
    g: '\'',
    d: '.'
  },
  it_IT: {
    h: 'it'
  },
  it_SM: {
    h: 'it'
  },
  ja: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ja_JP: {
    h: 'ja'
  },
  jgo: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  jgo_CM: {
    h: 'jgo'
  },
  jmc: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  jmc_TZ: {
    h: 'jmc'
  },
  ka: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ka_GE: {
    h: 'ka'
  },
  kab: {
    p: '#,##0.00!',
    g: ' ',
    d: ','
  },
  kab_DZ: {
    h: 'kab'
  },
  kam: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kam_KE: {
    h: 'kam'
  },
  kde: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kde_TZ: {
    h: 'kde'
  },
  kea: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  kea_CV: {
    h: 'kea'
  },
  khq: {
    p: '#,##0.00!',
    g: ' ',
    d: '.'
  },
  khq_ML: {
    h: 'khq'
  },
  ki: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ki_KE: {
    h: 'ki'
  },
  kk: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  kk_KZ: {
    h: 'kk'
  },
  kkj: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  kkj_CM: {
    h: 'kkj'
  },
  kl: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  kl_GL: {
    h: 'kl'
  },
  kln: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kln_KE: {
    h: 'kln'
  },
  km: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  km_KH: {
    h: 'km'
  },
  kn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kn_IN: {
    h: 'kn'
  },
  ko: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ko_KP: {
    h: 'ko'
  },
  ko_KR: {
    h: 'ko'
  },
  kok: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  kok_IN: {
    h: 'kok'
  },
  ks: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  ks_IN: {
    h: 'ks'
  },
  ksb: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  ksb_TZ: {
    h: 'ksb'
  },
  ksf: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ksf_CM: {
    h: 'ksf'
  },
  ksh: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ksh_DE: {
    h: 'ksh'
  },
  kw: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kw_GB: {
    h: 'kw'
  },
  ky: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ky_KG: {
    h: 'ky'
  },
  lag: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  lag_TZ: {
    h: 'lag'
  },
  lb: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  lb_LU: {
    h: 'lb'
  },
  lg: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  lg_UG: {
    h: 'lg'
  },
  lkt: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  lkt_US: {
    h: 'lkt'
  },
  ln: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ln_AO: {
    h: 'ln'
  },
  ln_CD: {
    h: 'ln'
  },
  ln_CF: {
    h: 'ln'
  },
  ln_CG: {
    h: 'ln'
  },
  lo: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  lo_LA: {
    h: 'lo'
  },
  lrc: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  lrc_IQ: {
    h: 'lrc'
  },
  lrc_IR: {
    h: 'lrc'
  },
  lt: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  lt_LT: {
    h: 'lt'
  },
  lu: {
    p: '#,##0.00!',
    g: '.',
    d: ','
  },
  lu_CD: {
    h: 'lu'
  },
  luo: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  luo_KE: {
    h: 'luo'
  },
  luy: {
    p: '!#,##0.00;!- #,##0.00',
    g: ',',
    d: '.'
  },
  luy_KE: {
    h: 'luy'
  },
  lv: {
    p: '#0.00 !',
    g: ' ',
    d: ','
  },
  lv_LV: {
    h: 'lv'
  },
  mas: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mas_KE: {
    h: 'mas'
  },
  mas_TZ: {
    h: 'mas'
  },
  mer: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mer_KE: {
    h: 'mer'
  },
  mfe: {
    p: '!#,##0.00',
    g: ' ',
    d: '.'
  },
  mfe_MU: {
    h: 'mfe'
  },
  mg: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mg_MG: {
    h: 'mg'
  },
  mgh: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  mgh_MZ: {
    h: 'mgh'
  },
  mgo: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  mgo_CM: {
    h: 'mgo'
  },
  mk: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  mk_MK: {
    h: 'mk'
  },
  ml: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ml_IN: {
    h: 'ml'
  },
  mn: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  mn_MN: {
    h: 'mn'
  },
  mr: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mr_IN: {
    h: 'mr'
  },
  ms: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ms_BN: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ms_MY: {
    h: 'ms'
  },
  ms_SG: {
    h: 'ms'
  },
  mt: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mt_MT: {
    h: 'mt'
  },
  mua: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  mua_CM: {
    h: 'mua'
  },
  my: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  my_MM: {
    h: 'my'
  },
  mzn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mzn_IR: {
    h: 'mzn'
  },
  naq: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  naq_NA: {
    h: 'naq'
  },
  nb: {
    p: '! #,##0.00',
    g: ' ',
    d: ','
  },
  nb_NO: {
    h: 'nb'
  },
  nb_SJ: {
    h: 'nb'
  },
  nd: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  nd_ZW: {
    h: 'nd'
  },
  ne: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ne_IN: {
    h: 'ne'
  },
  ne_NP: {
    h: 'ne'
  },
  nl: {
    p: '! #,##0.00;! -#,##0.00',
    g: '.',
    d: ','
  },
  nl_AW: {
    h: 'nl'
  },
  nl_BE: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  nl_BQ: {
    h: 'nl'
  },
  nl_CW: {
    h: 'nl'
  },
  nl_NL: {
    h: 'nl'
  },
  nl_SR: {
    h: 'nl'
  },
  nl_SX: {
    h: 'nl'
  },
  nmg: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  nmg_CM: {
    h: 'nmg'
  },
  nn: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  nn_NO: {
    h: 'nn'
  },
  nnh: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  nnh_CM: {
    h: 'nnh'
  },
  nus: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  nus_SS: {
    h: 'nus'
  },
  nyn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  nyn_UG: {
    h: 'nyn'
  },
  om: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  om_ET: {
    h: 'om'
  },
  om_KE: {
    h: 'om'
  },
  or: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  or_IN: {
    h: 'or'
  },
  os: {
    p: '! #,##0.00',
    g: ' ',
    d: ','
  },
  os_GE: {
    h: 'os'
  },
  os_RU: {
    h: 'os'
  },
  pa: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  pa_Arab: {
    h: 'pa'
  },
  pa_Arab_PK: {
    h: 'pa'
  },
  pa_Guru: {
    h: 'pa'
  },
  pa_Guru_IN: {
    h: 'pa'
  },
  pl: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  pl_PL: {
    h: 'pl'
  },
  prg: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  prg_001: {
    h: 'prg'
  },
  ps: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ps_AF: {
    h: 'ps'
  },
  pt: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  pt_AO: {
    h: 'pt'
  },
  pt_BR: {
    h: 'pt'
  },
  pt_CH: {
    h: 'pt'
  },
  pt_CV: {
    h: 'pt'
  },
  pt_GQ: {
    h: 'pt'
  },
  pt_GW: {
    h: 'pt'
  },
  pt_LU: {
    h: 'pt'
  },
  pt_MO: {
    h: 'pt'
  },
  pt_MZ: {
    h: 'pt'
  },
  pt_PT: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  pt_ST: {
    h: 'pt'
  },
  pt_TL: {
    h: 'pt'
  },
  qu: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  qu_BO: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  qu_EC: {
    h: 'qu'
  },
  qu_PE: {
    h: 'qu'
  },
  rm: {
    p: '#,##0.00 !',
    g: '’',
    d: '.'
  },
  rm_CH: {
    h: 'rm'
  },
  rn: {
    p: '#,##0.00!',
    g: '.',
    d: ','
  },
  rn_BI: {
    h: 'rn'
  },
  ro: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ro_MD: {
    h: 'ro'
  },
  ro_RO: {
    h: 'ro'
  },
  rof: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  rof_TZ: {
    h: 'rof'
  },
  root: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ru: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ru_BY: {
    h: 'ru'
  },
  ru_KG: {
    h: 'ru'
  },
  ru_KZ: {
    h: 'ru'
  },
  ru_MD: {
    h: 'ru'
  },
  ru_RU: {
    h: 'ru'
  },
  ru_UA: {
    h: 'ru'
  },
  rw: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  rw_RW: {
    h: 'rw'
  },
  rwk: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  rwk_TZ: {
    h: 'rwk'
  },
  sah: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  sah_RU: {
    h: 'sah'
  },
  saq: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  saq_KE: {
    h: 'saq'
  },
  sbp: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  sbp_TZ: {
    h: 'sbp'
  },
  se: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  se_FI: {
    h: 'se'
  },
  se_NO: {
    h: 'se'
  },
  se_SE: {
    h: 'se'
  },
  seh: {
    p: '#,##0.00!',
    g: '.',
    d: ','
  },
  seh_MZ: {
    h: 'seh'
  },
  ses: {
    p: '#,##0.00!',
    g: ' ',
    d: '.'
  },
  ses_ML: {
    h: 'ses'
  },
  sg: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  sg_CF: {
    h: 'sg'
  },
  shi: {
    p: '#,##0.00!',
    g: ' ',
    d: ','
  },
  shi_Latn: {
    h: 'shi'
  },
  shi_Latn_MA: {
    h: 'shi'
  },
  shi_Tfng: {
    h: 'shi'
  },
  shi_Tfng_MA: {
    h: 'shi'
  },
  si: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  si_LK: {
    h: 'si'
  },
  sk: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  sk_SK: {
    h: 'sk'
  },
  sl: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  sl_SI: {
    h: 'sl'
  },
  smn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  smn_FI: {
    h: 'smn'
  },
  sn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  sn_ZW: {
    h: 'sn'
  },
  so: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  so_DJ: {
    h: 'so'
  },
  so_ET: {
    h: 'so'
  },
  so_KE: {
    h: 'so'
  },
  so_SO: {
    h: 'so'
  },
  sq: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  sq_AL: {
    h: 'sq'
  },
  sq_MK: {
    h: 'sq'
  },
  sq_XK: {
    h: 'sq'
  },
  sr: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  sr_Cyrl: {
    h: 'sr'
  },
  sr_Cyrl_BA: {
    h: 'sr'
  },
  sr_Cyrl_ME: {
    h: 'sr'
  },
  sr_Cyrl_RS: {
    h: 'sr'
  },
  sr_Cyrl_XK: {
    h: 'sr'
  },
  sr_Latn: {
    h: 'sr'
  },
  sr_Latn_BA: {
    h: 'sr'
  },
  sr_Latn_ME: {
    h: 'sr'
  },
  sr_Latn_RS: {
    h: 'sr'
  },
  sr_Latn_XK: {
    h: 'sr'
  },
  sv: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  sv_AX: {
    h: 'sv'
  },
  sv_FI: {
    h: 'sv'
  },
  sv_SE: {
    h: 'sv'
  },
  sw: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  sw_CD: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  sw_KE: {
    h: 'sw'
  },
  sw_TZ: {
    h: 'sw'
  },
  sw_UG: {
    h: 'sw'
  },
  ta: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  ta_IN: {
    h: 'ta'
  },
  ta_LK: {
    h: 'ta'
  },
  ta_MY: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ta_SG: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  te: {
    p: '!#,##,##0.00',
    g: ',',
    d: '.'
  },
  te_IN: {
    h: 'te'
  },
  teo: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  teo_KE: {
    h: 'teo'
  },
  teo_UG: {
    h: 'teo'
  },
  th: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  th_TH: {
    h: 'th'
  },
  ti: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ti_ER: {
    h: 'ti'
  },
  ti_ET: {
    h: 'ti'
  },
  tk: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  tk_TM: {
    h: 'tk'
  },
  to: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  to_TO: {
    h: 'to'
  },
  tr: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  tr_CY: {
    h: 'tr'
  },
  tr_TR: {
    h: 'tr'
  },
  twq: {
    p: '#,##0.00!',
    g: ' ',
    d: '.'
  },
  twq_NE: {
    h: 'twq'
  },
  tzm: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  tzm_MA: {
    h: 'tzm'
  },
  ug: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ug_CN: {
    h: 'ug'
  },
  uk: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  uk_UA: {
    h: 'uk'
  },
  ur: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  ur_IN: {
    h: 'ur'
  },
  ur_PK: {
    h: 'ur'
  },
  uz: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  uz_Arab: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  uz_Arab_AF: {
    h: 'uz'
  },
  uz_Cyrl: {
    p: '! #,##0.00',
    g: ' ',
    d: ','
  },
  uz_Cyrl_UZ: {
    h: 'uz'
  },
  uz_Latn: {
    h: 'uz'
  },
  uz_Latn_UZ: {
    h: 'uz'
  },
  vai: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  vai_Latn: {
    h: 'vai'
  },
  vai_Latn_LR: {
    h: 'vai'
  },
  vai_Vaii: {
    h: 'vai'
  },
  vai_Vaii_LR: {
    h: 'vai'
  },
  vi: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  vi_VN: {
    h: 'vi'
  },
  vo: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  vo_001: {
    h: 'vo'
  },
  vun: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  vun_TZ: {
    h: 'vun'
  },
  wae: {
    p: '!#,##0.00',
    g: '’',
    d: ','
  },
  wae_CH: {
    h: 'wae'
  },
  xog: {
    p: '#,##0.00 !',
    g: ',',
    d: '.'
  },
  xog_UG: {
    h: 'xog'
  },
  yav: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  yav_CM: {
    h: 'yav'
  },
  yi: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  yi_001: {
    h: 'yi'
  },
  yo: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  yo_BJ: {
    h: 'yo'
  },
  yo_NG: {
    h: 'yo'
  },
  yue: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  yue_HK: {
    h: 'yue'
  },
  zgh: {
    p: '#,##0.00!',
    g: ' ',
    d: ','
  },
  zgh_MA: {
    h: 'zgh'
  },
  zh: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  zh_Hans: {
    h: 'zh'
  },
  zh_Hans_CN: {
    h: 'zh'
  },
  zh_Hans_HK: {
    h: 'zh'
  },
  zh_Hans_MO: {
    h: 'zh'
  },
  zh_Hans_SG: {
    h: 'zh'
  },
  zh_Hant: {
    h: 'zh'
  },
  zh_Hant_HK: {
    h: 'zh'
  },
  zh_Hant_MO: {
    h: 'zh'
  },
  zh_Hant_TW: {
    h: 'zh'
  },
  zu: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  zu_ZA: {
    h: 'zu'
  }
};

var defaultLocales = {
  AED: 'ar_AE',
  AFN: 'fa_AF',
  ALL: 'sq',
  AMD: 'hy',
  ANG: 'nl',
  AOA: 'pt_AO',
  ARS: 'es_AR',
  AUD: 'en',
  AWG: 'nl_AW',
  AZN: 'az',
  BAM: 'bs',
  BBD: 'en_BB',
  BDT: 'bn_BD',
  BGN: 'bg',
  BHD: 'ar_BH',
  BIF: 'fr_BI',
  BMD: 'en_BM',
  BND: 'ms_BN',
  BOB: 'es_BO',
  BRL: 'pt_BR',
  BSD: 'en_BS',
  BTN: 'dz',
  BWP: 'en_BW',
  BYR: 'be',
  BZD: 'en_BZ',
  CAD: 'en_CA',
  CDF: 'fr_CD',
  CHF: 'de_CH',
  CLP: 'es_CL',
  CNY: 'zh_Hans_CN',
  COP: 'es_CO',
  CRC: 'es_CR',
  CUP: 'es_CU',
  CVE: 'pt_CV',
  CZK: 'cs',
  DJF: 'fr_DJ',
  DKK: 'da_DK',
  DOP: 'es_DO',
  DZD: 'ar_DZ',
  EGP: 'ar_EG',
  ERN: 'ti_ER',
  ETB: 'am',
  EUR: 'de',
  FJD: 'en_FJ',
  FKP: 'en_FK',
  GBP: 'en',
  GEL: 'ka',
  GHS: 'en_GH',
  GIP: 'en_GI',
  GMD: 'en_GM',
  GNF: 'fr_GN',
  GTQ: 'es_GT',
  GYD: 'en_GY',
  HKD: 'zh_Hans_HK',
  HNL: 'es_HN',
  HRK: 'hr_HR',
  HTG: 'en',
  HUF: 'hu_HU',
  IDR: 'id',
  ILS: 'he',
  INR: 'en_IN',
  IQD: 'ar_IQ',
  IRR: 'fa_IR',
  ISK: 'is',
  JMD: 'en_JM',
  JOD: 'ar_JO',
  JPY: 'ja',
  KES: 'en_KE',
  KGS: 'ky',
  KHR: 'km',
  KMF: 'ar',
  KPW: 'ko_KP',
  KRW: 'ko_KR',
  KWD: 'ar_KW',
  KYD: 'en_KY',
  KZT: 'kk',
  LAK: 'lo',
  LBP: 'ar_LB',
  LKR: 'si',
  LRD: 'en_LR',
  LSL: 'en_LS',
  LYD: 'ar_LY',
  MAD: 'ar',
  MDL: 'ro',
  MGA: 'fr_MG',
  MKD: 'mk',
  MMK: 'my',
  MNT: 'mn',
  MOP: 'zh',
  MRO: 'ar_MR',
  MUR: 'en_MU',
  MVR: 'en',
  MWK: 'en',
  MXN: 'es_MX',
  MYR: 'ms_MY',
  MZN: 'pt_MZ',
  NAD: 'en_NA',
  NGN: 'en_NG',
  NIO: 'es_NI',
  NOK: 'nb_NO',
  NPR: 'ne',
  NZD: 'en_NZ',
  OMR: 'ar_OM',
  PAB: 'es_PA',
  PEN: 'es_PE',
  PGK: 'en_PG',
  PHP: 'fil',
  PKR: 'ur_PK',
  PLN: 'pl',
  PYG: 'es_PY',
  QAR: 'ar_QA',
  RON: 'ro',
  RSD: 'sr',
  RUB: 'ru',
  RWF: 'rw',
  SAR: 'ar_SA',
  SBD: 'en_SB',
  SCR: 'en_SC',
  SDG: 'ar_SD',
  SEK: 'sv_SE',
  SGD: 'en_SG',
  SHP: 'en_SH',
  SLL: 'en_SL',
  SOS: 'so_SO',
  SRD: 'nl_SR',
  SSP: 'en',
  STD: 'pt_ST',
  SYP: 'ar_SY',
  SZL: 'en_SZ',
  THB: 'th',
  TJS: 'en',
  TMT: 'tk',
  TND: 'ar_TN',
  TOP: 'to',
  TRY: 'tr_TR',
  TTD: 'en_TT',
  TWD: 'zh_Hant_TW',
  TZS: 'sw_TZ',
  UAH: 'uk',
  UGX: 'en_UG',
  USD: 'en_US',
  UYU: 'es_UY',
  UZS: 'uz',
  VEF: 'es_VE',
  VND: 'vi',
  VUV: 'en_BI',
  WST: 'en_AS',
  XAF: 'fr',
  XCD: 'en',
  XOF: 'fr',
  XPF: 'fr_PF',
  YER: 'ar_YE',
  ZAR: 'zu',
  ZMW: 'en_ZM',
  ZWL: 'en_ZW'
};

var symbols = {
  'AED': 'د.إ',
  'AFN': '؋',
  'ALL': 'L',
  'AMD': 'AMD',
  'ANG': 'ƒ',
  'AOA': 'Kz',
  'ARS': '$',
  'AUD': '$',
  'AWG': 'ƒ',
  'AZN': '₼',
  'BAM': 'KM',
  'BBD': '$',
  'BDT': '৳',
  'BGN': 'лв',
  'BHD': '.د.ب',
  'BIF': 'FBu',
  'BMD': '$',
  'BND': '$',
  'BOB': 'Bs.',
  'BRL': 'R$',
  'BSD': '$',
  'BTC': '฿',
  'BTN': 'Nu.',
  'BWP': 'P',
  'BYR': 'p.',
  'BZD': 'BZ$',
  'CAD': '$',
  'CDF': 'FC',
  'CHF': 'Fr.',
  'CLP': '$',
  'CNY': '¥',
  'COP': '$',
  'CRC': '₡',
  'CUC': '$',
  'CUP': '₱',
  'CVE': '$',
  'CZK': 'Kč',
  'DJF': 'Fdj',
  'DKK': 'kr',
  'DOP': 'RD$',
  'DZD': 'دج',
  'EEK': 'kr',
  'EGP': '£',
  'ERN': 'Nfk',
  'ETB': 'Br',
  'ETH': 'Ξ',
  'EUR': '€',
  'FJD': '$',
  'FKP': '£',
  'GBP': '£',
  'GEL': '₾',
  'GGP': '£',
  'GHC': '₵',
  'GHS': 'GH₵',
  'GIP': '£',
  'GMD': 'D',
  'GNF': 'FG',
  'GTQ': 'Q',
  'GYD': '$',
  'HKD': '$',
  'HNL': 'L',
  'HRK': 'kn',
  'HTG': 'G',
  'HUF': 'Ft',
  'IDR': 'Rp',
  'ILS': '₪',
  'IMP': '£',
  'INR': '₹',
  'IQD': 'ع.د',
  'IRR': '﷼',
  'ISK': 'kr',
  'JEP': '£',
  'JMD': 'J$',
  'JOD': 'JD',
  'JPY': '¥',
  'KES': 'KSh',
  'KGS': 'лв',
  'KHR': '៛',
  'KMF': 'CF',
  'KPW': '₩',
  'KRW': '₩',
  'KWD': 'KD',
  'KYD': '$',
  'KZT': '₸',
  'LAK': '₭',
  'LBP': '£',
  'LKR': '₨',
  'LRD': '$',
  'LSL': 'M',
  'LTC': 'Ł',
  'LTL': 'Lt',
  'LVL': 'Ls',
  'LYD': 'LD',
  'MAD': 'MAD',
  'MDL': 'lei',
  'MGA': 'Ar',
  'MKD': 'ден',
  'MMK': 'K',
  'MNT': '₮',
  'MOP': 'MOP$',
  'MUR': '₨',
  'MVR': 'Rf',
  'MWK': 'MK',
  'MXN': '$',
  'MYR': 'RM',
  'MZN': 'MT',
  'NAD': '$',
  'NGN': '₦',
  'NIO': 'C$',
  'NOK': 'kr',
  'NPR': '₨',
  'NZD': '$',
  'OMR': '﷼',
  'PAB': 'B/.',
  'PEN': 'S/.',
  'PGK': 'K',
  'PHP': '₱',
  'PKR': '₨',
  'PLN': 'zł',
  'PYG': 'Gs',
  'QAR': '﷼',
  'RMB': '￥',
  'RON': 'lei',
  'RSD': 'Дин.',
  'RUB': '₽',
  'RWF': 'R₣',
  'SAR': '﷼',
  'SBD': '$',
  'SCR': '₨',
  'SDG': 'ج.س.',
  'SEK': 'kr',
  'SGD': '$',
  'SHP': '£',
  'SLL': 'Le',
  'SOS': 'S',
  'SRD': '$',
  'SSP': '£',
  'STD': 'Db',
  'SVC': '$',
  'SYP': '£',
  'SZL': 'E',
  'THB': '฿',
  'TJS': 'SM',
  'TMT': 'T',
  'TND': 'د.ت',
  'TOP': 'T$',
  'TRL': '₤',
  'TRY': '₺',
  'TTD': 'TT$',
  'TVD': '$',
  'TWD': 'NT$',
  'TZS': 'TSh',
  'UAH': '₴',
  'UGX': 'USh',
  'USD': '$',
  'UYU': '$U',
  'UZS': 'лв',
  'VEF': 'Bs',
  'VND': '₫',
  'VUV': 'VT',
  'WST': 'WS$',
  'XAF': 'FCFA',
  'XBT': 'Ƀ',
  'XCD': '$',
  'XOF': 'CFA',
  'XPF': '₣',
  'YER': '﷼',
  'ZAR': 'R',
  'ZWD': 'Z$'
};

var ReactCurrencyFormatter = function ReactCurrencyFormatter(props) {
  var getFormatter = function getFormatter(options) {
    var locale = void 0,
        currency = void 0,
        symbol = void 0,
        pattern = void 0,
        decimal = void 0,
        group = void 0;

    // Helper Functions
    var isUndefined = function isUndefined(o) {
      return typeof o === 'undefined';
    };

    var toFixed = function toFixed(n, precision) {
      return (+(Math.round(+(n + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
    };

    // Perform checks on inputs and set up defaults as needed (defaults to en, USD)
    if (isUndefined(options)) {
      options = {};
    }

    currency = isUndefined(options.currency) ? 'USD' : options.currency.toUpperCase();
    locale = isUndefined(options.locale) ? locales[defaultLocales[currency]] : locales[options.locale];

    if (!isUndefined(locale.h)) locale = locales[locale.h]; // Locale inheritance

    symbol = isUndefined(options.symbol) ? symbols[currency] : options.symbol;

    if (isUndefined(symbol)) symbol = currency; // In case we don't have the symbol, just use the ccy code

    pattern = isUndefined(options.pattern) ? locale.p : options.pattern;
    decimal = isUndefined(options.decimal) ? locale.d : options.decimal;
    group = isUndefined(options.group) ? locale.g : options.group;

    //console.log(locale);

    // encodePattern Function - returns a few simple characteristics of the pattern provided
    var encodePattern = function encodePattern(pattern) {
      var decimalPlaces = 0;
      var frontPadding = '';
      var backPadding = '';
      var groupLengths = [];

      //console.log(pattern);

      var patternStarted = false;
      var decimalsStarted = false;
      var patternEnded = false;

      var currentGroupLength = 0;
      var zeroLength = 0;

      for (var i = 0; i < pattern.length; ++i) {
        var c = pattern[i];

        if (!patternStarted && ['#', '0', ',', '.'].indexOf(c) > -1) {
          patternStarted = true;
        }

        if (!patternStarted) {
          frontPadding += c;
        }

        switch (c) {
          case '#':
            ++currentGroupLength;
            break;

          case '0':
            if (decimalsStarted) {
              ++decimalPlaces;
            } else {
              ++currentGroupLength;++zeroLength;
            }
            break;

          case ',':
            groupLengths.push(currentGroupLength);
            currentGroupLength = 0;
            break;

          case '.':
            groupLengths.push(currentGroupLength);
            decimalsStarted = true;
            break;
        }

        if (patternStarted && !(['#', '0', ',', '.'].indexOf(c) > -1)) {
          patternEnded = true;

          if (!decimalsStarted) {
            groupLengths.push(currentGroupLength);
          }
        }

        if (patternEnded) {
          backPadding += c;
        }
      }

      var encodedPattern = {
        decimalPlaces: decimalPlaces,
        frontPadding: frontPadding,
        backPadding: backPadding,
        groupLengths: groupLengths,
        zeroLength: zeroLength
      };

      return encodedPattern;
    };

    // Zero Padding helper function
    var pad = function pad(n, width) {
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
    };

    // Format function
    var format = function format(n, f) {
      var formattedNumber = toFixed(Math.abs(n), f.decimalPlaces);

      var splitNumber = formattedNumber.split(".");

      // i.e. we actually have some sort of grouping in the values
      if (f.groupLengths.length > 1) {
        var segment = "";
        var cursor = splitNumber[0].length;
        var groupIndex = f.groupLengths.length - 1;

        while (cursor > 0) {
          if (groupIndex <= 0) {
            groupIndex = 1;
          } // Always reset to the first group length if the number is big

          var currentGroupLength = f.groupLengths[groupIndex];

          var start = cursor - currentGroupLength;

          segment = splitNumber[0].substring(start, cursor) + f.group + segment;

          cursor -= currentGroupLength;

          --groupIndex;
        }

        segment = segment.substring(0, segment.length - 1);
        //console.log(segment);
      }

      if (segment.length < f.zeroLength) {
        segment = pad(segment, f.zeroLength);
      }

      var formattedNumber = f.frontPadding + segment + (isUndefined(splitNumber[1]) ? '' : f.decimal + splitNumber[1]) + f.backPadding;

      return formattedNumber.replace('!', symbol);
    };

    // Use encode function to work out pattern
    var patternArray = pattern.split(";");
    var positiveFormat = encodePattern(patternArray[0]);

    positiveFormat.symbol = symbol;
    positiveFormat.decimal = decimal;
    positiveFormat.group = group;

    var negativeFormat = isUndefined(patternArray[1]) ? encodePattern("-" + patternArray[0]) : encodePattern(patternArray[1]);

    negativeFormat.symbol = symbol;
    negativeFormat.decimal = decimal;
    negativeFormat.group = group;

    var zero = isUndefined(patternArray[2]) ? format(0, positiveFormat) : patternArray[2];

    if (!isUndefined(patternArray[2])) {
      zeroFormat = patternArray[2];
    }

    return function (n) {
      var formattedNumber = void 0;
      n = Number(n);
      if (n > 0) {
        formattedNumber = format(n, positiveFormat);
      } else if (n == 0) {
        formattedNumber = zero.replace('!', symbol);
      } else {
        formattedNumber = format(n, negativeFormat);
      }
      return formattedNumber;
    };
  };

  var format = function format(number, options) {
    var formatterFunction = getFormatter(options);

    return formatterFunction(number);
  };

  var quantity = props.quantity,
      currency = props.currency,
      symbol = props.symbol,
      locale = props.locale,
      decimal = props.decimal,
      group = props.group,
      pattern = props.pattern;


  return format(props.quantity, {
    currency: currency,
    symbol: symbol,
    locale: locale,
    decimal: decimal,
    group: group,
    pattern: pattern
  });
};

ReactCurrencyFormatter.defaultProps = {
  currency: 'USD'
};

ReactCurrencyFormatter.propTypes = {
  quantity: PropTypes.number.isRequired,
  currency: PropTypes.string,
  symbol: PropTypes.string,
  locale: PropTypes.string,
  decimal: PropTypes.string,
  group: PropTypes.string,
  pattern: PropTypes.string
};

return ReactCurrencyFormatter;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlci9kaXN0L3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlci51bWQuanMiXSwibmFtZXMiOlsiTUFYX1JBVElORyIsIk1JTl9SQVRJTkciLCJQcm9kdWN0IiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwicmF0aW5nIiwidXNlU3RhdGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYXNQcmltZSIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFuQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUFuQjs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQztBQUFFQyxJQUFGO0FBQU1DLE9BQU47QUFBYUMsT0FBYjtBQUFvQkMsYUFBcEI7QUFBaUNDLFVBQWpDO0FBQTJDQztBQUEzQyxDQUFELEtBQXdEO0FBQUE7O0FBQ3RFLFFBQU07QUFBQSxPQUFDQztBQUFELE1BQVdDLCtDQUFRLENBQ3ZCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCYixVQUFVLEdBQUdDLFVBQWIsR0FBMEIsQ0FBM0MsQ0FBWCxJQUE0REEsVUFEckMsQ0FBekI7QUFHQSxRQUFNO0FBQUEsT0FBQ2E7QUFBRCxNQUFhSiwrQ0FBUSxDQUFDQyxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBakIsQ0FBM0I7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUlOO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFQyxLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLGdCQUFLSjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsZ0JBQ0dXLEtBQUssQ0FBQ04sTUFBRCxDQUFMLENBQ0VPLElBREYsR0FFRUMsR0FGRixDQUVNLENBQUNDLENBQUQsRUFBSUMsQ0FBSixrQkFDSCw4REFBQyw0REFBRDtBQUFVLGlCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFXRTtBQUFBLGdCQUFJYjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsRUFZR1EsUUFBUSxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdCRCxDQXJCRDs7R0FBTVosTzs7S0FBQUEsTztBQXVCTiwrREFBZUEsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBLENBQUMsS0FBNEQsNEJBQTRCLG1CQUFPLENBQUMsNENBQU8sR0FBRyxtQkFBTyxDQUFDLHNEQUFZO0FBQy9ILENBQUMsQ0FDd0U7QUFDekUsQ0FBQyxvQ0FBb0M7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJEQUEyRDs7QUFFM0Q7O0FBRUEsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixvQkFBb0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZjZlM2NlZTE0MDE4ZjYxNDIyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiO1xyXG5cclxuY29uc3QgTUFYX1JBVElORyA9IDU7XHJcbmNvbnN0IE1JTl9SQVRJTkcgPSAxO1xyXG5cclxuY29uc3QgUHJvZHVjdCA9ICh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtyYXRpbmddID0gdXNlU3RhdGUoXHJcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTUFYX1JBVElORyAtIE1JTl9SQVRJTkcgKyAxKSkgKyBNSU5fUkFUSU5HXHJcbiAgKTtcclxuICBjb25zdCBbaGFzUHJpbWVdID0gdXNlU3RhdGUoTWF0aC5yYW5kb20oKSA8IDAuNSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPntjYXRlZ29yeX08L3A+XHJcbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XHJcbiAgICAgIDxoND57dGl0bGV9PC9oND5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgPFN0YXJJY29uIGNsYXNzTmFtZT1cImgtNVwiIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIHtoYXNQcmltZSAmJiA8cD5IYXMgUHJpbWUgRGVsaXZlcnk8L3A+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdwcm9wLXR5cGVzJykpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsncmVhY3QnLCAncHJvcC10eXBlcyddLCBmYWN0b3J5KSA6XG5cdChnbG9iYWwucmVhY3RDdXJyZW5jeUZvcm1hdHRlciA9IGZhY3RvcnkoZ2xvYmFsLlJlYWN0LGdsb2JhbC5Qcm9wVHlwZXMpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChyZWFjdCxQcm9wVHlwZXMpIHsgJ3VzZSBzdHJpY3QnO1xuXG5yZWFjdCA9IHJlYWN0ICYmIHJlYWN0Lmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyByZWFjdFsnZGVmYXVsdCddIDogcmVhY3Q7XG5Qcm9wVHlwZXMgPSBQcm9wVHlwZXMgJiYgUHJvcFR5cGVzLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBQcm9wVHlwZXNbJ2RlZmF1bHQnXSA6IFByb3BUeXBlcztcblxudmFyIGxvY2FsZXMgPSB7XG4gIGFmOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhZl9OQToge1xuICAgIGg6ICdhZidcbiAgfSxcbiAgYWZfWkE6IHtcbiAgICBoOiAnYWYnXG4gIH0sXG4gIGFncToge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYWdxX0NNOiB7XG4gICAgaDogJ2FncSdcbiAgfSxcbiAgYWs6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGFrX0dIOiB7XG4gICAgaDogJ2FrJ1xuICB9LFxuICBhbToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYW1fRVQ6IHtcbiAgICBoOiAnYW0nXG4gIH0sXG4gIGFyOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYXJfMDAxOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9BRToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfQkg6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0RKOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9EWjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGFyX0VHOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9FSDoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfRVI6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0lMOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9JUToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfSk86IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0tNOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9LVzoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfTEI6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhcl9MWToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGFyX01BOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYXJfTVI6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhcl9PTToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfUFM6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX1FBOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9TQToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfU0Q6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX1NPOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9TUzoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfU1k6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX1REOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9UTjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGFyX1lFOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhczoge1xuICAgIHA6ICchICMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGFzX0lOOiB7XG4gICAgaDogJ2FzJ1xuICB9LFxuICBhc2E6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBhc2FfVFo6IHtcbiAgICBoOiAnYXNhJ1xuICB9LFxuICBhc3Q6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhc3RfRVM6IHtcbiAgICBoOiAnYXN0J1xuICB9LFxuICBhejoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGF6X0N5cmw6IHtcbiAgICBoOiAnYXonXG4gIH0sXG4gIGF6X0N5cmxfQVo6IHtcbiAgICBoOiAnYXonXG4gIH0sXG4gIGF6X0xhdG46IHtcbiAgICBoOiAnYXonXG4gIH0sXG4gIGF6X0xhdG5fQVo6IHtcbiAgICBoOiAnYXonXG4gIH0sXG4gIGJhczoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGJhc19DTToge1xuICAgIGg6ICdiYXMnXG4gIH0sXG4gIGJlOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYmVfQlk6IHtcbiAgICBoOiAnYmUnXG4gIH0sXG4gIGJlbToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYmVtX1pNOiB7XG4gICAgaDogJ2JlbSdcbiAgfSxcbiAgYmV6OiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBiZXpfVFo6IHtcbiAgICBoOiAnYmV6J1xuICB9LFxuICBiZzoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGJnX0JHOiB7XG4gICAgaDogJ2JnJ1xuICB9LFxuICBibToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYm1fTUw6IHtcbiAgICBoOiAnYm0nXG4gIH0sXG4gIGJuOiB7XG4gICAgcDogJyMsIyMsIyMwLjAwIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBibl9CRDoge1xuICAgIGg6ICdibidcbiAgfSxcbiAgYm5fSU46IHtcbiAgICBoOiAnYm4nXG4gIH0sXG4gIGJvOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYm9fQ046IHtcbiAgICBoOiAnYm8nXG4gIH0sXG4gIGJvX0lOOiB7XG4gICAgaDogJ2JvJ1xuICB9LFxuICBicjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGJyX0ZSOiB7XG4gICAgaDogJ2JyJ1xuICB9LFxuICBicng6IHtcbiAgICBwOiAnISAjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBicnhfSU46IHtcbiAgICBoOiAnYnJ4J1xuICB9LFxuICBiczoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGJzX0N5cmw6IHtcbiAgICBoOiAnYnMnXG4gIH0sXG4gIGJzX0N5cmxfQkE6IHtcbiAgICBoOiAnYnMnXG4gIH0sXG4gIGJzX0xhdG46IHtcbiAgICBoOiAnYnMnXG4gIH0sXG4gIGJzX0xhdG5fQkE6IHtcbiAgICBoOiAnYnMnXG4gIH0sXG4gIGNhOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgY2FfQUQ6IHtcbiAgICBoOiAnY2EnXG4gIH0sXG4gIGNhX0VTOiB7XG4gICAgaDogJ2NhJ1xuICB9LFxuICBjYV9FU19WQUxFTkNJQToge1xuICAgIGg6ICdjYSdcbiAgfSxcbiAgY2FfRlI6IHtcbiAgICBoOiAnY2EnXG4gIH0sXG4gIGNhX0lUOiB7XG4gICAgaDogJ2NhJ1xuICB9LFxuICBjZToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGNlX1JVOiB7XG4gICAgaDogJ2NlJ1xuICB9LFxuICBjZ2c6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGNnZ19VRzoge1xuICAgIGg6ICdjZ2cnXG4gIH0sXG4gIGNocjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgY2hyX1VTOiB7XG4gICAgaDogJ2NocidcbiAgfSxcbiAgY2tiOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBja2JfSVE6IHtcbiAgICBoOiAnY2tiJ1xuICB9LFxuICBja2JfSVI6IHtcbiAgICBoOiAnY2tiJ1xuICB9LFxuICBjczoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGNzX0NaOiB7XG4gICAgaDogJ2NzJ1xuICB9LFxuICBjdToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGN1X1JVOiB7XG4gICAgaDogJ2N1J1xuICB9LFxuICBjeToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgY3lfR0I6IHtcbiAgICBoOiAnY3knXG4gIH0sXG4gIGRhOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZGFfREs6IHtcbiAgICBoOiAnZGEnXG4gIH0sXG4gIGRhX0dMOiB7XG4gICAgaDogJ2RhJ1xuICB9LFxuICBkYXY6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGRhdl9LRToge1xuICAgIGg6ICdkYXYnXG4gIH0sXG4gIGRlOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZGVfQVQ6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBkZV9CRToge1xuICAgIGg6ICdkZSdcbiAgfSxcbiAgZGVfQ0g6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnXFwnJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZGVfREU6IHtcbiAgICBoOiAnZGUnXG4gIH0sXG4gIGRlX0xJOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICdcXCcnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBkZV9MVToge1xuICAgIGg6ICdkZSdcbiAgfSxcbiAgZGplOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBkamVfTkU6IHtcbiAgICBoOiAnZGplJ1xuICB9LFxuICBkc2I6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBkc2JfREU6IHtcbiAgICBoOiAnZHNiJ1xuICB9LFxuICBkdWE6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBkdWFfQ006IHtcbiAgICBoOiAnZHVhJ1xuICB9LFxuICBkeW86IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBkeW9fU046IHtcbiAgICBoOiAnZHlvJ1xuICB9LFxuICBkejoge1xuICAgIHA6ICchIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZHpfQlQ6IHtcbiAgICBoOiAnZHonXG4gIH0sXG4gIGVidToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZWJ1X0tFOiB7XG4gICAgaDogJ2VidSdcbiAgfSxcbiAgZWU6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVlX0dIOiB7XG4gICAgaDogJ2VlJ1xuICB9LFxuICBlZV9URzoge1xuICAgIGg6ICdlZSdcbiAgfSxcbiAgZWw6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlbF9DWToge1xuICAgIGg6ICdlbCdcbiAgfSxcbiAgZWxfR1I6IHtcbiAgICBoOiAnZWwnXG4gIH0sXG4gIGVuOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlbl8wMDE6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuXzE1MDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVuX0FHOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9BSToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQVM6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0FUOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZW5fQVU6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0JCOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9CRToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVuX0JJOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9CTToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQlM6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0JXOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9CWjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQ0E6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0NDOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9DSDoge1xuICAgIHA6ICchICMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZW5fQ0s6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0NNOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9DWDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQ1k6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0RFOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9ERzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fREs6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0RNOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9FUjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fRkk6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVuX0ZKOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9GSzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fRk06IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0dCOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9HRDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fR0c6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0dIOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9HSToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fR006IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0dVOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9HWToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fSEs6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0lFOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9JTDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fSU06IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0lOOiB7XG4gICAgcDogJyEgIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZW5fSU86IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0pFOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9KTToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fS0U6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0tJOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9LTjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fS1k6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0xDOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9MUjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTFM6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX01HOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9NSDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTU86IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX01QOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9NUzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTVQ6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX01VOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9NVzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTVk6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX05BOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9ORjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTkc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX05MOiB7XG4gICAgcDogJyEgIywjIzAuMDA7ISAtIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZW5fTlI6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX05VOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9OWjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fUEc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1BIOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9QSzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fUE46IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1BSOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9QVzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fUlc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NCOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TQzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU0Q6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NFOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlbl9TRzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU0g6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NJOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TTDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU1M6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NYOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TWjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVEM6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1RLOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9UTzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVFQ6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1RWOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9UWjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVUc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1VNOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9VUzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVVNfUE9TSVg6IHtcbiAgICBwOiAnISAjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlbl9WQzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVkc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1ZJOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9WVToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fV1M6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1pBOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlbl9aTToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fWlc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVvOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlb18wMDE6IHtcbiAgICBoOiAnZW8nXG4gIH0sXG4gIGVzOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfNDE5OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlc19BUjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVzX0JPOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19CUjoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfQ0w6IHtcbiAgICBwOiAnISMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfQ086IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlc19DUjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGVzX0NVOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19ETzoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfRUE6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX0VDOiB7XG4gICAgcDogJyEjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVzX0VTOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19HUToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfR1Q6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX0hOOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19JQzoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfTVg6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX05JOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19QQToge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfUEU6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX1BIOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19QUjoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfUFk6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshIC0jLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlc19TVjoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfVVM6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX1VZOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfVkU6IHtcbiAgICBwOiAnISMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXQ6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBldF9FRToge1xuICAgIGg6ICdldCdcbiAgfSxcbiAgZXU6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBldV9FUzoge1xuICAgIGg6ICdldSdcbiAgfSxcbiAgZXdvOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXdvX0NNOiB7XG4gICAgaDogJ2V3bydcbiAgfSxcbiAgZmE6IHtcbiAgICBwOiAn4oCOISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGZhX0FGOiB7XG4gICAgaDogJ2ZhJ1xuICB9LFxuICBmYV9JUjoge1xuICAgIGg6ICdmYSdcbiAgfSxcbiAgZmY6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmZl9DTToge1xuICAgIGg6ICdmZidcbiAgfSxcbiAgZmZfR046IHtcbiAgICBoOiAnZmYnXG4gIH0sXG4gIGZmX01SOiB7XG4gICAgaDogJ2ZmJ1xuICB9LFxuICBmZl9TTjoge1xuICAgIGg6ICdmZidcbiAgfSxcbiAgZmk6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmaV9GSToge1xuICAgIGg6ICdmaSdcbiAgfSxcbiAgZmlsOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBmaWxfUEg6IHtcbiAgICBoOiAnZmlsJ1xuICB9LFxuICBmbzoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGZvX0RLOiB7XG4gICAgaDogJ2ZvJ1xuICB9LFxuICBmb19GTzoge1xuICAgIGg6ICdmbydcbiAgfSxcbiAgZnI6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmcl9CRToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGZyX0JGOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9CSToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfQko6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0JMOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9DQToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfQ0Q6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0NGOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9DRzoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfQ0g6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGZyX0NJOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9DTToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfREo6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0RaOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9GUjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfR0E6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0dGOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9HTjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfR1A6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0dROiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9IVDoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfS006IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0xVOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZnJfTUE6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmcl9NQzoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfTUY6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX01HOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9NTDoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfTVE6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX01SOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9NVToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfTkM6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX05FOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9QRjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfUE06IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1JFOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9SVzoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfU0M6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1NOOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9TWToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfVEQ6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1RHOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9UTjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfVlU6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1dGOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9ZVDoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnVyOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZnVyX0lUOiB7XG4gICAgaDogJ2Z1cidcbiAgfSxcbiAgZnk6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshICMsIyMwLjAwLScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmeV9OTDoge1xuICAgIGg6ICdmeSdcbiAgfSxcbiAgZ2E6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGdhX0lFOiB7XG4gICAgaDogJ2dhJ1xuICB9LFxuICBnZDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZ2RfR0I6IHtcbiAgICBoOiAnZ2QnXG4gIH0sXG4gIGdsOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZ2xfRVM6IHtcbiAgICBoOiAnZ2wnXG4gIH0sXG4gIGdzdzoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAn4oCZJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZ3N3X0NIOiB7XG4gICAgaDogJ2dzdydcbiAgfSxcbiAgZ3N3X0ZSOiB7XG4gICAgaDogJ2dzdydcbiAgfSxcbiAgZ3N3X0xJOiB7XG4gICAgaDogJ2dzdydcbiAgfSxcbiAgZ3U6IHtcbiAgICBwOiAnISMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGd1X0lOOiB7XG4gICAgaDogJ2d1J1xuICB9LFxuICBndXo6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGd1el9LRToge1xuICAgIGg6ICdndXonXG4gIH0sXG4gIGd2OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBndl9JTToge1xuICAgIGg6ICdndidcbiAgfSxcbiAgaGE6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBoYV9HSDoge1xuICAgIGg6ICdoYSdcbiAgfSxcbiAgaGFfTkU6IHtcbiAgICBoOiAnaGEnXG4gIH0sXG4gIGhhX05HOiB7XG4gICAgaDogJ2hhJ1xuICB9LFxuICBoYXc6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGhhd19VUzoge1xuICAgIGg6ICdoYXcnXG4gIH0sXG4gIGhlOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgaGVfSUw6IHtcbiAgICBoOiAnaGUnXG4gIH0sXG4gIGhpOiB7XG4gICAgcDogJyEjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBoaV9JTjoge1xuICAgIGg6ICdoaSdcbiAgfSxcbiAgaHI6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBocl9CQToge1xuICAgIGg6ICdocidcbiAgfSxcbiAgaHJfSFI6IHtcbiAgICBoOiAnaHInXG4gIH0sXG4gIGhzYjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGhzYl9ERToge1xuICAgIGg6ICdoc2InXG4gIH0sXG4gIGh1OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgaHVfSFU6IHtcbiAgICBoOiAnaHUnXG4gIH0sXG4gIGh5OiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgaHlfQU06IHtcbiAgICBoOiAnaHknXG4gIH0sXG4gIGlkOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBpZF9JRDoge1xuICAgIGg6ICdpZCdcbiAgfSxcbiAgaWc6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGlnX05HOiB7XG4gICAgaDogJ2lnJ1xuICB9LFxuICBpaToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgaWlfQ046IHtcbiAgICBoOiAnaWknXG4gIH0sXG4gIGlzOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgaXNfSVM6IHtcbiAgICBoOiAnaXMnXG4gIH0sXG4gIGl0OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgaXRfQ0g6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnXFwnJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgaXRfSVQ6IHtcbiAgICBoOiAnaXQnXG4gIH0sXG4gIGl0X1NNOiB7XG4gICAgaDogJ2l0J1xuICB9LFxuICBqYToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgamFfSlA6IHtcbiAgICBoOiAnamEnXG4gIH0sXG4gIGpnbzoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGpnb19DTToge1xuICAgIGg6ICdqZ28nXG4gIH0sXG4gIGptYzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgam1jX1RaOiB7XG4gICAgaDogJ2ptYydcbiAgfSxcbiAga2E6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBrYV9HRToge1xuICAgIGg6ICdrYSdcbiAgfSxcbiAga2FiOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBrYWJfRFo6IHtcbiAgICBoOiAna2FiJ1xuICB9LFxuICBrYW06IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGthbV9LRToge1xuICAgIGg6ICdrYW0nXG4gIH0sXG4gIGtkZToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga2RlX1RaOiB7XG4gICAgaDogJ2tkZSdcbiAgfSxcbiAga2VhOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga2VhX0NWOiB7XG4gICAgaDogJ2tlYSdcbiAgfSxcbiAga2hxOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBraHFfTUw6IHtcbiAgICBoOiAna2hxJ1xuICB9LFxuICBraToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga2lfS0U6IHtcbiAgICBoOiAna2knXG4gIH0sXG4gIGtrOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga2tfS1o6IHtcbiAgICBoOiAna2snXG4gIH0sXG4gIGtrajoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga2tqX0NNOiB7XG4gICAgaDogJ2traidcbiAgfSxcbiAga2w6IHtcbiAgICBwOiAnISMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga2xfR0w6IHtcbiAgICBoOiAna2wnXG4gIH0sXG4gIGtsbjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga2xuX0tFOiB7XG4gICAgaDogJ2tsbidcbiAgfSxcbiAga206IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGttX0tIOiB7XG4gICAgaDogJ2ttJ1xuICB9LFxuICBrbjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga25fSU46IHtcbiAgICBoOiAna24nXG4gIH0sXG4gIGtvOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBrb19LUDoge1xuICAgIGg6ICdrbydcbiAgfSxcbiAga29fS1I6IHtcbiAgICBoOiAna28nXG4gIH0sXG4gIGtvazoge1xuICAgIHA6ICchICMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGtva19JTjoge1xuICAgIGg6ICdrb2snXG4gIH0sXG4gIGtzOiB7XG4gICAgcDogJyEgIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga3NfSU46IHtcbiAgICBoOiAna3MnXG4gIH0sXG4gIGtzYjoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga3NiX1RaOiB7XG4gICAgaDogJ2tzYidcbiAgfSxcbiAga3NmOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga3NmX0NNOiB7XG4gICAgaDogJ2tzZidcbiAgfSxcbiAga3NoOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga3NoX0RFOiB7XG4gICAgaDogJ2tzaCdcbiAgfSxcbiAga3c6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGt3X0dCOiB7XG4gICAgaDogJ2t3J1xuICB9LFxuICBreToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGt5X0tHOiB7XG4gICAgaDogJ2t5J1xuICB9LFxuICBsYWc6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGxhZ19UWjoge1xuICAgIGg6ICdsYWcnXG4gIH0sXG4gIGxiOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbGJfTFU6IHtcbiAgICBoOiAnbGInXG4gIH0sXG4gIGxnOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBsZ19VRzoge1xuICAgIGg6ICdsZydcbiAgfSxcbiAgbGt0OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBsa3RfVVM6IHtcbiAgICBoOiAnbGt0J1xuICB9LFxuICBsbjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGxuX0FPOiB7XG4gICAgaDogJ2xuJ1xuICB9LFxuICBsbl9DRDoge1xuICAgIGg6ICdsbidcbiAgfSxcbiAgbG5fQ0Y6IHtcbiAgICBoOiAnbG4nXG4gIH0sXG4gIGxuX0NHOiB7XG4gICAgaDogJ2xuJ1xuICB9LFxuICBsbzoge1xuICAgIHA6ICchIywjIzAuMDA7IS0jLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBsb19MQToge1xuICAgIGg6ICdsbydcbiAgfSxcbiAgbHJjOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbHJjX0lROiB7XG4gICAgaDogJ2xyYydcbiAgfSxcbiAgbHJjX0lSOiB7XG4gICAgaDogJ2xyYydcbiAgfSxcbiAgbHQ6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBsdF9MVDoge1xuICAgIGg6ICdsdCdcbiAgfSxcbiAgbHU6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGx1X0NEOiB7XG4gICAgaDogJ2x1J1xuICB9LFxuICBsdW86IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGx1b19LRToge1xuICAgIGg6ICdsdW8nXG4gIH0sXG4gIGx1eToge1xuICAgIHA6ICchIywjIzAuMDA7IS0gIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbHV5X0tFOiB7XG4gICAgaDogJ2x1eSdcbiAgfSxcbiAgbHY6IHtcbiAgICBwOiAnIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBsdl9MVjoge1xuICAgIGg6ICdsdidcbiAgfSxcbiAgbWFzOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtYXNfS0U6IHtcbiAgICBoOiAnbWFzJ1xuICB9LFxuICBtYXNfVFo6IHtcbiAgICBoOiAnbWFzJ1xuICB9LFxuICBtZXI6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1lcl9LRToge1xuICAgIGg6ICdtZXInXG4gIH0sXG4gIG1mZToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbWZlX01VOiB7XG4gICAgaDogJ21mZSdcbiAgfSxcbiAgbWc6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1nX01HOiB7XG4gICAgaDogJ21nJ1xuICB9LFxuICBtZ2g6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIG1naF9NWjoge1xuICAgIGg6ICdtZ2gnXG4gIH0sXG4gIG1nbzoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1nb19DTToge1xuICAgIGg6ICdtZ28nXG4gIH0sXG4gIG1rOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbWtfTUs6IHtcbiAgICBoOiAnbWsnXG4gIH0sXG4gIG1sOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtbF9JTjoge1xuICAgIGg6ICdtbCdcbiAgfSxcbiAgbW46IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtbl9NTjoge1xuICAgIGg6ICdtbidcbiAgfSxcbiAgbXI6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1yX0lOOiB7XG4gICAgaDogJ21yJ1xuICB9LFxuICBtczoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbXNfQk46IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBtc19NWToge1xuICAgIGg6ICdtcydcbiAgfSxcbiAgbXNfU0c6IHtcbiAgICBoOiAnbXMnXG4gIH0sXG4gIG10OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtdF9NVDoge1xuICAgIGg6ICdtdCdcbiAgfSxcbiAgbXVhOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBtdWFfQ006IHtcbiAgICBoOiAnbXVhJ1xuICB9LFxuICBteToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG15X01NOiB7XG4gICAgaDogJ215J1xuICB9LFxuICBtem46IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG16bl9JUjoge1xuICAgIGg6ICdtem4nXG4gIH0sXG4gIG5hcToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbmFxX05BOiB7XG4gICAgaDogJ25hcSdcbiAgfSxcbiAgbmI6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBuYl9OTzoge1xuICAgIGg6ICduYidcbiAgfSxcbiAgbmJfU0o6IHtcbiAgICBoOiAnbmInXG4gIH0sXG4gIG5kOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBuZF9aVzoge1xuICAgIGg6ICduZCdcbiAgfSxcbiAgbmU6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBuZV9JTjoge1xuICAgIGg6ICduZSdcbiAgfSxcbiAgbmVfTlA6IHtcbiAgICBoOiAnbmUnXG4gIH0sXG4gIG5sOiB7XG4gICAgcDogJyEgIywjIzAuMDA7ISAtIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbmxfQVc6IHtcbiAgICBoOiAnbmwnXG4gIH0sXG4gIG5sX0JFOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbmxfQlE6IHtcbiAgICBoOiAnbmwnXG4gIH0sXG4gIG5sX0NXOiB7XG4gICAgaDogJ25sJ1xuICB9LFxuICBubF9OTDoge1xuICAgIGg6ICdubCdcbiAgfSxcbiAgbmxfU1I6IHtcbiAgICBoOiAnbmwnXG4gIH0sXG4gIG5sX1NYOiB7XG4gICAgaDogJ25sJ1xuICB9LFxuICBubWc6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBubWdfQ006IHtcbiAgICBoOiAnbm1nJ1xuICB9LFxuICBubjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIG5uX05POiB7XG4gICAgaDogJ25uJ1xuICB9LFxuICBubmg6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBubmhfQ006IHtcbiAgICBoOiAnbm5oJ1xuICB9LFxuICBudXM6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG51c19TUzoge1xuICAgIGg6ICdudXMnXG4gIH0sXG4gIG55bjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbnluX1VHOiB7XG4gICAgaDogJ255bidcbiAgfSxcbiAgb206IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG9tX0VUOiB7XG4gICAgaDogJ29tJ1xuICB9LFxuICBvbV9LRToge1xuICAgIGg6ICdvbSdcbiAgfSxcbiAgb3I6IHtcbiAgICBwOiAnISAjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBvcl9JTjoge1xuICAgIGg6ICdvcidcbiAgfSxcbiAgb3M6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBvc19HRToge1xuICAgIGg6ICdvcydcbiAgfSxcbiAgb3NfUlU6IHtcbiAgICBoOiAnb3MnXG4gIH0sXG4gIHBhOiB7XG4gICAgcDogJyEgIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgcGFfQXJhYjoge1xuICAgIGg6ICdwYSdcbiAgfSxcbiAgcGFfQXJhYl9QSzoge1xuICAgIGg6ICdwYSdcbiAgfSxcbiAgcGFfR3VydToge1xuICAgIGg6ICdwYSdcbiAgfSxcbiAgcGFfR3VydV9JTjoge1xuICAgIGg6ICdwYSdcbiAgfSxcbiAgcGw6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBwbF9QTDoge1xuICAgIGg6ICdwbCdcbiAgfSxcbiAgcHJnOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcHJnXzAwMToge1xuICAgIGg6ICdwcmcnXG4gIH0sXG4gIHBzOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcHNfQUY6IHtcbiAgICBoOiAncHMnXG4gIH0sXG4gIHB0OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBwdF9BTzoge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfQlI6IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X0NIOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9DVjoge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfR1E6IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X0dXOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9MVToge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfTU86IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X01aOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9QVDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHB0X1NUOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9UTDoge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcXU6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBxdV9CTzoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHF1X0VDOiB7XG4gICAgaDogJ3F1J1xuICB9LFxuICBxdV9QRToge1xuICAgIGg6ICdxdSdcbiAgfSxcbiAgcm06IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJ+KAmScsXG4gICAgZDogJy4nXG4gIH0sXG4gIHJtX0NIOiB7XG4gICAgaDogJ3JtJ1xuICB9LFxuICBybjoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcm5fQkk6IHtcbiAgICBoOiAncm4nXG4gIH0sXG4gIHJvOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcm9fTUQ6IHtcbiAgICBoOiAncm8nXG4gIH0sXG4gIHJvX1JPOiB7XG4gICAgaDogJ3JvJ1xuICB9LFxuICByb2Y6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHJvZl9UWjoge1xuICAgIGg6ICdyb2YnXG4gIH0sXG4gIHJvb3Q6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBydToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHJ1X0JZOiB7XG4gICAgaDogJ3J1J1xuICB9LFxuICBydV9LRzoge1xuICAgIGg6ICdydSdcbiAgfSxcbiAgcnVfS1o6IHtcbiAgICBoOiAncnUnXG4gIH0sXG4gIHJ1X01EOiB7XG4gICAgaDogJ3J1J1xuICB9LFxuICBydV9SVToge1xuICAgIGg6ICdydSdcbiAgfSxcbiAgcnVfVUE6IHtcbiAgICBoOiAncnUnXG4gIH0sXG4gIHJ3OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICByd19SVzoge1xuICAgIGg6ICdydydcbiAgfSxcbiAgcndrOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICByd2tfVFo6IHtcbiAgICBoOiAncndrJ1xuICB9LFxuICBzYWg6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHNhaF9SVToge1xuICAgIGg6ICdzYWgnXG4gIH0sXG4gIHNhcToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgc2FxX0tFOiB7XG4gICAgaDogJ3NhcSdcbiAgfSxcbiAgc2JwOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzYnBfVFo6IHtcbiAgICBoOiAnc2JwJ1xuICB9LFxuICBzZToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHNlX0ZJOiB7XG4gICAgaDogJ3NlJ1xuICB9LFxuICBzZV9OTzoge1xuICAgIGg6ICdzZSdcbiAgfSxcbiAgc2VfU0U6IHtcbiAgICBoOiAnc2UnXG4gIH0sXG4gIHNlaDoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgc2VoX01aOiB7XG4gICAgaDogJ3NlaCdcbiAgfSxcbiAgc2VzOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzZXNfTUw6IHtcbiAgICBoOiAnc2VzJ1xuICB9LFxuICBzZzoge1xuICAgIHA6ICchIywjIzAuMDA7IS0jLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzZ19DRjoge1xuICAgIGg6ICdzZydcbiAgfSxcbiAgc2hpOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzaGlfTGF0bjoge1xuICAgIGg6ICdzaGknXG4gIH0sXG4gIHNoaV9MYXRuX01BOiB7XG4gICAgaDogJ3NoaSdcbiAgfSxcbiAgc2hpX1Rmbmc6IHtcbiAgICBoOiAnc2hpJ1xuICB9LFxuICBzaGlfVGZuZ19NQToge1xuICAgIGg6ICdzaGknXG4gIH0sXG4gIHNpOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzaV9MSzoge1xuICAgIGg6ICdzaSdcbiAgfSxcbiAgc2s6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBza19TSzoge1xuICAgIGg6ICdzaydcbiAgfSxcbiAgc2w6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzbF9TSToge1xuICAgIGg6ICdzbCdcbiAgfSxcbiAgc21uOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzbW5fRkk6IHtcbiAgICBoOiAnc21uJ1xuICB9LFxuICBzbjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgc25fWlc6IHtcbiAgICBoOiAnc24nXG4gIH0sXG4gIHNvOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzb19ESjoge1xuICAgIGg6ICdzbydcbiAgfSxcbiAgc29fRVQ6IHtcbiAgICBoOiAnc28nXG4gIH0sXG4gIHNvX0tFOiB7XG4gICAgaDogJ3NvJ1xuICB9LFxuICBzb19TTzoge1xuICAgIGg6ICdzbydcbiAgfSxcbiAgc3E6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzcV9BTDoge1xuICAgIGg6ICdzcSdcbiAgfSxcbiAgc3FfTUs6IHtcbiAgICBoOiAnc3EnXG4gIH0sXG4gIHNxX1hLOiB7XG4gICAgaDogJ3NxJ1xuICB9LFxuICBzcjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHNyX0N5cmw6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0N5cmxfQkE6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0N5cmxfTUU6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0N5cmxfUlM6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0N5cmxfWEs6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0xhdG46IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0xhdG5fQkE6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0xhdG5fTUU6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0xhdG5fUlM6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHNyX0xhdG5fWEs6IHtcbiAgICBoOiAnc3InXG4gIH0sXG4gIHN2OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgc3ZfQVg6IHtcbiAgICBoOiAnc3YnXG4gIH0sXG4gIHN2X0ZJOiB7XG4gICAgaDogJ3N2J1xuICB9LFxuICBzdl9TRToge1xuICAgIGg6ICdzdidcbiAgfSxcbiAgc3c6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHN3X0NEOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzd19LRToge1xuICAgIGg6ICdzdydcbiAgfSxcbiAgc3dfVFo6IHtcbiAgICBoOiAnc3cnXG4gIH0sXG4gIHN3X1VHOiB7XG4gICAgaDogJ3N3J1xuICB9LFxuICB0YToge1xuICAgIHA6ICchICMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHRhX0lOOiB7XG4gICAgaDogJ3RhJ1xuICB9LFxuICB0YV9MSzoge1xuICAgIGg6ICd0YSdcbiAgfSxcbiAgdGFfTVk6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0YV9TRzoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHRlOiB7XG4gICAgcDogJyEjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0ZV9JTjoge1xuICAgIGg6ICd0ZSdcbiAgfSxcbiAgdGVvOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0ZW9fS0U6IHtcbiAgICBoOiAndGVvJ1xuICB9LFxuICB0ZW9fVUc6IHtcbiAgICBoOiAndGVvJ1xuICB9LFxuICB0aDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdGhfVEg6IHtcbiAgICBoOiAndGgnXG4gIH0sXG4gIHRpOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0aV9FUjoge1xuICAgIGg6ICd0aSdcbiAgfSxcbiAgdGlfRVQ6IHtcbiAgICBoOiAndGknXG4gIH0sXG4gIHRrOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgdGtfVE06IHtcbiAgICBoOiAndGsnXG4gIH0sXG4gIHRvOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdG9fVE86IHtcbiAgICBoOiAndG8nXG4gIH0sXG4gIHRyOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgdHJfQ1k6IHtcbiAgICBoOiAndHInXG4gIH0sXG4gIHRyX1RSOiB7XG4gICAgaDogJ3RyJ1xuICB9LFxuICB0d3E6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHR3cV9ORToge1xuICAgIGg6ICd0d3EnXG4gIH0sXG4gIHR6bToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHR6bV9NQToge1xuICAgIGg6ICd0em0nXG4gIH0sXG4gIHVnOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB1Z19DTjoge1xuICAgIGg6ICd1ZydcbiAgfSxcbiAgdWs6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB1a19VQToge1xuICAgIGg6ICd1aydcbiAgfSxcbiAgdXI6IHtcbiAgICBwOiAnISAjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB1cl9JTjoge1xuICAgIGg6ICd1cidcbiAgfSxcbiAgdXJfUEs6IHtcbiAgICBoOiAndXInXG4gIH0sXG4gIHV6OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgdXpfQXJhYjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHV6X0FyYWJfQUY6IHtcbiAgICBoOiAndXonXG4gIH0sXG4gIHV6X0N5cmw6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB1el9DeXJsX1VaOiB7XG4gICAgaDogJ3V6J1xuICB9LFxuICB1el9MYXRuOiB7XG4gICAgaDogJ3V6J1xuICB9LFxuICB1el9MYXRuX1VaOiB7XG4gICAgaDogJ3V6J1xuICB9LFxuICB2YWk6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHZhaV9MYXRuOiB7XG4gICAgaDogJ3ZhaSdcbiAgfSxcbiAgdmFpX0xhdG5fTFI6IHtcbiAgICBoOiAndmFpJ1xuICB9LFxuICB2YWlfVmFpaToge1xuICAgIGg6ICd2YWknXG4gIH0sXG4gIHZhaV9WYWlpX0xSOiB7XG4gICAgaDogJ3ZhaSdcbiAgfSxcbiAgdmk6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB2aV9WTjoge1xuICAgIGg6ICd2aSdcbiAgfSxcbiAgdm86IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHZvXzAwMToge1xuICAgIGg6ICd2bydcbiAgfSxcbiAgdnVuOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB2dW5fVFo6IHtcbiAgICBoOiAndnVuJ1xuICB9LFxuICB3YWU6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAn4oCZJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgd2FlX0NIOiB7XG4gICAgaDogJ3dhZSdcbiAgfSxcbiAgeG9nOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgeG9nX1VHOiB7XG4gICAgaDogJ3hvZydcbiAgfSxcbiAgeWF2OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgeWF2X0NNOiB7XG4gICAgaDogJ3lhdidcbiAgfSxcbiAgeWk6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHlpXzAwMToge1xuICAgIGg6ICd5aSdcbiAgfSxcbiAgeW86IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHlvX0JKOiB7XG4gICAgaDogJ3lvJ1xuICB9LFxuICB5b19ORzoge1xuICAgIGg6ICd5bydcbiAgfSxcbiAgeXVlOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB5dWVfSEs6IHtcbiAgICBoOiAneXVlJ1xuICB9LFxuICB6Z2g6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHpnaF9NQToge1xuICAgIGg6ICd6Z2gnXG4gIH0sXG4gIHpoOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB6aF9IYW5zOiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW5zX0NOOiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW5zX0hLOiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW5zX01POiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW5zX1NHOiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW50OiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW50X0hLOiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW50X01POiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6aF9IYW50X1RXOiB7XG4gICAgaDogJ3poJ1xuICB9LFxuICB6dToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgenVfWkE6IHtcbiAgICBoOiAnenUnXG4gIH1cbn07XG5cbnZhciBkZWZhdWx0TG9jYWxlcyA9IHtcbiAgQUVEOiAnYXJfQUUnLFxuICBBRk46ICdmYV9BRicsXG4gIEFMTDogJ3NxJyxcbiAgQU1EOiAnaHknLFxuICBBTkc6ICdubCcsXG4gIEFPQTogJ3B0X0FPJyxcbiAgQVJTOiAnZXNfQVInLFxuICBBVUQ6ICdlbicsXG4gIEFXRzogJ25sX0FXJyxcbiAgQVpOOiAnYXonLFxuICBCQU06ICdicycsXG4gIEJCRDogJ2VuX0JCJyxcbiAgQkRUOiAnYm5fQkQnLFxuICBCR046ICdiZycsXG4gIEJIRDogJ2FyX0JIJyxcbiAgQklGOiAnZnJfQkknLFxuICBCTUQ6ICdlbl9CTScsXG4gIEJORDogJ21zX0JOJyxcbiAgQk9COiAnZXNfQk8nLFxuICBCUkw6ICdwdF9CUicsXG4gIEJTRDogJ2VuX0JTJyxcbiAgQlROOiAnZHonLFxuICBCV1A6ICdlbl9CVycsXG4gIEJZUjogJ2JlJyxcbiAgQlpEOiAnZW5fQlonLFxuICBDQUQ6ICdlbl9DQScsXG4gIENERjogJ2ZyX0NEJyxcbiAgQ0hGOiAnZGVfQ0gnLFxuICBDTFA6ICdlc19DTCcsXG4gIENOWTogJ3poX0hhbnNfQ04nLFxuICBDT1A6ICdlc19DTycsXG4gIENSQzogJ2VzX0NSJyxcbiAgQ1VQOiAnZXNfQ1UnLFxuICBDVkU6ICdwdF9DVicsXG4gIENaSzogJ2NzJyxcbiAgREpGOiAnZnJfREonLFxuICBES0s6ICdkYV9ESycsXG4gIERPUDogJ2VzX0RPJyxcbiAgRFpEOiAnYXJfRFonLFxuICBFR1A6ICdhcl9FRycsXG4gIEVSTjogJ3RpX0VSJyxcbiAgRVRCOiAnYW0nLFxuICBFVVI6ICdkZScsXG4gIEZKRDogJ2VuX0ZKJyxcbiAgRktQOiAnZW5fRksnLFxuICBHQlA6ICdlbicsXG4gIEdFTDogJ2thJyxcbiAgR0hTOiAnZW5fR0gnLFxuICBHSVA6ICdlbl9HSScsXG4gIEdNRDogJ2VuX0dNJyxcbiAgR05GOiAnZnJfR04nLFxuICBHVFE6ICdlc19HVCcsXG4gIEdZRDogJ2VuX0dZJyxcbiAgSEtEOiAnemhfSGFuc19ISycsXG4gIEhOTDogJ2VzX0hOJyxcbiAgSFJLOiAnaHJfSFInLFxuICBIVEc6ICdlbicsXG4gIEhVRjogJ2h1X0hVJyxcbiAgSURSOiAnaWQnLFxuICBJTFM6ICdoZScsXG4gIElOUjogJ2VuX0lOJyxcbiAgSVFEOiAnYXJfSVEnLFxuICBJUlI6ICdmYV9JUicsXG4gIElTSzogJ2lzJyxcbiAgSk1EOiAnZW5fSk0nLFxuICBKT0Q6ICdhcl9KTycsXG4gIEpQWTogJ2phJyxcbiAgS0VTOiAnZW5fS0UnLFxuICBLR1M6ICdreScsXG4gIEtIUjogJ2ttJyxcbiAgS01GOiAnYXInLFxuICBLUFc6ICdrb19LUCcsXG4gIEtSVzogJ2tvX0tSJyxcbiAgS1dEOiAnYXJfS1cnLFxuICBLWUQ6ICdlbl9LWScsXG4gIEtaVDogJ2trJyxcbiAgTEFLOiAnbG8nLFxuICBMQlA6ICdhcl9MQicsXG4gIExLUjogJ3NpJyxcbiAgTFJEOiAnZW5fTFInLFxuICBMU0w6ICdlbl9MUycsXG4gIExZRDogJ2FyX0xZJyxcbiAgTUFEOiAnYXInLFxuICBNREw6ICdybycsXG4gIE1HQTogJ2ZyX01HJyxcbiAgTUtEOiAnbWsnLFxuICBNTUs6ICdteScsXG4gIE1OVDogJ21uJyxcbiAgTU9QOiAnemgnLFxuICBNUk86ICdhcl9NUicsXG4gIE1VUjogJ2VuX01VJyxcbiAgTVZSOiAnZW4nLFxuICBNV0s6ICdlbicsXG4gIE1YTjogJ2VzX01YJyxcbiAgTVlSOiAnbXNfTVknLFxuICBNWk46ICdwdF9NWicsXG4gIE5BRDogJ2VuX05BJyxcbiAgTkdOOiAnZW5fTkcnLFxuICBOSU86ICdlc19OSScsXG4gIE5PSzogJ25iX05PJyxcbiAgTlBSOiAnbmUnLFxuICBOWkQ6ICdlbl9OWicsXG4gIE9NUjogJ2FyX09NJyxcbiAgUEFCOiAnZXNfUEEnLFxuICBQRU46ICdlc19QRScsXG4gIFBHSzogJ2VuX1BHJyxcbiAgUEhQOiAnZmlsJyxcbiAgUEtSOiAndXJfUEsnLFxuICBQTE46ICdwbCcsXG4gIFBZRzogJ2VzX1BZJyxcbiAgUUFSOiAnYXJfUUEnLFxuICBST046ICdybycsXG4gIFJTRDogJ3NyJyxcbiAgUlVCOiAncnUnLFxuICBSV0Y6ICdydycsXG4gIFNBUjogJ2FyX1NBJyxcbiAgU0JEOiAnZW5fU0InLFxuICBTQ1I6ICdlbl9TQycsXG4gIFNERzogJ2FyX1NEJyxcbiAgU0VLOiAnc3ZfU0UnLFxuICBTR0Q6ICdlbl9TRycsXG4gIFNIUDogJ2VuX1NIJyxcbiAgU0xMOiAnZW5fU0wnLFxuICBTT1M6ICdzb19TTycsXG4gIFNSRDogJ25sX1NSJyxcbiAgU1NQOiAnZW4nLFxuICBTVEQ6ICdwdF9TVCcsXG4gIFNZUDogJ2FyX1NZJyxcbiAgU1pMOiAnZW5fU1onLFxuICBUSEI6ICd0aCcsXG4gIFRKUzogJ2VuJyxcbiAgVE1UOiAndGsnLFxuICBUTkQ6ICdhcl9UTicsXG4gIFRPUDogJ3RvJyxcbiAgVFJZOiAndHJfVFInLFxuICBUVEQ6ICdlbl9UVCcsXG4gIFRXRDogJ3poX0hhbnRfVFcnLFxuICBUWlM6ICdzd19UWicsXG4gIFVBSDogJ3VrJyxcbiAgVUdYOiAnZW5fVUcnLFxuICBVU0Q6ICdlbl9VUycsXG4gIFVZVTogJ2VzX1VZJyxcbiAgVVpTOiAndXonLFxuICBWRUY6ICdlc19WRScsXG4gIFZORDogJ3ZpJyxcbiAgVlVWOiAnZW5fQkknLFxuICBXU1Q6ICdlbl9BUycsXG4gIFhBRjogJ2ZyJyxcbiAgWENEOiAnZW4nLFxuICBYT0Y6ICdmcicsXG4gIFhQRjogJ2ZyX1BGJyxcbiAgWUVSOiAnYXJfWUUnLFxuICBaQVI6ICd6dScsXG4gIFpNVzogJ2VuX1pNJyxcbiAgWldMOiAnZW5fWlcnXG59O1xuXG52YXIgc3ltYm9scyA9IHtcbiAgJ0FFRCc6ICfYry7YpScsXG4gICdBRk4nOiAn2IsnLFxuICAnQUxMJzogJ0wnLFxuICAnQU1EJzogJ0FNRCcsXG4gICdBTkcnOiAnxpInLFxuICAnQU9BJzogJ0t6JyxcbiAgJ0FSUyc6ICckJyxcbiAgJ0FVRCc6ICckJyxcbiAgJ0FXRyc6ICfGkicsXG4gICdBWk4nOiAn4oK8JyxcbiAgJ0JBTSc6ICdLTScsXG4gICdCQkQnOiAnJCcsXG4gICdCRFQnOiAn4KezJyxcbiAgJ0JHTic6ICfQu9CyJyxcbiAgJ0JIRCc6ICcu2K8u2KgnLFxuICAnQklGJzogJ0ZCdScsXG4gICdCTUQnOiAnJCcsXG4gICdCTkQnOiAnJCcsXG4gICdCT0InOiAnQnMuJyxcbiAgJ0JSTCc6ICdSJCcsXG4gICdCU0QnOiAnJCcsXG4gICdCVEMnOiAn4Li/JyxcbiAgJ0JUTic6ICdOdS4nLFxuICAnQldQJzogJ1AnLFxuICAnQllSJzogJ3AuJyxcbiAgJ0JaRCc6ICdCWiQnLFxuICAnQ0FEJzogJyQnLFxuICAnQ0RGJzogJ0ZDJyxcbiAgJ0NIRic6ICdGci4nLFxuICAnQ0xQJzogJyQnLFxuICAnQ05ZJzogJ8KlJyxcbiAgJ0NPUCc6ICckJyxcbiAgJ0NSQyc6ICfigqEnLFxuICAnQ1VDJzogJyQnLFxuICAnQ1VQJzogJ+KCsScsXG4gICdDVkUnOiAnJCcsXG4gICdDWksnOiAnS8SNJyxcbiAgJ0RKRic6ICdGZGonLFxuICAnREtLJzogJ2tyJyxcbiAgJ0RPUCc6ICdSRCQnLFxuICAnRFpEJzogJ9iv2KwnLFxuICAnRUVLJzogJ2tyJyxcbiAgJ0VHUCc6ICfCoycsXG4gICdFUk4nOiAnTmZrJyxcbiAgJ0VUQic6ICdCcicsXG4gICdFVEgnOiAnzp4nLFxuICAnRVVSJzogJ+KCrCcsXG4gICdGSkQnOiAnJCcsXG4gICdGS1AnOiAnwqMnLFxuICAnR0JQJzogJ8KjJyxcbiAgJ0dFTCc6ICfigr4nLFxuICAnR0dQJzogJ8KjJyxcbiAgJ0dIQyc6ICfigrUnLFxuICAnR0hTJzogJ0dI4oK1JyxcbiAgJ0dJUCc6ICfCoycsXG4gICdHTUQnOiAnRCcsXG4gICdHTkYnOiAnRkcnLFxuICAnR1RRJzogJ1EnLFxuICAnR1lEJzogJyQnLFxuICAnSEtEJzogJyQnLFxuICAnSE5MJzogJ0wnLFxuICAnSFJLJzogJ2tuJyxcbiAgJ0hURyc6ICdHJyxcbiAgJ0hVRic6ICdGdCcsXG4gICdJRFInOiAnUnAnLFxuICAnSUxTJzogJ+KCqicsXG4gICdJTVAnOiAnwqMnLFxuICAnSU5SJzogJ+KCuScsXG4gICdJUUQnOiAn2Lku2K8nLFxuICAnSVJSJzogJ++3vCcsXG4gICdJU0snOiAna3InLFxuICAnSkVQJzogJ8KjJyxcbiAgJ0pNRCc6ICdKJCcsXG4gICdKT0QnOiAnSkQnLFxuICAnSlBZJzogJ8KlJyxcbiAgJ0tFUyc6ICdLU2gnLFxuICAnS0dTJzogJ9C70LInLFxuICAnS0hSJzogJ+GfmycsXG4gICdLTUYnOiAnQ0YnLFxuICAnS1BXJzogJ+KCqScsXG4gICdLUlcnOiAn4oKpJyxcbiAgJ0tXRCc6ICdLRCcsXG4gICdLWUQnOiAnJCcsXG4gICdLWlQnOiAn4oK4JyxcbiAgJ0xBSyc6ICfigq0nLFxuICAnTEJQJzogJ8KjJyxcbiAgJ0xLUic6ICfigqgnLFxuICAnTFJEJzogJyQnLFxuICAnTFNMJzogJ00nLFxuICAnTFRDJzogJ8WBJyxcbiAgJ0xUTCc6ICdMdCcsXG4gICdMVkwnOiAnTHMnLFxuICAnTFlEJzogJ0xEJyxcbiAgJ01BRCc6ICdNQUQnLFxuICAnTURMJzogJ2xlaScsXG4gICdNR0EnOiAnQXInLFxuICAnTUtEJzogJ9C00LXQvScsXG4gICdNTUsnOiAnSycsXG4gICdNTlQnOiAn4oKuJyxcbiAgJ01PUCc6ICdNT1AkJyxcbiAgJ01VUic6ICfigqgnLFxuICAnTVZSJzogJ1JmJyxcbiAgJ01XSyc6ICdNSycsXG4gICdNWE4nOiAnJCcsXG4gICdNWVInOiAnUk0nLFxuICAnTVpOJzogJ01UJyxcbiAgJ05BRCc6ICckJyxcbiAgJ05HTic6ICfigqYnLFxuICAnTklPJzogJ0MkJyxcbiAgJ05PSyc6ICdrcicsXG4gICdOUFInOiAn4oKoJyxcbiAgJ05aRCc6ICckJyxcbiAgJ09NUic6ICfvt7wnLFxuICAnUEFCJzogJ0IvLicsXG4gICdQRU4nOiAnUy8uJyxcbiAgJ1BHSyc6ICdLJyxcbiAgJ1BIUCc6ICfigrEnLFxuICAnUEtSJzogJ+KCqCcsXG4gICdQTE4nOiAnesWCJyxcbiAgJ1BZRyc6ICdHcycsXG4gICdRQVInOiAn77e8JyxcbiAgJ1JNQic6ICfvv6UnLFxuICAnUk9OJzogJ2xlaScsXG4gICdSU0QnOiAn0JTQuNC9LicsXG4gICdSVUInOiAn4oK9JyxcbiAgJ1JXRic6ICdS4oKjJyxcbiAgJ1NBUic6ICfvt7wnLFxuICAnU0JEJzogJyQnLFxuICAnU0NSJzogJ+KCqCcsXG4gICdTREcnOiAn2Kwu2LMuJyxcbiAgJ1NFSyc6ICdrcicsXG4gICdTR0QnOiAnJCcsXG4gICdTSFAnOiAnwqMnLFxuICAnU0xMJzogJ0xlJyxcbiAgJ1NPUyc6ICdTJyxcbiAgJ1NSRCc6ICckJyxcbiAgJ1NTUCc6ICfCoycsXG4gICdTVEQnOiAnRGInLFxuICAnU1ZDJzogJyQnLFxuICAnU1lQJzogJ8KjJyxcbiAgJ1NaTCc6ICdFJyxcbiAgJ1RIQic6ICfguL8nLFxuICAnVEpTJzogJ1NNJyxcbiAgJ1RNVCc6ICdUJyxcbiAgJ1RORCc6ICfYry7YqicsXG4gICdUT1AnOiAnVCQnLFxuICAnVFJMJzogJ+KCpCcsXG4gICdUUlknOiAn4oK6JyxcbiAgJ1RURCc6ICdUVCQnLFxuICAnVFZEJzogJyQnLFxuICAnVFdEJzogJ05UJCcsXG4gICdUWlMnOiAnVFNoJyxcbiAgJ1VBSCc6ICfigrQnLFxuICAnVUdYJzogJ1VTaCcsXG4gICdVU0QnOiAnJCcsXG4gICdVWVUnOiAnJFUnLFxuICAnVVpTJzogJ9C70LInLFxuICAnVkVGJzogJ0JzJyxcbiAgJ1ZORCc6ICfigqsnLFxuICAnVlVWJzogJ1ZUJyxcbiAgJ1dTVCc6ICdXUyQnLFxuICAnWEFGJzogJ0ZDRkEnLFxuICAnWEJUJzogJ8mDJyxcbiAgJ1hDRCc6ICckJyxcbiAgJ1hPRic6ICdDRkEnLFxuICAnWFBGJzogJ+KCoycsXG4gICdZRVInOiAn77e8JyxcbiAgJ1pBUic6ICdSJyxcbiAgJ1pXRCc6ICdaJCdcbn07XG5cbnZhciBSZWFjdEN1cnJlbmN5Rm9ybWF0dGVyID0gZnVuY3Rpb24gUmVhY3RDdXJyZW5jeUZvcm1hdHRlcihwcm9wcykge1xuICB2YXIgZ2V0Rm9ybWF0dGVyID0gZnVuY3Rpb24gZ2V0Rm9ybWF0dGVyKG9wdGlvbnMpIHtcbiAgICB2YXIgbG9jYWxlID0gdm9pZCAwLFxuICAgICAgICBjdXJyZW5jeSA9IHZvaWQgMCxcbiAgICAgICAgc3ltYm9sID0gdm9pZCAwLFxuICAgICAgICBwYXR0ZXJuID0gdm9pZCAwLFxuICAgICAgICBkZWNpbWFsID0gdm9pZCAwLFxuICAgICAgICBncm91cCA9IHZvaWQgMDtcblxuICAgIC8vIEhlbHBlciBGdW5jdGlvbnNcbiAgICB2YXIgaXNVbmRlZmluZWQgPSBmdW5jdGlvbiBpc1VuZGVmaW5lZChvKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG8gPT09ICd1bmRlZmluZWQnO1xuICAgIH07XG5cbiAgICB2YXIgdG9GaXhlZCA9IGZ1bmN0aW9uIHRvRml4ZWQobiwgcHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4gKCsoTWF0aC5yb3VuZCgrKG4gKyAnZScgKyBwcmVjaXNpb24pKSArICdlJyArIC1wcmVjaXNpb24pKS50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgfTtcblxuICAgIC8vIFBlcmZvcm0gY2hlY2tzIG9uIGlucHV0cyBhbmQgc2V0IHVwIGRlZmF1bHRzIGFzIG5lZWRlZCAoZGVmYXVsdHMgdG8gZW4sIFVTRClcbiAgICBpZiAoaXNVbmRlZmluZWQob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBjdXJyZW5jeSA9IGlzVW5kZWZpbmVkKG9wdGlvbnMuY3VycmVuY3kpID8gJ1VTRCcgOiBvcHRpb25zLmN1cnJlbmN5LnRvVXBwZXJDYXNlKCk7XG4gICAgbG9jYWxlID0gaXNVbmRlZmluZWQob3B0aW9ucy5sb2NhbGUpID8gbG9jYWxlc1tkZWZhdWx0TG9jYWxlc1tjdXJyZW5jeV1dIDogbG9jYWxlc1tvcHRpb25zLmxvY2FsZV07XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGxvY2FsZS5oKSkgbG9jYWxlID0gbG9jYWxlc1tsb2NhbGUuaF07IC8vIExvY2FsZSBpbmhlcml0YW5jZVxuXG4gICAgc3ltYm9sID0gaXNVbmRlZmluZWQob3B0aW9ucy5zeW1ib2wpID8gc3ltYm9sc1tjdXJyZW5jeV0gOiBvcHRpb25zLnN5bWJvbDtcblxuICAgIGlmIChpc1VuZGVmaW5lZChzeW1ib2wpKSBzeW1ib2wgPSBjdXJyZW5jeTsgLy8gSW4gY2FzZSB3ZSBkb24ndCBoYXZlIHRoZSBzeW1ib2wsIGp1c3QgdXNlIHRoZSBjY3kgY29kZVxuXG4gICAgcGF0dGVybiA9IGlzVW5kZWZpbmVkKG9wdGlvbnMucGF0dGVybikgPyBsb2NhbGUucCA6IG9wdGlvbnMucGF0dGVybjtcbiAgICBkZWNpbWFsID0gaXNVbmRlZmluZWQob3B0aW9ucy5kZWNpbWFsKSA/IGxvY2FsZS5kIDogb3B0aW9ucy5kZWNpbWFsO1xuICAgIGdyb3VwID0gaXNVbmRlZmluZWQob3B0aW9ucy5ncm91cCkgPyBsb2NhbGUuZyA6IG9wdGlvbnMuZ3JvdXA7XG5cbiAgICAvL2NvbnNvbGUubG9nKGxvY2FsZSk7XG5cbiAgICAvLyBlbmNvZGVQYXR0ZXJuIEZ1bmN0aW9uIC0gcmV0dXJucyBhIGZldyBzaW1wbGUgY2hhcmFjdGVyaXN0aWNzIG9mIHRoZSBwYXR0ZXJuIHByb3ZpZGVkXG4gICAgdmFyIGVuY29kZVBhdHRlcm4gPSBmdW5jdGlvbiBlbmNvZGVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgICAgIHZhciBkZWNpbWFsUGxhY2VzID0gMDtcbiAgICAgIHZhciBmcm9udFBhZGRpbmcgPSAnJztcbiAgICAgIHZhciBiYWNrUGFkZGluZyA9ICcnO1xuICAgICAgdmFyIGdyb3VwTGVuZ3RocyA9IFtdO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKHBhdHRlcm4pO1xuXG4gICAgICB2YXIgcGF0dGVyblN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHZhciBkZWNpbWFsc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHZhciBwYXR0ZXJuRW5kZWQgPSBmYWxzZTtcblxuICAgICAgdmFyIGN1cnJlbnRHcm91cExlbmd0aCA9IDA7XG4gICAgICB2YXIgemVyb0xlbmd0aCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHBhdHRlcm5baV07XG5cbiAgICAgICAgaWYgKCFwYXR0ZXJuU3RhcnRlZCAmJiBbJyMnLCAnMCcsICcsJywgJy4nXS5pbmRleE9mKGMpID4gLTEpIHtcbiAgICAgICAgICBwYXR0ZXJuU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhdHRlcm5TdGFydGVkKSB7XG4gICAgICAgICAgZnJvbnRQYWRkaW5nICs9IGM7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgICAgICsrY3VycmVudEdyb3VwTGVuZ3RoO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgIGlmIChkZWNpbWFsc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgKytkZWNpbWFsUGxhY2VzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgKytjdXJyZW50R3JvdXBMZW5ndGg7Kyt6ZXJvTGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgIGdyb3VwTGVuZ3Rocy5wdXNoKGN1cnJlbnRHcm91cExlbmd0aCk7XG4gICAgICAgICAgICBjdXJyZW50R3JvdXBMZW5ndGggPSAwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICAgIGdyb3VwTGVuZ3Rocy5wdXNoKGN1cnJlbnRHcm91cExlbmd0aCk7XG4gICAgICAgICAgICBkZWNpbWFsc1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGF0dGVyblN0YXJ0ZWQgJiYgIShbJyMnLCAnMCcsICcsJywgJy4nXS5pbmRleE9mKGMpID4gLTEpKSB7XG4gICAgICAgICAgcGF0dGVybkVuZGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGlmICghZGVjaW1hbHNTdGFydGVkKSB7XG4gICAgICAgICAgICBncm91cExlbmd0aHMucHVzaChjdXJyZW50R3JvdXBMZW5ndGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXR0ZXJuRW5kZWQpIHtcbiAgICAgICAgICBiYWNrUGFkZGluZyArPSBjO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBlbmNvZGVkUGF0dGVybiA9IHtcbiAgICAgICAgZGVjaW1hbFBsYWNlczogZGVjaW1hbFBsYWNlcyxcbiAgICAgICAgZnJvbnRQYWRkaW5nOiBmcm9udFBhZGRpbmcsXG4gICAgICAgIGJhY2tQYWRkaW5nOiBiYWNrUGFkZGluZyxcbiAgICAgICAgZ3JvdXBMZW5ndGhzOiBncm91cExlbmd0aHMsXG4gICAgICAgIHplcm9MZW5ndGg6IHplcm9MZW5ndGhcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBlbmNvZGVkUGF0dGVybjtcbiAgICB9O1xuXG4gICAgLy8gWmVybyBQYWRkaW5nIGhlbHBlciBmdW5jdGlvblxuICAgIHZhciBwYWQgPSBmdW5jdGlvbiBwYWQobiwgd2lkdGgpIHtcbiAgICAgIG4gPSBuICsgJyc7XG4gICAgICByZXR1cm4gbi5sZW5ndGggPj0gd2lkdGggPyBuIDogbmV3IEFycmF5KHdpZHRoIC0gbi5sZW5ndGggKyAxKS5qb2luKCcwJykgKyBuO1xuICAgIH07XG5cbiAgICAvLyBGb3JtYXQgZnVuY3Rpb25cbiAgICB2YXIgZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KG4sIGYpIHtcbiAgICAgIHZhciBmb3JtYXR0ZWROdW1iZXIgPSB0b0ZpeGVkKE1hdGguYWJzKG4pLCBmLmRlY2ltYWxQbGFjZXMpO1xuXG4gICAgICB2YXIgc3BsaXROdW1iZXIgPSBmb3JtYXR0ZWROdW1iZXIuc3BsaXQoXCIuXCIpO1xuXG4gICAgICAvLyBpLmUuIHdlIGFjdHVhbGx5IGhhdmUgc29tZSBzb3J0IG9mIGdyb3VwaW5nIGluIHRoZSB2YWx1ZXNcbiAgICAgIGlmIChmLmdyb3VwTGVuZ3Rocy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBzZWdtZW50ID0gXCJcIjtcbiAgICAgICAgdmFyIGN1cnNvciA9IHNwbGl0TnVtYmVyWzBdLmxlbmd0aDtcbiAgICAgICAgdmFyIGdyb3VwSW5kZXggPSBmLmdyb3VwTGVuZ3Rocy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHdoaWxlIChjdXJzb3IgPiAwKSB7XG4gICAgICAgICAgaWYgKGdyb3VwSW5kZXggPD0gMCkge1xuICAgICAgICAgICAgZ3JvdXBJbmRleCA9IDE7XG4gICAgICAgICAgfSAvLyBBbHdheXMgcmVzZXQgdG8gdGhlIGZpcnN0IGdyb3VwIGxlbmd0aCBpZiB0aGUgbnVtYmVyIGlzIGJpZ1xuXG4gICAgICAgICAgdmFyIGN1cnJlbnRHcm91cExlbmd0aCA9IGYuZ3JvdXBMZW5ndGhzW2dyb3VwSW5kZXhdO1xuXG4gICAgICAgICAgdmFyIHN0YXJ0ID0gY3Vyc29yIC0gY3VycmVudEdyb3VwTGVuZ3RoO1xuXG4gICAgICAgICAgc2VnbWVudCA9IHNwbGl0TnVtYmVyWzBdLnN1YnN0cmluZyhzdGFydCwgY3Vyc29yKSArIGYuZ3JvdXAgKyBzZWdtZW50O1xuXG4gICAgICAgICAgY3Vyc29yIC09IGN1cnJlbnRHcm91cExlbmd0aDtcblxuICAgICAgICAgIC0tZ3JvdXBJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlZ21lbnQgPSBzZWdtZW50LnN1YnN0cmluZygwLCBzZWdtZW50Lmxlbmd0aCAtIDEpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHNlZ21lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VnbWVudC5sZW5ndGggPCBmLnplcm9MZW5ndGgpIHtcbiAgICAgICAgc2VnbWVudCA9IHBhZChzZWdtZW50LCBmLnplcm9MZW5ndGgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9ybWF0dGVkTnVtYmVyID0gZi5mcm9udFBhZGRpbmcgKyBzZWdtZW50ICsgKGlzVW5kZWZpbmVkKHNwbGl0TnVtYmVyWzFdKSA/ICcnIDogZi5kZWNpbWFsICsgc3BsaXROdW1iZXJbMV0pICsgZi5iYWNrUGFkZGluZztcblxuICAgICAgcmV0dXJuIGZvcm1hdHRlZE51bWJlci5yZXBsYWNlKCchJywgc3ltYm9sKTtcbiAgICB9O1xuXG4gICAgLy8gVXNlIGVuY29kZSBmdW5jdGlvbiB0byB3b3JrIG91dCBwYXR0ZXJuXG4gICAgdmFyIHBhdHRlcm5BcnJheSA9IHBhdHRlcm4uc3BsaXQoXCI7XCIpO1xuICAgIHZhciBwb3NpdGl2ZUZvcm1hdCA9IGVuY29kZVBhdHRlcm4ocGF0dGVybkFycmF5WzBdKTtcblxuICAgIHBvc2l0aXZlRm9ybWF0LnN5bWJvbCA9IHN5bWJvbDtcbiAgICBwb3NpdGl2ZUZvcm1hdC5kZWNpbWFsID0gZGVjaW1hbDtcbiAgICBwb3NpdGl2ZUZvcm1hdC5ncm91cCA9IGdyb3VwO1xuXG4gICAgdmFyIG5lZ2F0aXZlRm9ybWF0ID0gaXNVbmRlZmluZWQocGF0dGVybkFycmF5WzFdKSA/IGVuY29kZVBhdHRlcm4oXCItXCIgKyBwYXR0ZXJuQXJyYXlbMF0pIDogZW5jb2RlUGF0dGVybihwYXR0ZXJuQXJyYXlbMV0pO1xuXG4gICAgbmVnYXRpdmVGb3JtYXQuc3ltYm9sID0gc3ltYm9sO1xuICAgIG5lZ2F0aXZlRm9ybWF0LmRlY2ltYWwgPSBkZWNpbWFsO1xuICAgIG5lZ2F0aXZlRm9ybWF0Lmdyb3VwID0gZ3JvdXA7XG5cbiAgICB2YXIgemVybyA9IGlzVW5kZWZpbmVkKHBhdHRlcm5BcnJheVsyXSkgPyBmb3JtYXQoMCwgcG9zaXRpdmVGb3JtYXQpIDogcGF0dGVybkFycmF5WzJdO1xuXG4gICAgaWYgKCFpc1VuZGVmaW5lZChwYXR0ZXJuQXJyYXlbMl0pKSB7XG4gICAgICB6ZXJvRm9ybWF0ID0gcGF0dGVybkFycmF5WzJdO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAobikge1xuICAgICAgdmFyIGZvcm1hdHRlZE51bWJlciA9IHZvaWQgMDtcbiAgICAgIG4gPSBOdW1iZXIobik7XG4gICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgZm9ybWF0dGVkTnVtYmVyID0gZm9ybWF0KG4sIHBvc2l0aXZlRm9ybWF0KTtcbiAgICAgIH0gZWxzZSBpZiAobiA9PSAwKSB7XG4gICAgICAgIGZvcm1hdHRlZE51bWJlciA9IHplcm8ucmVwbGFjZSgnIScsIHN5bWJvbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXR0ZWROdW1iZXIgPSBmb3JtYXQobiwgbmVnYXRpdmVGb3JtYXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdHRlZE51bWJlcjtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQobnVtYmVyLCBvcHRpb25zKSB7XG4gICAgdmFyIGZvcm1hdHRlckZ1bmN0aW9uID0gZ2V0Rm9ybWF0dGVyKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlckZ1bmN0aW9uKG51bWJlcik7XG4gIH07XG5cbiAgdmFyIHF1YW50aXR5ID0gcHJvcHMucXVhbnRpdHksXG4gICAgICBjdXJyZW5jeSA9IHByb3BzLmN1cnJlbmN5LFxuICAgICAgc3ltYm9sID0gcHJvcHMuc3ltYm9sLFxuICAgICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgICAgZGVjaW1hbCA9IHByb3BzLmRlY2ltYWwsXG4gICAgICBncm91cCA9IHByb3BzLmdyb3VwLFxuICAgICAgcGF0dGVybiA9IHByb3BzLnBhdHRlcm47XG5cblxuICByZXR1cm4gZm9ybWF0KHByb3BzLnF1YW50aXR5LCB7XG4gICAgY3VycmVuY3k6IGN1cnJlbmN5LFxuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIGRlY2ltYWw6IGRlY2ltYWwsXG4gICAgZ3JvdXA6IGdyb3VwLFxuICAgIHBhdHRlcm46IHBhdHRlcm5cbiAgfSk7XG59O1xuXG5SZWFjdEN1cnJlbmN5Rm9ybWF0dGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY3VycmVuY3k6ICdVU0QnXG59O1xuXG5SZWFjdEN1cnJlbmN5Rm9ybWF0dGVyLnByb3BUeXBlcyA9IHtcbiAgcXVhbnRpdHk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN5bWJvbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWNpbWFsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBncm91cDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGF0dGVybjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxucmV0dXJuIFJlYWN0Q3VycmVuY3lGb3JtYXR0ZXI7XG5cbn0pKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9