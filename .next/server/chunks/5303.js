"use strict";
exports.id = 5303;
exports.ids = [5303];
exports.modules = {

/***/ 5303:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3069);
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_quickViewAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3181);
/* harmony import */ var _ProductDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4640);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductDetails__WEBPACK_IMPORTED_MODULE_4__]);
_ProductDetails__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const images = [
    {
        src: "/images/offer/offer-1.jpg"
    },
    {
        src: "/images/offer/offer-2.jpg"
    },
    {
        src: "/images/offer/offer-3.jpg"
    }, 
];
const QuickView = ({ quickView , closeQuickView: closeQuickView1  })=>{
    const settings = {
        customPaging: function(i) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: images[i].src,
                    width: "75"
                })
            });
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_responsive_modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {
            open: quickView ? true : false,
            onClose: closeQuickView1,
            children: quickView && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "quick-view",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductDetails__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    product: quickView,
                    quickView: quickView
                })
            })
        })
    });
};
const mapStateToProps = (state)=>({
        quickView: state.quickView
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, {
    closeQuickView: _redux_action_quickViewAction__WEBPACK_IMPORTED_MODULE_5__/* .closeQuickView */ .z
})(QuickView));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;