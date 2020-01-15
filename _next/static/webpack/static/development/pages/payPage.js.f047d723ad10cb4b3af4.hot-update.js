webpackHotUpdate("static\\development\\pages\\payPage.js",{

/***/ "./pages/src/components/Popup.tsx":
/*!****************************************!*\
  !*** ./pages/src/components/Popup.tsx ***!
  \****************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overlay */ "./pages/src/components/Overlay.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./pages/src/components/Button.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "D:\\frontEnd\\next.js\\pages\\src\\components\\Popup.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




// const MyButton = React.forwardRef(({onClick}, ref) => (
//     <div onClick={onClick} ref={ref}>
//       ntrcn{/* <Button onClick={props.resetPopupStdivte}>To main page</Button> */}
//     </a>
// ))
function Popup(props) {
  return __jsx(_Overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"], {
    isShown: !!props.apiStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(PopupContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(StatusText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.apiStatus === 'success' && 'Your payment was successfull', props.apiStatus === 'error' && 'Your payment can not be comlited. Please go back and try again'), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: props.resetPopupState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "To main page"), props.apiStatus === 'error' && __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: props.resetPopupState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Back")));
}
var StatusText = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2.withConfig({
  displayName: "Popup__StatusText",
  componentId: "q1dvia-0"
})(["color:white;"]);
var PopupContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Popup__PopupContent",
  componentId: "q1dvia-1"
})(["max-width:400px;align-items:center;padding 15px;display:flex;flex-direction:column;background-color:#222;@media (max-width:414px){align-self:flex-start;}"]);

/***/ })

})
//# sourceMappingURL=payPage.js.f047d723ad10cb4b3af4.hot-update.js.map