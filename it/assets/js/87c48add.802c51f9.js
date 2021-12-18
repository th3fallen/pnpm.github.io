"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8090],{9613:(e,i,n)=>{n.d(i,{Zo:()=>c,kt:()=>m});var a=n(9496);function o(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function t(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?t(Object(n),!0).forEach((function(i){o(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function r(e,i){if(null==e)return{};var n,a,o=function(e,i){if(null==e)return{};var n,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],i.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var i=a.useContext(p),n=i;return e&&(n="function"==typeof e?e(i):l(l({},i),e)),n},c=function(e){var i=s(e.components);return a.createElement(p.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},u=a.forwardRef((function(e,i){var n=e.components,o=e.mdxType,t=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||t;return n?a.createElement(h,l(l({ref:i},c),{},{components:n})):a.createElement(h,l({ref:i},c))}));function m(e,i){var n=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var t=n.length,l=new Array(t);l[0]=u;var r={};for(var p in i)hasOwnProperty.call(i,p)&&(r[p]=i[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<t;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4654:(e,i,n)=>{n.r(i),n.d(i,{frontMatter:()=>r,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>u});var a=n(5900),o=n(4750),t=(n(9496),n(9613)),l=["components"],r={id:"faq",title:"Domande frequenti (FAQ)"},p=void 0,s={unversionedId:"faq",id:"version-6.x/faq",title:"Domande frequenti (FAQ)",description:"Perch\xe9 la mia cartella node_modules utilizza spazio su disco se i pacchetti sono salvati in un archivio globale?",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/it/faq",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"faq",title:"Domande frequenti (FAQ)"}},c=[{value:"Perch\xe9 la mia cartella <code>node_modules</code> utilizza spazio su disco se i pacchetti sono salvati in un archivio globale?",id:"perch\xe9-la-mia-cartella-node_modules-utilizza-spazio-su-disco-se-i-pacchetti-sono-salvati-in-un-archivio-globale",children:[],level:2},{value:"Funziona su Windows?",id:"funziona-su-windows",children:[],level:2},{value:"Ma l&#39;approccio annidato di <code>node_modules</code> \xe8 incompatibile con Windows?",id:"ma-lapproccio-annidato-di-node_modules-\xe8-incompatibile-con-windows",children:[],level:2},{value:"E i collegamenti simbolici circolari?",id:"e-i-collegamenti-simbolici-circolari",children:[],level:2},{value:"Perch\xe9 avere collegamenti fisici alla fine? Perch\xe9 non collegare simbolicamente direttamente all&#39;archivio globale?",id:"perch\xe9-avere-collegamenti-fisici-alla-fine-perch\xe9-non-collegare-simbolicamente-direttamente-allarchivio-globale",children:[],level:2},{value:"Pnpm funziona su pi\xf9 unit\xe0 o filesystem?",id:"pnpm-funziona-su-pi\xf9-unit\xe0-o-filesystem",children:[{value:"Il percorso dell&#39;archivio \xe8 specificato",id:"il-percorso-dellarchivio-\xe8-specificato",children:[],level:3},{value:"Il percorso dell&#39;archivio NON \xe8 specificato",id:"il-percorso-dellarchivio-non-\xe8-specificato",children:[],level:3}],level:2},{value:"Cosa fa <code>pnpm store prune</code>? \xc8 dannoso?",id:"cosa-fa-pnpm-store-prune-\xe8-dannoso",children:[],level:2},{value:"Cosa significa <code>pnpm</code>?",id:"cosa-significa-pnpm",children:[],level:2},{value:"<code>pnpm</code> non funziona con &lt;IL TUO-PROGETTO-QUI&gt;?",id:"pnpm-non-funziona-con-il-tuo-progetto-qui",children:[{value:"Soluzione 1",id:"soluzione-1",children:[],level:3},{value:"Soluzione 2",id:"soluzione-2",children:[],level:3},{value:"Soluzione 3",id:"soluzione-3",children:[],level:3}],level:2}],d={toc:c};function u(e){var i=e.components,n=(0,o.Z)(e,l);return(0,t.kt)("wrapper",(0,a.Z)({},d,n,{components:i,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"perch\xe9-la-mia-cartella-node_modules-utilizza-spazio-su-disco-se-i-pacchetti-sono-salvati-in-un-archivio-globale"},"Perch\xe9 la mia cartella ",(0,t.kt)("inlineCode",{parentName:"h2"},"node_modules")," utilizza spazio su disco se i pacchetti sono salvati in un archivio globale?"),(0,t.kt)("p",null,"pnpm crea ",(0,t.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},'"collegamenti fisici"')," dall'archivio globale alla cartella ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," del progetto. I collegamenti fisici puntano allo stesso spazio sul disco dove si trovano i file originali. Quindi, ad esempio, se hai ",(0,t.kt)("inlineCode",{parentName:"p"},"foo")," nel tuo progetto come dipendenza e occupa 1 Mb di spazio, sembrer\xe0 che occupi 1 Mb di spazio nella cartella ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," del progetto e la stessa quantit\xe0 di spazio nell'archivio globale. Tuttavia, 1 Mb \xe8 ",(0,t.kt)("em",{parentName:"p"},"lo stesso spazio")," sul disco indirizzato da due posizioni diverse. Quindi in totale ",(0,t.kt)("inlineCode",{parentName:"p"},"foo")," occupa 1MB, non 2MB."),(0,t.kt)("p",null,"Per saperne di pi\xf9 su questo argomento:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Perch\xe9 i collegamenti fisici sembrano occupare lo stesso spazio degli originali?")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"Un thread dalla chat room di pnpm")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"Un ticket nel repository di pnpm"))),(0,t.kt)("h2",{id:"funziona-su-windows"},"Funziona su Windows?"),(0,t.kt)("p",null,"Risposta breve: s\xec. Risposta lunga: Usare i collegamenti simbolici su Windows \xe8 a dir poco problematico, tuttavia, pnpm ha una soluzione alternativa. Per Windows, usiamo le ",(0,t.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions"},"giunzioni"),"."),(0,t.kt)("h2",{id:"ma-lapproccio-annidato-di-node_modules-\xe8-incompatibile-con-windows"},"Ma l'approccio annidato di ",(0,t.kt)("inlineCode",{parentName:"h2"},"node_modules")," \xe8 incompatibile con Windows?"),(0,t.kt)("p",null,"Le prime versioni di npm hanno avuto problemi a causa del annidamento di tutti i ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," (vedi ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"questo ticket"),". Tuttavia, pnpm non crea cartelle profonde, memorizza tutti i pacchetti pianamente e utilizza collegamenti simbolici per creare la struttura ad albero delle dipendenze."),(0,t.kt)("h2",{id:"e-i-collegamenti-simbolici-circolari"},"E i collegamenti simbolici circolari?"),(0,t.kt)("p",null,"Sebbene pnpm utilizzi il collegamento per inserire le dipendenze nella cartella ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules"),", collegamenti simbolici circolari vengono evitati perch\xe9 i pacchetti padre vengono inseriti nella stessa ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," in cui si trovano le loro dipendenze. Quindi le dipendenze di ",(0,t.kt)("inlineCode",{parentName:"p"},"foo")," non sono in ",(0,t.kt)("inlineCode",{parentName:"p"},"foo/node_modules"),", ma ",(0,t.kt)("inlineCode",{parentName:"p"},"foo")," \xe8 in ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," insieme alle sue dipendenze."),(0,t.kt)("h2",{id:"perch\xe9-avere-collegamenti-fisici-alla-fine-perch\xe9-non-collegare-simbolicamente-direttamente-allarchivio-globale"},"Perch\xe9 avere collegamenti fisici alla fine? Perch\xe9 non collegare simbolicamente direttamente all'archivio globale?"),(0,t.kt)("p",null,"Un pacchetto pu\xf2 avere diversi insiemi di dipendenze su una macchina."),(0,t.kt)("p",null,"Nel progetto ",(0,t.kt)("strong",{parentName:"p"},"A")," ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," pu\xf2 avere una dipendenza risolta in ",(0,t.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),", ma nel progetto ",(0,t.kt)("strong",{parentName:"p"},"B")," la stessa dipendenza di ",(0,t.kt)("inlineCode",{parentName:"p"},"foo")," potrebbe risolversi in ",(0,t.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),"; quindi, pnpm collega fisicamente ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," a ogni progetto in cui viene utilizzato, per creare diversi insiemi di dipendenze per esso."),(0,t.kt)("p",null,"Il collegamento simbolico diretto all'archivio globale funzionerebbe con il flag ",(0,t.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks")," di Node, tuttavia, questo approccio ha una pletora dei suoi problemi, quindi abbiamo deciso di attenerci ai collegamenti fisici. Per maggiori dettagli sul perch\xe9 stata presa questa decisione, vedere ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"questo ticket"),"."),(0,t.kt)("h2",{id:"pnpm-funziona-su-pi\xf9-unit\xe0-o-filesystem"},"Pnpm funziona su pi\xf9 unit\xe0 o filesystem?"),(0,t.kt)("p",null,"L'archivio dei pacchetti dovrebbe trovarsi sulla stessa unit\xe0 e filesystem delle installazioni, altrimenti i pacchetti verranno copiati, non collegati. Ci\xf2 \xe8 dovuto a una limitazione nel funzionamento del collegamento fisico, in quanto un file su un file system non pu\xf2 indirizzare una posizione in un altro. Vedi il ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"ticket #712")," per maggiori dettagli."),(0,t.kt)("p",null,"pnpm funziona in modo diverso nei 2 casi seguenti:"),(0,t.kt)("h3",{id:"il-percorso-dellarchivio-\xe8-specificato"},"Il percorso dell'archivio \xe8 specificato"),(0,t.kt)("p",null,"Se il percorso dell'archivio \xe8 specificato tramite ",(0,t.kt)("a",{parentName:"p",href:"/it/configuring"},"la configurazione dell'archivio"),", la copia avviene tra l'archivio e tutti i progetti che si trovano su un disco diverso."),(0,t.kt)("p",null,"Se si esegue ",(0,t.kt)("inlineCode",{parentName:"p"},"pnpm install")," sul disco ",(0,t.kt)("inlineCode",{parentName:"p"},"A"),", l'archivio pnpm deve trovarsi sul disco ",(0,t.kt)("inlineCode",{parentName:"p"},"A"),". Se l'archivio pnpm si trova sul disco ",(0,t.kt)("inlineCode",{parentName:"p"},"B"),", tutti i pacchetti richiesti verranno copiati direttamente nella posizione del progetto invece di essere collegati. Questo inibisce gravemente i vantaggi di archiviazione e prestazioni di pnpm."),(0,t.kt)("h3",{id:"il-percorso-dellarchivio-non-\xe8-specificato"},"Il percorso dell'archivio NON \xe8 specificato"),(0,t.kt)("p",null,"Se il percorso dell'archivio non \xe8 impostato, vengono creati pi\xf9 archivi (uno per unit\xe0 o filesystem)."),(0,t.kt)("p",null,"Se l'installazione viene eseguita sul disco ",(0,t.kt)("inlineCode",{parentName:"p"},"A"),", l'archivio verr\xe0 creato su ",(0,t.kt)("inlineCode",{parentName:"p"},"A")," in ",(0,t.kt)("inlineCode",{parentName:"p"},".pnpm-store")," nella radice del filesystem.  Se in seguito l'installazione viene eseguita sul disco ",(0,t.kt)("inlineCode",{parentName:"p"},"B"),", verr\xe0 creato un archivio indipendente su ",(0,t.kt)("inlineCode",{parentName:"p"},"B")," in ",(0,t.kt)("inlineCode",{parentName:"p"},".pnpm-store"),". I progetti manterrebbero ancora i vantaggi di pnpm, ma ogni unit\xe0 potrebbe avere pacchetti ridondanti."),(0,t.kt)("h2",{id:"cosa-fa-pnpm-store-prune-\xe8-dannoso"},"Cosa fa ",(0,t.kt)("inlineCode",{parentName:"h2"},"pnpm store prune"),"? \xc8 dannoso?"),(0,t.kt)("p",null,"Il comando ",(0,t.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," rimuove ",(0,t.kt)("em",{parentName:"p"},"pacchetti non referenziati"),"."),(0,t.kt)("p",null,"I pacchetti non referenziati sono pacchetti che non vengono utilizzati da alcun progetto nel sistema. I pacchetti possono diventare non referenziati dopo la maggior parte delle operazioni di installazione, per esempio quando le dipendenze sono ridondanti."),(0,t.kt)("p",null,"Ad esempio, durante ",(0,t.kt)("inlineCode",{parentName:"p"},"pnpm install"),", il pacchetto ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," viene aggiornato a ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm manterr\xe0 ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," nell'archivio, in quanto non rimuove automaticamente i pacchetti. Se il pacchetto ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," non viene utilizzato da nessun altro progetto sul sistema, diventa non referenziato. L'esecuzione di ",(0,t.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," rimuover\xe0 ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," dall'archivio."),(0,t.kt)("p",null,"Eseguire ",(0,t.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," non \xe8 dannoso e non ha effetti collaterali sui tuoi progetti. Se le installazioni future richiederanno pacchetti rimossi, pnpm li scaricher\xe0 di nuovo."),(0,t.kt)("p",null,"\xc8 consigliabile eseguire occasionalmente ",(0,t.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," per ripulire l'archivio, ma non troppo frequentemente. A volte, i pacchetti non referenziati vengono richiesti di nuovo. Questo potrebbe verificarsi quando si cambiano i rami e si installano dipendenze pi\xf9 vecchie, in questo caso pnpm avrebbe bisogno di ri-scaricare tutti i pacchetti rimossi, rallentando brevemente il processo di installazione."),(0,t.kt)("h2",{id:"cosa-significa-pnpm"},"Cosa significa ",(0,t.kt)("inlineCode",{parentName:"h2"},"pnpm"),"?"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"pnpm")," significa ",(0,t.kt)("inlineCode",{parentName:"p"},"npm performante"),". ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"@rstacruz")," ha inventato il nome."),(0,t.kt)("h2",{id:"pnpm-non-funziona-con-il-tuo-progetto-qui"},(0,t.kt)("inlineCode",{parentName:"h2"},"pnpm")," non funziona con ","<","IL TUO-PROGETTO-QUI>?"),(0,t.kt)("p",null,"Nella maggior parte dei casi significa che una delle dipendenze richiede pacchetti non dichiarati in ",(0,t.kt)("inlineCode",{parentName:"p"},"package.json"),". \xc8 un errore comune causato da una ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," piatta. Se ci\xf2 accade, si tratta di un errore nella dipendenza e dovrebbe essere corretta. Tuttavia, ci\xf2 potrebbe richiedere del tempo, quindi pnpm supporta soluzioni alternative per far funzionare i pacchetti difettosi."),(0,t.kt)("h3",{id:"soluzione-1"},"Soluzione 1"),(0,t.kt)("p",null,"Nell'esempio seguente, una dipendenza ",(0,t.kt)("strong",{parentName:"p"},"non")," ha il modulo ",(0,t.kt)("inlineCode",{parentName:"p"},"iterall")," il proprio elenco di dipendenze."),(0,t.kt)("p",null,"La soluzione pi\xf9 semplice per risolvere le dipendenze mancanti dei pacchetti difettosi \xe8 ",(0,t.kt)("strong",{parentName:"p"},"aggiungere ",(0,t.kt)("inlineCode",{parentName:"strong"},"iterall")," come dipendenza al ",(0,t.kt)("inlineCode",{parentName:"strong"},"package.json")," del nostro progetto"),"."),(0,t.kt)("p",null,"Puoi farlo, installandolo tramite ",(0,t.kt)("inlineCode",{parentName:"p"},"pnpm add iterall")," e verr\xe0 automaticamente aggiunto al ",(0,t.kt)("inlineCode",{parentName:"p"},"package.json")," del tuo progetto."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,t.kt)("h3",{id:"soluzione-2"},"Soluzione 2"),(0,t.kt)("p",null,"Una delle soluzioni consiste nell'utilizzare gli ",(0,t.kt)("a",{parentName:"p",href:"/it/pnpmfile#hooks"},"hook")," per aggiungere le dipendenze mancanti al ",(0,t.kt)("inlineCode",{parentName:"p"},"package.json")," del pacchetto."),(0,t.kt)("p",null,"Un esempio era ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," che non funzionava con ",(0,t.kt)("inlineCode",{parentName:"p"},"pnpm"),". Da allora \xe8 stato risolto in modo tale che ora funzioni con ",(0,t.kt)("inlineCode",{parentName:"p"},"pnpm"),"."),(0,t.kt)("p",null,"Era solito generare un errore:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-console"},"Errore: impossibile trovare il modulo 'babel-traverse'\n  in /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,t.kt)("p",null,"Il problema era che ",(0,t.kt)("inlineCode",{parentName:"p"},"babel-traverse")," stato utilizzato in ",(0,t.kt)("inlineCode",{parentName:"p"},"inspectpack")," che stato utilizzato da ",(0,t.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),", ma ",(0,t.kt)("inlineCode",{parentName:"p"},"babel-traverse")," non \xe8 stato specificato nel ",(0,t.kt)("inlineCode",{parentName:"p"},"package.json")," di ",(0,t.kt)("inlineCode",{parentName:"p"},"inspectpack"),". Funzionava ancora con ",(0,t.kt)("inlineCode",{parentName:"p"},"npm")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"yarn")," perch\xe9 creano ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," piatte."),(0,t.kt)("p",null,"La soluzione era creare un ",(0,t.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," con i seguenti contenuti:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),(0,t.kt)("p",null,"Dopo aver creato ",(0,t.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", elimina solo ",(0,t.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," - non \xe8 necessario eliminare ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules"),", poich\xe9 gli hook pnpm influiscono solo sulla risoluzione del modulo. Poi, ricostruire le dipendenze e dovrebbe funzionare."),(0,t.kt)("h3",{id:"soluzione-3"},"Soluzione 3"),(0,t.kt)("p",null,"Nel caso in cui ci siano troppi problemi, puoi utilizzare l'opzione ",(0,t.kt)("inlineCode",{parentName:"p"},"shamefully-hoist"),". Questo crea una ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," piaptta simile a quella creata da ",(0,t.kt)("inlineCode",{parentName:"p"},"npm")," o ",(0,t.kt)("inlineCode",{parentName:"p"},"yarn"),", che non \xe8 raccomandato in quanto evitare questa struttura \xe8 lo scopo principale dell'approccio ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," di pnpm."),(0,t.kt)("p",null,"Per usarlo, prova ",(0,t.kt)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}u.isMDXComponent=!0}}]);