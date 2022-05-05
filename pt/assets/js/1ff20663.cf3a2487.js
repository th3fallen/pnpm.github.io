"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6331],{9613:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(9496);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),k=o,u=m["".concat(p,".").concat(k)]||m[k]||d[k]||r;return t?n.createElement(u,i(i({ref:a},c),{},{components:t})):n.createElement(u,i({ref:a},c))}));function k(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3038:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=t(2182),o=t(9028),r=(t(9496),t(9613)),i=["components"],l={id:"workspaces",title:"\xc1rea de Trabalho"},p=void 0,s={unversionedId:"workspaces",id:"workspaces",title:"\xc1rea de Trabalho",description:"O pnpm tem suporte embutido para mono reposit\xf3rios (tamb\xe9m conhecidos como reposit\xf3rios multi-pacotes, reposit\xf3rios multi-projetos ou reposit\xf3rios monol\xedticos). Voc\xea pode criar uma \xe1rea de trabalho para unir v\xe1rios projetos dentro de um \xfanico reposit\xf3rio.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/pt/next/workspaces",editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"workspaces",title:"\xc1rea de Trabalho"},sidebar:"docs",previous:{title:".pnpmfile.cjs",permalink:"/pt/next/pnpmfile"},next:{title:"Apelidos",permalink:"/pt/next/aliases"}},c={},d=[{value:"Protocolo do espa\xe7o de trabalho (espa\xe7o de trabalho:)",id:"protocolo-do-espa\xe7o-de-trabalho-espa\xe7o-de-trabalho",level:2},{value:"Referenciando pacotes de \xe1reas de trabalhos via aliases",id:"referenciando-pacotes-de-\xe1reas-de-trabalhos-via-aliases",level:3},{value:"Referencing workspace packages through their relative path",id:"referencing-workspace-packages-through-their-relative-path",level:3},{value:"Publishing workspace packages",id:"publishing-workspace-packages",level:3},{value:"Release workflow",id:"release-workflow",level:2},{value:"Options",id:"options",level:2},{value:"link-workspace-packages",id:"link-workspace-packages",level:3},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",level:3},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",level:3},{value:"save-workspace-protocol",id:"save-workspace-protocol",level:3},{value:"Solu\xe7\xe3o de Problemas",id:"solu\xe7\xe3o-de-problemas",level:2},{value:"Usage examples",id:"usage-examples",level:2}],m={toc:d};function k(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"O pnpm tem suporte embutido para mono reposit\xf3rios (tamb\xe9m conhecidos como reposit\xf3rios multi-pacotes, reposit\xf3rios multi-projetos ou reposit\xf3rios monol\xedticos). Voc\xea pode criar uma \xe1rea de trabalho para unir v\xe1rios projetos dentro de um \xfanico reposit\xf3rio."),(0,r.kt)("p",null,"Um espa\xe7o de trabalho deve ter um arquivo ",(0,r.kt)("a",{parentName:"p",href:"/pt/next/pnpm-workspace_yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," em sua raiz. Um espa\xe7o de trabalho tamb\xe9m pode ter um arquivo ",(0,r.kt)("a",{parentName:"p",href:"/pt/next/npmrc"},(0,r.kt)("inlineCode",{parentName:"a"},".npmrc"))," em sua raiz."),(0,r.kt)("h2",{id:"protocolo-do-espa\xe7o-de-trabalho-espa\xe7o-de-trabalho"},"Protocolo do espa\xe7o de trabalho (espa\xe7o de trabalho:)"),(0,r.kt)("p",null,"Por padr\xe3o, o pnpm ir\xe1 vincular pacotes da \xe1rea de trabalho se os pacotes dispon\xedveis corresponderem aos intervalos declarados. Por exemplo, ",(0,r.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," est\xe1 vinculado a ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," se ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," tiver ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," em suas depend\xeancias. No entanto, se ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," tiver ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," nas depend\xeancias e ",(0,r.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," n\xe3o estiver na \xe1rea de trabalho, ",(0,r.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," ser\xe1 instalado a partir do registro. Esse comportamento introduz certa incerteza."),(0,r.kt)("p",null,"Felizmente, o pnpm suporta o protocolo ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:"),". Quando este protocolo \xe9 utilizado, o pnpm se recusar\xe1 a resolver qualquer coisa que n\xe3o seja um pacote da \xe1rea de trabalho local. Portanto, se voc\xea definir ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", desta vez a instala\xe7\xe3o falhar\xe1 porque ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," n\xe3o est\xe1 presente na \xe1rea de trabalho."),(0,r.kt)("p",null,"Este protocolo \xe9 especialmente \xfatil quando a op\xe7\xe3o ",(0,r.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," \xe9 definida como ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". Nesse caso, o pnpm apenas vincular\xe1 os pacotes da \xe1rea de trabalho se o protocolo ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," for usado."),(0,r.kt)("h3",{id:"referenciando-pacotes-de-\xe1reas-de-trabalhos-via-aliases"},"Referenciando pacotes de \xe1reas de trabalhos via aliases"),(0,r.kt)("p",null,"Digamos que voc\xea tenha um pacote em sua \xe1rea de trabalho nomeado ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),'. Normalmente, voc\xea o referenciaria como "foo" ',(0,r.kt)("inlineCode",{parentName:"p"},'"workspace:*"'),"."),(0,r.kt)("p",null,"Se voc\xea quiser usar um alias diferente, a sintaxe seguinte tamb\xe9m funcionar\xe1: ",(0,r.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,r.kt)("p",null,"Before publish, aliases are converted to regular aliased dependencies. The above example will become: ",(0,r.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,r.kt)("h3",{id:"referencing-workspace-packages-through-their-relative-path"},"Referencing workspace packages through their relative path"),(0,r.kt)("p",null,"In a workspace with 2 packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bar")," may have ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," in its dependencies declared as ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Before publishing, these specs are converted to regular version specs supported by all package managers."),(0,r.kt)("h3",{id:"publishing-workspace-packages"},"Publishing workspace packages"),(0,r.kt)("p",null,"When a workspace package is packed into an archive (whether it's through ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically replace any ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,r.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"workspace:~"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"workspace:^"),")"),(0,r.kt)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),(0,r.kt)("p",null,"So for example, if we have ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"qar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"zoo")," in the workspace and they all are at version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,r.kt)("p",null,"Will be transformed into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,r.kt)("p",null,"This feature allows you to depend on your local workspace packages while still being able to publish the resulting packages to the remote registry without needing intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefitting from the guarantees semver offers."),(0,r.kt)("h2",{id:"release-workflow"},"Release workflow"),(0,r.kt)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does not provide a built-in solution for it. However, there are 2 well tested tools that handle versioning and support pnpm:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,r.kt)("p",null,"For how to set up a repository using Rush, read ",(0,r.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,r.kt)("p",null,"For using Changesets with pnpm, read ",(0,r.kt)("a",{parentName:"p",href:"/pt/next/using-changesets"},"this guide"),"."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"true"),", ",(0,r.kt)("strong",{parentName:"li"},"false"),", ",(0,r.kt)("strong",{parentName:"li"},"deep"))),(0,r.kt)("p",null,"If this is enabled, locally available packages are linked to ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry. This is very convenient in a monorepo. If you need local packages to also be linked to subdependencies, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"deep")," setting."),(0,r.kt)("p",null,"Else, packages are downloaded and installed from the registry. However, workspace packages can still be linked by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," range protocol."),(0,r.kt)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If this is enabled, local packages from the workspace are preferred over packages from the registry, even if there is a newer version of the package in the registry."),(0,r.kt)("p",null,"This setting is only useful if the workspace doesn't use ",(0,r.kt)("inlineCode",{parentName:"p"},"save-workspace-protocol"),"."),(0,r.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If this is enabled, pnpm creates a single ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace. This also means that all dependencies of workspace packages will be in a single ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," (and get symlinked to their package ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder for Node's module resolution)."),(0,r.kt)("p",null,"Advantages of this option:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"every dependency is a singleton"),(0,r.kt)("li",{parentName:"ul"},"faster installations in a monorepo"),(0,r.kt)("li",{parentName:"ul"},"fewer changes in code reviews as they are all in one file")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Even though all the dependencies will be hard linked into the root ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies that are declared in their ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", so pnpm's strictness is preserved. This is a result of the aforementioned symbolic linking."))),(0,r.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If this is enabled, new dependencies will be added with the workspace protocol IF (and only if) they are present in the workspace."),(0,r.kt)("p",null,"You might want to change this setting to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the tooling in your repository does not understand the workspace protocol (and ideally submit a PR to your tooling to get it added in the future)."),(0,r.kt)("h2",{id:"solu\xe7\xe3o-de-problemas"},"Solu\xe7\xe3o de Problemas"),(0,r.kt)("p",null,"pnpm cannot guarantee that scripts will be run in topological order if there are cycles between workspace dependencies. If pnpm detects cyclic dependencies during installation, it will produce a warning. If pnpm is able to find out which dependencies are causing the cycles, it will display them too."),(0,r.kt)("p",null,"If you see the message ",(0,r.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies"),", please inspect workspace dependencies declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,r.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,r.kt)("p",null,"Here are a few open source projects that use the workspace feature of pnpm:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ice-lab/icestark"},"icestark")," (as of 12/16/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"4862326a8de53d02f617e7b1986774fd7540fccd"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue-next"},"Vue 3.0")," (as of 10/9/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"Vite")," (as of 9/26/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")," (as of 9/21/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"f2187ab6688368edb904b649bd371a658f6a8637"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/prisma/prisma"},"Prisma")," (as of 9/21/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")," (as of 9/21/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rollup/plugins"},"Rollup plugins")," (as of 9/21/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"53fb18c0c2852598200c547a0b1d745d15b5b487"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")," (as of 9/26/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bytedance/bytemd"},"ByteMD")," (as of 2/18/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vueuse/vueuse"},"VueUse")," (as of 9/25/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/slidevjs/slidev"},"Slidev")," (as of 4/12/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sveltejs/kit"},"SvelteKit")," (as of 9/26/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/telecraft/telecraft"},"Telecraft")," (as of 9/26/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"73a9c48c9d4f160d758b8881f404cc52c20a7454"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hayes/giraphql"},"GiraphQL")," (as of 8/4/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"3dd3ff148da382d6f406f20626a9a5c25707c0c8"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/msgbyte/tailchat"},"Tailchat")," (as of 12/27/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"298af71aa0619e0a8fa8717777afe2fb32739db4"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vitest-dev/vitest"},"Vitest")," (as of 12/13/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"d6ff0ccb819716713f5eab5c046861f4d8e4f988"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/element-plus/element-plus"},"Element Plus")," (as of 9/23/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"f9e192535ff74d1443f1d9e0c5394fad10428629"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/withastro/astro"},"Astro")," (as of 3/08/2022, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"240d88aefe66c7d73b9c713c5da42ae789c011ce"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vuepress/vuepress-next"},"VuePress 2.0")," (as of 4/23/2022, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"b85b1c3b39e80a8de92a7469381061f75ef33623"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nextauthjs/next-auth"},"NextAuth.js")," (as of 5/3/2022, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"4f29d39521451e859dbdb83179756b372e3dd7aa"),")")))}k.isMDXComponent=!0}}]);