"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35210],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(a),k=n,g=m["".concat(d,".").concat(k)]||m[k]||s[k]||l;return a?r.createElement(g,i(i({ref:e},u),{},{components:a})):r.createElement(g,i({ref:e},u))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},e)}},31792:(t,e,a)=>{a.d(e,{Z:()=>_});var r=a(87462),n=a(67294),l=a(86010),i=a(12466),o=a(16550),d=a(91980),p=a(67392),u=a(50012);function m(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:r,default:n}}=t;return{value:e,label:a,attributes:r,default:n}}))}function s(t){const{values:e,children:a}=t;return(0,n.useMemo)((()=>{const t=e??m(a);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function k(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:a}=t;const r=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,d._X)(l),(0,n.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(r.location.search);e.set(l,t),r.replace({...r.location,search:e.toString()})}),[l,r])]}function N(t){const{defaultValue:e,queryString:a=!1,groupId:r}=t,l=s(t),[i,o]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=a.find((t=>t.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:l}))),[d,p]=g({queryString:a,groupId:r}),[m,N]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[r,l]=(0,u.Nk)(a);return[r,(0,n.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:r}),c=(()=>{const t=d??m;return k({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{c&&o(c)}),[c]);return{selectedValue:i,selectValue:(0,n.useCallback)((t=>{if(!k({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),p(t),N(t)}),[p,N,l]),tabValues:l}}var c=a(72389);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(t){let{className:e,block:a,selectedValue:d,selectValue:p,tabValues:u}=t;const m=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),{pathname:k}=(0,o.TH)(),g=t=>{const e=t.currentTarget,a=m.indexOf(e),r=u[a].value;r!==d&&(s(e),p(r))},N=t=>{let e=null;switch(t.key){case"Enter":g(t);break;case"ArrowRight":{const a=m.indexOf(t.currentTarget)+1;e=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(t.currentTarget)-1;e=m[a]??m[m.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},u.map((t=>{let{value:e,label:a,attributes:i}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:d===e?0:-1,"aria-selected":d===e,key:e,ref:t=>m.push(t),onKeyDown:N,onClick:g},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,i?.className,{"border-b-2 pointer-events-none":d===e,"border-b-2 text-[#669dcb] border-[#669dcb]":d===e&&k.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===e&&k.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==e&&k.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===e&&k.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==e&&k.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==e&&k.startsWith("/terminal")})}),a??e)})))}function y(t){let{lazy:e,children:a,selectedValue:r}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===r));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==r}))))}function h(t){const e=N(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},n.createElement(b,(0,r.Z)({},t,e)),n.createElement(y,(0,r.Z)({},t,e)))}function _(t){const e=(0,c.Z)();return n.createElement(h,(0,r.Z)({key:String(e)},t))}},92274:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(31792),i=a(85162);const o={title:"Financial Ratios",description:"Extensive set of ratios over time"},d=void 0,p={unversionedId:"platform/data_models/FinancialRatios",id:"platform/data_models/FinancialRatios",title:"Financial Ratios",description:"Extensive set of ratios over time",source:"@site/content/platform/data_models/FinancialRatios.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/FinancialRatios",permalink:"/platform/data_models/FinancialRatios",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/FinancialRatios.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701458419,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"Financial Ratios",description:"Extensive set of ratios over time"},sidebar:"tutorialSidebar",previous:{title:"Fedfunds",permalink:"/platform/data_models/FEDFUNDS"},next:{title:"Fred Search",permalink:"/platform/data_models/FredSearch"}},u={},m=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],s={toc:m},k="wrapper";function g(t){let{components:e,...a}=t;return(0,n.kt)(k,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,n.kt)("h3",{id:"class-names"},"Class names"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Model name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameters class"),(0,n.kt)("th",{parentName:"tr",align:null},"Data class"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"FinancialRatios")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"FinancialRatiosQueryParams")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"FinancialRatiosData"))))),(0,n.kt)("h3",{id:"import-statement"},"Import Statement"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_core.provider.standard_models.financial_ratios import (\nFinancialRatiosData,\nFinancialRatiosQueryParams,\n)\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['annual', 'quarter']"),(0,n.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,n.kt)("td",{parentName:"tr",align:null},'"annual"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,n.kt)("td",{parentName:"tr",align:null},"12"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,n.kt)("td",{parentName:"tr",align:null},"True"))))),(0,n.kt)(i.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['annual', 'quarter']"),(0,n.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,n.kt)("td",{parentName:"tr",align:null},'"annual"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,n.kt)("td",{parentName:"tr",align:null},"12"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"with_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Include trailing twelve months (TTM) data."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Period of the financial ratios.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"current_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Current ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quick_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Quick ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cash_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Cash ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_of_sales_outstanding"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Days of sales outstanding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_of_inventory_outstanding"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Days of inventory outstanding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operating_cycle"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Operating cycle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_of_payables_outstanding"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Days of payables outstanding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cash_conversion_cycle"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Cash conversion cycle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gross_profit_margin"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Gross profit margin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operating_profit_margin"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Operating profit margin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pretax_profit_margin"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Pretax profit margin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"net_profit_margin"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Net profit margin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"effective_tax_rate"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Effective tax rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"return_on_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Return on assets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"return_on_equity"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Return on equity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"return_on_capital_employed"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Return on capital employed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"net_income_per_ebt"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Net income per EBT.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ebt_per_ebit"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"EBT per EBIT.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ebit_per_revenue"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"EBIT per revenue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"debt_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Debt ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"debt_equity_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Debt equity ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"long_term_debt_to_capitalization"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Long term debt to capitalization.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total_debt_to_capitalization"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Total debt to capitalization.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interest_coverage"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Interest coverage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cash_flow_to_debt_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Cash flow to debt ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"company_equity_multiplier"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Company equity multiplier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"receivables_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Receivables turnover.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payables_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Payables turnover.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"inventory_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Inventory turnover.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fixed_asset_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Fixed asset turnover.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"asset_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Asset turnover.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operating_cash_flow_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Operating cash flow per share.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"free_cash_flow_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Free cash flow per share.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cash_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Cash per share.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payout_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Payout ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operating_cash_flow_sales_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Operating cash flow sales ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"free_cash_flow_operating_cash_flow_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Free cash flow operating cash flow ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cash_flow_coverage_ratios"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Cash flow coverage ratios.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"short_term_coverage_ratios"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Short term coverage ratios.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"capital_expenditure_coverage_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Capital expenditure coverage ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_paid_and_capex_coverage_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend paid and capex coverage ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_payout_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend payout ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_book_value_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price book value ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_to_book_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price to book ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_to_sales_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price to sales ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_earnings_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price earnings ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_to_free_cash_flows_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price to free cash flows ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_to_operating_cash_flows_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price to operating cash flows ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_cash_flow_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price cash flow ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_earnings_to_growth_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price earnings to growth ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_sales_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price sales ratio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_yield"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend yield.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_yield_percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend yield percentage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend per share.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"enterprise_value_multiple"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise value multiple.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_fair_value"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Price fair value.")))))))}g.isMDXComponent=!0}}]);