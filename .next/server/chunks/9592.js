"use strict";
exports.id = 9592;
exports.ids = [9592];
exports.modules = {

/***/ 1601:
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









const SingleProduct = ({ product: product1 , addToCart: addToCart1 , addToCompare: addToCompare1 , addToWishlist: addToWishlist1 , openQuickView: openQuickView1 ,  })=>{
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
                                        "(",
                                        product1.ratingScore,
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "font-small text-muted",
                                children: [
                                    "By ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/vendor/1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: "NestFood"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "product-card-bottom",
                            children: [
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "add-cart",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "add",
                                        onClick: (e)=>handleCart(product1)
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fi-rs-shopping-cart mr-5"
                                            }),
                                            " Add"
                                        ]
                                    })
                                })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, mapDispatchToProps)(SingleProduct));


/***/ }),

/***/ 9216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ht": () => (/* binding */ deleteFromCompare),
/* harmony export */   "_Z": () => (/* binding */ clearCompare),
/* harmony export */   "a$": () => (/* binding */ addToCompare),
/* harmony export */   "iH": () => (/* binding */ closeCompareModal)
/* harmony export */ });
/* unused harmony export openCompareModal */
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6330);

const openCompareModal = (e)=>(dispatch)=>{
        dispatch({
            type: Types.OPEN_COMPARE
        });
    }
;
const closeCompareModal = (e)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CLOSE_COMPARE */ .zg
        });
    }
;
const addToCompare = (product)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TO_COMPARE */ .Zd,
            payload: {
                product
            }
        });
    }
;
const deleteFromCompare = (productId)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .DELETE_FROM_COMPARE */ .Oh,
            payload: {
                productId
            }
        });
    }
;
const clearCompare = ()=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CLEAR_COMPARE */ .Jx
        });
    }
;


/***/ }),

/***/ 8658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Fi": () => (/* binding */ fetchByCatagory),
  "MX": () => (/* binding */ fetchProduct)
});

// UNUSED EXPORTS: fetchMoreProduct

;// CONCATENATED MODULE: ./util/filterProduct.js
// Filter Products By Filters
/* harmony default export */ const filterProduct = ((productList, filters)=>{
    let filteredList = [
        ...productList
    ];
    for(const key in filters){
        if (key !== "price") {
            if (filters[key] === "featured" || filters[key] === "trending" || filters[key] === "lowToHigh" || filters[key] === "highToLow") {
                if (filters[key] === "lowToHigh") {
                    filteredList = [
                        ...filteredList.sort((a, b)=>{
                            if (a.price < b.price) return -1;
                            if (a.price > b.price) return 1;
                        }), 
                    ];
                } else {
                    if (filters[key] === "highToLow") {
                        console.log("hi");
                        filteredList = [
                            ...filteredList.sort((a, b)=>{
                                if (b.price < a.price) return -1;
                                if (b.price > a.price) return 1;
                            }), 
                        ];
                    } else {
                        console.log("hi1");
                        filteredList = filteredList.filter((item)=>item[filters[key]]
                        );
                    }
                }
            } else {
                filteredList = filterByKey(filteredList, filters[key], key);
            }
        } else {
            filteredList = filterByPrice(filteredList, filters[key], key);
        }
    }
    return filteredList;
});
// Filter Product By Price
function filterByPrice(filteredList, price, key) {
    let list = [];
    for(let index = 0; index < filteredList.length; index++){
        const product = filteredList[index];
        const productPrice = product[key];
        if (productPrice >= price.min && productPrice <= price.max) {
            list.push(product);
        }
    }
    return filteredList = list;
}
// Filter Product by key size/category/brand etc
function filterByKey(filteredList, size, key) {
    let list = [];
    if (!size || size.length === 0) return filteredList;
    for(let index = 0; index < filteredList.length; index++){
        const product = filteredList[index];
        if (size.indexOf != undefined) {
            const isOk = size && size.indexOf(product[key]);
            if (isOk !== -1) {
                list.push(product);
            }
        }
    }
    return filteredList = list;
}

;// CONCATENATED MODULE: ./util/searchItemsByText.js
/* harmony default export */ const searchItemsByText = ((searchTerm, products)=>{
    if (!searchTerm) return products;
    let list = [];
    const words = searchTerm.toLowerCase().split(" ");
    for(let index = 0; index < products.length; index++){
        const product = products[index];
        const isMatched = matchWordList(product.title, words);
        if (isMatched) list.push(product);
    }
    return list;
});
const matchWordList = (productTitle, words)=>{
    let matched = false;
    for(let index = 0; index < words.length; index++){
        const word = words[index];
        let isContainWord = productTitle.toLowerCase().indexOf(word) !== -1;
        isContainWord ? matched = true : matched = false;
        if (!isContainWord) break;
    }
    return matched;
};

// EXTERNAL MODULE: ./redux/constants/actionTypes.js
var actionTypes = __webpack_require__(6330);
;// CONCATENATED MODULE: ./redux/action/product.js
// import fetch from 'isomorphic-unfetch'



// Fetch Product fetchProduct
const fetchProduct = (searchTerm, url, filters)=>async (dispatch)=>{
        try {
            const sendRequest = await fetch(url);
            const data = await sendRequest.json();
            window.products = data;
            const searchedItems = searchItemsByText(searchTerm, data);
            const filteredList = filterProduct(searchedItems, filters);
            dispatch({
                type: actionTypes/* FETCHED_PRODUCT */.jP,
                payload: {
                    products: filteredList
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
;
// Fetch More Product 
const fetchMoreProduct = (url, total)=>async (dispatch)=>{
        try {
            const sendRequest = await fetch(url);
            const data = await sendRequest.json();
            // const searchedItems = searchItemsByText(searchTerm,data)
            // const filteredList  = filterProductList(searchedItems,filters)
            dispatch({
                type: Types.FETCHED_MORE_PRODUCT,
                payload: {
                    products: data,
                    total
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
;
// Fetch Product By Catagory
const fetchByCatagory = async (url, filters)=>{
    try {
        const sendRequest = await fetch(url);
        const data = await sendRequest.json();
        const filteredList = filterProduct(data, filters);
        return filteredList;
    } catch (error) {
        console.log(error);
    }
};


/***/ }),

/***/ 3181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ openQuickView),
/* harmony export */   "z": () => (/* binding */ closeQuickView)
/* harmony export */ });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6330);

const openQuickView = (product)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .OPEN_QUICK_VIEW */ .GS,
            payload: {
                product
            }
        });
    }
;
const closeQuickView = ()=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CLOSE_QUICK_VIEW */ .fJ
        });
    }
;


/***/ }),

/***/ 5644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mp": () => (/* binding */ addToWishlist),
/* harmony export */   "ib": () => (/* binding */ deleteFromWishlist),
/* harmony export */   "j2": () => (/* binding */ closeWishlistModal),
/* harmony export */   "y6": () => (/* binding */ clearWishlist)
/* harmony export */ });
/* unused harmony export openWishlistModal */
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6330);

const openWishlistModal = (e)=>(dispatch)=>{
        dispatch({
            type: Types.OPEN_WISHLIST
        });
    }
;
const closeWishlistModal = (e)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CLOSE_WISHLIST */ .DZ
        });
    }
;
const addToWishlist = (product)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TO_WISHLIST */ .Cm,
            payload: {
                product
            }
        });
    }
;
const deleteFromWishlist = (productId)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .DELETE_FROM_WISHLIST */ .ww,
            payload: {
                productId
            }
        });
    }
;
const clearWishlist = ()=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CLEAR_WISHLIST */ .lS
        });
    }
;


/***/ })

};
;