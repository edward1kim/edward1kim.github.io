(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9WUU":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),l=a("Bl7J");function i(e){var t=e.data,a=t.allMarkdownRemark.edges.filter((function(e){return!e.node.frontmatter.isHead})),n=t.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.isHead}));return n=n.length>2?n.find((function(e){return"Home"===e.node.frontmatter.title})).node:n.find((function(e){return"Home"!==e.node.frontmatter.title})).node,r.a.createElement(l.a,{pageTitle:n.frontmatter.title},r.a.createElement("h1",{className:"headTitle"},n.frontmatter.title),a.map((function(e){var t=e.node;return r.a.createElement(o.a,{to:t.fields.slug,className:"postLink"},r.a.createElement("div",{className:"postBox",key:t.id},r.a.createElement("h3",{className:"postListsTitle"},t.frontmatter.title),r.a.createElement("h5",{className:"date"},t.frontmatter.date),r.a.createElement("p",{className:"postText"},t.excerpt)))})))}}}]);
//# sourceMappingURL=component---src-templates-post-lists-js-d51e191b42dc22c92c53.js.map