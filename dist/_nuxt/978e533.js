(window.webpackJsonp=window.webpackJsonp||[]).push([[23,11],{478:function(t,e,r){"use strict";r(13),r(5),r(11),r(74),r(24),r(323),r(322),r(79),r(89);var n=r(0);var l,c=r(119);e.a=(l="container",n.a.extend({name:"v-".concat(l),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(l," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var o=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));o.length&&(data.staticClass+=" ".concat(o.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,l=e.children,o=data.attrs;return o&&(data.attrs={},r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),l)}})},482:function(t,e,r){"use strict";r(9),r(13),r(16),r(17);var n=r(2),l=(r(5),r(48),r(11),r(21),r(57),r(220),r(29),r(221),r(222),r(223),r(224),r(225),r(226),r(227),r(228),r(229),r(230),r(231),r(232),r(233),r(38),r(40),r(12),r(74),r(322),r(0)),c=r(119),o=r(1);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],m=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),_=d.reduce((function(t,e){return t["offset"+Object(o.F)(e)]={type:[String,Number],default:null},t}),{}),h=d.reduce((function(t,e){return t["order"+Object(o.F)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(m),offset:Object.keys(_),order:Object.keys(h)};function y(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var l=e.replace(t,"");n+="-".concat(l)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var C=new Map;e.a=l.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},_),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,l=e.children,o=(e.parent,"");for(var v in r)o+=String(r[v]);var f=C.get(o);if(!f){var d,m;for(m in f=[],x)x[m].forEach((function(t){var e=r[t],n=y(m,t,e);n&&f.push(n)}));var _=f.some((function(t){return t.startsWith("col-")}));f.push((d={col:!_||!r.cols},Object(n.a)(d,"col-".concat(r.cols),r.cols),Object(n.a)(d,"offset-".concat(r.offset),r.offset),Object(n.a)(d,"order-".concat(r.order),r.order),Object(n.a)(d,"align-self-".concat(r.alignSelf),r.alignSelf),d)),C.set(o,f)}return t(r.tag,Object(c.a)(data,{class:f}),l)}})},504:function(t,e,r){t.exports=r.p+"img/magic_link.5e6207a.svg"},525:function(t,e,r){"use strict";r.r(e);var n=r(466),l=r(482),c=r(478),o=r(475),v=(r(25),r(15)),f=(r(69),{data:function(){return{events:[],id:this.$route.params.id}},components:{},methods:{getEventsData:function(t){var e=this;return Object(v.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.$get("/admin/events/".concat(t));case 3:data=r.sent,e.events=data.data,console.log("events",e.events),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Error fetching event details:",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},created:function(){this.$route.params.id&&(this.id=this.$route.params.id,console.log("ID:",this.id),this.getEventsData(this.id))}}),d=r(68),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e(c.a,[t.events?e("div",{},[e(c.a,[e(o.a,{staticClass:"d-flex justify-center"},[e(l.a,{attrs:{md:"5",cols:"12"}},[e("div",{staticClass:"loginForm p-4"},[e(l.a,{staticClass:"d-flex justify-space-between",attrs:{cols:"12"}},[e("h5",[t._v(t._s(t.events.name))])]),t._v(" "),e(l.a,{attrs:{cols:"12 pb-2"}},[t._v("Your plan: "+t._s(t.events.type))])],1),t._v(" "),e("div",{staticClass:"loginForm mt-4 p-4"},[e(l.a,{attrs:{cols:"12 pb-2"}},[e("h5",[t._v("Magic link")])]),t._v(" "),e(l.a,{staticClass:"d-flex align-center justify-center",attrs:{cols:"12 pb-2"}},[e("img",{staticClass:"magic-link",attrs:{src:r(504),alt:"magic-link"}})]),t._v(" "),e(l.a,{attrs:{cols:"12 pb-2"}},[t._v("\n              Generate your event preview link below and share it with anyone.\n              Unless you publish your event, every generated link expires\n              after 24 hours.\n            ")]),t._v(" "),e("div",{staticClass:"d-flex flex-column justify-center align-center ma-3"},[e(n.a,{staticClass:"btn-transparent"},[t._v("copy magic link")]),t._v(" "),e(n.a,{staticClass:"btn-green"},[t._v("generate link")])],1)],1)]),t._v(" "),e(l.a,{attrs:{md:"7",cols:"12"}},[e("div",{staticClass:"loginForm"},[e(l.a,{staticClass:"d-flex",attrs:{cols:"12"}},[e("h5",[t._v("Status of My awesome event")])]),t._v(" "),e(l.a,{attrs:{cols:"12 pb-2"}},[e("p",[t._v("Status: Draft")])]),t._v(" "),e(l.a,{attrs:{cols:"12 pb-2"}},[e("p",[t._v("Status: Draft")])]),t._v(" "),e("hr"),t._v(" "),e(l.a,{attrs:{cols:"12 pb-2"}},[e(o.a,[e(l.a,{attrs:{cols:"12 pb-2",md:"6"}},[e("p",[t._v("Features")]),t._v(" "),e("div",{staticClass:"d-flex flex-column"},[e("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[e(n.a,{staticClass:"navTitle",attrs:{text:""}},[t._v("Newsfeed")])],1),t._v(" "),e("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[e(n.a,{staticClass:"navTitle",attrs:{text:""}},[t._v("Custom menu")])],1)],1)]),t._v(" "),e(l.a,{attrs:{cols:"12 pb-2",md:"6"}},[e("p",[t._v("Premium features")]),t._v(" "),e("div",{staticClass:"d-flex flex-column"},[e("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[e(n.a,{staticClass:"navTitle",attrs:{text:""}},[t._v("Questions&Polls")])],1),t._v(" "),e("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[e(n.a,{staticClass:"navTitle",attrs:{text:""}},[t._v("Networking")])],1)],1)])],1)],1)],1)])],1),t._v(" "),e(o.a,[e(l.a,{staticClass:"d-flex",attrs:{md:"12"}},[e(l.a,{staticClass:"loginForm ma-2 d-flex align-center flex-column",attrs:{md:"4"}},[e("h5",[t._v("Imported")]),t._v(" "),e("p",[t._v("0")])]),t._v(" "),e(l.a,{staticClass:"loginForm ma-2 d-flex align-center flex-column",attrs:{md:"4"}},[e("h5",[t._v("Invitees")]),t._v(" "),e("p",[t._v("0")])]),t._v(" "),e(l.a,{staticClass:"loginForm ma-2 d-flex align-center flex-column",attrs:{md:"4"}},[e("h5",[t._v("Attendees")]),t._v(" "),e("p",[t._v("0")])])],1)],1),t._v(" "),e(o.a,[e(l.a,{staticClass:"d-flex",attrs:{md:"12"}},[e(l.a,{staticClass:"loginForm ma-2 d-flex align-center flex-column",attrs:{md:"6"}},[e("h5",[t._v("Latest ratings")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("0")])]),t._v(" "),e(l.a,{staticClass:"loginForm ma-2 d-flex align-center flex-column",attrs:{md:"6"}},[e("h5",[t._v("Latest feeds")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("0")])])],1)],1)],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},630:function(t,e,r){"use strict";r.r(e);var n={name:"verview",components:{Overview:r(525).default}},l=r(68),component=Object(l.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"homepage"},[t("section",{staticClass:"header-section"},[t("Overview")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);