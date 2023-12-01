"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3498],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,y=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?n.createElement(y,o(o({ref:r},c),{},{components:t})):n.createElement(y,o({ref:r},c))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(39960),i=t(86010),a=t(67294),o=t(16550),s=t(48334);function l(e){let{title:r,url:t,description:l,command:d}=e;const{pathname:c}=(0,o.TH)(),p=c.replace(/\/v\d+/,""),u=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return a.createElement(n.Z,{className:(0,i.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),u&&a.createElement(s.Z,{className:"ml-auto mr-4"})),l?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},95285:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),i=(t(67294),t(3905)),a=t(26515);const o={},s="Ownership",l={unversionedId:"pro/widgets-library/equity/ownership/index",id:"pro/widgets-library/equity/ownership/index",title:"Ownership",description:"<NewReferenceCard",source:"@site/content/pro/widgets-library/equity/ownership/index.mdx",sourceDirName:"pro/widgets-library/equity/ownership",slug:"/pro/widgets-library/equity/ownership/",permalink:"/pro/widgets-library/equity/ownership/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/widgets-library/equity/ownership/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Management Team",permalink:"/pro/widgets-library/equity/management_team"},next:{title:"Insider Trading",permalink:"/pro/widgets-library/equity/ownership/insider_trading"}},d={},c=[],p={toc:c},u="wrapper";function m(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ownership"},"Ownership"),(0,i.kt)("ul",{className:"grid grid-cols-1 gap-4 -ml-6"},(0,i.kt)(a.Z,{title:"Share Statistics",description:"Company shares for trading",url:"/pro/widgets-library/equity/ownership/share_statistics",command:!0,mdxType:"NewReferenceCard"}),(0,i.kt)(a.Z,{title:"Insider Trading",description:"Recent Insider Trading",url:"/pro/widgets-library/equity/ownership/insider_trading",command:!0,mdxType:"NewReferenceCard"}),(0,i.kt)(a.Z,{title:"Stock Ownership",description:"Percentage of shares owned by major holders",url:"/pro/widgets-library/equity/ownership/stock_ownership",command:!0,mdxType:"NewReferenceCard"}),(0,i.kt)(a.Z,{title:"Institutional Ownership",description:"Instutional Ownership",url:"/pro/widgets-library/equity/ownership/institutional_ownership",command:!0,mdxType:"NewReferenceCard"})))}m.isMDXComponent=!0}}]);