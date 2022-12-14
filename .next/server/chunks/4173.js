"use strict";
exports.id = 4173;
exports.ids = [4173];
exports.modules = {

/***/ 7457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7330);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1817);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider__WEBPACK_IMPORTED_MODULE_4__);







const PriceRangeSlider = ({ updateProductFilters: updateProductFilters1  })=>{
    // console.log(updateProductFilters);
    const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const searchTerm = Router.query.search;
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        value: {
            min: 0,
            max: 500
        }
    });
    // console.log(price);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const filters = {
            price: price.value
        };
        updateProductFilters1(filters);
    }, [
        price,
        searchTerm
    ]);
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const handleActive = (index)=>{
        setActive(index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((rc_slider__WEBPACK_IMPORTED_MODULE_4___default()), {
                range: true,
                allowCross: false,
                defaultValue: [
                    0,
                    100
                ],
                min: 0,
                max: 500,
                // onChange={(value) => console.log(value[0], value[1])} 
                onChange: (value)=>setPrice({
                        value: {
                            min: value[0],
                            max: value[1]
                        }
                    })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: price.value.min
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: price.value.max
                    })
                ]
            })
        ]
    });
};
const mapStateToProps = (state)=>({
        products: state.products.items
    })
;
const mapDidpatchToProps = {
    updateProductFilters: _redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_5__/* .updateProductFilters */ .lG
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDidpatchToProps)(PriceRangeSlider));


/***/ })

};
;