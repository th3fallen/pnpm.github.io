"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3530],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),u=l,b=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(b,r(r({ref:n},d),{},{components:t})):a.createElement(b,r({ref:n},d))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=t(2182),l=t(9028),i=(t(9496),t(9613)),r=["components"],o={id:"uninstall",title:"Desinstalando pnpm"},p=void 0,s={unversionedId:"uninstall",id:"version-6.x/uninstall",title:"Desinstalando pnpm",description:"Eliminando los paquetes instalados globalmente",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/es/6.x/uninstall",editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"6.x",frontMatter:{id:"uninstall",title:"Desinstalando pnpm"},sidebar:"version-6.x/docs",previous:{title:"C\xf3mo se resuelven los peers",permalink:"/es/6.x/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/es/6.x/pnpm-vs-npm"}},d={},m=[{value:"Eliminando los paquetes instalados globalmente",id:"eliminando-los-paquetes-instalados-globalmente",level:2},{value:"Eliminando la CLI de pnpm",id:"eliminando-la-cli-de-pnpm",level:2},{value:"Eliminando el almac\xe9n direccionable de contenido global",id:"eliminando-el-almac\xe9n-direccionable-de-contenido-global",level:2},{value:"Eliminando el archivo de estado",id:"eliminando-el-archivo-de-estado",level:2}],c={toc:m};function u(e){var n=e.components,t=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"eliminando-los-paquetes-instalados-globalmente"},"Eliminando los paquetes instalados globalmente"),(0,i.kt)("p",null,"Antes de eliminar la CLI de pnpm, es recomendado eliminar todos los paquetes globales que instal\xf3 mediante pnpm."),(0,i.kt)("p",null,"Para listar todos los paquetes globales, ejecute ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Hay dos formas de eliminar los paquetes globales:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ejecute ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," con cada paquete global listado."),(0,i.kt)("li",{parentName:"ol"},"Ejecute ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," para encontrar la ubicaci\xf3n del directorio global y elim\xednelo manualmente.")),(0,i.kt)("h2",{id:"eliminando-la-cli-de-pnpm"},"Eliminando la CLI de pnpm"),(0,i.kt)("p",null,"Si us\xf3 el script independiente para instalar pnpm (o npx), entonces deber\xeda poder desinstalar la CLI de pnpm usando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,i.kt)("p",null,"Tambi\xe9n puede que quieras quitar la variable ",(0,i.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," de tu configuraci\xf3n de shell (",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," o ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")."),(0,i.kt)("p",null,"Si us\xf3 npm para instalar pnpm, entonces debe usar npm para desinstalar pnpm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,i.kt)("h2",{id:"eliminando-el-almac\xe9n-direccionable-de-contenido-global"},"Eliminando el almac\xe9n direccionable de contenido global"),(0,i.kt)("p",null,"Si us\xf3 pnpm solo en el disco principal, tendr\xe1 un almac\xe9n global en el directorio de inicio. As\xed que simplemente elim\xednelo a trav\xe9s de:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,i.kt)("p",null,"Si us\xf3 pnpm en discos no primarios, entonces el almac\xe9n est\xe1 en la ra\xedz de ese disco. Por ejemplo, si us\xf3 pnpm en el disco ",(0,i.kt)("inlineCode",{parentName:"p"},"D:")," en Windows, elimine el almac\xe9n en ",(0,i.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,i.kt)("h2",{id:"eliminando-el-archivo-de-estado"},"Eliminando el archivo de estado"),(0,i.kt)("p",null,"pnpm tambi\xe9n guarda alg\xfan estado en ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json"),". Puede eliminar este archivo."))}u.isMDXComponent=!0}}]);