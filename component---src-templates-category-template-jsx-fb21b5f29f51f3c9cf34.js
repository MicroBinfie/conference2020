(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{153:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),s=a(0),o=a.n(s),c=a(155),i=a.n(c),l=a(156),p=a(157),m=(a(78),a(79),a(159)),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.category;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(o.a.createElement(m.a,{data:t,key:t.node.fields.slug}))}),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content__inner"},o.a.createElement("div",{className:"page"},o.a.createElement("h1",{className:"page__title"},t),o.a.createElement("div",{className:"page__body"},e))))},t}(o.a.Component);a.d(t,"pageQuery",function(){return _});var u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.category;return o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(i.a,{title:t+" - "+e}),o.a.createElement(p.a,this.props),o.a.createElement(d,this.props)))},t}(o.a.Component),_=(t.default=u,"4192777642")},159:function(e,t,a){"use strict";var n=a(6),r=a.n(n),s=a(0),o=a.n(s),c=a(38),i=a(164),l=a.n(i),p=(a(160),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,s=this.props.data.node.fields,i=s.slug,p=s.categorySlug;return o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post__meta"},o.a.createElement("time",{className:"post__meta-time",dateTime:l()(a).format("MMMM D, YYYY")},l()(a).format("MMMM YYYY")),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("span",{className:"post__meta-category",key:p},o.a.createElement(c.Link,{to:p,className:"post__meta-category-link"},n))),o.a.createElement("h2",{className:"post__title"},o.a.createElement(c.Link,{className:"post__title-link",to:i},t)),o.a.createElement("p",{className:"post__description"},r),o.a.createElement(c.Link,{className:"post__readmore",to:i},"Read"))},t}(o.a.Component));t.a=p},160:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-fb21b5f29f51f3c9cf34.js.map