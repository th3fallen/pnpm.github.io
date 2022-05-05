"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6528],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),k=l,d=m["".concat(i,".").concat(k)]||m[k]||c[k]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var n=r(2182),l=r(9028),o=(r(9496),r(9613)),a=["components"],p={id:"server",title:"pnpm server"},i=void 0,s={unversionedId:"cli/server",id:"version-7.x/cli/server",title:"pnpm server",description:"\uc2a4\ud1a0\uc5b4 \uc11c\ubc84\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/cli/server.md",sourceDirName:"cli",slug:"/cli/server",permalink:"/ko/cli/server",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"server",title:"pnpm server"},sidebar:"version-7.x/docs",previous:{title:"pnpm -r, --recursive",permalink:"/ko/cli/recursive"},next:{title:"pnpm store",permalink:"/ko/cli/store"}},u={},c=[{value:"Commands",id:"commands",level:2},{value:"pnpm server start",id:"pnpm-server-start",level:3},{value:"pnpm server stop",id:"pnpm-server-stop",level:3},{value:"pnpm server status",id:"pnpm-server-status",level:3},{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--background",id:"--background",level:3},{value:"--network-concurrency",id:"--network-concurrency",level:3},{value:"--protocol",id:"--protocol",level:3},{value:"--port",id:"--port",level:3},{value:"--store-dir",id:"--store-dir",level:3},{value:"--no-lock",id:"--no-lock",level:3},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",level:3},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",level:3}],m={toc:c};function k(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc2a4\ud1a0\uc5b4 \uc11c\ubc84\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("h3",{id:"pnpm-server-start"},"pnpm server start"),(0,o.kt)("p",null,"\uc2a4\ud1a0\uc5b4\uc640\uc758 \ubaa8\ub4e0 \uc0c1\ud638\uc791\uc6a9\uc744 \uc218\ud589\ud558\ub294 \uc11c\ubc84\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4. \ub2e4\ub978 \uba85\ub839\uc5b4\ub4e4\uc740 \uc2a4\ud1a0\uc5b4\uc640 \uad00\ub828\ub41c \uc791\uc5c5\uc744 \uc774 \uc11c\ubc84\uc5d0\uac8c \uc704\uc784\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),(0,o.kt)("p",null,"\uc2a4\ud1a0\uc5b4 \uc11c\ubc84\ub97c \uc911\uc9c0\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"pnpm-server-status"},"pnpm server status"),(0,o.kt)("p",null,"\ud604\uc7ac \uc11c\ubc84\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,o.kt)("h3",{id:"--background"},"--background"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"UNIX \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ub370\ubaac\ud654\uc640 \uc720\uc0ac\ud558\uac8c \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc11c\ubc84\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"--network-concurrency"},"--network-concurrency"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,o.kt)("strong",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,o.kt)("strong",{parentName:"li"},"Number"))),(0,o.kt)("p",null,"\ub3d9\uc2dc\uc5d0 \ucc98\ub9ac\ud560 \ucd5c\ub300 \ub124\ud2b8\uc6cc\ud06c \uc694\uccad \uc218 \uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"--protocol"},"--protocol"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,o.kt)("strong",{parentName:"li"},"auto")),(0,o.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,o.kt)("strong",{parentName:"li"},"auto"),", ",(0,o.kt)("strong",{parentName:"li"},"tcp"),", ",(0,o.kt)("strong",{parentName:"li"},"ipc"))),(0,o.kt)("p",null,"\uc11c\ubc84\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ud1b5\uc2e0 \ud504\ub85c\ud1a0\ucf5c\uc785\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"auto"),"\ub85c \uc124\uc815\ud558\uba74, TCP\ub97c \uc0ac\uc6a9\ud558\ub294 Windows\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 \uc2dc\uc2a4\ud15c\uc5d0\uc11c IPC\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"--port"},"--port"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,o.kt)("strong",{parentName:"li"},"5813")),(0,o.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,o.kt)("strong",{parentName:"li"},"port number"))),(0,o.kt)("p",null,"\ud1b5\uc2e0\uc5d0\uc11c TCP\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc0ac\uc6a9\ud560 \ud3ec\ud2b8 \ubc88\ud638\uc785\ub2c8\ub2e4. \ud3ec\ud2b8\uac00 \uc9c0\uc815\ub418\uace0 \ud504\ub85c\ud1a0\ucf5c\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"auto"),"\ub85c \uc124\uc815\ub418\uba74, \uc2dc\uc2a4\ud15c \uc720\ud615\uacfc \uad00\uacc4\uc5c6\uc774 \ud504\ub85c\ud1a0\ucf5c\uc774 \uc790\ub3d9\uc73c\ub85c TCP\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc124\uc815\ub429\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"--store-dir"},"--store-dir"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,o.kt)("strong",{parentName:"li"},"<","home",">","/.pnpm-store")),(0,o.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,o.kt)("strong",{parentName:"li"},"Path"))),(0,o.kt)("p",null,"\ucee8\ud150\uce20 \uc8fc\uc18c \uc9c0\uc815 \uac00\ub2a5 \uc2a4\ud1a0\uc5b4\uc5d0 \uc0ac\uc6a9\ud560 \ub514\ub809\ud130\ub9ac\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"--no-lock"},"--","[no-]","lock"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"\uc11c\ubc84 \uc2e4\ud589 \uc5ec\ubd80\uc640 \uad00\uacc4\uc5c6\uc774 \uc678\ubd80 \ud504\ub85c\uc138\uc2a4\uc5d0 \ub300\ud574 \ud328\ud0a4\uc9c0 \uc2a4\ud1a0\uc5b4\ub97c \ubcc0\uacbd\ud560 \uc218 \uc5c6\ub3c4\ub85d \ud560\uc9c0 \uc5ec\ubd80\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm server stop")," \uc744 \uc0ac\uc6a9\ud558\uc5ec \uc11c\ubc84\ub97c \uc911\uc9c0\ud558\ub294 \uac83\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"\uc124\uce58\ud558\ub294 \ub3d9\uc548 \uc0c8\ub85c\uc6b4 \ubd80\uc791\uc6a9 \uce90\uc2dc \uc0dd\uc131\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);