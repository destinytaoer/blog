(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{396:function(t,a,n){},397:function(t,a,n){"use strict";var e=n(396);n.n(e).a},465:function(t,a,n){"use strict";n.r(a);var e=n(399),s=n(400),o={components:{Navbar:e.a,Footer:s.a},data:function(){return{}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar},t]}},mounted:function(){},methods:{}},r=(n(397),n(27)),i=Object(r.a)(o,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"theme-container",class:this.pageClasses},[this.shouldShowNavbar?a("Navbar"):this._e(),this._v(" "),a("Footer")],1)},[],!1,null,null,null);a.default=i.exports}}]);