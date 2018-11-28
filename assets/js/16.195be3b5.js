(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{163:function(t,s,a){"use strict";a.r(s);a(21);var n={mounted:function(){(t=new XMLHttpRequest).open("GET","https://img.shields.io/maven-central/v/com.baomidou/mybatis-plus-boot-starter.json",!1),t.send(null);var t,s=JSON.parse(t.responseText).value.replace("v","");(t=new XMLHttpRequest).open("GET","https://img.shields.io/maven-central/v/com.baomidou/mybatis-plus.json",!1),t.send(null);for(var a=JSON.parse(t.responseText).value.replace("v",""),n=document.querySelectorAll("code"),e=0;e<n.length;e++)n[e].innerHTML=n[e].innerHTML.replace("starter-latest-version",s).replace("latest-version",a)}},e=a(0),r=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("JDK7 以及下的请参考 MP2.0 版本，地址："),a("a",{attrs:{href:"https://baomidou.gitee.io/mybatis-plus-doc/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.0 文档"),a("OutboundLink")],1)])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Maven：")]),t._v(" "),t._m(5),a("p",[t._v("Gradle：")]),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("Maven:")]),t._v(" "),t._m(8),a("p",[t._v("Gradle：")]),t._v(" "),t._m(9),a("hr"),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("快照 SNAPSHOT 版本需要添加仓库，且版本号为快照版本。")]),t._v(" "),a("p",[t._v("Maven：")]),t._v(" "),t._m(12),a("p",[t._v("Gradle：")]),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("全新的 "),s("code",[this._v("MyBatis-Plus")]),this._v(" 3.0 版本基于 JDK8，提供了 "),s("code",[this._v("lambda")]),this._v(" 形式的调用，所以安装集成 MP3.0 要求如下：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("JDK 8+")]),this._v(" "),s("li",[this._v("Maven or Gradle")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"release"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#release","aria-hidden":"true"}},[this._v("#")]),this._v(" Release")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"spring-boot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Boot")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.baomidou"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("mybatis-plus-boot-starter"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("starter-latest-version"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("compile group"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'com.baomidou'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'mybatis-plus-boot-starter'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'starter-latest-version'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"spring-mvc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring MVC")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.baomidou"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("mybatis-plus"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("latest-version"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("compile group"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'com.baomidou'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'mybatis-plus'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'latest-version'")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("引入 "),a("code",[t._v("MyBatis-Plus")]),t._v(" 之后请不要再次引入 "),a("code",[t._v("MyBatis")]),t._v(" 以及 "),a("code",[t._v("MyBatis-Spring")]),t._v("，以避免因版本差异导致的问题。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"snapshot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#snapshot","aria-hidden":"true"}},[this._v("#")]),this._v(" Snapshot")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("repository")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("snapshots"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("https://oss.sonatype.org/content/repositories/snapshots/"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("repository")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("repositories "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    maven "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),a("span",{attrs:{class:"token string"}},[t._v("'https://oss.sonatype.org/content/repositories/snapshots/'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);r.options.__file="install.md";s.default=r.exports}}]);