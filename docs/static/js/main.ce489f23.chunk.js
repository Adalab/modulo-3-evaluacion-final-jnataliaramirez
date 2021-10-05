(this["webpackJsonpRick-and-Morty"]=this["webpackJsonpRick-and-Morty"]||[]).push([[0],{22:function(e,a,c){},24:function(e,a,c){},30:function(e,a,c){},31:function(e,a,c){},32:function(e,a,c){},33:function(e,a,c){},34:function(e,a,c){"use strict";c.r(a);var t=c(1),n=c(15),s=c.n(n),r=c(8),i=c(10),j=c(2),l=(c(22),c.p+"static/media/Rick_and_Morty_logo.de13d484.png"),d=c(0);var o=function(e){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("img",{src:l,alt:"logo Rick and Morty",className:"header__logo"})})};var h=function(e){return Object(d.jsx)("input",{type:e.type,name:e.name,id:e.id,placeholder:e.placeholder,onChange:function(a){e.handleChange(a.target.value)},value:e.value,className:e.class})};var u=function(e){return Object(d.jsxs)("div",{className:"form__specie content-select",children:[Object(d.jsxs)("select",{name:"specie",id:"specie",className:"form__specie--select",onChange:function(a){e.handleChange(a.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"Human",children:"Human"}),Object(d.jsx)("option",{value:"Alien",children:"Alien"}),Object(d.jsx)("option",{value:"Robot",children:"Robot"}),Object(d.jsx)("option",{value:"Animal",children:"Animal"})]}),Object(d.jsx)("i",{})]})};c(24);var b=function(e){return Object(d.jsxs)(r.b,{className:"cards__link",to:"./character/".concat(e.dataCharacter.id),children:[Object(d.jsx)("img",{src:"".concat(e.dataCharacter.image),alt:"Imagen del Personaje: ".concat(e.dataCharacter.name),className:"cards__item--img"}),Object(d.jsx)("h3",{className:"cards__item--title",children:e.dataCharacter.name}),Object(d.jsx)("p",{className:"cards__item--text",children:e.dataCharacter.species})]})};c(30);var m=function(e){if(0===e.dataCharacters.length)return Object(d.jsx)("h2",{className:"cards__item--title",children:"No hay ning\xfan personaje \ud83e\udd37\u200d\u2640\ufe0f que coincida con la palabra ".concat(e.wordSearch.toUpperCase()," \ud83d\ude44 ")});var a=e.dataCharacters.filter((function(a){return"Human"===e.species?"Human"===a.species:"Alien"===e.species?"Alien"===a.species:"Robot"===e.species?"Robot"===a.species:"Animal"!==e.species||"Animal"===a.species})).sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})).map((function(e){return Object(d.jsx)("li",{className:"cards__item",id:e.id,children:Object(d.jsx)(b,{dataCharacter:e})},e.id)}));return Object(d.jsx)("ul",{className:"cards",children:a})};c(31);var p=function(e){var a;return void 0===e.dataCharacter?Object(d.jsx)("section",{children:Object(d.jsx)("p",{className:"cards__item--title",children:"Personaje no encontrado \ud83d\ude2a "})}):Object(d.jsxs)("article",{className:"detail",children:[Object(d.jsx)("img",{src:e.dataCharacter.image,alt:"Imagen de ".concat(e.dataCharacter.name)}),Object(d.jsxs)("h2",{children:[e.dataCharacter.name," "]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Origin:"})," ",e.dataCharacter.origin]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Species:"})," ",e.dataCharacter.species]}),(a=e.dataCharacter.status,"Dead"===a?Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Status:"})," ",Object(d.jsx)("i",{class:"fas fa-skull-crossbones icon"})," Dead"," "]}):"Alive"===a?Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Status:"})," ",Object(d.jsx)("i",{class:"fas fa-heart icon"})," Alive"," "]}):"unknown"===a?Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Status:"})," ",Object(d.jsx)("i",{class:"fa fa-question icon","aria-hidden":"true"})," Unknown"," "]}):void 0),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Episodes:"})," ",e.dataCharacter.episodes]})]})]})},O=function(e){return fetch("https://rickandmortyapi.com/api/character/?name=".concat(e)).then((function(e){return e.json()})).then((function(e){return void 0===e.results?[]:e.results.map((function(e){return{id:e.id,name:e.name,image:e.image,species:e.species,origin:e.origin.name,episodes:e.episode.length,status:e.status}}))}))};c(32),c(33);var x=function(){var e=Object(t.useState)(""),a=Object(i.a)(e,2),c=a[0],n=a[1],s=Object(t.useState)([]),r=Object(i.a)(s,2),l=r[0],b=r[1],x=Object(t.useState)(""),f=Object(i.a)(x,2),v=f[0],g=f[1];Object(t.useEffect)((function(){O(c).then((function(e){b(e)}))}),[c]);var C=Object(j.f)("/character/:id");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{}),Object(d.jsx)("main",{children:Object(d.jsxs)(j.c,{children:[Object(d.jsxs)(j.a,{exact:!0,path:"/",children:[Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(d.jsx)("div",{children:Object(d.jsx)(h,{type:"text",name:"search",id:"search",placeholder:"Character search",handleChange:function(e){n(e)},value:c,class:"form__character"})}),Object(d.jsx)(u,{handleChange:function(e){g(e)}})]}),Object(d.jsx)("section",{children:Object(d.jsx)(m,{dataCharacters:l,wordSearch:c,species:v})})]}),Object(d.jsx)(j.a,{path:"/character/:id",children:Object(d.jsx)("section",{children:Object(d.jsx)(p,{dataCharacter:function(){if(C){var e=null!==C?C.params.id:"";return l.find((function(a){return parseInt(a.id)===parseInt(e)}))||{}}}()})})}),Object(d.jsx)(j.a,{children:Object(d.jsx)("section",{children:"Oh! P\xe1gina equivocada \ud83d\ude05 "})})]})})]})};s.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ce489f23.chunk.js.map