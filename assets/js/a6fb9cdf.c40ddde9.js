"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(35742);function l(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},57939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const i={title:"adosc",description:"Explore the Accumulation/Distribution Oscillator page, also known as the Chaikin Oscillator. This powerful momentum indicator analyzes the strength of price moves and the underlying buying and selling pressure in a given period. Learn how to use the indicator and understand its parameters like fast length and slow length.",keywords:["Accumulation/Distribution Oscillator","Chaikin Oscillator","momentum indicator","price moves","buying pressure","selling pressure","market turning points","adosc","stock value","fast length","slow length"]},o=void 0,s={unversionedId:"terminal/reference/etf/ta/adosc",id:"terminal/reference/etf/ta/adosc",title:"adosc",description:"Explore the Accumulation/Distribution Oscillator page, also known as the Chaikin Oscillator. This powerful momentum indicator analyzes the strength of price moves and the underlying buying and selling pressure in a given period. Learn how to use the indicator and understand its parameters like fast length and slow length.",source:"@site/content/terminal/reference/etf/ta/adosc.md",sourceDirName:"terminal/reference/etf/ta",slug:"/terminal/reference/etf/ta/adosc",permalink:"/terminal/reference/etf/ta/adosc",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/ta/adosc.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701458419,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"adosc",description:"Explore the Accumulation/Distribution Oscillator page, also known as the Chaikin Oscillator. This powerful momentum indicator analyzes the strength of price moves and the underlying buying and selling pressure in a given period. Learn how to use the indicator and understand its parameters like fast length and slow length.",keywords:["Accumulation/Distribution Oscillator","Chaikin Oscillator","momentum indicator","price moves","buying pressure","selling pressure","market turning points","adosc","stock value","fast length","slow length"]},sidebar:"tutorialSidebar",previous:{title:"ad",permalink:"/terminal/reference/etf/ta/ad"},next:{title:"adx",permalink:"/terminal/reference/etf/ta/adx"}},c={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"etf /ta/adosc - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Accumulation/Distribution Oscillator, also known as the Chaikin Oscillator is essentially a momentum indicator, but of the Accumulation-Distribution line rather than merely price. It looks at both the strength of price moves and the underlying buying and selling pressure during a given time period. The oscillator reading above zero indicates net buying pressure, while one below zero registers net selling pressure. Divergence between the indicator and pure price moves are the most common signals from the indicator, and often flag market turning points."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"adosc [--open] [--fast N_LENGTH_FAST] [--slow N_LENGTH_SLOW]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"b_use_open"),(0,a.kt)("td",{parentName:"tr",align:null},"--open"),(0,a.kt)("td",{parentName:"tr",align:null},"uses open value of stock"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_length_fast"),(0,a.kt)("td",{parentName:"tr",align:null},"--fast"),(0,a.kt)("td",{parentName:"tr",align:null},"fast length"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"range(1, 100)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_length_slow"),(0,a.kt)("td",{parentName:"tr",align:null},"--slow"),(0,a.kt)("td",{parentName:"tr",align:null},"slow length"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"range(1, 100)")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154309482-31c027ab-e80f-4145-9c63-392a74cf69c7.png",alt:"adosc"})),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);