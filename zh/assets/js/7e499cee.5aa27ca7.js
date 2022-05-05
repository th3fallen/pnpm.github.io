"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3500],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=i(t),d=l,v=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(v,p(p({ref:n},u),{},{components:t})):r.createElement(v,p({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,p=new Array(o);p[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,p[1]=a;for(var i=2;i<o;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(2182),l=t(9028),o=(t(9496),t(9613)),p=["components"],a={id:"env",title:"pnpm env <cmd>"},c=void 0,i={unversionedId:"cli/env",id:"cli/env",title:"pnpm env <cmd>",description:"\u7ba1\u7406 Node.js \u73af\u5883\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/zh/next/cli/env",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/zh/next/cli/start"},next:{title:"pnpm publish",permalink:"/zh/next/cli/publish"}},u={},s=[{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--global, -g",id:"--global--g",level:3}],m={toc:s};function d(e){var n=e.components,t=(0,l.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7ba1\u7406 Node.js \u73af\u5883\u3002"),(0,o.kt)("h2",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),(0,o.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u5b89\u88c5\u5e76\u4f7f\u7528\u6307\u5b9a\u7248\u672c\u7684 Node.js"),(0,o.kt)("p",null,"\u5b89\u88c5 LTS \u7248\u672c\u7684 Node.js\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,o.kt)("p",null,"\u5b89\u88c5 v16 \u7684Node.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,o.kt)("p",null,"\u5b89\u88c5 Node.js \u7684\u9884\u53d1\u884c\u7248\u672c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,o.kt)("p",null,"\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Node.js\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,o.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"\u6b64\u66f4\u6539\u5c06\u5168\u5c40\u751f\u6548\u3002"))}d.isMDXComponent=!0}}]);