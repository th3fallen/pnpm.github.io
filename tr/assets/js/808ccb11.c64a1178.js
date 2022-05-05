"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2175],{9613:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>k});var t=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),d=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=d(a),k=r,c=u["".concat(i,".").concat(k)]||u[k]||s[k]||l;return a?t.createElement(c,o(o({ref:n},m),{},{components:a})):t.createElement(c,o({ref:n},m))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5609:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>s});var t=a(2182),r=a(9028),l=(a(9496),a(9613)),o=["components"],p={title:"Klasik node_modules yap\u0131s\u0131 art\u0131k tek y\xf6ntem de\u011fil",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},i=void 0,d={permalink:"/tr/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://crowdin.com/project/pnpm/tr",source:"@site/i18n/tr/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"Klasik node_modules yap\u0131s\u0131 art\u0131k tek y\xf6ntem de\u011fil",description:"Yeni pnpm kullan\u0131c\u0131lar\u0131 s\u0131k s\u0131k bana pnpm'in yaratt\u0131\u011f\u0131 node_modules'\xfcn garip yap\u0131s\u0131n\u0131 soruyor. Neden d\xfcz yap\u0131da de\u011fil? T\xfcm alt ba\u011f\u0131ml\u0131l\u0131klar nerede?",date:"2020-05-27T00:00:00.000Z",formattedDate:"27 May\u0131s 2020",tags:[],readingTime:2.205,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"Klasik node_modules yap\u0131s\u0131 art\u0131k tek y\xf6ntem de\u011fil",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"pnpm ile Node Modules yap\u0131land\u0131rma se\xe7enekleri",permalink:"/tr/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},m={authorsImageUrls:[void 0]},s=[],u={toc:s};function k(e){var n=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Yeni pnpm kullan\u0131c\u0131lar\u0131 s\u0131k s\u0131k bana pnpm'in yaratt\u0131\u011f\u0131 ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),"'\xfcn garip yap\u0131s\u0131n\u0131 soruyor. Neden d\xfcz yap\u0131da de\u011fil? T\xfcm alt ba\u011f\u0131ml\u0131l\u0131klar nerede?"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Makalenin okuyucular\u0131n\u0131n npm ve Yarn taraf\u0131ndan olu\u015fturulan ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," yap\u0131s\u0131na zaten a\u015fina oldu\u011funu varsayaca\u011f\u0131m. Npm 3'\xfcn neden v3'te ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),"'\xfcn d\xfcz yap\u0131s\u0131n\u0131 kullanmaya ba\u015flamas\u0131 gerekti\u011fini anlayamad\u0131ysan\u0131z, baz\u0131 eski kaynaklar\u0131 inceleyebilirsiniz: ",(0,l.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"Neden pnpm kullanmal\u0131y\u0131z?"),".")),(0,l.kt)("p",null,"\xd6yleyse neden pnpm'in ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),"'\xfc ola\u011fand\u0131\u015f\u0131? \u0130ki dizin olu\u015ftural\u0131m ve birinde ",(0,l.kt)("inlineCode",{parentName:"p"},"npm add express"),", di\u011ferinde ise ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add express")," komutlar\u0131n\u0131 \xe7al\u0131\u015ft\u0131ral\u0131m. \u0130\u015fte ilk dizinin ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),"'\xfcnden elde etti\u011finiz klas\xf6r yap\u0131s\u0131:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),(0,l.kt)("p",null,"Klas\xf6r yap\u0131s\u0131n\u0131n tamam\u0131n\u0131 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"burada")," g\xf6rebilirsiniz."),(0,l.kt)("p",null,"Ve bu ise, pnpm taraf\u0131ndan olu\u015fturulan ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"Buradan")," kontrol edebilirsiniz."),(0,l.kt)("p",null,"Peki, t\xfcm bu ba\u011f\u0131ml\u0131l\u0131klar nerede? G\xf6r\xfcld\xfc\u011f\xfc \xfczere, ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),"'te ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpm")," ad\u0131nda yaln\u0131zca bir klas\xf6r ve ",(0,l.kt)("inlineCode",{parentName:"p"},"express")," ad\u0131nda bir sembolik ba\u011flant\u0131 var. Eh, biz zaten sadece ",(0,l.kt)("inlineCode",{parentName:"p"},"express")," y\xfckledik, bu y\xfczden uygulaman\u0131z\u0131n eri\u015fmesi gereken tek paket bu"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pnpm'in kat\u0131 kurall\u0131l\u0131\u011f\u0131n\u0131n neden iyi bir \u015fey oldu\u011fu hakk\u0131nda ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"}," daha fazla bilgi ")," edinin")),(0,l.kt)("p",null,"Bakal\u0131m, ",(0,l.kt)("inlineCode",{parentName:"p"},"express")," i\xe7inde neler var:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n    .modules.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"express"),"'in ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),"'\xfc yok mu? ",(0,l.kt)("inlineCode",{parentName:"p"},"express"),"'in t\xfcm ba\u011f\u0131ml\u0131l\u0131klar\u0131 nerede?"),(0,l.kt)("p",null,"\u0130\u015fin p\xfcf noktas\u0131, ",(0,l.kt)("inlineCode",{parentName:"p"},"express"),"'in sadece bir sembolik ba\u011flant\u0131 olmas\u0131d\u0131r. Node.js ba\u011f\u0131ml\u0131l\u0131klar\u0131 \xe7\xf6zd\xfc\u011f\xfcnde, onlar\u0131n ger\xe7ek konumlar\u0131n\u0131 kullan\u0131r, bu nedenle sembolik ba\u011flant\u0131lar\u0131 korumaz. Ancak, ",(0,l.kt)("inlineCode",{parentName:"p"},"express"),"'in ger\xe7ek konumu nerede diye sorabilirsiniz?"),(0,l.kt)("p",null,"\u0130\u015fte burada: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express"),"."),(0,l.kt)("p",null,"Tamam, \u015fimdi ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpm/")," klas\xf6r\xfcn\xfcn amac\u0131n\u0131 biliyoruz. ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpm/")," t\xfcm paketleri d\xfcz bir klas\xf6r yap\u0131s\u0131nda saklar, b\xf6ylece her paket bu modelle adland\u0131r\u0131lan bir klas\xf6rde bulunabilir:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".pnpm/<paket-ad\u0131>@<versiyon>/node_modules/<paket-ad\u0131>\n")),(0,l.kt)("p",null,"Biz buna sanal saklama dizini diyoruz."),(0,l.kt)("p",null,"Bu d\xfcz yap\u0131, npm v2 taraf\u0131ndan olu\u015fturulan ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),"'\xfcn neden oldu\u011fu i\xe7 i\xe7e dosya yolu sorunlar\u0131n\u0131 \xf6nler, ancak npm v3,4,5,6 veya Yarn v1 taraf\u0131ndan olu\u015fturulan d\xfcz ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," yap\u0131s\u0131na gerek duymadan paketleri korur."),(0,l.kt)("p",null,"\u015eimdi, ",(0,l.kt)("inlineCode",{parentName:"p"},"express")," 'in ger\xe7ek konumuna bakal\u0131m:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),(0,l.kt)("p",null,"Bu bir doland\u0131r\u0131c\u0131l\u0131k m\u0131? Hala ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," yok! pnpm ' nin ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," yap\u0131s\u0131n\u0131n ikinci hilesi, paketlerin ba\u011f\u0131ml\u0131l\u0131klar\u0131n\u0131n, ba\u011f\u0131ml\u0131 paketin ger\xe7ek konumlar\u0131n\u0131n ayn\u0131 dizin d\xfczeyinde olmas\u0131d\u0131r. Dolay\u0131s\u0131yla ",(0,l.kt)("inlineCode",{parentName:"p"},"express"),"'in ba\u011f\u0131ml\u0131l\u0131klar\u0131 ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/"),"'\xfcn i\xe7erisinde de\u011fil, ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/")," i\xe7erisindedir:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"express"),"'in t\xfcm ba\u011f\u0131ml\u0131l\u0131klar\u0131, ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/")," i\xe7indeki uygun dizinlere sembolik ba\u011flant\u0131lard\u0131r. ",(0,l.kt)("inlineCode",{parentName:"p"},"express"),"'in ba\u011f\u0131ml\u0131l\u0131klar\u0131n\u0131 bir seviye yukar\u0131 yerle\u015ftirmek dairesel sembolik ba\u011flant\u0131lardan ka\xe7\u0131nmay\u0131 sa\u011flar."),(0,l.kt)("p",null,"G\xf6rd\xfc\u011f\xfcn\xfcz gibi, pnpm'in ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," yap\u0131s\u0131 ilk bak\u0131\u015fta ola\u011fand\u0131\u015f\u0131 g\xf6r\xfcnse de:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Tamam\u0131yla Node.js uyumlu"),(0,l.kt)("li",{parentName:"ol"},"paketler ba\u011f\u0131ml\u0131l\u0131klar\u0131yla g\xfczel bir \u015fekilde grupland\u0131r\u0131lm\u0131\u015ft\u0131r")),(0,l.kt)("p",null,"E\u015f ba\u011f\u0131ml\u0131l\u0131klar\u0131 olan paketler i\xe7in yap\u0131 ",(0,l.kt)("a",{parentName:"p",href:"/how-peers-are-resolved"},"biraz daha karma\u015f\u0131k"),", ancak fikir ayn\u0131d\u0131r: d\xfcz bir dizin yap\u0131s\u0131yla i\xe7 i\xe7e yerle\u015ftirme olu\u015fturmak i\xe7in sembolik ba\u011flant\u0131lar kullanmakt\u0131r."))}k.isMDXComponent=!0}}]);