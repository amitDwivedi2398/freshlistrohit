"use strict";
exports.id = 4042;
exports.ids = [4042];
exports.modules = {

/***/ 4042:
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









const SingleProductList = ({ product: product1 , addToCart: addToCart1 , addToCompare: addToCompare1 , addToWishlist: addToWishlist1 , openQuickView: openQuickView1 ,  })=>{
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
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "product-list mb-30",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "product-cart-wrap",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-img-action-wrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-img product-img-zoom",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "product-img-inner",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/[id]",
                                        as: `/${product1.id}`,
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
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        "aria-label": "Compare",
                                        className: "action-btn hover-up",
                                        onClick: (e)=>handleCompare(product1)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fi-rs-shuffle"
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
                                    href: "/[id]",
                                    as: `/${product1.id}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: product1.title
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-rate-cover",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "product-rate d-inline-block",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "product-rating",
                                            style: {
                                                width: "90%"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "font-small ml-5 text-muted",
                                        children: [
                                            " ",
                                            "(4.0)"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "ml-30",
                                        children: "500g"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-15 mb-15",
                                children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam beatae consectetur, atque inventore aliquam adipisci perspiciatis nostrum qui consequatur praesentium?"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-price",
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-15",
                                children: product1.desc
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-30 d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        "aria-label": "Add To Cart",
                                        className: "btn",
                                        onClick: (e)=>handleCart(product1)
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-rs-shopping-bag-add"
                                            }),
                                            "Add to Cart"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        onClick: (e)=>handleCompare(product1)
                                        ,
                                        className: "add-wishlish ml-30 text-body font-sm font-heading font-weight-bold",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-rs-shuffle mr-5"
                                            }),
                                            "Add Compare"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const mapDispatchToProps = {
    addToCart: _redux_action_cart__WEBPACK_IMPORTED_MODULE_5__/* .addToCart */ .Xq,
    addToCompare: _redux_action_compareAction__WEBPACK_IMPORTED_MODULE_6__/* .addToCompare */ .a$,
    addToWishlist: _redux_action_wishlistAction__WEBPACK_IMPORTED_MODULE_7__/* .addToWishlist */ .Mp,
    openQuickView: _redux_action_quickViewAction__WEBPACK_IMPORTED_MODULE_8__/* .openQuickView */ .$
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, mapDispatchToProps)(SingleProductList));


/***/ })

};
;