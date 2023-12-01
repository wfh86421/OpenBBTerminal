"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,p=m["".concat(d,".").concat(u)]||m[u]||f[u]||o;return n?r.createElement(p,a(a({ref:t},l),{},{components:n})):r.createElement(p,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(35742);function o(e){let{title:t}=e;return r.createElement(i.Z,null,r.createElement("title",null,t))}},67867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=n(87462),i=(n(67294),n(3905)),o=n(88828);const a={title:"fgindex",description:"The page defines the use of 'fgindex' command in getting the Fear & Greed Index. This is a key investor sentiment indicator by CNNMoney and offers insights into the stock market through analysis of momentum, sentiment, and trading volume.",keywords:["fgindex","Fear & Greed Index","investor sentiment indicator","CNNMoney","stock market","market momentum","market sentiment","stock trading volume","score range 0-100"]},s=void 0,d={unversionedId:"bot/reference/discord/discovery/fgindex",id:"bot/reference/discord/discovery/fgindex",title:"fgindex",description:"The page defines the use of 'fgindex' command in getting the Fear & Greed Index. This is a key investor sentiment indicator by CNNMoney and offers insights into the stock market through analysis of momentum, sentiment, and trading volume.",source:"@site/content/bot/reference/discord/discovery/fgindex.md",sourceDirName:"bot/reference/discord/discovery",slug:"/bot/reference/discord/discovery/fgindex",permalink:"/bot/reference/discord/discovery/fgindex",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/discovery/fgindex.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701458419,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"fgindex",description:"The page defines the use of 'fgindex' command in getting the Fear & Greed Index. This is a key investor sentiment indicator by CNNMoney and offers insights into the stock market through analysis of momentum, sentiment, and trading volume.",keywords:["fgindex","Fear & Greed Index","investor sentiment indicator","CNNMoney","stock market","market momentum","market sentiment","stock trading volume","score range 0-100"]},sidebar:"tutorialSidebar",previous:{title:"contracts",permalink:"/bot/reference/discord/discovery/contracts"},next:{title:"halts",permalink:"/bot/reference/discord/discovery/halts"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:l},f="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{title:"discovery: fgindex - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"This command allows the user to retrieve the Fear & Greed Index, which is an investor sentiment indicator published by CNNMoney. The index measures the levels of fear and greed of the investors in the stock market by observing the momentum, sentiment and volume of stock trading. The index ranges from 0 to 100, with 0 being the most fearful and 100 being the most greedy."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/disc fgindex\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"This command has no parameters"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/disc fgindex\n")),(0,i.kt)("hr",null))}u.isMDXComponent=!0}}]);