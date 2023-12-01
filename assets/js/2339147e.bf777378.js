"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(35742);function a(e){let{title:t}=e;return r.createElement(o.Z,null,r.createElement("title",null,t))}},55750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905)),a=n(88828);const i={title:"Import Errors",sidebar_position:2,description:"This page provides solutions for common import errors when installing the OpenBB SDK, including guidance on managing virtual environments, handling ModuleNotFoundError, dealing with SSL certificate authorization, and configuring proxy connections.",keywords:["Import Errors","SciPy","ModuleNotFoundError","virtual environment","poetry install","conda activate","Jupyter","GitHub","SSL certificates","firewall","pip-system-certs","proxy connection",".env file"]},l=void 0,s={unversionedId:"sdk/faqs/import_errors",id:"sdk/faqs/import_errors",title:"Import Errors",description:"This page provides solutions for common import errors when installing the OpenBB SDK, including guidance on managing virtual environments, handling ModuleNotFoundError, dealing with SSL certificate authorization, and configuring proxy connections.",source:"@site/content/sdk/faqs/import_errors.md",sourceDirName:"sdk/faqs",slug:"/sdk/faqs/import_errors",permalink:"/sdk/faqs/import_errors",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/faqs/import_errors.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701458419,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:2,frontMatter:{title:"Import Errors",sidebar_position:2,description:"This page provides solutions for common import errors when installing the OpenBB SDK, including guidance on managing virtual environments, handling ModuleNotFoundError, dealing with SSL certificate authorization, and configuring proxy connections.",keywords:["Import Errors","SciPy","ModuleNotFoundError","virtual environment","poetry install","conda activate","Jupyter","GitHub","SSL certificates","firewall","pip-system-certs","proxy connection",".env file"]},sidebar:"tutorialSidebar",previous:{title:"Installation and Updates",permalink:"/sdk/faqs/installation_updates"},next:{title:"General Operation",permalink:"/sdk/faqs/general_operation"}},p={},c=[],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"Import Errors - Faqs | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"When packages not included in the OpenBB installation are installed to the same environment as the SDK, it is possible that an incompatible build of a specific library (like SciPy) has overwritten the existing and creating a conflict. In this event, try creating a new environment containing only the OpenBB dependencies."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"ModuleNotFoundError: No module named '______'"),(0,o.kt)("p",null,"Before troubleshooting please verify that the recommended installation instructions were followed. These errors often can occur when the virtual environment has not been activated, or the ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry install")," command was skipped. Activate the OpenBB virtual environment created during the installation process prior to launching or importing the SDK."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Terminal"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"conda activate obb\npython terminal.py\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SDK"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"conda activate obb\nipython\nfrom openbb_terminal.sdk import openbb\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Jupyter"),":"),(0,o.kt)("p",null,"Check that the kernel selected for the session is the OpenBB virtual environment created during the installation process and then re-run the cell."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"from openbb_terminal.sdk import openbb\n")),(0,o.kt)("p",null,"There is also a possibility that a new dependency has been added to the code and it has not yet been installed in the environment. This may happen after updating the code from GitHub, but before running the ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry install")," install command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"poetry install -E all\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"SSL certificates fail to authorize"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"SSL: CERTIFICATE_VERIFY_FAILED\n")),(0,o.kt)("p",null,"An error message, similar to above, is usually encountered while attempting to use the OpenBB Platform from behind a firewall.  A workplace environment is typically the most common occurrence.  Try connecting to the internet directly through a home network to test the connection. If using a work computer and/or network,  we recommend speaking with the company's IT department prior to installing or running any software."),(0,o.kt)("p",null,"A potential solution is to try:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install pip-system-certs\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Cannot connect due to proxy connection."),(0,o.kt)("p",null,"Find the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file (located at the root of the user account folder: (",(0,o.kt)("inlineCode",{parentName:"p"},"~/.openbb_terminal/.env"),"), and add a line at the bottom of the file with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'HTTP_PROXY="<ADDRESS>" or HTTPS_PROXY="<ADDRESS>\u201d\n'))))}m.isMDXComponent=!0}}]);