"use strict";
exports.id = 1503;
exports.ids = [1503];
exports.modules = {

/***/ 3454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8866);
/* harmony import */ var _redux_action_compareAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9216);
/* harmony import */ var _redux_action_quickViewAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3181);
/* harmony import */ var _redux_action_wishlistAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5644);









const SingleProduct2 = ({ product: product1 , addToCart: addToCart1 , addToCompare: addToCompare1 , addToWishlist: addToWishlist1 , openQuickView: openQuickView1 ,  })=>{
    const handleCart = (product)=>{
        addToCart1(product);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)("Product added to Cart !");
    };
    const handleCompare = (product)=>{
        addToCompare1(product);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)("Added to Compare list !");
    };
    const handleWishlist = (product)=>{
        addToWishlist1(product);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)("Added to Wishlist !");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "product-cart-wrap mb-30",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "product-img-action-wrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product-img product-img-zoom",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/products/[slug]",
                                as: `/products/${product1.slug}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "default-img",
                                            src: product1.images[0].img,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "hover-img",
                                            src: product1.images[1].img,
                                            alt: ""
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "product-action-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    "aria-label": "Quick view",
                                    className: "action-btn hover-up",
                                    "data-bs-toggle": "modal",
                                    // data-bs-target="#quickViewModal"
                                    onClick: (e)=>openQuickView1(product1)
                                    ,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fi-rs-eye"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    "aria-label": "Add To Wishlist",
                                    className: "action-btn hover-up",
                                    onClick: (e)=>handleWishlist(product1)
                                    ,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fi-rs-heart"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "product-badges product-badges-position product-badges-mrg",
                            children: [
                                product1.trending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hot",
                                    children: "Hot"
                                }),
                                product1.created && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "new",
                                    children: "New"
                                }),
                                product1.totalSell > 100 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "best",
                                    children: "Best Sell"
                                }),
                                product1.discount.isActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sale",
                                    children: "Sale"
                                }),
                                product1.discount.percentage >= 5 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "hot",
                                    children: [
                                        product1.discount.percentage,
                                        "%"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "product-content-wrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product-category",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/products",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: product1.brand
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/products/[slug]",
                                as: `/products/${product1.slug}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: product1.title
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product-rate d-inline-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-rating",
                                style: {
                                    width: "90%"
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "product-price mt-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "$",
                                        product1.price,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "old-price",
                                    children: product1.oldPrice && `$ ${product1.oldPrice}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sold mt-15 mb-15",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "progress mb-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "progress-bar",
                                        role: "progressbar",
                                        style: {
                                            width: "50%"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-xs text-heading",
                                    children: " Sold: 90/120"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                className: "form-control",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        selected: true,
                                        children: "1 K.G."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "2 K.G."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "3 K.G."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "5 K.G."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "btn w-100 hover-up",
                            onClick: (e)=>handleCart(product1)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fi-rs-shopping-cart mr-5"
                                }),
                                " Add To Cart"
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const mapDispatchToProps = {
    addToCart: _redux_action_cart__WEBPACK_IMPORTED_MODULE_5__/* .addToCart */ .Xq,
    addToCompare: _redux_action_compareAction__WEBPACK_IMPORTED_MODULE_6__/* .addToCompare */ .a$,
    addToWishlist: _redux_action_wishlistAction__WEBPACK_IMPORTED_MODULE_7__/* .addToWishlist */ .Mp,
    openQuickView: _redux_action_quickViewAction__WEBPACK_IMPORTED_MODULE_8__/* .openQuickView */ .$
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, mapDispatchToProps)(SingleProduct2));


/***/ }),

/***/ 1503:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1645);
/* harmony import */ var _sliders_Featured__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var _sliders_NewArrivalTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7964);
/* harmony import */ var _sliders_Trending__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sliders_Featured__WEBPACK_IMPORTED_MODULE_3__, _sliders_NewArrivalTab__WEBPACK_IMPORTED_MODULE_4__, _sliders_Trending__WEBPACK_IMPORTED_MODULE_5__]);
([_sliders_Featured__WEBPACK_IMPORTED_MODULE_3__, _sliders_NewArrivalTab__WEBPACK_IMPORTED_MODULE_4__, _sliders_Trending__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import { fetchByCatagory } from "../../redux/action/product";




function FeatchTabSlider() {
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("1");
    const { 0: featured , 1: setFeatured  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: trending , 1: setTrending  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: newArrival , 1: setNewArrival  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const featuredProduct = async ()=>{
        const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_6__/* .server */ .f}/static/product.json`);
        const allProducts = await request.json();
        const featuedItem = allProducts.filter((item)=>item.featured
        );
        setFeatured(featuedItem);
        setActive("1");
    };
    const trendingProduct = async ()=>{
        const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_6__/* .server */ .f}/static/product.json`);
        const allProducts = await request.json();
        const trendingItem = allProducts.filter((item)=>item.trending
        );
        setTrending(trendingItem);
        setActive("2");
    };
    const newArrivalProduct = async ()=>{
        const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_6__/* .server */ .f}/static/product.json`);
        const allProducts = await request.json();
        const newArrivalItem = allProducts.sort(function(a, b) {
            return a.created > b.created ? -1 : 1;
        });
        setNewArrival(newArrivalItem);
        setActive("3");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        featuredProduct();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-title wow animate__animated animate__fadeIn",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "",
                        children: "Daily Best Sells"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "nav nav-tabs links",
                        id: "myTab-1",
                        role: "tablist",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                role: "presentation",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: active === "1" ? "nav-link active" : "nav-link",
                                    onClick: featuredProduct,
                                    children: "Featured"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                role: "presentation",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: active === "2" ? "nav-link active" : "nav-link",
                                    onClick: trendingProduct,
                                    children: "Popular"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "nav-item",
                                role: "presentation",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: active === "3" ? "nav-link active" : "nav-link",
                                    onClick: newArrivalProduct,
                                    children: "New added"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "banner-img style-2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "banner-text",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "mb-100",
                                        children: "Bring nature into your home"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/products",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: "btn btn-xs",
                                            children: [
                                                "Shop Now ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fi-rs-arrow-small-right"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-9 col-md-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "tab-content wow fadeIn animated",
                            id: "myTabContent",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: active === "1" ? "tab-pane fade show active" : "tab-pane fade",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "carausel-4-columns-cover card-product-small arrow-center position-relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sliders_Featured__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            products: featured
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: active === "2" ? "tab-pane fade show active" : "tab-pane fade",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "carausel-4-columns-cover card-product-small arrow-center position-relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sliders_Trending__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            products: trending
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: active === "3" ? "tab-pane fade show active" : "tab-pane fade",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "carausel-4-columns-cover card-product-small arrow-center position-relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sliders_NewArrivalTab__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            products: newArrival
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatchTabSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _ecommerce_SingleProduct2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3454);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation
]);
const FeaturedSlider = ({ products  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                spaceBetween: 24,
                grid: {
                    rows: 2
                },
                navigation: {
                    prevEl: ".custom_prev_f",
                    nextEl: ".custom_next_f"
                },
                className: "custom-class",
                breakpoints: {
                    480: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 4
                    }
                },
                children: products.map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ecommerce_SingleProduct2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            product: product
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-arrow slider-arrow-2 carausel-4-columns-arrow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-prev slick-arrow custom_prev_f",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-left"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-next slick-arrow custom_next_f",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-right"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7964:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _ecommerce_SingleProduct2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3454);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation
]);
const NewArrivalTabSlider = ({ products  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                slidesPerView: 4,
                spaceBetween: 20,
                grid: {
                    rows: 2
                },
                loop: false,
                navigation: {
                    prevEl: ".custom_prev_n",
                    nextEl: ".custom_next_n"
                },
                className: "custom-class",
                breakpoints: {
                    480: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 4
                    }
                },
                children: products.map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ecommerce_SingleProduct2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            product: product
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-arrow slider-arrow-2 carausel-4-columns-arrow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-prev slick-arrow custom_prev_n",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-left"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-next slick-arrow custom_next_n",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-right"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewArrivalTabSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _ecommerce_SingleProduct2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3454);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation
]);
const TrendingSlider = ({ products  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                slidesPerView: 4,
                spaceBetween: 30,
                navigation: {
                    prevEl: ".custom_prev_t",
                    nextEl: ".custom_next_t"
                },
                className: "custom-class",
                children: products.map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ecommerce_SingleProduct2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            product: product
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-arrow slider-arrow-2 carausel-4-columns-arrow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-prev slick-arrow custom_prev_t",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-left"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-next slick-arrow custom_next_t",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-right"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrendingSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;