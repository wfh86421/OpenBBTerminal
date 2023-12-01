"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},14671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const l={title:"emacross",description:"The emacross page provides documentation for a python script that crosses between a long and a short Exponential Moving Average (EMA). It also includes information on the parameters of the script including lengths of the long and short EMA periods, spy hold comparison, buy hold comparison, and short selling operations.",keywords:["emacross","Exponential Moving Average","EMA period","long EMA","short EMA","spy hold comparison","buy hold comparison","short sell"]},s=void 0,i={unversionedId:"terminal/reference/stocks/backtesting/emacross",id:"terminal/reference/stocks/backtesting/emacross",title:"emacross",description:"The emacross page provides documentation for a python script that crosses between a long and a short Exponential Moving Average (EMA). It also includes information on the parameters of the script including lengths of the long and short EMA periods, spy hold comparison, buy hold comparison, and short selling operations.",source:"@site/content/terminal/reference/stocks/backtesting/emacross.md",sourceDirName:"terminal/reference/stocks/backtesting",slug:"/terminal/reference/stocks/backtesting/emacross",permalink:"/terminal/reference/stocks/backtesting/emacross",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/backtesting/emacross.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701458419,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"emacross",description:"The emacross page provides documentation for a python script that crosses between a long and a short Exponential Moving Average (EMA). It also includes information on the parameters of the script including lengths of the long and short EMA periods, spy hold comparison, buy hold comparison, and short selling operations.",keywords:["emacross","Exponential Moving Average","EMA period","long EMA","short EMA","spy hold comparison","buy hold comparison","short sell"]},sidebar:"tutorialSidebar",previous:{title:"ema",permalink:"/terminal/reference/stocks/backtesting/ema"},next:{title:"load",permalink:"/terminal/reference/stocks/backtesting/load"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks /backtesting/emacross - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Cross between a long and a short Exponential Moving Average."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"emacross [-l LONG] [-s SHORT] [--spy] [--no_bench] [--no_short]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --long"),(0,a.kt)("td",{parentName:"tr",align:null},"Long EMA period"),(0,a.kt)("td",{parentName:"tr",align:null},"50"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"short"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --short"),(0,a.kt)("td",{parentName:"tr",align:null},"Short EMA period"),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spy"),(0,a.kt)("td",{parentName:"tr",align:null},"--spy"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to add spy hold comparison"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"no_bench"),(0,a.kt)("td",{parentName:"tr",align:null},"--no_bench"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to not show buy and hold comparison"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shortable"),(0,a.kt)("td",{parentName:"tr",align:null},"--no_short"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag that disables the short sell"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);