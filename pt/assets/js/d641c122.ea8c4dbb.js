"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[419],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8967:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>m});var a=n(5900),r=n(4750),i=(n(9496),n(9613)),o=["components"],l={id:"filtering",title:"Filtragem"},p=void 0,c={unversionedId:"filtering",id:"filtering",title:"Filtragem",description:"Adicionado em: v2.13.0",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/pt/next/filtering",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",frontMatter:{id:"filtering",title:"Filtragem"},sidebar:"docs",previous:{title:"Configurando",permalink:"/pt/next/configuring"},next:{title:"Scripts",permalink:"/pt/next/scripts"}},s=[{value:"--filter &lt;nome_do_pacote&gt;",id:"--filter-nome_do_pacote",children:[],level:2},{value:"--filter &lt;nome_do_pacote&gt;...",id:"--filter-nome_do_pacote-1",children:[],level:2},{value:"--filter &lt;nome_do_pacote&gt;^...",id:"--filter-nome_do_pacote-2",children:[],level:2},{value:"--filter ...&lt;nome_do_pacote&gt;",id:"--filter-nome_do_pacote-3",children:[],level:2},{value:"--filter &quot;...^&lt;nome_do_pacote&gt;&quot;",id:"--filter-nome_do_pacote-4",children:[],level:2},{value:"--filter ./&lt;diret\xf3rio&gt;",id:"--filter-diret\xf3rio",children:[],level:2},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory",children:[],level:2},{value:"--filter &quot;<since>&quot;",id:"--filter-since",children:[],level:2},{value:"Multiplicity",id:"multiplicity",children:[],level:2},{value:"Excluding",id:"excluding",children:[],level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",children:[],level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",children:[],level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",children:[],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Adicionado em: v2.13.0"),(0,i.kt)("p",null,"A filtragem permite restringir comandos a subconjuntos espec\xedficos de pacotes."),(0,i.kt)("p",null,"O pnpm suporta uma sintaxe de seletor rica para selecionar pacotes por nome ou por rela\xe7\xe3o."),(0,i.kt)("p",null,"Os seletores podem ser especificados atrav\xe9s da flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <command> --filter <package_selector>\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"Um artigo que compara a filtragem de Lerna com a de pnpm")))),(0,i.kt)("h2",{id:"--filter-nome_do_pacote"},"--filter ","<","nome_do_pacote>"),(0,i.kt)("p",null,"Adicionado em: v2.13.0"),(0,i.kt)("p",null,"Para selecionar um pacote exato apenas especifique o nome (",(0,i.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") ou use um padr\xe3o para selecionar um conjunto de pacotes (",(0,i.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,i.kt)("p",null,"Exemplos:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/core"\npnpm test --filter "@babel/*"\npnpm test --filter "*core"\n')),(0,i.kt)("p",null,"Desde v6.19.0:"),(0,i.kt)("p",null,"Especificar o escopo do pacote \xe9 opcional, portanto ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter=core")," escolher\xe1 ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/core")," se ",(0,i.kt)("inlineCode",{parentName:"p"},"core")," n\xe3o for encontrado. No entanto, se o espa\xe7o de trabalho tem v\xe1rios pacotes com o mesmo nome (por exemplo, ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/core")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/core"),"), ent\xe3o a filtragem sem escopo n\xe3o escolher\xe1 nada."),(0,i.kt)("h2",{id:"--filter-nome_do_pacote-1"},"--filter ","<","nome_do_pacote>..."),(0,i.kt)("p",null,"Adicionado em: v2.13.0"),(0,i.kt)("p",null,"Para selecionar um pacote e suas depend\xeancias (diretas e n\xe3o diretas), insira o nome do pacote seguido de retic\xeancias ",(0,i.kt)("inlineCode",{parentName:"p"},"<nome_do_pacote>..."),". Por exemplo, o pr\xf3ximo comando executar\xe1 testes de ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," e todas as suas depend\xeancias:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter foo...\n")),(0,i.kt)("p",null,"Voc\xea pode usar um padr\xe3o para selecionar um conjunto de pacotes raiz:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/preset-*..."\n')),(0,i.kt)("h2",{id:"--filter-nome_do_pacote-2"},"--filter ","<","nome_do_pacote>^..."),(0,i.kt)("p",null,"Adicionado em: v4.4.0"),(0,i.kt)("p",null,"Para selecionar APENAS as depend\xeancias de um pacote (diretas e n\xe3o diretas), insira as retic\xeancias mencionadas precedidas por um acento circunflexo antes do nome. Por exemplo, o pr\xf3ximo comando executar\xe1 testes para todas as depend\xeancias de ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "foo^..."\n')),(0,i.kt)("h2",{id:"--filter-nome_do_pacote-3"},"--filter ...","<","nome_do_pacote>"),(0,i.kt)("p",null,"Adicionado em: v2.14.0"),(0,i.kt)("p",null,"Para selecionar um pacote e suas depend\xeancias (diretas e n\xe3o diretas), insira retic\xeancias seguido do nome do pacote: ",(0,i.kt)("inlineCode",{parentName:"p"},"...<nome_do_pacote>"),". Por exemplo, isso executar\xe1 os testes de ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," e de todos os pacotes dependentes dele:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo\n")),(0,i.kt)("h2",{id:"--filter-nome_do_pacote-4"},'--filter "...^',"<",'nome_do_pacote>"'),(0,i.kt)("p",null,"Adicionado em: v4.4.0"),(0,i.kt)("p",null,"Para selecionar APENAS as depend\xeancias de um pacote (tanto diretas quanto n\xe3o-diretas), insira retic\xeancias seguidas de um acento circunflexo antes do nome do pacote. Por exemplo, isso ir\xe1 executar testes para todos os pacotes dependentes de ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'pnpm test --filter "...^foo"\n')),(0,i.kt)("h2",{id:"--filter-diret\xf3rio"},"--filter ./","<","diret\xf3rio>"),(0,i.kt)("p",null,"Adicionado em: v2.15.0"),(0,i.kt)("p",null,"To only select packages under the specified directory, you may specify any relative path, typically in POSIX format."),(0,i.kt)("h2",{id:"--filter-directory"},"--filter {","<","directory>}"),(0,i.kt)("p",null,"Added in: v4.7.0"),(0,i.kt)("p",null,"Includes all projects that are under the specified directory."),(0,i.kt)("p",null,"It may be used with the ellipsis and chevron operators to select dependents/dependencies as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter ...{<directory>}\npnpm <cmd> --filter {<directory>}...\npnpm <cmd> --filter ...{<directory>}...\n")),(0,i.kt)("p",null,"It may also be combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm <cmd> --filter "{packages}[origin/master]"\npnpm <cmd> --filter "...{packages}[origin/master]"\npnpm <cmd> --filter "{packages}[origin/master]..."\npnpm <cmd> --filter "...{packages}[origin/master]..."\n')),(0,i.kt)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'pnpm <cmd> --filter "@babel/*{components}"\npnpm <cmd> --filter "@babel/*{components}[origin/master]"\npnpm <cmd> --filter "...@babel/*{components}[origin/master]"\n')),(0,i.kt)("h2",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,i.kt)("p",null,"Added in: v4.6.0"),(0,i.kt)("p",null,"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,i.kt)("p",null,"For example, the next command will run tests in all changed packages since ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "...[origin/master]"\n')),(0,i.kt)("h2",{id:"multiplicity"},"Multiplicity"),(0,i.kt)("p",null,"When packages are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo --filter bar --filter baz...\n")),(0,i.kt)("h2",{id:"excluding"},"Excluding"),(0,i.kt)("p",null,"Added in: v5.8.0"),(0,i.kt)("p",null,'Any of the filter selectors may work as exclusion operators when they have a leading "!". In zsh (and possibly other shells), "!" should be escaped: ',(0,i.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,i.kt)("p",null,"For instance, this will run a command in all projects except for ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!foo\n")),(0,i.kt)("p",null,"And this will run a command in all projects that are not under the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!./lib\n")),(0,i.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,i.kt)("p",null,"Added in: v6.2.0"),(0,i.kt)("p",null,"Acts the same a ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," but omits ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," when selecting dependency projects from the workspace."),(0,i.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,i.kt)("p",null,"Added in: v5.14.0"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),(0,i.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,i.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,i.kt)("p",null,"Added in: v6.16.0"),(0,i.kt)("p",null,"Allows to ignore changed files by glob patterns when filtering for changed projects since the specified commit/branch."),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}m.isMDXComponent=!0}}]);