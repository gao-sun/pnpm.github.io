"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3019],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=a(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,p(p({ref:t},s),{},{components:n})):r.createElement(m,p({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,p[1]=c;for(var a=2;a<o;a++)p[a]=n[a];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9612:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>a,toc:()=>s,default:()=>u});var r=n(2245),i=n(5903),o=(n(9496),n(9613)),p=["components"],c={id:"scripts",title:"Scripts"},l=void 0,a={unversionedId:"scripts",id:"version-6.x/scripts",isDocsHomePage:!1,title:"Scripts",description:"How pnpm handles the scripts field of package.json.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/tr/scripts",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"scripts",title:"Scripts"},sidebar:"version-6.x/docs",previous:{title:"Filtreleme",permalink:"/tr/filtering"},next:{title:"pnpm add <paket-ad\u0131>",permalink:"/tr/cli/add"}},s=[{value:"Lifecycle Scripts",id:"lifecycle-scripts",children:[{value:"<code>pnpm:devPreinstall</code>",id:"pnpmdevpreinstall",children:[],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How pnpm handles the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," field of ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"lifecycle-scripts"},"Lifecycle Scripts"),(0,o.kt)("h3",{id:"pnpmdevpreinstall"},(0,o.kt)("inlineCode",{parentName:"h3"},"pnpm:devPreinstall")),(0,o.kt)("p",null,"Added in: v6.21.0"),(0,o.kt)("p",null,"Runs only on local ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,o.kt)("p",null,"Runs before any dependency is installed."),(0,o.kt)("p",null,"This script is executed only when set in the root project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}u.isMDXComponent=!0}}]);