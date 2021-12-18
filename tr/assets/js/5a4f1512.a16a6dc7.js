"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2438],{9613:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(9496);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),f=l,v=u["".concat(p,".").concat(f)]||u[f]||s[f]||i;return t?n.createElement(v,a(a({ref:r},d),{},{components:t})):n.createElement(v,a({ref:r},d))}));function f(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9667:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>u});var n=t(5900),l=t(4750),i=(t(9496),t(9613)),a=["components"],o={id:"why",title:"pnpm why"},p=void 0,c={unversionedId:"cli/why",id:"version-5.x/cli/why",title:"pnpm why",description:"Shows all packages that depend on the specified package.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/tr/5.x/cli/why",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"5.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-5.x/docs",previous:{title:"pnpm outdated",permalink:"/tr/5.x/cli/outdated"},next:{title:"pnpm run",permalink:"/tr/5.x/cli/run"}},d=[{value:"Parametreler",id:"parametreler",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--json",id:"--json",children:[],level:3},{value:"--long",id:"--long",children:[],level:3},{value:"--parseable",id:"--parseable",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",children:[],level:3}],level:2}],s={toc:d};function u(e){var r=e.components,t=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Shows all packages that depend on the specified package."),(0,i.kt)("h2",{id:"parametreler"},"Parametreler"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Show the dependency tree for the specified package on every package in subdirectories or on every workspace package when executed inside a workspace."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"S\xfcr\xfcm 3.7.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Show information in JSON format."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"Show verbose output."),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"Show parseable output instead of tree view."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Only display the dependency tree for packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Only display the dependency tree for packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/tr/5.x/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}u.isMDXComponent=!0}}]);