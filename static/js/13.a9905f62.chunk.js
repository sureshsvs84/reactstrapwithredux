(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{111:function(e,t,a){"use strict";var n=a(1),r=a(2),s=a(55),o=a(8),c=a(0),l=a.n(c),i=a(4),u=a.n(i),d=a(52),p=a.n(d),f=a(53),m={children:u.a.node,inline:u.a.bool,tag:f.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,o=e.tag,c=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(f.l)(p()(t,!!s&&"form-inline"),a);return l.a.createElement(o,Object(n.a)({},i,{ref:c,className:u}))},t}(c.Component);b.propTypes=m,b.defaultProps={tag:"form"},t.a=b},138:function(e,t,a){"use strict";a.d(t,"c",function(){return u}),a.d(t,"b",function(){return d}),a.d(t,"a",function(){return p}),a.d(t,"d",function(){return f});var n=a(85),r=a.n(n),s=a(86),o=a(5),c=a(96),l=a(97),i=(a(137),{AddPostDetails:function(e){return{type:o.a.ADD_POSTLIST,data:e}},DeletePostDetails:function(e){return{type:o.a.UPDATE_POSTLIST,data:e}},UpdatePostDetails:function(e){return{type:o.a.DELETE_POSTLIST,data:e}},FetchPosts:function(e){return{type:o.a.FETCH_POSTLIST,data:e}},FetchPostDetails:function(e){return{type:o.a.FETCH_POSTDETAILS,data:e}},FetchComments:function(e){return{type:o.a.FETCH_COMMENTS,data:e}},PostComments:function(e){return{type:o.a.POST_COMMENTS,data:e}}}),u=function(){return function(){var e=Object(s.a)(r.a.mark(function e(t,a){var n,s,o,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.b.baseUrl+c.c.posts,s={},o=new c.a(s),e.next=5,Object(l.a)(n,o).catch(function(e){console.log("data error")});case 5:(u=e.sent)&&t(i.FetchPosts(u));case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(s.a)(r.a.mark(function t(a,n){var s,o,u,d;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=c.b.baseUrl+c.c.posts+"/"+e,o={},u=new c.a(o),t.next=5,Object(l.a)(s,u).catch(function(e){console.log("data error")});case 5:return(d=t.sent)&&a(i.FetchPostDetails(d)),t.abrupt("return",d);case 8:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(r.a.mark(function t(a,n){var s,o,u,d;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=c.b.baseUrl+c.c.posts+"/"+e+"/"+c.c.comments,o={},u=new c.a(o),t.next=5,Object(l.a)(s,u).catch(function(e){console.log("data error")});case 5:(d=t.sent)&&a(i.FetchComments(d));case 7:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(s.a)(r.a.mark(function t(a,n){var s,o,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=c.b.baseUrl+c.c.posts,o={id:e.id,title:e.title,body:e.comments},i=new c.a(o),t.next=5,Object(l.b)(s,i).catch(function(e){console.log("data error")});case 5:t.sent.data&&alert("Save Success");case 8:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}},148:function(e,t,a){"use strict";var n=a(1),r=a(2),s=a(0),o=a.n(s),c=a(4),l=a.n(c),i=a(52),u=a.n(i),d=a(53),p={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.p,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.row,c=e.disabled,l=e.check,i=e.inline,p=e.tag,f=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(d.l)(u()(t,!!s&&"row",l?"form-check":"form-group",!(!l||!i)&&"form-check-inline",!(!l||!c)&&"disabled"),a);return"fieldset"===p&&(f.disabled=c),o.a.createElement(p,Object(n.a)({},f,{className:m}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},149:function(e,t,a){"use strict";var n=a(1),r=a(2),s=a(0),o=a.n(s),c=a(4),l=a.n(c),i=a(52),u=a.n(i),d=a(54),p=a.n(d),f=a(53),m=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.string,l.a.number,l.a.shape({size:m,order:m,offset:m})]),h={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:f.p,className:l.a.string,cssModule:l.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:l.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},O=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.hidden,c=e.widths,l=e.tag,i=e.check,d=e.size,m=e.for,b=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];c.forEach(function(t,n){var r=e[t];if(delete b[t],r||""===r){var s,o=!n;if(p()(r)){var c,l=o?"-":"-"+t+"-";s=O(o,t,r.size),h.push(Object(f.l)(u()(((c={})[s]=r.size||""===r.size,c["order"+l+r.order]=r.order||0===r.order,c["offset"+l+r.offset]=r.offset||0===r.offset,c))),a)}else s=O(o,t,r),h.push(s)}});var g=Object(f.l)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,h,!!h.length&&"col-form-label"),a);return o.a.createElement(l,Object(n.a)({htmlFor:m},b,{className:g}))};v.propTypes=h,v.defaultProps=g,t.a=v},167:function(e,t,a){"use strict";var n=a(1),r=a(2),s=a(0),o=a.n(s),c=a(4),l=a.n(c),i=a(52),u=a.n(i),d=a(53),p={tag:d.p,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.l)(u()(t,"card-title"),a);return o.a.createElement(s,Object(n.a)({},c,{className:l}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},314:function(e,t,a){"use strict";var n=a(1),r=a(2),s=a(0),o=a.n(s),c=a(4),l=a.n(c),i=a(52),u=a.n(i),d=a(53),p={tag:d.p,top:l.a.bool,bottom:l.a.bool,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.top,c=e.bottom,l=e.tag,i=Object(r.a)(e,["className","cssModule","top","bottom","tag"]),p="card-img";s&&(p="card-img-top"),c&&(p="card-img-bottom");var f=Object(d.l)(u()(t,p),a);return o.a.createElement(l,Object(n.a)({},i,{className:f}))};f.propTypes=p,f.defaultProps={tag:"img"},t.a=f},315:function(e,t,a){"use strict";var n=a(1),r=a(2),s=a(0),o=a.n(s),c=a(4),l=a.n(c),i=a(52),u=a.n(i),d=a(53),p={tag:d.p,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.l)(u()(t,"card-text"),a);return o.a.createElement(s,Object(n.a)({},c,{className:l}))};f.propTypes=p,f.defaultProps={tag:"p"},t.a=f},367:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(21),s=a(23),o=a(22),c=a(24),l=a(0),i=a.n(l),u=a(31),d=a(25),p=a(57),f=a(58),m=a(61),b=a(314),h=a(62),g=a(167),O=a(315),v=a(59),j=a(111),E=a(148),y=a(149),C=a(77),w=a(64),T=(a(95),a(76)),N=(a(139),a(135),Object(T.a)(),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleEdit=function(e){console.log(e),a.setState({isModalOpen:!a.state.isModalOpen}),a.selectedRowData=e},a.handleDelete=function(e){console.log(e)},a.handleSubmitComments=function(e){e.preventDefault(),a.props.actions.PostComments(a.state)},a.loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.state={isModalOpen:!1},a.updatedData={},a.selectedRowData={},a.handleEdit=a.handleEdit.bind(Object(d.a)(a)),a.handleDelete=a.handleDelete.bind(Object(d.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(d.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(u.a)({},n,a))}},{key:"render",value:function(){var e=this.props,t=e.postDataDetails,a=e.postDetailsComments;return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(p.a,null,i.a.createElement(l.Suspense,{fallback:this.loading()}),i.a.createElement(f.a,{xs:"12",sm:"12",md:"12"},i.a.createElement(m.a,null,i.a.createElement(l.Suspense,{fallback:this.loading()}),i.a.createElement(b.a,{top:!0,width:"100%",height:"400",src:"https://via.placeholder.com/600/92c952",alt:"Card image cap"}),i.a.createElement(h.a,null,i.a.createElement(g.a,null,i.a.createElement("h5",null,t.title)),i.a.createElement(O.a,null,t.body),i.a.createElement(O.a,null,i.a.createElement("small",{className:"text-muted"},t.userId," Last updated 3 mins ago"))))),i.a.createElement(f.a,{xs:"12",sm:"6",md:"6"},i.a.createElement(m.a,null,i.a.createElement(v.a,null,i.a.createElement("strong",null,"Add Comments:"),i.a.createElement("small",null," Form")),i.a.createElement(h.a,null,i.a.createElement(j.a,{onSubmit:this.handleSubmitComments},i.a.createElement(E.a,null,i.a.createElement(y.a,{htmlFor:"company"},"Title"),i.a.createElement(C.a,{type:"text",id:"Title",name:"title",placeholder:"Enter your Title",onChange:this.handleInputChange})),i.a.createElement(E.a,null,i.a.createElement(y.a,{htmlFor:"comments"},"Comments"),i.a.createElement(C.a,{type:"textarea",name:"comments",id:"comments",rows:"9",onChange:this.handleInputChange})),i.a.createElement(w.a,{type:"submit",size:"sm",color:"primary"},i.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),i.a.createElement(w.a,{type:"reset",size:"sm",color:"danger"},i.a.createElement("i",{className:"fa fa-ban"})," Reset"))))),a.map(function(e,a){return e.postId===t.userId?i.a.createElement(f.a,{xs:"12",sm:"12",md:"12",key:a},i.a.createElement(m.a,{className:"text-black"},i.a.createElement(v.a,null,i.a.createElement("h5",null,e.name," - ",e.email)),i.a.createElement(h.a,null,e.body))):null})))}},{key:"componentDidMount",value:function(){var e=this;this.props.actions.FetchPostDetails(this.props.match.params.id).then(function(t){t&&e.props.actions.FetchComments(t.id)})}}]),t}(l.Component)),M=a(9),x=a(27),D=a(11),P=a(138),k=Object(D.k)(Object(x.b)(function(e,t){return{postDataDetails:Object(T.c)(e.rootApplicationReducer.PostReducer.postDataDetails),postDetailsComments:Object(T.c)(e.rootApplicationReducer.PostReducer.postDetailsComments)}},function(e){return{actions:Object(M.b)({FetchPostDetails:P.b,FetchComments:P.a,PostComments:P.d},e)}})(N)),S=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(k,null)}}]),t}(l.Component);t.default=S},59:function(e,t,a){"use strict";var n=a(1),r=a(2),s=a(0),o=a.n(s),c=a(4),l=a.n(c),i=a(52),u=a.n(i),d=a(53),p={tag:d.p,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.l)(u()(t,"card-header"),a);return o.a.createElement(s,Object(n.a)({},c,{className:l}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},67:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={apiBaseUrl:"https://jsonplaceholder.typicode.com",version:"1.0.0",siteUrl:"https://sureshsvs84.github.io/reactstrapwithredux/"}},76:function(e,t,a){"use strict";var n={commonConstants:{appName:"UI-Kit"},userList:{pageTitle:"UserDataList"}},r=a(134),s=a.n(r);a.d(t,"a",function(){return o}),a.d(t,"c",function(){return c}),a.d(t,"b",function(){return i});var o=function(){return n},c=function(e,t){t=t||"array";var a=i(e)||l(e);return a&&"number"===t?0:(!a||"boolean"!==t)&&(a&&"array"===t?[]:a&&"object"===t?{}:e)},l=function(e){return"undefined"===typeof e},i=function(e){if(null===e)return!0;if(s.a.isArray(e)||s.a.isString(e))return 0===e.length;for(var t in e)if(s.a.has(e,t))return!1;return!0}},77:function(e,t,a){"use strict";var n=a(1),r=a(2),s=a(55),o=a(8),c=a(0),l=a.n(c),i=a(4),u=a.n(i),d=a(52),p=a.n(d),f=a(53),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,o=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,b=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,O=new RegExp("\\D","g"),v=u||("select"===s||"textarea"===s?s:"input"),j="form-control";m?(j+="-plaintext",v=u||"input"):"file"===s?j+="-file":g&&(j=d?null:"form-check-input"),h.size&&O.test(h.size)&&(Object(f.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=h.size,delete h.size);var E=Object(f.l)(p()(t,i&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,j),a);return("input"===v||u&&"function"===typeof u)&&(h.type=s),h.children&&!m&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(f.r)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(v,Object(n.a)({},h,{ref:b,className:E}))},t}(l.a.Component);b.propTypes=m,b.defaultProps={type:"text"},t.a=b},95:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(316),o=a(292),c=a(293),l=a(294),i=a(64);t.a=function(e){return r.a.createElement(s.a,{isOpen:e.isModalOpen,toggle:e.toggleModal,className:"modal-lg "+e.className},r.a.createElement(o.a,{toggle:e.toggleModal},"Modal title"),r.a.createElement(c.a,null,e.children),r.a.createElement(l.a,null,r.a.createElement(i.a,{color:"primary",onClick:e.toggleModal},"Do Something")," ",r.a.createElement(i.a,{color:"secondary",onClick:e.toggleModal},"Cancel")))}},96:function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.data=e,this.headers=t}a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r}),a.d(t,"d",function(){return s}),a.d(t,"c",function(){return o});var r={baseUrl:a(67).a.apiBaseUrl},s={userlist:"/users"},o={posts:"/posts",comments:"comments"}},97:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return u});var n=a(85),r=a.n(n),s=a(86),o=a(136),c=a.n(o),l=a(67);c.a.defaults.baseURL=l.a.apiBaseUrl,c.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",c.a.defaults.headers.common["Access-Control-Allow-Methods"]="GET, PUT, POST, DELETE, OPTIONS",c.a.defaults.headers.common["Access-Control-Allow-Headers"]="Content-Type",c.a.defaults.headers.get["Content-Type"]="application/json",c.a.defaults.headers.post["Content-Type"]="application/json",c.a.defaults.headers.post.Accept="application/json",c.a.defaults.headers.post["Acces-Control-Allow-Origin"]="*",c.a.defaults.headers.put["Content-Type"]="application/json",c.a.defaults.headers.put.Accept="application/json",c.a.defaults.headers.put["Acces-Control-Allow-Origin"]="*";var i=function(){var e=Object(s.a)(r.a.mark(function e(t,a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c.a.defaults.headers.post["Content-Type"]="application/json",c.a.defaults.headers.post.Accept="application/json",c.a.defaults.headers.post["Acces-Control-Allow-Origin"]="*",c.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",e.next=6,c.a.post(t,a.data);case 6:if(!(n=e.sent)||200!==n.status){e.next=9;break}return e.abrupt("return",n.data);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(r.a.mark(function e(t,a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(t,{param:a.data}).then(function(e){if(e&&200===e.status)return console.log(e),e.data},function(e){return console.log(e),e});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=13.a9905f62.chunk.js.map