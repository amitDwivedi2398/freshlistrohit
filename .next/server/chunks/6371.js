"use strict";
exports.id = 6371;
exports.ids = [6371];
exports.modules = {

/***/ 6371:
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
/* harmony import */ var _redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7330);





const Tags = ({ updateProductFilters: updateProductFilters1  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const tags = [
        {
            value: ""
        },
        {
            value: "snack"
        },
        {
            value: "milk"
        },
        {
            value: "fruit"
        },
        {
            value: "broccoli"
        },
        {
            value: "salad"
        },
        {
            value: "appetizer"
        }, 
    ];
    const { 0: selectedTags , 1: setTags  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const filters = {
            tags: selectedTags
        };
        updateProductFilters1(filters);
    }, [
        selectedTags
    ]);
    const handleClick = (i, target)=>{
        setTags(target);
        setActive(active == i ? 0 : i);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "tags-list",
            children: tags.map((tag, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "hover-up",
                    onClick: ()=>handleClick(i, tag.value)
                    ,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: active == i ? "cat-item text-brand-2" : "cat-item text-brand",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fi-rs-cross mr-10"
                            }),
                            i == 0 ? "All" : `${tag.value}`
                        ]
                    })
                }, i)
            )
        })
    });
};
const mapDidpatchToProps = {
    updateProductFilters: _redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_4__/* .updateProductFilters */ .lG
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, mapDidpatchToProps)(Tags));


/***/ })

};
;