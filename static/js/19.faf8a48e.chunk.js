(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{108:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(75),o=a(72),c=a(73),l=a(74),i=a(71);t.a=function(e){return r.a.createElement(s.a,{isOpen:e.isModalOpen,toggle:e.toggleModal,className:"modal-slide "+e.className},r.a.createElement(o.a,{toggle:e.toggleModal},"Modal title"),r.a.createElement(c.a,null,e.children),r.a.createElement(l.a,null,r.a.createElement(i.a,{color:"primary",onClick:e.toggleModal},"Do Something")," ",r.a.createElement(i.a,{color:"secondary",onClick:e.toggleModal},"Cancel")))}},109:function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.data=e,this.headers=t}a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r}),a.d(t,"d",function(){return s}),a.d(t,"c",function(){return o});var r={baseUrl:a(83).a.apiBaseUrl},s={userlist:"/users"},o={posts:"/posts",comments:"comments"}},110:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return u});var n=a(99),r=a.n(n),s=a(100),o=a(149),c=a.n(o),l=a(83);c.a.defaults.baseURL=l.a.apiBaseUrl,c.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",c.a.defaults.headers.common["Access-Control-Allow-Methods"]="GET, PUT, POST, DELETE, OPTIONS",c.a.defaults.headers.common["Access-Control-Allow-Headers"]="Content-Type",c.a.defaults.headers.get["Content-Type"]="application/json",c.a.defaults.headers.post["Content-Type"]="application/json",c.a.defaults.headers.post.Accept="application/json",c.a.defaults.headers.post["Acces-Control-Allow-Origin"]="*",c.a.defaults.headers.put["Content-Type"]="application/json",c.a.defaults.headers.put.Accept="application/json",c.a.defaults.headers.put["Acces-Control-Allow-Origin"]="*";var i=function(){var e=Object(s.a)(r.a.mark(function e(t,a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c.a.defaults.headers.post["Content-Type"]="application/json",c.a.defaults.headers.post.Accept="application/json",c.a.defaults.headers.post["Acces-Control-Allow-Origin"]="*",c.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",e.next=6,c.a.post(t,a.data);case 6:if(!(n=e.sent)||200!==n.status){e.next=9;break}return e.abrupt("return",n.data);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(r.a.mark(function e(t,a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(t,{param:a.data}).then(function(e){if(e&&200===e.status)return console.log(e),e.data},function(e){return console.log(e),e});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},158:function(e,t,a){"use strict";var n=a(2),r=a(4),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(5),u=a.n(i),d=a(3),p={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.p,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.row,c=e.disabled,l=e.check,i=e.inline,p=e.tag,f=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(d.l)(u()(t,!!s&&"row",l?"form-check":"form-group",!(!l||!i)&&"form-check-inline",!(!l||!c)&&"disabled"),a);return"fieldset"===p&&(f.disabled=c),o.a.createElement(p,Object(n.a)({},f,{className:m}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},159:function(e,t,a){"use strict";var n=a(2),r=a(4),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(5),u=a.n(i),d=a(76),p=a.n(d),f=a(3),m=l.a.oneOfType([l.a.number,l.a.string]),h=l.a.oneOfType([l.a.string,l.a.number,l.a.shape({size:m,order:m,offset:m})]),b={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:f.p,className:l.a.string,cssModule:l.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:l.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},E=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.hidden,c=e.widths,l=e.tag,i=e.check,d=e.size,m=e.for,h=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];c.forEach(function(t,n){var r=e[t];if(delete h[t],r||""===r){var s,o=!n;if(p()(r)){var c,l=o?"-":"-"+t+"-";s=E(o,t,r.size),b.push(Object(f.l)(u()(((c={})[s]=r.size||""===r.size,c["order"+l+r.order]=r.order||0===r.order,c["offset"+l+r.offset]=r.offset||0===r.offset,c))),a)}else s=E(o,t,r),b.push(s)}});var g=Object(f.l)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,b,!!b.length&&"col-form-label"),a);return o.a.createElement(l,Object(n.a)({htmlFor:m},h,{className:g}))};v.propTypes=b,v.defaultProps=g,t.a=v},358:function(e,t,a){"use strict";a.r(t);var n=a(26),r=a(27),s=a(29),o=a(28),c=a(30),l=a(0),i=a.n(l),u=a(31),d=a(79),p=a(81),f=a(80),m=a(158),h=a(159),b=a(91),g=a(78),E=a(77),v=a(108),O=a(90),y=a(152),j=(a(148),Object(O.a)()),w=function(e){return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement("strong",null,"Company"),i.a.createElement("small",null," Form")),i.a.createElement(f.a,null,i.a.createElement(m.a,null,i.a.createElement(h.a,{htmlFor:"company"},"First Name"),i.a.createElement(b.a,{type:"text",id:"company",placeholder:"Enter your First Name",value:e.name})),i.a.createElement(m.a,null,i.a.createElement(h.a,{htmlFor:"vat"},"Email"),i.a.createElement(b.a,{type:"text",id:"vat",placeholder:"Enter your Email",value:e.email})),i.a.createElement(m.a,null,i.a.createElement(h.a,{htmlFor:"street"},"Phone"),i.a.createElement(b.a,{type:"text",id:"street",placeholder:"Enter your Phone",value:e.phone})),i.a.createElement(m.a,{row:!0,className:"my-0"},i.a.createElement(g.a,{xs:"8"},i.a.createElement(m.a,null,i.a.createElement(h.a,{htmlFor:"city"},"WebSite"),i.a.createElement(b.a,{type:"text",id:"city",placeholder:"Enter your website",value:e.website}))))))},x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleEdit=function(e){console.log(e),a.setState({isModalOpen:!a.state.isModalOpen}),a.selectedRowData=e},a.handleDelete=function(e){console.log(e)},a.state={isModalOpen:!1},a.updatedData={},a.selectedRowData={},a.handleEdit=a.handleEdit.bind(Object(u.a)(a)),a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.userDataList;return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(v.a,{isModalOpen:this.state.isModalOpen,toggleModal:function(){return e.handleEdit()}},i.a.createElement(w,this.selectedRowData)),i.a.createElement(E.a,null,i.a.createElement(g.a,{xs:"12",sm:"12",md:"12"},i.a.createElement(d.a,null,i.a.createElement(p.a,null,j.userList.pageTitle),i.a.createElement(f.a,null,i.a.createElement(y.a,{data:t,columns:[{Header:"First Name",accessor:"name"},{Header:"User",accessor:"username"},{Header:"Email",accessor:"email"},{Header:"Phone",accessor:"phone"},{Header:"WebSite",accessor:"website"},{Header:"Action",Cell:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:function(){return e.handleEdit(t.original)}},"Edit")," ",i.a.createElement("button",{onClick:function(){return e.handleEdit(t.original)}},"Delete"))}}],defaultPageSize:10}))))))}},{key:"componentDidMount",value:function(){this.props.actions.FetchUserDetails()}}]),t}(l.Component),M=a(12),k=a(35),N=a(15),C=a(99),T=a.n(C),D=a(100),A=a(8),z=a(109),R=a(110),U=(a(150),function(e){return{type:A.b.ADD_USERLIST,data:e}}),S=function(e){return{type:A.b.FETCH_USERLIST,data:e}},F=function(e){return function(t,a){t(U(e))}},P=function(){return function(){var e=Object(D.a)(T.a.mark(function e(t,a){var n,r,s,o;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=z.b.baseUrl+z.d.userlist,r={},s=new z.a(r),e.next=5,Object(R.a)(n,s).catch(function(e){console.log("data error")});case 5:(o=e.sent)&&t(S(o));case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},L=Object(N.k)(Object(k.b)(function(e,t){return{userDataList:Object(O.c)(e.rootApplicationReducer.UserDataListReducer.userDataList)}},function(e){return{actions:Object(M.b)({AddUserDetails:F,FetchUserDetails:P},e)}})(x)),H=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(L,null)}}]),t}(l.Component);t.default=H},81:function(e,t,a){"use strict";var n=a(2),r=a(4),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(5),u=a.n(i),d=a(3),p={tag:d.p,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.l)(u()(t,"card-header"),a);return o.a.createElement(s,Object(n.a)({},c,{className:l}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},83:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={apiBaseUrl:"https://jsonplaceholder.typicode.com",version:"1.0.0",siteUrl:"https://sureshsvs84.github.io/reactstrapwithredux/"}},90:function(e,t,a){"use strict";var n={commonConstants:{appName:"UI-Kit"},userList:{pageTitle:"UserDataList"}},r=a(147),s=a.n(r);a.d(t,"a",function(){return o}),a.d(t,"c",function(){return c}),a.d(t,"b",function(){return i});var o=function(){return n},c=function(e,t){t=t||"array";var a=i(e)||l(e);return a&&"number"===t?0:(!a||"boolean"!==t)&&(a&&"array"===t?[]:a&&"object"===t?{}:e)},l=function(e){return"undefined"===typeof e},i=function(e){if(null===e)return!0;if(s.a.isArray(e)||s.a.isString(e))return 0===e.length;for(var t in e)if(s.a.has(e,t))return!1;return!0}},91:function(e,t,a){"use strict";var n=a(2),r=a(4),s=a(11),o=a(6),c=a(0),l=a.n(c),i=a(1),u=a.n(i),d=a(5),p=a.n(d),f=a(3),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,o=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,h=e.innerRef,b=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),v=u||("select"===s||"textarea"===s?s:"input"),O="form-control";m?(O+="-plaintext",v=u||"input"):"file"===s?O+="-file":g&&(O=d?null:"form-check-input"),b.size&&E.test(b.size)&&(Object(f.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=b.size,delete b.size);var y=Object(f.l)(p()(t,i&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,O),a);return("input"===v||u&&"function"===typeof u)&&(b.type=s),b.children&&!m&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(f.r)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),l.a.createElement(v,Object(n.a)({},b,{ref:h,className:y}))},t}(l.a.Component);h.propTypes=m,h.defaultProps={type:"text"},t.a=h}}]);
//# sourceMappingURL=19.faf8a48e.chunk.js.map