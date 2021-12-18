"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2493],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,u=m["".concat(o,".").concat(k)]||m[k]||s[k]||r;return n?l.createElement(u,i(i({ref:t},d),{},{components:n})):l.createElement(u,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3839:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>c,toc:()=>d,default:()=>m});var l=n(5900),a=n(4750),r=(n(9496),n(9613)),i=["components"],p={id:"pnpmfile",title:".pnpmfile.cjs"},o=void 0,c={unversionedId:"pnpmfile",id:"pnpmfile",title:".pnpmfile.cjs",description:"pnpm \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043a \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0443 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 (\u0445\u0443\u043a\u043e\u0432). \u0425\u0443\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u044b \u0432 \u0444\u0430\u0439\u043b\u0435 .pnpmfile.cjs.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/ru/next/pnpmfile",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"docs",previous:{title:"pnpm-workspace.yaml",permalink:"/ru/next/pnpm-workspace_yaml"},next:{title:"\u0412\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u044b",permalink:"/ru/next/workspaces"}},d=[{value:"\u0425\u0443\u043a\u0438",id:"\u0445\u0443\u043a\u0438",children:[{value:"TL;DR",id:"tldr",children:[],level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",children:[{value:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b",id:"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b",children:[],level:4},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",children:[],level:4},{value:"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",id:"\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",children:[],level:4}],level:3},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promise&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile",children:[{value:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b",id:"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b-1",children:[],level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",children:[],level:4},{value:"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",id:"\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f-1",children:[],level:4}],level:3}],level:2},{value:"\u041e\u043f\u0446\u0438\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",children:[{value:"ignore-pnpmfile",id:"ignore-pnpmfile",children:[],level:3},{value:"pnpmfile",id:"pnpmfile",children:[],level:3},{value:"global-pnpmfile",id:"global-pnpmfile",children:[],level:3}],level:2}],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"pnpm \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043a \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0443 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 (\u0445\u0443\u043a\u043e\u0432). \u0425\u0443\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u044b \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"."),(0,r.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d \u0432 \u0442\u043e\u043c \u0436\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435, \u0447\u0442\u043e \u0438 \u043b\u043e\u043a-\u0444\u0430\u0439\u043b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 ",(0,r.kt)("a",{parentName:"p",href:"/ru/next/workspaces"},"\u0440\u0430\u0431\u043e\u0447\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 (\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435)")," \u0441 \u043e\u0431\u0449\u0438\u043c \u043b\u043e\u043a-\u0444\u0430\u0439\u043b\u043e\u043c, ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u043a\u043e\u0440\u043d\u0435 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u043e."),(0,r.kt)("h2",{id:"\u0445\u0443\u043a\u0438"},"\u0425\u0443\u043a\u0438"),(0,r.kt)("h3",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0425\u0443\u043a-\u0444\u0443\u043d\u043a\u0446\u0438\u044f"),(0,r.kt)("th",{parentName:"tr",align:null},"Process"),(0,r.kt)("th",{parentName:"tr",align:null},"Uses"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,r.kt)("td",{parentName:"tr",align:null},"Called after pnpm parses the dependency's package manifest"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to mutate a dependency's ",(0,r.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},"Called after the dependencies have been resolved."),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to mutate the lockfile.")))),(0,r.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,r.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,r.kt)("p",null,"Allows you to mutate a dependency's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," after parsing and prior to resolution. These mutations are not saved to the filesystem, however, they will affect what gets resolved in the lockfile and therefore what gets installed."),(0,r.kt)("p",null,"Note that you will need to delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," if you have already resolved the dependency you want to modify."),(0,r.kt)("h4",{id:"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pkg")," - The manifest of the package. Either the response from the registry or the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," content."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",(0,r.kt)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use a debug log for the step.")),(0,r.kt)("h4",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("p",null,"Example ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (changes the dependencies of a dependency):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Override the manifest of foo@1.x after downloading it from the registry\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Replace bar@x.x.x with bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will change any packages using baz@x.x.x to use baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,r.kt)("h4",{id:"\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"},"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"),(0,r.kt)("p",null,"Removing the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," field from a dependency's manifest via ",(0,r.kt)("inlineCode",{parentName:"p"},"readPackage")," will not prevent pnpm from building the dependency. When building a dependency, pnpm reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," of the package from the package's archive, which is not affected by the hook. In order to ignore a package's build, use the ",(0,r.kt)("a",{parentName:"p",href:"/ru/next/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies")," field."),(0,r.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile"},(0,r.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promise<lockfile>")),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v1.41.0"),(0,r.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u043b\u043e\u043a\u0444\u0430\u0439\u043b\u0430 \u0434\u043e \u0435\u0433\u043e \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438."),(0,r.kt)("h4",{id:"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b-1"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lockfile")," - The lockfile resolutions object that is serialized to ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",(0,r.kt)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use a debug log for the step.")),(0,r.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,r.kt)("h4",{id:"\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f-1"},"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"),(0,r.kt)("p",null,"There are none - anything that can be done with the lockfile can be modified via this function, and you can even extend the lockfile's functionality."),(0,r.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"),(0,r.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v1.25.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d. \u041f\u043e\u043b\u0435\u0437\u043d\u043e \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-scripts"),", \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u043d\u0438 \u043e\u0434\u0438\u043d \u0441\u043a\u0440\u0438\u043f\u0442 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438."),(0,r.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v1.39.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,r.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,r.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,r.kt)("strong",{parentName:"li"},"\u043f\u0443\u0442\u044c")),(0,r.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438\u043c\u0435\u0440: ",(0,r.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,r.kt)("p",null,"\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e pnpmfile."),(0,r.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v1.39.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,r.kt)("strong",{parentName:"li"},"\u043f\u0443\u0442\u044c")),(0,r.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438\u043c\u0435\u0440: ",(0,r.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,r.kt)("p",null,"\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0433\u043e pnpm-\u0444\u0430\u0439\u043b\u0430. \u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 pnpm-\u0444\u0430\u0439\u043b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u0441\u0435\u043c\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c\u0438 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 pnpm-\u0444\u0430\u0439\u043b\u044b. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 pnpm-\u0444\u0430\u0439\u043b, \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 pnpm \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 pnpm \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432."))))}m.isMDXComponent=!0}}]);