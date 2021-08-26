"use strict";(self.webpackChunksoftware_engineering_reference=self.webpackChunksoftware_engineering_reference||[]).push([[514,608],{85247:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var a=n(67294),r=n(3905),i=n(46291),l=n(90261),o=n(86010),c=n(41773),s=n(93783),d=n(77898),u=n(55537),m=n(87462),p=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(24973),f=n(63366),b=n(36742),v=n(13919),E=n(18617),g="menuLinkText_1J2g",Z=["items"],_=["item"],k=["item","onItemClick","activePath"],C=["item","onItemClick","activePath"],N=function e(t,n){return"link"===t.type?(0,c.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},T=(0,a.memo)((function(e){var t=e.items,n=(0,f.Z)(e,Z);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(S,(0,m.Z)({key:t,item:e},n))})))}));function S(e){var t=e.item,n=(0,f.Z)(e,_);switch(t.type){case"category":return 0===t.items.length?null:a.createElement(y,(0,m.Z)({item:t},n));case"link":default:return a.createElement(I,(0,m.Z)({item:t},n))}}function y(e){var t,n=e.item,r=e.onItemClick,i=e.activePath,l=(0,f.Z)(e,k),s=n.items,d=n.label,u=n.collapsible,p=N(n,i),h=(0,c.uR)({initialState:function(){return!!u&&(!p&&n.collapsed)}}),b=h.collapsed,v=h.setCollapsed,E=h.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,i=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!i&&n&&r(!1)}),[t,i,n])}({isActive:p,collapsed:b,setCollapsed:v}),a.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},a.createElement("a",(0,m.Z)({className:(0,o.Z)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&p},t[g]=!u,t)),onClick:u?function(e){e.preventDefault(),E()}:void 0,href:u?"#":void 0},l),d),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},a.createElement(T,{items:s,tabIndex:b?-1:0,onItemClick:r,activePath:i})))}function I(e){var t=e.item,n=e.onItemClick,r=e.activePath,i=(0,f.Z)(e,C),l=t.href,c=t.label,s=N(t,r);return a.createElement("li",{className:"menu__list-item",key:c},a.createElement(b.Z,(0,m.Z)({className:(0,o.Z)("menu__link",{"menu__link--active":s}),"aria-current":s?"page":void 0,to:l},(0,v.Z)(l)&&{onClick:n},i),(0,v.Z)(l)?c:a.createElement("span",null,c,a.createElement(E.Z,null))))}var w="sidebar_15mo",x="sidebarWithHideableNavbar_267A",M="sidebarHidden_2kNb",A="sidebarLogo_3h0W",P="menu_Bmed",B="menuWithAnnouncementBar_2WvA",L="collapseSidebarButton_1CGd",F="collapseSidebarButtonIcon_3E-R";function H(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",L),onClick:t},a.createElement(p,{className:F}))}function D(e){var t,n,r=e.path,i=e.sidebar,l=e.onCollapse,s=e.isHidden,m=function(){var e=(0,c.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,d.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,c.LU)(),h=p.navbar.hideOnScroll,f=p.hideableSidebar,b=(0,c.nT)().isClosed;return a.createElement("div",{className:(0,o.Z)(w,(t={},t[x]=h,t[M]=s,t))},h&&a.createElement(u.Z,{tabIndex:-1,className:A}),a.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",P,(n={},n[B]=!b&&m,n))},a.createElement("ul",{className:"menu__list"},a.createElement(T,{items:i,activePath:r}))),f&&a.createElement(H,{onClick:l}))}var W=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:"menu__list"},a.createElement(T,{items:n,activePath:r,onItemClick:function(){return t()}}))};function R(e){return a.createElement(c.Cv,{component:W,props:e})}var O=a.memo(D),z=a.memo(R);function V(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(O,e),r&&a.createElement(z,e))}var Y=n(99105),j=n(16213),J=n(28408),U="details_1VDD";function K(e){var t=Object.assign({},e);return a.createElement(c.PO,(0,m.Z)({},t,{className:(0,o.Z)("alert alert--info",U,t.className)}))}var q=["mdxType","originalType"];var G={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,i=(r.mdxType,r.originalType,(0,f.Z)(r,q));return a.createElement(e.props.originalType,i)}return e}(e)}));return a.createElement(Y.Z,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(j.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(b.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(j.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(K,(0,m.Z)({},e,{summary:n}),r)},h1:(0,J.Z)("h1"),h2:(0,J.Z)("h2"),h3:(0,J.Z)("h3"),h4:(0,J.Z)("h4"),h5:(0,J.Z)("h5"),h6:(0,J.Z)("h6")},Q=n(24608),X=n(5977),$="backToTopButton_35hR",ee="backToTopButtonShow_18ls";function te(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var ne=function(){var e,t=(0,X.TH)(),n=te(),r=n.smoothScrollTop,i=n.cancelScrollToTop,l=(0,a.useState)(!1),c=l[0],s=l[1];return(0,d.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||i(),n<300)s(!1);else if(a){var r=document.documentElement.scrollHeight;n+window.innerHeight<r&&s(!0)}else s(!1)}}),[t]),a.createElement("button",{className:(0,o.Z)("clean-btn",$,(e={},e[ee]=c,e)),type:"button",onClick:function(){return r()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},ae={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function re(e){var t,n,i,s=e.currentDocRoute,d=e.versionMetadata,u=e.children,m=d.pluginId,f=d.version,b=s.sidebar,v=b?d.docsSidebars[b]:void 0,E=(0,a.useState)(!1),g=E[0],Z=E[1],_=(0,a.useState)(!1),k=_[0],C=_[1],N=(0,a.useCallback)((function(){k&&C(!1),Z(!g)}),[k]);return a.createElement(l.Z,{wrapperClassName:c.kM.wrapper.docPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:f,tag:(0,c.os)(m,f)}},a.createElement("div",{className:ae.docPage},a.createElement(ne,null),v&&a.createElement("aside",{className:(0,o.Z)(ae.docSidebarContainer,(t={},t[ae.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ae.docSidebarContainer)&&g&&C(!0)}},a.createElement(V,{key:b,sidebar:v,path:s.path,onCollapse:N,isHidden:k}),k&&a.createElement("div",{className:ae.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(p,{className:ae.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,o.Z)(ae.docMainContainer,(n={},n[ae.docMainContainerEnhanced]=g||!v,n))},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ae.docItemWrapper,(i={},i[ae.docItemWrapperEnhanced]=g,i))},a.createElement(r.Zo,{components:G},u)))))}var ie=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,X.LX)(r.pathname,e)}));return l?a.createElement(re,{currentDocRoute:l,versionMetadata:n},(0,i.Z)(t,{versionMetadata:n})):a.createElement(Q.default,e)}},28408:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(63366),r=n(87462),i=n(67294),l=n(86010),o=n(24973),c=n(41773),s="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",u=["id"],m=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,r=e.id,m=(0,a.Z)(e,u),p=(0,c.LU)().navbar.hideOnScroll;return r?i.createElement(t,m,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor","anchor__"+t,(n={},n[d]=p,n[s]=!p,n)),id:r}),m.children,i.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,m)});var t}},24608:function(e,t,n){n.r(t);var a=n(67294),r=n(90261),i=n(24973);t.default=function(){return a.createElement(r.Z,{title:(0,i.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);