"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2126],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=l,u=m["".concat(o,".").concat(k)]||m[k]||d[k]||i;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var a=n(2182),l=n(9028),i=(n(9496),n(9613)),r=["components"],p={id:"filtering",title:"Filtreleme"},o=void 0,s={unversionedId:"filtering",id:"filtering",title:"Filtreleme",description:"Filtreleme, girilen komutlar\u0131n ve parametrelerin, sadece belirtilen paketler/k\xfct\xfcphaneler i\xe7in \xe7al\u0131\u015fmas\u0131n\u0131 sa\u011flamak i\xe7in kullan\u0131l\u0131r.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/tr/next/filtering",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"current",frontMatter:{id:"filtering",title:"Filtreleme"},sidebar:"docs",previous:{title:"Yap\u0131land\u0131rma",permalink:"/tr/next/configuring"},next:{title:"Scripts",permalink:"/tr/next/scripts"}},c={},d=[{value:"Matching",id:"matching",level:2},{value:"--filter &lt;paket_ad\u0131&gt;",id:"--filter-paket_ad\u0131",level:3},{value:"--filter &lt;paket_ad\u0131&gt;...",id:"--filter-paket_ad\u0131-1",level:3},{value:"--filter &lt;paket_ad\u0131&gt;^...",id:"--filter-paket_ad\u0131-2",level:3},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name",level:3},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-1",level:3},{value:"--filter ./&lt;glob&gt;, --filter {&lt;glob&gt;}",id:"--filter-glob---filter-glob",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"Excluding",id:"excluding",level:2},{value:"Multiplicity",id:"multiplicity",level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],m={toc:d};function k(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filtreleme, girilen komutlar\u0131n ve parametrelerin, sadece belirtilen paketler/k\xfct\xfcphaneler i\xe7in \xe7al\u0131\u015fmas\u0131n\u0131 sa\u011flamak i\xe7in kullan\u0131l\u0131r."),(0,i.kt)("p",null,'pnpm\'de, hedef paketleri isim veya ili\u015fkilerine g\xf6re bulmak i\xe7in kullanabilece\u011fin, esnek s\xf6z dizim (syntax) yap\u0131s\u0131na sahip, "se\xe7ici (selector)" diye adland\u0131rabilece\u011fimiz bir tarama \xf6zelli\u011fi vard\u0131r.'),(0,i.kt)("p",null,"Selectors may be specified via the ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"-F"),") flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,i.kt)("h2",{id:"matching"},"Matching"),(0,i.kt)("h3",{id:"--filter-paket_ad\u0131"},"--filter ","<","paket_ad\u0131>"),(0,i.kt)("p",null,"Paket hedeflemek i\xe7in kullanabilece\u011fin iki yol vard\u0131r. Tek bir paketi bulmak i\xe7in ad\u0131n\u0131 (",(0,i.kt)("inlineCode",{parentName:"p"},"@alan-ad\u0131/paket-ad\u0131"),") kullanabilir veya ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," karakteri ile ayn\u0131 alan ad\u0131na sahip birden fazla paketi hedefleyebilirsin (",(0,i.kt)("inlineCode",{parentName:"p"},"@alan-ad\u0131/*"),")."),(0,i.kt)("p",null,"\u015eu \u015fekilde:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,i.kt)("p",null,"Specifying the scope of the package is optional, so ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter=core")," will pick ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/core")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"core")," is not found. However, if the workspace has multiple packages with the same name (for instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/core")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/core"),"), then filtering without scope will pick nothing."),(0,i.kt)("h3",{id:"--filter-paket_ad\u0131-1"},"--filter ","<","paket_ad\u0131>..."),(0,i.kt)("p",null,"Bir paketi ve ili\u015fkili oldu\u011fu k\xfct\xfcphaneleri hedeflemek i\xe7in se\xe7icinin sonuna \xfc\xe7 nokta ekleyebilirsin: ",(0,i.kt)("inlineCode",{parentName:"p"},"<paket_ad\u0131>..."),". \xd6rne\u011fin a\u015fa\u011f\u0131daki komut, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," projesi ve ili\u015fkili oldu\u011fu di\u011fer k\xfct\xfcphaneler i\xe7in test komutunu \xe7al\u0131\u015ft\u0131racakt\u0131r:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,i.kt)("p",null,"Ayr\u0131ca, benzer isme sahip birden fazla paketi \u015fu \u015fekilde hedefleyebilirsin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,i.kt)("h3",{id:"--filter-paket_ad\u0131-2"},"--filter ","<","paket_ad\u0131>^..."),(0,i.kt)("p",null,"To ONLY select the dependencies of a package (both direct and non-direct), suffix the name with the aforementioned ellipsis preceded by a chevron. For instance, the next command will run tests for all of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"'s dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,i.kt)("h3",{id:"--filter-package_name"},"--filter ...","<","package_name>"),(0,i.kt)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with an ellipsis: ",(0,i.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will run the tests of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,i.kt)("h3",{id:"--filter-package_name-1"},'--filter "...^',"<",'package_name>"'),(0,i.kt)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the package name with an ellipsis followed by a chevron. For instance, this will run tests for all packages dependent on ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,i.kt)("h3",{id:"--filter-glob---filter-glob"},"--filter ./","<","glob>, --filter {","<","glob>}"),(0,i.kt)("p",null,"A glob pattern relative to the current working directory matching projects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "./packages/**" <cmd>\n')),(0,i.kt)("p",null,"Includes all projects that are under the specified directory."),(0,i.kt)("p",null,"It may be used with the ellipsis and chevron operators to select dependents/dependencies as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,i.kt)("p",null,"It may also be combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages/**}[origin/master]" <cmd>\npnpm --filter "...{packages/**}[origin/master]" <cmd>\npnpm --filter "{packages/**}[origin/master]..." <cmd>\npnpm --filter "...{packages/**}[origin/master]..." <cmd>\n')),(0,i.kt)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components/**}" <cmd>\npnpm --filter "@babel/*{components/**}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components/**}[origin/master]" <cmd>\n')),(0,i.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,i.kt)("p",null,"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,i.kt)("p",null,"For example, the next command will run tests in all changed packages since ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,i.kt)("h2",{id:"excluding"},"Excluding"),(0,i.kt)("p",null,'Any of the filter selectors may work as exclusion operators when they have a leading "!". In zsh (and possibly other shells), "!" should be escaped: ',(0,i.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,i.kt)("p",null,"For instance, this will run a command in all projects except for ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,i.kt)("p",null,"And this will run a command in all projects that are not under the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,i.kt)("h2",{id:"multiplicity"},"Multiplicity"),(0,i.kt)("p",null,"When packages are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,i.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,i.kt)("p",null,"Acts the same a ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," but omits ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," when selecting dependency projects from the workspace."),(0,i.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),(0,i.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,i.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,i.kt)("p",null,"Allows to ignore changed files by glob patterns when filtering for changed projects since the specified commit/branch."),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}k.isMDXComponent=!0}}]);