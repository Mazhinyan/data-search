(window.webpackJsonp=window.webpackJsonp||[]).push([[1,2],{74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),i=a(11),l=a.n(i),s=function(e){var t=e.path,a=e.className;return c.a.createElement("img",{src:r.a+t,className:a,alt:"img"})},o=s;s.propTypes={path:l.a.string.isRequired,className:l.a.string},s.defaultProps={className:""};var u=function(e){var t=e.title,a=e.filePath,r=e.description,i=e.children,l=e.className,s=e.select,u=e.id,d=Object(n.useCallback)((function(){s(u)}),[u]);return c.a.createElement("section",{className:"row result-row  ".concat(l),onClick:d},c.a.createElement("div",{className:"col-3 img-wrapper"},c.a.createElement(o,{path:a,className:"img-fluid"})),c.a.createElement("div",{className:"col-9 p-0"},c.a.createElement("span",{className:"title"},t)," ",c.a.createElement("br",null),c.a.createElement("span",{className:"description"},r)),i)};t.default=u;u.propTypes={title:l.a.string.isRequired,filePath:l.a.string.isRequired,description:l.a.string.isRequired,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),select:l.a.func},u.defaultProps={children:void 0,className:"",select:function(){}}},75:function(e,t,a){"use strict";a.r(t);var n=a(28),c=a.n(n),r=a(10),i=a.n(r),l=a(0),s=a.n(l),o=a(11),u=a.n(o),d=a(6),m=a(8),p=a(29),f=a(31),b=a.n(f),v=function(e){var t=e.children,a=b()(e,["children"]);return s.a.createElement("button",a,t)};v.propTypes={className:u.a.string,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node])},v.defaultProps={children:void 0};var E=v,N=a(7),h=a.n(N),O=a(30),g=function(e){var t=e.onContinue,a=e.cancel,n=e.text,c=document.createElement("div"),r=document.getElementById("portal");Object(l.useEffect)((function(){return r.appendChild(c),function(){r.removeChild(c)}}),[c,r]);var i=s.a.createElement("div",{className:"modal-container"},s.a.createElement("section",{className:"modal-item"},s.a.createElement("div",{className:"modal-mess"}," ",n),s.a.createElement("div",{className:"modal-btns"},s.a.createElement(E,{onClick:a,className:"cancelBtn"},"Cancel"),s.a.createElement(O.a,{onClick:t,className:"defaultBtn",text:"Continue"}))));return h.a.createPortal(i,c)},C=g;g.proptypes={cancle:u.a.func.isRequired,onContinue:u.a.func.isRequired,text:u.a.string.isRequired};var y=a(74),j=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return Object(p.b)(e)})),a=Object(d.c)((function(e){return Object(p.a)(e)})).data,n=Object(l.useState)(!1),r=i()(n,2),o=r[0],u=r[1],f=Object(l.useState)(!1),b=i()(f,2),v=b[0],N=b[1],h=Object(l.useCallback)((function(e){if(e){var t=e.target.dataset.id;t&&N(t)}u((function(e){return!e}))}),[]),O=Object(l.useCallback)((function(){e(Object(m.b)(v)),h()}),[v]);return t.length>0&&a.length>0&&s.a.createElement("section",{className:"selcted-template"},t.map((function(e){var t,n=a.find((function(t){return t.id===e})),r=n.title,i=n.filePath,l=n.description,o=n.id;return s.a.createElement(y.default,{key:e,title:r,filePath:i,description:l,id:o},s.a.createElement(E,(t={className:"close"},c()(t,"className","delete-item"),c()(t,"onClick",h),c()(t,"data-id",o),t),"X"))})),o&&s.a.createElement(C,{onContinue:O,cancel:h,text:"Are you sure you want to delete this item?"}))};t.default=j;j.propTypes={}}}]);