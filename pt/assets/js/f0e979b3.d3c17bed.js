"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3899],{9613:(e,o,n)=>{n.d(o,{Zo:()=>c,kt:()=>u});var a=n(9496);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,a,t=function(e,o){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=a.createContext({}),l=function(e){var o=a.useContext(d),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},c=function(e){var o=l(e.components);return a.createElement(d.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},m=a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=t,v=m["".concat(d,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(v,i(i({ref:o},c),{},{components:n})):a.createElement(v,i({ref:o},c))}));function u(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var d in o)hasOwnProperty.call(o,d)&&(s[d]=o[d]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5076:(e,o,n)=>{n.r(o),n.d(o,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>l,toc:()=>c,default:()=>m});var a=n(5900),t=n(4750),r=(n(9496),n(9613)),i=["components"],s={id:"motivation",title:"Motiva\xe7\xe3o"},d=void 0,l={unversionedId:"motivation",id:"version-6.x/motivation",title:"Motiva\xe7\xe3o",description:"Economizando espa\xe7o em disco e aumentando a velocidade de instala\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/pt/motivation",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"6.x",frontMatter:{id:"motivation",title:"Motiva\xe7\xe3o"},sidebar:"version-6.x/docs",next:{title:"Instala\xe7\xe3o",permalink:"/pt/installation"}},c=[{value:"Economizando espa\xe7o em disco e aumentando a velocidade de instala\xe7\xe3o",id:"economizando-espa\xe7o-em-disco-e-aumentando-a-velocidade-de-instala\xe7\xe3o",children:[],level:2},{value:"Cria\xe7\xe3o de um diret\xf3rio node_modules non-flat",id:"cria\xe7\xe3o-de-um-diret\xf3rio-node_modules-non-flat",children:[],level:2}],p={toc:c};function m(e){var o=e.components,n=(0,t.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"economizando-espa\xe7o-em-disco-e-aumentando-a-velocidade-de-instala\xe7\xe3o"},"Economizando espa\xe7o em disco e aumentando a velocidade de instala\xe7\xe3o"),(0,r.kt)("p",null,"Ao usar npm ou Yarn, se voc\xea tiver 100 projetos usando uma depend\xeancia, voc\xea ter\xe1 100 c\xf3pias dessa depend\xeancia salva no disco. Com o pnpm, a depend\xeancia ser\xe1 armazenada em uma store que pode ser endere\xe7\xe1vel por seu conte\xfado, ent\xe3o:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Se voc\xea depende de diferentes vers\xf5es da depend\xeancia, apenas os arquivos que diferem s\xe3o adicionados \xe0 store. Por exemplo, se ele tiver 100 arquivos, e uma nova vers\xe3o tiver uma altera\xe7\xe3o em apenas um desses arquivos, o ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm update")," adicionar\xe1 apenas 1 novo arquivo \xe0 store, em vez de clonar toda a depend\xeancia por causa de uma simples mudan\xe7a."),(0,r.kt)("li",{parentName:"ol"},"Todos os arquivos s\xe3o salvos em um \xfanico lugar no disco. Quando os pacotes s\xe3o instalados, seus arquivos s\xe3o vinculados a partir desse \xfanico local, n\xe3o consumindo espa\xe7o adicional em disco. Isso permite que voc\xea compartilhe depend\xeancias da mesma vers\xe3o entre projetos.")),(0,r.kt)("p",null,"Como resultado, voc\xea economiza muito espa\xe7o em seu disco proporcional ao n\xfamero de projetos e depend\xeancias e tem instala\xe7\xf5es muito mais r\xe1pidas!"),(0,r.kt)("h2",{id:"cria\xe7\xe3o-de-um-diret\xf3rio-node_modules-non-flat"},"Cria\xe7\xe3o de um diret\xf3rio node_modules non-flat"),(0,r.kt)("p",null,"Ao instalar depend\xeancias com o npm, todos os pacotes s\xe3o i\xe7ados para a raiz do m\xf3dulos. Como resultado, o c\xf3digo fonte tem acesso a depend\xeancias que n\xe3o s\xe3o adicionadas como depend\xeancias do projeto."),(0,r.kt)("p",null,"pnpm usa symlinks (links simb\xf3licos) para adicionar apenas as depend\xeancias diretas do projeto \xe0 raiz do diret\xf3rio de m\xf3dulos. Se voc\xea quiser mais detalhes sobre a estrutura \xfanica que o pnpm cria para o ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," e por que funciona bem com o ecossistema.js Node, leia:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat Node_modules n\xe3o \xe9 a \xfanica maneira")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pt/symlinked-node-modules-structure"},"Estrutura node_modules symlinked"))))}m.isMDXComponent=!0}}]);