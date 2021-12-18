"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9437],{9613:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var r=i(9496);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(i),m=n,v=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return i?r.createElement(v,o(o({ref:t},u),{},{components:i})):r.createElement(v,o({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},7528:(e,t,i)=>{i.r(t),i.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>d});var r=i(5900),n=i(4750),a=(i(9496),i(9613)),o=["components"],l={id:"store",title:"pnpm store"},c=void 0,p={unversionedId:"cli/store",id:"version-6.x/cli/store",title:"pnpm store",description:"Gestione dell'archivio dei pacchetti.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/it/cli/store",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-6.x/docs",previous:{title:"pnpm server",permalink:"/it/cli/server"},next:{title:"pnpm root",permalink:"/it/cli/root"}},u=[{value:"Comandi",id:"comandi",children:[{value:"status",id:"status",children:[],level:3},{value:"add",id:"add",children:[],level:3},{value:"prune",id:"prune",children:[],level:3},{value:"path",id:"path",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,i=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gestione dell'archivio dei pacchetti."),(0,a.kt)("h2",{id:"comandi"},"Comandi"),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"Verifica la presenza di pacchetti modificati nell'archivio."),(0,a.kt)("p",null,"Restituisce il codice di uscita 0 se il contenuto del pacchetto \xe8 lo stesso del momento dello scompattamento."),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"Aggiunto nella versione: v2.12.0"),(0,a.kt)("p",null,"Funzionalmente equivalente a ",(0,a.kt)("a",{parentName:"p",href:"/it/cli/add"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm add")),", tranne per il fatto che aggiunge nuovi pacchetti all'archivio direttamente senza modificare alcun progetto o file al di fuori dell'archivio."),(0,a.kt)("h3",{id:"prune"},"prune"),(0,a.kt)("p",null,"Rimuove i pacchetti orfani dall'archivio."),(0,a.kt)("p",null,"L'eliminazione dell'archivio far\xe0 risparmiare spazio su disco, tuttavia potrebbe rallentare installazioni future che coinvolgono pacchetti eliminati. In definitiva, si tratta di un'operazione sicura, tuttavia non \xe8 consigliabile se si dispone di pacchetti orfani da un pacchetto che si intende reinstallare."),(0,a.kt)("p",null,"Si prega di leggere ",(0,a.kt)("a",{parentName:"p",href:"/it/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"la FAQ")," per ulteriori informazioni sui pacchetti senza riferimenti e sulle migliori pratiche."),(0,a.kt)("p",null,"Si noti che questo \xe8 vietato quando \xe8 in esecuzione un ",(0,a.kt)("a",{parentName:"p",href:"/it/cli/server"},"server di archiviazione"),"."),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"Aggiunto nella versione: v6.10.0"),(0,a.kt)("p",null,"Restituisce il percorso alla cartella dell'archivio attivo."))}d.isMDXComponent=!0}}]);