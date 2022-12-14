"use strict";
exports.id = 9583;
exports.ids = [9583];
exports.modules = {

/***/ 9583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Breadcrumb.js


const Breadcrumb = ({ parent , sub , subChild , noBreadcrumb  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `page-header breadcrumb-wrap ${noBreadcrumb}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "breadcrumb",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: parent
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                        " ",
                        sub,
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                        " ",
                        subChild
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layout_Breadcrumb = (Breadcrumb);

;// CONCATENATED MODULE: ./components/layout/Footer.js



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "main",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "newsletter mb-15 wow animate__animated animate__fadeIn",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "position-relative newsletter-inner",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "newsletter-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                    className: "mb-20",
                                                    children: [
                                                        "Stay home & get your daily ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        "needs from our shop"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "mb-45",
                                                    children: [
                                                        "Start You'r Daily Shopping with",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-brand",
                                                            children: "Nest Mart"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    className: "form-subcriber d-flex",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            placeholder: "Your emaill address"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "btn",
                                                            type: "submit",
                                                            children: "Subscribe"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/imgs/banner/banner-9.png",
                                            alt: "newsletter"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "featured section-padding",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp",
                                        "data-wow-delay": "0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "banner-icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/icons/icon-1.svg",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "banner-text",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "icon-box-title",
                                                        children: "Best prices & offers"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Orders $50 or more"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-1-5 col-md-4 col-12 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp",
                                        "data-wow-delay": ".1s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "banner-icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/icons/icon-2.svg",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "banner-text",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "icon-box-title",
                                                        children: "Free delivery"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "24/7 amazing services"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-1-5 col-md-4 col-12 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp",
                                        "data-wow-delay": ".2s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "banner-icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/icons/icon-3.svg",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "banner-text",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "icon-box-title",
                                                        children: "Great daily deal"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "When you sign up"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-1-5 col-md-4 col-12 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp",
                                        "data-wow-delay": ".3s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "banner-icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/icons/icon-4.svg",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "banner-text",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "icon-box-title",
                                                        children: "Wide assortment"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Mega Discounts"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-1-5 col-md-4 col-12 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp",
                                        "data-wow-delay": ".4s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "banner-icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/icons/icon-5.svg",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "banner-text",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "icon-box-title",
                                                        children: "Easy returns"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Within 30 days"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp",
                                        "data-wow-delay": ".5s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "banner-icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/icons/icon-6.svg",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "banner-text",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "icon-box-title",
                                                        children: "Safe delivery"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Within 30 days"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "section-padding footer-mid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container pt-15 pb-20",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp",
                                        "data-wow-delay": "0",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "logo mb-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "mb-15",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/assets/imgs/theme/logo.png",
                                                                alt: "logo",
                                                                width: "180px"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "font-lg text-heading",
                                                        children: "Awesome grocery store website template"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "contact-infor",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/assets/imgs/theme/icons/icon-location.svg",
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                children: "Address: "
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "5171 W Campbell Ave undefined Kent, Utah 53127 United States"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/assets/imgs/theme/icons/icon-contact.svg",
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                children: "Call Us:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "(+91) - 540-025-124553"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/assets/imgs/theme/icons/icon-email-2.svg",
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                children: "Email:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "sale@Nest.com"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/assets/imgs/theme/icons/icon-clock.svg",
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                children: "Hours:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "10:00 - 18:00, Mon - Sat"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-link-widget col wow animate__animated animate__fadeInUp",
                                    "data-wow-delay": ".1s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "widget-title",
                                            children: "Company"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer-list mb-sm-5 mb-md-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/page-about",
                                                        children: "About Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/page-purchase-guide",
                                                        children: "Delivery Information"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/pagepolicy",
                                                        children: "Privacy Policy"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/page-terms",
                                                        children: "Terms & Conditions"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/page-contact",
                                                        children: "Contact Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Support Center"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Careers"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-link-widget col wow animate__animated animate__fadeInUp",
                                    "data-wow-delay": ".2s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "widget-title ",
                                            children: "Account"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer-list mb-sm-5 mb-md-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Sign In"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "View Cart"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "My Wishlist"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Track My Order"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Help Ticket"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Shipping Details"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Compare products"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-link-widget col wow animate__animated animate__fadeInUp",
                                    "data-wow-delay": ".3s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "widget-title ",
                                            children: "Corporate"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer-list mb-sm-5 mb-md-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Become a Vendor"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Affiliate Program"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Farm Business"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Farm Careers"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Our Suppliers"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Accessibility"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Promotions"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-link-widget col wow animate__animated animate__fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "widget-title ",
                                            children: "Popular"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer-list mb-sm-5 mb-md-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Milk & Flavoured Milk"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Butter and Margarine"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Eggs Substitutes"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Marmalades"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Sour Cream and Dips"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Tea & Kombucha"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Cheese"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-link-widget widget-install-app col wow animate__animated animate__fadeInUp",
                                    "data-wow-delay": ".5s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "widget-title ",
                                            children: "Install App"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "",
                                            children: "From App Store or Google Play"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "download-app ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "hover-up mb-sm-2 mb-lg-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "active",
                                                        src: "/assets/imgs/theme/app-store.jpg",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "hover-up mb-sm-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/assets/imgs/theme/google-play.jpg",
                                                        alt: ""
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mb-20 ",
                                            children: "Secured Payment Gateways"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "",
                                            src: "/assets/imgs/theme/payment-method.png",
                                            alt: ""
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container pb-30 wow animate__animated animate__fadeInUp",
                    "data-wow-delay": "0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 mb-30",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-bottom"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-xl-4 col-lg-6 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "st-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "/",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/assets/imgs/theme/homa.png",
                                                            alt: "",
                                                            width: 30
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Home"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "/location",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/assets/imgs/theme/glass.png",
                                                            alt: "",
                                                            width: 30
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Search"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "/shop-filter",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/assets/imgs/theme/stor.png",
                                                            alt: "",
                                                            width: 30
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Store"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "/shop-cart",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/assets/imgs/theme/cart.png",
                                                            alt: "",
                                                            width: 30
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Cart"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "/page-account",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/assets/imgs/theme/custo.png",
                                                            alt: "",
                                                            width: 30
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Profile"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "font-sm mb-0",
                                        children: [
                                            "\xa9 2022,",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                className: "text-brand"
                                            }),
                                            "All rights reserved"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-xl-5 col-lg-6 text-center d-none d-xl-block",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hotline d-lg-inline-flex mr-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/imgs/theme/icons/phone-call.svg",
                                                alt: "hotline"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "1900 - 6666",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Working 8:00 - 22:00"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hotline d-lg-inline-flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/imgs/theme/icons/phone-call.svg",
                                                alt: "hotline"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "1900 - 8888",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "24/7 Support Center"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-xl-3 col-lg-6 col-md-6 text-end d-none d-md-block",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mobile-social-icon",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "Follow Us"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/icons/icon-facebook-white.svg",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/icons/icon-twitter-white.svg",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/icons/icon-instagram-white.svg",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/icons/icon-pinterest-white.svg",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/icons/icon-youtube-white.svg",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-sm",
                                        children: "Up to 15% discount on your first subscribe"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./redux/action/productFiltersAction.js
var productFiltersAction = __webpack_require__(7330);
;// CONCATENATED MODULE: ./components/ecommerce/Filter/CategoryProduct2.js




const CategoryProduct2 = ({ updateProductCategory: updateProductCategory1  })=>{
    const router = (0,router_.useRouter)();
    // const removeSearchTerm = () => {
    //     router.push({
    //         pathname: "/products",
    //     });
    // };
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
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "jeans")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/theme/icons/category-1.svg",
                                alt: ""
                            }),
                            "Milks & Dairies"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "shoe")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/theme/icons/category-2.svg",
                                alt: ""
                            }),
                            "Clothing"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "jacket")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/theme/icons/category-3.svg",
                                alt: ""
                            }),
                            "Pet Foods",
                            " "
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "trousers")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/theme/icons/category-4.svg",
                                alt: ""
                            }),
                            "Baking material"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "accessories")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/theme/icons/category-5.svg",
                                alt: ""
                            }),
                            "Fresh Fruit"
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Filter_CategoryProduct2 = ((0,external_react_redux_.connect)(null, {
    updateProductCategory: productFiltersAction/* updateProductCategory */.pP
})(CategoryProduct2));

;// CONCATENATED MODULE: ./components/ecommerce/Filter/CategoryProduct3.js




const CategoryProduct3 = ({ updateProductCategory: updateProductCategory1  })=>{
    const router = (0,router_.useRouter)();
    // const removeSearchTerm = () => {
    //     router.push({
    //         pathname: "/products",
    //     });
    // };
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
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "end",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "jeans")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/theme/icons/category-1.svg",
                                alt: ""
                            }),
                            "Milks & Dairies"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "shoe")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/theme/icons/category-2.svg",
                                alt: ""
                            }),
                            "Clothing"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "jacket")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/theme/icons/category-3.svg",
                                alt: ""
                            }),
                            "Pet Foods",
                            " "
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "trousers")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/theme/icons/category-4.svg",
                                alt: ""
                            }),
                            "Baking material"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "accessories")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/theme/icons/category-5.svg",
                                alt: ""
                            }),
                            "Fresh Fruit"
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Filter_CategoryProduct3 = ((0,external_react_redux_.connect)(null, {
    updateProductCategory: productFiltersAction/* updateProductCategory */.pP
})(CategoryProduct3));

;// CONCATENATED MODULE: ./components/ecommerce/Search.js



const Search = ()=>{
    const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const handleSearch = ()=>{
        console.log("click");
        router.push({
            pathname: "/products",
            query: {
                search: searchTerm
            }
        });
        setSearchTerm("");
    };
    const handleInput = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    className: "select-active",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            children: "All Categories"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            children: "Women's"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            children: "Men's"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            children: "Cellphones"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            children: "Computer"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            children: "Electronics"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            children: " Accessories"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            children: "Home & Garden"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            children: "Luggage"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            children: "Shoes"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            children: "Mother & Kids"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    value: searchTerm,
                    onKeyDown: handleInput,
                    onChange: (e)=>setSearchTerm(e.target.value)
                    ,
                    type: "text",
                    placeholder: "Search"
                })
            ]
        })
    });
};
/* harmony default export */ const ecommerce_Search = (Search);

// EXTERNAL MODULE: external "react-bootstrap/Dropdown"
var Dropdown_ = __webpack_require__(8582);
// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(9306);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: ./pages/location.js
var pages_location = __webpack_require__(9348);
;// CONCATENATED MODULE: ./components/layout/Header.js










const Header = ({ totalCartItems , totalCompareItems , toggleClick , totalWishlistItems ,  })=>{
    const { 0: isToggled , 1: setToggled  } = (0,external_react_.useState)(false);
    const { 0: scroll , 1: setScroll  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });
    const handleToggle = ()=>setToggled(!isToggled)
    ;
    // modal
    const { 0: lgShow , 1: setLgShow  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "header-area header-style-1 header-height-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mobile-promotion",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                "Grand opening, ",
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "up to 15%"
                                }),
                                " off all items. Only ",
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "3 days"
                                }),
                                " left"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-top header-top-ptb-1 d-none d-lg-block",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-4 col-lg-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "header-info",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/shop-wishlist",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Wishlist"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/page-account",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Order Tracking"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-4 col-lg-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                id: "news-flash",
                                                className: "d-inline-block",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            "Get great devices up to 50% off",
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: " View details"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-4 col-lg-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "header-info header-info-right",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            "Need help? Call Us:",
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                                                className: "text-brand",
                                                                children: [
                                                                    " ",
                                                                    "+ 1800 900"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/#",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: "language-dropdown-active",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fi-rs-world"
                                                                        }),
                                                                        "English",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fi-rs-angle-small-down"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "language-dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/#",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/assets/imgs/theme/flag-fr.png",
                                                                                        alt: ""
                                                                                    }),
                                                                                    "Fran\xe7ais"
                                                                                ]
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/#",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/assets/imgs/theme/flag-dt.png",
                                                                                        alt: ""
                                                                                    }),
                                                                                    "Deutsch"
                                                                                ]
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/#",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/assets/imgs/theme/flag-ru.png",
                                                                                        alt: ""
                                                                                    }),
                                                                                    "P\u0443\u0441\u0441\u043A\u0438\u0439"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-middle header-middle-ptb-1 d-none d-lg-block",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "header-wrap",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo logo-width-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/logo.png",
                                                    alt: "logo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "header-right",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "search-style-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(ecommerce_Search, {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "header-action-right",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "header-action-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "search-location",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                                action: "#",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                    className: "select-active",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Your Location"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Alabama"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Alaska"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Arizona"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Delaware"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Florida"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Georgia"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Hawaii"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Indiana"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Maryland"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "Nevada"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "New Jersey"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "New Mexico"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            children: "New York"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "header-action-icon-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/shop-wishlist",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                className: "svgInject",
                                                                                alt: "Evara",
                                                                                src: "/assets/imgs/theme/icons/icon-heart.svg"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "pro-count blue",
                                                                                children: totalWishlistItems
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/shop-wishlist",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "lable",
                                                                        children: "Wishlist"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "header-action-icon-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/shop-cart",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        className: "mini-cart-icon",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                alt: "Evara",
                                                                                src: "/assets/imgs/theme/icons/icon-cart.svg"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "pro-count blue",
                                                                                children: totalCartItems
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/shop-cart",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "lable",
                                                                            children: "Cart"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "header-action-icon-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/page-account",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            className: "svgInject",
                                                                            alt: "Nest",
                                                                            src: "/assets/imgs/theme/icons/icon-user.svg"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/page-account",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "lable ml-0",
                                                                            children: "Account"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "cart-dropdown-wrap cart-dropdown-hm2 account-dropdown",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/page-account",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fi fi-rs-user mr-10"
                                                                                            }),
                                                                                            "My Account"
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/page-account",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fi fi-rs-location-alt mr-10"
                                                                                            }),
                                                                                            "Order Tracking"
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/page-account",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fi fi-rs-label mr-10"
                                                                                            }),
                                                                                            "My Voucher"
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/shop-wishlist",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fi fi-rs-heart mr-10"
                                                                                            }),
                                                                                            "My Wishlist"
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/page-account",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fi fi-rs-settings-sliders mr-10"
                                                                                            }),
                                                                                            "Setting"
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/page-login",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fi fi-rs-sign-out mr-10"
                                                                                            }),
                                                                                            "Sign out"
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: scroll ? "header-bottom header-bottom-bg-color sticky-bar stick" : "header-bottom header-bottom-bg-color sticky-bar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "header-wrap header-space-between position-relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo logo-width-1 d-block d-lg-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/imgs/theme/logo.png",
                                                    alt: "logo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "header-nav d-none d-lg-flex",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "main-categori-wrap d-none d-lg-block",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "categories-button-active",
                                                        onClick: handleToggle,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "fi-rs-apps"
                                                            }),
                                                            "All Categories",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fi-rs-angle-down"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: isToggled ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open" : "categories-dropdown-wrap categories-dropdown-active-large font-heading",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "d-flex categori-dropdown-inner",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Filter_CategoryProduct2, {}),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Filter_CategoryProduct3, {})
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "more_slide_open",
                                                                style: {
                                                                    display: "none"
                                                                },
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "d-flex categori-dropdown-inner",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/products",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                            children: [
                                                                                                " ",
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                                    src: "/assets/imgs/theme/icons/icon-1.svg",
                                                                                                    alt: ""
                                                                                                }),
                                                                                                "Milks and Dairies"
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/products",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                            children: [
                                                                                                " ",
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                                    src: "/assets/imgs/theme/icons/icon-2.svg",
                                                                                                    alt: ""
                                                                                                }),
                                                                                                "Clothing & beauty"
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                            className: "end",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/products",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                            children: [
                                                                                                " ",
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                                    src: "/assets/imgs/theme/icons/icon-3.svg",
                                                                                                    alt: ""
                                                                                                }),
                                                                                                "Wines & Drinks"
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/products",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                            children: [
                                                                                                " ",
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                                    src: "/assets/imgs/theme/icons/icon-4.svg",
                                                                                                    alt: ""
                                                                                                }),
                                                                                                "Fresh Seafood"
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "more_categories",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon"
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "heading-sm-1",
                                                                        children: "Show more..."
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: "hot-deals",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/assets/imgs/theme/icons/icon-hot.svg",
                                                                        alt: "hot deals"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/products",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Hot Deals"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "active",
                                                                        children: "Home"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/shop-list-left",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Shop"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "/bdlist",
                                                                    children: "Brands"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog-category-grid",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Blog"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/page-login",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Login"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/registration",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Register"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hotline d-none d-lg-flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/imgs/theme/mapicon.png",
                                                alt: "hotline",
                                                className: "map-img"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                onClick: ()=>setLgShow(true)
                                                ,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    style: {
                                                        fontSize: 14
                                                    },
                                                    children: [
                                                        "5171 W Campbell Ave undefined Kent,",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Delivery Address "
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "header-action-icon-2 d-block d-lg-none stt",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "burger-icon burger-icon-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "burger-icon-top"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "burger-icon-mid"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "burger-icon-bottom"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "header-action-right d-block d-lg-none",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "header-action-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "header-action-icon-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/shop-wishlist",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "Evara",
                                                                    src: "/assets/imgs/theme/icons/icon-heart.svg"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "pro-count white",
                                                                    children: totalWishlistItems
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "header-action-icon-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/shop-cart",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: "mini-cart-icon",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        alt: "Evara",
                                                                        src: "/assets/imgs/theme/icons/icon-cart.svg"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "pro-count white",
                                                                        children: totalCartItems
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "cart-dropdown-wrap cart-dropdown-hm2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "shopping-cart-img",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/shop-grid-right",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                                alt: "Evara",
                                                                                                src: "/assets/imgs/shop/thumbnail-3.jpg"
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "shopping-cart-title",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                                href: "/shop-grid-right",
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                    children: "Plain Striola Shirts"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                    children: "1 \xd7 "
                                                                                                }),
                                                                                                "$800.00"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "shopping-cart-delete",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/#",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fi-rs-cross-small"
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "shopping-cart-img",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/shop-grid-right",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                                alt: "Evara",
                                                                                                src: "/assets/imgs/shop/thumbnail-4.jpg"
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "shopping-cart-title",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                                href: "/shop-grid-right",
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                    children: "Macbook Pro 2022"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                    children: "1 \xd7 "
                                                                                                }),
                                                                                                "$3500.00"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "shopping-cart-delete",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                        href: "/#",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fi-rs-cross-small"
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "shopping-cart-footer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "shopping-cart-total",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                                children: [
                                                                                    "Total",
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "$383.00"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "shopping-cart-button",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/shop-cart",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        children: "View cart"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/shop-checkout",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        children: "Checkout"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "header-action-icon-2 d-block d-lg-none",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "burger-icon burger-icon-white",
                                                        onClick: toggleClick,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "burger-icon-top"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "burger-icon-mid"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "burger-icon-bottom"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                size: "lg",
                show: lgShow,
                onHide: ()=>setLgShow(false)
                ,
                "aria-labelledby": "example-modal-sizes-title-lg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                        closeButton: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                            id: "example-modal-sizes-title-lg",
                            children: "Add Delivery Address"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Body, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-12 col-md-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "input-style mb-20",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            children: "Address Title"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            name: "name",
                                                            placeholder: "office",
                                                            type: "text"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-12 mt-10 mb-20",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(pages_location["default"], {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "input-style mb-20",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            children: "Address"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            name: "name",
                                                            placeholder: "address..",
                                                            type: "text",
                                                            className: "wt-1"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-12",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "submit submit-auto-width",
                                                    children: "Save Address"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
const mapStateToProps = (state)=>({
        totalCartItems: state.cart.length,
        totalCompareItems: state.compare.items.length,
        totalWishlistItems: state.wishlist.items.length
    })
;
/* harmony default export */ const layout_Header = ((0,external_react_redux_.connect)(mapStateToProps, null)(Header));

;// CONCATENATED MODULE: ./util/outsideClick.js

const useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const outsideClick = (useClickOutside);

;// CONCATENATED MODULE: ./components/layout/MobileMenu.js




const MobileMenu = ({ isToggled , toggleClick  })=>{
    const { 0: isActive , 1: setIsActive  } = (0,external_react_.useState)({
        status: false,
        key: ""
    });
    const handleToggle = (key)=>{
        if (isActive.key === key) {
            setIsActive({
                status: false
            });
        } else {
            setIsActive({
                status: true,
                key
            });
        }
    };
    let domNode = outsideClick(()=>{
        setIsActive({
            status: false
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: isToggled ? "mobile-header-active mobile-header-wrapper-style sidebar-visible" : "mobile-header-active mobile-header-wrapper-style",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mobile-header-wrapper-inner",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mobile-header-top",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mobile-header-logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/imgs/theme/logo.png",
                                            alt: "logo"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mobile-menu-close close-style-wrap close-style-position-inherit",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "close-style search-close",
                                    onClick: toggleClick,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon-top"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon-bottom"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mobile-header-content-area",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mobile-search search-style-3 mobile-header-border",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    action: "#",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            placeholder: "Search for items\u2026"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fi-rs-search"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mobile-menu-wrap mobile-header-border",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-categori-wrap mobile-header-border",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "categori-button-active-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fi-rs-apps"
                                                        }),
                                                        " Browse Categories"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "categori-dropdown-wrap categori-dropdown-active-small rt-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-dress"
                                                                        }),
                                                                        "Women's Clothing"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-tshirt"
                                                                        }),
                                                                        "Men's Clothing"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/shop-grid-right",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "evara-font-smartphone"
                                                                            }),
                                                                            " ",
                                                                            "Cellphones"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-desktop"
                                                                        }),
                                                                        "Computer & Office"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-cpu"
                                                                        }),
                                                                        "Consumer Electronics"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-home"
                                                                        }),
                                                                        "Home & Garden"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-high-heels"
                                                                        }),
                                                                        "Shoes"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-teddy-bear"
                                                                        }),
                                                                        "Mother & Kids"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-kite"
                                                                        }),
                                                                        "Outdoor fun"
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "mobile-menu",
                                            ref: domNode,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Home"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/shop-grid-right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "shop"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/vendors-list",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Brands"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog-category-fullwidth",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Blog"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 6 ? "menu-item-has-children active" : "menu-item-has-children",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            onClick: ()=>handleToggle(6)
                                                            ,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fi-rs-angle-small-down"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Language"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: isActive.key == 6 ? "dropdown" : "d-none",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "English"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "French"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "German"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: "Spanish"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mobile-header-info-wrap mobile-header-border",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "single-mobile-header-info mt-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/page-contact",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: " Our location "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "single-mobile-header-info",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/page-login-register",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Log In / Sign Up "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "single-mobile-header-info",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "(+01) - 2345 - 6789 "
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mobile-social-icon",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-15 text-grey-4",
                                        children: "Follow Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/imgs/theme/icons/icon-facebook.svg",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/imgs/theme/icons/icon-twitter.svg",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/imgs/theme/icons/icon-instagram.svg",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/imgs/theme/icons/icon-pinterest.svg",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/imgs/theme/icons/icon-youtube.svg",
                                                alt: ""
                                            })
                                        })
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
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(4780);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
;// CONCATENATED MODULE: ./components/layout/Layout.js








const Layout = ({ children , parent , sub , subChild , noBreadcrumb , headerStyle ,  })=>{
    const { 0: isToggled , 1: setToggled  } = (0,external_react_.useState)(false);
    const toggleClick = ()=>{
        setToggled(!isToggled);
        isToggled ? document.querySelector("body").classList.remove("mobile-menu-active") : document.querySelector("body").classList.add("mobile-menu-active");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "FreshList Store"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDg8bRuV-VrBPOB2KOtMJ7mrGkD8trhoZM"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                async: true,
                defer: true,
                src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDg8bRuV-VrBPOB2KOtMJ7mrGkD8trhoZM"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                type: "text/javascript",
                src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDg8bRuV-VrBPOB2KOtMJ7mrGkD8trhoZM"
            }),
            isToggled && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "body-overlay-1",
                onClick: toggleClick
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                headerStyle: headerStyle,
                isToggled: isToggled,
                toggleClick: toggleClick
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                isToggled: isToggled,
                toggleClick: toggleClick
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "main",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Breadcrumb, {
                        parent: parent,
                        sub: sub,
                        subChild: subChild,
                        noBreadcrumb: noBreadcrumb
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 7330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lG": () => (/* binding */ updateProductFilters),
/* harmony export */   "m7": () => (/* binding */ updateProductRating),
/* harmony export */   "pP": () => (/* binding */ updateProductCategory)
/* harmony export */ });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6330);

const updateProductFilters = (productFilters)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_PRODUCT_FILTERS */ .Wi,
            payload: {
                productFilters
            }
        });
    }
;
const updateProductCategory = (category)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_PRODUCT_CATEGORY */ .$J,
            payload: {
                category
            }
        });
    }
;
const updateProductRating = (rating)=>(dispatch)=>{
        console.log(rating);
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_RATING */ .Cr,
            payload: rating
        });
    }
;


/***/ })

};
;