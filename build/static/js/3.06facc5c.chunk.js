(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[3],{290:function(t,e,s){"use strict";s.d(e,"a",(function(){return f}));var a=s(3),o=s(1),i=s(53),n=s(54),r=s(56),c=s(55),l=s(0),u=s.n(l),_=s(17),p=s(10),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){Object(r.a)(l,e);var s=Object(c.a)(l);function l(){return Object(i.a)(this,l),s.apply(this,arguments)}return Object(n.a)(l,[{key:"render",value:function(){return this.props.isAuth?Object(o.jsx)(t,Object(a.a)({},this.props)):Object(o.jsx)(p.a,{to:"/login"})}}]),l}(u.a.Component);return Object(_.b)(d)(e)}},291:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var a=s(97);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],a=!0,o=!1,i=void 0;try{for(var n,r=t[Symbol.iterator]();!(a=(n=r.next()).done)&&(s.push(n.value),!e||s.length!==e);a=!0);}catch(c){o=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(o)throw i}}return s}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},292:function(t,e,s){t.exports={user__background:"ProfileInfo_user__background__3N3oO",user__main:"ProfileInfo_user__main__2tuNY",user__ava:"ProfileInfo_user__ava__nVv4i",user__description:"ProfileInfo_user__description__LgIBW",user__name:"ProfileInfo_user__name__2ubEZ",user__info:"ProfileInfo_user__info__1Jg8M",info__item:"ProfileInfo_info__item__Tuiz-",status__input:"ProfileInfo_status__input__nDOfa",contacts:"ProfileInfo_contacts__3Q5aR",contactTitle:"ProfileInfo_contactTitle__3Rzq8",fullName:"ProfileInfo_fullName__31cgq",lookingForAJob:"ProfileInfo_lookingForAJob__2AjvX",lookingForAJobBox:"ProfileInfo_lookingForAJobBox__3s-1i",contactValue:"ProfileInfo_contactValue__7eFfO",aboutMe:"ProfileInfo_aboutMe__2e3Q0",lookingForAJobDescription:"ProfileInfo_lookingForAJobDescription__3Nrbl",editBtn:"ProfileInfo_editBtn__8vIsq",saveBtn:"ProfileInfo_saveBtn__1ikCO"}},296:function(t,e,s){},297:function(t,e,s){t.exports={my__posts:"MyPosts_my__posts__3IzjB",title:"MyPosts_title__10w0a",new__post:"MyPosts_new__post__yEa-h",write__post:"MyPosts_write__post__38yY0",add__post:"MyPosts_add__post__1Vu-t"}},298:function(t,e,s){t.exports={post:"Post_post__2DDDX",post__ava:"Post_post__ava__35duT",post__info:"Post_post__info__3thos",post__message:"Post_post__message__2QNFK",post__like:"Post_post__like__2gAgz"}},306:function(t,e,s){"use strict";s.r(e);var a=s(3),o=s(1),i=s(53),n=s(54),r=s(56),c=s(55),l=s(0),u=s.n(l),_=s(296),p=s.n(_),d=s(291),f=s(292),j=s.n(f),b=s.p+"static/media/background.277161b0.jpg",h=s(71),m=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(){var t;Object(i.a)(this,s);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(t=e.call.apply(e,[this].concat(o))).state={status:t.props.status,editMode:!1},t.activeEditMode=function(){t.setState({editMode:!0})},t.deActiveEditMode=function(){t.setState({editMode:!1}),t.props.updateStatus(t.state.status)},t.onStatusChange=function(e){t.setState({status:e.currentTarget.value})},t}return Object(n.a)(s,[{key:"componentDidUpdate",value:function(t,e){t.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[!this.state.editMode&&Object(o.jsx)("div",{children:Object(o.jsx)("span",{onDoubleClick:this.activeEditMode,children:this.state.status})}),this.state.editMode&&Object(o.jsx)("div",{children:Object(o.jsx)("input",{className:j.a.status__input,onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deActiveEditMode,value:this.state.status})})]})})}}]),s}(u.a.Component),O=s(27),x=s(131),v=Object(x.a)({form:"edit-profile"})((function(t){return Object(o.jsxs)("form",{onSubmit:t.handleSubmit,className:j.a.user__description,children:[Object(o.jsx)("h3",{className:j.a.user__name,children:Object(O.c)("",j.a.fullName,"fullName",O.a,"Full name",[])}),Object(o.jsxs)("ul",{className:j.a.user__info,children:[t.status&&Object(o.jsxs)("li",{className:j.a.info__item,children:["Status:",Object(o.jsx)("p",{children:Object(o.jsx)(m,{status:t.status,updateStatus:t.updateStatus})})]}),Object(o.jsxs)("li",{className:j.a.info__item,children:["Contacts:"," ",Object.keys(t.profile.contacts).map((function(t){return Object(o.jsx)("div",{className:j.a.contacts,children:Object(o.jsxs)("div",{className:j.a.contactTitle,children:[t,":"," ",Object(O.c)("",j.a.contactValue,"contacts."+t,O.a,t,[])]})})}))]}),Object(o.jsxs)("li",{className:j.a.info__item,children:["Job:"," ",Object(O.c)(j.a.lookingForAJob,j.a.lookingForAJobBox,"lookingForAJob",O.a,"",[],{type:"checkbox"})]}),Object(o.jsxs)("li",{className:j.a.info__item,children:["Skills:"," ",Object(o.jsx)("div",{children:Object(O.c)("",j.a.lookingForAJobDescription,"lookingForAJobDescription",O.b,"It`s absent",[])})]}),Object(o.jsxs)("li",{className:j.a.info__item,children:["About me:"," ",Object(o.jsx)("div",{children:Object(O.c)("",j.a.aboutMe,"aboutMe",O.b,"It`s absent",[])})]})]}),Object(o.jsx)("button",{className:j.a.saveBtn,children:"Save"})]})})),g=function(t){return Object(o.jsxs)("div",{className:j.a.user__description,children:[Object(o.jsx)("h3",{className:j.a.user__name,children:t.profile.fullName}),Object(o.jsxs)("ul",{className:j.a.user__info,children:[t.status&&Object(o.jsxs)("li",{className:j.a.info__item,children:["Status:",Object(o.jsx)("p",{children:Object(o.jsx)(m,{status:t.status,updateStatus:t.updateStatus})})]}),Object(o.jsxs)("li",{className:j.a.info__item,children:["Contacts:"," ",Object.keys(t.profile.contacts).map((function(e){return Object(o.jsx)(N,{contactTitle:e,contactValue:t.profile.contacts[e]},e)}))]}),Object(o.jsxs)("li",{className:j.a.info__item,children:["Job: ",Object(o.jsx)("p",{children:t.profile.lookingForAJob?"Yes":"No"})]}),Object(o.jsxs)("li",{className:j.a.info__item,children:["Skills:",Object(o.jsx)("p",{children:t.profile.lookingForAJobDescription?t.profile.lookingForAJobDescription:"It`s absent"})]}),Object(o.jsxs)("li",{className:j.a.info__item,children:["About me:",Object(o.jsx)("p",{children:t.profile.aboutMe?t.profile.aboutMe:"It`s absent"})]})]})]})},N=function(t){var e=t.contactTitle,s=t.contactValue;return Object(o.jsx)("div",{className:j.a.contacts,children:Object(o.jsxs)("div",{className:j.a.contactTitle,children:[e,": ",Object(o.jsxs)("div",{className:j.a.contactValue,children:[" ",s]})]})})},P=function(t){var e=Object(l.useState)(!1),s=Object(d.a)(e,2),i=s[0],n=s[1];return Object(o.jsxs)("div",{className:j.a.profile__user,children:[Object(o.jsx)("img",{src:b,className:j.a.user__background}),Object(o.jsxs)("div",{className:j.a.user__main,children:[Object(o.jsxs)("div",{className:j.a.user__left,children:[Object(o.jsx)("img",{src:null!=t.profile.photos.large?t.profile.photos.large:h.a,className:j.a.user__ava}),t.isOwner&&(i?Object(o.jsx)("div",{className:j.a.editBlock,children:Object(o.jsx)("button",{className:j.a.editBtn,onClick:function(){n(!1)},children:"Exit"})}):Object(o.jsx)("div",{className:j.a.editBlock,children:Object(o.jsx)("button",{className:j.a.editBtn,onClick:function(){n(!0)},children:"Edit"})}))]}),Object(o.jsx)("div",{className:j.a.user__right,children:i?Object(o.jsx)(v,Object(a.a)({initialValues:t.profile,onSubmit:function(e){t.saveProfile(e).then((function(){n(!1)}))}},t)):Object(o.jsx)(g,Object(a.a)({profile:t.profile,isOwner:t.isOwner},t))})]})]})},k=s(297),y=s.n(k),S=s(298),I=s.n(S),A=function(t){return Object(o.jsxs)("div",{className:I.a.post,children:[Object(o.jsx)("img",{src:t.ava,alt:"",className:I.a.post__ava}),Object(o.jsxs)("div",{className:I.a.post__info,children:[Object(o.jsx)("div",{className:I.a.post__message,children:t.message}),Object(o.jsxs)("div",{className:I.a.post__like,children:["Like: ",t.likeCount]})]})]})},w=s(89),M=s(46),D=Object(M.a)(30),J=Object(x.a)({form:"addPost"})((function(t){return Object(o.jsxs)("form",{onSubmit:t.handleSubmit,className:y.a.new__post,children:[Object(o.jsx)(w.a,{className:y.a.write__post,component:O.b,name:"newPostText",placeholder:"Your news...",validate:[M.b,D]}),Object(o.jsx)("button",{className:y.a.add__post,children:"Send"})]})})),F=u.a.memo((function(t){console.log("RENDER YO");var e=t.postData.map((function(e){return Object(o.jsx)(A,{ava:null!=t.profile.photos.large?t.profile.photos.large:h.a,message:e.message,likeCount:e.likeCount})}));return Object(o.jsxs)("div",{className:y.a.my__posts,children:[Object(o.jsx)("h3",{className:y.a.title,children:"My posts"}),Object(o.jsx)(J,{onSubmit:function(e){t.addPost(e.newPostText),e.newPostText=""}}),e]})})),B=s(57),C=function(t){return t.profile?Object(o.jsxs)("div",{className:p.a.profile,children:[Object(o.jsx)(P,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,saveProfile:t.saveProfile}),Object(o.jsx)(F,{profile:t.profile,addPost:t.addPost,postData:t.postData})]}):Object(o.jsx)(B.a,{})},T=s(17),E=s(98),V=s(10),U=s(290),Y=s(11),z=function(t){return t.profilePage.profile},R=function(t){return t.profilePage.status},q=function(t){return t.profilePage.postData},Q=function(t){return t.auth.userId},L=function(t){return t.auth.isAuth},X=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.autorithedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(o.jsx)(C,Object(a.a)(Object(a.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,addPost:this.props.addPost,saveProfile:this.props.saveProfile,postData:this.props.postData}))}}]),s}(u.a.Component);e.default=Object(Y.d)(Object(T.b)((function(t){return{profile:z(t),status:R(t),autorithedUserId:Q(t),isAuth:L(t),postData:q(t)}}),{getUserProfile:E.c,getUserStatus:E.d,updateStatus:E.g,addPost:E.a,saveProfile:E.f}),V.g,U.a)(X)}}]);
//# sourceMappingURL=3.06facc5c.chunk.js.map