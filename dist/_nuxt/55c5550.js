(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{437:function(t,e,r){"use strict";r(19),r(5),r(16),r(66),r(21),r(300),r(299),r(93),r(80);var n=r(0);var o,c=r(196);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},442:function(t,e,r){"use strict";r(13),r(19),r(22),r(23);var n=r(3),o=(r(5),r(72),r(16),r(15),r(50),r(197),r(34),r(198),r(199),r(200),r(201),r(202),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(35),r(48),r(17),r(66),r(299),r(0)),c=r(196),l=r(4);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],O=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(O),offset:Object.keys(y),order:Object.keys(j)};function S(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var h=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=h.get(l);if(!d){var v,O;for(O in d=[],m)m[O].forEach((function(t){var e=r[t],n=S(O,t,e);n&&d.push(n)}));var y=d.some((function(t){return t.startsWith("col-")}));d.push((v={col:!y||!r.cols},Object(n.a)(v,"col-".concat(r.cols),r.cols),Object(n.a)(v,"offset-".concat(r.offset),r.offset),Object(n.a)(v,"order-".concat(r.order),r.order),Object(n.a)(v,"align-self-".concat(r.alignSelf),r.alignSelf),v)),h.set(l,d)}return t(r.tag,Object(c.a)(data,{class:d}),o)}})},503:function(t,e,r){"use strict";r.r(e);var n=r(442),o=r(437),c=r(61),component=Object(c.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"brief-components"},[t(o.a,[t(n.a,[this._v(" Speakers Page New ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);