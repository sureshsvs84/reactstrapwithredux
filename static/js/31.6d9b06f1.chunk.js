(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{354:function(e,a,t){"use strict";t.r(a);var n=t(20),s=t(21),l=t(24),o=t(22),r=t(23),c=t(0),i=t.n(c),u=t(52),m=t(53),d=t(55),f=t(57),b=t(56),p=t(1),g=t(2),j=t(4),h=t.n(j),v=t(47),N=t.n(v),E=t(48),y={tag:E.p,fluid:h.a.bool,className:h.a.string,cssModule:h.a.object},O=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=e.fluid,l=Object(g.a)(e,["className","cssModule","tag","fluid"]),o=Object(E.l)(N()(a,"jumbotron",!!s&&"jumbotron-fluid"),t);return i.a.createElement(n,Object(p.a)({},l,{className:o}))};O.propTypes=y,O.defaultProps={tag:"div"};var M=O,k=t(59),w=t(78),T=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Jumbotron"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/jumbotron/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(b.a,null,i.a.createElement(M,null,i.a.createElement("h1",{className:"display-3"},"Hello, world!"),i.a.createElement("p",{className:"lead"},"This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."),i.a.createElement("hr",{className:"my-2"}),i.a.createElement("p",null,"It uses utility classes for typgraphy and spacing to space content out within the larger container."),i.a.createElement("p",{className:"lead"},i.a.createElement(k.a,{color:"primary"},"Learn More")))))),i.a.createElement(m.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Jumbotron"),i.a.createElement("small",null," fluid")),i.a.createElement(b.a,null,i.a.createElement(M,{fluid:!0},i.a.createElement(w.a,{fluid:!0},i.a.createElement("h1",{className:"display-3"},"Fluid jumbotron"),i.a.createElement("p",{className:"lead"},"This is a modified jumbotron that occupies the entire horizontal space of its parent."))))))))}}]),a}(c.Component);a.default=T},49:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},52:function(e,a,t){"use strict";var n=t(1),s=t(2),l=t(0),o=t.n(l),r=t(4),c=t.n(r),i=t(47),u=t.n(i),m=t(48),d={tag:m.p,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},f=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,r=e.tag,c=e.form,i=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.l)(u()(a,l?"no-gutters":null,c?"form-row":"row"),t);return o.a.createElement(r,Object(n.a)({},i,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},53:function(e,a,t){"use strict";var n=t(1),s=t(2),l=t(49),o=t.n(l),r=t(0),c=t.n(r),i=t(4),u=t.n(i),m=t(47),d=t.n(m),f=t(48),b=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:b,offset:b})]),g={tag:f.p,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,l=e.widths,r=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];l.forEach(function(a,n){var s=e[a];if(delete i[a],s||""===s){var l=!n;if(o()(s)){var r,c=l?"-":"-"+a+"-",m=h(l,a,s.size);u.push(Object(f.l)(d()(((r={})[m]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r)),t))}else{var b=h(l,a,s);u.push(b)}}}),u.length||u.push("col");var m=Object(f.l)(d()(a,u),t);return c.a.createElement(r,Object(n.a)({},i,{className:m}))};v.propTypes=g,v.defaultProps=j,a.a=v},55:function(e,a,t){"use strict";var n=t(1),s=t(2),l=t(0),o=t.n(l),r=t(4),c=t.n(r),i=t(47),u=t.n(i),m=t(48),d={tag:m.p,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,l=e.color,r=e.body,c=e.inverse,i=e.outline,d=e.tag,f=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(m.l)(u()(a,"card",!!c&&"text-white",!!r&&"card-body",!!l&&(i?"border":"bg")+"-"+l),t);return o.a.createElement(d,Object(n.a)({},b,{className:p,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},56:function(e,a,t){"use strict";var n=t(1),s=t(2),l=t(0),o=t.n(l),r=t(4),c=t.n(r),i=t(47),u=t.n(i),m=t(48),d={tag:m.p,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,r=e.tag,c=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.l)(u()(a,"card-body"),t);return o.a.createElement(r,Object(n.a)({},c,{className:i,ref:l}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},57:function(e,a,t){"use strict";var n=t(1),s=t(2),l=t(0),o=t.n(l),r=t(4),c=t.n(r),i=t(47),u=t.n(i),m=t(48),d={tag:m.p,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),c=Object(m.l)(u()(a,"card-header"),t);return o.a.createElement(l,Object(n.a)({},r,{className:c}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},59:function(e,a,t){"use strict";var n=t(1),s=t(2),l=t(50),o=t(6),r=t(0),c=t.n(r),i=t(4),u=t.n(i),m=t(47),d=t.n(m),f=t(48),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(l.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],l=e.block,o=e.className,r=e.close,i=e.cssModule,u=e.color,m=e.outline,b=e.size,p=e.tag,g=e.innerRef,j=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof j.children&&(j.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(m?"-outline":"")+"-"+u,v=Object(f.l)(d()(o,{close:r},r||"btn",r||h,!!b&&"btn-"+b,!!l&&"btn-block",{active:a,disabled:this.props.disabled}),i);j.href&&"button"===p&&(p="a");var N=r?"Close":null;return c.a.createElement(p,Object(n.a)({type:"button"===p&&j.onClick?"button":void 0},j,{className:v,ref:g,onClick:this.onClick,"aria-label":t||N}))},a}(c.a.Component);p.propTypes=b,p.defaultProps={color:"secondary",tag:"button"},a.a=p}}]);
//# sourceMappingURL=31.6d9b06f1.chunk.js.map