(this.webpackJsonpbrainstormer=this.webpackJsonpbrainstormer||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(14),r=c.n(a),i=(c(22),c(2)),l=c(5),o=c(8),j=(c(23),c(0));function b(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(j.jsx)("div",{className:"container-fluid shadow py-2",children:Object(j.jsxs)("nav",{className:"topbar",children:[Object(j.jsxs)("div",{className:"brand",children:[Object(j.jsx)("span",{className:"icon icon-lg material-icons me-1",children:"emoji_objects"}),Object(j.jsx)("span",{className:"h4 my-0",children:"Brain Stormer"})]}),Object(j.jsx)("button",{className:"toggler btn btn-link text-dark",onClick:function(){return n(!c)},children:Object(j.jsx)("span",{className:"material-icons-outlined",children:"menu"})}),Object(j.jsxs)("ul",{className:"menus collapsed ".concat(c?"show":""),children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{"aria-current":"page",to:"/home",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{"aria-current":"page",to:"/404",children:"Link"})})]})]})})}function m(){return Object(j.jsx)("div",{children:"Home Page"})}c(33);function d(e){var t=e.idea;return Object(j.jsxs)("div",{className:"idea-card",children:[Object(j.jsxs)("h5",{children:[Object(j.jsx)("span",{className:"icon icon-lg material-icons",children:"campaign"}),Object(j.jsx)("span",{children:t.title})]}),Object(j.jsx)("p",{children:t.description}),Object(j.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(j.jsxs)("div",{className:"status",children:[Object(j.jsx)("span",{className:"icon-sm material-icons",children:"visibility"}),Object(j.jsx)("span",{children:"1k"}),Object(j.jsx)("span",{className:"icon-sm material-icons",children:"favorite"}),Object(j.jsx)("span",{children:"1k"})]}),Object(j.jsx)("button",{className:"btn btn-sm btn-app-primary",children:"Ler mais"})]})]})}var u=n.a.createContext({}),h=function(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),n=c[0],a=c[1];return Object(j.jsx)(u.Provider,{value:{showForm:n,setShowForm:a},children:e.children})},x=function(){return n.a.useContext(u)};c(34);function p(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),l=i[0],b=i[1];return n&&l?Object(j.jsx)("div",{onClick:function(){return a(!1)},className:"tags",children:l.split(",").filter((function(e){return e})).map((function(e){return"#".concat(e).trim()})).map((function(e){return Object(j.jsx)("small",{children:e})}))}):Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"tags",children:"Tags"}),Object(j.jsx)("input",{value:l,className:"form-control",onChange:function(e){return t=(t=e.target.value).trim().replaceAll("#","").replaceAll(", ",","),void b(t);var t},onBlur:function(){return a(!0)}}),Object(j.jsx)("small",{children:"Acrescente tags separadas por v\xedrgula"})]})}c(35);function O(){var e=x(),t=e.showForm,c=e.setShowForm;return Object(j.jsx)("div",{id:"idea-form",className:"idea-form-container ".concat(t?"show":""),children:Object(j.jsxs)("form",{className:"idea-form",onSubmit:function(e){e.preventDefault(),e.target.reset(),c(!1)},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"title",children:"T\xedtulo"}),Object(j.jsx)("input",{type:"text",className:"form-control",autoFocus:!0,required:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"title",children:"Descri\xe7\xe3o"}),Object(j.jsx)("textarea",{className:"form-control",rows:"4",required:!0})]}),Object(j.jsx)(p,{id:"tags"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:"submit",className:"btn btn-app-primary me-2",children:"Enviar"}),Object(j.jsx)("button",{type:"reset",className:"btn btn-secondary btn-sm",onClick:function(){return c(!1)},children:"Cancelar"})]})]})})}c(36);var f=c(17);c(37);function v(){var e=x().setShowForm;return Object(j.jsxs)("div",{className:"banner",children:[Object(j.jsx)("span",{className:"ms-2 badge bg-app-primary fw-normal mb-3",children:"v1.0"}),Object(j.jsx)("h1",{className:"title mb-5 noselect",children:"Brain Stormer"}),Object(j.jsxs)("ul",{className:"mb-5",children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"icon icon-lg material-icons",children:"emoji_objects"}),"Procure por projetos"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"icon icon-lg material-icons",children:"emoji_objects"}),"Apresente solu\xe7\xf5es"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"icon icon-lg material-icons",children:"emoji_objects"}),"Cres\xe7a em comunidade"]})]}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(f.a,{to:"#idea-form",className:"btn btn-sm btn-app-primary",onClick:function(t){return e(!0)},children:"Adicione seu projeto"}),Object(j.jsx)(l.b,{to:"/home",className:"btn btn-sm btn-app-secondary",children:"Ver mais projetos"})]}),Object(j.jsxs)("footer",{className:"noselect",children:[Object(j.jsx)("span",{children:"by "}),Object(j.jsx)("a",{href:"https://vauxgomes.github.io/",rel:"noreferrer",target:"_blank",children:"vauxgomes"})]})]})}function N(){return Object(j.jsxs)("div",{className:"landing-page",children:[Object(j.jsx)(v,{}),Object(j.jsxs)("main",{className:"ideas pb-5",children:[Object(j.jsxs)("div",{className:"search-bar",children:[Object(j.jsx)("span",{className:"icon-lg material-icons text-muted",children:"search"}),Object(j.jsx)("input",{id:"search",type:"text",placeholder:"Procure por uma id\xe9ia"})]}),Object(j.jsx)(O,{}),Object(j.jsx)("h6",{className:"fw-light",children:"Mais avaliados..."}),Object(j.jsx)("div",{className:"cards",children:[{id:1,title:"Brainstormer",description:"Desenvolver app em React capaz de armazenar e compartilhar listas de ideias \xe0 comunidade de interesse"}].map((function(e,t){return Object(j.jsx)(d,{idea:e},t)}))})]})]})}function g(){return Object(j.jsxs)("div",{className:"m-5 p-5 text-center d-flex flex-column align-items-center",children:[Object(j.jsx)("span",{className:"display-1 fw-bolder text-app-secondary",children:"Ooops!"}),Object(j.jsx)("span",{className:"text-uppercase fw-bold text-app-primary mb-2",children:"404 - P\xe1gina N\xe3o Encontrada"}),Object(j.jsx)("p",{className:"small w-50 text-muted mb-4",children:"Esta p\xe1gina n\xe3o existe ou n\xe3o \xe9 poss\xedvel acess\xe1-la neste momento."}),Object(j.jsx)(l.b,{to:"/home",className:"btn btn-app-primary",children:"Volte ao Home"})]})}var y=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"container-fluid pt-3",children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/home",exact:!0,component:m}),Object(j.jsx)(i.a,{component:g})]})})]})};function w(){return Object(j.jsx)(l.a,{basename:"/brainstormer",children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",component:N}),Object(j.jsx)(i.a,{component:y})]})})}var k=function(){return Object(j.jsx)(w,{})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(h,{children:Object(j.jsx)(k,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.04e576a7.chunk.js.map