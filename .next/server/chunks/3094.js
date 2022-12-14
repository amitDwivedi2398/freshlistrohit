"use strict";
exports.id = 3094;
exports.ids = [3094];
exports.modules = {

/***/ 3094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3069);
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_action_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8866);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_wishlistAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5644);






const WishlistModal = ({ wishlist , clearWishlist: clearWishlist1 , closeWishlistModal: closeWishlistModal1 , deleteFromWishlist: deleteFromWishlist1 , addToCart: addToCart1 ,  })=>{
    const handleCart = (product)=>{
        addToCart1(product);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)("Product added to Cart !");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_responsive_modal__WEBPACK_IMPORTED_MODULE_2__.Modal, {
            open: wishlist.modal ? true : false,
            onClose: closeWishlistModal1,
            center: true,
            classNames: {
                modal: "full-modal"
            },
            children: wishlist.items.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "table-responsive",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                        className: "table",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Product Name"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Price"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Quantity"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Action"
                                            })
                                        })
                                    ]
                                }),
                                wishlist.items.map((product)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: product.image,
                                                    alt: "",
                                                    className: "img-fluid",
                                                    width: "70"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                children: [
                                                    "$",
                                                    product.price
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                style: {
                                                    width: "200px"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    onClick: (e)=>handleCart(product)
                                                    ,
                                                    children: "Add To Cart"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                style: {
                                                    width: "50px"
                                                },
                                                className: "text-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    onClick: (e)=>deleteFromWishlist1(product.id)
                                                    ,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        children: "Delete"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                )
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-right",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "clear-btn",
                            onClick: clearWishlist1,
                            children: "Clear All"
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "mb-0",
                children: "No Products"
            })
        })
    });
};
const mapStateToProps = (state)=>({
        wishlist: state.wishlist
    })
;
const mapDispatchToProps = {
    closeWishlistModal: _redux_action_wishlistAction__WEBPACK_IMPORTED_MODULE_4__/* .closeWishlistModal */ .j2,
    deleteFromWishlist: _redux_action_wishlistAction__WEBPACK_IMPORTED_MODULE_4__/* .deleteFromWishlist */ .ib,
    clearWishlist: _redux_action_wishlistAction__WEBPACK_IMPORTED_MODULE_4__/* .clearWishlist */ .y6,
    addToCart: _redux_action_cart__WEBPACK_IMPORTED_MODULE_5__/* .addToCart */ .Xq
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(WishlistModal));


/***/ })

};
;