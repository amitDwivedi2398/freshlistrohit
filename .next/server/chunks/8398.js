"use strict";
exports.id = 8398;
exports.ids = [8398];
exports.modules = {

/***/ 3169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7330);




const CategoryProduct = ({ updateProductCategory: updateProductCategory1  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const selectCategory = (e, category)=>{
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory1(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    onClick: (e)=>selectCategory(e, "")
                    ,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: "All"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    onClick: (e)=>selectCategory(e, "jeans")
                    ,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/imgs/theme/icons/category-1.svg",
                                    alt: ""
                                }),
                                "Milks & Dairies"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "count",
                            children: "30"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    onClick: (e)=>selectCategory(e, "shoe")
                    ,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/imgs/theme/icons/category-2.svg",
                                    alt: ""
                                }),
                                "Clothing"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "count",
                            children: "35"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    onClick: (e)=>selectCategory(e, "jacket")
                    ,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/imgs/theme/icons/category-3.svg",
                                    alt: ""
                                }),
                                "Pet Foods",
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "count",
                            children: "42"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, {
    updateProductCategory: _redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_3__/* .updateProductCategory */ .pP
})(CategoryProduct));


/***/ }),

/***/ 2763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7330);




const SizeFilter = ({ updateProductFilters: updateProductFilters1  })=>{
    // console.log(updateProductFilters);
    const sizes = [
        {
            value: "s"
        },
        {
            value: "m "
        },
        {
            value: "l"
        },
        {
            value: "xl"
        }, 
    ];
    const { 0: selectedSizes , 1: setSizes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const filters = {
            sizes: selectedSizes
        };
        updateProductFilters1(filters);
    }, [
        selectedSizes
    ]);
    const handleClick = (i, target)=>{
        setSizes(target);
        setActive(active == i ? 0 : i);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "list-filter size-filter font-small",
            children: sizes.map((tag, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: active == i ? "active" : "",
                    onClick: ()=>handleClick(i, tag.value)
                    ,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: i == 0 ? "All" : `${tag.value}`
                    })
                }, i)
            )
        })
    });
};
const mapDidpatchToProps = {
    updateProductFilters: _redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_3__/* .updateProductFilters */ .lG
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, mapDidpatchToProps)(SizeFilter));


/***/ }),

/***/ 3828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Filter_VendorFilter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./redux/action/productFiltersAction.js
var productFiltersAction = __webpack_require__(7330);
;// CONCATENATED MODULE: ./components/ecommerce/Filter/Checkbox.js

const CheckBox = ({ filters , handleCheckBox  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: filters.map((item, id)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "checkbox",
                        className: "form-check-input",
                        name: item.name,
                        value: item.value,
                        checked: item.checked,
                        onChange: (e)=>handleCheckBox(e)
                        ,
                        id: item.value
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "form-check-label",
                        htmlFor: item.value,
                        style: {
                            textTransform: "capitalize"
                        },
                        children: [
                            " ",
                            item.value
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                ]
            }, id)
        )
    });
};
/* harmony default export */ const Checkbox = (CheckBox);

;// CONCATENATED MODULE: ./components/ecommerce/Filter/VendorFilter.js






const VendorFilter = ({ updateProductFilters: updateProductFilters1  })=>{
    const { 0: sizes , 1: setSizeCheckbox  } = (0,external_react_.useState)([
        {
            value: "NestFood"
        },
        {
            value: "stouffer"
        },
        {
            value: "starKist"
        },
        {
            value: "aldi"
        },
        {
            value: "adidas"
        },
        {
            value: "Costco"
        },
        {
            value: "Harris"
        },
        {
            value: "iSnack"
        },
        {
            value: "Burbe"
        }
    ]);
    const Router = (0,router_.useRouter)();
    const searchTerm = Router.query.search;
    const { 0: selectedVendor , 1: setVendor  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        const filters = {
            vendor: selectedVendor
        };
        updateProductFilters1(filters);
    }, [
        sizes,
        searchTerm
    ]);
    const handleCheckBox = (event, filters, updatefilters, selectFilter, text)=>{
        const value = event.target.value;
        const updateSizes = filters;
        updateSizes.forEach((item1)=>{
            if (item1.value === value) {
                if (item1.checked) {
                    item1.checked = false;
                    const newsize = text.filter((item)=>item !== value
                    );
                    selectFilter([
                        ...newsize
                    ]);
                } else {
                    item1.checked = true;
                    const newsize = text.includes(value) ? text : [
                        ...text,
                        value
                    ];
                    selectFilter([
                        ...newsize
                    ]);
                }
            }
        });
        updatefilters([
            ...updateSizes
        ]);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "custome-checkbox",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Checkbox, {
                heading: "Select Size",
                filters: sizes,
                handleCheckBox: (e)=>{
                    handleCheckBox(e, sizes, setSizeCheckbox, setVendor, selectedVendor);
                }
            })
        })
    });
};
const mapStateToProps = (state)=>({
        products: state.products.items
    })
;
const mapDidpatchToProps = {
    updateProductFilters: productFiltersAction/* updateProductFilters */.lG
};
/* harmony default export */ const Filter_VendorFilter = ((0,external_react_redux_.connect)(mapStateToProps, mapDidpatchToProps)(VendorFilter));


/***/ })

};
;