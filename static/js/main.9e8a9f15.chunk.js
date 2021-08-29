(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),l=n.n(s),r=(n(9),n(2)),o=(n(10),n(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function d(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){s(e.target.value)},id:"myBox",rows:"8",style:{backgroundColor:"dark"===e.mode?"#042743":"white",color:"dark"===e.mode?"white":"#042743",border:"2px solid black"}})}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-danger mx-1 my-1",onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-danger mx-1 my-1",onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-danger mx-1 my-1",onClick:function(){s(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-danger mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-danger mx-1 my-1",onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[c.split(" ").filter((function(e){return 0!==e.length})).length," words and ",c.length," characters"]}),Object(o.jsxs)("p",{children:[.008*c.split(" ").filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:c.length>0?c:"Enter something above to preview"})]})]})}var b=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:e.alert.type}),": ",e.alert.msg]})})};var h=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),l=Object(r.a)(s,2),h=l[0],m=l[1],j=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"mytextUtils",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="#042743",j("Dark mode has been enabled","success"),document.title="mytextUtils - Dark Mode"):(c("light"),document.body.style.backgroundColor="white",j("Light mode has been enabled","success"),document.title="mytextUtils - Light Mode")}}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{showAlert:j,heading:"Try mytextUtils - word counter, character counter, remove extra spaces",mode:n})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.9e8a9f15.chunk.js.map