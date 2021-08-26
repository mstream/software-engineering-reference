"use strict";(self.webpackChunksoftware_engineering_reference=self.webpackChunksoftware_engineering_reference||[]).push([[126],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),p=o,h=f["".concat(s,".").concat(p)]||f[p]||b[p]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93159:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},s="Blobs",l={unversionedId:"git/architecture/blobs",id:"git/architecture/blobs",isDocsHomePage:!1,title:"Blobs",description:"Blobs are binaries representing file contents. They are not associated",source:"@site/docs/git/architecture/blobs.mdx",sourceDirName:"git/architecture",slug:"/git/architecture/blobs",permalink:"/software-engineering-reference/git/architecture/blobs",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Remotes",permalink:"/software-engineering-reference/git/architecture/references/remotes"},next:{title:"Commits",permalink:"/software-engineering-reference/git/architecture/commits"}},u=[{value:"Hash of a Blob",id:"hash-of-a-blob",children:[]}],b={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blobs"},"Blobs"),(0,a.kt)("p",null,"Blobs are binaries representing file contents. They are not associated\nwith any particular file name or any other attribute."),(0,a.kt)("h2",{id:"hash-of-a-blob"},"Hash of a Blob"),(0,a.kt)("p",null,"The hash is from a 'blob' keyword, followed by a space character,\nthe of the contents in bytes,\na ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Null_character"},"NULL")," character\nand the file contents itself.\nThat is to decrease possibility of hash collision with different\ntypes of objects.\nThe most obvious one would be an empty blob with an\nempty ",(0,a.kt)("a",{parentName:"p",href:"./trees"},"tree"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo -e -n 'blob 13\\0BLOB_CONTENTS' | shasum -a 1\n# >>> b9bb0bbb048fcfb90a6f879bd512b8548a9e576b -\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo -n 'BLOB_CONTENTS' | git hash-object --stdin -t blob\n# >>> b9bb0bbb048fcfb90a6f879bd512b8548a9e576b\n")))}f.isMDXComponent=!0}}]);