(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{437:function(t,e,r){"use strict";r(19),r(5),r(16),r(66),r(21),r(300),r(299),r(93),r(80);var n=r(0);var l,o=r(196);e.a=(l="container",n.a.extend({name:"v-".concat(l),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(l," ").concat(data.staticClass||"").trim();var o=data.attrs;if(o){data.attrs={};var c=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,l=e.children,c=data.attrs;return c&&(data.attrs={},r=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),l)}})},442:function(t,e,r){"use strict";r(13),r(19),r(22),r(23);var n=r(3),l=(r(5),r(72),r(16),r(15),r(50),r(197),r(34),r(198),r(199),r(200),r(201),r(202),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(35),r(48),r(17),r(66),r(299),r(0)),o=r(196),c=r(4);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],m=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),_=d.reduce((function(t,e){return t["offset"+Object(c.F)(e)]={type:[String,Number],default:null},t}),{}),h=d.reduce((function(t,e){return t["order"+Object(c.F)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(_),order:Object.keys(h)};function x(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var l=e.replace(t,"");n+="-".concat(l)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var C=new Map;e.a=l.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},_),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,l=e.children,c=(e.parent,"");for(var v in r)c+=String(r[v]);var f=C.get(c);if(!f){var d,m;for(m in f=[],y)y[m].forEach((function(t){var e=r[t],n=x(m,t,e);n&&f.push(n)}));var _=f.some((function(t){return t.startsWith("col-")}));f.push((d={col:!_||!r.cols},Object(n.a)(d,"col-".concat(r.cols),r.cols),Object(n.a)(d,"offset-".concat(r.offset),r.offset),Object(n.a)(d,"order-".concat(r.order),r.order),Object(n.a)(d,"align-self-".concat(r.alignSelf),r.alignSelf),d)),C.set(c,f)}return t(r.tag,Object(o.a)(data,{class:f}),l)}})},471:function(t,e,r){t.exports=r.p+"img/magic_link.5e6207a.svg"},501:function(t,e,r){"use strict";r.r(e);var n=r(427),l=r(442),o=r(437),c=r(435),v=(r(24),r(12)),f=(r(67),{data:function(){return{events:[],id:this.$route.params.id}},components:{},methods:{getEventsData:function(t){var e=this;return Object(v.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.$get("/admin/events/".concat(t));case 3:data=r.sent,e.events=data.data,console.log("events",e.events),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Error fetching event details:",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},created:function(){this.$route.params.id&&(this.id=this.$route.params.id,console.log("ID:",this.id),this.getEventsData(this.id))}}),d=r(61),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e(o.a,[t.events?e("div",{},[e(o.a,[e(c.a,{staticClass:"d-flex justify-center"},[e(l.a,{attrs:{md:"5",cols:"12"}},[e("div",{staticClass:"loginForm p-4"},[e(l.a,{staticClass:"d-flex justify-space-between",attrs:{cols:"12"}},[e("h5",[t._v(t._s(t.events.name))]),t._v(" "),e(n.a,{staticClass:"btn-green"},[t._v("upgrade")])],1),t._v(" "),e(l.a,{attrs:{cols:"12 pb-2"}},[t._v("Your plan: "+t._s(t.events.type))])],1),t._v(" "),e("div",{staticClass:"loginForm mt-4 p-4"},[e(l.a,{attrs:{cols:"12 pb-2"}},[e("h5",[t._v("Magic link")])]),t._v(" "),e(l.a,{staticClass:"d-flex align-center justify-center",attrs:{cols:"12 pb-2"}},[e("img",{staticClass:"magic-link",attrs:{src:r(471),alt:"magic-link"}})]),t._v(" "),e(l.a,{attrs:{cols:"12 pb-2"}},[t._v("\n              Generate your event preview link below and share it with anyone.\n              Unless you publish your event, every generated link expires\n              after 24 hours.\n            ")]),t._v(" "),e("div",{staticClass:"d-flex flex-column justify-center align-center ma-3"},[e(n.a,{staticClass:"btn-transparent"},[t._v("copy magic link")]),t._v(" "),e(n.a,{staticClass:"btn-green"},[t._v("generate link")])],1)],1)]),t._v(" "),e(l.a,{attrs:{md:"7",cols:"12"}},[e("div",{staticClass:"loginForm"},[e(l.a,{staticClass:"d-flex",attrs:{cols:"12"}},[e("h5",[t._v("Status of My awesome event")])]),t._v(" "),e(l.a,{attrs:{cols:"12 pb-2"}},[e("p",[t._v("Status: Draft")])]),t._v(" "),e(l.a,{attrs:{cols:"12 pb-2"}},[e("p",[t._v("Status: Draft")])]),t._v(" "),e("hr"),t._v(" "),e(l.a,{attrs:{cols:"12 pb-2"}},[e(c.a,[e(l.a,{attrs:{cols:"12 pb-2",md:"6"}},[e("p",[t._v("Features")]),t._v(" "),e("div",{staticClass:"d-flex flex-column"},[e("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[e(n.a,{staticClass:"navTitle",attrs:{text:""}},[t._v("Newsfeed")])],1),t._v(" "),e("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[e(n.a,{staticClass:"navTitle",attrs:{text:""}},[t._v("Custom menu")])],1)],1)]),t._v(" "),e(l.a,{attrs:{cols:"12 pb-2",md:"6"}},[e("p",[t._v("Premium features")]),t._v(" "),e("div",{staticClass:"d-flex flex-column"},[e("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[e(n.a,{staticClass:"navTitle",attrs:{text:""}},[t._v("Questions&Polls")])],1),t._v(" "),e("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[e(n.a,{staticClass:"navTitle",attrs:{text:""}},[t._v("Networking")])],1)],1)])],1)],1)],1)])],1),t._v(" "),e(c.a,[e(l.a,{staticClass:"d-flex",attrs:{md:"12"}},[e(l.a,{staticClass:"loginForm ma-2 d-flex align-center flex-column",attrs:{md:"4"}},[e("h5",[t._v("Imported")]),t._v(" "),e("p",[t._v("0")])]),t._v(" "),e(l.a,{staticClass:"loginForm ma-2 d-flex align-center flex-column",attrs:{md:"4"}},[e("h5",[t._v("Invitees")]),t._v(" "),e("p",[t._v("0")])]),t._v(" "),e(l.a,{staticClass:"loginForm ma-2 d-flex align-center flex-column",attrs:{md:"4"}},[e("h5",[t._v("Attendees")]),t._v(" "),e("p",[t._v("0")])])],1)],1),t._v(" "),e(c.a,[e(l.a,{staticClass:"d-flex",attrs:{md:"12"}},[e(l.a,{staticClass:"loginForm ma-2 d-flex align-center flex-column",attrs:{md:"6"}},[e("h5",[t._v("Latest ratings")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("0")])]),t._v(" "),e(l.a,{staticClass:"loginForm ma-2 d-flex align-center flex-column",attrs:{md:"6"}},[e("h5",[t._v("Latest feeds")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("0")])])],1)],1)],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);