(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9WUU":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("Bl7J");function c(e){var t=e.data,a=t.allMarkdownRemark.edges.filter((function(e){return!e.node.frontmatter.isHead})),n=t.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.isHead}))[0].node;return r.a.createElement(i.a,null,r.a.createElement("h1",null,n.frontmatter.title),a.map((function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement("h3",{className:"postListsTitle"},r.a.createElement(l.a,{to:t.fields.slug},t.frontmatter.title," ")),r.a.createElement("h5",{className:"date"},t.frontmatter.date),r.a.createElement("p",{className:"postText"},t.excerpt))})))}},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=function(e){e.siteTitle;var t=e.menuLinks;return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"navbar"},t.map((function(e){return r.a.createElement("li",{className:"navbarLink",key:e.name},r.a.createElement(l.a,{to:e.link},e.name))})))))))};i.defaultProps={siteTitle:""};var c=i;t.a=function(e){var t=e.children,a=Object(l.c)("1947816842");return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{menuLinks:a.site.siteMetadata.menuLinks,siteTitle:a.site.siteMetadata.title}),r.a.createElement("div",{className:"layoutMain"},r.a.createElement("main",null,t)),r.a.createElement("footer",null,r.a.createElement("h5",{classNae:"footerDetails"},"© ",(new Date).getFullYear()," Edward Kim, Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}}}]);
//# sourceMappingURL=component---src-templates-post-lists-js-f3ef630d789abe3caf11.js.map