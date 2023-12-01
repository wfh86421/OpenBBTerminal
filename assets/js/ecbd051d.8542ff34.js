"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69534],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=a,y=u["".concat(o,".").concat(p)]||u[p]||m[p]||i;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(39960),a=r(86010),i=r(67294),s=r(16550),l=r(48334);function o(e){let{title:t,url:r,description:o,command:d}=e;const{pathname:c}=(0,s.TH)(),u=c.replace(/\/v\d+/,""),m=!u.includes("/reference")&&!u.includes("/widgets-library/")&&!u.includes("/data_models");return i.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":u.startsWith("/terminal")||u.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":u.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":u.startsWith("/sdk")||u.startsWith("/platform"),header_docs:!(u.startsWith("/terminal")||u.startsWith("/pro")||u.startsWith("/sdk")||u.startsWith("/platform")||u.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),m&&i.createElement(l.Z,{className:"ml-auto mr-4"})),o?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},o):null)}},72120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),i=r(26515);const s={},l="Fundamental Analysis",o={unversionedId:"pro/widgets-library/equity/fundamental-analysis/index",id:"pro/widgets-library/equity/fundamental-analysis/index",title:"Fundamental Analysis",description:"<NewReferenceCard",source:"@site/content/pro/widgets-library/equity/fundamental-analysis/index.mdx",sourceDirName:"pro/widgets-library/equity/fundamental-analysis",slug:"/pro/widgets-library/equity/fundamental-analysis/",permalink:"/pro/widgets-library/equity/fundamental-analysis/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/widgets-library/equity/fundamental-analysis/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Comparison Analysis",permalink:"/pro/widgets-library/equity/comparison-analysis/grouped_comparison"},next:{title:"Company Filings",permalink:"/pro/widgets-library/equity/fundamental-analysis/company_filings"}},d={},c=[],u={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fundamental-analysis"},"Fundamental Analysis"),(0,a.kt)("ul",{className:"grid grid-cols-1 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"Financial Ratios",description:"Company financial ratios such as P/B, ROE, etc.",url:"/pro/widgets-library/equity/fundamental-analysis/financial_ratios",command:!0,mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Key Metrics",description:"Key financial metrics, such as revenue, P/E, etc.",url:"/pro/widgets-library/equity/fundamental-analysis/key_metrics",command:!0,mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Revenue Per Geography",description:"Geographical breakdown of company revenue",url:"/pro/widgets-library/equity/fundamental-analysis/revenue_per_geography",command:!0,mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Revenue Per Business Line",description:"Revenue breakdown by product category",url:"/pro/widgets-library/equity/fundamental-analysis/revenue_per_bus_line",command:!0,mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Valuation Multiples",description:"Valuation Multiples such as P/E ratio, P/B ratio, etc",url:"/pro/widgets-library/equity/fundamental-analysis/valuation_multiples",command:!0,mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Company Filings",description:"Recent Company SEC Filings",url:"/pro/widgets-library/equity/fundamental-analysis/company_filings",command:!0,mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Earnings History",description:"Historical earnings data",url:"/pro/widgets-library/equity/fundamental-analysis/earning_history",command:!0,mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Earnings Transcripts",description:"Full transcripts of earnings call",url:"/pro/widgets-library/equity/fundamental-analysis/earnings_transcripts",command:!0,mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Stock Splits",description:"Historical stock splits",url:"/pro/widgets-library/equity/fundamental-analysis/stock_splits",command:!0,mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Dividend Payment",description:"Historical stock dividends",url:"/pro/widgets-library/equity/fundamental-analysis/dividend_payment",command:!0,mdxType:"NewReferenceCard"}),(0,a.kt)(i.Z,{title:"Financial Statements",description:"All three financial statements in a single widget",url:"/pro/widgets-library/equity/fundamental-analysis/financial_statements",command:!0,mdxType:"NewReferenceCard"})))}p.isMDXComponent=!0}}]);