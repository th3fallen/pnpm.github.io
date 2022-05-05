"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2630],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var a=n(2182),r=n(9028),l=(n(9496),n(9613)),p=["components"],i={id:"installation",title:"\u5b89\u88c5"},o=void 0,m={unversionedId:"installation",id:"version-7.x/installation",title:"\u5b89\u88c5",description:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh/installation",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"installation",title:"\u5b89\u88c5"},sidebar:"version-7.x/docs",previous:{title:"\u9879\u76ee\u521d\u8877",permalink:"/zh/motivation"},next:{title:"pnpm CLI",permalink:"/zh/pnpm-cli"}},s={},u=[{value:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",id:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",level:2},{value:"\u4f7f\u7528 Corepack",id:"\u4f7f\u7528-corepack",level:2},{value:"\u901a\u8fc7 npm \u5b89\u88c5",id:"\u901a\u8fc7-npm-\u5b89\u88c5",level:2},{value:"\u4f7f\u7528 HomeBrew",id:"\u4f7f\u7528-homebrew",level:2},{value:"\u4f7f\u7528 Scoop",id:"\u4f7f\u7528-scoop",level:2},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:2},{value:"\u6545\u969c\u6392\u67e5",id:"\u6545\u969c\u6392\u67e5",level:2},{value:"\u5378\u8f7d pnpm",id:"\u5378\u8f7d-pnpm",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c"},"\u4f7f\u7528\u72ec\u7acb\u811a\u672c"),(0,l.kt)("p",null,"\u5728 POSIX \u7cfb\u7edf\u4e0a\uff0c\u5373\u4f7f\u60a8\u6ca1\u6709\u5b89\u88c5 Node.js\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\u5b89\u88c5 pnpm\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6ca1\u6709\u5b89\u88c5 curl\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 wget\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,l.kt)("p",null,"\u5728 Windows \u4e0b\uff08\u4f7f\u7528PowerShell\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,l.kt)("p",null,"\u7136\u540e\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh/cli/env"},"pnpm env")," \u547d\u4ee4\u6765\u5b89\u88c5 Node.js\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528-corepack"},"\u4f7f\u7528 Corepack"),(0,l.kt)("p",null,"\u4ece v16.13 \u5f00\u59cb\uff0cNode.js \u53d1\u5e03\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," \u6765\u7ba1\u7406\u5305\u7ba1\u7406\u5668\u3002 \u8fd9\u662f\u4e00\u9879\u5b9e\u9a8c\u6027\u529f\u80fd\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u901a\u8fc7\u8fd0\u884c\u5982\u4e0b\u811a\u672c\u6765\u542f\u7528\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,l.kt)("p",null,"\u8fd9\u5c06\u81ea\u52a8\u5728\u60a8\u7684\u7cfb\u7edf\u4e0a\u5b89\u88c5 pnpm\u3002 \u4f46\u662f\uff0c\u5b83\u53ef\u80fd\u4e0d\u662f\u6700\u65b0\u7248\u672c\u7684 pnpm\u3002 \u8981\u5347\u7ea7\u5b83\uff0c\u8bf7\u68c0\u67e5\u6700\u65b0\u7684 pnpm \u7248\u672c\u5e76\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack prepare pnpm@7.0.0 --activate\n")),(0,l.kt)("h2",{id:"\u901a\u8fc7-npm-\u5b89\u88c5"},"\u901a\u8fc7 npm \u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528-homebrew"},"\u4f7f\u7528 HomeBrew"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5b89\u88c5\u4e86\u5305\u7ba1\u7406\u5668\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 pnpm\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528-scoop"},"\u4f7f\u7528 Scoop"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5b89\u88c5\u4e86 Scoop \uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 pnpm\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4f60\u5e0c\u671b\u5728 CI \u670d\u52a1\u5668\u4e0a\u4f7f\u7528 pnpm \u5417\uff1f \u53c2\u9605\uff1a",(0,l.kt)("a",{parentName:"p",href:"/zh/continuous-integration"},"\u6301\u7eed\u96c6\u6210"),"\u3002"))),(0,l.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u5404\u7248\u672c pnpm \u4e0e\u5404\u7248\u672c Node.js \u4e4b\u95f4\u7684\u652f\u6301\u8868\u683c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,l.kt)("h2",{id:"\u6545\u969c\u6392\u67e5"},"\u6545\u969c\u6392\u67e5"),(0,l.kt)("p",null,"\u5982\u679c pnpm \u635f\u574f\u5e76\u4e14\u60a8\u65e0\u6cd5\u901a\u8fc7\u91cd\u65b0\u5b89\u88c5\u6765\u4fee\u590d\u5b83\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4ece PATH \u4e2d\u5c06\u5176\u624b\u52a8\u5220\u9664\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u60a8\u5728\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u65f6\u9047\u5230\u4ee5\u4e0b\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5c1d\u8bd5\u901a\u8fc7\u8fd0\u884c\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"which pnpm"),"\u6765\u627e\u5230 pnpm \u7684\u4f4d\u7f6e\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Windows\uff0c\u8bf7\u5728 Git Bash \u4e2d\u8fd0\u884c\u6b64\u547d\u4ee4\u3002 \u60a8\u5c06\u83b7\u5f97 pnpm \u547d\u4ee4\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,l.kt)("p",null,"\u73b0\u5728\u60a8\u5e94\u8be5\u5df2\u7ecf\u77e5\u9053\u4e86 pnpm CLI \u7684\u6240\u5728\u76ee\u5f55\u3002\u6253\u5f00\u8be5\u76ee\u5f55\u5e76\u5220\u9664\u6240\u6709\u4e0e pnpm \u76f8\u5173\u7684\u6587\u4ef6\uff08\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u7b49\uff09\u3002 \u5b8c\u6210\u540e\uff0c\u518d\u6b21\u5b89\u88c5 pnpm\u3002\u73b0\u5728\uff0c\u5b83\u5e94\u8be5\u6b63\u6309\u7167\u9884\u671f\u5de5\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u5378\u8f7d-pnpm"},"\u5378\u8f7d pnpm"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u4ece\u7cfb\u7edf\u4e2d\u5378\u8f7d pnpm CLI \u5e76\u79fb\u9664\u78c1\u76d8\u4e2d\u7684\u76f8\u5173\u6587\u4ef6\uff0c\u8bf7\u67e5\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/zh/uninstall"},"\u5378\u8f7d pnpm"),"\u3002"))}c.isMDXComponent=!0}}]);