"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[922],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(t),c=o,k=s["".concat(i,".").concat(c)]||s[c]||m[c]||a;return t?r.createElement(k,p(p({ref:n},u),{},{components:t})):r.createElement(k,p({ref:n},u))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=s;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var d=2;d<a;d++)p[d]=t[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6896:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>d,toc:()=>u,default:()=>s});var r=t(5900),o=t(4750),a=(t(9496),t(9613)),p=["components"],l={id:"how-peers-are-resolved",title:"peers \u662f\u5982\u4f55\u88ab\u5904\u7406\u7684"},i=void 0,d={unversionedId:"how-peers-are-resolved",id:"how-peers-are-resolved",title:"peers \u662f\u5982\u4f55\u88ab\u5904\u7406\u7684",description:"pnpm \u7684\u6700\u4f73\u7279\u5f81\u4e4b\u4e00\u662f\uff0c\u5728\u4e00\u4e2a\u9879\u76ee\u4e2d\uff0c package \u7684\u4e00\u4e2a\u7279\u5b9a\u7248\u672c\u5c06\u59cb\u7ec8\u53ea\u6709\u4e00\u7ec4\u4f9d\u8d56\u9879\u3002 \u8fd9\u4e2a\u89c4\u5219\u6709\u4e00\u4e2a\u4f8b\u5916 -\u90a3\u5c31\u662f\u5177\u6709  peer dependencies \u7684 package \u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-peers-are-resolved.md",sourceDirName:".",slug:"/how-peers-are-resolved",permalink:"/zh/next/how-peers-are-resolved",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"how-peers-are-resolved",title:"peers \u662f\u5982\u4f55\u88ab\u5904\u7406\u7684"},sidebar:"docs",previous:{title:"\u57fa\u4e8e\u7b26\u53f7\u94fe\u63a5\u7684 node_modules \u7ed3\u6784",permalink:"/zh/next/symlinked-node-modules-structure"},next:{title:"\u5378\u8f7d pnpm",permalink:"/zh/next/uninstall"}},u=[],m={toc:u};function s(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm \u7684\u6700\u4f73\u7279\u5f81\u4e4b\u4e00\u662f\uff0c\u5728\u4e00\u4e2a\u9879\u76ee\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u4e00\u4e2a\u7279\u5b9a\u7248\u672c\u5c06\u59cb\u7ec8\u53ea\u6709\u4e00\u7ec4\u4f9d\u8d56\u9879\u3002 \u8fd9\u4e2a\u89c4\u5219\u6709\u4e00\u4e2a\u4f8b\u5916 -\u90a3\u5c31\u662f\u5177\u6709 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#peerdependencies"}," peer dependencies "),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u3002"),(0,a.kt)("p",null,"peer \u4f9d\u8d56\u9879\uff08peer dependencies\uff09\u4f1a\u4ece\u4f9d\u8d56\u56fe\u4e2d\u66f4\u9ad8\u7684\u5df2\u5b89\u88c5\u7684\u4f9d\u8d56\u9879\u4e2d\u89e3\u6790\uff08resolve\uff09\uff0c\u56e0\u4e3a\u5b83\u4eec\u4e0e\u7236\u7ea7\u5171\u4eab\u76f8\u540c\u7684\u7248\u672c\u3002 \u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u6709\u4e24\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"peers"),"\u4f9d\u8d56\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"bar@^1")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"baz@^1"),"\uff09\uff0c\u90a3\u4e48\u5b83\u53ef\u80fd\u5728\u4e00\u4e2a\u9879\u76ee\u4e2d\u6709\u591a\u4e2a\u4e0d\u540c\u7684\u4f9d\u8d56\u9879\u96c6\u5408\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"- foo-parent-1\n  - bar@1.0.0\n  - baz@1.0.0\n  - foo@1.0.0\n- foo-parent-2\n  - bar@1.0.0\n  - baz@1.1.0\n  - foo@1.0.0\n")),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u5df2\u5b89\u88c5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo-parent-1")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"foo-parent-2")," \u4e2d\u3002 \u8fd9\u4e24\u4e2a\u5305\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\uff09\u90fd\u540c\u6837\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"baz"),"\uff0c\u4f46\u5b83\u4eec\u4f9d\u8d56\u4e0d\u540c\u7248\u672c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"baz"),"\u3002 \u56e0\u6b64\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u6709\u4e24\u7ec4\u4e0d\u540c\u7684\u4f9d\u8d56\u9879\uff1a\u4e00\u7ec4\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"baz@1.0.0")," \uff0c\u53e6\u4e00\u7ec4\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"baz@1.1.0"),"\u3002 \u82e5\u8981\u652f\u6301\u8fd9\u4e9b\u7528\u4f8b\uff0cpnpm \u5fc5\u987b\u6709\u51e0\u7ec4\u4e0d\u540c\u7684\u4f9d\u8d56\u9879\uff0c\u5c31\u53bb\u786c\u94fe\u63a5\u51e0\u6b21 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0"),"\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\uff0c\u5982\u679c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u6ca1\u6709 peer \u4f9d\u8d56\u9879\uff08peer dependencies\uff09\uff0c\u5b83\u4f1a\u88ab\u786c\u94fe\u63a5\u5230\u5176\u4f9d\u8d56\u9879\u7684\u8f6f\u8fde\u63a5\uff08symlinks\uff09\u65c1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u6709 peer \u4f9d\u8d56\uff08peer dependencies\uff09\uff0c\u90a3\u4e48\u5b83\u53ef\u80fd\u5c31\u4f1a\u6709\u591a\u7ec4\u4f9d\u8d56\u9879\uff0c\u6240\u4ee5\u6211\u4eec\u4e3a\u4e0d\u540c\u7684 peer \u4f9d\u8d56\u9879\u521b\u5efa\u4e0d\u540c\u7684\u89e3\u6790\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.0.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.1.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 bar@1.0.0\n    \u251c\u2500\u2500 baz@1.0.0\n    \u251c\u2500\u2500 baz@1.1.0\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),(0,a.kt)("p",null,"\u6211\u4eec\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"}," foo@1.0.0_bar@1.0.0+baz@1.0.0")," \u6216",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.1.0"),"\u5185\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),"\u7684\u8f6f\u94fe\u63a5\u3002 \u56e0\u6b64\uff0cNode.js \u6a21\u5757\u89e3\u6790\u5668\u5c06\u627e\u5230\u6b63\u786e\u7684 peers\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u5982\u679c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"em"},"package"),"\u6ca1\u6709 peer \u4f9d\u8d56\uff08peer dependencies\uff09\uff0c\u4e0d\u8fc7\u5b83\u7684\u4f9d\u8d56\u9879\u6709 peer \u4f9d\u8d56\uff0c\u8fd9\u4e9b\u4f9d\u8d56\u4f1a\u5728\u66f4\u9ad8\u7684\u4f9d\u8d56\u56fe\u4e2d\u89e3\u6790"),", \u5219\u8fd9\u4e2a\u4f20\u9012",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u4fbf\u53ef\u5728\u9879\u76ee\u4e2d\u6709\u51e0\u7ec4\u4e0d\u540c\u7684\u4f9d\u8d56\u9879\u3002 \u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," \u5177\u6709\u5355\u4e2a\u4f9d\u8d56\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),"\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0")," \u6709\u4e00\u4e2a peer \u4f9d\u8d56\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"c@^1"),"\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," \u6c38\u8fdc\u4e0d\u4f1a\u89e3\u6790",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),"\u7684 peer, \u6240\u4ee5\u5b83\u4e5f\u4f1a\u4f9d\u8d56\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0")," \u7684 peer \u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u8be5\u7ed3\u6784\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u7684\u60c5\u51b5\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," \u9700\u8981\u5728\u9879\u76ee\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u51fa\u73b0\u4e24\u6b21 - \u5176\u4e2d\u4e00\u6b21\u662f\u88ab",(0,a.kt)("inlineCode",{parentName:"p"}," c@1.0.0")," resolve\uff0c\u53e6\u4e00\u6b21\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"c@1.1.0"),"\u518d\u6b21 resolve\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 a@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.0.0/node_modules/b\n    \u251c\u2500\u2500 a@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.1.0/node_modules/b\n    \u251c\u2500\u2500 b@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.0.0/node_modules/c\n    \u251c\u2500\u2500 b@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.1.0/node_modules/c\n    \u251c\u2500\u2500 c@1.0.0\n    \u251c\u2500\u2500 c@1.1.0\n")))}s.isMDXComponent=!0}}]);