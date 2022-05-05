"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1092],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,g=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var i=n(2182),a=n(9028),l=(n(9496),n(9613)),r=["components"],o={id:"update",title:"pnpm update"},p=void 0,d={unversionedId:"cli/update",id:"version-7.x/cli/update",title:"pnpm update",description:"Alias: up",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/it/cli/update",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-7.x/docs",previous:{title:"pnpm install",permalink:"/it/cli/install"},next:{title:"pnpm remove",permalink:"/it/cli/remove"}},c={},u=[{value:"TL;DR",id:"tldr",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global",id:"--global",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"up")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm update")," aggiorna i pacchetti alla loro ultima versione in base all'intervallo specificato."),(0,l.kt)("p",null,"Se utilizzato senza argomenti, aggiorna tutte le dipendenze. \xc8 possibile utilizzare modelli per aggiornare dipendenze specifiche."),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Comando"),(0,l.kt)("th",{parentName:"tr",align:null},"Significato"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,l.kt)("td",{parentName:"tr",align:null},"Aggiorna tutte le dipendenze, aderendo agli intervalli specificati in ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,l.kt)("td",{parentName:"tr",align:null},"Aggiorna tutte le dipendenze, ignorando gli intervalli specificati in ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,l.kt)("td",{parentName:"tr",align:null},"Aggiorna ",(0,l.kt)("inlineCode",{parentName:"td"},"foo")," all'ultima versione su v2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,l.kt)("td",{parentName:"tr",align:null},"Aggiorna tutte le dipendenze nell'ambito ",(0,l.kt)("inlineCode",{parentName:"td"},"@babel"))))),(0,l.kt)("h2",{id:"opzioni"},"Opzioni"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Esegue contemporaneamente l'aggiornamento in tutte le sottocartelle con un ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," (tranne node_modules)."),(0,l.kt)("p",null,"Esempi di utilizzo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# aggiorna tutti i pacchetti fino a 100 sottocartelle in profondit\xe0\npnpm --recursive update --depth 100\n# aggiorna typescript all'ultima versione in ogni pacchetto\npnpm --recursive update typescript@latest\n")),(0,l.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,l.kt)("p",null,"Ignora l'intervallo di versioni specificato in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". Verr\xe0 invece utilizzata la versione specificata dal tag ",(0,l.kt)("inlineCode",{parentName:"p"},"pi\xf9 recente")," (potenzialmente aggiornando i pacchetti tra le versioni principali)."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Aggiorna i pacchetti globali."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Cerca di collegare tutti i pacchetti dallo spazio di lavoro. Le versioni vengono aggiornate per corrispondere a quelle dei pacchetti all'interno dello spazio di lavoro."),(0,l.kt)("p",null,"Se vengono aggiornati pacchetti specifici, il comando avr\xe0 esito negativo se una delle dipendenze aggiornate non viene trovata all'interno dello spazio di lavoro. Per esempio, il seguente comando fallisce se ",(0,l.kt)("inlineCode",{parentName:"p"},"express")," non \xe8 un pacchetto dello spazio di lavoro:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Aggiorna solo i pacchetti nelle dipendenze (",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),") e nelle dipendenze opzionali (",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Aggiorna solo i pacchetti nelle dipendenze di sviluppo (",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Non aggiornare i pacchetti nelle dipendenze opzionali (",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."),(0,l.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,l.kt)("p",null,"Mostra le dipendenze obsolete e seleziona quali aggiornare."),(0,l.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/it/filtering"},"Ulteriori informazioni sui filtri.")))}m.isMDXComponent=!0}}]);