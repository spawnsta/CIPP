"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[8275],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9491:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"updating",title:"Updating",description:"How to update CIPP when new versions are released.",slug:"/updating"},s=void 0,p={unversionedId:"updating/updating",id:"updating/updating",title:"Updating",description:"How to update CIPP when new versions are released.",source:"@site/docs/user/updating/index.md",sourceDirName:"updating",slug:"/updating",permalink:"/docs/user/updating",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/updating/index.md",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1646317313,formattedLastUpdatedAt:"03/03/2022",frontMatter:{id:"updating",title:"Updating",description:"How to update CIPP when new versions are released.",slug:"/updating"},sidebar:"userSidebar",previous:{title:"Notifications",permalink:"/docs/user/usingcipp/settings/notifications"}},c={},d=[{value:"Frontend",id:"frontend",level:2},{value:"Backend",id:"backend",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Manual vs Automatic Updating")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Note that the frontend updates automatically once you have done "Fetch & Merge" from GitHub, however the CIPP-API requires you to press a button on the resource in Azure itself.'))),(0,i.kt)("p",null,"Update your application to the latest release using the following instructions:"),(0,i.kt)("h2",{id:"frontend"},"Frontend"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"CIPP")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that if you receive a workflow error, check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/general/troubleshooting"},"Troubleshooting page for potential fixes")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to your own CIPP fork on GitHub "),(0,i.kt)("li",{parentName:"ul"},"Select Fetch Upstream"),(0,i.kt)("li",{parentName:"ul"},"Select Fetch and Merge")),(0,i.kt)("h2",{id:"backend"},"Backend"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"CIPP-API")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To update the backend, you must manually fetch from GitHub and update the Azure resource yourself, following the below instructions"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to your CIPP-API fork on GitHub"),(0,i.kt)("li",{parentName:"ul"},"Select Fetch Upstream"),(0,i.kt)("li",{parentName:"ul"},"Select Fetch and Merge"),(0,i.kt)("li",{parentName:"ul"},"Go to the Azure Portal"),(0,i.kt)("li",{parentName:"ul"},"Go to your CIPP resource group"),(0,i.kt)("li",{parentName:"ul"},"Select the Azure Function"),(0,i.kt)("li",{parentName:"ul"},'Select "Deployment Center"'),(0,i.kt)("li",{parentName:"ul"},"Select Sync.")),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Success!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/user/usingcipp/dashboard"},"Dashboard")," and you should see all green once updated.\nYou've now updated the application."))),(0,i.kt)("p",null,"If you don't see the update immediately - give the function app half an hour to finish updating itself."))}m.isMDXComponent=!0}}]);