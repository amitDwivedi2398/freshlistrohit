"use strict";
exports.id = 1484;
exports.ids = [1484];
exports.modules = {

/***/ 1484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
]);
const CategorySlider2 = ()=>{
    var data = [
        {
            id: 1,
            title: "Cake & Milk",
            img: "category-1.svg"
        },
        {
            id: 2,
            title: "Oganic Kiwi",
            img: "category-2.svg"
        },
        {
            id: 3,
            title: "Peach",
            img: "category-3.svg"
        },
        {
            id: 4,
            title: "Red Apple",
            img: "category-4.svg"
        },
        {
            id: 5,
            title: "Snack",
            img: "category-5.svg"
        },
        {
            id: 6,
            title: "Vegetables",
            img: "category-6.svg"
        },
        {
            id: 7,
            title: "Strawberry",
            img: "category-7.svg"
        },
        {
            id: 8,
            title: "Black plum",
            img: "category-8.svg"
        },
        {
            id: 9,
            title: "Custard apple",
            img: "category-9.svg"
        },
        {
            id: 10,
            title: "Fastfood",
            img: "category-10.svg"
        },
        {
            id: 11,
            title: "Ice cream",
            img: "category-11.svg"
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                slidesPerView: 8,
                spaceBetween: 0,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                navigation: {
                    prevEl: ".custom_prev_ct1",
                    nextEl: ".custom_next_ct1"
                },
                className: "custom-class",
                children: data.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "card-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                    className: " img-hover-scale overflow-hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/shop-grid-right",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `assets/imgs/theme/icons/${item.img}`,
                                                alt: ""
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/shop-grid-right",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: item.title
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "26 items"
                                })
                            ]
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow",
                id: "carausel-10-columns-arrows",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-prev slick-arrow custom_prev_ct1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-left"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-next slick-arrow custom_next_ct1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-right"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySlider2);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;