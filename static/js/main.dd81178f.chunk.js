(this.webpackJsonpbrainstormer=this.webpackJsonpbrainstormer||[]).push([[0],{17:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(9),a=s.n(r),i=s(4),l=(s(17),s(0));function o(e){var t=e.idea;return Object(l.jsxs)("div",{className:"idea-card",children:[Object(l.jsxs)("h5",{children:[Object(l.jsx)("span",{className:"icon icon-lg material-icons",children:"campaign"}),Object(l.jsx)("span",{children:t.title})]}),Object(l.jsx)("p",{children:t.description}),Object(l.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(l.jsxs)("div",{className:"status",children:[Object(l.jsx)("span",{className:"icon-sm material-icons",children:"visibility"}),Object(l.jsx)("span",{children:"1k"}),Object(l.jsx)("span",{className:"icon-sm material-icons",children:"favorite"}),Object(l.jsx)("span",{children:"1k"})]}),Object(l.jsx)("button",{className:"btn btn-sm btn-app-primary",children:"Ler mais"})]})]})}var j=s(5),b=n.a.createContext({}),m=function(e){var t=Object(c.useState)(!1),s=Object(j.a)(t,2),n=s[0],r=s[1];return Object(l.jsx)(b.Provider,{value:{showForm:n,setShowForm:r},children:e.children})},d=function(){return n.a.useContext(b)};s(19);function u(e){var t=Object(c.useState)(!1),s=Object(j.a)(t,2),n=s[0],r=s[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),o=i[0],b=i[1];return n&&o?Object(l.jsx)("div",{onClick:function(){return r(!1)},className:"tags",children:o.split(",").filter((function(e){return e})).map((function(e){return"#".concat(e).trim()})).map((function(e){return Object(l.jsx)("small",{children:e})}))}):Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"tags",children:"Tags"}),Object(l.jsx)("input",{value:o,className:"form-control",onChange:function(e){return t=(t=e.target.value).trim().replaceAll("#","").replaceAll(", ",","),void b(t);var t},onBlur:function(){return r(!0)}}),Object(l.jsx)("small",{children:"Acrescente tags separadas por v\xedrgula"})]})}s(20);function h(){var e=d(),t=e.showForm,s=e.setShowForm;return Object(l.jsx)("div",{id:"idea-form",className:"idea-form-container ".concat(t?"show":""),children:Object(l.jsxs)("form",{className:"idea-form",onSubmit:function(e){e.preventDefault(),e.target.reset(),s(!1)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"title",children:"T\xedtulo"}),Object(l.jsx)("input",{type:"text",className:"form-control",autoFocus:!0,required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"title",children:"Descri\xe7\xe3o"}),Object(l.jsx)("textarea",{className:"form-control",rows:"4",required:!0})]}),Object(l.jsx)(u,{id:"tags"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"submit",className:"btn btn-app-primary me-2",children:"Enviar"}),Object(l.jsx)("button",{type:"reset",className:"btn btn-secondary btn-sm",onClick:function(){return s(!1)},children:"Cancelar"})]})]})})}s(21);var x=s(10);s(22);function p(){var e=d().setShowForm;return Object(l.jsxs)("div",{className:"banner",children:[Object(l.jsx)("span",{className:"ms-2 badge bg-app-primary fw-normal mb-3",children:"v1.0"}),Object(l.jsx)("h1",{className:"title mb-5 noselect",children:"Brain Stormer"}),Object(l.jsxs)("ul",{className:"mb-5",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"icon icon-lg material-icons",children:"emoji_objects"}),"Procure por projetos"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"icon icon-lg material-icons",children:"emoji_objects"}),"Apresente solu\xe7\xf5es"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"icon icon-lg material-icons",children:"emoji_objects"}),"Cres\xe7a em comunidade"]})]}),Object(l.jsxs)("nav",{children:[Object(l.jsx)(x.a,{to:"#idea-form",className:"btn btn-sm btn-app-primary",onClick:function(t){return e(!0)},children:"Adicione seu projeto"}),Object(l.jsx)("button",{className:"btn btn-sm btn-app-secondary",children:"Ver mais projetos"})]}),Object(l.jsxs)("footer",{className:"noselect",children:[Object(l.jsx)("span",{children:"by "}),Object(l.jsx)("a",{href:"https://vauxgomes.github.io/",rel:"noreferrer",target:"_blank",children:"vauxgomes"})]})]})}var O=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(p,{}),Object(l.jsxs)("main",{className:"ideias pb-5",children:[Object(l.jsxs)("div",{className:"search-bar",children:[Object(l.jsx)("span",{className:"icon-lg material-icons text-muted",children:"search"}),Object(l.jsx)("input",{id:"search",type:"text",placeholder:"Procure por uma id\xe9ia"})]}),Object(l.jsx)(h,{}),Object(l.jsx)("h6",{className:"fw-light",children:"Mais avaliados..."}),Object(l.jsx)("div",{className:"cards",children:[{id:1,title:"Brainstormer",description:"Desenvolver app em React capaz de armazenar e compartilhar listas de ideias \xe0 comunidade de interesse"}].map((function(e,t){return Object(l.jsx)(o,{idea:e},t)}))})]})]})})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{children:Object(l.jsx)(O,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.dd81178f.chunk.js.map