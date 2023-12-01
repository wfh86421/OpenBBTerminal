"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5896],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),c=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(d.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=c(n),s=a,y=u["".concat(d,".").concat(s)]||u[s]||m[s]||l;return n?r.createElement(y,i(i({ref:e},p),{},{components:n})):r.createElement(y,i({ref:e},p))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88828:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(67294),a=n(35742);function l(t){let{title:e}=t;return r.createElement(a.Z,null,r.createElement("title",null,e))}},2886:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const i={title:"gh",description:"Learn how to utilize the GH command line tool to track GitHub activity for a given crypto coin. Discover how to filter by development activity, set frequency intervals, and define start and end dates with this powerful Python-based tool.",keywords:["Github activity","Pull Request","Issue","command line tool","development activity","frequency intervals","start and end dates","Santiment","tracking tool"]},o=void 0,d={unversionedId:"terminal/reference/crypto/dd/gh",id:"terminal/reference/crypto/dd/gh",title:"gh",description:"Learn how to utilize the GH command line tool to track GitHub activity for a given crypto coin. Discover how to filter by development activity, set frequency intervals, and define start and end dates with this powerful Python-based tool.",source:"@site/content/terminal/reference/crypto/dd/gh.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/gh",permalink:"/terminal/reference/crypto/dd/gh",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/gh.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701458419,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"gh",description:"Learn how to utilize the GH command line tool to track GitHub activity for a given crypto coin. Discover how to filter by development activity, set frequency intervals, and define start and end dates with this powerful Python-based tool.",keywords:["Github activity","Pull Request","Issue","command line tool","development activity","frequency intervals","start and end dates","Santiment","tracking tool"]},sidebar:"tutorialSidebar",previous:{title:"funot",permalink:"/terminal/reference/crypto/dd/funot"},next:{title:"gov",permalink:"/terminal/reference/crypto/dd/gov"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p},m="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"crypto /dd/gh - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display github activity over time for a given coin. Github activity includes the following actions: creating a Pull Request, an Issue, commenting on an issue / PR, and many more. See detailed definition at ",(0,a.kt)("a",{parentName:"p",href:"https://academy.santiment.net/metrics/development-activity/"},"https://academy.santiment.net/metrics/development-activity/")," ","[Source: https://santiment.net/]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"gh [-i INTERVAL] [-d DEV] [-s START] [-end END]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Frequency interval. Default: 1d"),(0,a.kt)("td",{parentName:"tr",align:null},"1d"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dev"),(0,a.kt)("td",{parentName:"tr",align:null},"-d  --dev"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter only for development activity. Default: False"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial date. Default: A year ago"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-12-01"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"end"),(0,a.kt)("td",{parentName:"tr",align:null},"-end  --end"),(0,a.kt)("td",{parentName:"tr",align:null},"End date. Default: Today"),(0,a.kt)("td",{parentName:"tr",align:null},"2023-12-01"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}s.isMDXComponent=!0}}]);