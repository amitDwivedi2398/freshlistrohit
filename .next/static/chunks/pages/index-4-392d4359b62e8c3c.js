(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3359],{5593:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index-4",function(){return r(5681)}])},3169:function(e,s,r){"use strict";var i=r(5893),a=r(1163),l=r(2664),t=r(7330);s.Z=(0,l.$j)(null,{updateProductCategory:t.pP})((function(e){var s=e.updateProductCategory,r=(0,a.useRouter)(),l=function(e,i){e.preventDefault(),s(i),r.push({pathname:"/products",query:{cat:i}})};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{onClick:function(e){return l(e,"")},children:(0,i.jsx)("a",{children:"All"})}),(0,i.jsxs)("li",{onClick:function(e){return l(e,"jeans")},children:[(0,i.jsxs)("a",{children:[(0,i.jsx)("img",{src:"/assets/imgs/theme/icons/category-1.svg",alt:""}),"Milks & Dairies"]}),(0,i.jsx)("span",{className:"count",children:"30"})]}),(0,i.jsxs)("li",{onClick:function(e){return l(e,"shoe")},children:[(0,i.jsxs)("a",{children:[(0,i.jsx)("img",{src:"/assets/imgs/theme/icons/category-2.svg",alt:""}),"Clothing"]}),(0,i.jsx)("span",{className:"count",children:"35"})]}),(0,i.jsxs)("li",{onClick:function(e){return l(e,"jacket")},children:[(0,i.jsxs)("a",{children:[(0,i.jsx)("img",{src:"/assets/imgs/theme/icons/category-3.svg",alt:""}),"Pet Foods"," "]}),(0,i.jsx)("span",{className:"count",children:"42"})]})]})})}))},7457:function(e,s,r){"use strict";var i=r(5893),a=r(1163),l=r(7294),t=r(2664),n=r(7330),c=r(3076),d=(r(939),{updateProductFilters:n.lG});s.Z=(0,t.$j)((function(e){return{products:e.products.items}}),d)((function(e){var s=e.updateProductFilters,r=(0,a.useRouter)().query.search,t=(0,l.useState)({value:{min:0,max:500}}),n=t[0],d=t[1];(0,l.useEffect)((function(){var e={price:n.value};s(e)}),[n,r]);var o=(0,l.useState)(1);o[0],o[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{range:!0,allowCross:!1,defaultValue:[0,100],min:0,max:500,onChange:function(e){return d({value:{min:e[0],max:e[1]}})}}),(0,i.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,i.jsx)("span",{children:n.value.min}),(0,i.jsx)("span",{children:n.value.max})]})]})}))},2763:function(e,s,r){"use strict";var i=r(5893),a=r(7294),l=r(2664),t={updateProductFilters:r(7330).lG};s.Z=(0,l.$j)(null,t)((function(e){var s=e.updateProductFilters,r=(0,a.useState)([]),l=r[0],t=r[1],n=(0,a.useState)(0),c=n[0],d=n[1];(0,a.useEffect)((function(){s({sizes:l})}),[l]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:"list-filter size-filter font-small",children:[{value:"s"},{value:"m "},{value:"l"},{value:"xl"}].map((function(e,s){return(0,i.jsx)("li",{className:c==s?"active":"",onClick:function(){return function(e,s){t(s),d(c==e?0:e)}(s,e.value)},children:(0,i.jsx)("a",{children:0==s?"All":"".concat(e.value)})},s)}))})})}))},3828:function(e,s,r){"use strict";r.d(s,{Z:function(){return m}});var i=r(5893),a=r(1163),l=r(7294),t=r(2664),n=r(7330),c=function(e){var s=e.filters,r=e.handleCheckBox;return(0,i.jsx)(i.Fragment,{children:s.map((function(e,s){return(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"checkbox",className:"form-check-input",name:e.name,value:e.value,checked:e.checked,onChange:function(e){return r(e)},id:e.value}),(0,i.jsxs)("label",{className:"form-check-label",htmlFor:e.value,style:{textTransform:"capitalize"},children:[" ",e.value]}),(0,i.jsx)("br",{})]},s)}))})};function d(e,s){(null==s||s>e.length)&&(s=e.length);for(var r=0,i=new Array(s);r<s;r++)i[r]=e[r];return i}function o(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,s){if(!e)return;if("string"===typeof e)return d(e,s);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,s)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u={updateProductFilters:n.lG},m=(0,t.$j)((function(e){return{products:e.products.items}}),u)((function(e){var s=e.updateProductFilters,r=(0,l.useState)([{value:"NestFood"},{value:"stouffer"},{value:"starKist"},{value:"aldi"},{value:"adidas"},{value:"Costco"},{value:"Harris"},{value:"iSnack"},{value:"Burbe"}]),t=r[0],n=r[1],d=(0,a.useRouter)().query.search,u=(0,l.useState)([]),m=u[0],h=u[1];(0,l.useEffect)((function(){s({vendor:m})}),[t,d]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"custome-checkbox",children:(0,i.jsx)(c,{heading:"Select Size",filters:t,handleCheckBox:function(e){!function(e,s,r,i,a){var l=e.target.value,t=s;t.forEach((function(e){if(e.value===l)if(e.checked){e.checked=!1;var s=a.filter((function(e){return e!==l}));i(o(s))}else{e.checked=!0;var r=a.includes(l)?a:o(a).concat([l]);i(o(r))}})),r(o(t))}(e,t,n,h,m)}})})})}))},1484:function(e,s,r){"use strict";var i=r(5893),a=r(1664),l=r.n(a),t=r(8116),n=r(8352);t.ZP.use([t.W_,t.pt]);s.Z=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.tq,{slidesPerView:8,spaceBetween:0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{prevEl:".custom_prev_ct1",nextEl:".custom_next_ct1"},className:"custom-class",children:[{id:1,title:"Cake & Milk",img:"category-1.svg"},{id:2,title:"Oganic Kiwi",img:"category-2.svg"},{id:3,title:"Peach",img:"category-3.svg"},{id:4,title:"Red Apple",img:"category-4.svg"},{id:5,title:"Snack",img:"category-5.svg"},{id:6,title:"Vegetables",img:"category-6.svg"},{id:7,title:"Strawberry",img:"category-7.svg"},{id:8,title:"Black plum",img:"category-8.svg"},{id:9,title:"Custard apple",img:"category-9.svg"},{id:10,title:"Fastfood",img:"category-10.svg"},{id:11,title:"Ice cream",img:"category-11.svg"}].map((function(e,s){return(0,i.jsx)(n.o5,{children:(0,i.jsxs)("div",{className:"card-1",children:[(0,i.jsx)("figure",{className:" img-hover-scale overflow-hidden",children:(0,i.jsx)(l(),{href:"/shop-grid-right",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"assets/imgs/theme/icons/".concat(e.img),alt:""})})})}),(0,i.jsx)("h6",{children:(0,i.jsx)(l(),{href:"/shop-grid-right",children:(0,i.jsx)("a",{children:e.title})})}),(0,i.jsx)("span",{children:"26 items"})]})},s)}))}),(0,i.jsxs)("div",{className:"slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow",id:"carausel-10-columns-arrows",children:[(0,i.jsx)("span",{className:"slider-btn slider-prev slick-arrow custom_prev_ct1",children:(0,i.jsx)("i",{className:"fi-rs-arrow-small-left"})}),(0,i.jsx)("span",{className:"slider-btn slider-next slick-arrow custom_next_ct1",children:(0,i.jsx)("i",{className:"fi-rs-arrow-small-right"})})]})]})}},5681:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return N}});var i=r(5893),a=r(1664),l=r.n(a),t=r(8235),n=r(9394),c=r(9583),d=r(3169),o=r(7457),u=r(2763),m=r(3828),h=r(8698),x=r(8682),j=r(4669),g=r(1484),p=r(8116),v=(r(3029),r(6797),r(8352));p.ZP.use([p.W_,p.tl,p.xW]);var f=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(v.tq,{slidesPerView:1,spaceBetween:0,effect:"fade",fadeEffect:{crossFade:!0},pagination:{clickable:!0},navigation:{prevEl:".custom_prev_i3",nextEl:".custom_next_i3"},className:"hero-slider-1 style-4 dot-style-1 dot-style-1-position-1",children:[(0,i.jsx)(v.o5,{children:(0,i.jsx)("div",{className:"single-hero-slider rectangle single-animation-wrap",style:{backgroundImage:"url(assets/imgs/slider/slider-5.png)"},children:(0,i.jsxs)("div",{className:"slider-content",children:[(0,i.jsxs)("h1",{className:"display-2 mb-40",children:["Don\u2019t miss",(0,i.jsx)("br",{}),"amazing deals"]}),(0,i.jsx)("p",{className:"mb-65",children:"Sign up for the daily newsletter"}),(0,i.jsxs)("form",{className:"form-subcriber d-flex",children:[(0,i.jsx)("input",{type:"email",placeholder:"Your emaill address"}),(0,i.jsx)("button",{className:"btn",type:"submit",children:"Subscribe"})]})]})})}),(0,i.jsx)(v.o5,{children:(0,i.jsx)("div",{className:"single-hero-slider rectangle single-animation-wrap",style:{backgroundImage:"url(assets/imgs/slider/slider-6.png)"},children:(0,i.jsxs)("div",{className:"slider-content",children:[(0,i.jsxs)("h1",{className:"display-2 mb-40",children:["Fresh Vegetables",(0,i.jsx)("br",{}),"Big discount"]}),(0,i.jsx)("p",{className:"mb-65",children:"Save up to 50% off on your first order"}),(0,i.jsxs)("form",{className:"form-subcriber d-flex",children:[(0,i.jsx)("input",{type:"email",placeholder:"Your emaill address"}),(0,i.jsx)("button",{className:"btn",type:"submit",children:"Subscribe"})]})]})})})]}),(0,i.jsxs)("div",{className:"slider-arrow hero-slider-1-arrow",children:[(0,i.jsx)("span",{className:"slider-btn slider-prev slick-arrow custom_prev_i3",children:(0,i.jsx)("i",{className:"fi-rs-angle-left"})}),(0,i.jsx)("span",{className:"slider-btn slider-next slick-arrow custom_next_i3",children:(0,i.jsx)("i",{className:"fi-rs-angle-right"})})]})]})};var N=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.Z,{}),(0,i.jsxs)(c.Z,{noBreadcrumb:"d-none",headerStyle:"header-style-1",children:[(0,i.jsx)("section",{className:"home-slider position-relative mb-30",children:(0,i.jsx)("div",{className:"home-slide-cover",children:(0,i.jsx)(f,{})})}),(0,i.jsx)("div",{className:"container mb-30",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-lg-4-5",children:[(0,i.jsx)("section",{className:"product-tabs section-padding position-relative",children:(0,i.jsx)(t.Z,{})}),(0,i.jsxs)("section",{className:"section-padding pb-5",children:[(0,i.jsxs)("div",{className:"section-title","data-wow-delay":"0",children:[(0,i.jsx)("h3",{className:"",children:"Deals Of The Day"}),(0,i.jsx)(l(),{href:"/shop-grid-right",children:(0,i.jsxs)("a",{className:"show-all",children:["All Deals",(0,i.jsx)("i",{className:"fi-rs-angle-right"})]})})]}),(0,i.jsx)(n.Z,{})]}),(0,i.jsx)("section",{className:"banners mb-15",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)(h.Z,{})})})})]}),(0,i.jsxs)("div",{className:"col-lg-1-5 primary-sidebar sticky-sidebar pt-30",children:[(0,i.jsxs)("div",{className:"sidebar-widget widget-category-2 mb-30",children:[(0,i.jsx)("h5",{className:"section-title style-1 mb-30",children:"Category"}),(0,i.jsx)(d.Z,{})]}),(0,i.jsxs)("div",{className:"sidebar-widget price_range range mb-30",children:[(0,i.jsx)("h5",{className:"section-title style-1 mb-30",children:"Fill by price"}),(0,i.jsx)("div",{className:"bt-1 border-color-1"}),(0,i.jsx)("div",{className:"price-filter",children:(0,i.jsxs)("div",{className:"price-filter-inner",children:[(0,i.jsx)("br",{}),(0,i.jsx)(o.Z,{}),(0,i.jsx)("br",{})]})}),(0,i.jsx)("div",{className:"list-group",children:(0,i.jsxs)("div",{className:"list-group-item mb-10 mt-10",children:[(0,i.jsx)("label",{className:"fw-900",children:"Color"}),(0,i.jsx)(m.Z,{}),(0,i.jsx)("label",{className:"fw-900 mt-15",children:"Item Condition"}),(0,i.jsx)(u.Z,{})]})}),(0,i.jsx)("br",{})]}),(0,i.jsxs)("div",{className:"sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10",children:[(0,i.jsx)("h5",{className:"section-title style-1 mb-30",children:"New products"}),(0,i.jsx)("div",{className:"bt-1 border-color-1"}),(0,i.jsxs)("div",{className:"single-post clearfix",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)("img",{src:"/assets/imgs/shop/thumbnail-3.jpg",alt:"#"})}),(0,i.jsxs)("div",{className:"content pt-10",children:[(0,i.jsx)("h5",{children:(0,i.jsx)("a",{children:"Chen Cardigan"})}),(0,i.jsx)("p",{className:"price mb-0 mt-5",children:"$99.50"}),(0,i.jsx)("div",{className:"product-rate",children:(0,i.jsx)("div",{className:"product-rating",style:{width:"90%"}})})]})]}),(0,i.jsxs)("div",{className:"single-post clearfix",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)("img",{src:"/assets/imgs/shop/thumbnail-4.jpg",alt:"#"})}),(0,i.jsxs)("div",{className:"content pt-10",children:[(0,i.jsx)("h6",{children:(0,i.jsx)("a",{children:"Chen Sweater"})}),(0,i.jsx)("p",{className:"price mb-0 mt-5",children:"$89.50"}),(0,i.jsx)("div",{className:"product-rate",children:(0,i.jsx)("div",{className:"product-rating",style:{width:"80%"}})})]})]}),(0,i.jsxs)("div",{className:"single-post clearfix",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)("img",{src:"/assets/imgs/shop/thumbnail-5.jpg",alt:"#"})}),(0,i.jsxs)("div",{className:"content pt-10",children:[(0,i.jsx)("h6",{children:(0,i.jsx)("a",{children:"Colorful Jacket"})}),(0,i.jsx)("p",{className:"price mb-0 mt-5",children:"$25"}),(0,i.jsx)("div",{className:"product-rate",children:(0,i.jsx)("div",{className:"product-rating",style:{width:"60%"}})})]})]})]}),(0,i.jsxs)("div",{className:"banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none",children:[(0,i.jsx)("img",{src:"/assets/imgs/banner/banner-11.png",alt:""}),(0,i.jsxs)("div",{className:"banner-text",children:[(0,i.jsx)("span",{children:"Oganic"}),(0,i.jsxs)("h4",{children:["Save 17% ",(0,i.jsx)("br",{}),"on"," ",(0,i.jsx)("span",{className:"text-brand",children:"Oganic"}),(0,i.jsx)("br",{}),"Juice"]})]})]})]})]})}),(0,i.jsx)("section",{className:"popular-categories section-padding",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"section-title",children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h3",{children:"Shop by Categories"}),(0,i.jsx)(l(),{href:"/shop-grid-right",children:(0,i.jsxs)("a",{className:"show-all",children:["All Categories",(0,i.jsx)("i",{className:"fi-rs-angle-right"})]})})]})}),(0,i.jsx)("div",{className:"carausel-8-columns-cover position-relative",children:(0,i.jsx)("div",{className:"carausel-8-columns",id:"carausel-8-columns",children:(0,i.jsx)(g.Z,{})})})]})}),(0,i.jsx)(x.Z,{})]})]})}},3029:function(){}},function(e){e.O(0,[6725,2308,8352,9262,9583,9592,420,9774,2888,179],(function(){return s=5593,e(e.s=s);var s}));var s=e.O();_N_E=s}]);