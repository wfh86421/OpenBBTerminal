"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65689],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),d=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(a),c=n,b=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return a?r.createElement(b,i(i({ref:t},p),{},{components:a})):r.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(35742);function l(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},31792:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(87462),n=a(67294),l=a(86010),i=a(12466),o=a(16550),u=a(91980),d=a(67392),p=a(50012);function s(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=b({queryString:a,groupId:r}),[s,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=u??s;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var k=a(72389);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function h(e){let{className:t,block:a,selectedValue:u,selectValue:d,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),{pathname:c}=(0,o.TH)(),b=e=>{const t=e.currentTarget,a=s.indexOf(t),r=p[a].value;r!==u&&(m(t),d(r))},f=e=>{let t=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},p.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:f,onClick:b},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,i?.className,{"border-b-2 pointer-events-none":u===t,"border-b-2 text-[#669dcb] border-[#669dcb]":u===t&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==t&&c.startsWith("/terminal")})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},40065:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(88828),i=a(31792),o=a(85162);const u={title:"european",description:"Learn how to retrieve Historical European Indices data using the OBB Python library. Understand the available parameters, return values, and data fields.",keywords:["Historical European Indices","python obb index european","symbol parameter","start_date parameter","end_date parameter","provider parameter","interval parameter","returns","data","date","close price","open price","high price","low price","utc datetime"]},d=void 0,p={unversionedId:"platform/reference/index/european",id:"platform/reference/index/european",title:"european",description:"Learn how to retrieve Historical European Indices data using the OBB Python library. Understand the available parameters, return values, and data fields.",source:"@site/content/platform/reference/index/european.md",sourceDirName:"platform/reference/index",slug:"/platform/reference/index/european",permalink:"/platform/reference/index/european",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/index/european.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701458419,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"european",description:"Learn how to retrieve Historical European Indices data using the OBB Python library. Understand the available parameters, return values, and data fields.",keywords:["Historical European Indices","python obb index european","symbol parameter","start_date parameter","end_date parameter","provider parameter","interval parameter","returns","data","date","close price","open price","high price","low price","utc datetime"]},sidebar:"tutorialSidebar",previous:{title:"constituents",permalink:"/platform/reference/index/constituents"},next:{title:"european_constituents",permalink:"/platform/reference/index/european_constituents"}},s={},m=[{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}],c={toc:m},b="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(b,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"index /european - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Historical European Indices."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\nobb.index.european(symbol="BUKBUS")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Union","[date, str]"),(0,n.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Union","[date, str]"),(0,n.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['cboe']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'cboe' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},'"cboe"'),(0,n.kt)("td",{parentName:"tr",align:null},"True"))))),(0,n.kt)(o.Z,{value:"cboe",label:"cboe",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Union","[date, str]"),(0,n.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Union","[date, str]"),(0,n.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['cboe']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'cboe' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},'"cboe"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['1d', '1m']"),(0,n.kt)("td",{parentName:"tr",align:null},"Data granularity."),(0,n.kt)("td",{parentName:"tr",align:null},"1d"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : List[EuropeanIndices]\n        Serializable results.\n\n    provider : Optional[Literal['cboe']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    metadata: Optional[Metadata]\n        Metadata info about the command execution.\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"datetime"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"close"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The close price."))))),(0,n.kt)(o.Z,{value:"cboe",label:"cboe",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"datetime"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"close"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"The close price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"open"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Opening price for the interval. Only valid when interval is 1m.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"high"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"High price for the interval. Only valid when interval is 1m.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"low"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Low price for the interval. Only valid when interval is 1m.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"utc_datetime"),(0,n.kt)("td",{parentName:"tr",align:null},"datetime"),(0,n.kt)("td",{parentName:"tr",align:null},"UTC datetime. Only valid when interval is 1m.")))))))}f.isMDXComponent=!0}}]);