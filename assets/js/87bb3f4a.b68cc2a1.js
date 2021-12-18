"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2881],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=i,f=d["".concat(a,".").concat(b)]||d[b]||u[b]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8551:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>a,metadata:()=>p,toc:()=>s,default:()=>d});var r=n(5900),i=n(4750),o=(n(9496),n(9613)),l=["components"],c={id:"bin",title:"pnpm bin"},a=void 0,p={unversionedId:"cli/bin",id:"version-6.x/cli/bin",title:"pnpm bin",description:"Prints the directory into which the executables of dependencies are linked.",source:"@site/versioned_docs/version-6.x/cli/bin.md",sourceDirName:"cli",slug:"/cli/bin",permalink:"/cli/bin",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/bin.md",tags:[],version:"6.x",frontMatter:{id:"bin",title:"pnpm bin"},sidebar:"version-6.x/docs",previous:{title:"pnpm root",permalink:"/cli/root"},next:{title:"package.json",permalink:"/package_json"}},s=[{value:"Options",id:"options",children:[{value:"--global, -g",id:"--global--g",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Prints the directory into which the executables of dependencies are linked."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"Prints the location of the globally installed executables."))}d.isMDXComponent=!0}}]);