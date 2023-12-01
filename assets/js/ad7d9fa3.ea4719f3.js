"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17781],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(35742);function o(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},58072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(88828);const i={title:"Architectural Considerations",sidebar_position:6,description:"This guide provides insights into the architectural considerations of the OpenBB Platform. It covers the key classes, import statements, and the TET pattern used in building the Fetcher classes.",keywords:["OpenBB Platform Architecture","Key Classes","Import Statements","TET Pattern","Fetcher Classes","Core Dependencies"]},s=void 0,l={unversionedId:"platform/development/developer-guidelines/architectural_considerations",id:"platform/development/developer-guidelines/architectural_considerations",title:"Architectural Considerations",description:"This guide provides insights into the architectural considerations of the OpenBB Platform. It covers the key classes, import statements, and the TET pattern used in building the Fetcher classes.",source:"@site/content/platform/development/developer-guidelines/architectural_considerations.md",sourceDirName:"platform/development/developer-guidelines",slug:"/platform/development/developer-guidelines/architectural_considerations",permalink:"/platform/development/developer-guidelines/architectural_considerations",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/developer-guidelines/architectural_considerations.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1701458419,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:6,frontMatter:{title:"Architectural Considerations",sidebar_position:6,description:"This guide provides insights into the architectural considerations of the OpenBB Platform. It covers the key classes, import statements, and the TET pattern used in building the Fetcher classes.",keywords:["OpenBB Platform Architecture","Key Classes","Import Statements","TET Pattern","Fetcher Classes","Core Dependencies"]},sidebar:"tutorialSidebar",previous:{title:"Validators",permalink:"/platform/development/developer-guidelines/validators"},next:{title:"OpenBB OBBject",permalink:"/platform/development/developer-guidelines/obbject"}},p={},d=[{value:"Important classes",id:"important-classes",level:2},{value:"The <code>Data</code> class",id:"the-data-class",level:3},{value:"The <code>QueryParams</code> class",id:"the-queryparams-class",level:3},{value:"The <code>Fetcher</code> class",id:"the-fetcher-class",level:3},{value:"The <code>OBBject</code> class",id:"the-obbject-class",level:3},{value:"The <code>Router</code> class",id:"the-router-class",level:3},{value:"Import statements",id:"import-statements",level:2},{value:"The TET pattern",id:"the-tet-pattern",level:2},{value:"Data processing commands",id:"data-processing-commands",level:2},{value:"Python Interface",id:"python-interface",level:2},{value:"API Interface",id:"api-interface",level:2},{value:"Core Dependencies",id:"core-dependencies",level:2},{value:"Importance of a Lean Core",id:"importance-of-a-lean-core",level:3}],c={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Architectural Considerations - Developer Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("h2",{id:"important-classes"},"Important classes"),(0,r.kt)("h3",{id:"the-data-class"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"Data")," class"),(0,r.kt)("p",null,"The OpenBB Standardized Data Model."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," class is a flexible Pydantic model designed to accommodate various data structures\nfor OpenBB's data processing pipeline as it's structured to support dynamic field definitions."),(0,r.kt)("p",null,"The model leverages Pydantic's powerful validation features to ensure data integrity while\nproviding the flexibility to handle extra fields that are not explicitly defined in the model's\nschema. This makes the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," class ideal for working with datasets that may have varying\nstructures or come from heterogeneous sources."),(0,r.kt)("p",null,"Key Features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dynamic field support: Can dynamically handle fields that are not pre-defined in the model,\nallowing for great flexibility in dealing with different data shapes."),(0,r.kt)("li",{parentName:"ul"},"Alias handling: Utilizes an aliasing mechanism to maintain compatibility with different naming\nconventions across various data formats.")),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," class can be instantiated with keyword arguments corresponding to the fields of the\nexpected data. It can also parse and validate data from JSON or other serializable formats, and\nconvert them to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," instance for easy manipulation and access."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_core.provider.abstract.data import Data\n\n# Direct instantiation\ndata_record = Data(name="OpenBB", value=42)\n\n# Conversion from a dictionary\ndata_dict = {"name": "OpenBB", "value": 42}\ndata_record = Data(**data_dict)\n')),(0,r.kt)("p",null,"The class is highly extensible and can be subclassed to create more specific models tailored to\nparticular datasets or domains, while still benefiting from the base functionality provided by the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," class."),(0,r.kt)("h3",{id:"the-queryparams-class"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"QueryParams")," class"),(0,r.kt)("p",null,"The QueryParams class is a standardized model for handling query input parameters in the OpenBB platform. It extends the BaseModel from the Pydantic library, which provides runtime data validation and serialization."),(0,r.kt)("p",null,"The class includes a dictionary, ",(0,r.kt)("inlineCode",{parentName:"p"},"__alias_dict__"),", which can be used to map the original parameter names to aliases. This can be useful when dealing with different data providers that may use different naming conventions for similar parameters."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"__repr__")," method provides a string representation of the QueryParams object, which includes the class name and a list of the model's parameters and their values."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"model_config")," attribute is a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigDict")," instance that allows extra fields not defined in the model and populates the model by name."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"model_dump")," method is used to serialize the model into a dictionary. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"__alias_dict__")," is not empty, it will use the aliases defined in it for the keys in the returned dictionary. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"__alias_dict__")," is empty, it will return the original serialized model."),(0,r.kt)("h3",{id:"the-fetcher-class"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"Fetcher")," class"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," class is an abstract base class designed to provide a structured way to fetch data from various providers. It uses generics to allow for flexibility in the types of queries, data, and return values it handles."),(0,r.kt)("p",null,"The class defines a series of methods that must be implemented by any subclass: ",(0,r.kt)("inlineCode",{parentName:"p"},"transform_query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"extract_data"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"transform_data"),". These methods represent the core steps of fetching data: transforming input parameters into a provider-specific query, extracting data from the provider using the query, and then transforming the provider-specific data into a desired format."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch_data")," method orchestrates these steps, taking in parameters and optional credentials, and returning the transformed data."),(0,r.kt)("p",null,"The class also includes a test method for validating the functionality of a fetcher, performing assertions on each stage of the fetch process."),(0,r.kt)("p",null,"Additionally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," class uses a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"classproperty")," decorator to define class-level properties that return the types of the query parameters, return value, and data."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"require_credentials")," class variable indicates whether credentials are needed to fetch data from the provider. This can be overridden by subclasses as needed."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," class implementation is based on the ",(0,r.kt)("a",{parentName:"p",href:"/platform/development/developer-guidelines/architectural_considerations#the-tet-pattern"},"TET pattern"),". This pattern imposes a standardized structure, namely:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Transform the query: the output of this method should be ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryParams")," child."),(0,r.kt)("li",{parentName:"ul"},"Extract the data: the output of this method can be ",(0,r.kt)("inlineCode",{parentName:"li"},"Any")," but it's recommended to be a ",(0,r.kt)("inlineCode",{parentName:"li"},"Dict")," (will facilitate the next step of the fetcher's action, the data transformation)."),(0,r.kt)("li",{parentName:"ul"},"Transform the data: the output of this method should be a ",(0,r.kt)("inlineCode",{parentName:"li"},"List[Data]")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Data")," (or a child of it)."))),(0,r.kt)("h3",{id:"the-obbject-class"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"OBBject")," class"),(0,r.kt)("p",null,"The OBBject class is a generic class in the OpenBB platform that represents a standardized object for handling and manipulating data fetched from various providers. It extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tagged")," class and uses Python's generics to allow flexibility in the type of results it can handle."),(0,r.kt)("p",null,"The class includes several fields such as results, provider, warnings, chart, and extra, which respectively represent the fetched data, the data provider, any warnings generated during data fetching, an optional chart object for visualizing the data, and a dictionary for any additional information."),(0,r.kt)("p",null,"The class provides several methods for converting the fetched data into different formats, including ",(0,r.kt)("inlineCode",{parentName:"p"},"to_df")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"to_dataframe"),") for converting to a pandas DataFrame, ",(0,r.kt)("inlineCode",{parentName:"p"},"to_polars")," for converting to a Polars DataFrame, ",(0,r.kt)("inlineCode",{parentName:"p"},"to_numpy")," for converting to a numpy array, and ",(0,r.kt)("inlineCode",{parentName:"p"},"to_dict")," for converting to a dictionary."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"to_chart")," method allows for creating or updating a chart based on the fetched data, and the show method is used to display the chart."),(0,r.kt)("p",null,"The class also includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"__repr__")," method for a human-readable representation of the object, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"model_parametrized_name method")," for returning the model name with its parameters."),(0,r.kt)("h3",{id:"the-router-class"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"Router")," class"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Router")," class in the OpenBB platform is responsible for managing and routing API requests. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"APIRouter")," from the FastAPI library to handle routing."),(0,r.kt)("p",null,"The class includes a command method that allows for the registration of callable functions as API endpoints. This method takes care of setting up the API route, including defining the HTTP methods, response models, operation IDs, and other necessary parameters for the API endpoint."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"include_router")," method allows for the inclusion of another router, effectively merging the routes from the included router into the current one."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Router")," class also interacts with the ",(0,r.kt)("inlineCode",{parentName:"p"},"SignatureInspector")," class to validate and complete function signatures, ensuring that the functions registered as API endpoints have the correct parameters and return types."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"api_router")," property provides access to the underlying APIRouter instance, allowing for direct interaction with the FastAPI routing system if needed."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Router")," class exposes a ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," decorator that allows for the registration of callable functions as API endpoints. This method takes care of setting up the API route, including defining the HTTP methods, response models, operation IDs, and other necessary parameters for the API endpoint."),(0,r.kt)("p",{parentName:"admonition"},"This decorator enforces that the decorated function (of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Callable"),") returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"OBBject")," instance. I.e., the signature of a decorated function should translate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Callable[P, OBBject]")," (a callable object (like a function) that takes arguments of type ",(0,r.kt)("inlineCode",{parentName:"p"},"P")," and returns an object of type ",(0,r.kt)("inlineCode",{parentName:"p"},"OBBject"),").")),(0,r.kt)("h2",{id:"import-statements"},"Import statements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n# The `Data` class\nfrom openbb_core.provider.abstract.data import Data\n\n# The `QueryParams` class\nfrom openbb_core.provider.abstract.query_params import QueryParams\n\n# The `Fetcher` class\nfrom openbb_core.provider.abstract.fetcher import Fetcher\n\n# The `OBBject` class\nfrom openbb_core.app.model.obbject import OBBject\n\n# The `Router` class\nfrom openbb_core.app.router import Router\n\n")),(0,r.kt)("h2",{id:"the-tet-pattern"},"The TET pattern"),(0,r.kt)("p",null,"The TET pattern is a pattern that we use to build the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," classes. It stands for ",(0,r.kt)("strong",{parentName:"p"},"Transform, Extract, Transform"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/48914296/ae9908be-00c0-40af-8acb-afeeb9629f2b",alt:"Diagram"})),(0,r.kt)("p",null,"As the OpenBB Platform has its own standardization framework and the data fetcher are a very important part of it, we need to ensure that the data is transformed and extracted in a consistent way, to help us do that, we came up with the ",(0,r.kt)("strong",{parentName:"p"},"TET")," pattern, which helps us build and ship faster as we have a clear structure on how to build the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," classes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Transform")," query"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"transform_query(params: Dict[str, Any])\n")),(0,r.kt)("p",{parentName:"li"},"Transforms the query parameters. Given a ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," dictionary this method should return the transformed query parameters as a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/core/openbb_core/provider/abstract/query_params.py"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryParams"))," child so that we can leverage the pydantic model schemas and validation into the next step. This might also be the place do perform some transformations on any given parameter, i.e., if you want to transform an empty date into a ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime.now().date()"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Extract")," data"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"extract_data(query: ExampleQueryParams,credentials: Optional[Dict[str, str]],**kwargs: Any,) -> Dict\n")),(0,r.kt)("p",{parentName:"li"},"Makes the request to the API endpoint and returns the raw data. Given the transformed query parameters, the credentials and any other extra arguments, this method should return the raw data as a dictionary.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Transform")," data"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"transform_data(query: ExampleQueryParams, data: Dict, **kwargs: Any) -> List[ExampleHistoricalData]\n")),(0,r.kt)("p",{parentName:"li"},"Transforms the raw data into the defined data model. Given the transformed query parameters (might be useful for some filtering), the raw data and any other extra arguments, this method should return the transformed data as a list of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/core/openbb_core/provider/abstract/data.py"},(0,r.kt)("inlineCode",{parentName:"a"},"Data"))," children."))),(0,r.kt)("h2",{id:"data-processing-commands"},"Data processing commands"),(0,r.kt)("p",null,"The data processing commands are commands that are used to process the data that may or may not come from the OpenBB Platform."),(0,r.kt)("p",null,"In order to create a data processing framework general enough to be used by any extension, we've created a special abstract class called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/core/openbb_core/provider/abstract/data.py"},(0,r.kt)("inlineCode",{parentName:"a"},"Data"))," which ",(0,r.kt)("strong",{parentName:"p"},"all")," standardized (and consequently its child classes) will inherit from."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why is this important?")),(0,r.kt)("p",null,"We ensure that all ",(0,r.kt)("inlineCode",{parentName:"p"},"OBBject.results")," will share a common ground on which we can apply out-of-the-box data processing commands, such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"ta"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"qa"),", or the ",(0,r.kt)("inlineCode",{parentName:"p"},"econometrics")," menus."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"But what's really the ",(0,r.kt)("inlineCode",{parentName:"strong"},"Data")," class?")),(0,r.kt)("p",null,"It's a pydantic model that inherits from the ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseModel")," and can contain any given number of extra fields. In practice, it looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\n\nres = obb.equity.price.historical("AAPL")\nres.results[0]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"AVEquityHistoricalData(date=2023-11-03 00:00:00, open=174.24, high=176.82, low=173.35, close=176.65, volume=79829246.0, vwap=None, adj_close=None, dividend_amount=None, split_coefficient=None)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AVEquityHistoricalData")," class, is a child class of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," class.")),(0,r.kt)("p",null,"Note how we've indexed to get only the first element of the ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," list (which represents a single row, if we want to think about it as a tabular output). This simply means that we are getting a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"AVEquityHistoricalData")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"obb.equity.price.historical")," command. Or, we can also say that that's equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"List[Data]"),"!"),(0,r.kt)("p",null,"This is very powerful, as we can now apply any data processing command to the ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," list, without worrying about the underlying data structure."),(0,r.kt)("p",null,"That's why, on data processing commands (such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"ta")," menu) we will find on its function signature the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\ndef ema(\n        self,\n        data: Union[List[Data], pandas.DataFrame],\n        target: str = "close",\n        index: str = "date",\n        length: int = 50,\n        offset: int = 0,\n        chart: bool = False,\n    ) -> OBBject[List[Data]]:\n\n    ...\n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," can actually be a different type, but we'll focus on the ",(0,r.kt)("inlineCode",{parentName:"p"},"List[Data]")," case for now.")),(0,r.kt)("p",null,"Does that mean that I can only use the data processing commands if I instantiate a class that inherits from ",(0,r.kt)("inlineCode",{parentName:"p"},"Data"),"?\nNot at all! Consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom openbb_core.provider.abstract.data import Data\nmy_data_item_1 = {"open": 1, "high": 2, "low": 3, "close": 4, "volume": 5, "date": "2020-01-01"}\nmy_data_item_1_as_data = Data.model_validate(my_data_item_1)\nmy_data_item_1_as_data\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'Data(open=1, high=2, low=3, close=4, volume=5, date="2020-01-01")\n')),(0,r.kt)("p",null,"This means that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," class is cleaver enough to understand that you are passing a dictionary and it will try to validate it for you."),(0,r.kt)("p",null,"In other words, if you're using data that doesn't come from the OpenBB Platform, you only need to ensure it's parsable by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," class and you'll be able to use the data processing commands."),(0,r.kt)("p",null,"In other words, imagine you have a dataframe that you want to use with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ta")," menu. You can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nres = obb.equity.price.historical("AAPL")\nmy_df = res.to_dataframe() # yes, you can convert your OBBject.results into a dataframe out-of-the-box!\nmy_records = df.to_dict(orient="records")\n\nobb.ta.ema(data=my_record)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"OBBject\n\nresults: [{'close': 77.62, 'close_EMA_50': None}, {'close': 80.25, 'close_EMA_50': ...}] # this is a `List[Data]` yet again\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that that for this example we've used the ",(0,r.kt)("inlineCode",{parentName:"p"},"OBBject.to_dataframe()")," method to have an example dataframe, but it could be any other dataframe that you have.")),(0,r.kt)("h2",{id:"python-interface"},"Python Interface"),(0,r.kt)("p",null,"When using the OpenBB Platform on a Python Interface, docstrings and type hints are your best friends as it provides plenty of context on how to use the commands."),(0,r.kt)("p",null,"Looking at an example on the ",(0,r.kt)("inlineCode",{parentName:"p"},"ta")," menu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def ema(\n        self,\n        data: Union[List[Data], pandas.DataFrame],\n        target: str = "close",\n        index: str = "date",\n        length: int = 50,\n        offset: int = 0,\n        chart: bool = False,\n    ) -> OBBject[List[Data]]:\n')),(0,r.kt)("p",null,"We can easily deduct that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ema")," command accept data in the formats of ",(0,r.kt)("inlineCode",{parentName:"p"},"List[Data]")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas.DataFrame"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that other types might be added in the future.")),(0,r.kt)("h2",{id:"api-interface"},"API Interface"),(0,r.kt)("p",null,"When using the OpenBB Platform on a API Interface, the types are a bit more limited than on the Python one, as, for example, we can't use ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas.DataFrame")," as a type. However the same principles apply for what ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," means, i.e., any given data processing command, which are characterized as POST endpoints on the API, will accept data as a list of records on the ",(0,r.kt)("strong",{parentName:"p"},"request body"),", i.e.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "open": 80,\n        "high": 80.69,\n        "low": 77.37,\n        "close": 77.62,\n        "volume": 2487300\n    }\n]\n')),(0,r.kt)("h2",{id:"core-dependencies"},"Core Dependencies"),(0,r.kt)("p",null,"The OpenBB Platform core relies on a set of carefully selected Python libraries to provide its functionality. These dependencies include:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that, in this context by core we mean the ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb-core")," package.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FastAPI for building the API."),(0,r.kt)("li",{parentName:"ul"},"Uvicorn as the ASGI server."),(0,r.kt)("li",{parentName:"ul"},"Pandas for data manipulation and analysis."),(0,r.kt)("li",{parentName:"ul"},"Pydantic for data validation and serialization using Python type annotations."),(0,r.kt)("li",{parentName:"ul"},"Requests for making HTTP requests."),(0,r.kt)("li",{parentName:"ul"},"Websockets for handling WebSocket connections.")),(0,r.kt)("p",null,"These dependencies are specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," files."),(0,r.kt)("h3",{id:"importance-of-a-lean-core"},"Importance of a Lean Core"),(0,r.kt)("p",null,"Keeping the OpenBB Platform core as lean as possible is crucial for maintaining the platform's performance, ease of use, and flexibility. A lean core means faster installation times, less memory usage, and overall better performance. It also reduces the risk of conflicts between dependencies and makes the platform easier to maintain and update."),(0,r.kt)("p",null,"Moreover, a lean core allows for greater flexibility. Users of the platform can add additional functionality through extensions without being burdened by unnecessary core dependencies. This makes the OpenBB Platform adaptable to a wide range of use cases and requirements."))}h.isMDXComponent=!0}}]);