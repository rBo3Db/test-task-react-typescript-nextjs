(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{GC10:function(n,t,e){"use strict";e.r(t),e.d(t,"Popup",(function(){return c}));var o=e("q1tI"),i=e.n(o),a=e("eU1s"),r=e("filU"),p=e("vOnD"),u=i.a.createElement;function c(n){return u(a.Overlay,{isShown:!!n.apiStatus},u(l,null,u(s,null,"success"===n.apiStatus&&"Your payment was successfull","error"===n.apiStatus&&"Your payment can not be comlited. Please go back and try again"),u(r.Button,{onClick:n.resetPopupState},"To main page"),"error"===n.apiStatus&&u(r.Button,{onClick:n.resetPopupState},"Back")))}var s=p.b.h2.withConfig({displayName:"Popup__StatusText",componentId:"q1dvia-0"})(["color:white;"]),l=p.b.div.withConfig({displayName:"Popup__PopupContent",componentId:"q1dvia-1"})(["max-width:400px;align-items:center;padding 15px;display:flex;flex-direction:column;background-color:#222;@media (max-width:414px){align-self:flex-start;}"])},OOd1:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/src/components/Popup",function(){return e("GC10")}])},eU1s:function(n,t,e){"use strict";e.r(t),e.d(t,"Overlay",(function(){return p}));var o=e("q1tI"),i=e.n(o),a=e("vOnD"),r=i.a.createElement;function p(n){return r(u,{isShown:n.isShown},n.children)}var u=a.b.div.withConfig({displayName:"Overlay__EntireOverlayWrapper",componentId:"fvd7gl-0"})(["top:0;bottom:0;left:0;right:0;background-color:#000000a1;position:fixed;display:",";align-items:center;justify-content:center;z-index:10"],(function(n){return n.isShown?"flex":"none"}))}},[["OOd1",0,1]]]);