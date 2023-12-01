"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77396],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var s=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,s,i=function(e,t){if(null==e)return{};var r,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=s.createContext({}),c=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||n;return r?s.createElement(m,o(o({ref:t},p),{},{components:r})):s.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<n;c++)o[c]=r[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(67294),i=r(35742);function n(e){let{title:t}=e;return s.createElement(i.Z,null,s.createElement("title",null,t))}},65149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var s=r(87462),i=(r(67294),r(3905)),n=r(88828);const o={title:"splits",description:"The page provides a guide on using the /disc splits command to view a list of recent stock splits for all available tickers. It also provides insights on how to track past stock splits using this data. The information includes the ticker, date, and ratio of the split.",keywords:["stock splits","view stock splits","track stock splits","/disc splits","stock splits data","ticker data","split ratio"]},a=void 0,l={unversionedId:"bot/reference/discord/discovery/splits",id:"bot/reference/discord/discovery/splits",title:"splits",description:"The page provides a guide on using the /disc splits command to view a list of recent stock splits for all available tickers. It also provides insights on how to track past stock splits using this data. The information includes the ticker, date, and ratio of the split.",source:"@site/content/bot/reference/discord/discovery/splits.md",sourceDirName:"bot/reference/discord/discovery",slug:"/bot/reference/discord/discovery/splits",permalink:"/bot/reference/discord/discovery/splits",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/discovery/splits.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701458419,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"splits",description:"The page provides a guide on using the /disc splits command to view a list of recent stock splits for all available tickers. It also provides insights on how to track past stock splits using this data. The information includes the ticker, date, and ratio of the split.",keywords:["stock splits","view stock splits","track stock splits","/disc splits","stock splits data","ticker data","split ratio"]},sidebar:"tutorialSidebar",previous:{title:"senate",permalink:"/bot/reference/discord/discovery/senate"},next:{title:"trendingst",permalink:"/bot/reference/discord/discovery/trendingst"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(n.Z,{title:"discovery: splits - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"This command allows users to view a list of recent stock splits for all available tickers. This list includes the ticker, the date of the split, and the ratio of the split. This data can be used to track how stocks have been split in the past."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/disc splits\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"This command has no parameters"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/disc splits\n")),(0,i.kt)("hr",null))}f.isMDXComponent=!0}}]);