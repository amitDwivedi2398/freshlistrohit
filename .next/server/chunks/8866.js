"use strict";
exports.id = 8866;
exports.ids = [8866];
exports.modules = {

/***/ 8866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EI": () => (/* binding */ deleteFromCart),
/* harmony export */   "Ee": () => (/* binding */ closeCart),
/* harmony export */   "LA": () => (/* binding */ openCart),
/* harmony export */   "LL": () => (/* binding */ clearCart),
/* harmony export */   "Qd": () => (/* binding */ increaseQuantity),
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "a3": () => (/* binding */ decreaseQuantity)
/* harmony export */ });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6330);


const addToCart = (product)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TO_CART */ .G2,
            payload: {
                product
            }
        });
    }
;
const deleteFromCart = (productId)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .DELETE_FROM_CART */ .Yw,
            payload: {
                productId
            }
        });
    }
;
const increaseQuantity = (productId)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .INCREASE_QUANTITY */ .RC,
            payload: {
                productId
            }
        });
    }
;
const decreaseQuantity = (productId)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .DECREASE_QUANTITY */ .eL,
            payload: {
                productId
            }
        });
    }
;
const openCart = ()=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .OPEN_CART */ .tN
        });
    }
;
const clearCart = ()=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CLEAR_CART */ .qX
        });
    }
;
const closeCart = ()=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CLOSE_CART */ .wy
        });
    }
;


/***/ })

};
;