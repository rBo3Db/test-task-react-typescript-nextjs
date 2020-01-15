webpackHotUpdate("static\\development\\pages\\payPage.js",{

/***/ "./pages/payPage.tsx":
/*!***************************!*\
  !*** ./pages/payPage.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PayPage; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/components/Loader */ "./pages/src/components/Loader.tsx");
/* harmony import */ var _src_components_Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/components/Popup */ "./pages/src/components/Popup.tsx");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/components/Button */ "./pages/src/components/Button.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_theme_globalStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/theme/globalStyle */ "./pages/src/theme/globalStyle.ts");

var _jsxFileName = "D:\\frontEnd\\next.js\\pages\\payPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








 //props: {match: {params: {name: string}}}

function PayPage() {
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useState();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      operator = _useState[0],
      setOperator = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoaderShow = _useState2[0],
      setLoaderShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      apiStatus = _useState3[0],
      setApiStatus = _useState3[1];

  console.log(isLoaderShow);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // const { router: { query: { id } }} = this.props;
    // const { name } = props.match.params;
    if (router.query.title) {
      var name = '' + router.query.title;
      setOperator(name);
    } else {
      routerPushHome();
    }
  }, []);

  var changeLoaderState = function changeLoaderState(newIsShownState) {
    setLoaderShow(newIsShownState);
  };

  var changePopupState = function changePopupState(newApiStatus) {
    setApiStatus(newApiStatus);
  };

  var resetPopupState = function resetPopupState() {
    changePopupState('');
    routerPushHome();
  };

  var routerPushHome = function routerPushHome() {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/');
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var responseTime = Math.round(Math.random() * 5) * 1000;
    changeLoaderState(true);
    new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      setTimeout(function () {
        Math.round(Math.random()) ? resolve() : reject(new Error());
      }, responseTime);
    }).then(function (result) {
      changeLoaderState(false);
      changePopupState('success');
    }, function (error) {
      changeLoaderState(false);
      changePopupState('error');
    });
  };

  return __jsx(PayForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_src_theme_globalStyle__WEBPACK_IMPORTED_MODULE_8__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_src_components_Loader__WEBPACK_IMPORTED_MODULE_3__["Loader"], {
    isShown: isLoaderShow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(_src_components_Popup__WEBPACK_IMPORTED_MODULE_4__["Popup"], {
    apiStatus: apiStatus,
    resetPopupState: resetPopupState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Pay for ", operator), __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Please enter phone number"), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "phoneNumber",
    type: "tel",
    placeholder: "Phone number",
    name: "phone",
    pattern: "^\\+7 \\(\\d{3}\\) \\d{3} \\d{2} \\d{2}$",
    title: "+7 (999) 999 99 99",
    mask: "+7 (999) 999 99 99",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Please enter payment amount"), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "paymentAmount",
    type: "num",
    placeholder: "Payment amount",
    name: "money",
    pattern: "^\\d{1,3}$|^1000$",
    title: "from 1 to 1000",
    mask: "9999",
    maskChar: "",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Continue")));
}
;
var PayForm = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "payPage__PayForm",
  componentId: "sc-14kjzxu-0"
})(["background-color:white;border:2px solid black;padding:15px;border-radius:3px;display:flex;align-content:center;flex-direction:column;"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h1.withConfig({
  displayName: "payPage__Header",
  componentId: "sc-14kjzxu-1"
})(["align-self:center;color:palevioletred;"]);

/***/ })

})
//# sourceMappingURL=payPage.js.95948a00f05c8fa39576.hot-update.js.map