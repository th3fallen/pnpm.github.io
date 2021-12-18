"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8838],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),k=l,v=s["".concat(p,".").concat(k)]||s[k]||u[k]||o;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3013:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>s});var r=n(5900),l=n(4750),o=(n(9496),n(9613)),a=["components"],i={id:"outdated",title:"pnpm outdated"},p=void 0,c={unversionedId:"cli/outdated",id:"cli/outdated",title:"pnpm outdated",description:"Checks for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported).",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/cli/outdated.md",sourceDirName:"cli",slug:"/cli/outdated",permalink:"/pl/next/cli/outdated",editUrl:"https://crowdin.com/project/pnpm/pl",tags:[],version:"current",frontMatter:{id:"outdated",title:"pnpm outdated"},sidebar:"docs",previous:{title:"pnpm list",permalink:"/pl/next/cli/list"},next:{title:"pnpm why",permalink:"/pl/next/cli/why"}},d=[{value:"Opcje",id:"opcje",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--long",id:"--long",children:[],level:3},{value:"--no-table",id:"--no-table",children:[],level:3},{value:"--compatible",id:"--compatible",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3}],level:2}],u={toc:d};function s(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Checks for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported)."),(0,o.kt)("p",null,"Przyk\u0142ady:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm outdated\npnpm outdated "*gulp-*" @babel/core\n')),(0,o.kt)("h2",{id:"opcje"},"Opcje"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Check for outdated dependencies in every package found in subdirectories, or in every workspace package when executed inside a workspace."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pl/next/filtering"},"Read more about filtering.")),(0,o.kt)("h3",{id:"--global"},"--global"),(0,o.kt)("p",null,"List outdated global packages."),(0,o.kt)("h3",{id:"--long"},"--long"),(0,o.kt)("p",null,"Dodane w: v4.0.0"),(0,o.kt)("p",null,"Print details."),(0,o.kt)("h3",{id:"--no-table"},"--no-table"),(0,o.kt)("p",null,"Dodane w: v4.0.0"),(0,o.kt)("p",null,"Prints the outdated dependencies in a list format instead of the default table. Good for small consoles."),(0,o.kt)("h3",{id:"--compatible"},"--compatible"),(0,o.kt)("p",null,"Dodane w: v4.7.0"),(0,o.kt)("p",null,"Prints only versions that satisfy specifications in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Dodane w: v4.7.0"),(0,o.kt)("p",null,"Checks only ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Dodane w: v4.7.0"),(0,o.kt)("p",null,"Checks only ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"Dodane w: v4.7.0"),(0,o.kt)("p",null,"Doesn't check ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}s.isMDXComponent=!0}}]);