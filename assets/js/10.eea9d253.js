(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{151:function(e,t,r){"use strict";var s={computed:{unreleased(){return null!==this.version.apiTag.match(/(draft|alpha|beta)/i)},versioned(){return null!==this.$page.regularPath.match(/\/documentation\/([^\/]+)\//)},otherVersions(){return this.$site.themeConfig.versions.map((e,t)=>{var r=this.$site.themeConfig.versions[this.versionIndex],s=this.$site.themeConfig.versions[t];return e.regularPath=this.$page.regularPath.replace(r.path,s.path),e}).filter((e,t)=>t!==this.versionIndex&&this.$site.pages.findIndex(t=>t.regularPath==e.regularPath)>=0)},version(){return this.$site.themeConfig.versions[this.versionIndex]},defaultVersion(){return this.$site.themeConfig.versions[this.$site.themeConfig.defaultVersion]},versionIndex(){const{themeConfig:e}=this.$site;var t=this.$page.regularPath.match(/\/documentation\/([^\/]+)\//);if(Array.isArray(t)&&"string"==typeof t[1])for(var r in e.versions)if(e.versions[r].folder===t[1])return parseInt(r);return 0}}},n=r(3),i=Object(n.a)(s,void 0,void 0,!1,null,null,null);t.a=i.exports},225:function(e,t,r){"use strict";r.r(t);var s={name:"ApiSpec",mixins:[r(151).a],computed:{specUrl(){return"/documentation/"+this.version.folder+"/developers/api/openapi."+(this.version.apiFormat?this.version.apiFormat:"yaml")}},data:()=>({yOffset:0}),mounted(){this.yOffset=Math.round(document.querySelector("header").getBoundingClientRect().bottom);var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.js",document.getElementsByTagName("head")[0].appendChild(e)}},n=r(3),i=Object(n.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"apiSpec"},[t("redoc",{attrs:{"spec-url":this.specUrl,"path-in-middle-panel":"true","expand-responses":"200,201,202,203,204","scroll-y-offset":this.yOffset}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);