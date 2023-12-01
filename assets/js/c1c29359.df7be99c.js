"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35949],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||n;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<n;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(39960),i=r(86010),n=r(67294),a=r(16550);function s(e){let{title:t,url:r,description:s,command:l}=e;const{pathname:c}=(0,a.TH)(),p=c.replace(/\/v\d+/,"");return n.createElement(o.Z,{className:(0,i.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:p.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":p.startsWith("/sdk")||p.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":p.startsWith("/bot"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:r},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),s?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},s):null)}},37968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),i=(r(67294),r(3905)),n=r(62872);const a={},s="options",l={unversionedId:"bot/reference/telegram/options/index",id:"bot/reference/telegram/options/index",title:"options",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/options/index.mdx",sourceDirName:"bot/reference/telegram/options",slug:"/bot/reference/telegram/options/",permalink:"/bot/reference/telegram/options/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/options/index.mdx",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701458419,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nfttop",permalink:"/bot/reference/telegram/nft/nfttop"},next:{title:"chains",permalink:"/bot/reference/telegram/options/chains"}},c={},p=[],m={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"options"},"options"),(0,i.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,i.kt)(n.Z,{title:"chains",description:"This command allows users to retrieve Options Chain by Expiry, which gives an overview of the bid, ask, and open...",url:"/bot/reference/telegram/options/chains",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"equitypc",description:"This command retrieves the Equity Put/Call Volume Ratio from market-harmonics.com. This ratio is used to measure...",url:"/bot/reference/telegram/options/equitypc",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"gamma",description:"This command allows the user to view the Options Gamma Levels for a particular stock. Options Gamma Levels are...",url:"/bot/reference/telegram/options/gamma",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"highiv",description:"This command retrieves the 15 highest IV30 equity stocks by 30 day Implied Volatility. The IV30 metric is a...",url:"/bot/reference/telegram/options/highiv",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"hist",description:"This command allows the user to retrieve the historical price of options for the given parameters of a ticker,...",url:"/bot/reference/telegram/options/hist",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"indexpc",description:"This command allows the user to retrieve the Index Put/Call Ratio for the market from market-harmonics.com. This...",url:"/bot/reference/telegram/options/indexpc",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"itm",description:"This command allows the user to retrieve a list of In-the-Money options for the stock ticker symbol sorted by...",url:"/bot/reference/telegram/options/itm",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"iv",description:"This command allows the user to quickly and easily retrieve various option information (volatility, IV rank,...",url:"/bot/reference/telegram/options/iv",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"maxpain",description:"This command retrieves the Max Pain on expiration date for a given stock. Max Pain is the strike price with the...",url:"/bot/reference/telegram/options/maxpain",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"oi",description:"This command allows the user to retrieve the Open Interest and Call/Put ratio for a given stock. Optionally, the...",url:"/bot/reference/telegram/options/oi",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"oichart",description:"This command allows users to retrieve a chart of Total Open Interest by Strike Price for the given ticker symbol....",url:"/bot/reference/telegram/options/oichart",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"opstats",description:"This command allows the user to quickly and easily retrieve various option information (volatility, IV rank,...",url:"/bot/reference/telegram/options/opstats",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"smile",description:"This command allows the user to retrieve the Options Volatility Smile for the given ticker and expiry. The...",url:"/bot/reference/telegram/options/smile",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topoi",description:"This command allows the user to retrieve Top Open Interest among all stocks. This command queries the current...",url:"/bot/reference/telegram/options/topoi",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topoichange",description:"This command allows the user to view the top 15 stocks with the highest OI Change. It will display the stock...",url:"/bot/reference/telegram/options/topoichange",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topstrikevol",description:"This command allows the user to retrieve the top option strike by volume for a given security with the ability to...",url:"/bot/reference/telegram/options/topstrikevol",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topvol",description:"This command allows the user to retrieve the Top 15 Highest stock options volumes by adding the call and put...",url:"/bot/reference/telegram/options/topvol",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topvoletf",description:"This command allows the user to retrieve the Top 15 Highest ETF options volumes by adding the call and put volume...",url:"/bot/reference/telegram/options/topvoletf",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"unu",description:"This command allows a user to retrieve unusual options sorted by strike and expiration. It provides a list of the...",url:"/bot/reference/telegram/options/unu",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"uoastock",description:"This command allows the user to retrieve the 20-day average options volume by ticker. The volume is based on the...",url:"/bot/reference/telegram/options/uoastock",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"vol",description:"This command allows the user to retrieve a chart of Options Volume by Strike for a specified ticker. This data...",url:"/bot/reference/telegram/options/vol",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"vsurf",description:"This command allows the user to retrieve an options volatility surface for the ticker symbol. Specifically, it...",url:"/bot/reference/telegram/options/vsurf",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);