(this["webpackJsonpjamhacks.ca"]=this["webpackJsonpjamhacks.ca"]||[]).push([[0],{101:function(e,n,t){},106:function(e,n,t){},107:function(e,n,t){},108:function(e,n,t){},112:function(e,n,t){"use strict";t.r(n);var a,c,r,o=t(0),s=t.n(o),i=t(52),l=t.n(i),d=(t(94),t(24)),b=t(48),j=t(49),h=t(51),m=t(50),u=t(38),f=t(9),p=t(75),x=t.n(p),v=(t(95),t(33)),O=t(61),g=t(20),y=t(10),k=t(11),w=(t(101),t(13)),N=t(2),C={open:{height:"100vh"},closed:{height:0}},B=g.b.div(a||(a=Object(d.a)(["\n  transition: 0.3s;\n  &:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(e){return e.secondary?e.secondary:e.theme.colors.secondary.default})),E=function(e){var n=e.sections,t=e.open,a=e.closeMenu;return Object(N.jsx)(O.a.div,{className:"navbar-mobile-div",variants:C,initial:"closed",animate:t?"open":"closed",transition:{ease:"easeOut",duration:.25},children:Object(N.jsxs)("div",{className:"test-navbar",children:[Object(N.jsx)("div",{className:"navbar-mobile-links-div",children:n.map((function(e,n){return e.enabled?"Schedule"==e.label?Object(N.jsx)(u.b,{to:"/schedule",children:Object(N.jsx)("div",{className:"navbar-mobile-link-container",children:Object(N.jsx)(B,{className:"navbar-mobile-link-item",children:e.label})},n)}):Object(N.jsx)("div",{className:"navbar-mobile-link-container",children:Object(N.jsx)(B,{className:"navbar-mobile-link-item",onClick:function(){window.scrollTo({top:document.getElementById(e.id).offsetTop-80,left:0,behavior:"smooth"}),a()},children:e.label})},n):" "}))}),Object(N.jsxs)("div",{className:"footer-icons-div",style:{marginTop:"30px",marginLeft:"70px",justifyContent:"space-between"},children:[Object(N.jsx)("a",{href:w.a.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-icon linkedin ",children:Object(N.jsx)(y.a,{icon:k.c})}),Object(N.jsx)("a",{href:w.a.instagram,target:"_blank",rel:"noopener noreferrer",className:"social-icon instagram ",children:Object(N.jsx)(y.a,{icon:k.b})}),Object(N.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:w.a.twitter,className:"social-icon twitter ",children:Object(N.jsx)(y.a,{icon:k.e})}),Object(N.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:w.a.facebook,className:"social-icon facebook ",children:Object(N.jsx)(y.a,{icon:k.a})}),Object(N.jsx)("a",{href:w.a.medium,target:"_blank",rel:"noopener noreferrer",className:"social-icon facebook ",children:Object(N.jsx)(y.a,{icon:k.d})}),Object(N.jsx)("a",{href:w.a.youtube,target:"_blank",rel:"noopener noreferrer",className:"social-icon facebook ",children:Object(N.jsx)(y.a,{icon:k.f})})]})]})})},_=g.b.div(c||(c=Object(d.a)(["\n  transition: 0.3s;\n  &:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(e){return e.secondary?e.secondary:e.theme.colors.secondary.default})),A=function(e){var n=e.sections,t=(e.color,e.location),a=Object(o.useState)(!1),c=Object(v.a)(a,2),r=c[0],s=c[1];Object(o.useEffect)((function(){var e=function(e){if((window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop)>window.innerHeight-80||"home"!=t){document.getElementsByClassName("navbar-div")[0].classList.add("scrolled-navbar");for(var n=0;n<document.getElementsByClassName("navbar-link-item").length;n++)document.getElementsByClassName("navbar-link-item")[n].classList.add("navbar-scrolled-link");for(n=0;n<document.getElementsByClassName("navbar-social-icon").length;n++)document.getElementsByClassName("navbar-social-icon")[n].classList.add("navbar-social-icon-scrolled"),document.getElementsByClassName("navbar-scrolled-social-icon")[n]&&(document.getElementsByClassName("navbar-scrolled-social-icon")[n].style.display="flex")}else{document.getElementsByClassName("navbar-div")[0].classList.remove("scrolled-navbar");for(n=0;n<document.getElementsByClassName("navbar-link-item").length;n++)document.getElementsByClassName("navbar-link-item")[n].classList.remove("navbar-scrolled-link");for(n=0;n<document.getElementsByClassName("navbar-social-icon").length;n++)document.getElementsByClassName("navbar-social-icon")[n].classList.remove("navbar-social-icon-scrolled"),document.getElementsByClassName("navbar-scrolled-social-icon")[n]&&(document.getElementsByClassName("navbar-scrolled-social-icon")[n].style.display="none")}};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}));return Object(N.jsxs)("div",{className:"navbar-div",children:[Object(N.jsx)("a",{id:"mlh-trust-badge",href:"https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white",target:"_blank",children:Object(N.jsx)("img",{src:"https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg",alt:"Major League Hacking 2022 Hackathon Season",style:{width:"100%"}})}),Object(N.jsx)(E,{open:r,sections:n,closeMenu:function(){s(!1),document.getElementById("hamburger-1").classList.remove("is-active")}}),Object(N.jsx)("div",{className:"navbar-logo-div",children:Object(N.jsx)("div",{className:"navbar-logo",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}})}),Object(N.jsx)("div",{className:"navbar-links-div",children:n.map((function(e){return e.enabled?"Schedule"==e.label?Object(N.jsx)(u.b,{to:"/schedule",children:Object(N.jsx)(_,{className:"navbar-link-item",children:e.label},e.label)}):Object(N.jsx)(_,{className:"navbar-link-item",onClick:function(){window.scrollTo({top:document.getElementById(e.id).offsetTop-79,left:0,behavior:"smooth"})},children:e.label},e.label):""}))}),Object(N.jsx)("div",{className:"navbar-filler-div"}),Object(N.jsxs)("div",{className:"navbar-icons-div",children:[Object(N.jsx)("a",{href:w.a.linkedin,target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)(y.a,{icon:k.c})}),Object(N.jsx)("a",{href:"https://www.instagram.com/jamhacks",target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)(y.a,{icon:k.b})}),Object(N.jsx)("a",{href:w.a.twitter,target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)(y.a,{icon:k.e})}),Object(N.jsx)("a",{href:w.a.facebook,target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)(y.a,{icon:k.a})}),Object(N.jsx)("a",{href:w.a.medium,target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)(y.a,{icon:k.d})}),Object(N.jsx)("a",{href:w.a.youtube,target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)(y.a,{icon:k.f})})]}),Object(N.jsxs)("div",{className:"hamburger",id:"hamburger-1",onClick:function(){r?(document.getElementById("hamburger-1").classList.remove("is-active"),s(!1)):(document.getElementById("hamburger-1").classList.add("is-active"),s(!0))},children:[Object(N.jsx)("span",{className:"line"}),Object(N.jsx)("span",{className:"line"}),Object(N.jsx)("span",{className:"line"})]})]})},S=t(71),z=(t(106),function(){return Object(N.jsx)("svg",{height:"250",width:"100%",preserveAspectRatio:"none",style:{position:"absolute",bottom:-10},viewBox:"0 0 754 195",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(N.jsx)("path",{d:"M754 194.999V29C672 18.5 648.5 47 530 58C448.849 65.533 388 55.4386 345 42C302 28.5614 249.71 15.9141 191.5 5.80188C66 -15.9999 0 36 0 36V194.999H754Z",fill:"#7B0FF7"})})}),L=function(){return Object(N.jsx)("svg",{height:"250",width:"100%",preserveAspectRatio:"none",style:{position:"absolute",bottom:-10},viewBox:"0 0 755 217",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(N.jsx)("path",{d:"M0 216.999V56.9999C123 56.9999 73.5 83.4999 150 87.9999C231.359 92.7858 274 70.4386 317 56.9999C360 43.5613 510.5 0.500098 629.5 0.5C756.88 0.499896 754 58 754 58V216.999H0Z",fill:"#B600FF"})})},I=function(){var e=Object(o.useState)(0),n=Object(v.a)(e,2);n[0],n[1];return Object(N.jsx)("div",{style:{height:"0px",zIndex:1,background:"#7b0ff7"},children:Object(N.jsxs)("div",{style:{position:"relative",height:"0px",padding:"-2px",display:"flex"},children:[Object(N.jsxs)("div",{className:"footer-wave-inner-div",children:[Object(N.jsx)("h1",{style:{color:"white"},children:"Subscribe to our Newsletter"}),Object(N.jsx)(S.a,{location:"footer"})]}),Object(N.jsx)(L,{}),Object(N.jsx)(z,{})]})})},D=(t(107),function(e){Object(h.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(b.a)(this,t),(a=n.call(this,e)).state={},a.register=e.register,a}return Object(j.a)(t,[{key:"render",value:function(){return Object(N.jsxs)("div",{className:"footer-div",children:[!this.props.disableWave&&Object(N.jsx)(I,{}),Object(N.jsxs)("div",{className:"footer-content-div",children:[Object(N.jsx)("div",{className:"footer-title-content",children:"Follow us on social media"}),Object(N.jsxs)("div",{className:"footer-icons-div",style:{marginBottom:"20px"},children:[Object(N.jsx)("a",{href:w.a.linkedin,target:"_blank",rel:"noopener noreferrer",style:{color:"white"},children:Object(N.jsx)(y.a,{icon:k.c})}),Object(N.jsx)("a",{href:w.a.instagram,target:"_blank",rel:"noopener noreferrer",style:{color:"white"},children:Object(N.jsx)(y.a,{icon:k.b})}),Object(N.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:w.a.twitter,style:{color:"white"},children:Object(N.jsx)(y.a,{icon:k.e})}),Object(N.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:w.a.facebook,style:{color:"white"},children:Object(N.jsx)(y.a,{icon:k.a})}),Object(N.jsx)("a",{href:w.a.medium,target:"_blank",rel:"noopener noreferrer",style:{color:"white"},children:Object(N.jsx)(y.a,{icon:k.d})}),Object(N.jsx)("a",{href:w.a.youtube,target:"_blank",rel:"noopener noreferrer",style:{color:"white"},children:Object(N.jsx)(y.a,{icon:k.f})})]})]}),Object(N.jsx)("div",{className:"footer-bottom-div",children:Object(N.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"100%",flexWrap:"wrap",height:"fit-content",marginBottom:"20px"},children:[Object(N.jsx)("a",{href:"/",children:Object(N.jsx)("div",{className:"footer-logo"})}),Object(N.jsxs)("div",{className:"footer-copyright",children:["Copyright \xa9 2022 JAMHacks."," ",Object(N.jsx)("br",{className:"footer-copyright-linebreak"})," All rights reserved."]}),Object(N.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://jamhacks.ca/2021/",className:"footer-link",children:"2021 Site"}),Object(N.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://jamhacks.notion.site/jamhacks/Code-of-Conduct-JAMHacks-6-bf2543f05ece4b3e8778a1e6006f3691",className:"footer-link",children:"Code of Conduct"}),Object(N.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"\\privacy-policy",className:"footer-privacy",children:"Privacy Policy"})]})})]})}}]),t}(o.Component)),M=function(){return Object(N.jsx)("div",{style:{textAlign:"center",marginTop:"40vh"},children:Object(N.jsx)("h1",{children:"Loading..."})})},P=t(53),H=[{label:"About",id:"about-section",enabled:!0},{label:"Venue",id:"venue-info-section",enabled:!0},{label:"Schedule",id:"schedule-section",enabled:P.a.schedule},{label:"About",id:"about-section",enabled:!0},{label:"Sponsors",id:"sponsor-section",enabled:!0},{label:"FAQ",id:"faq-section",enabled:!0},{label:"Team",id:"team-section",enabled:!0},{label:"Blog",id:"blog-section",enabled:!0},{label:"Contact",id:"contact-section",enabled:!0}],T=(P.a.schedule,[{label:"Definitions",id:"definitions-section",enabled:!0},{label:"Data",id:"data-section",enabled:!0},{label:"Privacy",id:"privacy-section",enabled:!0},{label:"Other",id:"other-section",enabled:!0},{label:"Contact",id:"contact-section",enabled:!0}]),F=[{label:"Introduction",id:"",enabled:!0},{label:"Core Principles",id:"",enabled:!0},{label:"Plagiarism",id:"",enabled:!0},{label:"Expected Behaviour",id:"",enabled:!0},{label:"Rules & Guidelines",id:"",enabled:!0},{label:"Protected Grounds",id:"",enabled:!0},{label:"Prohibited  Consequences",id:"",enabled:!0}],J=(t(108),{colors:{primary:{light:"#AB11F7",default:"#7B0FF7",dark:"#3b00c3"},secondary:{light:"#77ffb7",default:"#b600ff",dark:"#00ca57"},background:{light:["#ffffff","#fbf9ff"]},text:{light:{header:"#1e0e56",text:"#000000"},dark:{header:"#ffffff",text:"#fbf9ff"}}},fonts:{primary:"'Poppins', Arial, sans-serif",secondary:"'Nunito', Arial, sans-serif"}}),R=t(44),V=t.n(R),Y=(t(113),t(109),s.a.lazy((function(){return Promise.all([t.e(2),t.e(5)]).then(t.bind(null,488))}))),Q=s.a.lazy((function(){return Promise.all([t.e(4),t.e(6)]).then(t.bind(null,490))})),W=s.a.lazy((function(){return t.e(8).then(t.bind(null,485))})),Z=s.a.lazy((function(){return t.e(7).then(t.bind(null,486))})),G=s.a.lazy((function(){return t.e(9).then(t.bind(null,487))}));V.a.initializeApp({apiKey:"AIzaSyCDdAEQqSy8Pni1iKOyOB8xUDAR4I0f9Q0",authDomain:"jamhacks-4d6a6.firebaseapp.com",databaseURL:"https://jamhacks-4d6a6.firebaseio.com",projectId:"jamhacks-4d6a6",storageBucket:"jamhacks-4d6a6.appspot.com",messagingSenderId:"224359886930",appId:"1:224359886930:web:793771bdb963fd1831ef8b",measurementId:"G-YBCXKJL5HW"}),V.a.analytics();var K=function(e){Object(h.a)(t,e);var n=Object(m.a)(t);function t(){var e;return Object(b.a)(this,t),(e=n.call(this)).state={},x.a.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:500,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"}),e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){console.log("\nDesigned by: Daniel Yu\nDeveloped by: Daniel Yu, Andrew Yang\n\nCopyright (c) 2022 JAMHacks.\n")}},{key:"render",value:function(){return Object(N.jsx)(o.Suspense,{fallback:Object(N.jsx)(M,{}),children:Object(N.jsx)(u.a,{children:Object(N.jsx)(g.a,{theme:J,children:Object(N.jsx)(q,{children:Object(N.jsxs)(f.d,{children:[Object(N.jsxs)(f.b,{exact:!0,path:"/",children:[Object(N.jsx)(A,{sections:H,location:"home"}),Object(N.jsx)(Y,{}),Object(N.jsx)(D,{})]}),Object(N.jsxs)(f.b,{exact:!0,path:"/privacy-policy",children:[Object(N.jsx)(A,{sections:T,location:"privacy"}),Object(N.jsx)(W,{}),Object(N.jsx)(D,{})]}),Object(N.jsx)(f.b,{exact:!0,path:"/schedule",children:Object(N.jsx)(Q,{})}),Object(N.jsxs)(f.b,{exact:!0,path:"/code-of-conduct",children:[Object(N.jsx)(A,{sections:F,location:"privacy"}),Object(N.jsx)(Z,{}),Object(N.jsx)(D,{})]}),Object(N.jsx)(f.b,{path:"/404",component:G}),Object(N.jsx)(f.a,{to:"/404"})]})})})})})}}]),t}(s.a.Component),q=g.b.div(r||(r=Object(d.a)(["\n  height: fit-content;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #fbf9ff;\n"]))),U=K;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},13:function(e,n,t){"use strict";n.a={instagram:"https://www.instagram.com/jamhacks",facebook:"https://www.facebook.com/JAMHacks",linkedin:"https://www.linkedin.com/company/jamhacks/",twitter:"https://twitter.com/jam_hacks?lang=en",medium:"https://medium.com/@jamhacks",youtube:"https://www.youtube.com/channel/UC-YCiczGQb5jOhpEkVkRKjQ/featured"}},53:function(e,n,t){"use strict";n.a={register:"complete",schedule:!0,mentor:"finished",volunteer:"open"}},69:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a={sm:576,md:786,lg:992,xl:1200},c=function(e){return function(n){return"@media (max-width: ".concat(a[e],"px) { ").concat(n," }")}}},71:function(e,n,t){"use strict";var a,c,r,o,s=t(24),i=t(67),l=t.n(i),d=t(79),b=t(33),j=t(0),h=t(114),m=t(20),u=t(69),f=t(44),p=t(2);n.a=function(e){var n=Object(j.useState)(null),t=Object(b.a)(n,2),i=t[0],x=t[1],v=Object(j.useState)(!1),O=Object(b.a)(v,2),g=O[0],y=O[1],k=e.location,w=function(e){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)?f.firestore().collection("emails").doc(e).set({email:e}).then((function(e){return!0})).catch((function(e){return"database error"})):"email error"},N=function(){var e=Object(d.a)(l.a.mark((function e(n){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,w(n);case 3:!0===(t=e.sent)?x("success"):"email error"===t?x("please submit a valid email"):"database error"===t&&x("out network is experiencing an issue please try again"),y(!1);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=Object(m.b)(h.a.Search)(a||(a=Object(s.a)(["\n    .ant-input,\n    .ant-input-group-addon {\n      border-radius: 20px;\n      height: 40px;\n      padding-left: 20px;\n    }\n    .ant-input-search-button {\n      border-radius: 0px 20px 20px 0px !important;\n      color: ",";\n      background: ",";\n    }\n    max-width: 800px;\n    ","\n  "])),"footer"===k?"#7b0ef7":"white","footer"===k?"white":"#7b0ef7",Object(u.a)("sm")(c||(c=Object(s.a)(["\n     .ant-input {\n      font-size: 0.8rem;\n    }\n    .ant-input-search-button {\n      font-size: 0.8rem;\n      height: 35px;\n    }\n    .ant-input,\n    .ant-input-group-addon {\n      height: 35px;\n    }\n  "])))),B=m.b.div(r||(r=Object(s.a)(["\n    font-size: 1em;\n    color: ",";\n  "])),"footer"===k?"white":"green"),E=m.b.div(o||(o=Object(s.a)(["\n    font-size: 1em;\n    color: ",";\n    text-align: left;\n  "])),"footer"===k?"white":"red");return Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(p.jsx)(C,{size:"large",placeholder:"Enter your email address to stay connected",loading:g,enterButton:"Subscribe",onSearch:function(e){return N(e)}}),"success"===i&&Object(p.jsx)(B,{children:"Success, you have been subscribed to our newsletter"}),"success"!=i&&Object(p.jsx)(E,{children:i})]})}},94:function(e,n,t){}},[[112,1,3]]]);
//# sourceMappingURL=main.3c01e143.chunk.js.map