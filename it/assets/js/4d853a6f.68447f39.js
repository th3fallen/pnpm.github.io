"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3907],{9613:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>f});var t=r(9496);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=i,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?t.createElement(d,a(a({ref:n},l),{},{components:r})):t.createElement(d,a({ref:n},l))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3849:(e,n,r)=>{r.r(n),r.d(n,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>s,toc:()=>l,default:()=>m});var t=r(5900),i=r(4750),o=(r(9496),r(9613)),a=["components"],p={id:"configuring",title:"Configurazione"},c=void 0,s={unversionedId:"configuring",id:"configuring",title:"Configurazione",description:"pnpm usa i formati di configurazione di npm. Quindi, dovresti impostare la configurazione nello stesso modo in cui faresti per npm. Ad esempio,",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/it/next/configuring",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"configuring",title:"Configurazione"},sidebar:"docs",previous:{title:"pnpx CLI",permalink:"/it/next/pnpx-cli"},next:{title:"Filtraggio",permalink:"/it/next/filtering"}},l=[],u={toc:l};function m(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm usa ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"i formati di configurazione di npm"),". Quindi, dovresti impostare la configurazione nello stesso modo in cui faresti per npm. Ad esempio,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,o.kt)("p",null,"Se non \xe8 configurato nessun archivio, pnpm creer\xe0 automaticamente un archivio sulla stessa unit\xe0. Se hai bisogno di pnpm per lavorare su pi\xf9 dischi rigidi o filesystem, leggi ",(0,o.kt)("a",{parentName:"p",href:"/it/next/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"le FAQ"),"."),(0,o.kt)("p",null,"Inoltre, pnpm utilizza la stessa configurazione utilizzata da npm per eseguire installazioni. Se si dispone di un registro privato e npm \xe8 configurato per funzionare con esso, pnpm dovrebbe essere in grado di autorizzare anche le richieste, senza nessuna configurazione aggiuntiva."),(0,o.kt)("p",null,"Oltre a queste opzioni, pnpm ti consente anche di utilizzare tutti i parametri che sono flag (ad esempio ",(0,o.kt)("inlineCode",{parentName:"p"},"--filter")," o ",(0,o.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") come opzioni:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,o.kt)("p",null,"Vedi il comando ",(0,o.kt)("a",{parentName:"p",href:"/it/next/cli/config"},(0,o.kt)("inlineCode",{parentName:"a"},"config"))," per maggiori informazioni."))}m.isMDXComponent=!0}}]);