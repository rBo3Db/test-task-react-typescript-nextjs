(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2Eek":function(e,n,t){e.exports=t("W7oM")},"4bdI":function(e,n,t){t("Ui4e"),e.exports=t("WEpk").Object.freeze},"82Mt":function(e,n,t){e.exports=t("L37t")},DWss:function(e,n,t){"use strict";t.r(n);var o=t("2Eek"),a=t.n(o),r=t("FbiP"),i=t.n(r);var s=t("vOnD");function u(){var e,n,t=(e=["\n \n    html {\n        height: 100%;\n    }\n\n    #__next {\n        padding: 0;\n        font-family: sans-serif;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 100%;\n        @media (max-width: 414px) {\n            align-items: flex-start;\n            background-color: #222;\n        }\n    }\n\n    a {\n        color: white;\n        text-decoration: none;\n    }\n\n    input {\n        font-size: 24px;\n\n    }\n\n    button {\n        font-size: 20px;\n        color: white;\n    }\n"],n||(n=e.slice(0)),i()(a()(e,{raw:{value:i()(n)}})));return u=function(){return t},t}var l=Object(s.a)(u());n.default=l},Ezad:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var o=t("q1tI"),a=t.n(o),r=t("vOnD"),i=t("eU1s"),s=a.a.createElement,u=Object(r.c)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]),l=r.b.div.withConfig({displayName:"Loader__Rotate",componentId:"sc-2mojjh-0"})(["display:white;margin:auto;animation:"," 2s linear infinite;padding:2rem 1rem;font-size:1.2rem;"],u);function c(e){return s(i.default,{isShown:e.isShown},s(l,null,"Loading..."))}},FbiP:function(e,n,t){e.exports=t("4bdI")},GC10:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var o=t("q1tI"),a=t.n(o),r=t("eU1s"),i=t("filU"),s=t("vOnD"),u=a.a.createElement;function l(e){return u(r.default,{isShown:!!e.apiStatus},u(f,null,u(c,null,"success"===e.apiStatus&&"Your payment was successfull","error"===e.apiStatus&&"Your payment can not be comlited. Please go back and try again"),u(i.default,{onClick:e.resetPopupState},"To main page"),"error"===e.apiStatus&&u(i.default,{onClick:e.resetPopupState},"Back")))}var c=s.b.h2.withConfig({displayName:"Popup__StatusText",componentId:"q1dvia-0"})(["color:white;"]),f=s.b.div.withConfig({displayName:"Popup__PopupContent",componentId:"q1dvia-1"})(["max-width:400px;align-items:center;padding 15px;display:flex;flex-direction:column;background-color:#222;@media (max-width:414px){align-self:flex-start;}"])},L37t:function(e,n,t){"use strict";var o,a=(o=t("q1tI"))&&"object"==typeof o&&"default"in o?o.default:o,r=t("i8i4");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function s(e,n){e.prototype=Object.create(n.prototype),function(e,n){for(var t=Object.getOwnPropertyNames(n),o=0;o<t.length;o++){var a=t[o],r=Object.getOwnPropertyDescriptor(n,a);r&&r.configurable&&void 0===e[a]&&Object.defineProperty(e,a,r)}}(e.prototype.constructor=e,n)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e,n,t,o,a,r,i,s){if(!e){var u;if(void 0===n)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,o,a,r,i,s],c=0;(u=new Error(n.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}};function c(e,n,t){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=n,e.selectionEnd=t;else{var o=e.createTextRange();o.collapse(!0),o.moveStart("character",n),o.moveEnd("character",t-n),o.select()}}var f={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},p="_";function d(e,n,t){var o="",a="",r=null,i=[];if(void 0===n&&(n=p),null==t&&(t=f),!e||"string"!=typeof e)return{maskChar:n,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach((function(e){s=!s&&"\\"===e||(s||!t[e]?(i.push(o.length),o.length===i.length-1&&(a+=e)):r=o.length+1,o+=e,!1)})),{maskChar:n,formatChars:t,prefix:a,mask:o,lastEditablePosition:r,permanents:i}}function h(e,n){return-1!==e.permanents.indexOf(n)}function m(e,n,t){var o=e.mask,a=e.formatChars;if(!t)return!1;if(h(e,n))return o[n]===t;var r=a[o[n]];return new RegExp(r).test(t)}function v(e,n){return n.split("").every((function(n,t){return h(e,t)||!m(e,t,n)}))}function g(e,n){var t=e.maskChar,o=e.prefix;if(!t){for(;n.length>o.length&&h(e,n.length-1);)n=n.slice(0,n.length-1);return n.length}for(var a=o.length,r=n.length;r>=o.length;r--){var i=n[r];if(!h(e,r)&&m(e,r,i)){a=r+1;break}}return a}function k(e,n){return g(e,n)===e.mask.length}function w(e,n){var t=e.maskChar,o=e.mask,a=e.prefix;if(!t){for((n=S(e,"",n,0)).length<a.length&&(n=a);n.length<o.length&&h(e,n.length);)n+=o[n.length];return n}if(n)return S(e,w(e,""),n,0);for(var r=0;r<o.length;r++)h(e,r)?n+=o[r]:n+=t;return n}function S(e,n,t,o){var a=e.mask,r=e.maskChar,i=e.prefix,s=t.split(""),u=k(e,n);return!r&&o>n.length&&(n+=a.slice(n.length,o)),s.every((function(t){for(;c=t,h(e,l=o)&&c!==a[l];){if(o>=n.length&&(n+=a[o]),s=t,r&&h(e,o)&&s===r)return!0;if(++o>=a.length)return!1}var s,l,c;return!m(e,o,t)&&t!==r||(o<n.length?n=r||u||o<i.length?n.slice(0,o)+t+n.slice(o+1):(n=n.slice(0,o)+t+n.slice(o),w(e,n)):r||(n+=t),++o<a.length)})),n}function C(e,n){for(var t=e.mask,o=n;o<t.length;++o)if(!h(e,o))return o;return null}function O(e){return e||0===e?e+"":""}function b(e,n,t,o,a){var r=e.mask,i=e.prefix,s=e.lastEditablePosition,u=n,l="",c=0,f=0,p=Math.min(a.start,t.start);return t.end>a.start?f=(c=function(e,n,t,o){var a=e.mask,r=e.maskChar,i=t.split(""),s=o;return i.every((function(n){for(;i=n,h(e,t=o)&&i!==a[t];)if(++o>=a.length)return!1;var t,i;return(m(e,o,n)||n===r)&&o++,o<a.length})),o-s}(e,0,l=u.slice(a.start,t.end),p))?a.length:0:u.length<o.length&&(f=o.length-u.length),u=o,f&&(1!==f||a.length||(p=a.start===t.start?C(e,t.start):function(e,n){for(var t=n;0<=t;--t)if(!h(e,t))return t;return null}(e,t.start)),u=function(e,n,t,o){var a=t+o,r=e.maskChar,i=e.mask,s=e.prefix,u=n.split("");if(r)return u.map((function(n,o){return o<t||a<=o?n:h(e,o)?i[o]:r})).join("");for(var l=a;l<u.length;l++)h(e,l)&&(u[l]="");return t=Math.max(s.length,t),u.splice(t,a-t),n=u.join(""),w(e,n)}(e,u,p,f)),u=S(e,u,l,p),(p+=c)>=r.length?p=r.length:p<i.length&&!c?p=i.length:p>=i.length&&p<s&&c&&(p=C(e,p)),l||(l=null),{value:u=w(e,u),enteredString:l,selection:{start:p,end:p}}}function y(e){return"function"==typeof e}function I(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function x(e){return(I()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function M(e){(I()||clearTimeout)(e)}var D=function(e){function n(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=x(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(M(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var e=r.findDOMNode(u(u(t))),n="undefined"!=typeof window&&e instanceof window.Element;if(e&&!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},t.getInputValue=function(){var e=t.getInputDOMNode();return e?e.value:null},t.setInputValue=function(e){var n=t.getInputDOMNode();n&&(t.value=e,n.value=e)},t.setCursorToEnd=function(){var e=g(t.maskOptions,t.value),n=C(t.maskOptions,e);null!==n&&t.setCursorPosition(n)},t.setSelection=function(e,n,o){void 0===o&&(o={});var a=t.getInputDOMNode(),r=t.isFocused();a&&r&&(o.deferred||c(a,e,n),null!==t.selectionDeferId&&M(t.selectionDeferId),t.selectionDeferId=x((function(){t.selectionDeferId=null,c(a,e,n)})),t.previousSelection={start:e,end:n,length:Math.abs(n-e)})},t.getSelection=function(){return function(e){var n=0,t=0;if("selectionStart"in e&&"selectionEnd"in e)n=e.selectionStart,t=e.selectionEnd;else{var o=document.selection.createRange();o.parentElement()===e&&(n=-o.moveStart("character",-e.value.length),t=-o.moveEnd("character",-e.value.length))}return{start:n,end:t,length:t-n}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(e){t.setSelection(e,e)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var e=t.maskOptions,n=e.mask,o=e.maskChar,a=e.permanents,r=e.formatChars;return{mask:n,maskChar:o,permanents:a,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:r}},t.isInputAutofilled=function(e,n,o,a){var r=t.getInputDOMNode();try{if(r.matches(":-webkit-autofill"))return!0}catch(l){}return!t.focused||a.end<o.length&&n.end===e.length},t.onChange=function(e){var n=u(u(t)).beforePasteState,o=u(u(t)).previousSelection,a=t.props.beforeMaskedValueChange,r=t.getInputValue(),i=t.value,s=t.getSelection();t.isInputAutofilled(r,s,i,o)&&(i=w(t.maskOptions,""),o={start:0,end:0,length:0}),n&&(o=n.selection,i=n.value,s={start:o.start+r.length,end:o.start+r.length,length:0},r=i.slice(0,o.start)+r+i.slice(o.end),t.beforePasteState=null);var l=b(t.maskOptions,r,s,i,o),c=l.enteredString,f=l.selection,p=l.value;if(y(a)){var d=a({value:p,selection:f},{value:i,selection:o},c,t.getBeforeMaskedValueChangeConfig());p=d.value,f=d.selection}t.setInputValue(p),y(t.props.onChange)&&t.props.onChange(e),t.isWindowsPhoneBrowser?t.setSelection(f.start,f.end,{deferred:!0}):t.setSelection(f.start,f.end)},t.onFocus=function(e){var n=t.props.beforeMaskedValueChange,o=t.maskOptions,a=o.mask,r=o.prefix;if(t.focused=!0,t.mounted=!0,a){if(t.value)g(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var i=w(t.maskOptions,r),s=w(t.maskOptions,i),u=g(t.maskOptions,s),l=C(t.maskOptions,u),c={start:l,end:l};if(y(n)){var f=n({value:s,selection:c},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());s=f.value,c=f.selection}var p=s!==t.getInputValue();p&&t.setInputValue(s),p&&y(t.props.onChange)&&t.props.onChange(e),t.setSelection(c.start,c.end)}t.runSaveSelectionLoop()}y(t.props.onFocus)&&t.props.onFocus(e)},t.onBlur=function(e){var n=t.props.beforeMaskedValueChange,o=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,o&&!t.props.alwaysShowMask&&v(t.maskOptions,t.value)){var a="";y(n)&&(a=n({value:a,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var r=a!==t.getInputValue();r&&t.setInputValue(a),r&&y(t.props.onChange)&&t.props.onChange(e)}y(t.props.onBlur)&&t.props.onBlur(e)},t.onMouseDown=function(e){if(!t.focused&&document.addEventListener){t.mouseDownX=e.clientX,t.mouseDownY=e.clientY,t.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(n){if(document.removeEventListener("mouseup",e),t.focused){var o=Math.abs(n.clientX-t.mouseDownX),a=Math.abs(n.clientY-t.mouseDownY),r=Math.max(o,a),i=(new Date).getTime()-t.mouseDownTime;(r<=10&&i<=200||r<=5&&i<=300)&&t.setCursorToEnd()}}))}y(t.props.onMouseDown)&&t.props.onMouseDown(e)},t.onPaste=function(e){y(t.props.onPaste)&&t.props.onPaste(e),e.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(e){null==t.props.children&&y(t.props.inputRef)&&t.props.inputRef(e)};var o=n.mask,a=n.maskChar,i=n.formatChars,s=n.alwaysShowMask,l=n.beforeMaskedValueChange,f=n.defaultValue,p=n.value;t.maskOptions=d(o,a,i),null==f&&(f=""),null==p&&(p=f);var h=O(p);if(t.maskOptions.mask&&(s||h)&&(h=w(t.maskOptions,h),y(l))){var m=n.value;null==n.value&&(m=f),h=l({value:h,selection:null},{value:m=O(m),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=h,t}s(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),n=new RegExp("phone","i"),t=navigator.userAgent;return e.test(t)&&n.test(t)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},t.componentDidUpdate=function(){var e=this.previousSelection,n=this.props,t=n.beforeMaskedValueChange,o=n.alwaysShowMask,a=n.mask,r=n.maskChar,i=n.formatChars,s=this.maskOptions,u=o||this.isFocused(),l=null!=this.props.value,c=l?O(this.props.value):this.value,f=e?e.start:null;if(this.maskOptions=d(a,r,i),this.maskOptions.mask){!s.mask&&this.isFocused()&&this.runSaveSelectionLoop();var p=this.maskOptions.mask&&this.maskOptions.mask!==s.mask;if(s.mask||l||(c=this.getInputValue()),(p||this.maskOptions.mask&&(c||u))&&(c=w(this.maskOptions,c)),p){var h=g(this.maskOptions,c);(null===f||h<f)&&(f=k(this.maskOptions,c)?h:C(this.maskOptions,h))}!this.maskOptions.mask||!v(this.maskOptions,c)||u||l&&this.props.value||(c="");var m={start:f,end:f};if(y(t)){var S=t({value:c,selection:m},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=S.value,m=S.selection}this.value=c;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):p&&this.forceUpdate();var I=!1;null!=m.start&&null!=m.end&&(I=!e||e.start!==m.start||e.end!==m.end),(I||b)&&this.setSelection(m.start,m.end)}else s.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&M(this.selectionDeferId),this.stopSaveSelectionLoop()},t.render=function(){var e,n=this.props,t=(n.mask,n.alwaysShowMask,n.maskChar,n.formatChars,n.inputRef,n.beforeMaskedValueChange,n.children),o=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],0<=n.indexOf(t)||(a[t]=e[t]);return a}(n,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(t){y(t)||l(!1);var r=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=i({},o);r.forEach((function(e){return delete s[e]})),e=t(s),r.filter((function(n){return null!=e.props[n]&&e.props[n]!==o[n]})).length&&l(!1)}else e=a.createElement("input",i({ref:this.handleRef},o));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(o.disabled||o.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),null!=o.value&&(u.value=this.value)),e=a.cloneElement(e,u)},n}(a.Component);e.exports=D},Odse:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return g}));var o=t("eVuF"),a=t.n(o),r=t("q1tI"),i=t.n(r),s=t("82Mt"),u=t.n(s),l=t("Ezad"),c=t("GC10"),f=t("filU"),p=t("vOnD"),d=t("nOHt"),h=t.n(d),m=t("DWss"),v=i.a.createElement;function g(){i.a.useState();var e=Object(d.useRouter)(),n=Object(r.useState)(""),t=n[0],o=n[1],s=Object(r.useState)(!1),p=s[0],g=s[1],S=Object(r.useState)(""),C=S[0],O=S[1];Object(r.useEffect)((function(){if(e.query.title){var n=""+e.query.title;o(n)}else I()}),[]);var b=function(e){g(e)},y=function(e){O(e)},I=function(){h.a.push("/")};return v(k,null,v(m.default,null),v(l.default,{isShown:p}),v(c.default,{apiStatus:C,resetPopupState:function(){y(""),I()}}),v(w,null,"Pay for ",t),v("form",{onSubmit:function(e){e.preventDefault();var n=1e3*Math.round(5*Math.random());b(!0),new a.a((function(e,t){setTimeout((function(){Math.round(Math.random())?e():t(new Error)}),n)})).then((function(e){b(!1),y("success")}),(function(e){b(!1),y("error")}))}},v("p",null,"Please enter phone number"),v(u.a,{id:"phoneNumber",type:"tel",placeholder:"Phone number",name:"phone",pattern:"^\\+7 \\(\\d{3}\\) \\d{3} \\d{2} \\d{2}$",title:"+7 (999) 999 99 99",mask:"+7 (999) 999 99 99",required:!0}),v("p",null,"Please enter payment amount"),v(u.a,{id:"paymentAmount",type:"num",placeholder:"Payment amount",name:"money",pattern:"^\\d{1,3}$|^1000$",title:"from 1 to 1000",mask:"9999",maskChar:"",required:!0}),v(f.default,{type:"submit"},"Continue")))}var k=p.b.div.withConfig({displayName:"payPage__PayForm",componentId:"sc-14kjzxu-0"})(["background-color:white;border:2px solid black;padding:15px;border-radius:3px;display:flex;align-content:center;flex-direction:column;"]),w=p.b.h1.withConfig({displayName:"payPage__Header",componentId:"sc-14kjzxu-1"})(["align-self:center;color:palevioletred;"])},Ui4e:function(e,n,t){var o=t("93I4"),a=t("6/1s").onFreeze;t("zn7N")("freeze",(function(e){return function(n){return e&&o(n)?e(a(n)):n}}))},W7oM:function(e,n,t){t("nZgG");var o=t("WEpk").Object;e.exports=function(e,n){return o.defineProperties(e,n)}},cz0F:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payPage",function(){return t("Odse")}])},eU1s:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var o=t("q1tI"),a=t.n(o),r=t("vOnD"),i=a.a.createElement;function s(e){return i(u,{isShown:e.isShown},e.children)}var u=r.b.div.withConfig({displayName:"Overlay__EntireOverlayWrapper",componentId:"fvd7gl-0"})(["top:0;bottom:0;left:0;right:0;background-color:#000000a1;position:fixed;display:",";align-items:center;justify-content:center;z-index:10"],(function(e){return e.isShown?"flex":"none"}))},nZgG:function(e,n,t){var o=t("Y7ZC");o(o.S+o.F*!t("jmDH"),"Object",{defineProperties:t("fpC5")})}},[["cz0F",0,1]]]);