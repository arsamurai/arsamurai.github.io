/*! For license information please see 4.e50be2ab.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[4],{290:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(3),s=r(1),o=r(53),a=r(54),i=r(56),u=r(55),c=r(0),l=r.n(c),f=r(17),p=r(10),_=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(i.a)(c,t);var r=Object(u.a)(c);function c(){return Object(o.a)(this,c),r.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return this.props.isAuth?Object(s.jsx)(e,Object(n.a)({},this.props)):Object(s.jsx)(p.a,{to:"/login"})}}]),c}(l.a.Component);return Object(f.b)(_)(t)}},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(97);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,s=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(u){s=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(s)throw o}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},294:function(e,t,r){e.exports={title:"Users_title__1zr_9",users__items:"Users_users__items__3BDxC",user__item:"Users_user__item__1LBGP",user__photo:"Users_user__photo__1Hz_5",fw__btn:"Users_fw__btn__1nen9",info__box_2:"Users_info__box_2__hZdDn",nameAndStatus:"Users_nameAndStatus__ENyb7",user__status:"Users_user__status__2eoza",bolder:"Users_bolder__3Sen4"}},299:function(e,t,r){e.exports={paginator:"Paginator_paginator__D3X0W",pageNumber:"Paginator_pageNumber__1rA40",selectedPage:"Paginator_selectedPage__2mEpS",arrow_btn:"Paginator_arrow_btn__2A8Ro",arrow:"Paginator_arrow__1MIzk",leftArrow:"Paginator_leftArrow__cRgAQ"}},300:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var a=s.apply(null,n);a&&e.push(a)}else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},307:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(53),o=r(54),a=r(56),i=r(55),u=r(0),c=r.n(u),l=r(17),f=r(129),p=r(294),_=r.n(p),b=r(57),g=r(71),h=r(20),d=function(e){var t=e.user,r=e.key,s=e.followingInProgress,o=e.follow,a=e.unfollow;return Object(n.jsx)("div",{className:_.a.users__items,children:Object(n.jsxs)("div",{className:_.a.user__item,children:[Object(n.jsxs)("div",{className:_.a.info__box_1,children:[Object(n.jsx)(h.b,{to:"/profile/"+t.id,children:Object(n.jsx)("img",{src:null!=t.photos.small?t.photos.small:g.a,alt:"",className:_.a.user__photo})}),t.followed?Object(n.jsx)("button",{disabled:s.some((function(e){return e===t.id})),className:_.a.fw__btn,onClick:function(){a(t.id)},children:"Unfollow"}):Object(n.jsx)("button",{disabled:s.some((function(e){return e===t.id})),className:_.a.fw__btn,onClick:function(){o(t.id)},children:"Follow"})]}),Object(n.jsxs)("div",{className:_.a.info__box_2,children:[Object(n.jsxs)("div",{className:_.a.nameAndStatus,children:[Object(n.jsx)("div",{className:_.a.user__name+" "+_.a.bolder,children:t.name}),Object(n.jsx)("div",{className:_.a.user__status,children:t.status})]}),Object(n.jsxs)("div",{className:_.a.user__location+" "+_.a.bolder,children:[Object(n.jsx)("div",{className:_.a.location__city,children:"user.location.city"}),Object(n.jsx)("div",{className:_.a.location__city,children:"user.location.country"})]})]})]},r)})},j=r(99),m=r(291),v=r(299),w=r.n(v),O=r(300),x=r.n(O),P=r.p+"static/media/arrow.c9e5850e.png",y=function(e){for(var t=e.totalUsersCount,r=e.pageSize,s=e.currentPage,o=e.onPageChanged,a=e.portionSize,i=void 0===a?10:a,c=Math.ceil(t/r),l=[],f=1;f<=c;f++)l.push(f);var p=Math.ceil(c/i),_=Object(u.useState)(1),b=Object(m.a)(_,2),g=b[0],h=b[1],d=(g-1)*i+1,v=g*i;return Object(n.jsxs)("div",{className:w.a.paginator,children:[g>1&&Object(n.jsx)("button",{className:w.a.arrow_btn,onClick:function(){h(g-1),o(d-i)},children:Object(n.jsx)("img",{className:w.a.arrow+" "+w.a.leftArrow,src:P,alt:""})}),l.filter((function(e){return e>=d&&e<=v})).map((function(e){return Object(n.jsx)("span",{className:x()(Object(j.a)({},w.a.selectedPage,s===e),w.a.pageNumber),onClick:function(t){o(e)},children:e},e)})),p>g&&Object(n.jsx)("button",{className:w.a.arrow_btn,onClick:function(){h(g+1),o(d+i)},children:Object(n.jsx)("img",{className:w.a.arrow,src:P,alt:""})})]})},N=function(e){return Object(n.jsxs)("div",{className:_.a.users,children:[Object(n.jsx)("div",{className:_.a.title,children:"Users"}),Object(n.jsx)(y,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.isFetching&&Object(n.jsx)(b.a,{}),e.users.map((function(t){return Object(n.jsx)(d,{user:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow},t.id)}))]})},C=r(290),U=r(11);function S(e,t){return e===t}function A(e,t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var n=t.length,s=0;s<n;s++)if(!e(t[s],r[s]))return!1;return!0}function z(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var r=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return t}!function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,r=null,n=null;return function(){return A(t,r,arguments)||(n=e.apply(null,arguments)),r=arguments,n}}));var k=function(e){return e.usersPage.users},I=function(e){return e.usersPage.pageSize},F=function(e){return e.usersPage.totalUsersCount},D=function(e){return e.usersPage.currentPage},E=function(e){return e.usersPage.isFetching},M=function(e){return e.usersPage.followingInProgress},q=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"onPageChanged",value:function(e){this.props.setCurrentPage(e),this.props.requestUsers(e,this.props.pageSize)}},{key:"render",value:function(){return Object(n.jsx)(N,{users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged.bind(this),totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress})}}]),r}(c.a.Component);t.default=Object(U.d)(Object(l.b)((function(e){return{users:k(e),pageSize:I(e),totalUsersCount:F(e),currentPage:D(e),isFetching:E(e),followingInProgress:M(e)}}),{follow:f.b,unfollow:f.g,setUsers:f.f,setTotalUsersCount:f.e,setCurrentPage:f.d,requestUsers:f.c}),C.a)(q)}}]);
//# sourceMappingURL=4.e50be2ab.chunk.js.map