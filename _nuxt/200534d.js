(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{212:function(t,e,n){"use strict";var l=n(27),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"elevation-5"},[n("v-subheader",[t._v("Contact")]),t._v(" "),n("v-divider",{attrs:{inset:""}}),t._v(" "),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{attrs:{color:"gray"}},[t._v("phone")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("1-877-511-2267")])],1)],1),t._v(" "),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{attrs:{color:"gray"}},[t._v("email")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("office@slwc.ca")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},249:function(t,e,n){"use strict";n.r(e);var l={components:{CampContactCard:n(212).a},data:function(){return{payments:this.$store.state.payments.payments}}},r=n(27),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("h1",[t._v("Payments")])]),t._v(" "),n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md8:""}},[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{column:"",wrap:""}},t._l(t.payments,(function(e,i){return n("v-flex",{key:i},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("h3",{staticClass:"headline mb-0"},[n("span",{domProps:{textContent:t._s(e.title)}})])]),t._v(" "),n("v-card-text",[n("p",{domProps:{innerHTML:t._s(e.description)}})]),t._v(" "),n("v-card-actions",[n("form",{attrs:{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"}},[n("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"hosted_button_id"},domProps:{value:e.paypal_form_id}}),t._v(" "),n("v-btn",{attrs:{type:"submit",flat:"",color:"green"}},[t._v("Make a Payment")])],1)])],1)],1)})),1)],1)],1),t._v(" "),n("v-flex",{attrs:{md3:"","offset-lg1":""}},[n("CampContactCard"),t._v(" "),n("br"),t._v(" "),n("v-list",{staticClass:"elevation-5"},[n("v-subheader",[t._v("Documents")]),t._v(" "),n("v-divider",{attrs:{inset:""}}),t._v(" "),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{attrs:{color:"gray"}},[t._v("picture_as_pdf")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[n("a",{attrs:{href:"/files/auto-debit-donation-form.pdf"}},[t._v("Auto Debit Donation Form")])])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);