"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2541],{3722:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"5.x","label":"5.x","banner":"unmaintained","badge":true,"className":"docs-version-5.x","isLast":false,"docsSidebars":{"version-5.x/docs":[{"collapsed":true,"type":"category","label":"Introduction","items":[{"type":"link","label":"Motiv\xe1ci\xf3","href":"/hu/5.x/motivation","docId":"motivation"},{"type":"link","label":"Telep\xedt\xe9s","href":"/hu/5.x/installation","docId":"installation"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Usage","items":[{"type":"link","label":"pnpm CLI","href":"/hu/5.x/pnpm-cli","docId":"pnpm-cli"},{"type":"link","label":"pnpx CLI","href":"/hu/5.x/pnpx-cli","docId":"pnpx-cli"},{"type":"link","label":"Configuring","href":"/hu/5.x/configuring","docId":"configuring"},{"type":"link","label":"Sz\u0171r\xe9s","href":"/hu/5.x/filtering","docId":"filtering"}],"collapsible":true},{"collapsed":true,"type":"category","label":"CLI commands","items":[{"collapsed":true,"type":"category","label":"Manage dependencies","items":[{"type":"link","label":"pnpm add <pkg>","href":"/hu/5.x/cli/add","docId":"cli/add"},{"type":"link","label":"pnpm install","href":"/hu/5.x/cli/install","docId":"cli/install"},{"type":"link","label":"pnpm update","href":"/hu/5.x/cli/update","docId":"cli/update"},{"type":"link","label":"pnpm remove","href":"/hu/5.x/cli/remove","docId":"cli/remove"},{"type":"link","label":"pnpm link","href":"/hu/5.x/cli/link","docId":"cli/link"},{"type":"link","label":"pnpm unlink","href":"/hu/5.x/cli/unlink","docId":"cli/unlink"},{"type":"link","label":"pnpm import","href":"/hu/5.x/cli/import","docId":"cli/import"},{"type":"link","label":"pnpm rebuild","href":"/hu/5.x/cli/rebuild","docId":"cli/rebuild"},{"type":"link","label":"pnpm prune","href":"/hu/5.x/cli/prune","docId":"cli/prune"},{"type":"link","label":"pnpm install-test","href":"/hu/5.x/cli/install-test","docId":"cli/install-test"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Review dependencies","items":[{"type":"link","label":"pnpm audit","href":"/hu/5.x/cli/audit","docId":"cli/audit"},{"type":"link","label":"pnpm list","href":"/hu/5.x/cli/list","docId":"cli/list"},{"type":"link","label":"pnpm outdated","href":"/hu/5.x/cli/outdated","docId":"cli/outdated"},{"type":"link","label":"pnpm why","href":"/hu/5.x/cli/why","docId":"cli/why"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Run scripts","items":[{"type":"link","label":"pnpm run","href":"/hu/5.x/cli/run","docId":"cli/run"},{"type":"link","label":"pnpm test","href":"/hu/5.x/cli/test","docId":"cli/test"},{"type":"link","label":"pnpm start","href":"/hu/5.x/cli/start","docId":"cli/start"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Misc.","items":[{"type":"link","label":"pnpm publish","href":"/hu/5.x/cli/publish","docId":"cli/publish"},{"type":"link","label":"pnpm recursive","href":"/hu/5.x/cli/recursive","docId":"cli/recursive"},{"type":"link","label":"pnpm server","href":"/hu/5.x/cli/server","docId":"cli/server"},{"type":"link","label":"pnpm store","href":"/hu/5.x/cli/store","docId":"cli/store"}],"collapsible":true}],"collapsible":true},{"collapsed":true,"type":"category","label":"Configuration","items":[{"type":"link","label":"package.json","href":"/hu/5.x/package_json","docId":"package_json"},{"type":"link","label":".npmrc","href":"/hu/5.x/npmrc","docId":"npmrc"},{"type":"link","label":"pnpm-workspace.yaml","href":"/hu/5.x/pnpm-workspace_yaml","docId":"pnpm-workspace_yaml"},{"type":"link","label":"pnpmfile.js","href":"/hu/5.x/pnpmfile","docId":"pnpmfile"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Features","items":[{"type":"link","label":"Workspace","href":"/hu/5.x/workspaces","docId":"workspaces"},{"type":"link","label":"Aliases","href":"/hu/5.x/aliases","docId":"aliases"},{"type":"link","label":"Command line tab-completion","href":"/hu/5.x/completion","docId":"completion"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Recipes","items":[{"type":"link","label":"Using Changesets with pnpm","href":"/hu/5.x/using-changesets","docId":"using-changesets"},{"type":"link","label":"Folyamatos integr\xe1ci\xf3","href":"/hu/5.x/continuous-integration","docId":"continuous-integration"},{"type":"link","label":"Only allow pnpm","href":"/hu/5.x/only-allow-pnpm","docId":"only-allow-pnpm"},{"type":"link","label":"Working with Git","href":"/hu/5.x/git","docId":"git"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Advanced","items":[{"type":"link","label":"Logos","href":"/hu/5.x/logos","docId":"logos"},{"type":"link","label":"Benchmark","href":"/hu/5.x/benchmark","docId":"benchmark"},{"type":"link","label":"Limitations","href":"/hu/5.x/limitations","docId":"limitations"},{"type":"link","label":"Symlinked `node_modules` structure","href":"/hu/5.x/symlinked-node-modules-structure","docId":"symlinked-node-modules-structure"},{"type":"link","label":"How peers are resolved","href":"/hu/5.x/how-peers-are-resolved","docId":"how-peers-are-resolved"}],"collapsible":true}]},"docs":{"aliases":{"id":"aliases","title":"Aliases","description":"Aliases let you install packages with custom names.","sidebar":"version-5.x/docs"},"benchmark":{"id":"benchmark","title":"Benchmark","description":"pnpm is faster than npm and Yarn. See this benchmark which compares the three package managers on different types of applications.","sidebar":"version-5.x/docs"},"cli/add":{"id":"cli/add","title":"pnpm add <pkg>","description":"Telep\xedt egy csomagot, valamint minden olyan csomagot, amely f\xfcgg\u0151s\xe9ge az adott csomagnak. Alap\xe9rtelmez\xe9sn\xe9l fogva, minden \xfaj csomag production f\xfcgg\u0151s\xe9gk\xe9nt ker\xfcl telep\xedt\xe9sre.","sidebar":"version-5.x/docs"},"cli/audit":{"id":"cli/audit","title":"pnpm audit","description":"Hozz\xe1adva: 4.3.0","sidebar":"version-5.x/docs"},"cli/config":{"id":"cli/config","title":"pnpm config","description":"M\xe1sk\xe9ppen: c"},"cli/exec":{"id":"cli/exec","title":"pnpm exec","description":"Shorthand form of pnpm -r exec."},"cli/import":{"id":"cli/import","title":"pnpm import","description":"Added in: v2.15.0","sidebar":"version-5.x/docs"},"cli/install":{"id":"cli/install","title":"pnpm install","description":"M\xe1sk\xe9pp: i","sidebar":"version-5.x/docs"},"cli/install-test":{"id":"cli/install-test","title":"pnpm install-test","description":"Aliases: it","sidebar":"version-5.x/docs"},"cli/link":{"id":"cli/link","title":"pnpm link","description":"Aliases: ln","sidebar":"version-5.x/docs"},"cli/list":{"id":"cli/list","title":"pnpm list","description":"Aliases: ls","sidebar":"version-5.x/docs"},"cli/outdated":{"id":"cli/outdated","title":"pnpm outdated","description":"Checks for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported).","sidebar":"version-5.x/docs"},"cli/prune":{"id":"cli/prune","title":"pnpm prune","description":"Removes unnecessary packages.","sidebar":"version-5.x/docs"},"cli/publish":{"id":"cli/publish","title":"pnpm publish","description":"Publishes a package to the registry.","sidebar":"version-5.x/docs"},"cli/rebuild":{"id":"cli/rebuild","title":"pnpm rebuild","description":"Aliases: rb","sidebar":"version-5.x/docs"},"cli/recursive":{"id":"cli/recursive","title":"pnpm recursive","description":"Runs a pnpm command recursively on all subdirectories in the package or every available workspace. Currently, only the following commands can be used recursively: add, exec, install, list, outdated, publish, rebuild, remove, run, test, unlink, update, why","sidebar":"version-5.x/docs"},"cli/remove":{"id":"cli/remove","title":"pnpm remove","description":"Removes packages from node_modules and from the project\'s package.json.","sidebar":"version-5.x/docs"},"cli/run":{"id":"cli/run","title":"pnpm run","description":"M\xe1sk\xe9pp: run-script","sidebar":"version-5.x/docs"},"cli/server":{"id":"cli/server","title":"pnpm server","description":"Added in: v1.30.0","sidebar":"version-5.x/docs"},"cli/start":{"id":"cli/start","title":"pnpm start","description":"Aliases: run start","sidebar":"version-5.x/docs"},"cli/store":{"id":"cli/store","title":"pnpm store","description":"Managing the package store.","sidebar":"version-5.x/docs"},"cli/test":{"id":"cli/test","title":"pnpm test","description":"Aliases: run test, t, tst","sidebar":"version-5.x/docs"},"cli/unlink":{"id":"cli/unlink","title":"pnpm unlink","description":"Unlinks a system-wide package (inverse of pnpm link).","sidebar":"version-5.x/docs"},"cli/update":{"id":"cli/update","title":"pnpm update","description":"Aliases: up","sidebar":"version-5.x/docs"},"cli/why":{"id":"cli/why","title":"pnpm why","description":"Shows all packages that depend on the specified package.","sidebar":"version-5.x/docs"},"completion":{"id":"completion","title":"Command line tab-completion","description":"Added in: v4.9.0","sidebar":"version-5.x/docs"},"configuring":{"id":"configuring","title":"Configuring","description":"pnpm uses npm\'s configuration formats. Hence, you should set configuration the same way you would for npm. For example,","sidebar":"version-5.x/docs"},"continuous-integration":{"id":"continuous-integration","title":"Folyamatos integr\xe1ci\xf3","description":"pnpm k\xf6nnyen haszn\xe1lhat\xf3 k\xfcl\xf6nb\xf6z\u0151 folyamatos integr\xe1ci\xf3s rendszerekkel.","sidebar":"version-5.x/docs"},"faq":{"id":"faq","title":"Gyakran Ism\xe9telt K\xe9rd\xe9sek","description":"Why does my node_modules folder use disk space if packages are stored in a global store?"},"filtering":{"id":"filtering","title":"Sz\u0171r\xe9s","description":"Hozz\xe1adva: v2.13.0","sidebar":"version-5.x/docs"},"git":{"id":"git","title":"Working with Git","description":"Lockfiles","sidebar":"version-5.x/docs"},"how-peers-are-resolved":{"id":"how-peers-are-resolved","title":"How peers are resolved","description":"One of the best features of pnpm is that in one project, a specific version of a package will always have one set of dependencies. There is one exception from this rule, though - packages with peer dependencies.","sidebar":"version-5.x/docs"},"installation":{"id":"installation","title":"Telep\xedt\xe9s","description":"\xd6n\xe1ll\xf3 parancsf\xe1jl haszn\xe1lat\xe1val","sidebar":"version-5.x/docs"},"limitations":{"id":"limitations","title":"Limitations","description":"1. npm-shrinkwrap.json and package-lock.json are ignored. Unlike pnpm, npm can install the same name@version multiple times and with different sets of dependencies. npm\'s lockfile is designed to reflect the flat node_modules layout, however, as pnpm cannot create a similar layout, it cannot respect npm\'s lockfile format. See pnpm import if you wish to convert a lockfile to pnpm\'s format, though.","sidebar":"version-5.x/docs"},"logos":{"id":"logos","title":"Logos","description":"Standard logo","sidebar":"version-5.x/docs"},"motivation":{"id":"motivation","title":"Motiv\xe1ci\xf3","description":"Lemezhely megtakar\xedt\xe1sa \xe9s a telep\xedt\xe9si sebess\xe9g n\xf6vel\xe9se","sidebar":"version-5.x/docs"},"npmrc":{"id":"npmrc","title":".npmrc","description":"pnpm a parancssorb\xf3l, a k\xf6rnyezeti v\xe1ltoz\xf3kb\xf3l \xe9s a .npmrc f\xe1jlokb\xf3l olvassa le a konfigur\xe1ci\xf3t.","sidebar":"version-5.x/docs"},"only-allow-pnpm":{"id":"only-allow-pnpm","title":"Only allow pnpm","description":"When you use pnpm on a project, you don\'t want others to accidentally run npm install or yarn. To prevent devs from using other package managers, you can add the following preinstall script to your package.json:","sidebar":"version-5.x/docs"},"package_json":{"id":"package_json","title":"package.json","description":"The manifest file of a package. It contains all the package\'s metadata, including dependencies, title, author, et cetera. This is a standard preserved across all major Node.JS package managers, including pnpm.","sidebar":"version-5.x/docs"},"pnpm-cli":{"id":"pnpm-cli","title":"pnpm CLI","description":"K\xfcl\xf6nbs\xe9gek npm-hez k\xe9pest","sidebar":"version-5.x/docs"},"pnpm-vs-npm":{"id":"pnpm-vs-npm","title":"pnpm vs npm","description":"npm\'s flat tree"},"pnpm-workspace_yaml":{"id":"pnpm-workspace_yaml","title":"pnpm-workspace.yaml","description":"pnpm-workspace.yaml defines the root of the workspace and enables you to include / exclude directories from the workspace. By default, all packages of all subdirectories are included.","sidebar":"version-5.x/docs"},"pnpmfile":{"id":"pnpmfile","title":"pnpmfile.js","description":"pnpm lets you hook directly into the installation process via special functions (hooks). Hooks can be declared in a file called pnpmfile.js.","sidebar":"version-5.x/docs"},"pnpx-cli":{"id":"pnpx-cli","title":"pnpx CLI","description":"For new users","sidebar":"version-5.x/docs"},"production":{"id":"production","title":"Production","description":"There are two ways to bootstrap your package in a production environment with pnpm. One of these is to commit the lockfile. Then, in your production environment, run pnpm install - this will build the dependency tree using the lockfile, meaning the dependency versions will be consistent with how they were when the lockfile was committed. This is the most effective way (and the one we recommend) to ensure your dependency tree persists across environments."},"support":{"id":"support","title":"Support","description":"- Stack Overflow"},"symlinked-node-modules-structure":{"id":"symlinked-node-modules-structure","title":"Symlinked `node_modules` structure","description":"This article only describes how pnpm\'s node_modules are structured when there are no packages with peer dependencies. For the more complex scenario of dependencies with peers, see how peers are resolved.","sidebar":"version-5.x/docs"},"using-changesets":{"id":"using-changesets","title":"Using Changesets with pnpm","description":"At the time of writing this documentation, the latest pnpm version was v5.17.3. The latest Changesets version was v2.14.1.","sidebar":"version-5.x/docs"},"workspaces":{"id":"workspaces","title":"Workspace","description":"A pnpm be\xe9p\xedtett t\xe1mogat\xe1st ny\xfajt monorep\xf3khoz (m\xe1s n\xe9ven t\xf6bbcsomagos repozit\xf3riumok, t\xf6bbprojektes repozit\xf3riumok vagy monolit repozit\xf3riumok). L\xe9trehozhatsz egy workspace-t, amely t\xf6bb projektet egyes\xedt egyetlen repozit\xf3riumon bel\xfcl.","sidebar":"version-5.x/docs"}}}')}}]);