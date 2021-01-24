(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{212:function(t,e,r){"use strict";var l=r(27),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",{staticClass:"elevation-5"},[r("v-subheader",[t._v("Contact")]),t._v(" "),r("v-divider",{attrs:{inset:""}}),t._v(" "),r("v-list-tile",[r("v-list-tile-action",[r("v-icon",{attrs:{color:"gray"}},[t._v("phone")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v("1-877-511-2267")])],1)],1),t._v(" "),r("v-list-tile",[r("v-list-tile-action",[r("v-icon",{attrs:{color:"gray"}},[t._v("email")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v("office@slwc.ca")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},250:function(t,e,r){"use strict";r.r(e);var l={components:{CampContactCard:r(212).a},methods:{availabilityFor:function(t){return"number"==typeof t?"".concat(t," Available"):"Call for Availability"}},data:function(){return{rentals:this.$store.state.rentals.rentals}}},n=r(27),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("h1",[t._v("Rentals")])]),t._v(" "),r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{md8:""}},[r("p",[t._v("Our facility is very suited for personal and group retreats and gatherings. Churches, youth groups, leadership teams, families and other groups are welcome to rent the facility based on availability.")]),t._v(" "),r("h2",{attrs:{id:"accomodations"}},[t._v("Accomodations")]),t._v(" "),r("v-container",{attrs:{"grid-list-xl":""}},[r("v-layout",{attrs:{column:"",wrap:""}},t._l(t.rentals,(function(e,i){return r("v-flex",{key:i},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("h3",{staticClass:"headline mb-0"},[r("span",{domProps:{textContent:t._s(e.title)}}),t._v(" "),r("span",{staticClass:"grey--text"},[t._v("\n                      ("),r("span",{domProps:{textContent:t._s(t.availabilityFor(e.count))}}),t._v(")\n                    ")])])]),t._v(" "),e.images?r("v-carousel",{attrs:{cycle:!1,height:"300px","hide-delimiters":""}},t._l(e.images,(function(t,i){return r("v-carousel-item",{key:i,attrs:{src:t.src}})})),1):t._e(),t._v(" "),r("v-card-text",[r("p",{domProps:{textContent:t._s(e.description)}}),t._v(" "),r("h4",[t._v("Amenities")]),t._v(" "),r("ul",t._l(e.amenities,(function(e,i){return r("li",{key:i},[r("span",{domProps:{textContent:t._s(e)}})])})),0),t._v(" "),r("br"),t._v(" "),e.fee_data?r("h4",[t._v("Fees")]):t._e(),t._v(" "),e.fee_data?r("v-data-table",{attrs:{headers:e.fee_data.headers,items:e.fee_data.fees,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v("$"+t._s(e.item.daily))]),t._v(" "),r("td",[t._v("$"+t._s(e.item.weekly))]),t._v(" "),r("td",[t._v("$"+t._s(e.item.monthly))]),t._v(" "),r("td",[t._v("$"+t._s(e.item.seasonal))]),t._v(" "),r("td",[t._v("$"+t._s(e.item.annual))])]}}],null,!0)}):t._e()],1)],1)],1)})),1)],1),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"rates"}},[t._v("Meals & Lodging Rates")]),t._v(" "),r("br"),t._v(" "),r("p",[t._v("If you are not part of an organized camp or event, and simply want to come to spend a night at the camp or enjoy a meal in the dining hall, the following rates apply.")]),t._v(" "),r("v-alert",{staticClass:"black--text",attrs:{value:!0,color:"info",icon:"info",outline:""}},[r("b",[t._v("Dining Hall")]),t._v(" services are available to the general public from mid-May to mid-October\n        ")]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"group-rates"}},[t._v("Group Rates")]),t._v(" "),r("v-btn",{attrs:{flat:"",large:"",color:"green",href:"mailto:office@slwc.ca?subject=Group%20Rate%20Inquiry"}},[t._v("\n          Contact the camp office for any group rate inquiries.\n        ")]),t._v(" "),r("v-alert",{staticClass:"black--text",attrs:{value:!0,color:"info",icon:"info",outline:""}},[r("b",[t._v("Student Retreat Group Fees")]),t._v(" apply only to student groups, not an individual student within a family or other non-student groups.\n        ")]),t._v(" "),r("v-alert",{staticClass:"black--text",attrs:{value:!0,color:"info",icon:"info",outline:""}},[r("b",[t._v("Gluten/Dairy Free")]),t._v(" preference meals are available upon request for an additional cost. Advanced notice is required, contact the office for more details. We are very cautious, and will consider each request, but for the safety of all involved we may have to decline a certain food request when we are not 100% certain we can accommodate (for example, Celiac disease).\n        ")])],1),t._v(" "),r("v-flex",{attrs:{md3:"","offset-lg1":"","order-xs1":""}},[r("CampContactCard"),t._v(" "),r("br"),t._v(" "),r("v-list",{staticClass:"elevation-5"},[r("v-subheader",[t._v("Documents")]),t._v(" "),r("v-divider",{attrs:{inset:""}}),t._v(" "),r("v-list-tile",[r("v-list-tile-action",[r("v-icon",{attrs:{color:"gray"}},[t._v("picture_as_pdf")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[r("a",{attrs:{href:"/files/rental-policy.pdf"}},[t._v("Rental Policy")])])],1)],1),t._v(" "),r("v-list-tile",[r("v-list-tile-action",[r("v-icon",{attrs:{color:"gray"}},[t._v("picture_as_pdf")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[r("a",{attrs:{href:"/files/campground-map.pdf"}},[t._v("Facility Map")])])],1)],1)],1),t._v(" "),r("br"),t._v(" "),r("v-list",{staticClass:"elevation-5"},[r("v-subheader",[t._v("Rate Information")]),t._v(" "),r("v-divider",{attrs:{inset:""}}),t._v(" "),r("v-list-tile",[r("v-list-tile-action",[r("v-icon",{attrs:{color:"gray"}},[t._v("keyboard_arrow_down")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[r("a",{attrs:{href:"#rates"}},[t._v("Meal & Lodging Rates")])])],1)],1),t._v(" "),r("v-list-tile",[r("v-list-tile-action",[r("v-icon",{attrs:{color:"gray"}},[t._v("keyboard_arrow_down")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[r("a",{attrs:{href:"#group-rates"}},[t._v("Group Rates")])])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);