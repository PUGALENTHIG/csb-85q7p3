(this["webpackJsonpecommerce-website-1"]=this["webpackJsonpecommerce-website-1"]||[]).push([[0],{38:function(e,t,c){},51:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var i=c(0),a=c.n(i),n=c(28),s=c.n(n),r=c(3),l=c(69),o=c.p+"static/media/res-logo.2f9021c4.png",d=c(12),j=c(7),m=c(21),u=Object(m.b)({name:"cartUi",initialState:{cartIsVisible:!1},reducers:{toggle:function(e){e.cartIsVisible=!e.cartIsVisible}}}),b=u.actions,x=u,O=(c(51),c(1)),h=[{display:"Home",path:"/home"},{display:"Foods",path:"/pizzas"},{display:"Cart",path:"/cart"},{display:"Contact",path:"/contact"}],p=function(){var e,t=Object(i.useRef)(null),c=Object(i.useRef)(null),a=Object(j.c)((function(e){return e.cart.totalQuantity})),n=Object(j.b)(),s=function(){return t.current.classList.toggle("show__menu")},m=Object(r.p)();return console.log(null===t||void 0===t||null===(e=t.current)||void 0===e?void 0:e.classList.value),Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){document.body.scrollTop>80||document.documentElement.scrollTop>80?c.current.classList.add("header__shrink"):c.current.classList.remove("header__shrink")})),function(){return window.removeEventListener("scroll")}}),[]),Object(O.jsx)("header",{className:"header",ref:c,children:Object(O.jsx)(l.a,{children:Object(O.jsxs)("div",{className:"nav__wrapper d-flex align-items-center justify-content-between",children:[Object(O.jsxs)("div",{className:"logo",onClick:function(){return m("/home")},children:[Object(O.jsx)("img",{src:o,alt:"logo"}),Object(O.jsx)("h5",{children:"Tasty Treat"})]}),Object(O.jsx)("div",{className:"navigation",ref:t,onClick:s,children:Object(O.jsxs)("div",{className:"menu d-flex align-items-center gap-5",onClick:function(e){return e.stopPropagation()},children:[Object(O.jsx)("div",{className:"header__closeButton",children:Object(O.jsx)("span",{onClick:s,children:Object(O.jsx)("i",{className:"ri-close-fill"})})}),h.map((function(e,t){return Object(O.jsx)(d.c,{to:e.path,className:function(e){return e.isActive?"active__menu":""},onClick:s,children:e.display},t)}))]})}),Object(O.jsxs)("div",{className:"nav__right d-flex align-items-center gap-4",children:[Object(O.jsxs)("span",{className:"cart__icon",onClick:function(){n(b.toggle())},children:[Object(O.jsx)("i",{className:"ri-shopping-basket-line"}),Object(O.jsx)("span",{className:"cart__badge",children:a})]}),Object(O.jsx)("span",{className:"mobile__menu",onClick:s,children:Object(O.jsx)("i",{className:"ri-menu-line"})})]})]})})})},g=c(70),f=(c(55),function(){return Object(O.jsxs)("footer",{className:"footer",children:[Object(O.jsxs)("div",{className:"footer__logo",children:[Object(O.jsx)("img",{src:o,alt:"logo"}),Object(O.jsx)("h5",{children:"MyPizza"}),Object(O.jsx)("p",{children:"Best Pizzas in town, try it out!"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{className:"footer__title mb-3",children:"Delivery Time"}),Object(O.jsxs)(g.a,{children:[Object(O.jsxs)("div",{className:"delivery__time-item border-0 ps-0",children:[Object(O.jsx)("span",{children:"Friday - Tuesday"}),Object(O.jsx)("p",{children:"10:00am - 11:00pm"})]}),Object(O.jsxs)("div",{className:"delivery__time-item border-0 ps-0",children:[Object(O.jsx)("span",{children:"Wednesday - Thursday"}),Object(O.jsx)("p",{children:"Off day"})]})]})]})]})}),N=function(e){return document.title="My Pizza -"+e.title,Object(O.jsx)("div",{className:"w-100",children:e.children})},_=c(71),v=c(72),y=c.p+"static/media/delivery-guy.c0194ba7.png",I=(c(56),function(){return Object(O.jsx)(N,{title:"Home",children:Object(O.jsx)("section",{children:Object(O.jsx)(l.a,{children:Object(O.jsxs)(_.a,{children:[Object(O.jsx)(v.a,{lg:"6",md:"6",children:Object(O.jsxs)("div",{className:"hero__content",children:[Object(O.jsx)("h5",{className:"mb-3",children:"Easy order & fast delivery"}),Object(O.jsxs)("h1",{className:"mb-4 hero__title",children:[Object(O.jsx)("span",{children:"Enjoy"})," your favorite Pizza"]}),Object(O.jsx)("button",{className:"order__btn d-flex align-items-center justify-content-between ",children:Object(O.jsxs)(d.b,{to:"/pizzas",children:["Menu ",Object(O.jsx)("i",{className:"ri-arrow-right-s-line"})]})})]})}),Object(O.jsx)(v.a,{lg:"6",md:"6",children:Object(O.jsx)("div",{className:"hero__img",children:Object(O.jsx)("img",{src:y,alt:"delivery-guy",className:"w-100"})})})]})})})})}),C=c(6),z=c.p+"static/media/product_2.1.f1538554.jpg",P=c.p+"static/media/product_2.2.4967c9cb.jpg",S=c.p+"static/media/product_2.3.3914f9eb.jpg",k=c.p+"static/media/product_3.1.9c207cdf.jpg",q=c.p+"static/media/product_3.2.ebcb16b5.jpg",w=c.p+"static/media/product_3.3.f482f459.jpg",A=c.p+"static/media/product_4.1.3c8ecc49.jpg",T=c.p+"static/media/product_4.2.e82e43e0.jpg",E=c.p+"static/media/product_4.3.2df1cebb.png",L=[{id:"02",title:"Vegetarian Pizza",price:115,image01:z,image02:P,image03:S,category:"Pizza",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque."},{id:"03",title:"Double Cheese Margherita",price:110,image01:k,image02:q,image03:w,category:"Pizza",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque."},{id:"04",title:"Maxican Green Wave",price:110,image01:A,image02:T,image03:E,category:"Pizza",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque."},{id:"07",title:"Seafood Pizza",price:115,image01:P,image02:z,image03:S,category:"Pizza",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque."},{id:"08",title:"Thin Cheese Pizza",price:110,image01:q,image02:k,image03:w,category:"Pizza",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque."},{id:"09",title:"Pizza With Mushroom",price:110,image01:T,image02:A,image03:E,category:"Pizza",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque."}],M=(c(38),null!==localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]),Q=null!==localStorage.getItem("totalAmount")?JSON.parse(localStorage.getItem("totalAmount")):0,J=null!==localStorage.getItem("totalQuantity")?JSON.parse(localStorage.getItem("totalQuantity")):0,R=function(e,t,c){localStorage.setItem("cartItems",JSON.stringify(e)),localStorage.setItem("totalAmount",JSON.stringify(t)),localStorage.setItem("totalQuantity",JSON.stringify(c))},U={cartItems:M,totalQuantity:J,totalAmount:Q},H=Object(m.b)({name:"cart",initialState:U,reducers:{addItem:function(e,t){var c=t.payload,i=t.payload.id,a=t.payload.extraIngredients,n=e.cartItems.find((function(e){return e.id===i}));if(n)if(n&&JSON.stringify(n.extraIngredients)===JSON.stringify(a))e.totalQuantity++,n.quantity++;else{var s=JSON.parse(localStorage.getItem("cartItems")).findIndex((function(e){return e.id===n.id})),r={id:n.id,title:n.title,image01:n.image01,price:n.price,quantity:1,totalPrice:n.price,extraIngredients:a};e.cartItems.splice(s,1,r),e.totalQuantity=e.cartItems.reduce((function(e,t){return e+Number(t.quantity)}),0)}else e.cartItems.push({id:c.id,title:c.title,image01:c.image01,price:c.price,quantity:1,totalPrice:c.price,extraIngredients:c.extraIngredients}),e.totalQuantity++;e.totalAmount=e.cartItems.reduce((function(e,t){return e+Number(t.price)*Number(t.quantity)}),0),R(e.cartItems.map((function(e){return e})),e.totalAmount,e.totalQuantity)},removeItem:function(e,t){var c=t.payload,i=e.cartItems.find((function(e){return e.id===c}));e.totalQuantity--,1===i.quantity?e.cartItems=e.cartItems.filter((function(e){return e.id!==c})):(i.quantity--,i.totalPrice=Number(i.totalPrice)-Number(i.price)),e.totalAmount=e.cartItems.reduce((function(e,t){return e+Number(t.price)*Number(t.quantity)}),0),R(e.cartItems.map((function(e){return e})),e.totalAmount,e.totalQuantity)},deleteItem:function(e,t){var c=t.payload,i=e.cartItems.find((function(e){return e.id===c}));i&&(e.cartItems=e.cartItems.filter((function(e){return e.id!==c})),e.totalQuantity=e.totalQuantity-i.quantity),e.totalAmount=e.cartItems.reduce((function(e,t){return e+Number(t.price)*Number(t.quantity)}),0),R(e.cartItems.map((function(e){return e})),e.totalAmount,e.totalQuantity)}}}),B=H.actions,V=H,Y=function(e){var t=e.item,c=t.id,i=t.title,a=t.image01,n=t.price,s=t.extraIngredients,r=Object(j.b)();return Object(O.jsxs)("div",{className:"product__item d-flex flex-column justify-content-between",children:[Object(O.jsxs)("div",{className:"product__content",children:[Object(O.jsx)("img",{className:"product__img w-50",src:a,alt:"Pizza"}),Object(O.jsx)("h5",{children:Object(O.jsx)(d.b,{to:"/pizzas/".concat(c),children:i})})]}),Object(O.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-between",children:[Object(O.jsxs)("span",{className:"product__price mb-2",children:[n," \u20ac "]}),Object(O.jsx)("button",{className:"addTOCART__btn",onClick:function(){r(B.addItem({id:c,title:i,image01:a,price:n,extraIngredients:s}))},children:"Add to Cart"})]})]})},$=c(40),F=c.n($),D=(c(57),function(){var e=Object(i.useState)(0),t=Object(C.a)(e,2),c=t[0],a=t[1],n=L,s=4*c,r=n.slice(s,s+4),o=Math.ceil(n.length/4);return Object(O.jsx)(N,{title:"All Pizzas",children:Object(O.jsx)(l.a,{children:Object(O.jsxs)(_.a,{children:[r.map((function(e){return Object(O.jsx)(v.a,{lg:"3",md:"4",sm:"6",xs:"6",className:"mb-4 mt-4",children:Object(O.jsx)(Y,{item:e})},e.id)})),Object(O.jsx)("div",{className:"d-flex justify-content-center mt-4 mb-4",children:Object(O.jsx)(F.a,{pageCount:o,onPageChange:function(e){var t=e.selected;a(t)},previousLabel:"Prev",nextLabel:"Next",containerClassName:"paginationBttns"})})]})})})}),W=c(13),G=(c(58),function(e){return Object(O.jsx)("section",{className:"common__section",children:Object(O.jsx)(l.a,{children:Object(O.jsx)("h2",{className:"text-white",children:e.title})})})}),K=(c(59),function(e){var t=e.ingredient,c=e.onSelect,i=e.isChecked;return Object(O.jsx)("div",{className:"extraIngredient",children:Object(O.jsxs)("label",{className:"container",children:[t,Object(O.jsx)("input",{type:"checkbox",checked:i,onChange:function(){return c(t)}}),Object(O.jsx)("span",{className:"checkmark"})]})})}),X=(c(60),{MUSHROOMS:"Mushrooms",ONION:"Onion",PEPPER:"Pepper",PINAPPLE:"Pinapple",TUNA:"Tuna",MEAT:"Meat",CHEESE:"Cheese",HOTSAUCE:"Hot Sauce",CORN:"Corn"}),Z=function(){var e=Object(r.r)().id,t=Object(j.b)(),c=Object(i.useState)([]),a=Object(C.a)(c,2),n=a[0],s=a[1],o=Object(i.useState)(!1),d=Object(C.a)(o,2),m=d[0],u=d[1],b=L.find((function(t){return t.id===e})),x=Object(j.c)((function(e){return e.cart.cartItems})),h=Object(i.useState)(b.image01),p=Object(C.a)(h,2),g=p[0],f=p[1],y=b.title,I=b.price,z=b.category,P=b.desc,S=b.image01,k=L.filter((function(e){return z===e.category}));Object(i.useEffect)((function(){var t=x.find((function(t){return t.id===e}));s(t?t.extraIngredients:[])}),[x,e]);return Object(i.useEffect)((function(){f(b.image01),window.scrollTo(0,0)}),[b]),Object(O.jsxs)(N,{title:"Product-details",children:[m&&Object(O.jsx)("div",{className:"updateCartNotifiation",children:Object(O.jsx)("span",{children:"You successfully updated your cart!"})}),Object(O.jsx)(G,{title:y}),Object(O.jsx)("section",{children:Object(O.jsx)(l.a,{children:Object(O.jsxs)(_.a,{children:[Object(O.jsx)(v.a,{lg:"2",md:"2",children:Object(O.jsxs)("div",{className:"product__images",children:[Object(O.jsx)("div",{className:"img__item mb-3",onClick:function(){return f(b.image01)},children:Object(O.jsx)("img",{src:b.image01,alt:"",className:"w-50"})}),Object(O.jsx)("div",{className:"img__item mb-3",onClick:function(){return f(b.image02)},children:Object(O.jsx)("img",{src:b.image02,alt:"",className:"w-50"})}),Object(O.jsx)("div",{className:"img__item",onClick:function(){return f(b.image03)},children:Object(O.jsx)("img",{src:b.image03,alt:"",className:"w-50"})})]})}),Object(O.jsx)(v.a,{lg:"4",md:"4",children:Object(O.jsx)("div",{className:"product__main-img",children:Object(O.jsx)("img",{src:g,alt:"",className:"w-100"})})}),Object(O.jsx)(v.a,{lg:"6",md:"6",children:Object(O.jsxs)("div",{className:"single__product-content",children:[Object(O.jsx)("h2",{className:"product__title mb-3",children:y}),Object(O.jsxs)("p",{className:"product__price",children:[" ","Price: ",Object(O.jsxs)("span",{children:["$",I]})]}),Object(O.jsxs)("p",{className:"category mb-5",children:["Category: ",Object(O.jsx)("span",{children:z})]}),Object(O.jsx)("button",{onClick:function(){u(!0),setTimeout((function(){u(!1)}),3e3),t(B.addItem({id:e,title:y,price:I,image01:S,extraIngredients:n}))},className:"addTOCART__btn",children:x.find((function(t){return t.id===e}))?"Update Cart":"Add to Cart"})]})}),Object(O.jsx)(v.a,{lg:"12",children:Object(O.jsx)("div",{className:"extraIngredientsGrid",children:Object.values(X).map((function(e){return Object(O.jsx)(K,{isChecked:n.includes(e),onSelect:function(e){return function(e){n.includes(e)?s(n.filter((function(t){return t!==e}))):s((function(t){return[].concat(Object(W.a)(t),[e])}))}(e)},ingredient:e},e)}))})}),Object(O.jsxs)(v.a,{lg:"12",children:[Object(O.jsx)("h6",{className:"description",children:"Description"}),Object(O.jsx)("div",{className:"description__content",children:Object(O.jsx)("p",{children:P})})]}),Object(O.jsx)(v.a,{lg:"12",className:"mb-5 mt-4",children:Object(O.jsx)("h2",{className:"related__Product-title",children:"You might also like"})}),k.map((function(e){return Object(O.jsx)(v.a,{lg:"3",md:"4",sm:"6",xs:"6",className:"mb-4",children:Object(O.jsx)(Y,{item:e})},e.id)}))]})})})]})},ee=(c(61),function(e){var t=e.item,c=t.id,i=t.image01,a=t.title,n=t.price,s=t.quantity,r=Object(j.b)();return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"text-center cart__img-box",children:Object(O.jsx)("img",{src:i,alt:""})}),Object(O.jsx)("td",{className:"text-center",children:a}),Object(O.jsxs)("td",{className:"text-center",children:["$",n]}),Object(O.jsxs)("td",{className:"text-center",children:[s,"px"]}),Object(O.jsx)("td",{className:"text-center cart__item-del",children:Object(O.jsx)("i",{className:"ri-delete-bin-line",onClick:function(){r(B.deleteItem(c))}})})]})}),te=function(){var e=Object(j.c)((function(e){return e.cart.cartItems})),t=Object(j.c)((function(e){return e.cart.totalAmount}));return Object(O.jsxs)(N,{title:"Cart",children:[Object(O.jsx)(G,{title:"Your Cart"}),Object(O.jsx)("section",{children:Object(O.jsx)(l.a,{children:Object(O.jsx)(_.a,{children:Object(O.jsxs)(v.a,{lg:"12",children:[0===e.length?Object(O.jsx)("h5",{className:"text-center",children:"Your cart is empty"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h5",{className:"mb-5",children:"Summary of your order"}),Object(O.jsx)("table",{className:"table table-borderless mb-5 align-middle",children:Object(O.jsx)("tbody",{children:e.map((function(e){return Object(O.jsx)(ee,{item:e},e.id)}))})})]}),Object(O.jsxs)("div",{className:"mt-4",children:[Object(O.jsxs)("h6",{children:["Subtotal: $",Object(O.jsx)("span",{className:"cart__subtotal",children:t})]}),Object(O.jsx)("p",{children:"Taxes and shipping will calculate at checkout"}),Object(O.jsxs)("div",{className:"cart__page-btn",children:[Object(O.jsx)("button",{className:"addTOCart__btn me-4",children:Object(O.jsx)(d.b,{to:"/pizzas",children:"Continue Shopping"})}),Object(O.jsx)("button",{className:"addTOCart__btn",children:Object(O.jsx)(d.b,{to:"/checkout",children:"Proceed to checkout"})})]})]})]})})})})]})},ce=(c(62),c(42)),ie=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"checkoutMessage",children:[Object(O.jsxs)("div",{className:"checkoutTitleContainer",children:[Object(O.jsx)(ce.a,{className:"checkoutIcon"}),Object(O.jsx)("h3",{children:"Thank you for your order!"})]}),Object(O.jsx)("span",{children:"Your order is being processed and will be delivered as fast as possible."})]})})},ae=function(){return Object(O.jsxs)(r.d,{children:[Object(O.jsx)(r.b,{path:"/",element:Object(O.jsx)(r.a,{to:"/home"})}),Object(O.jsx)(r.b,{path:"/home",element:Object(O.jsx)(I,{})}),Object(O.jsx)(r.b,{path:"/pizzas",element:Object(O.jsx)(D,{})}),Object(O.jsx)(r.b,{path:"/cart",element:Object(O.jsx)(te,{})}),Object(O.jsx)(r.b,{path:"/checkout",element:Object(O.jsx)(ie,{})}),Object(O.jsx)(r.b,{path:"/pizzas/:id",element:Object(O.jsx)(Z,{})})]})},ne=c(73),se=(c(63),function(e){var t=e.item,c=e.onClose,i=t.id,a=t.title,n=t.price,s=t.image01,l=t.quantity,o=t.extraIngredients,d=Object(r.p)(),m=Object(j.b)();return Object(O.jsx)(ne.a,{className:"border-0 cart__item",onClick:function(){d("/pizzas/".concat(i)),c()},children:Object(O.jsxs)("div",{className:"cart__item-info d-flex gap-4",children:[Object(O.jsx)("img",{src:s,alt:"product-img"}),Object(O.jsxs)("div",{className:"cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{className:"cart__product-title",children:a}),Object(O.jsxs)("p",{className:" d-flex align-items-center gap-5 cart__product-price",children:[l,"x ",Object(O.jsxs)("span",{children:["$",n]})]}),Object(O.jsx)("div",{className:"d-flex flex-column",children:void 0!==o&&Array.from(o).map((function(e){return Object(O.jsx)("span",{className:"m-0",children:e},e)}))}),Object(O.jsxs)("div",{className:" d-flex align-items-center justify-content-between increase__decrease-btn",children:[Object(O.jsx)("span",{className:"increase__btn",onClick:function(e){return function(e){m(B.addItem({id:i,title:a,price:n,image01:s,extraIngredients:o})),e.stopPropagation()}(e)},children:Object(O.jsx)("i",{className:"ri-add-line"})}),Object(O.jsx)("span",{className:"quantity",children:l}),Object(O.jsx)("span",{className:"decrease__btn",onClick:function(e){return function(e){m(B.removeItem(i)),e.stopPropagation()}(e)},children:Object(O.jsx)("i",{className:"ri-subtract-line"})})]})]}),Object(O.jsx)("span",{className:"delete__btn",onClick:function(e){return function(e){m(B.deleteItem(i)),e.stopPropagation()}(e)},children:Object(O.jsx)("i",{className:"ri-close-line"})})]})]})})}),re=(c(64),function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.cart.cartItems})),c=Object(j.c)((function(e){return e.cart.totalAmount})),i=function(){e(b.toggle())};return Object(O.jsx)("div",{className:"cart__container",onClick:i,children:Object(O.jsxs)(g.a,{onClick:function(e){return e.stopPropagation()},className:"cart",children:[Object(O.jsx)("div",{className:"cart__closeButton",children:Object(O.jsx)("span",{onClick:i,children:Object(O.jsx)("i",{className:"ri-close-fill"})})}),Object(O.jsx)("div",{className:"cart__item-list",children:0===t.length?Object(O.jsx)("h6",{className:"text-center",children:"No item added to the cart"}):t.map((function(e,t){return Object(O.jsx)(se,{item:e,onClose:i},t)}))}),Object(O.jsxs)("div",{className:"cart__bottom d-flex align-items-center justify-content-between",children:[Object(O.jsxs)("h6",{children:["Subtotal : ",Object(O.jsxs)("span",{children:["$",c]})]}),Object(O.jsx)("button",{children:Object(O.jsx)(d.b,{to:"/checkout",onClick:i,children:"Checkout"})})]})]})})}),le=function(){var e=Object(j.c)((function(e){return e.cartUi.cartIsVisible}));return Object(O.jsxs)("div",{className:"d-flex flex-column vh-100 justify-content-between",children:[Object(O.jsx)(p,{}),e&&Object(O.jsx)(re,{}),Object(O.jsx)("div",{children:Object(O.jsx)(ae,{})}),Object(O.jsx)(f,{}),Object(O.jsx)(f,{}),Object(O.jsx)(f,{}),Object(O.jsx)(f,{}),Object(O.jsx)(f,{}),Object(O.jsx)(f,{})]})};var oe=function(){return Object(O.jsx)(le,{})},de=(c(65),c(66),c(67),c(41)),je=c.n(de),me=c(23),ue=Object(m.a)({reducer:{cart:V.reducer,cartUi:x.reducer,middleware:[me.a,je.a]}});s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)(j.a,{store:ue,children:Object(O.jsx)(oe,{})})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.d92075cd.chunk.js.map