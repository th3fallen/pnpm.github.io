"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8273],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var r=n(2182),o=n(9028),a=(n(9496),n(9613)),i=["components"],p={id:"store",title:"pnpm store"},s=void 0,l={unversionedId:"cli/store",id:"version-7.x/cli/store",title:"pnpm store",description:"Managing the package store.",source:"@site/versioned_docs/version-7.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/cli/store",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/store.md",tags:[],version:"7.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-7.x/docs",previous:{title:"pnpm server",permalink:"/cli/server"},next:{title:"pnpm root",permalink:"/cli/root"}},c={},d=[{value:"Commands",id:"commands",level:2},{value:"status",id:"status",level:3},{value:"add",id:"add",level:3},{value:"prune",id:"prune",level:3},{value:"path",id:"path",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Managing the package store."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"Checks for modified packages in the store."),(0,a.kt)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the\ntime of unpacking."),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"Functionally equivalent to ",(0,a.kt)("a",{parentName:"p",href:"/cli/add"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm add")),", except this adds new packages to the\nstore directly without modifying any projects or files outside of the store."),(0,a.kt)("h3",{id:"prune"},"prune"),(0,a.kt)("p",null,"Removes ",(0,a.kt)("em",{parentName:"p"},"unreferenced packages")," from the store."),(0,a.kt)("p",null,"Unreferenced packages are packages that are not used by any projects on the\nsystem. Packages can become unreferenced after most installation operations, for\ninstance when dependencies are made redundant."),(0,a.kt)("p",null,"For example, during ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),", package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to\n",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm will keep ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not\nautomatically remove packages. If package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other\nproject on the system, it becomes unreferenced. Running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," would\nremove ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," is not harmful and has no side effects on your\nprojects. If future installations require removed packages, pnpm will download\nthem again."),(0,a.kt)("p",null,"It is best practice to run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the\nstore, but not too frequently. Sometimes, unreferenced packages become required\nagain. This could occur when switching branches and installing older\ndependencies, in which case pnpm would need to re-download all removed packages,\nbriefly slowing down the installation process."),(0,a.kt)("p",null,"Please note that this command is prohibited when a ",(0,a.kt)("a",{parentName:"p",href:"/cli/server"},"store server")," is running."),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"Returns the path to the active store directory."))}m.isMDXComponent=!0}}]);